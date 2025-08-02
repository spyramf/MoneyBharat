
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useInvestorAuth } from '@/context/InvestorAuthContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import InvestorPageLayout from '@/components/investor/InvestorPageLayout';
import InvestorCategorySelector from '@/components/investor/InvestorCategorySelector';
import HolderDetailsForm from '@/components/investor/HolderDetailsForm';
import PersonalInfoForm from '@/components/investor/PersonalInfoForm';
import { Label } from '@/components/ui/label';

const signupSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
  investorCategory: z.enum(['individual', 'non-individual']),
  holdingType: z.string().min(1, 'Please select holding type'),
  residentialStatus: z.string().min(1, 'Please select residential status'),
  identityType: z.enum(['pan', 'pekrn']),
  panNumber: z.string().min(1, 'PAN/PEKRN number is required'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
}).refine((data) => {
  if (data.identityType === 'pan') {
    return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(data.panNumber);
  }
  return data.panNumber.length >= 10;
}, {
  message: "Please enter a valid PAN number (format: ABCDE1234F) or PEKRN",
  path: ["panNumber"],
});

type SignupFormData = z.infer<typeof signupSchema>;

const InvestorSignup = () => {
  const [investorCategory, setInvestorCategory] = useState<'individual' | 'non-individual'>('individual');
  const [isProcessing, setIsProcessing] = useState(false);
  const { signUp, signOut, user, checkExistingClient } = useInvestorAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      investorCategory: 'individual',
      identityType: 'pan',
    },
  });

  const watchedInvestorCategory = watch('investorCategory');
  const watchedIdentityType = watch('identityType');

  // Redirect if user is already logged in and has completed onboarding
  useEffect(() => {
    if (user && !isProcessing) {
      const hasCompletedOnboarding = localStorage.getItem('onboardingCompleted');
      if (hasCompletedOnboarding) {
        navigate('/investor/dashboard');
      }
    }
  }, [user, navigate, isProcessing]);

  const saveClientData = async (userData: SignupFormData, userId: string) => {
    console.log('Saving client data for user:', userId);
    
    const clientData = {
      investor_id: userId,
      name: `${userData.firstName} ${userData.lastName}`,
      email: userData.email,
      phone: userData.phone,
      investor_category: userData.investorCategory,
      holding_type: userData.holdingType,
      residential_status: userData.residentialStatus,
      identity_type: userData.identityType,
      pan_number: userData.panNumber,
      date_of_birth: userData.dateOfBirth,
      onboarding_status: 'incomplete',
      kyc_status: 'pending',
    };
    
    const { error } = await supabase
      .from('clients')
      .insert(clientData);
    
    if (error) {
      console.error('Error saving client data:', error);
      throw error;
    }
    
    console.log('Client data saved successfully');
  };

  const onSubmit = async (data: SignupFormData) => {
    if (isProcessing) return;
    
    try {
      console.log('Starting signup process for:', data.email);
      setIsProcessing(true);
      
      // First, check if client already exists by email
      const existingClientResult = await checkExistingClient(data.email);
      
      if (existingClientResult.error) {
        console.error('Error checking existing client:', existingClientResult.error);
        toast({
          title: "Error",
          description: "Unable to check existing account. Please try again.",
          variant: "destructive",
        });
        setIsProcessing(false);
        return;
      }
      
      if (existingClientResult.exists) {
        console.log('Client already exists, redirecting to next step');
        toast({
          title: "Account Found",
          description: `Welcome back ${existingClientResult.client?.name}! Proceeding to bank account setup.`,
        });
        navigate('/investor/bank-account');
        setIsProcessing(false);
        return;
      }
      
      // If client doesn't exist, proceed with normal signup
      console.log('No existing client found, creating new account');
      
      const userData = {
        first_name: data.firstName,
        last_name: data.lastName,
        phone: data.phone,
        investor_category: data.investorCategory,
        holding_type: data.holdingType,
        residential_status: data.residentialStatus,
        identity_type: data.identityType,
        pan_number: data.panNumber,
        date_of_birth: data.dateOfBirth,
      };
      
      const signupResult = await signUp(data.email, data.password, userData);
      
      if (signupResult.error) {
        console.error('Signup error:', signupResult.error);
        
        if (signupResult.error.message?.includes('already been registered') || 
            signupResult.error.message?.includes('already exists')) {
          toast({
            title: "Account Already Exists",
            description: "An account with this email already exists. Please try logging in instead.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Registration Failed",
            description: signupResult.error.message || "Failed to create account. Please try again.",
            variant: "destructive",
          });
        }
        
        setIsProcessing(false);
        return;
      }
      
      console.log('Signup successful, user created and logged in:', signupResult.user?.email);
      
      if (signupResult.user) {
        try {
          await saveClientData(data, signupResult.user.id);
          
          toast({
            title: "Account Created Successfully",
            description: "Welcome! Please complete your bank account details to finish setup.",
          });
          
          console.log('Navigating to bank account page...');
          navigate('/investor/bank-account');
          
        } catch (clientError) {
          console.error('Error saving client data:', clientError);
          toast({
            title: "Account Created",
            description: "Your account was created but there was an issue saving additional details. Please complete your profile.",
            variant: "default",
          });
          navigate('/investor/bank-account');
        }
      } else {
        console.error('No user returned from signup');
        toast({
          title: "Registration Issue",
          description: "Account may have been created. Please try logging in.",
          variant: "default",
        });
        navigate('/investor/login');
      }
      
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <InvestorPageLayout
      title="Welcome aboard!"
      pageTitle="Welcome, Create your Account"
      onSignOut={signOut}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <InvestorCategorySelector
          selectedCategory={watchedInvestorCategory}
          onCategoryChange={setInvestorCategory}
          setValue={setValue}
          errors={errors}
        />

        {/* Holding Type and Residential Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="holdingType">
              Holding Type <span className="text-red-500">*</span>
            </Label>
            <Select onValueChange={(value) => setValue('holdingType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Single" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Single</SelectItem>
                <SelectItem value="joint">Joint</SelectItem>
                <SelectItem value="anyone">Anyone or Survivor</SelectItem>
              </SelectContent>
            </Select>
            {errors.holdingType && (
              <p className="text-sm text-red-600">{errors.holdingType?.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="residentialStatus">
              Residential Status <span className="text-red-500">*</span>
            </Label>
            <Select onValueChange={(value) => setValue('residentialStatus', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Resident Individual" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="resident-individual">Resident Individual</SelectItem>
                <SelectItem value="non-resident-indian">Non-Resident Indian</SelectItem>
                <SelectItem value="person-of-indian-origin">Person of Indian Origin</SelectItem>
                <SelectItem value="foreign-national">Foreign National</SelectItem>
              </SelectContent>
            </Select>
            {errors.residentialStatus && (
              <p className="text-sm text-red-600">{errors.residentialStatus?.message}</p>
            )}
          </div>
        </div>

        <HolderDetailsForm
          register={register}
          errors={errors}
          setValue={setValue}
          watchedIdentityType={watchedIdentityType}
        />

        <PersonalInfoForm
          register={register}
          errors={errors}
        />

        <Button
          type="submit"
          disabled={isSubmitting || isProcessing}
          className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium"
        >
          {isSubmitting || isProcessing ? 'Processing...' : 'Create Account'}
        </Button>

        <div className="text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/investor/login" className="text-blue-600 hover:underline font-medium">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </InvestorPageLayout>
  );
};

export default InvestorSignup;

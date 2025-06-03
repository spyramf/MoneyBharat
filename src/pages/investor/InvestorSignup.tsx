
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
  const { signUp, signOut, user } = useInvestorAuth();
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
      
      // Create user metadata for Supabase Auth
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
      
      // Sign up with Supabase Auth
      const { error: signupError } = await signUp(data.email, data.password, userData);
      
      if (signupError) {
        console.error('Signup error:', signupError);
        
        if (signupError.message?.includes('already been registered') || signupError.message?.includes('already exists')) {
          toast({
            title: "Account Already Exists",
            description: "An account with this email already exists. Please try logging in instead.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Registration Failed",
            description: signupError.message || "Failed to create account. Please try again.",
            variant: "destructive",
          });
        }
        
        setIsProcessing(false);
        return;
      }
      
      console.log('Signup successful, waiting for auth session...');
      
      // Wait a moment for the auth session to be established
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Get the current session
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session?.user) {
        console.log('Session established, saving client data...');
        
        try {
          await saveClientData(data, session.user.id);
          
          // Save minimal data in sessionStorage for the bank account page
          sessionStorage.setItem('investorSignupData', JSON.stringify({
            email: data.email
          }));
          
          toast({
            title: "Account Created Successfully",
            description: "Please complete your bank account details.",
          });
          
          console.log('Navigating to bank account page...');
          navigate('/investor/bank-account');
          
        } catch (clientError) {
          console.error('Error saving client data:', clientError);
          toast({
            title: "Error",
            description: "Failed to save your information. Please try again.",
            variant: "destructive",
          });
        }
      } else {
        console.log('No session available, user may need to verify email');
        toast({
          title: "Registration Successful",
          description: "Please check your email to verify your account before proceeding.",
          variant: "default",
        });
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
              <p className="text-sm text-red-600">{errors.holdingType?.message as string}</p>
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
              <p className="text-sm text-red-600">{errors.residentialStatus?.message as string}</p>
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
          {isSubmitting || isProcessing ? 'Creating Account...' : 'Create Account'}
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

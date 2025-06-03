
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useInvestorAuth } from '@/context/InvestorAuthContext';
import { User, Building } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

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
  const { signUp, user } = useInvestorAuth();
  const navigate = useNavigate();

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

  useEffect(() => {
    if (user) {
      navigate('/investor/dashboard');
    }
  }, [user, navigate]);

  const onSubmit = async (data: SignupFormData) => {
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
    
    const { error } = await signUp(data.email, data.password, userData);
    if (!error) {
      // Store form data in sessionStorage to pass to bank account page
      sessionStorage.setItem('investorSignupData', JSON.stringify({
        ...userData,
        email: data.email
      }));
      navigate('/investor/bank-account');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800">
      {/* Header */}
      <div className="bg-blue-700 text-white py-6 px-8">
        <h1 className="text-2xl font-bold">Welcome aboard!</h1>
      </div>

      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-4xl">
          <Card className="bg-white shadow-xl">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <img 
                  src="/lovable-uploads/aaa1dbf8-5b73-4620-a205-6193e82f8185.png" 
                  alt="Money Bharat Logo" 
                  className="h-16"
                />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Welcome, Create your Account
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Investor Category */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">
                    Investor Category <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex gap-4">
                    <Card 
                      className={`cursor-pointer transition-all ${
                        watchedInvestorCategory === 'individual' 
                          ? 'bg-blue-600 text-white border-blue-600' 
                          : 'border-gray-300 hover:border-blue-300'
                      }`}
                      onClick={() => {
                        setInvestorCategory('individual');
                        setValue('investorCategory', 'individual');
                      }}
                    >
                      <CardContent className="p-6 text-center">
                        <User className="h-8 w-8 mx-auto mb-2" />
                        <p className="font-medium">Individual</p>
                      </CardContent>
                    </Card>
                    <Card 
                      className={`cursor-pointer transition-all ${
                        watchedInvestorCategory === 'non-individual' 
                          ? 'bg-blue-600 text-white border-blue-600' 
                          : 'border-gray-300 hover:border-blue-300'
                      }`}
                      onClick={() => {
                        setInvestorCategory('non-individual');
                        setValue('investorCategory', 'non-individual');
                      }}
                    >
                      <CardContent className="p-6 text-center">
                        <Building className="h-8 w-8 mx-auto mb-2" />
                        <p className="font-medium">Non Individual</p>
                      </CardContent>
                    </Card>
                  </div>
                  {errors.investorCategory && (
                    <p className="text-sm text-red-600">{errors.investorCategory.message}</p>
                  )}
                </div>

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
                      <p className="text-sm text-red-600">{errors.holdingType.message}</p>
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
                      <p className="text-sm text-red-600">{errors.residentialStatus.message}</p>
                    )}
                  </div>
                </div>

                {/* Holder Details */}
                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-700">Holder Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex gap-6">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="pan"
                          value="pan"
                          checked={watchedIdentityType === 'pan'}
                          onChange={() => setValue('identityType', 'pan')}
                          className="w-4 h-4 text-blue-600"
                        />
                        <Label htmlFor="pan" className="font-medium">PAN</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="pekrn"
                          value="pekrn"
                          checked={watchedIdentityType === 'pekrn'}
                          onChange={() => setValue('identityType', 'pekrn')}
                          className="w-4 h-4 text-blue-600"
                        />
                        <Label htmlFor="pekrn" className="font-medium">PEKRN</Label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="panNumber">
                        {watchedIdentityType === 'pan' ? 'PAN Number' : 'PEKRN Number'} <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="panNumber"
                        placeholder={watchedIdentityType === 'pan' ? 'Enter PAN (e.g., ABCDE1234F)' : 'Enter PEKRN'}
                        {...register('panNumber')}
                        className="uppercase"
                      />
                      {errors.panNumber && (
                        <p className="text-sm text-red-600">{errors.panNumber.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">
                        Date of Birth <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        {...register('dateOfBirth')}
                      />
                      {errors.dateOfBirth && (
                        <p className="text-sm text-red-600">{errors.dateOfBirth.message}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      placeholder="Enter first name"
                      {...register('firstName')}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-600">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      placeholder="Enter last name"
                      {...register('lastName')}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-600">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      {...register('phone')}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password *</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create password"
                      {...register('password')}
                    />
                    {errors.password && (
                      <p className="text-sm text-red-600">{errors.password.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password *</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm password"
                      {...register('confirmPassword')}
                    />
                    {errors.confirmPassword && (
                      <p className="text-sm text-red-600">{errors.confirmPassword.message}</p>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium"
                >
                  {isSubmitting ? 'Creating Account...' : 'Create Account'}
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
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InvestorSignup;

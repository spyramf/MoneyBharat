import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useInvestorAuth } from '@/context/InvestorAuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, LogOut, Eye } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const bankAccountSchema = z.object({
  ifscCode: z.string().min(11, 'IFSC code must be 11 characters').max(11, 'IFSC code must be 11 characters'),
  accountNumber: z.string().min(9, 'Account number must be at least 9 digits'),
  accountType: z.string().min(1, 'Please select account type'),
  isDefaultPayout: z.boolean().default(true),
});

type BankAccountFormData = z.infer<typeof bankAccountSchema>;

const InvestorBankAccount = () => {
  const { user, signOut } = useInvestorAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BankAccountFormData>({
    resolver: zodResolver(bankAccountSchema),
    defaultValues: {
      isDefaultPayout: true,
    },
  });

  const watchedIfscCode = watch('ifscCode');

  useEffect(() => {
    // Check if user is authenticated
    if (!user) {
      navigate('/investor/login');
    } else {
      // Check if user has already completed onboarding
      const hasCompletedOnboarding = localStorage.getItem('onboardingCompleted');
      if (hasCompletedOnboarding) {
        navigate('/investor/dashboard');
      }
    }
  }, [user, navigate]);

  const handleBack = () => {
    navigate('/investor/signup');
  };

  const handleViewIfsc = () => {
    if (watchedIfscCode && watchedIfscCode.length === 11) {
      window.open(`https://ifsc.razorpay.com/${watchedIfscCode}`, '_blank');
    }
  };

  const onSubmit = async (data: BankAccountFormData) => {
    if (!user) return;

    try {
      console.log('Updating bank account details for user:', user.id);
      
      // Update the existing client record with bank details
      const { error } = await supabase
        .from('clients')
        .update({
          ifsc_code: data.ifscCode,
          account_number: data.accountNumber,
          account_type: data.accountType,
          is_default_payout: data.isDefaultPayout,
          onboarding_status: 'completed', // Update status to completed
        })
        .eq('investor_id', user.id);

      if (error) {
        console.error('Error updating bank account details:', error);
        throw error;
      }

      console.log('Bank account details updated successfully');

      // Clear session storage
      sessionStorage.removeItem('investorSignupData');
      
      // Mark onboarding as completed
      localStorage.setItem('onboardingCompleted', 'true');

      toast({
        title: "Account Setup Completed",
        description: "Your bank details have been saved successfully.",
      });

      navigate('/investor/dashboard');
    } catch (error) {
      console.error('Error updating client data:', error);
      toast({
        title: "Error",
        description: "Failed to save bank account details. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800">
      {/* Header */}
      <div className="bg-blue-700 text-white py-6 px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Bank Account Details</h1>
          <Button 
            onClick={signOut}
            variant="outline"
            size="sm"
            className="bg-transparent border-white text-white hover:bg-white hover:text-blue-700"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-2xl">
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
                Add Bank Account Details
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Please provide your bank account information to complete your profile
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* IFSC Code */}
                <div className="space-y-2">
                  <Label htmlFor="ifscCode">
                    IFSC Code <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="ifscCode"
                      placeholder="Enter IFSC Code"
                      {...register('ifscCode')}
                      className="uppercase"
                      maxLength={11}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleViewIfsc}
                      disabled={!watchedIfscCode || watchedIfscCode.length !== 11}
                      className="px-6"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </div>
                  {errors.ifscCode && (
                    <p className="text-sm text-red-600">{errors.ifscCode.message}</p>
                  )}
                </div>

                {/* Account Number */}
                <div className="space-y-2">
                  <Label htmlFor="accountNumber">
                    Account Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="accountNumber"
                    placeholder="Enter Account Number"
                    {...register('accountNumber')}
                  />
                  {errors.accountNumber && (
                    <p className="text-sm text-red-600">{errors.accountNumber.message}</p>
                  )}
                </div>

                {/* Account Type */}
                <div className="space-y-2">
                  <Label htmlFor="accountType">
                    Account Type <span className="text-red-500">*</span>
                  </Label>
                  <Select onValueChange={(value) => setValue('accountType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Account Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="savings">Savings Account</SelectItem>
                      <SelectItem value="current">Current Account</SelectItem>
                      <SelectItem value="salary">Salary Account</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.accountType && (
                    <p className="text-sm text-red-600">{errors.accountType.message}</p>
                  )}
                </div>

                {/* Default Payout */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="defaultPayout"
                    checked={true}
                    disabled
                    className="w-4 h-4 text-blue-600"
                  />
                  <Label htmlFor="defaultPayout" className="text-sm">
                    Set as default payout bank account
                  </Label>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    className="flex-1"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium"
                  >
                    {isSubmitting ? 'Saving...' : 'Add Bank Account(s)'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InvestorBankAccount;

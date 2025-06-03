import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useInvestorAuth } from '@/context/InvestorAuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import InvestorPageLayout from '@/components/investor/InvestorPageLayout';
import BankAccountForm from '@/components/investor/BankAccountForm';

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
    <InvestorPageLayout
      title="Bank Account Details"
      pageTitle="Add Bank Account Details"
      description="Please provide your bank account information to complete your profile"
      onSignOut={signOut}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <BankAccountForm
          register={register}
          errors={errors}
          setValue={setValue}
          watchedIfscCode={watchedIfscCode}
          onViewIfsc={handleViewIfsc}
        />

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
    </InvestorPageLayout>
  );
};

export default InvestorBankAccount;

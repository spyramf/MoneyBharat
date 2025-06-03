
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Eye } from 'lucide-react';
import { UseFormRegister, FieldErrors, UseFormSetValue } from 'react-hook-form';

interface BankAccountFormProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  setValue: UseFormSetValue<any>;
  watchedIfscCode: string;
  onViewIfsc: () => void;
}

const BankAccountForm = ({ 
  register, 
  errors, 
  setValue, 
  watchedIfscCode, 
  onViewIfsc 
}: BankAccountFormProps) => {
  return (
    <div className="space-y-6">
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
            onClick={onViewIfsc}
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
    </div>
  );
};

export default BankAccountForm;


import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

interface BankDetailsSectionProps {
  data: any;
  onUpdate: (data: any) => void;
}

const BankDetailsSection = ({ data, onUpdate }: BankDetailsSectionProps) => {
  const handleInputChange = (field: string, value: string) => {
    onUpdate({ [field]: value });
  };

  return (
    <div className="space-y-6">
      {/* Bank Details Form */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* IFSC Code */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">IFSC Code :</Label>
          <Input 
            placeholder="Enter IFSC Code"
            value={data.ifscCode || ''}
            onChange={(e) => handleInputChange('ifscCode', e.target.value.toUpperCase())}
            className="uppercase"
            maxLength={11}
          />
        </div>

        {/* Bank Name */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Bank Name :</Label>
          <Input 
            placeholder="Enter Bank Name"
            value={data.bankName || ''}
            onChange={(e) => handleInputChange('bankName', e.target.value)}
          />
        </div>

        {/* Account No */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Account No :</Label>
          <Input 
            placeholder="Enter Account Number"
            value={data.accountNo || ''}
            onChange={(e) => handleInputChange('accountNo', e.target.value.replace(/\D/g, ''))}
            type="tel"
          />
        </div>

        {/* Account Type */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Account Type:</Label>
          <Select 
            value={data.accountType || ''} 
            onValueChange={(value) => handleInputChange('accountType', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="savings">Savings</SelectItem>
              <SelectItem value="current">Current</SelectItem>
              <SelectItem value="salary">Salary</SelectItem>
              <SelectItem value="nri">NRI</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-center pt-6">
        <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8">
          Add
        </Button>
      </div>
    </div>
  );
};

export default BankDetailsSection;

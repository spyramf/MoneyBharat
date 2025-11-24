
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';

interface InvestorRegistrationSectionProps {
  data: any;
  onUpdate: (data: any) => void;
}

const InvestorRegistrationSection = ({ data, onUpdate }: InvestorRegistrationSectionProps) => {
  const handleInputChange = (field: string, value: string) => {
    onUpdate({ [field]: value });
  };

  return (
    <div className="space-y-6">
      {/* Holding and Occupation Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Holding:</Label>
          <Select onValueChange={(value) => handleInputChange('holding', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single">Single</SelectItem>
              <SelectItem value="joint">Joint</SelectItem>
              <SelectItem value="anyone">Anyone or Survivor</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Occupation:</Label>
          <Select onValueChange={(value) => handleInputChange('occupation', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="service">Service</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="retired">Retired</SelectItem>
              <SelectItem value="housewife">Housewife</SelectItem>
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="others">Others</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end">
          <Button className="bg-gray-600 hover:bg-gray-700 text-white px-6">
            Select
          </Button>
        </div>
      </div>

      {/* Address Lines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Address Line 1:</Label>
          <Input 
            placeholder="Enter Address Line 1"
            value={data.addressLine1 || ''}
            onChange={(e) => handleInputChange('addressLine1', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Address Line 2:</Label>
          <Input 
            placeholder="Enter Address Line 2"
            value={data.addressLine2 || ''}
            onChange={(e) => handleInputChange('addressLine2', e.target.value)}
          />
        </div>
      </div>

      {/* Address Line 3 */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-700">Address Line 3:</Label>
        <Input 
          placeholder="Enter Address Line 3"
          value={data.addressLine3 || ''}
          onChange={(e) => handleInputChange('addressLine3', e.target.value)}
          className="w-full"
        />
      </div>

      {/* Pin Code, City, State Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Pin Code:</Label>
          <Input 
            placeholder="Enter Pin Code"
            value={data.pinCode || ''}
            onChange={(e) => handleInputChange('pinCode', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">City:</Label>
          <Input 
            placeholder="Enter City"
            value={data.city || ''}
            onChange={(e) => handleInputChange('city', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">State:</Label>
          <Select onValueChange={(value) => handleInputChange('state', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="maharashtra">Maharashtra</SelectItem>
              <SelectItem value="gujarat">Gujarat</SelectItem>
              <SelectItem value="rajasthan">Rajasthan</SelectItem>
              <SelectItem value="delhi">Delhi</SelectItem>
              <SelectItem value="karnataka">Karnataka</SelectItem>
              <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
              <SelectItem value="west-bengal">West Bengal</SelectItem>
              <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
              <SelectItem value="bihar">Bihar</SelectItem>
              <SelectItem value="madhya-pradesh">Madhya Pradesh</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* UCC Preference */}
      <div className="space-y-3">
        <Label className="text-sm font-medium text-gray-700">UCC Preference:</Label>
        <RadioGroup 
          value={data.uccPreference || 'create-new'}
          onValueChange={(value) => handleInputChange('uccPreference', value)}
          className="flex gap-8"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="create-new" id="create-new" />
            <Label htmlFor="create-new" className="text-sm">Create New UCC by Random No.</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="specify" id="specify" />
            <Label htmlFor="specify" className="text-sm">Specify UCC</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 pt-6">
        <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8">
          Proceed
        </Button>
        <Button variant="outline" className="px-8">
          Save and exit
        </Button>
      </div>
    </div>
  );
};

export default InvestorRegistrationSection;

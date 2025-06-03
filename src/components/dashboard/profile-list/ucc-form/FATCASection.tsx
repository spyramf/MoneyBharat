
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';

interface FATCASectionProps {
  data: any;
  onUpdate: (data: any) => void;
}

const FATCASection = ({ data, onUpdate }: FATCASectionProps) => {
  const handleInputChange = (field: string, value: string) => {
    onUpdate({ [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-900">FATCA</h3>
        <p className="text-sm text-gray-600 mt-1">Applicant 1 : PRADIP HARI GANGURDE</p>
      </div>

      {/* First Row - Address Type, Country of Birth, Place of Birth, Wealth Source */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Address Type:</Label>
          <Select 
            value={data.addressType || ''} 
            onValueChange={(value) => handleInputChange('addressType', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="mailing">Mailing</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Country of Birth:</Label>
          <Select 
            value={data.countryOfBirth || ''} 
            onValueChange={(value) => handleInputChange('countryOfBirth', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="India" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="india">India</SelectItem>
              <SelectItem value="usa">USA</SelectItem>
              <SelectItem value="uk">UK</SelectItem>
              <SelectItem value="canada">Canada</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Place of Birth:</Label>
          <Input 
            placeholder="Enter Place of Birth"
            value={data.placeOfBirth || ''}
            onChange={(e) => handleInputChange('placeOfBirth', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Wealth Source:</Label>
          <Select 
            value={data.wealthSource || ''} 
            onValueChange={(value) => handleInputChange('wealthSource', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="salary">Salary</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="investment">Investment</SelectItem>
              <SelectItem value="inheritance">Inheritance</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Second Row - Income Slab, Politically Exposed, Occupation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Income Slab:</Label>
          <Select 
            value={data.incomeSlab || ''} 
            onValueChange={(value) => handleInputChange('incomeSlab', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="below-1lakh">Below 1 Lakh</SelectItem>
              <SelectItem value="1-5lakh">1-5 Lakh</SelectItem>
              <SelectItem value="5-10lakh">5-10 Lakh</SelectItem>
              <SelectItem value="10-25lakh">10-25 Lakh</SelectItem>
              <SelectItem value="25-1crore">25 Lakh - 1 Crore</SelectItem>
              <SelectItem value="above-1crore">Above 1 Crore</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Politically Exposed:</Label>
          <Select 
            value={data.politicallyExposed || ''} 
            onValueChange={(value) => handleInputChange('politicallyExposed', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Occupation:</Label>
          <Select 
            value={data.occupation || ''} 
            onValueChange={(value) => handleInputChange('occupation', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="private-service">Private Service</SelectItem>
              <SelectItem value="government-service">Government Service</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="retired">Retired</SelectItem>
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="housewife">Housewife</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Third Row - Tax Resident Question */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-700">Tax Resident of any country other than India?</Label>
        <RadioGroup 
          value={data.taxResidentOtherCountry || 'no'}
          onValueChange={(value) => handleInputChange('taxResidentOtherCountry', value)}
          className="flex gap-6"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="tax-yes" />
            <Label htmlFor="tax-yes" className="text-sm">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="tax-no" />
            <Label htmlFor="tax-no" className="text-sm">No</Label>
          </div>
        </RadioGroup>
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

export default FATCASection;


import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface PersonalInfoSectionProps {
  data: any;
  onUpdate: (data: any) => void;
}

const PersonalInfoSection = ({ data, onUpdate }: PersonalInfoSectionProps) => {
  const handleInputChange = (field: string, value: string) => {
    onUpdate({ [field]: value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Tax Status */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-700">Tax Status:</Label>
        <Select onValueChange={(value) => handleInputChange('taxStatus', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Individual" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="individual">Individual</SelectItem>
            <SelectItem value="huf">HUF</SelectItem>
            <SelectItem value="company">Company</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* PAN */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-700">PAN:</Label>
        <Input 
          placeholder="Enter PAN Number"
          value={data.pan || ''}
          onChange={(e) => handleInputChange('pan', e.target.value)}
          className="uppercase"
        />
      </div>

      {/* Name */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-700">Name:</Label>
        <Input 
          placeholder="Enter Full Name"
          value={data.name || ''}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
      </div>

      {/* Date of Birth */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-700">Date of Birth:</Label>
        <Input 
          placeholder="DD-MM-YYYY"
          value={data.dateOfBirth || ''}
          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
        />
      </div>

      {/* Gender */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-700">Gender:</Label>
        <RadioGroup 
          value={data.gender || ''}
          onValueChange={(value) => handleInputChange('gender', value)}
          className="flex gap-6"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="male" />
            <Label htmlFor="male" className="text-sm">Male</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="female" />
            <Label htmlFor="female" className="text-sm">Female</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Choose ARN */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-700">Choose ARN:</Label>
        <Select onValueChange={(value) => handleInputChange('arn', value)}>
          <SelectTrigger>
            <SelectValue placeholder="ARN-284751" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="arn-284751">ARN-284751</SelectItem>
            <SelectItem value="arn-284752">ARN-284752</SelectItem>
            <SelectItem value="arn-284753">ARN-284753</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Mobile */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-700">Mobile:</Label>
        <Input 
          placeholder="Enter Mobile Number"
          value={data.mobile || ''}
          onChange={(e) => handleInputChange('mobile', e.target.value)}
        />
      </div>

      {/* Mobile Declaration */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-700">Mobile Declaration:</Label>
        <Select onValueChange={(value) => handleInputChange('mobileDeclaration', value)}>
          <SelectTrigger>
            <SelectValue placeholder="SELF" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="self">SELF</SelectItem>
            <SelectItem value="father">FATHER</SelectItem>
            <SelectItem value="mother">MOTHER</SelectItem>
            <SelectItem value="spouse">SPOUSE</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Sub Broker */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-700">Sub Broker:</Label>
        <Input 
          placeholder="Type to Search..."
          value={data.subBroker || ''}
          onChange={(e) => handleInputChange('subBroker', e.target.value)}
        />
      </div>

      {/* Email ID */}
      <div className="space-y-2 md:col-span-2">
        <Label className="text-sm font-medium text-gray-700">Email ID:</Label>
        <Input 
          placeholder="Enter Email Address"
          type="email"
          value={data.email || ''}
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
      </div>

      {/* Email Declaration */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-700">Email Declaration:</Label>
        <Select onValueChange={(value) => handleInputChange('emailDeclaration', value)}>
          <SelectTrigger>
            <SelectValue placeholder="SELF" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="self">SELF</SelectItem>
            <SelectItem value="father">FATHER</SelectItem>
            <SelectItem value="mother">MOTHER</SelectItem>
            <SelectItem value="spouse">SPOUSE</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default PersonalInfoSection;

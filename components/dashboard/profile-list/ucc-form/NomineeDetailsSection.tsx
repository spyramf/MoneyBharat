
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';

interface NomineeDetailsSectionProps {
  data: any;
  onUpdate: (data: any) => void;
}

const NomineeDetailsSection = ({ data, onUpdate }: NomineeDetailsSectionProps) => {
  const handleInputChange = (field: string, value: string) => {
    onUpdate({ [field]: value });
  };

  return (
    <div className="space-y-6">
      {/* First Row - Nomination Opt, Authentication Mode, Nominee Type */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Nomination Opt:</Label>
          <RadioGroup 
            value={data.nominationOpt || 'yes'}
            onValueChange={(value) => handleInputChange('nominationOpt', value)}
            className="flex gap-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes" className="text-sm">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no" className="text-sm">No</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Nomination Authentication Mode:</Label>
          <Select 
            value={data.authenticationMode || ''} 
            onValueChange={(value) => handleInputChange('authenticationMode', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="OTP Authentication" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="otp">OTP Authentication</SelectItem>
              <SelectItem value="signature">Signature Authentication</SelectItem>
              <SelectItem value="biometric">Biometric Authentication</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Nominee Type:</Label>
          <RadioGroup 
            value={data.nomineeType || 'major'}
            onValueChange={(value) => handleInputChange('nomineeType', value)}
            className="flex gap-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="major" id="major" />
              <Label htmlFor="major" className="text-sm">Major</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="minor" id="minor" />
              <Label htmlFor="minor" className="text-sm">Minor</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      {/* Second Row - Nominee Name, Relation, Percentage */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Nominee Name:</Label>
          <Input 
            placeholder="Enter Nominee Name"
            value={data.nomineeName || ''}
            onChange={(e) => handleInputChange('nomineeName', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Nominee Relation:</Label>
          <Select 
            value={data.nomineeRelation || ''} 
            onValueChange={(value) => handleInputChange('nomineeRelation', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="father">Father</SelectItem>
              <SelectItem value="mother">Mother</SelectItem>
              <SelectItem value="spouse">Spouse</SelectItem>
              <SelectItem value="son">Son</SelectItem>
              <SelectItem value="daughter">Daughter</SelectItem>
              <SelectItem value="brother">Brother</SelectItem>
              <SelectItem value="sister">Sister</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Nominee Percentage:</Label>
          <Input 
            placeholder="Enter Percentage"
            value={data.nomineePercentage || ''}
            onChange={(e) => handleInputChange('nomineePercentage', e.target.value)}
            type="number"
            min="0"
            max="100"
          />
        </div>
      </div>

      {/* Third Row - Nominee Email, Mobile, Address Line 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Nominee Email:</Label>
          <Input 
            placeholder="Enter Email Address"
            type="email"
            value={data.nomineeEmail || ''}
            onChange={(e) => handleInputChange('nomineeEmail', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Nominee Mobile:</Label>
          <Input 
            placeholder="Enter Mobile Number"
            value={data.nomineeMobile || ''}
            onChange={(e) => handleInputChange('nomineeMobile', e.target.value.replace(/\D/g, '').slice(0, 10))}
            type="tel"
            maxLength={10}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Nominee Address line 1:</Label>
          <Input 
            placeholder="Enter Address Line 1"
            value={data.nomineeAddressLine1 || ''}
            onChange={(e) => handleInputChange('nomineeAddressLine1', e.target.value)}
          />
        </div>
      </div>

      {/* Fourth Row - Address Line 2, Line 3, City */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Nominee Address line 2:</Label>
          <Input 
            placeholder="Enter Address Line 2"
            value={data.nomineeAddressLine2 || ''}
            onChange={(e) => handleInputChange('nomineeAddressLine2', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Nominee Address line 3:</Label>
          <Input 
            placeholder="Enter Address Line 3"
            value={data.nomineeAddressLine3 || ''}
            onChange={(e) => handleInputChange('nomineeAddressLine3', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Nominee City:</Label>
          <Input 
            placeholder="Enter City"
            value={data.nomineeCity || ''}
            onChange={(e) => handleInputChange('nomineeCity', e.target.value)}
          />
        </div>
      </div>

      {/* Fifth Row - Pincode, Country, ID Proof */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Nominee Pincode:</Label>
          <Input 
            placeholder="Enter Pincode"
            value={data.nomineePincode || ''}
            onChange={(e) => handleInputChange('nomineePincode', e.target.value.replace(/\D/g, '').slice(0, 6))}
            type="tel"
            maxLength={6}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Nominee Country:</Label>
          <Select 
            value={data.nomineeCountry || ''} 
            onValueChange={(value) => handleInputChange('nomineeCountry', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
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
          <Label className="text-sm font-medium text-gray-700">ID Proof:</Label>
          <Select 
            value={data.idProof || ''} 
            onValueChange={(value) => handleInputChange('idProof', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="aadhar">Aadhar Card</SelectItem>
              <SelectItem value="pan">PAN Card</SelectItem>
              <SelectItem value="passport">Passport</SelectItem>
              <SelectItem value="driving-license">Driving License</SelectItem>
              <SelectItem value="voter-id">Voter ID</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 pt-6">
        <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8">
          Add
        </Button>
        <Button variant="outline" className="px-8">
          Skip
        </Button>
      </div>
    </div>
  );
};

export default NomineeDetailsSection;

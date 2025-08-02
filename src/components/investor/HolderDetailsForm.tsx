
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UseFormRegister, FieldErrors, UseFormSetValue } from 'react-hook-form';

interface HolderDetailsFormProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  setValue: UseFormSetValue<any>;
  watchedIdentityType: 'pan' | 'pekrn';
}

const HolderDetailsForm = ({ 
  register, 
  errors, 
  setValue, 
  watchedIdentityType 
}: HolderDetailsFormProps) => {
  return (
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
            <p className="text-sm text-red-600">{errors.panNumber?.message as string}</p>
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
            <p className="text-sm text-red-600">{errors.dateOfBirth?.message as string}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default HolderDetailsForm;

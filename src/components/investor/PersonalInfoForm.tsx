
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface PersonalInfoFormProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

const PersonalInfoForm = ({ register, errors }: PersonalInfoFormProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            placeholder="Enter first name"
            {...register('firstName')}
          />
          {errors.firstName && (
            <p className="text-sm text-red-600">{errors.firstName?.message as string}</p>
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
            <p className="text-sm text-red-600">{errors.lastName?.message as string}</p>
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
            <p className="text-sm text-red-600">{errors.email?.message as string}</p>
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
            <p className="text-sm text-red-600">{errors.phone?.message as string}</p>
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
            <p className="text-sm text-red-600">{errors.password?.message as string}</p>
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
            <p className="text-sm text-red-600">{errors.confirmPassword?.message as string}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;

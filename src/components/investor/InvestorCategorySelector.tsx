
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { User, Building } from 'lucide-react';
import { UseFormSetValue, FieldErrors } from 'react-hook-form';

interface InvestorCategorySelectorProps {
  selectedCategory: 'individual' | 'non-individual';
  onCategoryChange: (category: 'individual' | 'non-individual') => void;
  setValue: UseFormSetValue<any>;
  errors?: FieldErrors<any>;
}

const InvestorCategorySelector = ({ 
  selectedCategory, 
  onCategoryChange, 
  setValue, 
  errors 
}: InvestorCategorySelectorProps) => {
  const handleCategorySelect = (category: 'individual' | 'non-individual') => {
    onCategoryChange(category);
    setValue('investorCategory', category);
  };

  return (
    <div className="space-y-4">
      <Label className="text-base font-medium">
        Investor Category <span className="text-red-500">*</span>
      </Label>
      <div className="flex gap-4">
        <Card 
          className={`cursor-pointer transition-all ${
            selectedCategory === 'individual' 
              ? 'bg-blue-600 text-white border-blue-600' 
              : 'border-gray-300 hover:border-blue-300'
          }`}
          onClick={() => handleCategorySelect('individual')}
        >
          <CardContent className="p-6 text-center">
            <User className="h-8 w-8 mx-auto mb-2" />
            <p className="font-medium">Individual</p>
          </CardContent>
        </Card>
        <Card 
          className={`cursor-pointer transition-all ${
            selectedCategory === 'non-individual' 
              ? 'bg-blue-600 text-white border-blue-600' 
              : 'border-gray-300 hover:border-blue-300'
          }`}
          onClick={() => handleCategorySelect('non-individual')}
        >
          <CardContent className="p-6 text-center">
            <Building className="h-8 w-8 mx-auto mb-2" />
            <p className="font-medium">Non Individual</p>
          </CardContent>
        </Card>
      </div>
      {errors?.investorCategory && (
        <p className="text-sm text-red-600">{errors.investorCategory.message}</p>
      )}
    </div>
  );
};

export default InvestorCategorySelector;

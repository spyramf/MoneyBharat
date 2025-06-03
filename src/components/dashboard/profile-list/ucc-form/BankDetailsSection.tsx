
import React from 'react';

interface BankDetailsSectionProps {
  data: any;
  onUpdate: (data: any) => void;
}

const BankDetailsSection = ({ data, onUpdate }: BankDetailsSectionProps) => {
  return (
    <div className="p-4 text-gray-500">
      <p>Bank Details form fields will be implemented here.</p>
    </div>
  );
};

export default BankDetailsSection;

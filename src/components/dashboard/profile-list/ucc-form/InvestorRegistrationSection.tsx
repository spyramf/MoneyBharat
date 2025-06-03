
import React from 'react';

interface InvestorRegistrationSectionProps {
  data: any;
  onUpdate: (data: any) => void;
}

const InvestorRegistrationSection = ({ data, onUpdate }: InvestorRegistrationSectionProps) => {
  return (
    <div className="p-4 text-gray-500">
      <p>Investor Registration form fields will be implemented here.</p>
    </div>
  );
};

export default InvestorRegistrationSection;

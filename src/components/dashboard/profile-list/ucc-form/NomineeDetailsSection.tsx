
import React from 'react';

interface NomineeDetailsSectionProps {
  data: any;
  onUpdate: (data: any) => void;
}

const NomineeDetailsSection = ({ data, onUpdate }: NomineeDetailsSectionProps) => {
  return (
    <div className="p-4 text-gray-500">
      <p>Nominee Details form fields will be implemented here.</p>
    </div>
  );
};

export default NomineeDetailsSection;

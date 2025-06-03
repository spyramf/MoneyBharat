
import React from 'react';

interface FATCASectionProps {
  data: any;
  onUpdate: (data: any) => void;
}

const FATCASection = ({ data, onUpdate }: FATCASectionProps) => {
  return (
    <div className="p-4 text-gray-500">
      <p>FATCA form fields will be implemented here.</p>
    </div>
  );
};

export default FATCASection;

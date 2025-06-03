
import React from 'react';
import PersonalInfoFields from './PersonalInfoFields';

interface PersonalInfoSectionProps {
  data: any;
  onUpdate: (data: any) => void;
}

const PersonalInfoSection = ({ data, onUpdate }: PersonalInfoSectionProps) => {
  const handleFieldUpdate = (field: string, value: string) => {
    onUpdate({ [field]: value });
  };

  return (
    <PersonalInfoFields 
      data={data}
      onUpdate={handleFieldUpdate}
    />
  );
};

export default PersonalInfoSection;

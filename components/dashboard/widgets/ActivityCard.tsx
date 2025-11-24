
import React from 'react';

interface ActivityCardProps {
  title: string;
  description: string;
  borderColor: string;
  bgColor: string;
}

const ActivityCard = ({ title, description, borderColor, bgColor }: ActivityCardProps) => {
  return (
    <div className={`p-4 border-l-4 ${borderColor} ${bgColor}`}>
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default ActivityCard;

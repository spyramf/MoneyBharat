
import React from 'react';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

interface InvestorPageHeaderProps {
  title: string;
  onSignOut: () => void;
}

const InvestorPageHeader = ({ title, onSignOut }: InvestorPageHeaderProps) => {
  return (
    <div className="bg-blue-700 text-white py-6 px-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        <Button 
          onClick={onSignOut}
          variant="outline"
          size="sm"
          className="bg-transparent border-white text-white hover:bg-white hover:text-blue-700"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default InvestorPageHeader;

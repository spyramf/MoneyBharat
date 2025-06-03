
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import InvestorPageHeader from './InvestorPageHeader';

interface InvestorPageLayoutProps {
  title: string;
  pageTitle: string;
  description?: string;
  onSignOut: () => void;
  children: React.ReactNode;
}

const InvestorPageLayout = ({ 
  title, 
  pageTitle, 
  description, 
  onSignOut, 
  children 
}: InvestorPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800">
      <InvestorPageHeader title={title} onSignOut={onSignOut} />

      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-4xl">
          <Card className="bg-white shadow-xl">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <img 
                  src="/lovable-uploads/aaa1dbf8-5b73-4620-a205-6193e82f8185.png" 
                  alt="Money Bharat Logo" 
                  className="h-16"
                />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                {pageTitle}
              </CardTitle>
              {description && (
                <p className="text-gray-600 mt-2">{description}</p>
              )}
            </CardHeader>

            <CardContent className="space-y-8">
              {children}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InvestorPageLayout;

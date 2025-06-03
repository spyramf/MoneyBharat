
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import PersonalInfoSection from './ucc-form/PersonalInfoSection';
import InvestorRegistrationSection from './ucc-form/InvestorRegistrationSection';
import NomineeDetailsSection from './ucc-form/NomineeDetailsSection';
import BankDetailsSection from './ucc-form/BankDetailsSection';
import FATCASection from './ucc-form/FATCASection';

interface UCCCreationFormProps {
  onClose: () => void;
}

const UCCCreationForm = ({ onClose }: UCCCreationFormProps) => {
  const [openSections, setOpenSections] = useState<string[]>(['personal-info']);
  const [formData, setFormData] = useState({
    personalInfo: {},
    investorRegistration: {},
    nomineeDetails: {},
    bankDetails: {},
    fatca: {}
  });

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleSectionUpdate = (section: string, data: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section as keyof typeof prev], ...data }
    }));
  };

  const handleProceed = () => {
    console.log('Form data:', formData);
    // Handle form submission logic here
  };

  const handleSaveAndExit = () => {
    console.log('Saving and exiting:', formData);
    onClose();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            onClick={onClose}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Go back
          </Button>
        </div>

        {/* Form Sections */}
        <div className="space-y-4">
          {/* Personal Info Section */}
          <Card className="border-gray-200">
            <Collapsible 
              open={openSections.includes('personal-info')}
              onOpenChange={() => toggleSection('personal-info')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="text-gray-400">−</span>
                    Personal Info
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <PersonalInfoSection 
                    data={formData.personalInfo}
                    onUpdate={(data) => handleSectionUpdate('personalInfo', data)}
                  />
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Investor Registration Section */}
          <Card className="border-gray-200">
            <Collapsible 
              open={openSections.includes('investor-registration')}
              onOpenChange={() => toggleSection('investor-registration')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
                  <CardTitle className="flex items-center gap-2 text-lg text-gray-400">
                    <span>+</span>
                    Investor Registration
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <InvestorRegistrationSection 
                    data={formData.investorRegistration}
                    onUpdate={(data) => handleSectionUpdate('investorRegistration', data)}
                  />
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Nominee Details Section */}
          <Card className="border-gray-200">
            <Collapsible 
              open={openSections.includes('nominee-details')}
              onOpenChange={() => toggleSection('nominee-details')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
                  <CardTitle className="flex items-center gap-2 text-lg text-gray-400">
                    <span>+</span>
                    Nominee Details
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <NomineeDetailsSection 
                    data={formData.nomineeDetails}
                    onUpdate={(data) => handleSectionUpdate('nomineeDetails', data)}
                  />
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Bank Details Section */}
          <Card className="border-gray-200">
            <Collapsible 
              open={openSections.includes('bank-details')}
              onOpenChange={() => toggleSection('bank-details')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
                  <CardTitle className="flex items-center gap-2 text-lg text-gray-400">
                    <span>+</span>
                    Bank Details
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <BankDetailsSection 
                    data={formData.bankDetails}
                    onUpdate={(data) => handleSectionUpdate('bankDetails', data)}
                  />
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* FATCA Section */}
          <Card className="border-gray-200">
            <Collapsible 
              open={openSections.includes('fatca')}
              onOpenChange={() => toggleSection('fatca')}
            >
              <CollapsibleTrigger asChild>
                <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
                  <CardTitle className="flex items-center gap-2 text-lg text-gray-400">
                    <span>+</span>
                    FATCA
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <FATCASection 
                    data={formData.fatca}
                    onUpdate={(data) => handleSectionUpdate('fatca', data)}
                  />
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <Button 
            onClick={handleProceed}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-2"
          >
            Proceed
          </Button>
          <Button 
            variant="outline" 
            onClick={handleSaveAndExit}
            className="px-8 py-2"
          >
            Save and exit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UCCCreationForm;

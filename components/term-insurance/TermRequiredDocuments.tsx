
import React from "react";
import { FileText, UserCheck, Building, Globe, HeartPulse, CreditCard } from "lucide-react";

interface Document {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  examples: string[];
}

const requiredDocuments: Document[] = [
  {
    id: "identity",
    title: "Identity Proof",
    description: "Government-issued documents that verify your identity",
    icon: <UserCheck className="h-6 w-6 text-indigo-600" />,
    examples: ["Aadhaar Card", "PAN Card", "Passport", "Voter ID Card"]
  },
  {
    id: "address",
    title: "Address Proof",
    description: "Documents that confirm your current residential address",
    icon: <Building className="h-6 w-6 text-indigo-600" />,
    examples: ["Utility Bills", "Aadhaar Card", "Passport", "Rental Agreement"]
  },
  {
    id: "age",
    title: "Age Proof",
    description: "Documents that verify your date of birth",
    icon: <FileText className="h-6 w-6 text-indigo-600" />,
    examples: ["Birth Certificate", "School/College Certificate", "Passport", "Aadhaar Card"]
  },
  {
    id: "income",
    title: "Income Proof",
    description: "Documents that verify your financial status and income",
    icon: <CreditCard className="h-6 w-6 text-indigo-600" />,
    examples: ["Salary Slips", "Income Tax Returns", "Form 16", "Bank Statements"]
  },
  {
    id: "medical",
    title: "Medical Reports",
    description: "Health checkup results required for policy underwriting",
    icon: <HeartPulse className="h-6 w-6 text-indigo-600" />,
    examples: ["Blood Tests", "ECG", "Chest X-ray", "Medical Examination Report"]
  },
  {
    id: "residence",
    title: "Residence Status",
    description: "Documents required for NRIs and foreign nationals",
    icon: <Globe className="h-6 w-6 text-indigo-600" />,
    examples: ["Visa Copy", "Passport", "VISA or Work Permit", "NRI Questionnaire"]
  }
];

const TermRequiredDocuments = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Documents Required for Term Insurance</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Keep these documents ready to simplify your term insurance application process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {requiredDocuments.map((doc) => (
            <div key={doc.id} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-indigo-100 rounded-full mr-3">
                  {doc.icon}
                </div>
                <h3 className="text-lg font-semibold">{doc.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{doc.description}</p>
              <div>
                <span className="text-sm font-medium text-gray-700 block mb-2">Examples:</span>
                <ul className="space-y-1">
                  {doc.examples.map((example, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mr-2"></span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TermRequiredDocuments;

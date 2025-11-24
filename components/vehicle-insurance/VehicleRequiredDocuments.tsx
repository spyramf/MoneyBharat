
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, CreditCard, Clipboard, AlertCircle, FileCheck, Map } from "lucide-react";

interface DocumentCategory {
  id: string;
  title: string;
  documents: string[];
  icon: React.ReactNode;
}

const requiredDocuments: DocumentCategory[] = [
  {
    id: "basic",
    title: "Basic Documents",
    documents: [
      "Vehicle Registration Certificate (RC)",
      "Valid Driving License",
      "Vehicle Insurance Policy (for renewals)",
      "PAN Card or Form 60",
      "Address Proof (Aadhaar/Passport/Voter ID)"
    ],
    icon: <FileText className="h-8 w-8 text-blue-600" />
  },
  {
    id: "new-policy",
    title: "For New Policy",
    documents: [
      "Vehicle Invoice (for new vehicles)",
      "Previous Insurance Policy (if any)",
      "No Claim Bonus Certificate (if applicable)",
      "Form 29/30 (for used vehicles)",
      "Vehicle Inspection Report"
    ],
    icon: <FileCheck className="h-8 w-8 text-blue-600" />
  },
  {
    id: "claims",
    title: "For Claim Processing",
    documents: [
      "Duly Filled Claim Form",
      "Copy of FIR (for theft/third-party damage)",
      "Original Repair Bills and Payment Receipts",
      "Photographs of Damaged Vehicle",
      "Medical Reports (for personal accident claims)"
    ],
    icon: <Clipboard className="h-8 w-8 text-blue-600" />
  },
  {
    id: "commercial",
    title: "For Commercial Vehicles",
    documents: [
      "Permit Certificate",
      "Fitness Certificate",
      "Route Permit",
      "Commercial Registration Documents",
      "Driver's Badge"
    ],
    icon: <Map className="h-8 w-8 text-blue-600" />
  },
  {
    id: "transfer",
    title: "For Policy Transfer",
    documents: [
      "No Objection Certificate",
      "Form 28, 29, and 30",
      "Transfer Fee Receipt",
      "New Owner's ID and Address Proof",
      "Joint Declaration (old and new owner)"
    ],
    icon: <CreditCard className="h-8 w-8 text-blue-600" />
  },
  {
    id: "special",
    title: "Special Cases",
    documents: [
      "CNG/LPG Kit Certificate (if installed)",
      "Custom Modification Approvals",
      "NOC from Financier (for financed vehicles)",
      "Death Certificate (for vehicle ownership transfer)",
      "Canceled Cheque (for claim reimbursement)"
    ],
    icon: <AlertCircle className="h-8 w-8 text-blue-600" />
  }
];

const VehicleRequiredDocuments = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Documents Required for Vehicle Insurance</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Keep these documents handy when purchasing, renewing, or claiming your vehicle insurance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {requiredDocuments.map((category) => (
            <Card key={category.id} className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.documents.map((doc, index) => (
                    <li key={index} className="text-gray-700 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleRequiredDocuments;

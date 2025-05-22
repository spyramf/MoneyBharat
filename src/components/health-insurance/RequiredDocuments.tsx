
import React from "react";
import { Check, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface DocumentCategory {
  id: string;
  title: string;
  description: string;
  documents: string[];
}

const documentCategories: DocumentCategory[] = [
  {
    id: "identity",
    title: "Identity Proof (Any one)",
    description: "",
    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Voter ID Card",
      "Driving License",
      "Passport"
    ]
  },
  {
    id: "address",
    title: "Address Proof (Any one)",
    description: "",
    documents: [
      "Aadhaar Card",
      "Passport",
      "Voter ID Card",
      "Utility Bills (not older than 3 months)",
      "Bank Statement (not older than 3 months)"
    ]
  },
  {
    id: "age",
    title: "Age Proof (Any one)",
    description: "",
    documents: [
      "Birth Certificate",
      "10th Certificate",
      "Passport",
      "Driving License"
    ]
  },
  {
    id: "medical",
    title: "Medical Documents (If applicable)",
    description: "",
    documents: [
      "Medical Reports",
      "Previous Health Insurance Policy",
      "Medical History Declaration"
    ]
  }
];

const additionalDocuments = [
  "Marriage Certificate (for spouse)",
  "Birth Certificates (for children)",
  "Relationship Proof for Dependent Parents"
];

const RequiredDocuments = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Documents Required for Purchasing a Health Insurance Policy</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Essential paperwork needed for a smooth application process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-6">
          {documentCategories.map((category) => (
            <Card key={category.id} className="border border-gray-200">
              <CardContent className="p-6">
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <span className="text-blue-600">📋</span> {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.documents.map((doc, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-1 text-green-500 flex-shrink-0">
                          <Check className="h-4 w-4" />
                        </span>
                        <span className="text-gray-700">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border border-blue-100 bg-blue-50 max-w-6xl mx-auto">
          <CardContent className="p-6">
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-blue-800">
                <Info className="h-5 w-5" /> Additional Documents for Family Floater Policies
              </h3>
              <ul className="space-y-2">
                {additionalDocuments.map((doc, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 text-green-500 flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RequiredDocuments;

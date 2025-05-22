
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User, Users, FileCheck, Globe, Buildings, AlertTriangle } from "lucide-react";

interface Criteria {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  note?: string;
}

const eligibilityCriteria: Criteria[] = [
  {
    id: "age",
    title: "Age",
    description: "You must be between 18 to 65 years old to apply for a term insurance policy.",
    icon: <User className="w-6 h-6 text-indigo-600" />,
    note: "Lower age means lower premiums"
  },
  {
    id: "health",
    title: "Health Status",
    description: "Good health with no major pre-existing conditions will help secure better premium rates.",
    icon: <FileCheck className="w-6 h-6 text-indigo-600" />,
    note: "Medical tests may be required"
  },
  {
    id: "income",
    title: "Income Status",
    description: "You must have a steady source of income to qualify for and maintain a term insurance policy.",
    icon: <Buildings className="w-6 h-6 text-indigo-600" />
  },
  {
    id: "nationality",
    title: "Residency",
    description: "Indian residents, NRIs, and PIOs can apply for term insurance policies in India.",
    icon: <Globe className="w-6 h-6 text-indigo-600" />,
    note: "Different conditions may apply for NRIs"
  },
  {
    id: "dependents",
    title: "Financial Dependents",
    description: "While not mandatory, having financial dependents is the primary reason to purchase term insurance.",
    icon: <Users className="w-6 h-6 text-indigo-600" />
  },
  {
    id: "restrictions",
    title: "Exclusions",
    description: "High-risk occupations, certain pre-existing conditions, or lifestyle habits may limit eligibility.",
    icon: <AlertTriangle className="w-6 h-6 text-indigo-600" />,
    note: "Disclose all information honestly"
  }
];

const TermEligibilityCriteria = () => {
  return (
    <section className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Term Insurance Eligibility Criteria</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Check if you qualify for a term insurance policy and what factors determine your eligibility
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {eligibilityCriteria.map((criteria) => (
            <Card key={criteria.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-indigo-100 rounded-lg mr-3">
                      {criteria.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{criteria.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-3">{criteria.description}</p>
                  {criteria.note && (
                    <p className="text-sm text-indigo-600 italic mt-auto">
                      Note: {criteria.note}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TermEligibilityCriteria;

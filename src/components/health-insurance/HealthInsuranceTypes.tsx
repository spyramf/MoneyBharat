
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface InsuranceType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const insuranceTypes: InsuranceType[] = [
  {
    id: "individual",
    title: "Individual Health Insurance",
    description: "Coverage for a single person with customized benefits for personal healthcare needs.",
    icon: <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold">I</div>
  },
  {
    id: "family",
    title: "Family Floater Plans",
    description: "A single policy that covers your entire family under one sum insured amount.",
    icon: <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xl font-bold">F</div>
  },
  {
    id: "critical",
    title: "Critical Illness Cover",
    description: "Provides coverage for major illnesses like cancer, heart attack, and organ transplants.",
    icon: <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-xl font-bold">C</div>
  },
  {
    id: "senior",
    title: "Senior Citizen Plans",
    description: "Special plans designed for individuals over 60 years with higher coverage for age-related issues.",
    icon: <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 text-xl font-bold">S</div>
  },
  {
    id: "maternity",
    title: "Maternity Health Cover",
    description: "Coverage for pregnancy, childbirth, and postnatal care expenses.",
    icon: <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xl font-bold">M</div>
  },
  {
    id: "group",
    title: "Group Health Insurance",
    description: "Employer-provided health coverage for employees and sometimes their dependents.",
    icon: <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 text-xl font-bold">G</div>
  }
];

const HealthInsuranceTypes = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Types of Health Insurance</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore different types of health insurance coverage to find what suits your specific requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insuranceTypes.map((type) => (
            <Card key={type.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {type.icon}
                <CardTitle>{type.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{type.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthInsuranceTypes;


import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PersonStanding, Users, Shield, Hospital, DollarSign } from "lucide-react";

interface InsuranceType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  pricing?: string;
  badgeText?: string;
  badgeVariant?: "info" | "pill" | "rate" | "fee";
}

const insuranceTypes: InsuranceType[] = [
  {
    id: "individual",
    title: "Individual Health Insurance",
    description: "Tailored coverage for a single person with customizable benefits to suit personal health needs.",
    icon: <PersonStanding className="w-6 h-6 text-white" />,
    pricing: "Starting at ₹499/month",
    badgeVariant: "rate"
  },
  {
    id: "family",
    title: "Family Floater Insurance",
    description: "Comprehensive coverage for your entire family under a single policy with shared sum insured.",
    icon: <Users className="w-6 h-6 text-white" />,
    pricing: "Starting at ₹1,199/month",
    badgeVariant: "rate"
  },
  {
    id: "critical",
    title: "Critical Illness Cover",
    description: "Financial protection against major illnesses with lump-sum benefits upon diagnosis.",
    icon: <Hospital className="w-6 h-6 text-white" />,
    pricing: "Starting at ₹699/month",
    badgeVariant: "rate"
  },
  {
    id: "group",
    title: "Group Health Insurance",
    description: "Employer-provided coverage for employees with competitive premiums and extensive benefits.",
    icon: <Users className="w-6 h-6 text-white" />,
    badgeText: "Custom corporate plans",
    badgeVariant: "pill"
  },
  {
    id: "senior",
    title: "Senior Citizen Health Insurance",
    description: "Specialized plans for individuals above 60 years with coverage for age-related ailments.",
    icon: <PersonStanding className="w-6 h-6 text-white" />,
    pricing: "Starting at ₹1,999/month",
    badgeVariant: "rate"
  },
  {
    id: "topup",
    title: "Top-up Health Plans",
    description: "Additional coverage that starts after your base health insurance reaches its limit.",
    icon: <DollarSign className="w-6 h-6 text-white" />,
    pricing: "Starting at ₹299/month",
    badgeVariant: "rate"
  }
];

const HealthInsuranceTypes = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Types of Health Insurance Plans</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Find the right health coverage for your specific needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insuranceTypes.map((type) => (
            <Card key={type.id} className="shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="mb-5">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br 
                    ${type.id === "individual" ? "from-teal-500 to-teal-600" : ""}
                    ${type.id === "family" ? "from-orange-500 to-purple-400" : ""}
                    ${type.id === "critical" ? "from-teal-500 to-teal-600" : ""}
                    ${type.id === "group" ? "from-teal-400 to-blue-500" : ""}
                    ${type.id === "senior" ? "from-green-500 to-purple-500" : ""}
                    ${type.id === "topup" ? "from-amber-400 to-amber-500" : ""}
                  `}>
                    {type.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                
                <CardContent className="p-0">
                  {type.pricing && (
                    <Badge variant={type.badgeVariant} className="text-xs font-medium">
                      {type.pricing}
                    </Badge>
                  )}
                  {type.badgeText && (
                    <Badge variant={type.badgeVariant} className="text-xs font-medium">
                      {type.badgeText}
                    </Badge>
                  )}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthInsuranceTypes;

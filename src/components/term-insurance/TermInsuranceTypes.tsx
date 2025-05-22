
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Heart, Coins, Users, BriefcaseMedical } from "lucide-react";

interface InsuranceType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  pricing?: string;
  badgeText?: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
}

const insuranceTypes: InsuranceType[] = [
  {
    id: "level-term",
    title: "Level Term Insurance",
    description: "Provides consistent coverage amount throughout the policy term with fixed premiums.",
    icon: <Shield className="w-6 h-6 text-white" />,
    pricing: "Starting at ₹600/month",
    badgeVariant: "default"
  },
  {
    id: "increasing-term",
    title: "Increasing Term Insurance",
    description: "Coverage amount increases over time to account for inflation and growing financial needs.",
    icon: <Coins className="w-6 h-6 text-white" />,
    pricing: "Starting at ₹800/month",
    badgeVariant: "default"
  },
  {
    id: "decreasing-term",
    title: "Decreasing Term Insurance",
    description: "Coverage amount decreases over time, ideal for covering loans like mortgages.",
    icon: <Clock className="w-6 h-6 text-white" />,
    pricing: "Starting at ₹500/month",
    badgeVariant: "default"
  },
  {
    id: "return-of-premium",
    title: "Return of Premium",
    description: "Returns all premiums paid if you survive the policy term - insurance with a money-back guarantee.",
    icon: <Heart className="w-6 h-6 text-white" />,
    pricing: "Starting at ₹1,200/month",
    badgeVariant: "default"
  },
  {
    id: "joint-life",
    title: "Joint Life Term Insurance",
    description: "Covers two lives (typically spouses) under a single policy with shared benefits.",
    icon: <Users className="w-6 h-6 text-white" />,
    pricing: "Starting at ₹1,000/month",
    badgeVariant: "default"
  },
  {
    id: "critical-illness",
    title: "Term with Critical Illness",
    description: "Provides additional payout if diagnosed with specified critical illnesses during the term.",
    icon: <BriefcaseMedical className="w-6 h-6 text-white" />,
    pricing: "Starting at ₹900/month",
    badgeVariant: "default"
  }
];

const TermInsuranceTypes = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Types of Term Insurance Plans</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Choose the right term insurance plan based on your specific needs and financial goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insuranceTypes.map((type) => (
            <Card key={type.id} className="shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="mb-5">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br 
                    ${type.id === "level-term" ? "from-blue-500 to-blue-600" : ""}
                    ${type.id === "increasing-term" ? "from-green-500 to-teal-600" : ""}
                    ${type.id === "decreasing-term" ? "from-amber-500 to-orange-600" : ""}
                    ${type.id === "return-of-premium" ? "from-purple-500 to-violet-600" : ""}
                    ${type.id === "joint-life" ? "from-pink-500 to-rose-600" : ""}
                    ${type.id === "critical-illness" ? "from-red-500 to-red-600" : ""}
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

export default TermInsuranceTypes;

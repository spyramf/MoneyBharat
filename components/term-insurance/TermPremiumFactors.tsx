
import React from "react";
import { Calendar, FileText, Activity, DollarSign, Cigarette, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface PremiumFactor {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const premiumFactors: PremiumFactor[] = [
  {
    id: "age",
    title: "Age",
    description: "The younger you are when you purchase a policy, the lower your premiums will be. Age is the most significant factor in determining premiums.",
    icon: <Calendar className="w-10 h-10 text-indigo-600" />
  },
  {
    id: "health",
    title: "Health Condition",
    description: "Your current health status and medical history significantly impact premium rates. Healthier individuals get better rates.",
    icon: <Activity className="w-10 h-10 text-indigo-600" />
  },
  {
    id: "lifestyle",
    title: "Lifestyle Habits",
    description: "Smoking, alcohol consumption, and other lifestyle choices can increase premiums substantially due to higher health risks.",
    icon: <Cigarette className="w-10 h-10 text-indigo-600" />
  },
  {
    id: "coverage",
    title: "Coverage Amount",
    description: "Higher sum assured (coverage amount) results in higher premiums. Choose a coverage that's 10-15 times your annual income.",
    icon: <DollarSign className="w-10 h-10 text-indigo-600" />
  },
  {
    id: "occupation",
    title: "Occupation",
    description: "High-risk occupations like mining, aviation, or construction may result in higher premium rates due to increased risk.",
    icon: <Briefcase className="w-10 h-10 text-indigo-600" />
  },
  {
    id: "policy-term",
    title: "Policy Term",
    description: "Longer policy terms generally lead to higher cumulative premiums but provide extended protection for your family.",
    icon: <FileText className="w-10 h-10 text-indigo-600" />
  }
];

const TermPremiumFactors = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Factors That Affect Term Insurance Premium</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Understanding these factors can help you secure the best rates for your term insurance policy
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {premiumFactors.map(factor => (
            <Card key={factor.id} className="border border-gray-100 hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-indigo-50 rounded-full">
                    {factor.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{factor.title}</h3>
                  <p className="text-gray-600">{factor.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TermPremiumFactors;

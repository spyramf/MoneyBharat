import React from "react";
import { Calendar, FileText, Users, DollarSign, Building, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
interface PremiumFactor {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}
const premiumFactors: PremiumFactor[] = [{
  id: "age",
  title: "Age",
  description: "Premium amounts typically increase with age as health risks and medical needs tend to rise accordingly.",
  icon: <Calendar className="w-10 h-10 text-fintech-green" />
}, {
  id: "medical-history",
  title: "Medical History",
  description: "Pre-existing conditions and past medical issues can affect premium rates and coverage terms.",
  icon: <FileText className="w-10 h-10 text-blue-600" />
}, {
  id: "family-size",
  title: "Family Size",
  description: "The number of family members covered under your policy directly impacts your premium amount.",
  icon: <Users className="w-10 h-10 text-blue-600" />
}, {
  id: "sum-insured",
  title: "Sum Insured",
  description: "Higher coverage amounts result in higher premiums but provide more comprehensive financial protection.",
  icon: <DollarSign className="w-10 h-10 text-blue-600" />
}, {
  id: "location",
  title: "Location",
  description: "Healthcare costs vary by region, so your residential location affects premium calculations.",
  icon: <Building className="w-10 h-10 text-blue-600" />
}, {
  id: "occupation",
  title: "Occupation",
  description: "Some professions carry higher health risks, which can influence insurance premium rates.",
  icon: <Briefcase className="w-10 h-10 text-blue-600" />
}];
const PremiumFactors = () => {
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Factors That Affect Health Insurance Premium</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Several key factors influence the cost of your health insurance policy. Understanding these factors can help you make informed decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {premiumFactors.map(factor => <Card key={factor.id} className="border border-gray-100 hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-blue-50 rounded-full">
                    {factor.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{factor.title}</h3>
                  <p className="text-gray-600">{factor.description}</p>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default PremiumFactors;
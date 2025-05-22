
import React from "react";
import { Calendar, FileText, Gauge, DollarSign, MapPin, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface PremiumFactor {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const premiumFactors: PremiumFactor[] = [
  {
    id: "vehicle-age",
    title: "Vehicle Age",
    description: "Older vehicles typically have higher premiums due to increased risk of breakdown and parts availability.",
    icon: <Calendar className="w-10 h-10 text-fintech-green" />
  },
  {
    id: "idv",
    title: "Insured Declared Value",
    description: "The current market value of your vehicle determines the maximum amount insurable and affects premiums.",
    icon: <DollarSign className="w-10 h-10 text-fintech-green" />
  },
  {
    id: "ncb",
    title: "No Claim Bonus",
    description: "Discounts of up to 50% for claim-free years that reduce your premium significantly over time.",
    icon: <ShieldCheck className="w-10 h-10 text-fintech-green" />
  },
  {
    id: "engine-capacity",
    title: "Engine Capacity",
    description: "Higher engine capacity or cubic capacity (CC) vehicles attract higher premium rates.",
    icon: <Gauge className="w-10 h-10 text-fintech-green" />
  },
  {
    id: "location",
    title: "Registration Location",
    description: "Vehicle registration zone (urban vs. rural) affects premium as risk factors vary by location.",
    icon: <MapPin className="w-10 h-10 text-fintech-green" />
  },
  {
    id: "claim-history",
    title: "Claim History",
    description: "Previous claims affect future premiums; more claims generally result in higher premium amounts.",
    icon: <FileText className="w-10 h-10 text-fintech-green" />
  }
];

const VehiclePremiumFactors = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Factors That Affect Vehicle Insurance Premium</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Understanding these key factors can help you optimize your insurance costs while maintaining adequate coverage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {premiumFactors.map(factor => (
            <Card key={factor.id} className="border border-gray-100 hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-blue-50 rounded-full">
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

export default VehiclePremiumFactors;

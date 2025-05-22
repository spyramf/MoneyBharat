
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, PhoneCall, Umbrella, Percent, Clock, Shield } from "lucide-react";

interface AddOnOption {
  id: string;
  title: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  cost?: string;
}

const addOnOptions: AddOnOption[] = [
  {
    id: "zero-depreciation",
    title: "Zero Depreciation Cover",
    description: "Eliminates the depreciation deduction on vehicle parts during claim settlement, ensuring full claim amount.",
    Icon: Percent,
    cost: "+15-20% of base premium"
  },
  {
    id: "roadside-assistance",
    title: "Roadside Assistance",
    description: "24/7 emergency services including towing, battery jump-start, fuel delivery, and on-spot repairs.",
    Icon: Wrench,
    cost: "+5-10% of base premium"
  },
  {
    id: "engine-protection",
    title: "Engine Protection Cover",
    description: "Covers damages to the engine due to water ingression or oil leakage, which are typically excluded.",
    Icon: Shield,
    cost: "+10-15% of base premium"
  },
  {
    id: "ncb-protection",
    title: "NCB Protection",
    description: "Preserves your No Claim Bonus even after making a claim, safeguarding your accumulated discount.",
    Icon: Umbrella,
    cost: "+10-15% of base premium"
  },
  {
    id: "return-to-invoice",
    title: "Return to Invoice",
    description: "Covers the difference between the insured value and the invoice value in case of total loss or theft.",
    Icon: Clock,
    cost: "+10-20% of base premium"
  },
  {
    id: "passenger-cover",
    title: "Passenger Cover",
    description: "Provides personal accident coverage for passengers traveling in your vehicle.",
    Icon: PhoneCall,
    cost: "+5-10% of base premium"
  }
];

const VehicleInsuranceAddOns = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Vehicle Insurance Add-on Options</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Enhance your basic vehicle insurance policy with these optional add-ons for comprehensive protection
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {addOnOptions.map(addon => (
            <Card key={addon.id} className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <addon.Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{addon.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{addon.description}</p>
                    {addon.cost && (
                      <p className="text-xs font-medium text-blue-600">
                        Approximate cost: {addon.cost}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleInsuranceAddOns;

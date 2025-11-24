
import React from "react";
import { Heart, Stethoscope, BadgeDollarSign, Umbrella, Accessibility, UserMinus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface RiderOption {
  id: string;
  title: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  cost?: string;
}

const riderOptions: RiderOption[] = [
  {
    id: "critical-illness",
    title: "Critical Illness Rider",
    description: "Pays a lump sum if diagnosed with specified critical illnesses like cancer, heart attack, or stroke.",
    Icon: Heart,
    cost: "+15-20% of base premium"
  },
  {
    id: "accidental-death",
    title: "Accidental Death Benefit",
    description: "Provides additional payout (typically double the sum assured) in case of death due to an accident.",
    Icon: UserMinus,
    cost: "+10-15% of base premium"
  },
  {
    id: "disability",
    title: "Disability Cover",
    description: "Offers financial protection if you become permanently disabled and unable to work.",
    Icon: Accessibility,
    cost: "+15-25% of base premium"
  },
  {
    id: "premium-waiver",
    title: "Premium Waiver Benefit",
    description: "Waives future premium payments if you become disabled or diagnosed with critical illness.",
    Icon: BadgeDollarSign,
    cost: "+5-10% of base premium"
  },
  {
    id: "terminal-illness",
    title: "Terminal Illness Benefit",
    description: "Advances a portion of death benefit if diagnosed with a terminal illness with life expectancy under 12 months.",
    Icon: Stethoscope,
    cost: "+5-8% of base premium"
  },
  {
    id: "income-benefit",
    title: "Family Income Benefit",
    description: "Provides regular monthly income to your family for a specified period after your death.",
    Icon: Umbrella,
    cost: "+10-20% of base premium"
  }
];

const TermRiderOptions = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Term Insurance Rider Options</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Enhance your term insurance policy with these optional add-ons for comprehensive protection
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {riderOptions.map(rider => (
            <Card key={rider.id} className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-indigo-50 p-3 rounded-full">
                    <rider.Icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{rider.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{rider.description}</p>
                    {rider.cost && (
                      <p className="text-xs font-medium text-indigo-600">
                        Approximate cost: {rider.cost}
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

export default TermRiderOptions;

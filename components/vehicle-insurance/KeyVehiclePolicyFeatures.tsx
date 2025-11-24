
import React from "react";
import { Check } from "lucide-react";

interface PolicyFeature {
  id: string;
  title: string;
  description: string;
}

const policyFeatures: PolicyFeature[] = [
  {
    id: "damage-coverage",
    title: "Own Damage Coverage",
    description: "Covers damages to your own vehicle due to accidents, theft, fire, natural disasters, and man-made calamities."
  },
  {
    id: "third-party",
    title: "Third-Party Liability",
    description: "Mandatory coverage that protects against financial liability for injuries or damages caused to third parties."
  },
  {
    id: "personal-accident",
    title: "Personal Accident Cover",
    description: "Provides compensation in case of accidental death or permanent disability of the vehicle owner-driver."
  },
  {
    id: "cashless-claims",
    title: "Cashless Claims",
    description: "Get your vehicle repaired at network garages without paying out of pocket, as the insurer settles bills directly."
  },
  {
    id: "roadside-assistance",
    title: "24/7 Roadside Assistance",
    description: "Emergency services like towing, battery jump-start, fuel delivery, and minor repairs at the breakdown location."
  },
  {
    id: "no-claim-bonus",
    title: "No Claim Bonus",
    description: "Progressive discount of up to 50% on premiums for each claim-free year, transferable between insurers."
  },
  {
    id: "depreciation-waiver",
    title: "Zero Depreciation Cover",
    description: "Optional add-on that waives the depreciation deduction on replaced parts during claim settlement."
  },
  {
    id: "passenger-cover",
    title: "Passenger Coverage",
    description: "Protection for passengers traveling in your vehicle in case of accidents and injuries."
  }
];

const KeyVehiclePolicyFeatures = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Key Features of Vehicle Insurance Policy</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            These essential features provide comprehensive protection for your vehicle and financial security for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {policyFeatures.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex gap-4"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="bg-green-100 p-1 rounded-full">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyVehiclePolicyFeatures;

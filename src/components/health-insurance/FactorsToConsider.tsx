
import React from "react";

interface Factor {
  id: string;
  title: string;
  description: string;
}

const factors: Factor[] = [
  {
    id: "coverage",
    title: "Coverage Amount",
    description: "Choose a sum insured that can cover potential medical expenses based on your city, age, and family history."
  },
  {
    id: "network",
    title: "Hospital Network",
    description: "Check if your preferred hospitals and healthcare providers are in the insurer's network for cashless treatment."
  },
  {
    id: "premium",
    title: "Premium Cost",
    description: "Compare premiums across insurers for similar coverage, but don't compromise coverage just to save on premium."
  },
  {
    id: "waitingPeriod",
    title: "Waiting Period",
    description: "Consider the waiting period for pre-existing diseases and specific treatments before coverage begins."
  },
  {
    id: "subLimits",
    title: "Sub-limits & Co-pay",
    description: "Check for any caps on specific treatments or room rent, and whether you need to pay a percentage of claims."
  },
  {
    id: "claimSettlement",
    title: "Claim Settlement Ratio",
    description: "Research the insurer's history of approving claims to ensure a smooth experience when you need it most."
  }
];

const FactorsToConsider = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Factors to Consider</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            When choosing the right health insurance policy, consider these important factors:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {factors.map((factor) => (
            <div 
              key={factor.id} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{factor.title}</h3>
              <p className="text-gray-600">{factor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactorsToConsider;

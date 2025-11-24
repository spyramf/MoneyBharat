
import React from "react";
import { Check } from "lucide-react";

interface PolicyFeature {
  id: string;
  title: string;
  description: string;
}

const policyFeatures: PolicyFeature[] = [
  {
    id: "death-benefit",
    title: "Death Benefit",
    description: "Provides a lump-sum payout to nominees in case of the policyholder's death during the policy term."
  },
  {
    id: "maturity-benefit",
    title: "No Maturity Benefit",
    description: "Pure term insurance has no maturity benefits unless you opt for a return of premium policy variant."
  },
  {
    id: "rider-options",
    title: "Optional Riders",
    description: "Enhance your coverage with additional riders for critical illness, accidental death, disability, and waiver of premium."
  },
  {
    id: "tax-benefits",
    title: "Tax Benefits",
    description: "Premiums paid qualify for tax deductions under Section 80C, and death benefits are tax-free under Section 10(10D)."
  },
  {
    id: "free-look",
    title: "Free Look Period",
    description: "30-day period after policy issuance to review and return the policy if you're not satisfied with the terms."
  },
  {
    id: "grace-period",
    title: "Grace Period",
    description: "Additional time (usually 30 days) beyond the due date to pay your premium without policy lapse."
  },
  {
    id: "premium-payment",
    title: "Flexible Premium Payment",
    description: "Options to pay premiums monthly, quarterly, half-yearly, or annually based on your financial convenience."
  },
  {
    id: "policy-revival",
    title: "Policy Revival",
    description: "Option to revive a lapsed policy within a specific period by paying outstanding premiums with interest."
  }
];

const KeyTermPolicyFeatures = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Key Features of Term Insurance</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            These essential features make term insurance the most straightforward and affordable life insurance option
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {policyFeatures.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex gap-4"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="bg-indigo-100 p-1 rounded-full">
                  <Check className="w-5 h-5 text-indigo-600" />
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

export default KeyTermPolicyFeatures;

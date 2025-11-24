
import React from "react";
import { Check } from "lucide-react";

interface PolicyFeature {
  id: string;
  title: string;
  description: string;
}

const policyFeatures: PolicyFeature[] = [
  {
    id: "hospitalization",
    title: "Hospitalization Coverage",
    description: "Covers expenses for room charges, ICU, doctor fees, medicines, tests, and other services during hospital stays."
  },
  {
    id: "pre-post",
    title: "Pre & Post Hospitalization",
    description: "Covers medical expenses incurred before and after hospitalization, typically for 30-60 days pre and 60-90 days post."
  },
  {
    id: "daycare",
    title: "Daycare Procedures",
    description: "Covers treatments and surgeries that require less than 24 hours of hospitalization, such as cataract surgery or dialysis."
  },
  {
    id: "no-claim",
    title: "No-Claim Bonus",
    description: "Rewards policy holders with increased coverage or reduced premiums for not making claims during the policy year."
  },
  {
    id: "cashless",
    title: "Cashless Treatment",
    description: "Enables treatment at network hospitals without upfront payment, as the insurer settles bills directly with the hospital."
  },
  {
    id: "ayush",
    title: "AYUSH Coverage",
    description: "Covers alternative treatments like Ayurveda, Yoga, Unani, Siddha, and Homeopathy at approved healthcare centers."
  },
  {
    id: "checkups",
    title: "Preventive Health Check-ups",
    description: "Offers free periodic health check-ups to detect potential health issues early, even without hospitalization."
  },
  {
    id: "restoration",
    title: "Restoration Benefit",
    description: "Reinstates the sum insured if it's exhausted during the policy year, providing coverage for future claims."
  }
];

const KeyPolicyFeatures = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Key Features of a Health Insurance Policy</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            These essential features are typically included in comprehensive health insurance plans, providing valuable benefits.
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

export default KeyPolicyFeatures;

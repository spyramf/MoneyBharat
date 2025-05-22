
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeDollarSign, Receipt, ShieldCheck } from "lucide-react";

interface TaxBenefit {
  id: string;
  title: string;
  description: string;
  section: string;
  icon: React.ReactNode;
  limit?: string;
}

const taxBenefits: TaxBenefit[] = [
  {
    id: "premium-deduction",
    title: "Premium Deduction",
    description: "The premiums paid for term insurance policies qualify for tax deduction, reducing your taxable income.",
    section: "Section 80C",
    icon: <Receipt className="h-8 w-8 text-indigo-600" />,
    limit: "Up to ₹1,50,000 per financial year"
  },
  {
    id: "death-benefit",
    title: "Death Benefit Exemption",
    description: "The sum assured paid to nominees in case of the policyholder's death is completely exempt from income tax.",
    section: "Section 10(10D)",
    icon: <ShieldCheck className="h-8 w-8 text-indigo-600" />,
    limit: "No upper limit on exemption"
  },
  {
    id: "health-rider",
    title: "Health-Related Riders",
    description: "Premiums paid for health-related riders like critical illness or disability can qualify for additional tax benefits.",
    section: "Section 80D",
    icon: <BadgeDollarSign className="h-8 w-8 text-indigo-600" />,
    limit: "Up to ₹25,000 (₹50,000 for senior citizens)"
  }
];

const TermTaxBenefits = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Tax Benefits of Term Insurance</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Term insurance not only provides financial security but also offers significant tax advantages
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {taxBenefits.map((benefit) => (
            <Card key={benefit.id} className="border-0 shadow hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-indigo-100 rounded-full">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {benefit.section}
                  </div>
                  <p className="text-gray-600 mb-3">{benefit.description}</p>
                  {benefit.limit && (
                    <p className="text-sm font-medium text-indigo-600 mt-auto">
                      {benefit.limit}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 bg-white p-6 rounded-lg shadow-sm max-w-4xl mx-auto">
          <p className="text-center text-sm text-gray-500">
            <span className="font-medium">Disclaimer:</span> Tax benefits are subject to changes in tax laws. 
            Please consult a tax advisor for detailed information specific to your situation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermTaxBenefits;

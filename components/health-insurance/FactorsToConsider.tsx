import React from "react";
import { Users, Receipt, Clock, Check, Building, X } from "lucide-react";

interface Factor {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const factors: Factor[] = [
  {
    id: "coverage",
    title: "Coverage Amount",
    description: "Evaluate your medical history, potential healthcare needs, and financial situation to determine an adequate sum insured. The coverage should be sufficient to handle medical inflation and unforeseen critical illnesses.",
    icon: <Check className="w-5 h-5 text-primary" />
  },
  {
    id: "family",
    title: "Family Size & Composition",
    description: "Consider whether an individual plan or family floater policy would better suit your needs based on your family's age, health status, and medical requirements.",
    icon: <Users className="w-5 h-5 text-primary" />
  },
  {
    id: "network",
    title: "Network Hospitals",
    description: "Check if your preferred hospitals are included in the insurer's network for cashless treatment. A wide hospital network ensures convenient access to quality healthcare services.",
    icon: <Building className="w-5 h-5 text-primary" />
  },
  {
    id: "waitingPeriod",
    title: "Waiting Periods",
    description: "Understand the various waiting periods for pre-existing diseases, specific ailments, and maternity benefits. Choose policies with shorter waiting periods if you have existing health conditions.",
    icon: <Clock className="w-5 h-5 text-primary" />
  },
  {
    id: "exclusions",
    title: "Exclusions & Sub-limits",
    description: "Carefully review policy exclusions and sub-limits on room rent, specific treatments, or procedures. Policies with fewer restrictions and sub-limits are generally more beneficial.",
    icon: <X className="w-5 h-5 text-primary" />
  },
  {
    id: "claimSettlement",
    title: "Claim Settlement Ratio",
    description: "Research the insurer's claim settlement ratio and turnaround time. A higher ratio indicates reliability and efficiency in processing claims when you need them most.",
    icon: <Receipt className="w-5 h-5 text-primary" />
  }
];

const FactorsToConsider = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Choosing a Health Insurance Plan</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Key factors to consider when selecting the right health insurance for you and your family
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {factors.map((factor) => (
            <div 
              key={factor.id} 
              className="bg-background p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow flex gap-4"
            >
              <div className="flex-shrink-0 mt-1">
                {factor.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{factor.title}</h3>
                <p className="text-muted-foreground">{factor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactorsToConsider;
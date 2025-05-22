
import React from "react";

interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const benefits: Benefit[] = [
  {
    id: "protection",
    title: "Financial Protection",
    description: "Shield yourself from the burden of high medical expenses during emergencies and treatments.",
    icon: <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold">₹</div>
  },
  {
    id: "cashless",
    title: "Cashless Treatment",
    description: "Get treatment without upfront payment at thousands of network hospitals across the country.",
    icon: <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xl font-bold">C</div>
  },
  {
    id: "tax",
    title: "Tax Benefits",
    description: "Enjoy tax deductions on premiums paid under Section 80D of the Income Tax Act.",
    icon: <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 text-xl font-bold">T</div>
  },
  {
    id: "preventive",
    title: "Preventive Healthcare",
    description: "Many plans cover annual check-ups, helping you detect health issues before they become serious.",
    icon: <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xl font-bold">P</div>
  }
];

const HealthBenefits = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Benefits of Health Insurance</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Investing in health insurance offers numerous advantages for you and your family's wellbeing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
            >
              <div className="mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthBenefits;

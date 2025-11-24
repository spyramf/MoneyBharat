
import React from "react";
import { renderIcon } from "@/utils/iconMapping";

interface Benefit {
  title: string;
  description: string;
  iconName: string;
  iconBg: string;
  iconColor: string;
}

interface KeyBenefitsProps {
  benefits: Benefit[];
}

const KeyBenefits = ({ benefits }: KeyBenefitsProps) => {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Key Benefits of Insurance</h2>
          <p className="text-lg text-gray-600">
            Insurance is more than just protection—it's an essential component of your financial planning
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="glass-card p-6 border border-gray-100 rounded-xl">
              <div className="mb-4">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${benefit.iconBg} ${benefit.iconColor}`}>
                  {renderIcon(benefit.iconName)}
                </div>
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

export default KeyBenefits;

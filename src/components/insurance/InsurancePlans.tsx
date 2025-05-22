
import React from "react";
import InsuranceCard from "./InsuranceCard";

interface InsurancePlan {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface InsuranceType {
  id: string;
  title: string;
  cards: InsurancePlan[];
}

interface InsurancePlansProps {
  selectedType: InsuranceType;
}

const InsurancePlans = ({ selectedType }: InsurancePlansProps) => {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">{selectedType.title} Plans</h2>
          <p className="text-lg text-gray-600">
            Compare and choose from our range of {selectedType.title.toLowerCase()} plans designed for your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectedType.cards.map((card, index) => (
            <InsuranceCard 
              key={index} 
              title={card.title} 
              description={card.description} 
              icon={card.icon} 
              color={card.color} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsurancePlans;

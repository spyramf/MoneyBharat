
import React from "react";
import { Heart, Shield, Car, Home, ShieldCheck } from "lucide-react";

interface CategoryProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface InsuranceCategoriesProps {
  categories: CategoryProps[];
  selectedType: string;
  onSelectType: (id: string) => void;
}

const InsuranceCategories = ({ categories, selectedType, onSelectType }: InsuranceCategoriesProps) => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            Insurance Categories
          </h2>
          <p className="text-lg text-gray-600">
            Choose from our range of insurance products designed to protect what matters most to you
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map(category => (
            <div 
              key={category.id} 
              className={`glass-card p-6 text-center cursor-pointer transition-all ${
                selectedType === category.id 
                  ? 'ring-2 ring-fintech-purple shadow-lg' 
                  : 'hover:shadow-md hover:border-fintech-purple/20'
              }`} 
              onClick={() => onSelectType(category.id)}
            >
              <div className="flex justify-center mb-4">
                {category.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceCategories;

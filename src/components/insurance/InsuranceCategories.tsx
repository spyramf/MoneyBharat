
import React from "react";
import { renderIcon } from "@/utils/iconMapping";

interface InsuranceCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
}

interface InsuranceCategoriesProps {
  categories: InsuranceCategory[];
  selectedType: string;
  onSelectType: (id: string) => void;
}

const InsuranceCategories = ({ categories, selectedType, onSelectType }: InsuranceCategoriesProps) => {
  return (
    <section className="py-12 px-4 sm:px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Browse Insurance Categories</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`p-4 rounded-xl cursor-pointer transition-all duration-200 text-center ${
                selectedType === category.id ? "bg-white shadow-lg ring-2 ring-fintech-purple" : "bg-white shadow hover:shadow-md"
              }`}
              onClick={() => onSelectType(category.id)}
            >
              <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 ${
                selectedType === category.id ? "bg-fintech-purple text-white" : "bg-fintech-purple/10 text-fintech-purple"
              }`}>
                {renderIcon(category.iconName)}
              </div>
              <h3 className="font-semibold text-gray-900">{category.title}</h3>
              <p className="text-sm text-gray-500 mt-1 hidden md:block">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceCategories;

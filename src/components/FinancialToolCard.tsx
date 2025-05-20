
import React from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface FinancialToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  linkText: string;
  linkHref: string;
  className?: string;
}

const FinancialToolCard: React.FC<FinancialToolCardProps> = ({
  icon,
  title,
  description,
  bgColor,
  linkText,
  linkHref,
  className = ""
}) => {
  return (
    <div className={`${bgColor} rounded-xl p-8 text-center transition-transform hover:-translate-y-1 hover:shadow-xl ${className}`}>
      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 flex items-center justify-center">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      
      <p className="text-gray-600 mb-6">
        {description}
      </p>
      
      <a 
        href={linkHref} 
        className="inline-flex items-center font-medium text-fintech-green hover:text-fintech-blue transition-colors"
      >
        {linkText} 
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
};

export default FinancialToolCard;

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
interface Benefit {
  title: string;
  description: string;
  color: string;
}
interface MoneyBharatBenefitsProps {
  benefits: Benefit[];
}
const MoneyBharatBenefits = ({
  benefits
}: MoneyBharatBenefitsProps) => {
  return <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            Benefits of <span className="gradient-text bg-gradient-to-r from-fintech-purple to-fintech-blue bg-clip-text text-transparent">Money Bharat</span> Insurance Services
          </h2>
          <p className="text-lg text-gray-600">
            Why thousands of customers choose us for their insurance needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => <Card key={index} className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center bg-gradient-to-r from-fintech-green to-fintech-green text-white bg-fintech-green">
                  <Check className="h-6 w-6 bg-transparent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default MoneyBharatBenefits;
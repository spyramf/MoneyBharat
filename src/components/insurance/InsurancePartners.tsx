
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building } from "lucide-react";

const InsurancePartners = () => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            Our Insurance <span className="gradient-text bg-gradient-to-r from-fintech-purple to-fintech-blue bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            We partner with India's most trusted insurance providers to bring you the best coverage options at competitive prices
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {/* Partner Cards */}
          {[1, 2, 3, 4, 5, 6].map(item => (
            <Card key={item} className="flex items-center justify-center p-6 hover:shadow-md transition-all">
              <CardContent className="p-0 flex flex-col items-center">
                <div className="flex items-center justify-center mb-2">
                  <Building className="h-10 w-10 text-fintech-green" />
                </div>
                <p className="text-center font-medium">Insurance Partner {item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-white border border-fintech-green text-fintech-purple hover:bg-fintech-green hover:text-white">
            View All Partners
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InsurancePartners;

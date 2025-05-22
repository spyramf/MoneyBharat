
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const VehicleInsuranceHero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-100 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">
            Vehicle Insurance
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Protect Your Vehicle with Comprehensive Coverage
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Get the best insurance for your car, bike, or commercial vehicle with affordable premiums and hassle-free claims. Save up to 70% on renewals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-fintech-green">
              Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-600">
              Compare Plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleInsuranceHero;

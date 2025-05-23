
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import InsuranceQuoteForm from "../insurance/InsuranceQuoteForm";

const VehicleInsuranceHero = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-100 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-800 font-medium text-sm mb-4">
            General Insurance
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Protection for Your Valuable Assets
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Get the best insurance for your car, bike, or commercial vehicle with affordable premiums and hassle-free claims. Protect against natural disasters and more.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              className="bg-fintech-green"
              onClick={() => setIsQuoteFormOpen(true)}
            >
              Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-orange-600 text-orange-600">
              Compare Plans
            </Button>
          </div>
        </div>
      </div>

      <InsuranceQuoteForm 
        open={isQuoteFormOpen}
        onOpenChange={setIsQuoteFormOpen}
        defaultInsuranceType="vehicle"
      />
    </section>
  );
};

export default VehicleInsuranceHero;

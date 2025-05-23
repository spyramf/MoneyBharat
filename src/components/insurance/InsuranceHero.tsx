
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import InsuranceQuoteForm from "./InsuranceQuoteForm";

const InsuranceHero = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100">
          <span className="text-sm font-medium text-blue-600">Compare Insurance Plans from 50+ Providers</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Find the <span className="gradient-text bg-gradient-to-r from-fintech-purple to-fintech-blue bg-clip-text text-transparent">Perfect Insurance</span> for You
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Compare plans from top insurers and get the right coverage at the best price
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-gradient-to-r from-fintech-purple to-fintech-blue text-white px-6 py-6 text-lg"
            onClick={() => setIsQuoteFormOpen(true)}
          >
            Get Free Quote
          </Button>
          <Button variant="outline" className="border-fintech-purple text-fintech-purple px-6 py-6 text-lg">
            Talk to an Expert
          </Button>
        </div>
      </div>

      <InsuranceQuoteForm 
        open={isQuoteFormOpen}
        onOpenChange={setIsQuoteFormOpen}
      />
    </section>
  );
};

export default InsuranceHero;

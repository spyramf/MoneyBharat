
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import InsuranceQuoteForm from "../insurance/InsuranceQuoteForm";

const TermInsuranceHero = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-100 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-800 font-medium text-sm mb-4">
            Life Insurance
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Secure Your Family's Future with Term Insurance
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Get high coverage at affordable premiums with term insurance plans from leading insurers. Compare and choose the best plan for your needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              className="bg-fintech-purple"
              onClick={() => setIsQuoteFormOpen(true)}
            >
              Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-purple-600 text-purple-600">
              Compare Plans
            </Button>
          </div>
        </div>
      </div>

      <InsuranceQuoteForm 
        open={isQuoteFormOpen}
        onOpenChange={setIsQuoteFormOpen}
        defaultInsuranceType="term"
      />
    </section>
  );
};

export default TermInsuranceHero;

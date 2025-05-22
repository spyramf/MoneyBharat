
import React from "react";
import { Button } from "@/components/ui/button";

const InsuranceCTA = () => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-fintech-green to-fintech-orange text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Insured?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Take the first step towards financial security and peace of mind
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-fintech-green hover:bg-gray-100 px-8 py-6 text-lg">
            Get a Free Quote
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
            Speak to an Advisor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InsuranceCTA;

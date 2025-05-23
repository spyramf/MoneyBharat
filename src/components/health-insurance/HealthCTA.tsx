
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Upload } from "lucide-react";
import InsuranceQuoteForm from "../insurance/InsuranceQuoteForm";

const HealthCTA = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-fintech-green via-blue-600 to-blue-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
            Secure Your Family's Health Today
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Don't wait until it's too late. Get comprehensive health insurance coverage and enjoy peace of mind knowing your family is protected.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg transition-all duration-300 group"
              onClick={() => setIsQuoteFormOpen(true)}
            >
              <span className="flex items-center">
                Get a Quote
                <span className="ml-2 group-hover:hidden transition-all">
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="ml-2 hidden group-hover:flex items-center gap-1 transition-all">
                  <Upload className="h-4 w-4" /> Attach File
                </span>
              </span>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white shadow-lg transition-all duration-300 bg-fintech-green">
              <Phone className="mr-2 h-4 w-4" /> Speak to an Advisor
            </Button>
          </div>
        </div>
      </div>

      <InsuranceQuoteForm 
        open={isQuoteFormOpen}
        onOpenChange={setIsQuoteFormOpen}
        defaultInsuranceType="health"
      />
    </section>
  );
};

export default HealthCTA;

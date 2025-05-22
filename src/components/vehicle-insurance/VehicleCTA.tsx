
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const VehicleCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
            Protect Your Vehicle Today
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get the best insurance rates with comprehensive coverage and enjoy peace of mind knowing your vehicle is fully protected.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg transition-all duration-300">
              <span className="flex items-center">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white shadow-lg transition-all duration-300 hover:bg-white/10">
              <Phone className="mr-2 h-4 w-4" /> Speak to an Advisor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleCTA;

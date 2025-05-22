
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Upload } from "lucide-react";

const VehicleCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
            Secure Your Valuable Assets Today
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Don't wait until it's too late. Get comprehensive general insurance coverage for your vehicles and protect against natural disasters with our affordable plans.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg transition-all duration-300 group">
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
    </section>
  );
};

export default VehicleCTA;

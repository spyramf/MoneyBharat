
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HealthCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Secure Your Family's Health Today
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Don't wait until it's too late. Get comprehensive health insurance coverage and enjoy peace of mind knowing your family is protected.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get a Quote <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
              Speak to an Advisor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthCTA;

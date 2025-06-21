
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HealthInsuranceHero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-100 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Money Bharat Health Insurance - Protect Your Family's Future
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Get comprehensive health coverage with affordable premiums and
            hassle-free claims. Compare plans from top insurers and get the best deal.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-fintech-green">
              Get a Free Quote <ArrowRight className="ml-2" />
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

export default HealthInsuranceHero;

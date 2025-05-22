
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const TermInsuranceHero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-100 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm mb-4">
            Term Life Insurance
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Secure Your Family's Financial Future
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Comprehensive term life insurance plans with high coverage at affordable premiums.
            Get up to ₹1 Crore coverage starting at just ₹600/month.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-fintech-green">
              Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-indigo-600 text-indigo-600">
              Compare Plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermInsuranceHero;


import React from "react";
import { ArrowRight, ListOrdered } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            How <span className="gradient-text bg-gradient-to-r from-fintech-purple to-fintech-blue bg-clip-text text-transparent">Money Bharat</span> Works
          </h2>
          <p className="text-lg text-gray-600">
            Simple steps to get insured with us
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-fintech-purple to-fintech-blue text-white flex items-center justify-center mb-4">
              <ListOrdered className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Share Your Requirements</h3>
            <p className="text-gray-600 mb-4">Tell us about your insurance needs</p>
            <ArrowRight className="hidden md:block transform rotate-0 md:rotate-90 lg:rotate-0 h-6 w-6 text-gray-400" />
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-fintech-orange to-fintech-purple text-white flex items-center justify-center mb-4">
              <ListOrdered className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Compare Plans</h3>
            <p className="text-gray-600 mb-4">View and compare plans from top insurers</p>
            <ArrowRight className="hidden md:block transform rotate-0 md:rotate-90 lg:rotate-0 h-6 w-6 text-gray-400" />
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-fintech-blue to-fintech-ocean-blue text-white flex items-center justify-center mb-4">
              <ListOrdered className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Choose Your Plan</h3>
            <p className="text-gray-600 mb-4">Select the best plan for your needs</p>
            <ArrowRight className="hidden md:block transform rotate-0 md:rotate-90 lg:rotate-0 h-6 w-6 text-gray-400" />
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-fintech-deep-purple to-fintech-purple text-white flex items-center justify-center mb-4">
              <ListOrdered className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Get Insured</h3>
            <p className="text-gray-600 mb-4">Complete the process and receive your policy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

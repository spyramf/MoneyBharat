
import React from "react";
import { ShieldCheck, User, Shield } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose <span className="gradient-text bg-gradient-to-r from-fintech-purple to-fintech-blue bg-clip-text text-transparent">Money Bharat</span> for Insurance?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Discover why we are the preferred choice for insurance in India
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-fintech-purple to-fintech-blue rounded-full flex items-center justify-center">
              <ShieldCheck className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Top-Rated Insurers</h3>
            <p className="text-gray-600">
              We partner with only the most reliable and financially stable insurance companies
            </p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-fintech-orange to-fintech-purple rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Expert Advice</h3>
            <p className="text-gray-600">
              Our insurance specialists help you choose the right coverage for your specific needs
            </p>
          </div>
          
          <div className="glass-card p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-fintech-blue to-fintech-ocean-blue rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Hassle-Free Claims</h3>
            <p className="text-gray-600">
              We assist you throughout the claim process for quick and smooth settlements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

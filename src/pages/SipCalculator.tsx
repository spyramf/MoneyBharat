
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calculator } from "lucide-react";

const SipCalculator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">SIP Calculator</h1>
              <p className="text-gray-600">
                Calculate your potential returns from systematic investment plans
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <Calculator className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              
              <p className="text-center text-lg mb-8">
                This calculator is coming soon. Check back later for updates.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SipCalculator;

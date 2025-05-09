
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";

const TaxSaving = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Tax Saving Tools</h1>
              <p className="text-gray-600">
                Find the best tax saving investment options
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                  <Search className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              
              <p className="text-center text-lg mb-8">
                These tools are coming soon. Check back later for updates.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TaxSaving;

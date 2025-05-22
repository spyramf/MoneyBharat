
import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InsurancePremiumCalculator = () => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="glass-card p-8 border border-gray-100 shadow-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Insurance Premium Calculator</h2>
            <p className="text-lg text-gray-600">
              Get an estimate of your insurance premium based on your requirements
            </p>
          </div>
          
          <Tabs defaultValue="health" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="health">Health Insurance</TabsTrigger>
              <TabsTrigger value="life">Life Insurance</TabsTrigger>
              <TabsTrigger value="car">Car Insurance</TabsTrigger>
            </TabsList>
            
            <TabsContent value="health" className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md">
                    <option>18-25 years</option>
                    <option>26-35 years</option>
                    <option>36-45 years</option>
                    <option>46-55 years</option>
                    <option>56+ years</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Coverage Amount
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md">
                    <option>₹3 Lakhs</option>
                    <option>₹5 Lakhs</option>
                    <option>₹10 Lakhs</option>
                    <option>₹15 Lakhs</option>
                    <option>₹20 Lakhs</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Family Members
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md">
                    <option>Self</option>
                    <option>Self + Spouse</option>
                    <option>Self + Spouse + 1 Child</option>
                    <option>Self + Spouse + 2 Children</option>
                    <option>Self + Spouse + Parents</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md">
                    <option>Tier 1 (Metro)</option>
                    <option>Tier 2</option>
                    <option>Tier 3</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button className="bg-gradient-to-r from-fintech-purple to-fintech-blue px-8 py-6 text-lg">
                  Calculate Premium
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="life" className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md">
                    <option>18-25 years</option>
                    <option>26-35 years</option>
                    <option>36-45 years</option>
                    <option>46-55 years</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Coverage Amount
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md">
                    <option>₹50 Lakhs</option>
                    <option>₹1 Crore</option>
                    <option>₹2 Crores</option>
                    <option>₹5 Crores</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Policy Term
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md">
                    <option>10 years</option>
                    <option>15 years</option>
                    <option>20 years</option>
                    <option>25 years</option>
                    <option>30 years</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Income
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md">
                    <option>₹5-10 Lakhs per annum</option>
                    <option>₹10-15 Lakhs per annum</option>
                    <option>₹15-25 Lakhs per annum</option>
                    <option>Above ₹25 Lakhs per annum</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button className="bg-gradient-to-r from-fintech-purple to-fintech-blue px-8 py-6 text-lg">
                  Calculate Premium
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="car" className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Car Make
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md">
                    <option>Maruti Suzuki</option>
                    <option>Hyundai</option>
                    <option>Tata</option>
                    <option>Honda</option>
                    <option>Toyota</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Car Model
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md">
                    <option>Select Car Model</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Car Age
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md">
                    <option>Less than 1 year</option>
                    <option>1-3 years</option>
                    <option>3-5 years</option>
                    <option>More than 5 years</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Insurance Type
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md">
                    <option>Comprehensive</option>
                    <option>Third-Party</option>
                    <option>Own Damage</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button className="bg-gradient-to-r from-fintech-purple to-fintech-blue px-8 py-6 text-lg">
                  Calculate Premium
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default InsurancePremiumCalculator;


import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, Info } from "lucide-react";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription } from "@/components/ui/form";
import { useForm } from "react-hook-form";

type FormValues = {
  vehicleType: string;
  vehicleAge: string;
  purchasePrice: string;
  fuelType: string;
  registrationCity: string;
};

const IDVCalculator = () => {
  const [idvValue, setIdvValue] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  
  const form = useForm<FormValues>({
    defaultValues: {
      vehicleType: "car",
      vehicleAge: "0",
      purchasePrice: "",
      fuelType: "petrol",
      registrationCity: "",
    },
  });

  const calculateIDV = (data: FormValues) => {
    // Basic IDV calculation logic (simplified)
    const price = parseFloat(data.purchasePrice);
    const ageInYears = parseInt(data.vehicleAge);
    
    // Depreciation percentages by age
    let depreciationPercentage = 0;
    if (ageInYears < 1) {
      depreciationPercentage = 5;
    } else if (ageInYears < 2) {
      depreciationPercentage = 15;
    } else if (ageInYears < 3) {
      depreciationPercentage = 20;
    } else if (ageInYears < 4) {
      depreciationPercentage = 30;
    } else if (ageInYears < 5) {
      depreciationPercentage = 40;
    } else {
      depreciationPercentage = 50; // Max depreciation
    }
    
    // Calculate IDV
    const calculatedIDV = price * (1 - (depreciationPercentage / 100));
    setIdvValue(Math.round(calculatedIDV));
    setShowResult(true);
  };

  const onSubmit = (data: FormValues) => {
    calculateIDV(data);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">IDV Calculator</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Calculate the Insured Declared Value (IDV) of your vehicle to understand your insurance coverage amount
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-600" />
                Vehicle IDV Calculator
              </CardTitle>
              <CardDescription>
                IDV is the maximum sum insured fixed by the insurer, calculated based on the manufacturer's listed selling price minus depreciation.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="vehicleType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vehicle Type</FormLabel>
                          <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            {...field}
                          >
                            <option value="car">Car</option>
                            <option value="bike">Two-Wheeler</option>
                            <option value="commercial">Commercial Vehicle</option>
                          </select>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="vehicleAge"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vehicle Age (Years)</FormLabel>
                          <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            {...field}
                          >
                            <option value="0">Less than 6 months</option>
                            <option value="0.5">6 months - 1 year</option>
                            <option value="1">1-2 years</option>
                            <option value="2">2-3 years</option>
                            <option value="3">3-4 years</option>
                            <option value="4">4-5 years</option>
                            <option value="5">More than 5 years</option>
                          </select>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="purchasePrice"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ex-Showroom Price (₹)</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 800000" {...field} type="number" />
                          </FormControl>
                          <FormDescription>
                            Enter the original purchase price without taxes
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="fuelType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Fuel Type</FormLabel>
                          <select
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            {...field}
                          >
                            <option value="petrol">Petrol</option>
                            <option value="diesel">Diesel</option>
                            <option value="cng">CNG/LPG</option>
                            <option value="electric">Electric</option>
                          </select>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="registrationCity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Registration City</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Mumbai" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="flex justify-center">
                    <Button type="submit" className="bg-fintech-green px-8">
                      Calculate IDV
                    </Button>
                  </div>
                </form>
              </Form>
              
              {showResult && (
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-xl font-bold text-center mb-2">Estimated IDV Value</h3>
                  <p className="text-3xl font-bold text-center text-blue-700">₹{idvValue?.toLocaleString()}</p>
                  <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
                    <Info className="w-4 h-4" />
                    <p>The actual IDV may vary based on insurer's assessment and vehicle condition.</p>
                  </div>
                </div>
              )}
            </CardContent>
            
            <CardFooter className="bg-gray-50 border-t p-4 text-sm text-gray-600">
              IDV represents the maximum amount your insurer will pay in case of total loss or theft of your vehicle. It decreases with the age of your vehicle.
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IDVCalculator;

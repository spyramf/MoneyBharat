
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const QuickQuoteCalculator = () => {
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [coverageType, setCoverageType] = useState("");
  const [quote, setQuote] = useState<number | null>(null);

  const handleCalculate = () => {
    // Simple calculation logic for demo purposes
    const baseAmount = 5000;
    const ageMultiplier = parseInt(age) / 10;
    const coverageMultiplier = coverageType === "individual" ? 1 : 2.5;
    
    const calculatedQuote = Math.floor(baseAmount * ageMultiplier * coverageMultiplier);
    setQuote(calculatedQuote);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Get a Quick Quote</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enter a few details to get an estimated health insurance quote in seconds.
            Our calculator provides instant estimates based on your specific needs.
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Health Insurance Quote Calculator</CardTitle>
            <CardDescription>
              Fill in your details to get an instant quote
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input 
                  id="age" 
                  type="number" 
                  placeholder="Enter your age" 
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input 
                  id="city" 
                  placeholder="Enter your city" 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2 mb-6">
              <Label htmlFor="coverage-type">Coverage Type</Label>
              <Select value={coverageType} onValueChange={setCoverageType}>
                <SelectTrigger id="coverage-type">
                  <SelectValue placeholder="Select coverage type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="individual">Individual</SelectItem>
                  <SelectItem value="family">Family</SelectItem>
                  <SelectItem value="senior">Senior Citizen</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {quote !== null && (
              <div className="bg-blue-50 p-4 rounded-md mb-4">
                <p className="text-center text-gray-700">
                  Estimated annual premium: 
                  <span className="font-bold text-blue-600 ml-2 text-xl">
                    ₹{quote.toLocaleString()}
                  </span>
                </p>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700" 
              onClick={handleCalculate}
              disabled={!age || !city || !coverageType}
            >
              Calculate Quote
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default QuickQuoteCalculator;

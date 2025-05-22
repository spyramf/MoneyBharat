
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Bike, Truck, ShieldCheck, AlertTriangle } from "lucide-react";

interface InsuranceType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  pricing?: string;
  badgeText?: string;
  badgeVariant?: "info" | "pill" | "rate" | "fee";
}

const insuranceTypes: InsuranceType[] = [
  {
    id: "car-comprehensive",
    title: "Car Comprehensive Insurance",
    description: "Complete protection for your car against accidents, theft, natural disasters, and third-party liability.",
    icon: <Car className="w-6 h-6 text-white" />,
    pricing: "Starting at ₹2,094/year",
    badgeVariant: "rate"
  },
  {
    id: "car-third-party",
    title: "Car Third-Party Insurance",
    description: "Mandatory coverage that protects against third-party liability arising from accidents involving your car.",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    pricing: "Starting at ₹1,299/year",
    badgeVariant: "rate"
  },
  {
    id: "bike-comprehensive",
    title: "Two-Wheeler Comprehensive",
    description: "All-inclusive coverage for your bike against damages, theft, and third-party liability.",
    icon: <Bike className="w-6 h-6 text-white" />,
    pricing: "Starting at ₹756/year",
    badgeVariant: "rate"
  },
  {
    id: "bike-third-party",
    title: "Two-Wheeler Third-Party",
    description: "Basic mandatory coverage for legal liability arising from accidents involving your two-wheeler.",
    icon: <AlertTriangle className="w-6 h-6 text-white" />,
    pricing: "Starting at ₹482/year",
    badgeVariant: "rate"
  },
  {
    id: "commercial",
    title: "Commercial Vehicle Insurance",
    description: "Specialized coverage for commercial vehicles including goods carriers, taxis, and fleet vehicles.",
    icon: <Truck className="w-6 h-6 text-white" />,
    badgeText: "Custom quotes available",
    badgeVariant: "pill"
  },
  {
    id: "electric",
    title: "Electric Vehicle Insurance",
    description: "Tailored coverage for electric vehicles with special considerations for battery and charging equipment.",
    icon: <Car className="w-6 h-6 text-white" />,
    pricing: "Starting at ₹2,499/year",
    badgeVariant: "rate"
  }
];

const VehicleInsuranceTypes = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Types of Vehicle Insurance Plans</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Choose the right coverage based on your vehicle type and specific requirements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insuranceTypes.map((type) => (
            <Card key={type.id} className="shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="mb-5">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br 
                    ${type.id === "car-comprehensive" ? "from-blue-500 to-blue-600" : ""}
                    ${type.id === "car-third-party" ? "from-green-500 to-teal-600" : ""}
                    ${type.id === "bike-comprehensive" ? "from-amber-500 to-orange-600" : ""}
                    ${type.id === "bike-third-party" ? "from-purple-500 to-violet-600" : ""}
                    ${type.id === "commercial" ? "from-teal-500 to-teal-600" : ""}
                    ${type.id === "electric" ? "from-cyan-500 to-blue-500" : ""}
                  `}>
                    {type.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                
                <CardContent className="p-0">
                  {type.pricing && (
                    <Badge variant={type.badgeVariant} className="text-xs font-medium">
                      {type.pricing}
                    </Badge>
                  )}
                  {type.badgeText && (
                    <Badge variant={type.badgeVariant} className="text-xs font-medium">
                      {type.badgeText}
                    </Badge>
                  )}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleInsuranceTypes;

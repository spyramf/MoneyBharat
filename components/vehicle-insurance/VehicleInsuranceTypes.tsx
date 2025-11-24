
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Bike, Truck, ShieldCheck, Umbrella } from "lucide-react";

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
    title: "Car Insurance",
    description: "Complete protection for your car against accidents, theft, natural disasters, and third-party liability.",
    icon: <Car className="w-6 h-6 text-white" />,
    pricing: "Starting at ₹2,094/year",
    badgeVariant: "rate"
  },
  {
    id: "bike-comprehensive",
    title: "Two-Wheeler Insurance",
    description: "All-inclusive coverage for your bike against damages, theft, and third-party liability.",
    icon: <Bike className="w-6 h-6 text-white" />,
    pricing: "Starting at ₹756/year",
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
    id: "natural-disaster",
    title: "Natural Disaster Coverage",
    description: "Protection against damages caused by floods, earthquakes, storms and other natural calamities.",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    pricing: "Add-on coverage",
    badgeVariant: "info"
  },
  {
    id: "travel",
    title: "Travel Insurance",
    description: "Coverage for domestic and international trips, including medical emergencies and trip cancellations.",
    icon: <Umbrella className="w-6 h-6 text-white" />,
    pricing: "Starting at ₹499/trip",
    badgeVariant: "rate"
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
          <h2 className="text-3xl font-bold mb-3">General Insurance Solutions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Choose the right coverage based on your asset type and specific requirements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insuranceTypes.map((type) => (
            <Card key={type.id} className="shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
              <div className="p-6">
                <div className="mb-5">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br 
                    ${type.id === "car-comprehensive" ? "from-blue-500 to-blue-600" : ""}
                    ${type.id === "bike-comprehensive" ? "from-amber-500 to-orange-600" : ""}
                    ${type.id === "commercial" ? "from-teal-500 to-teal-600" : ""}
                    ${type.id === "natural-disaster" ? "from-purple-500 to-violet-600" : ""}
                    ${type.id === "travel" ? "from-green-500 to-teal-600" : ""}
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

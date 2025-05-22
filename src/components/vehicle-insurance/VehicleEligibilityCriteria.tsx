
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FileCheck, Calendar, UserCheck, Briefcase, Car, AlertTriangle } from "lucide-react";

interface Criteria {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  note?: string;
}

const eligibilityCriteria: Criteria[] = [
  {
    id: "ownership",
    title: "Vehicle Ownership",
    description: "You must be the registered owner of the vehicle or authorized by the owner to purchase insurance.",
    icon: <UserCheck className="w-6 h-6 text-blue-600" />,
    note: "Registration certificate is mandatory"
  },
  {
    id: "valid-registration",
    title: "Valid Registration",
    description: "The vehicle must have a valid registration certificate issued by the Regional Transport Office (RTO).",
    icon: <FileCheck className="w-6 h-6 text-blue-600" />
  },
  {
    id: "vehicle-age",
    title: "Vehicle Age",
    description: "For comprehensive coverage, most insurers accept vehicles up to 10-15 years old. Third-party has no age limit.",
    icon: <Calendar className="w-6 h-6 text-blue-600" />,
    note: "Older vehicles may have limited options"
  },
  {
    id: "inspection",
    title: "Vehicle Inspection",
    description: "For used vehicles or policy renewals after expiry, a physical inspection may be required.",
    icon: <Car className="w-6 h-6 text-blue-600" />
  },
  {
    id: "commercial-license",
    title: "Commercial Usage",
    description: "For commercial vehicles, valid permit and commercial registration are required.",
    icon: <Briefcase className="w-6 h-6 text-blue-600" />,
    note: "Additional documents for commercial vehicles"
  },
  {
    id: "restrictions",
    title: "Exclusions",
    description: "Vehicles with major modifications, or those used for illegal purposes are not eligible for insurance.",
    icon: <AlertTriangle className="w-6 h-6 text-blue-600" />,
    note: "Disclose all modifications"
  }
];

const VehicleEligibilityCriteria = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Vehicle Insurance Eligibility Criteria</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Check if your vehicle qualifies for insurance coverage and what factors determine eligibility
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {eligibilityCriteria.map((criteria) => (
            <Card key={criteria.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg mr-3">
                      {criteria.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{criteria.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-3">{criteria.description}</p>
                  {criteria.note && (
                    <p className="text-sm text-blue-600 italic mt-auto">
                      Note: {criteria.note}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleEligibilityCriteria;

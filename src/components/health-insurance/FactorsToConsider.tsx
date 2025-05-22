
import React from "react";
import { 
  CalendarDays, 
  FileText, 
  Users, 
  DollarSign, 
  MapPin, 
  Briefcase 
} from "lucide-react";
import { 
  Card, 
  CardContent
} from "@/components/ui/card";

interface Factor {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const premiumFactors: Factor[] = [
  {
    id: "age",
    title: "Age",
    description: "Premium increases with age as health risks typically grow higher. Purchasing insurance at a younger age secures lower premiums.",
    icon: <CalendarDays className="w-8 h-8 text-green-500" />
  },
  {
    id: "medicalHistory",
    title: "Medical History",
    description: "Pre-existing conditions often lead to higher premiums or extended waiting periods for coverage.",
    icon: <FileText className="w-8 h-8 text-green-500" />
  },
  {
    id: "familySize",
    title: "Family Size",
    description: "The number of family members included in the policy directly affects the premium amount.",
    icon: <Users className="w-8 h-8 text-green-500" />
  },
  {
    id: "sumInsured",
    title: "Sum Insured",
    description: "Higher coverage amounts result in higher premium payments, but offer greater financial security.",
    icon: <DollarSign className="w-8 h-8 text-green-500" />
  },
  {
    id: "location",
    title: "Location",
    description: "Premiums vary based on city tier due to differences in healthcare costs across locations.",
    icon: <MapPin className="w-8 h-8 text-green-500" />
  },
  {
    id: "occupation",
    title: "Occupation",
    description: "High-risk occupations may attract higher premiums due to increased chances of health issues or injuries.",
    icon: <Briefcase className="w-8 h-8 text-green-500" />
  }
];

const FactorsToConsider = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Factors That Affect Health Insurance Premium</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Understanding what influences the cost of your health insurance policy
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {premiumFactors.map((factor) => (
            <Card 
              key={factor.id} 
              className="border border-gray-100 hover:shadow-md transition-shadow bg-white"
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-50 p-3 rounded-full">
                    {factor.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{factor.title}</h3>
                    <p className="text-gray-600">{factor.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactorsToConsider;

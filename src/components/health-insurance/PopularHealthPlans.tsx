
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Plan {
  id: string;
  name: string;
  insurer: string;
  coverage: string;
  premium: string;
  cashless: number;
  copay: string;
  popular?: boolean;
}

const plans: Record<string, Plan[]> = {
  "individual": [
    {
      id: "ind1",
      name: "HealthShield Plus",
      insurer: "Star Health",
      coverage: "₹5 Lakhs",
      premium: "₹8,500/year",
      cashless: 5000,
      copay: "10%",
      popular: true
    },
    {
      id: "ind2",
      name: "MediCare Advantage",
      insurer: "HDFC ERGO",
      coverage: "₹3 Lakhs",
      premium: "₹6,200/year",
      cashless: 3500,
      copay: "5%"
    },
    {
      id: "ind3",
      name: "Complete Health",
      insurer: "Bajaj Allianz",
      coverage: "₹10 Lakhs",
      premium: "₹12,800/year",
      cashless: 7500,
      copay: "15%"
    }
  ],
  "family": [
    {
      id: "fam1",
      name: "Family Floater Gold",
      insurer: "ICICI Lombard",
      coverage: "₹15 Lakhs",
      premium: "₹18,500/year",
      cashless: 6500,
      copay: "10%",
      popular: true
    },
    {
      id: "fam2",
      name: "Family Health Optima",
      insurer: "Star Health",
      coverage: "₹10 Lakhs",
      premium: "₹15,200/year",
      cashless: 5500,
      copay: "10%"
    },
    {
      id: "fam3",
      name: "My Family All-in-One",
      insurer: "Max Bupa",
      coverage: "₹20 Lakhs",
      premium: "₹22,800/year",
      cashless: 8000,
      copay: "5%"
    }
  ],
  "senior": [
    {
      id: "sen1",
      name: "Senior Citizen RedCarpet",
      insurer: "Star Health",
      coverage: "₹5 Lakhs",
      premium: "₹18,500/year",
      cashless: 4500,
      copay: "15%",
      popular: true
    },
    {
      id: "sen2",
      name: "Senior Care",
      insurer: "HDFC ERGO",
      coverage: "₹3 Lakhs",
      premium: "₹15,200/year",
      cashless: 3000,
      copay: "20%"
    },
    {
      id: "sen3",
      name: "Silver Health",
      insurer: "Apollo Munich",
      coverage: "₹7 Lakhs",
      premium: "₹21,800/year",
      cashless: 5500,
      copay: "10%"
    }
  ]
};

const PlanCard = ({ plan }: { plan: Plan }) => {
  return (
    <div className={`border rounded-lg p-6 ${plan.popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-xl">{plan.name}</h3>
        {plan.popular && (
          <Badge className="bg-blue-600">Popular Choice</Badge>
        )}
      </div>
      <p className="text-gray-600 mb-1">by {plan.insurer}</p>
      <div className="grid grid-cols-2 gap-4 my-4">
        <div>
          <p className="text-sm text-gray-500">Coverage</p>
          <p className="font-semibold">{plan.coverage}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Premium</p>
          <p className="font-semibold">{plan.premium}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Cashless Hospitals</p>
          <p className="font-semibold">{plan.cashless.toLocaleString()}+</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Co-Payment</p>
          <p className="font-semibold">{plan.copay}</p>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <Button variant="outline" className="flex-1">View Details</Button>
        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Buy Now</Button>
      </div>
    </div>
  );
};

const PopularHealthPlans = () => {
  const [activeTab, setActiveTab] = useState("individual");

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Popular Health Insurance Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Compare our most popular health insurance plans to find the right coverage for your needs.
          </p>
        </div>

        <Tabs defaultValue="individual" className="max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="individual">Individual</TabsTrigger>
              <TabsTrigger value="family">Family</TabsTrigger>
              <TabsTrigger value="senior">Senior Citizen</TabsTrigger>
            </TabsList>
          </div>

          {Object.keys(plans).map(category => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid md:grid-cols-3 gap-6">
                {plans[category].map(plan => (
                  <PlanCard key={plan.id} plan={plan} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-10">
          <Button variant="outline" className="border-blue-600 text-blue-600">
            View All Plans <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularHealthPlans;

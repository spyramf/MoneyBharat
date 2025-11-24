
import React from "react";
import { Check } from "lucide-react";

interface Coverage {
  id: string;
  name: string;
  included: boolean;
  note?: string;
}

const coverageOptions: Record<string, Coverage[]> = {
  "basic": [
    { id: "b1", name: "Hospitalization Expenses", included: true },
    { id: "b2", name: "Pre & Post Hospitalization", included: true },
    { id: "b3", name: "Ambulance Charges", included: true, note: "Limited to ₹2,000 per event" },
    { id: "b4", name: "Day Care Procedures", included: true },
    { id: "b5", name: "Domiciliary Treatment", included: false },
    { id: "b6", name: "Organ Donor Expenses", included: false }
  ],
  "comprehensive": [
    { id: "c1", name: "Hospitalization Expenses", included: true },
    { id: "c2", name: "Pre & Post Hospitalization", included: true },
    { id: "c3", name: "Ambulance Charges", included: true },
    { id: "c4", name: "Day Care Procedures", included: true },
    { id: "c5", name: "Domiciliary Treatment", included: true },
    { id: "c6", name: "Organ Donor Expenses", included: true },
    { id: "c7", name: "Alternative Treatments", included: true, note: "Ayurveda, Yoga, Naturopathy, etc." },
    { id: "c8", name: "Restoration of Sum Insured", included: true },
    { id: "c9", name: "No Claim Bonus", included: true }
  ],
  "premium": [
    { id: "p1", name: "All Comprehensive Coverage", included: true },
    { id: "p2", name: "International Coverage", included: true, note: "Up to sum insured for emergency cases" },
    { id: "p3", name: "OPD Expenses", included: true },
    { id: "p4", name: "Dental & Vision Care", included: true },
    { id: "p5", name: "Annual Health Check-up", included: true },
    { id: "p6", name: "Maternity Benefits", included: true },
    { id: "p7", name: "Wellness & Preventive Care", included: true },
    { id: "p8", name: "Mental Health Coverage", included: true },
    { id: "p9", name: "Air Ambulance", included: true }
  ]
};

const CoverageOptions = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Coverage Options</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Health insurance plans come with different levels of coverage. Compare what's included in each option.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-6 text-center">
              <h3 className="text-xl font-bold">Basic Plan</h3>
              <p className="text-sm text-gray-600 mt-1">Essential coverage</p>
              <p className="text-3xl font-bold text-blue-600 mt-3">₹5,000 <span className="text-sm font-normal text-gray-600">/year</span></p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {coverageOptions.basic.map((item) => (
                  <li key={item.id} className="flex items-start">
                    <div className={`mt-1 rounded-full p-1 ${item.included ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                      {item.included ? <Check size={14} /> : <span className="block w-3.5 h-3.5 text-center text-xs">✕</span>}
                    </div>
                    <span className="ml-2">
                      {item.name}
                      {item.note && <span className="text-sm text-gray-500 block">{item.note}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Comprehensive Plan */}
          <div className="border border-blue-500 rounded-lg overflow-hidden shadow-md relative">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl">
              MOST POPULAR
            </div>
            <div className="bg-blue-50 p-6 text-center">
              <h3 className="text-xl font-bold">Comprehensive Plan</h3>
              <p className="text-sm text-gray-600 mt-1">Complete coverage</p>
              <p className="text-3xl font-bold text-blue-600 mt-3">₹10,000 <span className="text-sm font-normal text-gray-600">/year</span></p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {coverageOptions.comprehensive.map((item) => (
                  <li key={item.id} className="flex items-start">
                    <div className={`mt-1 rounded-full p-1 ${item.included ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                      {item.included ? <Check size={14} /> : <span className="block w-3.5 h-3.5 text-center text-xs">✕</span>}
                    </div>
                    <span className="ml-2">
                      {item.name}
                      {item.note && <span className="text-sm text-gray-500 block">{item.note}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Premium Plan */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-6 text-center">
              <h3 className="text-xl font-bold">Premium Plan</h3>
              <p className="text-sm text-gray-600 mt-1">Luxury coverage</p>
              <p className="text-3xl font-bold text-blue-600 mt-3">₹20,000 <span className="text-sm font-normal text-gray-600">/year</span></p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {coverageOptions.premium.map((item) => (
                  <li key={item.id} className="flex items-start">
                    <div className={`mt-1 rounded-full p-1 ${item.included ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                      {item.included ? <Check size={14} /> : <span className="block w-3.5 h-3.5 text-center text-xs">✕</span>}
                    </div>
                    <span className="ml-2">
                      {item.name}
                      {item.note && <span className="text-sm text-gray-500 block">{item.note}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageOptions;

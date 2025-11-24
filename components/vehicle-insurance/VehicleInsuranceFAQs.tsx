
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQ[] = [
  {
    question: "What is the difference between third-party and comprehensive insurance?",
    answer: (
      <p>
        Third-party insurance only covers damages caused by your vehicle to someone else's property or injuries to third parties. Comprehensive insurance covers third-party liabilities plus damages to your own vehicle due to accidents, theft, fire, natural disasters, etc.
      </p>
    ),
  },
  {
    question: "Is vehicle insurance mandatory in India?",
    answer: (
      <p>
        Yes, third-party vehicle insurance is mandatory under the Motor Vehicles Act in India. Driving without valid third-party insurance is illegal and can result in penalties, including fines and imprisonment.
      </p>
    ),
  },
  {
    question: "What is IDV (Insured Declared Value) in vehicle insurance?",
    answer: (
      <p>
        IDV is the current market value of your vehicle after considering depreciation. It is the maximum amount the insurer will pay in case of total loss or theft of the vehicle. IDV is calculated based on the manufacturer's listed selling price minus depreciation based on the vehicle's age.
      </p>
    ),
  },
  {
    question: "What is No Claim Bonus (NCB) and how does it work?",
    answer: (
      <p>
        No Claim Bonus is a discount (ranging from 20% to 50%) on your premium that you earn for each claim-free year. It accumulates progressively and can be transferred when you change your insurer or vehicle. However, it is lost if you make a claim unless you have NCB protection.
      </p>
    ),
  },
  {
    question: "How do I transfer my insurance when I sell my vehicle?",
    answer: (
      <p>
        Vehicle insurance policies are not transferable to the new owner. The seller can apply for a refund of the unused premium, and the new owner needs to purchase a fresh policy. However, the NCB can be transferred to another vehicle owned by the same person.
      </p>
    ),
  },
  {
    question: "What documents are needed to file a vehicle insurance claim?",
    answer: (
      <p>
        Typically required documents include a duly filled claim form, copy of driving license, vehicle registration certificate (RC), policy document, FIR copy (in case of theft or third-party damage), original repair bills, and photographs of the damaged vehicle.
      </p>
    ),
  },
  {
    question: "What is not covered under standard vehicle insurance?",
    answer: (
      <p>
        Standard exclusions typically include general wear and tear, mechanical/electrical breakdown, damage due to driving under the influence of alcohol/drugs, damage to tires/tubes unless the vehicle is damaged at the same time, and loss/damage due to war or nuclear risks.
      </p>
    ),
  },
  {
    question: "How is vehicle insurance premium calculated?",
    answer: (
      <p>
        Premium is calculated based on factors such as vehicle type and model, cubic capacity (CC), age of the vehicle, geographical zone, IDV, add-on covers selected, and No Claim Bonus. For third-party insurance, premiums are regulated by the IRDAI.
      </p>
    ),
  },
];

const VehicleInsuranceFAQs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about vehicle insurance policies, claims, and coverage
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default VehicleInsuranceFAQs;

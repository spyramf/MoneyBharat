
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "faq1",
    question: "What is the waiting period for pre-existing diseases?",
    answer: "Most health insurance policies have a waiting period of 2-4 years for pre-existing diseases. During this period, any medical condition that you had before buying the policy will not be covered. Different insurers have different waiting periods, so it's important to check this detail when comparing policies."
  },
  {
    id: "faq2",
    question: "Can I add family members to my existing policy?",
    answer: "Yes, you can add family members to your existing policy either at the time of renewal or midterm by paying an additional premium. The coverage will be extended to the added members for the remaining policy period. Some insurers also allow adding newborns to family floater policies."
  },
  {
    id: "faq3",
    question: "What is a sub-limit in health insurance?",
    answer: "Sub-limits are caps on specific expenses within your overall sum insured. For example, there might be limits on room rent, doctor consultation fees, ambulance charges, etc. If you exceed these limits, you'll have to pay the difference out of pocket, even if your total claim is within the sum insured."
  },
  {
    id: "faq4",
    question: "Is maternity covered in regular health insurance plans?",
    answer: "Most basic health insurance plans do not cover maternity expenses. However, some comprehensive family floater plans offer maternity benefits after a waiting period of 2-4 years. There are also specialized maternity insurance plans available specifically for this purpose."
  },
  {
    id: "faq5",
    question: "How does the cashless claim process work?",
    answer: "For cashless claims, you need to get treatment at a network hospital. Inform the insurer before planned hospitalizations or within 24-48 hours of emergency admission. The hospital's insurance desk will collect your details and coordinate with the insurer. Once approved, the insurer settles the bill directly with the hospital, and you only pay for non-covered expenses."
  },
  {
    id: "faq6",
    question: "Can I port my existing health insurance policy to another insurer?",
    answer: "Yes, the Insurance Regulatory and Development Authority of India (IRDAI) allows you to port your health insurance policy from one insurer to another while retaining benefits like waiting period credits for pre-existing diseases. You need to apply for portability at least 45 days before your existing policy's renewal date."
  }
];

const HealthFAQs = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about health insurance policies, claims, and coverage.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default HealthFAQs;

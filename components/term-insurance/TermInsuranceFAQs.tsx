
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: "what-is-term-insurance",
    question: "What is term insurance and how does it work?",
    answer: "Term insurance is a pure life insurance product that provides financial protection to your family for a specific period (term). If you pass away during the policy term, your nominees receive the sum assured. If you survive the term, there are no benefits unless you've opted for a return of premium policy."
  },
  {
    id: "coverage-amount",
    question: "How much term insurance coverage do I need?",
    answer: "Financial experts recommend term insurance coverage of at least 10-15 times your annual income. Consider factors like outstanding loans, future expenses (children's education, marriage), and regular family expenses to determine an adequate coverage amount."
  },
  {
    id: "best-age",
    question: "What is the best age to buy term insurance?",
    answer: "The ideal time to buy term insurance is in your 20s or early 30s when premiums are lowest. As age increases, premiums increase substantially. Buying early locks in lower premiums for the entire policy term."
  },
  {
    id: "claim-rejection",
    question: "What are the common reasons for term insurance claim rejection?",
    answer: "Common reasons for claim rejection include non-disclosure or incorrect disclosure of medical conditions, lifestyle habits (smoking/drinking), occupation details, or family medical history. Death due to suicide within the first year of the policy is typically not covered."
  },
  {
    id: "policy-term",
    question: "How long should my term insurance policy be?",
    answer: "Ideally, your term insurance should cover you until your retirement age (60-65 years) or until your financial dependents become self-sufficient. Most experts recommend a term of 30-35 years if you're buying in your 30s."
  },
  {
    id: "medical-tests",
    question: "Do I need to undergo medical tests for term insurance?",
    answer: "Yes, most insurers require medical tests for term insurance, especially for higher coverage amounts (above ₹50 lakhs) or if you're above 35 years. These typically include blood tests, ECG, chest X-ray, and sometimes stress tests depending on age and coverage amount."
  },
  {
    id: "riders-worth",
    question: "Are riders worth adding to my term insurance policy?",
    answer: "Riders like critical illness, accidental death benefit, and disability cover can provide additional protection at a relatively small increase in premium. They're worth considering based on your specific needs and risk factors, but avoid overloading with too many riders as it significantly increases the premium."
  },
  {
    id: "online-vs-offline",
    question: "Should I buy term insurance online or offline?",
    answer: "Online term insurance plans are typically 20-30% cheaper than offline plans because they eliminate agent commissions. Online plans also offer more transparency and easier comparison. However, if you need personalized advice or have complex requirements, an offline agent might be helpful."
  }
];

const TermInsuranceFAQs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about term insurance
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Have more questions? <a href="/booking" className="text-indigo-600 font-medium hover:underline">Schedule a consultation</a> with our insurance experts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermInsuranceFAQs;

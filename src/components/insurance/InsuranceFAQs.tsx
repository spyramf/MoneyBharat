
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface InsuranceFAQsProps {
  faqs: FAQ[];
}

const InsuranceFAQs = ({ faqs }: InsuranceFAQsProps) => {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about insurance policies and coverage
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:no-underline">
                <span className="font-medium text-left">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default InsuranceFAQs;

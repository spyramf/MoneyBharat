
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What makes Money Bharat different from other financial platforms?",
      answer: "Money Bharat combines cutting-edge technology with personalized financial advice. We offer expert-guided mutual fund investments, comprehensive insurance coverage, and instant loan approvals through our AI-powered platform. Our AMFI-registered advisors provide expert guidance tailored to your financial goals."
    },
    {
      question: "How secure is Money Bharat for online financial transactions?",
      answer: "Money Bharat employs bank-grade 256-bit SSL encryption, multi-factor authentication, and follows RBI guidelines for financial security. Your data is protected with advanced cybersecurity measures, and we never store sensitive banking information on our servers."
    },
    {
      question: "What types of mutual funds can I invest in through Money Bharat?",
      answer: "We offer over 2,000+ mutual fund schemes including equity funds, debt funds, hybrid funds, ELSS tax-saving funds, international funds, and sectoral funds from top AMCs like HDFC, ICICI, SBI, Axis, and more. Our platform helps you choose funds based on your risk profile and investment goals."
    },
    {
      question: "How does the SIP (Systematic Investment Plan) work on Money Bharat?",
      answer: "SIP allows you to invest a fixed amount regularly in mutual funds. With Money Bharat, you can start SIPs from as low as ₹500 per month. Our automated system deducts the amount from your bank account on the chosen date and invests in your selected funds, helping you benefit from rupee cost averaging."
    },
    {
      question: "What insurance products does Money Bharat offer?",
      answer: "Money Bharat provides comprehensive insurance solutions including health insurance, term life insurance, motor insurance for cars and bikes, home insurance, and travel insurance. We partner with leading insurers to offer competitive premiums and hassle-free claim settlements."
    },
    {
      question: "How quickly can I get a loan approved through Money Bharat?",
      answer: "Our AI-powered loan processing system can approve personal loans within 30 minutes for eligible applicants. Business loans typically take 24-48 hours, while home loans may take 7-15 days depending on documentation. We offer instant pre-approval based on your financial profile."
    },
    {
      question: "What are the charges for using Money Bharat services?",
      answer: "Money Bharat offers professional mutual fund advisory services as a registered distributor. Insurance products have standard industry premiums with no additional charges. Loan processing fees are competitive and transparently disclosed upfront. We believe in transparent pricing with no hidden costs."
    },
    {
      question: "Can I track all my investments in one place on Money Bharat?",
      answer: "Yes, Money Bharat provides a unified dashboard where you can track all your mutual fund investments, insurance policies, and loan accounts. Our portfolio analytics show performance metrics, asset allocation, and goal progress with real-time updates."
    },
    {
      question: "Is Money Bharat registered with financial regulators?",
      answer: "Yes, Money Bharat is an AMFI-registered mutual fund distributor (ARN-225204). We maintain all necessary regulatory approvals and follow strict compliance standards to ensure investor protection."
    },
    {
      question: "How does Money Bharat help with tax planning and ELSS investments?",
      answer: "Our tax-saving solutions include ELSS mutual funds under Section 80C, health insurance premium deductions under Section 80D, and home loan tax benefits. Our certified financial planners provide personalized tax optimization strategies to maximize your savings."
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions About Money Bharat
            </h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about our financial services, security measures, and investment options
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-background border rounded-lg overflow-hidden shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 hover:no-underline">
                  <span className="font-medium text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-muted-foreground leading-relaxed">
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

export default FAQSection;

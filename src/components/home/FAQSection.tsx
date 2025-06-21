
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What makes Money Bharat Finance different from other financial platforms in India?",
      answer: "Money Bharat Finance combines cutting-edge AI technology with personalized financial advice from AMFI-certified experts. We offer zero-commission mutual fund investments, comprehensive insurance coverage, and instant loan approvals through our award-winning platform. Our unique value proposition includes transparent pricing, bank-grade security, and dedicated customer support that sets us apart in the Indian fintech landscape."
    },
    {
      question: "How secure is Money Bharat Finance for online financial transactions and investments?",
      answer: "Money Bharat Finance employs military-grade 256-bit SSL encryption, multi-factor authentication, and follows strict RBI guidelines for financial security. Your personal and financial data is protected with advanced cybersecurity measures, regular security audits, and we never store sensitive banking information on our servers. We are fully compliant with all Indian financial regulations and maintain the highest security standards."
    },
    {
      question: "What types of mutual funds can I invest in through Money Bharat Finance platform?",
      answer: "Money Bharat Finance offers access to over 2,000+ mutual fund schemes including equity funds, debt funds, hybrid funds, ELSS tax-saving funds, international funds, sectoral funds, and thematic funds from top AMCs like HDFC, ICICI, SBI, Axis, Aditya Birla, and more. Our AI-powered platform helps you choose the best funds based on your risk profile, investment goals, and financial situation."
    },
    {
      question: "How does SIP (Systematic Investment Plan) work on Money Bharat Finance?",
      answer: "SIP through Money Bharat Finance allows you to invest a fixed amount regularly in mutual funds starting from just ₹500 per month. Our automated system seamlessly deducts the amount from your linked bank account on your chosen date and invests in your selected funds. This helps you benefit from rupee cost averaging and disciplined investing. You can start, pause, or modify your SIPs anytime through our user-friendly platform."
    },
    {
      question: "What comprehensive insurance products does Money Bharat Finance offer?",
      answer: "Money Bharat Finance provides a complete range of insurance solutions including health insurance (individual and family floater plans), term life insurance, endowment policies, ULIP plans, motor insurance for cars and two-wheelers, home insurance, travel insurance, and commercial insurance. We partner with leading insurers like HDFC ERGO, ICICI Lombard, and Bajaj Allianz to offer competitive premiums and hassle-free claim settlements."
    },
    {
      question: "How quickly can I get a loan approved through Money Bharat Finance?",
      answer: "Money Bharat Finance's AI-powered loan processing system can approve personal loans within 30 minutes for eligible applicants with pre-approved limits up to ₹25 lakhs. Business loans typically take 24-48 hours for approval, while home loans may take 7-15 days depending on documentation completeness. We offer instant pre-approval based on your financial profile and credit score, making the entire process seamless and transparent."
    },
    {
      question: "What are the charges and fees for using Money Bharat Finance services?",
      answer: "Money Bharat Finance offers complete transparency in pricing. We provide zero-commission mutual fund investments through direct plans, helping you save significantly on fees. Insurance products carry standard industry premiums with no additional markup charges. Loan processing fees are highly competitive and transparently disclosed upfront with no hidden costs. We believe in honest, transparent pricing that puts your financial interests first."
    },
    {
      question: "Can I track all my investments and policies in one place on Money Bharat Finance?",
      answer: "Yes, Money Bharat Finance provides a comprehensive unified dashboard where you can monitor all your mutual fund investments, SIPs, insurance policies, and loan accounts in real-time. Our advanced portfolio analytics show detailed performance metrics, asset allocation breakdowns, goal progress tracking, tax implications, and personalized recommendations. You can access everything through our web platform or mobile app anytime, anywhere."
    },
    {
      question: "Is Money Bharat Finance registered with Indian financial regulators?",
      answer: "Yes, Money Bharat Finance is fully compliant with all regulatory requirements. We are AMFI-registered for mutual fund distribution (ARN: XXXXX), IRDAI-approved for insurance broking services, and RBI-compliant for loan facilitation activities. We maintain all necessary regulatory approvals and follow strict compliance standards to ensure complete investor protection and regulatory adherence as mandated by Indian financial laws."
    },
    {
      question: "How does Money Bharat Finance help with tax planning and wealth optimization?",
      answer: "Money Bharat Finance offers comprehensive tax planning solutions including ELSS mutual funds for Section 80C deductions (up to ₹1.5 lakh annually), health insurance premium deductions under Section 80D, home loan tax benefits under Sections 80C and 24(b), and strategic wealth optimization advice. Our AMFI-certified financial planners provide personalized tax optimization strategies, annual tax planning sessions, and help you maximize your savings while building long-term wealth efficiently."
    },
    {
      question: "What customer support does Money Bharat Finance provide to investors?",
      answer: "Money Bharat Finance provides dedicated customer support through multiple channels including phone, email, live chat, and WhatsApp support available 6 days a week. We also offer personalized financial planning sessions, regular portfolio review meetings, educational webinars, and a comprehensive knowledge base. Our relationship managers provide ongoing support to help you make informed investment decisions and achieve your financial goals successfully."
    },
    {
      question: "How can I start investing with Money Bharat Finance today?",
      answer: "Starting your investment journey with Money Bharat Finance is simple and quick. Visit our website, complete the online registration process with your PAN and Aadhaar, complete your KYC verification digitally, link your bank account, and start investing immediately. You can begin with SIPs as low as ₹500 per month or make lump sum investments. Our onboarding process takes less than 10 minutes, and you'll have access to expert guidance throughout your investment journey."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions About Money Bharat Finance
            </h2>
            <p className="text-lg text-gray-600">
              Get comprehensive answers to common questions about Money Bharat Finance services, security measures, investment options, and how we help you build wealth in India
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:no-underline">
                  <span className="font-medium text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Still have questions about Money Bharat Finance?</h3>
            <p className="text-gray-600 mb-6">
              Our expert team is here to help you with personalized guidance for your financial journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/booking" className="bg-fintech-green text-white px-6 py-3 rounded-lg hover:opacity-90 transition-colors">
                Book Free Consultation
              </a>
              <a href="/blog" className="bg-white border border-fintech-green text-fintech-green px-6 py-3 rounded-lg hover:bg-fintech-green hover:text-white transition-colors">
                Read Our Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

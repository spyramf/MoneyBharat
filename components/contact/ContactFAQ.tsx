
import { Plus, Minus } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ContactFAQ = () => {
  const faqs = [
    {
      question: "How quickly will I receive a response to my inquiry?",
      answer: "We typically respond to all inquiries within 6 hours during business days (Monday-Saturday). For urgent matters, please call us directly at +91 9970735694 or use our WhatsApp support for faster response."
    },
    {
      question: "Is the initial consultation really free?",
      answer: "Yes, absolutely! Our initial consultation is completely free with no obligations. We'll assess your financial goals, current portfolio, and provide basic recommendations. This helps us understand your needs better."
    },
    {
      question: "Can I get support after investing through Money Bharat?",
      answer: "Definitely! We provide ongoing support to all our clients. This includes portfolio reviews, market updates, rebalancing advice, and assistance with any investment-related queries. Premium clients get dedicated relationship manager support."
    },
    {
      question: "Do you provide support for investments made elsewhere?",
      answer: "Yes, we offer portfolio review services for investments made through other platforms. We can help you optimize your existing portfolio, suggest improvements, and provide consolidated reporting."
    },
    {
      question: "What information should I prepare before contacting you?",
      answer: "For the best consultation experience, please have your investment goals, current portfolio details, risk tolerance, and investment horizon ready. However, don't worry if you don't have everything - we'll guide you through the process."
    },
    {
      question: "Are video consultations available?",
      answer: "Yes, we offer video consultations through various platforms like Zoom, Google Meet, or WhatsApp video calls. This is especially helpful for detailed financial planning discussions and document reviews."
    },
    {
      question: "What languages do your advisors speak?",
      answer: "Our financial advisors are fluent in English, Hindi, and Marathi. We can also arrange consultations in other regional languages if needed with advance notice."
    },
    {
      question: "How do you ensure the security of my personal information?",
      answer: "We follow strict data protection protocols. All communications are encrypted, and your personal information is stored securely with limited access. We never share your data with third parties without explicit consent."
    }
  ];

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked <span className="text-fintech-green">Questions</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Quick answers to common questions about contacting and working with Money Bharat Finance.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-md border-0 overflow-hidden"
            >
              <AccordionTrigger className="text-left p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-fintech-green/10 rounded-full flex items-center justify-center text-fintech-green font-semibold text-sm">
                    {index + 1}
                  </div>
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                </div>
              </AccordionTrigger>
              
              <AccordionContent className="px-6 pb-6">
                <div className="ml-12 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-fintech-green to-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-xl mb-6 text-blue-100">
            Don't hesitate to reach out. Our financial experts are here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-fintech-green px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              onClick={() => window.location.href = 'tel:+919970735694'}
            >
              Call Us Now
            </button>
            <button 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-fintech-green transition-colors"
              onClick={() => window.open('https://wa.me/919970735694', '_blank')}
            >
              WhatsApp Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;

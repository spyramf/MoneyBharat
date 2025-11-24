
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface LoanFAQProps {
  title: string;
  subtitle: string;
  badgeText?: string;
  faqs: FAQ[];
  useAccordion?: boolean;
  className?: string;
}

const LoanFAQ = ({
  title,
  subtitle,
  badgeText,
  faqs,
  useAccordion = true,
  className = ""
}: LoanFAQProps) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {badgeText && (
            <Badge variant="outline" className="mb-2 px-3 py-1 text-fintech-blue border-fintech-blue">
              {badgeText}
            </Badge>
          )}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {useAccordion ? (
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-xl font-semibold py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 pt-2 pb-4">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <>
              {faqs.map((faq, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                  {index < faqs.length - 1 && <Separator className="mt-6" />}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoanFAQ;

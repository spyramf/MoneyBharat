import { useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

const FAQSchema = ({ faqs }: FAQSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema';
    script.textContent = JSON.stringify(schema);

    const existing = document.getElementById('faq-schema');
    if (existing) existing.remove();
    
    document.head.appendChild(script);

    return () => {
      const toRemove = document.getElementById('faq-schema');
      if (toRemove) toRemove.remove();
    };
  }, [faqs]);

  return null;
};

export default FAQSchema;

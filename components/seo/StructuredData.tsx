
import Head from "next/head";
import SchemaMarkup from './SchemaMarkup';

interface StructuredDataProps {
  page?: 'home' | 'mutual-funds' | 'insurance' | 'loans' | 'about';
  faqData?: Array<{ question: string; answer: string }>;
  reviewData?: Array<{ name: string; quote: string; rating?: string }>;
  productData?: {
    name: string;
    description: string;
    category: string;
    price?: string;
  };
  structuredData?: any; // For custom structured data
}

const StructuredData = ({ 
  page = 'home', 
  faqData, 
  reviewData, 
  productData,
  structuredData
}: StructuredDataProps) => {
  const getPageSpecificSchema = () => {
    switch (page) {
      case 'mutual-funds':
        return {
          name: "Mutual Fund Investment Services",
          description: "Expert-guided mutual fund investments and SIP plans with professional advisory",
          serviceType: "Investment Advisory",
          products: [
            {
              "@type": "FinancialProduct",
              "name": "Equity Mutual Funds",
              "description": "High-growth equity mutual fund investments"
            },
            {
              "@type": "FinancialProduct", 
              "name": "SIP Plans",
              "description": "Systematic Investment Plans starting from ₹500"
            }
          ]
        };
      case 'insurance':
        return {
          name: "Insurance Services",
          description: "Comprehensive health, life, and general insurance solutions",
          serviceType: "Insurance Brokerage",
          products: [
            {
              "@type": "FinancialProduct",
              "name": "Health Insurance",
              "description": "Family health coverage with cashless treatment"
            },
            {
              "@type": "FinancialProduct",
              "name": "Term Life Insurance", 
              "description": "High coverage term life insurance plans"
            }
          ]
        };
      case 'loans':
        return {
          name: "Loan Services",
          description: "Quick approval personal, home, and business loans",
          serviceType: "Lending Services",
          products: [
            {
              "@type": "FinancialProduct",
              "name": "Personal Loans",
              "description": "Instant personal loans up to ₹25 lakhs"
            },
            {
              "@type": "FinancialProduct",
              "name": "Home Loans",
              "description": "Home loans with competitive interest rates"
            }
          ]
        };
      default:
        return null;
    }
  };

  const pageSchema = getPageSpecificSchema();

  return (
    <>
      <SchemaMarkup type="organization" />
      
      {pageSchema && (
        <SchemaMarkup type="financial-service" data={pageSchema} />
      )}
      
      {faqData && faqData.length > 0 && (
        <SchemaMarkup type="faq" data={faqData} />
      )}
      
      {reviewData && reviewData.length > 0 && (
        <SchemaMarkup type="review" data={reviewData} />
      )}
      
      {productData && (
        <SchemaMarkup type="product" data={productData} />
      )}

      {/* Custom structured data */}
      {structuredData && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        </Head>
      )}
    </>
  );
};

export default StructuredData;

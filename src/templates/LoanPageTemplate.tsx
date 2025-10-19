import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import LoanHero from "@/components/loans/LoanHero";
import LoanFeatures from "@/components/loans/LoanFeatures";
import LoanCalculator from "@/components/loans/LoanCalculator";
import LoanBenefits from "@/components/loans/LoanBenefits";
import LoanEligibilityDocuments from "@/components/loans/LoanEligibilityDocuments";
import LoanProcess from "@/components/loans/LoanProcess";
import LoanFAQ from "@/components/loans/LoanFAQ";
import LoanCTA from "@/components/loans/LoanCTA";
import { Helmet } from "react-helmet-async";

interface LoanPageTemplateProps {
  // SEO
  pageTitle: string;
  metaDescription: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroGradientFrom: string;
  heroGradientTo: string;
  
  // Features Section
  featuresTitle?: string;
  featuresSubtitle?: string;
  features: any[];
  
  // Calculator Section
  calculatorTitle?: string;
  calculatorSubtitle?: string;
  calculatorConfig: {
    initialLoanAmount?: number;
    initialInterestRate?: number;
    initialLoanTenure?: number;
    loanAmountMin?: number;
    loanAmountMax?: number;
    interestRateMin?: number;
    interestRateMax?: number;
    tenureMin?: number;
    tenureMax?: number;
  };
  
  // Benefits Section (optional)
  benefits?: {
    title: string;
    subtitle: string;
    badgeText?: string;
    items: any[];
  };
  
  // Custom Section (optional)
  customSection?: ReactNode;
  
  // Eligibility & Documents
  eligibilityTitle?: string;
  eligibilitySubtitle?: string;
  eligibilityCriteria: string[];
  requiredDocuments: string[];
  
  // Process Section
  processTitle?: string;
  processSubtitle?: string;
  processSteps: any[];
  
  // FAQ Section
  faqTitle?: string;
  faqSubtitle?: string;
  faqs: any[];
  
  // CTA Section
  ctaTitle: string;
  ctaSubtitle: string;
  ctaBadgeText?: string;
  ctaPrimaryButton: string;
  ctaSecondaryButton?: string;
  ctaGradientFrom?: string;
  ctaGradientTo?: string;
}

const LoanPageTemplate = ({
  pageTitle,
  metaDescription,
  heroTitle,
  heroSubtitle,
  heroGradientFrom,
  heroGradientTo,
  featuresTitle = "Key Features",
  featuresSubtitle = "Designed to meet all your financial needs",
  features,
  calculatorTitle,
  calculatorSubtitle,
  calculatorConfig,
  benefits,
  customSection,
  eligibilityTitle = "Eligibility & Required Documents",
  eligibilitySubtitle = "Check if you qualify and what documents you'll need",
  eligibilityCriteria,
  requiredDocuments,
  processTitle = "How It Works",
  processSubtitle = "Simple process to get your loan",
  processSteps,
  faqTitle = "Frequently Asked Questions",
  faqSubtitle = "Find answers to common questions",
  faqs,
  ctaTitle,
  ctaSubtitle,
  ctaBadgeText,
  ctaPrimaryButton,
  ctaSecondaryButton,
  ctaGradientFrom,
  ctaGradientTo,
}: LoanPageTemplateProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <LoanHero
        title={heroTitle}
        subtitle={heroSubtitle}
        gradientFrom={heroGradientFrom}
        gradientTo={heroGradientTo}
        className="mt-16"
      />

      {/* Features Section */}
      <LoanFeatures
        title={featuresTitle}
        subtitle={featuresSubtitle}
        features={features}
      />

      {/* Loan Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {calculatorTitle && (
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{calculatorTitle}</h2>
                {calculatorSubtitle && (
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {calculatorSubtitle}
                  </p>
                )}
              </div>
            )}

            <LoanCalculator
              {...calculatorConfig}
              onApply={() => {}}
            />
          </div>
        </div>
      </section>

      {/* Benefits Section (optional) */}
      {benefits && (
        <LoanBenefits
          title={benefits.title}
          subtitle={benefits.subtitle}
          badgeText={benefits.badgeText}
          benefits={benefits.items}
        />
      )}

      {/* Custom Section (optional) */}
      {customSection}

      {/* Eligibility & Documents Section */}
      <LoanEligibilityDocuments
        title={eligibilityTitle}
        subtitle={eligibilitySubtitle}
        badgeText="Requirements"
        eligibilityCriteria={eligibilityCriteria}
        requiredDocuments={requiredDocuments}
      />

      {/* Process Section */}
      <LoanProcess
        title={processTitle}
        subtitle={processSubtitle}
        badgeText="Application Process"
        steps={processSteps}
        className="bg-gray-50"
      />

      {/* FAQ Section */}
      <LoanFAQ
        title={faqTitle}
        subtitle={faqSubtitle}
        badgeText="Got Questions?"
        faqs={faqs}
        useAccordion={true}
      />

      {/* CTA Section */}
      <LoanCTA
        title={ctaTitle}
        subtitle={ctaSubtitle}
        badgeText={ctaBadgeText}
        primaryButtonText={ctaPrimaryButton}
        secondaryButtonText={ctaSecondaryButton}
        gradientFrom={ctaGradientFrom || heroGradientFrom}
        gradientTo={ctaGradientTo || heroGradientTo}
      />
    </div>
  );
};

export default LoanPageTemplate;

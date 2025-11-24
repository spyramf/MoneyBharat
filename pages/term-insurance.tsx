import Head from 'next/head';
import React from "react";
import SEOHead from "@/components/seo/SEOHead";
import StructuredData from "@/components/seo/StructuredData";

// Import term insurance components
import TermInsuranceHero from "@/components/term-insurance/TermInsuranceHero";
import TermInsuranceTypes from "@/components/term-insurance/TermInsuranceTypes";
import TermPremiumFactors from "@/components/term-insurance/TermPremiumFactors";
import KeyTermPolicyFeatures from "@/components/term-insurance/KeyTermPolicyFeatures";
import TermEligibilityCriteria from "@/components/term-insurance/TermEligibilityCriteria";
import TermRequiredDocuments from "@/components/term-insurance/TermRequiredDocuments";
import TermClaimsProcess from "@/components/term-insurance/TermClaimsProcess";
import TermRiderOptions from "@/components/term-insurance/TermRiderOptions";
import TermTaxBenefits from "@/components/term-insurance/TermTaxBenefits";
import TermInsuranceFAQs from "@/components/term-insurance/TermInsuranceFAQs";
import TermCTA from "@/components/term-insurance/TermCTA";

const TermInsurance = () => {
  const faqData = [
    {
      question: "What is term insurance and how does it work?",
      answer: "Term insurance is a pure life insurance plan that provides financial protection to your family in case of your unfortunate demise during the policy term. It offers high coverage at affordable premiums with no maturity benefits."
    },
    {
      question: "How much term insurance coverage do I need?",
      answer: "Financial experts recommend coverage of 10-15 times your annual income. Consider your family's expenses, loans, children's education, and lifestyle when calculating coverage. Money Bharat's term insurance calculator helps you determine the right amount."
    },
    {
      question: "Can I buy term insurance online?",
      answer: "Yes, you can easily buy term insurance online through Money Bharat. Compare plans from 15+ insurers, use our premium calculator, and get instant policy issuance with paperless documentation."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Best Term Insurance Plans in India 2024 - Online Term Life Insurance | Money Bharat</title>
        <meta name="description" content="Compare and buy best term insurance online with high coverage at lowest premiums. Get term life insurance from ₹25 Lakhs to ₹2 Crore. Free premium calculator, instant policy issuance. Tax benefits under Section 80C & 10(10D). Protection for your family's future." />
        <meta name="keywords" content="term insurance calculator, best term insurance India, term life insurance online, term insurance premium calculator, life insurance plans, term insurance policy, online term insurance, term insurance comparison, life cover plans" />
      </Head>
      
      <StructuredData 
        page="insurance" 
        faqData={faqData}
        productData={{
          name: "Term Insurance Plans",
          description: "High coverage term life insurance with affordable premiums and tax benefits",
          category: "Insurance",
          price: "3000"
        }}
      />
      
      <main>
        <TermInsuranceHero />
        <TermInsuranceTypes />
        <TermPremiumFactors />
        <KeyTermPolicyFeatures />
        <TermEligibilityCriteria />
        <TermRiderOptions />
        <TermRequiredDocuments />
        <TermTaxBenefits />
        <TermClaimsProcess />
        <TermInsuranceFAQs />
        <TermCTA />
      </main>
    </div>
  );
};

export default TermInsurance;

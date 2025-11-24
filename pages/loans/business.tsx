import Head from 'next/head';
import LoanPageTemplate from "@/templates/LoanPageTemplate";
import {
  businessLoanFeatures,
  businessLoanEligibilityCriteria,
  businessLoanRequiredDocuments,
  businessLoanProcess,
  businessLoanFAQs,
} from "@/data/businessLoanData";

const BusinessLoan = () => {
  return (
    <>
        <Head>
            <title>Business Loan - MoneyBharat</title>
            <meta name="description" content="Get business loans at competitive interest rates with flexible tenure options for your growing business" />
        </Head>
        <LoanPageTemplate
            pageTitle="Business Loan - MoneyBharat"
            metaDescription="Get business loans at competitive interest rates with flexible tenure options for your growing business"
            heroTitle="Business Loan"
            heroSubtitle="Access quick funding for your business needs with competitive rates and minimal documentation"
            heroGradientFrom="from-fintech-purple"
            heroGradientTo="to-fintech-blue"
            featuresTitle="Key Features"
            featuresSubtitle="Our business loans are designed to provide maximum flexibility and value"
            features={businessLoanFeatures}
            calculatorTitle="Business Loan Calculator"
            calculatorSubtitle="Plan your business finances with our easy-to-use EMI calculator"
            calculatorConfig={{
                initialLoanAmount: 1000000,
                initialInterestRate: 16,
                initialLoanTenure: 36,
                loanAmountMin: 500000,
                loanAmountMax: 5000000,
                interestRateMin: 12,
                interestRateMax: 24,
                tenureMin: 12,
                tenureMax: 60,
            }}
            eligibilityTitle="Eligibility & Documentation"
            eligibilitySubtitle="Simple requirements to qualify for a business loan"
            eligibilityCriteria={businessLoanEligibilityCriteria}
            requiredDocuments={businessLoanRequiredDocuments}
            processTitle="Quick & Simple Process"
            processSubtitle="Get your business loan in just 3 easy steps"
            processSteps={businessLoanProcess}
            faqs={businessLoanFAQs}
            ctaTitle="Fuel Your Business Growth"
            ctaSubtitle="Apply now and get funds in your account within 3 business days"
            ctaBadgeText="Grow Your Business"
            ctaPrimaryButton="Apply for Business Loan"
            ctaSecondaryButton="Speak to a Specialist"
        />
    </>
  );
};

export default BusinessLoan;

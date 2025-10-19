import LoanPageTemplate from "@/templates/LoanPageTemplate";
import {
  educationLoanFeatures,
  educationLoanEligibilityCriteria,
  educationLoanRequiredDocuments,
  educationLoanProcess,
  educationLoanFAQs,
} from "@/data/educationLoanData";

const EducationLoan = () => {
  return (
    <LoanPageTemplate
      pageTitle="Education Loan - MoneyBharat"
      metaDescription="Get affordable education loans to fund your higher studies in India or abroad. Compare best education loan offers with lowest interest rates."
      heroTitle="Education Loan"
      heroSubtitle="Fund your dreams with affordable education loans for studies in India and abroad"
      heroGradientFrom="from-fintech-purple"
      heroGradientTo="to-fintech-blue"
      featuresTitle="Education Loan Features"
      featuresSubtitle="Get the financial support you need to pursue your academic dreams"
      features={educationLoanFeatures}
      calculatorTitle="Education Loan Calculator"
      calculatorSubtitle="Plan your finances better with our easy-to-use EMI calculator"
      calculatorConfig={{
        initialLoanAmount: 1000000,
        initialInterestRate: 8.5,
        initialLoanTenure: 60,
        loanAmountMin: 100000,
        loanAmountMax: 5000000,
        interestRateMin: 6,
        interestRateMax: 15,
        tenureMin: 12,
        tenureMax: 180,
      }}
      eligibilityCriteria={educationLoanEligibilityCriteria}
      requiredDocuments={educationLoanRequiredDocuments}
      processTitle="Education Loan Process"
      processSubtitle="Simple 4-step process to get your education loan approved"
      processSteps={educationLoanProcess}
      faqs={educationLoanFAQs}
      ctaTitle="Ready to Pursue Your Dreams?"
      ctaSubtitle="Apply now and get your education loan approved quickly"
      ctaBadgeText="Start Your Journey"
      ctaPrimaryButton="Apply for Education Loan"
      ctaSecondaryButton="Speak to an Advisor"
    />
  );
};

export default EducationLoan;

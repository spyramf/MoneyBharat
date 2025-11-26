import LoanPageTemplate from "@/templates/LoanPageTemplate";
import {
  personalLoanFeatures,
  personalLoanEligibilityCriteria,
  personalLoanRequiredDocuments,
  personalLoanProcess,
  personalLoanFAQs,
} from "@/data/loanData";

const PersonalLoan = () => {
  return (
        <LoanPageTemplate
            pageTitle="Personal Loan - MoneyBharat"
            metaDescription="Quick unsecured loans for your personal needs with competitive interest rates"
            seoKeywords="personal loan India, instant personal loan, unsecured loan online, low interest personal loan, Money Bharat loan"
            heroTitle="Personal Loan"
            heroSubtitle="Quick unsecured loans for your personal needs with competitive interest rates"
            heroGradientFrom="from-fintech-purple"
            heroGradientTo="to-fintech-blue"
            featuresTitle="Why Choose Our Personal Loan"
            featuresSubtitle="Designed to meet all your financial needs with flexible and affordable options"
            features={personalLoanFeatures}
            calculatorTitle="Personal Loan EMI Calculator"
            calculatorSubtitle="Plan your finances better with our easy-to-use Personal Loan EMI calculator"
            calculatorConfig={{
                initialLoanAmount: 300000,
                initialInterestRate: 10.99,
                initialLoanTenure: 24,
                loanAmountMin: 50000,
                loanAmountMax: 1500000,
                interestRateMin: 9,
                interestRateMax: 18,
                tenureMin: 12,
                tenureMax: 60,
            }}
            eligibilityCriteria={personalLoanEligibilityCriteria}
            requiredDocuments={personalLoanRequiredDocuments}
            processSteps={personalLoanProcess}
            faqs={personalLoanFAQs}
            ctaTitle="Ready to Get Started?"
            ctaSubtitle="Apply now and get your personal loan approved within 24 hours"
            ctaBadgeText="Get Started Today"
            ctaPrimaryButton="Apply for a Personal Loan"
            ctaSecondaryButton="Speak to an Advisor"
        />
  );
};

export default PersonalLoan;

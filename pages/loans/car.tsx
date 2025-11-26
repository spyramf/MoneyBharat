import LoanPageTemplate from "@/templates/LoanPageTemplate";
import {
  carLoanFeatures,
  carLoanEligibilityCriteria,
  carLoanRequiredDocuments,
  carLoanProcess,
  carLoanFAQs,
} from "@/data/carLoanData";

const CarLoan = () => {
  return (
        <LoanPageTemplate
            pageTitle="Car Loan - Money Bharat Finance"
            metaDescription="Get the best car loan offers with low interest rates, quick approval, and minimal documentation at Money Bharat."
            seoKeywords="car loan India, vehicle finance, new car loan, used car loan, zero down payment car loan, Money Bharat car loan"
            heroTitle="Car Loan"
            heroSubtitle="Get up to 100% financing on your new car with competitive interest rates starting at 7.5%* p.a."
            heroGradientFrom="from-fintech-blue"
            heroGradientTo="to-fintech-purple"
            featuresTitle="Why Choose Our Car Loan"
            featuresSubtitle="Drive your dream car with our flexible and affordable car loan options"
            features={carLoanFeatures}
            calculatorTitle="Car Loan Calculator"
            calculatorSubtitle="Calculate your potential loan amount and EMI"
            calculatorConfig={{
                initialLoanAmount: 1000000,
                initialInterestRate: 7.5,
                initialLoanTenure: 60,
                loanAmountMin: 100000,
                loanAmountMax: 10000000,
                interestRateMin: 5,
                interestRateMax: 15,
                tenureMin: 12,
                tenureMax: 84,
            }}
            eligibilityCriteria={carLoanEligibilityCriteria}
            requiredDocuments={carLoanRequiredDocuments}
            processSteps={carLoanProcess}
            faqs={carLoanFAQs}
            ctaTitle="Ready to Drive Your Dream Car?"
            ctaSubtitle="Apply now and get instant approval with competitive rates"
            ctaBadgeText="Get Started"
            ctaPrimaryButton="Apply for Car Loan"
            ctaSecondaryButton="Compare Offers"
        />
  );
};

export default CarLoan;

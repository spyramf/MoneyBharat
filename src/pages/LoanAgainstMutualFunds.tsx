import LoanPageTemplate from "@/templates/LoanPageTemplate";
import {
  lamfFeatures,
  lamfEligibilityCriteria,
  lamfRequiredDocuments,
  lamfProcess,
  lamfFAQs,
} from "@/data/loanAgainstMutualFundsData";

const LoanAgainstMutualFunds = () => {
  return (
    <LoanPageTemplate
      pageTitle="Loan Against Mutual Funds - MoneyBharat"
      metaDescription="Unlock the value of your mutual fund investments without selling them. Get instant funds with lower interest rates."
      heroTitle="Loan Against Mutual Funds"
      heroSubtitle="Unlock the value of your mutual fund investments without selling them"
      heroGradientFrom="from-fintech-purple"
      heroGradientTo="to-fintech-blue"
      featuresTitle="Why Choose Loan Against Mutual Funds"
      featuresSubtitle="Get instant funds without selling your investments while they continue to grow"
      features={lamfFeatures}
      calculatorTitle="Mutual Fund Loan Calculator"
      calculatorSubtitle="Calculate your potential loan amount and EMI based on your mutual fund holdings"
      calculatorConfig={{
        initialLoanAmount: 500000,
        initialInterestRate: 10.5,
        initialLoanTenure: 12,
        loanAmountMin: 50000,
        loanAmountMax: 7000000,
        interestRateMin: 9,
        interestRateMax: 15,
        tenureMin: 3,
        tenureMax: 36,
      }}
      eligibilityTitle="Eligibility & Documentation"
      eligibilitySubtitle="Simple eligibility criteria and minimal documentation for quick processing"
      eligibilityCriteria={lamfEligibilityCriteria}
      requiredDocuments={lamfRequiredDocuments}
      processSteps={lamfProcess}
      faqs={lamfFAQs}
      ctaTitle="Unlock Your Investment Value Today"
      ctaSubtitle="Get instant liquidity while your investments continue to grow"
      ctaBadgeText="Quick & Easy"
      ctaPrimaryButton="Apply Now"
      ctaSecondaryButton="Calculate Your Loan"
    />
  );
};

export default LoanAgainstMutualFunds;

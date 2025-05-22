
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
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
      <Footer />
    </div>
  );
};

export default TermInsurance;


import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import refactored components
import HealthInsuranceHero from "@/components/health-insurance/HealthInsuranceHero";
import QuickQuoteCalculator from "@/components/health-insurance/QuickQuoteCalculator";
import PopularHealthPlans from "@/components/health-insurance/PopularHealthPlans";
import HealthInsuranceTypes from "@/components/health-insurance/HealthInsuranceTypes";
import FactorsToConsider from "@/components/health-insurance/FactorsToConsider";
import PremiumFactors from "@/components/health-insurance/PremiumFactors";
import KeyPolicyFeatures from "@/components/health-insurance/KeyPolicyFeatures";
import EligibilityCriteria from "@/components/health-insurance/EligibilityCriteria";
import RiderCovers from "@/components/health-insurance/RiderCovers";
import RequiredDocuments from "@/components/health-insurance/RequiredDocuments";
import HealthBenefits from "@/components/health-insurance/HealthBenefits";
import CoverageOptions from "@/components/health-insurance/CoverageOptions";
import ClaimsProcess from "@/components/health-insurance/ClaimsProcess";
import HealthFAQs from "@/components/health-insurance/HealthFAQs";
import HealthCTA from "@/components/health-insurance/HealthCTA";

const HealthInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HealthInsuranceHero />
        {/* <QuickQuoteCalculator /> */}
        {/* <PopularHealthPlans /> */}
        <HealthInsuranceTypes />
        <FactorsToConsider />
        <PremiumFactors />
        <KeyPolicyFeatures />
        <EligibilityCriteria />
        <RiderCovers />
        <RequiredDocuments />
        {/* <HealthBenefits /> */}
        {/* <CoverageOptions /> */}
        <ClaimsProcess />
        <HealthFAQs />
        <HealthCTA />
      </main>
      <Footer />
    </div>
  );
};

export default HealthInsurance;

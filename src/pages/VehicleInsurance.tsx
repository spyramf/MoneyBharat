
import React from "react";
import Navbar from "@/components/Navbar";

// Import vehicle insurance components
import VehicleInsuranceHero from "@/components/vehicle-insurance/VehicleInsuranceHero";
import VehicleInsuranceTypes from "@/components/vehicle-insurance/VehicleInsuranceTypes";
import VehiclePremiumFactors from "@/components/vehicle-insurance/VehiclePremiumFactors";
import KeyVehiclePolicyFeatures from "@/components/vehicle-insurance/KeyVehiclePolicyFeatures";
import VehicleEligibilityCriteria from "@/components/vehicle-insurance/VehicleEligibilityCriteria";
import VehicleInsuranceAddOns from "@/components/vehicle-insurance/VehicleInsuranceAddOns";
import VehicleClaimsProcess from "@/components/vehicle-insurance/VehicleClaimsProcess";
import VehicleRequiredDocuments from "@/components/vehicle-insurance/VehicleRequiredDocuments";
import VehicleInsuranceFAQs from "@/components/vehicle-insurance/VehicleInsuranceFAQs";
import IDVCalculator from "@/components/vehicle-insurance/IDVCalculator";
import VehicleCTA from "@/components/vehicle-insurance/VehicleCTA";

const VehicleInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <VehicleInsuranceHero />
        <VehicleInsuranceTypes />
        <VehiclePremiumFactors />
        <KeyVehiclePolicyFeatures />
        <VehicleEligibilityCriteria />
        <VehicleInsuranceAddOns />
        <VehicleClaimsProcess />
        <VehicleRequiredDocuments />
        <IDVCalculator />
        <VehicleInsuranceFAQs />
        <VehicleCTA />
      </main>
    </div>
  );
};

export default VehicleInsurance;

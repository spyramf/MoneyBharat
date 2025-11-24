import Head from 'next/head';
import React from "react";

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
        <Head>
            <title>Vehicle Insurance | Money Bharat</title>
            <meta name="description" content="Compare and buy vehicle insurance online. Get the best quotes for your car or bike." />
        </Head>
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

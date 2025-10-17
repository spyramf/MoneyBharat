import { Shield, Heart, Car, Umbrella, Plane, Home } from "lucide-react";
import FeaturesCards from "@/components/ui/feature-shader-cards";

const InsuranceSection = () => {
  const insuranceFeatures = [
    {
      title: "Life Insurance",
      description: "Financial security for your family's future with high coverage plans at affordable premiums. Term, endowment, and ULIP options available.",
      icon: <Shield className="w-12 h-12 text-white" />
    },
    {
      title: "Health Insurance",
      description: "Comprehensive medical coverage with cashless treatment at 10,000+ hospitals. Family floater and individual plans with pre and post hospitalization coverage.",
      icon: <Heart className="w-12 h-12 text-white" />
    },
    {
      title: "Vehicle Insurance",
      description: "Complete protection for your cars and two-wheelers. Comprehensive and third-party coverage with quick claim settlement and roadside assistance.",
      icon: <Car className="w-12 h-12 text-white" />
    },
    {
      title: "Term Insurance",
      description: "Pure life protection at the lowest premiums. Secure your family's financial future with high sum assured and flexible payout options.",
      icon: <Umbrella className="w-12 h-12 text-white" />
    },
    {
      title: "Travel Insurance",
      description: "Worry-free travel with coverage for medical emergencies, trip cancellations, and lost baggage. Domestic and international plans available.",
      icon: <Plane className="w-12 h-12 text-white" />
    },
    {
      title: "Home Insurance",
      description: "Protect your home and belongings from natural disasters, theft, and fire. Complete coverage for structure and contents with quick claim processing.",
      icon: <Home className="w-12 h-12 text-white" />
    }
  ];

  return (
    <FeaturesCards 
      features={insuranceFeatures}
      title="Comprehensive Insurance Solutions"
      subtitle="Protect yourself and your loved ones with our range of insurance products tailored to your needs"
    />
  );
};

export default InsuranceSection;

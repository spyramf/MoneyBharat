import { FeatureSteps } from "@/components/ui/feature-section";
import OptimizedImage from "@/components/ui/optimized-image";

const FeaturesSection = () => {
  const features = [
    {
      step: "Step 1",
      title: "AI-Powered Recommendations",
      content: "Our advanced algorithm analyzes thousands of financial products to recommend the perfect options tailored to your goals and risk profile.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    },
    {
      step: "Step 2", 
      title: "Paperless Onboarding",
      content: "Complete your KYC and start investing or apply for loans in minutes with our secure, fully digital process—no paperwork required.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    {
      step: "Step 3",
      title: "Bank-Grade Security",
      content: "Your data and transactions are protected with 256-bit encryption, multi-factor authentication, and industry-leading security protocols.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3"
    }
  ];

  return (
    <section className="py-16 bg-muted/30 md:py-[60px]">
      <div className="container mx-auto px-4">
        <FeatureSteps
          features={features}
          title="Finance Made Smart with Technology"
          autoPlayInterval={4000}
          className="p-0"
        />
      </div>
    </section>
  );
};

export default FeaturesSection;

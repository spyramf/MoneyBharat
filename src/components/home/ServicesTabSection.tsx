import { Badge } from "@/components/ui/badge";
import { FeatureCarousel, type Step } from "@/components/ui/animated-feature-carousel";

const ServicesTabSection = () => {
  const steps: readonly Step[] = [
    {
      id: "1",
      name: "Mutual Funds",
      title: "Grow Your Wealth with Expert-Curated Mutual Funds",
      description: "Access top-performing mutual funds, SIP calculators, and personalized investment strategies. Start your journey to financial freedom with as little as ₹500 per month.",
    },
    {
      id: "2",
      name: "Insurance",
      title: "Secure Your Family's Future with Comprehensive Coverage",
      description: "Compare plans from top insurers for health, life, and vehicle insurance. Get instant quotes, expert guidance, and save up to 30% on premiums with our platform.",
    },
    {
      id: "3",
      name: "Loans",
      title: "Get Instant Loans at Competitive Interest Rates",
      description: "Fast-track your dreams with home, personal, car, and education loans. Enjoy hassle-free digital processing, transparent terms, and approval within 24 hours.",
    },
    {
      id: "4",
      name: "Tax Saving",
      title: "Maximize Your Returns with Smart Tax Planning",
      description: "Discover tax-saving investment options like ELSS, PPF, and NPS. Get expert advice on tax-efficient strategies to save more and grow your wealth legally.",
    },
  ];

  const images = {
    alt: "Financial Services",
    step1img1: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop&q=80",
    step1img2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
    step2img1: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&q=80",
    step2img2: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&q=80",
    step3img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop&q=80",
    step4img: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=600&fit=crop&q=80",
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <Badge variant="outline" className="border-primary/30 bg-primary/5">
            <span className="text-primary font-medium">Our Services</span>
          </Badge>
          <h2 className="max-w-2xl text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            Comprehensive Financial Services for{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Every Need
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl lg:text-lg">
            Discover smart financial solutions tailored to help you achieve your goals faster
          </p>
        </div>

        <FeatureCarousel image={images} steps={steps} />
      </div>
    </section>
  );
};

export default ServicesTabSection;

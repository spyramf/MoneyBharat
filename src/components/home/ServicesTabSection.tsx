import { Badge } from "@/components/ui/badge";
import { Feature2 } from "@/components/ui/feature-2";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ServicesTabSection = () => {
  const services = [
    {
      title: "Grow Your Wealth with Expert-Curated Mutual Funds",
      description:
        "Access top-performing mutual funds, SIP calculators, and personalized investment strategies. Start your journey to financial freedom with as little as ₹500 per month. Build a diversified portfolio with expert guidance.",
      imageSrc:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop&q=80",
      imageAlt: "Mutual Funds Investment Dashboard",
      buttonPrimary: {
        label: "Explore Mutual Funds",
        href: "/mutual-funds",
      },
      buttonSecondary: {
        label: "Calculate SIP",
        href: "/sip-calculator",
      },
    },
    {
      title: "Secure Your Family's Future with Comprehensive Coverage",
      description:
        "Compare plans from top insurers for health, life, and vehicle insurance. Get instant quotes, expert guidance, and save up to 30% on premiums with our platform. Protect what matters most with tailored coverage.",
      imageSrc:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&q=80",
      imageAlt: "Insurance Protection Plans",
      buttonPrimary: {
        label: "Find Insurance Plans",
        href: "/insurance",
      },
      buttonSecondary: {
        label: "Get Quote",
        href: "/insurance",
      },
    },
    {
      title: "Get Instant Loans at Competitive Interest Rates",
      description:
        "Fast-track your dreams with home, personal, car, and education loans. Enjoy hassle-free digital processing, transparent terms, and approval within 24 hours. Flexible repayment options tailored to your needs.",
      imageSrc:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop&q=80",
      imageAlt: "Loan Application Services",
      buttonPrimary: {
        label: "Apply for Loans",
        href: "/loans",
      },
      buttonSecondary: {
        label: "Calculate EMI",
        href: "/emi-calculator",
      },
    },
  ];

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

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index}>
                <div className="py-8">
                  <Feature2 {...service} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16" />
          <CarouselNext className="hidden md:flex -right-12 lg:-right-16" />
        </Carousel>
      </div>
    </section>
  );
};

export default ServicesTabSection;

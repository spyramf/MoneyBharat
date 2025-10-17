import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Shield, Landmark } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

const ServicesTabSection = () => {
  const tabs: Tab[] = [
    {
      value: "mutual-funds",
      icon: <TrendingUp className="h-auto w-4 shrink-0" />,
      label: "Mutual Funds",
      content: {
        badge: "Smart Investing",
        title: "Grow your wealth with expert-curated mutual funds",
        description:
          "Access top-performing mutual funds, SIP calculators, and personalized investment strategies. Start your journey to financial freedom with as little as ₹500 per month.",
        buttonText: "Explore Mutual Funds",
        buttonLink: "/mutual-funds",
        imageSrc:
          "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
        imageAlt: "Mutual Funds Investment",
      },
    },
    {
      value: "insurance",
      icon: <Shield className="h-auto w-4 shrink-0" />,
      label: "Insurance",
      content: {
        badge: "Complete Protection",
        title: "Secure your family's future with comprehensive coverage",
        description:
          "Compare plans from top insurers for health, life, and vehicle insurance. Get instant quotes, expert guidance, and save up to 30% on premiums with our platform.",
        buttonText: "Find Insurance Plans",
        buttonLink: "/insurance",
        imageSrc:
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
        imageAlt: "Insurance Protection",
      },
    },
    {
      value: "loans",
      icon: <Landmark className="h-auto w-4 shrink-0" />,
      label: "Loans",
      content: {
        badge: "Quick Approvals",
        title: "Get instant loans at competitive interest rates",
        description:
          "Fast-track your dreams with home, personal, car, and education loans. Enjoy hassle-free digital processing, transparent terms, and approval within 24 hours.",
        buttonText: "Apply for Loans",
        buttonLink: "/loans",
        imageSrc:
          "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
        imageAlt: "Loan Services",
      },
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline" className="border-primary/30 bg-primary/5">
            <span className="text-primary font-medium">Our Services</span>
          </Badge>
          <h2 className="max-w-2xl text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            Comprehensive Financial Services for{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Every Need
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Discover smart financial solutions tailored to help you achieve your goals faster
          </p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-12">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10 bg-transparent">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-card border shadow-lg p-6 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className="flex flex-col gap-5">
                  <Badge variant="outline" className="w-fit bg-primary/5 border-primary/30">
                    <span className="text-primary font-medium">{tab.content.badge}</span>
                  </Badge>
                  <h3 className="text-3xl font-bold lg:text-4xl tracking-tight">
                    {tab.content.title}
                  </h3>
                  <p className="text-muted-foreground lg:text-lg">
                    {tab.content.description}
                  </p>
                  <Link to={tab.content.buttonLink}>
                    <Button className="mt-2.5 w-fit gap-2" size="lg">
                      {tab.content.buttonText}
                    </Button>
                  </Link>
                </div>
                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-xl shadow-xl w-full object-cover aspect-video"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesTabSection;

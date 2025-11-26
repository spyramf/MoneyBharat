import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BharatiAXA from "@/assets/insurance-partners/Bharati_AXA.png";
import HDFCErgo from "@/assets/insurance-partners/hdfc_ergo_logo_sq.jpg";
import ICICILombard from "@/assets/insurance-partners/ICICI_Lombard.png";
import IFFCO from "@/assets/insurance-partners/IFFCO.png";
import OrientalInsurance from "@/assets/insurance-partners/oriental-insurance-logo.webp";
import StarHealth from "@/assets/insurance-partners/Star_Health.png";
import ApolloMunich from "@/assets/insurance-partners/apollo_sq_logo.png";

// Insurance partners data with real company logos
const insurancePartners = [
  { name: "IFFCO Tokio Insurance", logo: IFFCO },
  { name: "HDFC Ergo", logo: HDFCErgo },
  { name: "ICICI Lombard", logo: ICICILombard },
  { name: "Bharti AXA", logo: BharatiAXA },
  { name: "Oriental Insurance", logo: OrientalInsurance },
  { name: "Star Health Insurance", logo: StarHealth },
  { name: "Apollo Munich", logo: ApolloMunich },
];
const InsurancePartners = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 3000);
  }, [api, current]);

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-secondary/50 via-background to-primary/10">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter font-bold mb-4">
            Our Insurance{" "}
            <span className="gradient-text bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Partners
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            We partner with India's most trusted insurance providers to bring you the best coverage options at
            competitive prices
          </p>
          <div className="flex justify-center gap-8 text-sm text-muted-foreground mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-foreground">{insurancePartners.length}+</div>
              <div>Insurance Partners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-foreground">98%</div>
              <div>Claim Settlement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">₹100Cr+</div>
              <div>Claims Processed</div>
            </div>
          </div>
        </div>

        {/* Partner Carousel */}
        <div className="relative">
          <Carousel setApi={setApi} className="w-full max-w-7xl mx-auto">
            <CarouselContent>
              {insurancePartners.map((partner, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/6">
                  <div className="flex rounded-lg aspect-square bg-background border shadow-sm hover:shadow-md transition-shadow items-center justify-center p-4">
                    <img src={partner.logo.src} alt={partner.name} className="w-full h-full object-contain" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-background p-6 rounded-lg shadow-sm border">
            <div className="text-3xl font-bold text-primary mb-2">IRDAI</div>
            <p className="text-muted-foreground text-sm">Regulated & Approved</p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm border">
            <div className="text-3xl font-bold text-accent-foreground mb-2">₹5000Cr+</div>
            <p className="text-muted-foreground text-sm">Partner Network Worth</p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm border">
            <div className="text-3xl font-bold text-secondary-foreground mb-2">24/7</div>
            <p className="text-muted-foreground text-sm">Customer Support</p>
          </div>
        </div>

        {/* <div className="mt-12 text-center">
          <Button className="bg-gradient-to-r from-accent to-secondary text-white hover:from-accent/90 hover:to-secondary/90 px-8 py-3">
            View All Partners & Coverage
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Compare policies from all our partners in one place
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default InsurancePartners;
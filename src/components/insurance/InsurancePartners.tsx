
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Building } from "lucide-react";

// Insurance partners data with real company names
const insurancePartners = [
  { name: "IFFCO Tokio Insurance", category: "General Insurance", logo: Building },
  { name: "Acko Insurance", category: "Digital Insurance", logo: Building },
  { name: "Universal Sompo Insurance", category: "General Insurance", logo: Building },
  { name: "National Insurance", category: "General Insurance", logo: Building },
  { name: "Oriental Insurance", category: "General Insurance", logo: Building },
  { name: "ICICI Prudential Life", category: "Life Insurance", logo: Building },
  { name: "Aditya Birla Health", category: "Health Insurance", logo: Building },
  { name: "HDFC Ergo", category: "Health & General", logo: Building },
  { name: "LIC of India", category: "Life Insurance", logo: Building },
  { name: "SBI Life Insurance", category: "Life Insurance", logo: Building },
  { name: "Bajaj Allianz", category: "Life & Health", logo: Building },
  { name: "Star Health Insurance", category: "Health Insurance", logo: Building },
  { name: "Max Bupa Health", category: "Health Insurance", logo: Building },
  { name: "Reliance General", category: "General Insurance", logo: Building },
  { name: "Tata AIG Insurance", category: "General Insurance", logo: Building }
];

const InsurancePartners = () => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Our Insurance <span className="gradient-text bg-gradient-to-r from-fintech-purple to-fintech-blue bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We partner with India's most trusted insurance providers to bring you the best coverage options at competitive prices
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-500 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-fintech-purple">{insurancePartners.length}+</div>
              <div>Insurance Partners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-fintech-blue">98%</div>
              <div>Claim Settlement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-fintech-green">₹100Cr+</div>
              <div>Claims Processed</div>
            </div>
          </div>
        </div>
        
        {/* Partner Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {insurancePartners.map((partner, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <Card className="h-full bg-white hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100">
                    <CardContent className="p-6 flex flex-col items-center justify-center h-32">
                      <div className="flex items-center justify-center mb-3 w-12 h-12 rounded-full bg-gradient-to-r from-fintech-purple/10 to-fintech-blue/10">
                        <partner.logo className="h-6 w-6 text-fintech-purple" />
                      </div>
                      <h3 className="text-center font-semibold text-sm text-gray-800 mb-1 line-clamp-2">
                        {partner.name}
                      </h3>
                      <p className="text-xs text-gray-500 text-center">
                        {partner.category}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white border-2 border-fintech-purple/20 hover:bg-fintech-purple hover:text-white" />
            <CarouselNext className="hidden md:flex -right-12 bg-white border-2 border-fintech-purple/20 hover:bg-fintech-purple hover:text-white" />
          </Carousel>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-fintech-green mb-2">IRDAI</div>
            <p className="text-gray-600 text-sm">Regulated & Approved</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-fintech-purple mb-2">₹5000Cr+</div>
            <p className="text-gray-600 text-sm">Partner Network Worth</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-fintech-blue mb-2">24/7</div>
            <p className="text-gray-600 text-sm">Customer Support</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-gradient-to-r from-fintech-purple to-fintech-blue text-white hover:from-fintech-purple/90 hover:to-fintech-blue/90 px-8 py-3">
            View All Partners & Coverage
          </Button>
          <p className="text-sm text-gray-500 mt-3">
            Compare policies from all our partners in one place
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsurancePartners;

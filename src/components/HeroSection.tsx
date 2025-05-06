
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-fintech-purple/10 to-transparent -z-10"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-fintech-blue/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-fintech-purple/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          
          {/* Left content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Modern Financial <span className="gradient-text">Solutions</span> for Today's India
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-lg">
              Simplifying wealth creation through technology-driven mutual funds, insurance, and loan products tailored for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-gradient-to-r from-fintech-purple to-fintech-blue hover:opacity-90 text-white font-medium px-8 py-6">
                Explore Services
              </Button>
              <Button variant="outline" className="group border-fintech-purple text-fintech-purple hover:text-fintech-blue transition-colors px-8 py-6">
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
              <div>
                <p className="text-3xl font-bold gradient-text">₹500Cr+</p>
                <p className="text-gray-600 text-sm">Assets Managed</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">50K+</p>
                <p className="text-gray-600 text-sm">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">15+</p>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
            </div>
          </div>
          
          {/* Right image/illustration */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-fintech-orange/10 rounded-full blur-xl"></div>
              <div className="glass-card p-6 max-w-md mx-auto animate-float">
                <div className="aspect-[4/3] bg-gradient-to-br from-fintech-purple/80 to-fintech-blue/80 rounded-lg flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
                    alt="Financial Technology"
                    className="object-cover rounded-lg mix-blend-overlay"
                  />
                </div>
                
                {/* Floating cards */}
                <div className="absolute -bottom-6 -left-8 p-4 glass-card rounded-lg max-w-[200px] animate-pulse-slow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-fintech-purple to-fintech-blue flex items-center justify-center text-white font-bold">
                      MF
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Investment Growth</p>
                      <p className="text-sm font-semibold">+14.8%</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-12 p-4 glass-card rounded-lg animate-pulse-slow">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-fintech-orange to-fintech-purple flex items-center justify-center text-white text-xs font-bold">
                      ₹
                    </div>
                    <p className="text-sm font-semibold">Instant Loans</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

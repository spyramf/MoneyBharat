
import { ArrowRight, ArrowRightCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OptimizedHeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 pb-16 md:pb-20 py-[50px]">
      {/* Simplified background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-fintech-green/5 to-transparent -z-10"></div>
      <div className="absolute top-40 right-0 w-80 h-80 bg-fintech-green/5 rounded-full blur-2xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          
          {/* Left content - optimized for LCP */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight lg:text-5xl">
                Start Your <span className="text-fintech-green">Wealth Journey</span> <br />
                <span className="text-black">with Mutual Funds, SIP & Insurance</span>
              </h1>
              <p className="text-lg text-gray-700 max-w-lg mt-6 md:text-lg">
                Experience a new era of financial freedom with Money Bharat's 
                AI-powered platform that simplifies investing, insurance, and loans 
                for every Indian. Start your wealth creation journey today with India's 
                most trusted fintech platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link to="/investor/login">
                  <Button className="bg-gradient-to-r from-fintech-green to-fintech-green hover:opacity-90 text-white px-8 py-6">
                    Start Investing
                  </Button>
                </Link>
                <Link to="/booking">
                  <Button variant="outline" className="group border-fintech-green text-fintech-green hover:text-fintech-green transition-colors px-8 py-6 rounded-xl">
                    Book Consultation
                    <ArrowRightCircle className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Trust indicators - simplified */}
            <div className="pt-10">
              <p className="text-sm text-gray-600 mb-3">Trusted by investors across India</p>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-fintech-green rounded"></div>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-fintech-green">AMFI</p>
                    <p className="text-xs text-gray-500">Registered</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-fintech-blue rounded"></div>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-fintech-blue">256-bit</p>
                    <p className="text-xs text-gray-500">Encryption</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-fintech-orange rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-fintech-orange">₹100Cr+</p>
                    <p className="text-xs text-gray-500">Insurance Cover</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right dashboard visualization - simplified */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-fintech-green/5 rounded-full blur-xl"></div>
              
              {/* Simplified investment dashboard */}
              <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-lg p-6 max-w-md mx-auto border">
                <div className="bg-gradient-to-br from-fintech-green/10 to-fintech-blue/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Money Bharat Portfolio</h3>
                    <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                      +18.7%
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Portfolio Value</span>
                        <span className="font-medium">₹8.2L</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-fintech-green to-fintech-blue rounded-full w-4/5"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between items-center p-2 bg-white rounded shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-green-100"></div>
                        <div>
                          <p className="font-medium text-sm">HDFC Top 100</p>
                          <p className="text-xs text-gray-500">Large Cap</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-green-600 font-medium">+16.2%</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-2 bg-white rounded shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-100"></div>
                        <div>
                          <p className="font-medium text-sm">Axis Small Cap</p>
                          <p className="text-xs text-gray-500">Small Cap</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-green-600 font-medium">+21.8%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Simplified floating elements */}
              <div className="absolute -top-4 right-4 w-20 h-20 bg-white shadow-lg rounded-lg p-2 flex flex-col items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-fintech-green mb-1"></div>
                <p className="text-xs text-gray-600">Growth</p>
                <p className="text-sm font-bold text-green-600">+18.7%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats section */}
      <div className="container mx-auto px-4 mt-16 md:mt-24">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Why Choose Money Bharat Finance for Your Financial Journey?
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Money Bharat Finance has been empowering investors across India with cutting-edge technology, 
            expert guidance, and transparent financial solutions. Join our growing community of successful investors.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
            <p className="text-3xl md:text-4xl font-bold text-fintech-green mb-2">₹5000Cr+</p>
            <p className="text-gray-600">Assets Under Management</p>
          </div>
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
            <p className="text-3xl md:text-4xl font-bold text-fintech-blue mb-2">500K+</p>
            <p className="text-gray-600">Happy Investors</p>
          </div>
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
            <p className="text-3xl md:text-4xl font-bold text-fintech-green mb-2">15+</p>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedHeroSection;


import { ArrowRight, ArrowRightCircle, TrendingUp, Shield, Target, DollarSign } from "lucide-react";
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
                <a href="https://moneybharat.net/Home/Login" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-fintech-green to-fintech-green hover:opacity-90 text-white px-8 py-6">
                    Start Investing
                  </Button>
                </a>
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
          
          {/* Right diamond benefits visualization */}
          <div className="w-full md:w-1/2">
            <div className="relative flex items-center justify-center min-h-[400px]">
              {/* Background decoration */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-fintech-green/5 rounded-full blur-xl"></div>
              
              {/* Diamond grid container */}
              <div className="relative w-90 h-90">
                {/* Top diamond */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 rotate-45 bg-gradient-to-br from-fintech-blue to-fintech-blue/80 rounded-lg shadow-lg flex items-center justify-center group hover:scale-105 transition-transform duration-300">
                  <div className="transform -rotate-45 text-center text-white">
                    <TrendingUp className="w-6 h-6 mx-auto mb-1" />
                    <p className="text-xs font-semibold leading-tight">Disciplines your<br />Financial Habit</p>
                  </div>
                </div>
                
                {/* Left diamond */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-32 h-32 rotate-45 bg-gradient-to-br from-fintech-green to-fintech-green/80 rounded-lg shadow-lg flex items-center justify-center group hover:scale-105 transition-transform duration-300">
                  <div className="transform -rotate-45 text-center text-white">
                    <DollarSign className="w-6 h-6 mx-auto mb-1" />
                    <p className="text-xs font-semibold leading-tight">Get Compounding<br />Interest Benefits</p>
                  </div>
                </div>
                
                {/* Right diamond */}
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-32 h-32 rotate-45 bg-gradient-to-br from-fintech-orange to-fintech-orange/80 rounded-lg shadow-lg flex items-center justify-center group hover:scale-105 transition-transform duration-300">
                  <div className="transform -rotate-45 text-center text-white">
                    <Shield className="w-6 h-6 mx-auto mb-1" />
                    <p className="text-xs font-semibold leading-tight">Helps to Manage<br />Market Volatility</p>
                  </div>
                </div>
                
                {/* Bottom diamond */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 rotate-45 bg-gradient-to-br from-purple-500 to-purple-400 rounded-lg shadow-lg flex items-center justify-center group hover:scale-105 transition-transform duration-300">
                  <div className="transform -rotate-45 text-center text-white">
                    <Target className="w-6 h-6 mx-auto mb-1" />
                    <p className="text-xs font-semibold leading-tight">No Charges to<br />Invest in a SIP</p>
                  </div>
                </div>
                
                {/* Center connecting lines */}
                {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-md z-10"></div>
                
                {/* Floating benefit text */}
                {/* <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                  <p className="text-sm font-medium text-gray-700">Why Choose SIP?</p>
                  <p className="text-xs text-gray-500">Smart Investment Benefits</p>
                </div> */}
              </div> */}
              
              {/* Floating growth indicator */}
              {/* <div className="absolute -top-4 right-4 w-20 h-20 bg-white shadow-lg rounded-lg p-2 flex flex-col items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-fintech-green mb-1"></div>
                <p className="text-xs text-gray-600">Growth</p>
                <p className="text-sm font-bold text-green-600">+18.7%</p>
              </div> */}
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
            <p className="text-3xl md:text-4xl font-bold text-fintech-green mb-2">₹500Cr+</p>
            <p className="text-gray-600">Assets Under Management</p>
          </div>
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
            <p className="text-3xl md:text-4xl font-bold text-fintech-blue mb-2">50K+</p>
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

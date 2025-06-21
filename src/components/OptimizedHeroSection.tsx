
import { ArrowRightCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OptimizedHeroSection = () => {
  return (
    <section className="hero-section relative overflow-hidden">
      {/* Simplified background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-50 to-transparent -z-10"></div>
      
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          
          {/* Left content - optimized for LCP */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h1 className="hero-title">
                India's Best <span className="text-green-600">Mutual Funds</span>, <br />
                <span className="text-black">Insurance & Loans Platform</span>
              </h1>
              <p className="hero-text">
                Money Bharat Finance is India's leading fintech platform offering zero-commission 
                <Link to="/mutual-funds" className="text-green-600 hover:underline mx-1">mutual fund investments</Link>, 
                comprehensive <Link to="/insurance" className="text-green-600 hover:underline mx-1">insurance coverage</Link>, 
                and instant <Link to="/loans" className="text-green-600 hover:underline mx-1">loan approvals</Link>. 
                Join 500,000+ investors building wealth with Money Bharat Finance today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link to="/investor/login">
                  <Button className="btn-primary">
                    Start Investing Today
                  </Button>
                </Link>
                <Link to="/booking">
                  <Button variant="outline" className="group border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors px-8 py-6 rounded-xl">
                    Free Financial Consultation
                    <ArrowRightCircle className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              
              {/* Quick access links */}
              <div className="pt-4">
                <p className="text-sm text-gray-600 mb-2">Quick Access:</p>
                <div className="flex flex-wrap gap-2">
                  <Link to="/tools/sip-calculator" className="text-xs bg-gray-100 px-3 py-1 rounded-full hover:bg-green-600 hover:text-white transition-colors">
                    SIP Calculator
                  </Link>
                  <Link to="/tools/emi-calculator" className="text-xs bg-gray-100 px-3 py-1 rounded-full hover:bg-green-600 hover:text-white transition-colors">
                    EMI Calculator
                  </Link>
                  <Link to="/health-insurance" className="text-xs bg-gray-100 px-3 py-1 rounded-full hover:bg-green-600 hover:text-white transition-colors">
                    Health Insurance
                  </Link>
                  <Link to="/blog" className="text-xs bg-gray-100 px-3 py-1 rounded-full hover:bg-green-600 hover:text-white transition-colors">
                    Financial Tips
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Simplified trust indicators */}
            <div className="pt-8">
              <p className="text-sm text-gray-600 mb-3">Trusted by investors across India</p>  
              <div className="flex flex-wrap gap-6 items-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="font-semibold">AMFI Registered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="font-semibold">256-bit Encryption</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="font-semibold">₹100Cr+ Insurance Cover</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Simplified right visualization */}
          <div className="w-full md:w-1/2">
            <div className="bg-white shadow-xl rounded-lg p-6 max-w-md mx-auto border">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Portfolio</h2>
                  <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                    +18.7%
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Total Value</span>
                      <span className="font-medium">₹8.2L</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-blue-500 w-4/5"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-white rounded shadow-sm">
                      <div>
                        <p className="font-medium text-sm">HDFC Top 100</p>
                        <p className="text-xs text-gray-500">Large Cap</p>
                      </div>
                      <p className="text-sm text-green-600 font-medium">+16.2%</p>
                    </div>
                    
                    <div className="flex justify-between items-center p-2 bg-white rounded shadow-sm">
                      <div>
                        <p className="font-medium text-sm">Axis Small Cap</p>
                        <p className="text-xs text-gray-500">Small Cap</p>
                      </div>
                      <p className="text-sm text-green-600 font-medium">+21.8%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced stats section */}
      <div className="container mt-16 md:mt-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Why Choose Money Bharat Finance?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Money Bharat Finance has been empowering investors across India with cutting-edge technology and expert guidance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 text-center shadow-sm border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
            <p className="text-3xl font-bold text-green-600 mb-2">₹5000Cr+</p>
            <p className="text-gray-600 mb-2">Assets Under Management</p>
            <Link to="/about" className="text-sm text-green-600 hover:underline">Learn More</Link>
          </div>
          <div className="bg-white p-6 text-center shadow-sm border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
            <p className="text-3xl font-bold text-blue-600 mb-2">500K+</p>
            <p className="text-gray-600 mb-2">Happy Investors</p>
            <Link to="/investor/signup" className="text-sm text-green-600 hover:underline">Join Now</Link>
          </div>
          <div className="bg-white p-6 text-center shadow-sm border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
            <p className="text-3xl font-bold text-green-600 mb-2">15+</p>
            <p className="text-gray-600 mb-2">Years Experience</p>
            <Link to="/about" className="text-sm text-green-600 hover:underline">Our Story</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedHeroSection;

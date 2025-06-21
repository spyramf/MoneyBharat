
import { ArrowRightCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OptimizedHeroSection = () => {
  return (
    <section className="hero-section relative overflow-hidden">
      {/* Optimized background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-50 to-transparent -z-10"></div>
      
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left content - optimized for mobile-first */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                India's Best <span className="text-green-600">Mutual Funds</span>, <br className="hidden sm:block" />
                <span className="text-black">Insurance & Loans Platform</span>
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-gray-700 max-w-2xl mx-auto lg:mx-0">
                Money Bharat Finance is India's leading fintech platform offering zero-commission 
                <Link to="/mutual-funds" className="text-green-600 hover:underline mx-1" aria-label="Learn about mutual fund investments">mutual fund investments</Link>, 
                comprehensive <Link to="/insurance" className="text-green-600 hover:underline mx-1" aria-label="Explore insurance coverage options">insurance coverage</Link>, 
                and instant <Link to="/loans" className="text-green-600 hover:underline mx-1" aria-label="Check loan approval options">loan approvals</Link>. 
                Join 500,000+ investors building wealth with Money Bharat Finance today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
                <Link to="/investor/login" aria-label="Start investing with Money Bharat Finance">
                  <Button className="btn-primary w-full sm:w-auto px-8 py-3 text-lg">
                    Start Investing Today
                  </Button>
                </Link>
                <Link to="/booking" aria-label="Book free financial consultation">
                  <Button variant="outline" className="group border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors px-8 py-3 rounded-xl w-full sm:w-auto">
                    Free Financial Consultation
                    <ArrowRightCircle className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              
              {/* Quick access links - improved mobile layout */}
              <div className="pt-6">
                <p className="text-sm text-gray-600 mb-3">Quick Access:</p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <Link to="/tools/sip-calculator" className="text-xs bg-gray-100 px-3 py-2 rounded-full hover:bg-green-600 hover:text-white transition-colors" aria-label="Calculate SIP returns">
                    SIP Calculator
                  </Link>
                  <Link to="/tools/emi-calculator" className="text-xs bg-gray-100 px-3 py-2 rounded-full hover:bg-green-600 hover:text-white transition-colors" aria-label="Calculate EMI amounts">
                    EMI Calculator
                  </Link>
                  <Link to="/health-insurance" className="text-xs bg-gray-100 px-3 py-2 rounded-full hover:bg-green-600 hover:text-white transition-colors" aria-label="Explore health insurance options">
                    Health Insurance
                  </Link>
                  <Link to="/blog" className="text-xs bg-gray-100 px-3 py-2 rounded-full hover:bg-green-600 hover:text-white transition-colors" aria-label="Read financial tips and advice">
                    Financial Tips
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Enhanced trust indicators */}
            <div className="pt-8">
              <p className="text-sm text-gray-600 mb-4">Trusted by investors across India</p>  
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 text-sm">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="w-4 h-4 bg-green-600 rounded-full flex-shrink-0"></div>
                  <span className="font-semibold">AMFI Registered</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="w-4 h-4 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="font-semibold">256-bit Encryption</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="w-4 h-4 bg-orange-500 rounded-full flex-shrink-0"></div>
                  <span className="font-semibold">₹100Cr+ Cover</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced right visualization - better mobile optimization */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white shadow-xl rounded-2xl p-6 max-w-md mx-auto border border-gray-100">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">Portfolio Dashboard</h2>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    +18.7% Returns
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Total Investment Value</span>
                      <span className="font-bold text-lg text-gray-800">₹8.2L</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-300" style={{ width: '82%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Goal: ₹10L</span>
                      <span>82% Complete</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                      <div>
                        <p className="font-semibold text-sm text-gray-800">HDFC Top 100 Fund</p>
                        <p className="text-xs text-gray-500">Large Cap • SIP Active</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-green-600 font-semibold">+16.2%</p>
                        <p className="text-xs text-gray-500">₹85K</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                      <div>
                        <p className="font-semibold text-sm text-gray-800">Axis Small Cap Fund</p>
                        <p className="text-xs text-gray-500">Small Cap • High Growth</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-green-600 font-semibold">+21.8%</p>
                        <p className="text-xs text-gray-500">₹95K</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Link to="/investor/dashboard" className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center justify-center transition-colors" aria-label="View complete investment portfolio">
                      View Complete Portfolio →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced stats section with better mobile layout */}
      <div className="container mt-16 lg:mt-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Money Bharat Finance?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Money Bharat Finance has been empowering investors across India with cutting-edge technology and expert guidance.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 text-center shadow-lg border border-gray-100 rounded-xl hover:shadow-xl transition-shadow duration-300">
            <p className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">₹5000Cr+</p>
            <p className="text-gray-600 mb-3">Assets Under Management</p>
            <Link to="/about" className="text-sm text-green-600 hover:underline font-medium" aria-label="Learn more about Money Bharat Finance">Learn More</Link>
          </div>
          <div className="bg-white p-6 text-center shadow-lg border border-gray-100 rounded-xl hover:shadow-xl transition-shadow duration-300">
            <p className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">500K+</p>
            <p className="text-gray-600 mb-3">Happy Investors</p>
            <Link to="/investor/signup" className="text-sm text-green-600 hover:underline font-medium" aria-label="Join Money Bharat Finance community">Join Now</Link>
          </div>
          <div className="bg-white p-6 text-center shadow-lg border border-gray-100 rounded-xl hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
            <p className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">15+</p>
            <p className="text-gray-600 mb-3">Years Experience</p>
            <Link to="/about" className="text-sm text-green-600 hover:underline font-medium" aria-label="Read Money Bharat Finance story">Our Story</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedHeroSection;

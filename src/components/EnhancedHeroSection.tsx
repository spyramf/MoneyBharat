import { ArrowRight, ArrowRightCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const EnhancedHeroSection = () => {
  return <section className="relative overflow-hidden pt-16 md:pt-24 pb-16 md:pb-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-fintech-green/10 to-transparent -z-10"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-fintech-green/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-fintech-green/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          
          {/* Left content */}
          <div className="w-full md:w-1/2 space-y-6">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Build Your <span className="text-fintech-green">Portfolio</span> <br />
                <span className="text-black">With Confidence</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-lg mt-6">
                Experience a new era of financial freedom with our 
                AI-powered platform that simplifies investing, 
                insurance, and loans for every Indian.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button className="bg-gradient-to-r from-fintech-green to-fintech-green \\nhover:opacity-90 text-white px-8 py-6">
                  Start Investing
                </Button>
                <Button variant="outline" className="group border-fintech-green text-fintech-green hover:text-fintech-blue transition-colors px-8 py-6 rounded-full">
                  Book Consultation
                  <ArrowRightCircle className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.3,
            duration: 0.5
          }} className="pt-10">
              <p className="text-sm text-gray-600 mb-3">Trusted by investors across India</p>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-fintech-green">SEBI</p>
                    <p className="text-xs text-gray-500">Registered</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m20 8-8 5-8-5"></path></svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-fintech-blue">256-bit</p>
                    <p className="text-xs text-gray-500">Encryption</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6.5a2.5 2.5 0 0 0 0 5h1a2.5 2.5 0 0 1 0 5H4"></path><path d="M12 18v2"></path><path d="M12 4v2"></path></svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-fintech-orange">₹10Cr+</p>
                    <p className="text-xs text-gray-500">Insurance Cover</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right dashboard visualization */}
          <motion.div className="w-full md:w-1/2" initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5
        }}>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-fintech-green/10 rounded-full blur-xl"></div>
              
              {/* Investment dashboard */}
              <div className="glass-card p-6 max-w-md mx-auto shadow-xl">
                <div className="bg-gradient-to-br from-fintech-green/10 to-fintech-blue/10 rounded-lg p-3">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Your Investments</h3>
                    <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                      Annual Returns: +18.7%
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Portfolio Value</span>
                        <span className="font-medium">₹8.2L</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-fintech-green to-fintech-blue rounded-full" style={{
                        width: "82%"
                      }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-600 mt-1">
                        <span>Target: ₹10L</span>
                        <span>82% achieved</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <div className="flex justify-between items-center p-2 bg-white rounded-lg shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 9 3-3 3 3"></path><path d="M8 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"></path></svg>
                        </div>
                        <div>
                          <p className="font-medium text-sm">HDFC Top 100</p>
                          <p className="text-xs text-gray-500">Large Cap</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-green-600 font-medium">+16.2%</p>
                        <p className="text-xs text-gray-500">₹85K</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-2 bg-white rounded-lg shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 9 3-3 3 3"></path><path d="M8 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"></path></svg>
                        </div>
                        <div>
                          <p className="font-medium text-sm">Axis Small Cap</p>
                          <p className="text-xs text-gray-500">Small Cap</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-green-600 font-medium">+21.8%</p>
                        <p className="text-xs text-gray-500">₹95K</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-right">
                    <a href="#" className="text-fintech-green hover:text-fintech-blue transition-colors text-sm font-medium flex items-center justify-end">
                      View Complete Portfolio
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 right-4 md:right-10 w-24 h-24 glass-card rounded-lg shadow-lg p-2 flex flex-col items-center justify-center animate-bounce-slow">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-fintech-green mb-1"></div>
                <p className="text-xs text-gray-600">Growth</p>
                <p className="text-sm font-bold text-green-600">+18.7%</p>
              </div>
              
              <div className="absolute -bottom-4 -left-4 p-3 glass-card rounded-lg shadow-lg animate-pulse-slow">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-fintech-green to-fintech-blue flex items-center justify-center text-white text-xs font-bold">
                    ₹
                  </div>
                  <p className="text-sm font-semibold">Instant Loans</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Stats section */}
      <motion.div className="container mx-auto px-4 mt-16 md:mt-24" initial={{
      opacity: 0,
      y: 30
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.6,
      duration: 0.5
    }}>
        <div className="grid grid-cols-3 gap-6">
          <div className="rounded-xl bg-gray-50/80 backdrop-blur-sm p-6 text-center shadow-sm border border-green-300">
            <p className="text-3xl md:text-4xl font-bold text-fintech-green mb-2">₹500Cr+</p>
            <p className="text-gray-600 text-sm">Assets Managed</p>
          </div>
          <div className="rounded-xl bg-gray-50/80 backdrop-blur-sm p-6 text-center shadow-sm border border-green-300">
            <p className="text-3xl md:text-4xl font-bold text-fintech-blue mb-2">50K+</p>
            <p className="text-gray-600 text-sm">Happy Clients</p>
          </div>
          <div className="rounded-xl bg-gray-50/80 backdrop-blur-sm p-6 text-center shadow-sm border border-gray-100">
            <p className="text-3xl md:text-4xl font-bold text-fintech-green mb-2">15+</p>
            <p className="text-gray-600 text-sm">Years Experience</p>
          </div>
        </div>
      </motion.div>
    </section>;
};
export default EnhancedHeroSection;
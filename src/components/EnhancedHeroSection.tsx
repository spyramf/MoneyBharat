import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TextRotate } from "@/components/ui/text-rotate";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
const financialImages = [{
  url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3",
  title: "Financial charts and graphs"
}, {
  url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3",
  title: "Financial planning"
}, {
  url: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3",
  title: "Mobile banking"
}, {
  url: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=2358&auto=format&fit=crop&ixlib=rb-4.0.3",
  title: "Investment tracking"
}, {
  url: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.0.3",
  title: "Handshake business deal"
}];
const EnhancedHeroSection = () => {
  return <section className="relative overflow-hidden min-h-[90vh] flex items-center py-16 md:py-0">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-fintech-purple/5 via-fintech-blue/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fintech-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-[300px] h-[300px] bg-fintech-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 left-1/2 w-[200px] h-[200px] bg-fintech-orange/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left content */}
          <motion.div className="order-2 lg:order-1 space-y-8" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-fintech-purple/20 to-fintech-blue/20 rounded-full">
              <p className="text-sm font-medium text-gray-700">
                <span className="text-fintech-purple font-bold mr-2">New</span> 
                Special 8.5% interest rate on fixed deposits
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-left xl:text-5xl">
              Build Your{" "}
              <span className="inline-block">
                <TextRotate texts={["Wealth", "Future", "Dreams", "Legacy", "Portfolio", "Security"]} mainClassName="inline-block bg-gradient-to-r from-fintech-purple to-fintech-blue bg-clip-text text-transparent" staggerDuration={0.05} staggerFrom="first" rotationInterval={3000} transition={{
                type: "spring",
                damping: 30,
                stiffness: 400
              }} />
              </span>{" "}
              <br />
              <span className="bg-gradient-to-r from-fintech-orange to-fintech-purple bg-clip-text text-transparent">
                With Confidence
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-lg">
              Experience a new era of financial freedom with our AI-powered platform 
              that simplifies investing, insurance, and loans for every Indian.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-fintech-purple to-fintech-blue hover:opacity-90 text-white font-medium px-8 py-6 rounded-full shadow-lg shadow-fintech-purple/20">
                Start Investing
              </Button>
              <Button variant="outline" size="lg" className="group border-fintech-purple text-fintech-purple hover:bg-fintech-purple/10 transition-colors px-8 py-6 rounded-full">
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            {/* Credentials */}
            <div className="pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-4">Trusted by investors across India</p>
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-3xl font-bold gradient-text">SEBI</p>
                    <p className="text-xs text-gray-600">Registered</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-3xl font-bold gradient-text">256-bit</p>
                    <p className="text-xs text-gray-600">Encryption</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-3xl font-bold gradient-text">₹10Cr+</p>
                    <p className="text-xs text-gray-600">Insurance Cover</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right content - Interactive showcase */}
          <div className="order-1 lg:order-2 h-[450px] md:h-[550px] relative">
            <div className="absolute inset-0">
              <Floating sensitivity={-0.5} className="w-full h-full py-[100px]">
                {/* Main central card */}
                <FloatingElement depth={0.2} className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div initial={{
                  opacity: 0,
                  scale: 0.9
                }} animate={{
                  opacity: 1,
                  scale: 1
                }} transition={{
                  delay: 0.3,
                  duration: 0.8
                }} className="glass-card p-5 rounded-2xl bg-white/80 backdrop-blur-md shadow-xl border border-white/30 w-[280px] md:w-[320px] my-0 mx-0">
                    <div className="text-center mb-4">
                      <h3 className="font-bold text-lg text-gray-800">Your Investment Dashboard</h3>
                    </div>
                    <div className="bg-gradient-to-br from-fintech-purple/80 to-fintech-blue/80 p-4 rounded-xl text-white mb-4">
                      <div className="flex justify-between items-center">
                        <p>Portfolio Value</p>
                        <p className="font-bold text-xl">₹5,87,420</p>
                      </div>
                      <div className="mt-2 w-full bg-white/20 h-1.5 rounded-full">
                        <div className="bg-white h-full rounded-full w-[65%]"></div>
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <p>Target: ₹10L</p>
                        <p>58.7% Complete</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium">HDFC Top 100</p>
                            <p className="text-xs text-gray-500">Large Cap</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-green-600">+17.4%</p>
                          <p className="text-xs text-gray-500">₹1.2L</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Axis Small Cap</p>
                            <p className="text-xs text-gray-500">Small Cap</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-green-600">+21.8%</p>
                          <p className="text-xs text-gray-500">₹85K</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100 text-center">
                      <button className="text-fintech-blue font-medium text-sm">View Complete Portfolio →</button>
                    </div>
                  </motion.div>
                </FloatingElement>
                
                {/* Floating images */}
                <FloatingElement depth={1.5} className="top-[10%] left-[5%]">
                  <motion.div className="w-32 h-32 md:w-40 md:h-40 rotate-[-5deg] shadow-xl rounded-xl overflow-hidden" initial={{
                  opacity: 0,
                  x: -50
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: 0.4,
                  duration: 0.8
                }} whileHover={{
                  scale: 1.05
                }}>
                    <img src={financialImages[0].url} alt={financialImages[0].title} className="w-full h-full object-cover" />
                  </motion.div>
                </FloatingElement>
                
                <FloatingElement depth={0.8} className="bottom-[15%] left-[10%]">
                  <motion.div className="w-36 h-28 md:w-44 md:h-36 rotate-[8deg] shadow-xl rounded-xl overflow-hidden" initial={{
                  opacity: 0,
                  x: -50,
                  y: 50
                }} animate={{
                  opacity: 1,
                  x: 0,
                  y: 0
                }} transition={{
                  delay: 0.6,
                  duration: 0.8
                }} whileHover={{
                  scale: 1.05
                }}>
                    <img src={financialImages[1].url} alt={financialImages[1].title} className="w-full h-full object-cover" />
                  </motion.div>
                </FloatingElement>
                
                <FloatingElement depth={1.2} className="top-[5%] right-[10%]">
                  <motion.div className="w-28 h-36 md:w-36 md:h-44 rotate-[12deg] shadow-xl rounded-xl overflow-hidden" initial={{
                  opacity: 0,
                  x: 50
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: 0.5,
                  duration: 0.8
                }} whileHover={{
                  scale: 1.05
                }}>
                    <img src={financialImages[2].url} alt={financialImages[2].title} className="w-full h-full object-cover" />
                  </motion.div>
                </FloatingElement>
                
                <FloatingElement depth={0.9} className="bottom-[10%] right-[5%]">
                  <motion.div className="w-32 h-40 md:w-40 md:h-48 rotate-[-10deg] shadow-xl rounded-xl overflow-hidden" initial={{
                  opacity: 0,
                  x: 50,
                  y: 50
                }} animate={{
                  opacity: 1,
                  x: 0,
                  y: 0
                }} transition={{
                  delay: 0.7,
                  duration: 0.8
                }} whileHover={{
                  scale: 1.05
                }}>
                    <img src={financialImages[3].url} alt={financialImages[3].title} className="w-full h-full object-cover" />
                  </motion.div>
                </FloatingElement>
                
                {/* Floating stats cards */}
                <FloatingElement depth={1.7} className="top-[30%] right-[25%]">
                  <motion.div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-100" initial={{
                  opacity: 0,
                  scale: 0.8
                }} animate={{
                  opacity: 1,
                  scale: 1
                }} transition={{
                  delay: 0.9,
                  duration: 0.8
                }} whileHover={{
                  scale: 1.05
                }}>
                    <p className="text-xs text-gray-500">Annual Returns</p>
                    <p className="font-bold text-green-600 text-lg">+18.7%</p>
                  </motion.div>
                </FloatingElement>
                
                <FloatingElement depth={1.3} className="bottom-[35%] left-[25%]">
                  <motion.div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-100" initial={{
                  opacity: 0,
                  scale: 0.8
                }} animate={{
                  opacity: 1,
                  scale: 1
                }} transition={{
                  delay: 1.0,
                  duration: 0.8
                }} whileHover={{
                  scale: 1.05
                }}>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-fintech-orange to-fintech-purple flex items-center justify-center text-white text-xs font-bold">₹</div>
                      <p className="font-bold text-sm">Instant Loans</p>
                    </div>
                  </motion.div>
                </FloatingElement>
              </Floating>
            </div>
          </div>
        </div>
        
        {/* Stats bar */}
        <motion.div className="mt-8 md:mt-12 grid grid-cols-3 gap-4 max-w-4xl mx-auto" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 1.0
      }}>
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-fintech-purple/10 to-fintech-blue/10">
            <p className="text-3xl font-bold gradient-text">₹500Cr+</p>
            <p className="text-gray-600 text-sm">Assets Managed</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-fintech-blue/10 to-fintech-ocean-blue/10">
            <p className="text-3xl font-bold gradient-text">50K+</p>
            <p className="text-gray-600 text-sm">Happy Clients</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-fintech-orange/10 to-fintech-purple/10">
            <p className="text-3xl font-bold gradient-text">15+</p>
            <p className="text-gray-600 text-sm">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default EnhancedHeroSection;
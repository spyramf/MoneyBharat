
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
  return (
    <section className="relative overflow-hidden min-h-[100vh] flex items-center py-16 md:py-0">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-fintech-purple/5 via-fintech-blue/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fintech-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-[300px] h-[300px] bg-fintech-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 left-1/2 w-[200px] h-[200px] bg-fintech-orange/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <motion.div 
            className="flex flex-col items-center text-center space-y-6" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-fintech-purple/20 to-fintech-blue/20 rounded-full">
              <p className="text-sm font-medium text-gray-700">
                <span className="text-fintech-purple font-bold mr-2">New</span> 
                Special 8.5% interest rate on fixed deposits
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center">
              Build Your{" "}
              <span className="inline-block">
                <TextRotate 
                  texts={["Wealth", "Future", "Dreams", "Legacy", "Portfolio", "Security"]} 
                  mainClassName="inline-block bg-gradient-to-r from-fintech-purple to-fintech-blue bg-clip-text text-transparent"
                  staggerDuration={0.05} 
                  staggerFrom="first" 
                  rotationInterval={3000} 
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                />
              </span>{" "}
              <br />
              <span className="bg-gradient-to-r from-fintech-orange to-fintech-purple bg-clip-text text-transparent">
                With Confidence
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
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
          </motion.div>
        </div>
        
        {/* Interactive showcase - Investment box with surrounding images */}
        <div className="relative h-[500px] md:h-[600px] max-w-5xl mx-auto my-8">
          <Floating sensitivity={-0.5} className="w-full h-full">
            {/* Central investment box */}
            <FloatingElement depth={0.1} className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.3, duration: 0.8 }}
                className="glass-card p-5 rounded-2xl bg-white/90 backdrop-blur-md shadow-xl border border-white/30 w-[280px] md:w-[320px]"
              >
                <div className="text-left mb-4">
                  <h3 className="font-bold text-xl text-gray-800">Your Investment</h3>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500/90 to-blue-600/90 p-4 rounded-xl text-white mb-4">
                  <div>
                    <p className="text-white/80 text-sm">Portfolio Value</p>
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-xl">₹5,87,420</p>
                      <span className="bg-white/20 text-xs px-2 py-1 rounded-full">+18.7%</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-white/80 text-sm">Target: ₹10L</p>
                  </div>
                  <div className="mt-1 w-full bg-white/20 h-1.5 rounded-full">
                    <div className="bg-white h-full rounded-full w-[58.7%]"></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2.5 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                        <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                  
                  <div className="flex justify-between items-center p-2.5 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                        <svg className="w-4 h-4 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                  <button className="text-blue-500 font-medium text-sm flex items-center justify-center w-full">
                    View Complete Portfolio 
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            </FloatingElement>
            
            {/* Top image */}
            <FloatingElement depth={1.2} className="top-[5%] left-1/2 transform -translate-x-1/2">
              <motion.div 
                className="w-36 h-28 md:w-44 md:h-36 rotate-[-8deg] shadow-xl rounded-xl overflow-hidden" 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.5, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={financialImages[0].url} 
                  alt={financialImages[0].title} 
                  className="w-full h-full object-cover" 
                />
              </motion.div>
            </FloatingElement>
            
            {/* Left image */}
            <FloatingElement depth={1.4} className="top-1/2 left-[5%] transform -translate-y-1/2">
              <motion.div 
                className="w-32 h-40 md:w-40 md:h-48 rotate-[10deg] shadow-xl rounded-xl overflow-hidden" 
                initial={{ opacity: 0, x: -50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: 0.7, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={financialImages[1].url} 
                  alt={financialImages[1].title} 
                  className="w-full h-full object-cover" 
                />
              </motion.div>
            </FloatingElement>
            
            {/* Right image */}
            <FloatingElement depth={1.3} className="top-1/2 right-[5%] transform -translate-y-1/2">
              <motion.div 
                className="w-32 h-40 md:w-40 md:h-48 rotate-[-12deg] shadow-xl rounded-xl overflow-hidden" 
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={financialImages[2].url} 
                  alt={financialImages[2].title} 
                  className="w-full h-full object-cover" 
                />
              </motion.div>
            </FloatingElement>
            
            {/* Bottom image */}
            <FloatingElement depth={1.5} className="bottom-[5%] left-1/2 transform -translate-x-1/2">
              <motion.div 
                className="w-36 h-28 md:w-44 md:h-36 rotate-[5deg] shadow-xl rounded-xl overflow-hidden" 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.8, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={financialImages[3].url} 
                  alt={financialImages[3].title} 
                  className="w-full h-full object-cover" 
                />
              </motion.div>
            </FloatingElement>
            
            {/* Floating stats card */}
            <FloatingElement depth={1.7} className="top-[25%] right-[25%]">
              <motion.div 
                className="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-100" 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.9, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-xs text-gray-500">Annual Returns</p>
                <p className="font-bold text-green-600 text-lg">+18.7%</p>
              </motion.div>
            </FloatingElement>
          </Floating>
        </div>
        
        {/* Stats bar */}
        <motion.div 
          className="mt-8 md:mt-12 grid grid-cols-3 gap-4 max-w-4xl mx-auto" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 1.0 }}
        >
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
    </section>
  );
};

export default EnhancedHeroSection;

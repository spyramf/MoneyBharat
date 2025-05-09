
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TextRotate } from "@/components/ui/text-rotate";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";

const financialImages = [
  {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Financial charts and graphs",
  },
  {
    url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Financial planning",
  },
  {
    url: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Mobile banking",
  },
  {
    url: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=2358&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Investment tracking",
  },
  {
    url: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.0.3",
    title: "Handshake business deal",
  },
];

const EnhancedHeroSection = () => {
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
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Modern Financial{" "}
              <TextRotate
                texts={[
                  "Solutions",
                  "Services",
                  "Planning",
                  "Freedom",
                  "Security",
                  "Growth"
                ]}
                mainClassName="inline-block gradient-text"
                staggerDuration={0.05}
                staggerFrom="first"
                rotationInterval={3000}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />{" "}
              for Today's India
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-700 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Simplifying wealth creation through technology-driven mutual funds, insurance, and loan products tailored for you.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button className="bg-gradient-to-r from-fintech-purple to-fintech-blue hover:opacity-90 text-white font-medium px-8 py-6">
                Explore Services
              </Button>
              <Button variant="outline" className="group border-fintech-purple text-fintech-purple hover:text-fintech-blue transition-colors px-8 py-6">
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
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
            </motion.div>
          </div>
          
          {/* Right image/illustration with floating elements */}
          <div className="w-full md:w-1/2">
            <div className="relative h-[400px] md:h-[450px]">
              <Floating sensitivity={-0.5} className="h-full">
                <FloatingElement
                  depth={0.5}
                  className="top-[15%] left-[2%] md:top-[25%] md:left-[5%]"
                >
                  <motion.div
                    className="w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24 -rotate-[3deg] shadow-2xl rounded-xl overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={financialImages[0].url}
                      alt={financialImages[0].title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </FloatingElement>

                <FloatingElement
                  depth={1}
                  className="top-[0%] left-[35%] md:top-[6%] md:left-[35%]"
                >
                  <motion.div
                    className="w-40 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-60 lg:h-48 -rotate-12 shadow-2xl rounded-xl overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={financialImages[1].url}
                      alt={financialImages[1].title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </FloatingElement>

                {/* Main image */}
                <FloatingElement
                  depth={0.2}
                  className="top-[25%] left-[20%] md:top-[20%] md:left-[25%]"
                >
                  <div className="glass-card p-6 max-w-md mx-auto animate-float">
                    <div className="aspect-[4/3] bg-gradient-to-br from-fintech-purple/80 to-fintech-blue/80 rounded-lg flex items-center justify-center">
                      <img
                        src="public/lovable-uploads/44003d16-22e1-41e4-962e-2ac9b1e0a394.png"
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
                </FloatingElement>

                <FloatingElement
                  depth={2}
                  className="bottom-[5%] right-[5%] md:bottom-[10%] md:right-[10%]"
                >
                  <motion.div
                    className="w-40 h-36 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-64 lg:h-56 rotate-[6deg] shadow-2xl rounded-xl overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={financialImages[3].url}
                      alt={financialImages[3].title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </FloatingElement>

                <FloatingElement
                  depth={1.5}
                  className="bottom-[20%] left-[5%] md:bottom-[15%] md:left-[5%]"
                >
                  <motion.div
                    className="w-44 h-40 sm:w-48 sm:h-44 md:w-52 md:h-48 lg:w-56 lg:h-52 rotate-[4deg] shadow-2xl rounded-xl overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={financialImages[4].url}
                      alt={financialImages[4].title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </FloatingElement>
              </Floating>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHeroSection;

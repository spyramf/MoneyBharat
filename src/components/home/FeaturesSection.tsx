
import { motion } from "framer-motion";
import { BadgeDollarSign, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section 
      className="py-16 bg-gray-50 md:py-[60px]" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, amount: 0.2 }} 
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Image */}
          <motion.div className="w-full md:w-1/2" variants={itemVariants}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-fintech-purple/10 rounded-full blur-3xl -z-10"></div>
              <div className="glass-card p-8 rounded-xl max-w-lg mx-auto">
                <div className="bg-gradient-to-br from-fintech-green/80 to-fintech-orange/80 rounded-lg p-4 mb-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">Wealth Dashboard</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <p className="text-xs opacity-80">Total Investments</p>
                      <p className="text-xl font-bold">₹24.6L</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-lg">
                      <p className="text-xs opacity-80">Total Returns</p>
                      <p className="text-xl font-bold">+18.7%</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <BadgeDollarSign size={20} className="text-fintech-blue" />
                      </div>
                      <div>
                        <p className="font-medium">SBI Blue Chip Fund</p>
                        <p className="text-xs text-gray-500">Large Cap</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-green-600">+21.4%</p>
                      <p className="text-xs text-gray-500">₹5.2L</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <BadgeDollarSign size={20} className="text-fintech-purple" />
                      </div>
                      <div>
                        <p className="font-medium">Axis Mid Cap Fund</p>
                        <p className="text-xs text-gray-500">Mid Cap</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-green-600">+16.8%</p>
                      <p className="text-xs text-gray-500">₹3.8L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Content */}
          <motion.div className="w-full md:w-1/2" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Finance Made <span className="gradient-text">Smart</span> with Technology
            </h2>
            <p className="text-gray-600 mb-8">
              We leverage cutting-edge technology to simplify complex financial decisions, providing transparent, personalized recommendations that help you build wealth.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-fintech-purple to-fintech-blue flex-shrink-0 flex items-center justify-center text-white">
                  <BadgeDollarSign size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">AI-Powered Recommendations</h3>
                  <p className="text-gray-600">
                    Our algorithm analyzes thousands of options to recommend the perfect financial products for your goals.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-fintech-blue to-fintech-ocean-blue flex-shrink-0 flex items-center justify-center text-white">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Paperless Onboarding</h3>
                  <p className="text-gray-600">
                    Complete KYC and start investing or apply for loans in minutes with our secure digital process.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-fintech-orange to-fintech-purple flex-shrink-0 flex items-center justify-center text-white">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Bank-Grade Security</h3>
                  <p className="text-gray-600">
                    Your data and transactions are protected with 256-bit encryption and multiple security layers.
                  </p>
                </div>
              </div>
            </div>
            
<div className="mt-10">
  <Button
    onClick={() => window.location.href = "https://moneybharat.net/NewOnBoarding/SignUp"}
    className="bg-gradient-to-r from-fintech-green to-fintech-green hover:opacity-90 text-white px-8 py-6"
  >
    Start Your Financial Journey
    <ArrowRight className="ml-2 h-4 w-4" />
  </Button>
</div>

          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;


import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Shield, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MutualFundHero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-fintech-blue/5 to-transparent -z-10"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-fintech-green/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-fintech-blue/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Invest in <span className="text-fintech-green">Best Mutual Funds</span> & <span className="text-fintech-blue">SIP Plans</span>
            <br />
            <span className="text-gray-800">Expert Guidance & High Returns</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Start your wealth creation journey with India's most trusted mutual fund platform. 
            Get expert advisory, zero paperwork, and direct plan benefits with Money Bharat Finance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/investor/login">
              <Button className="bg-gradient-to-r from-fintech-green to-fintech-blue hover:opacity-90 text-white px-8 py-4 text-lg">
                Start SIP Investment
                <TrendingUp className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/booking">
              <Button variant="outline" className="border-fintech-green text-fintech-green hover:bg-fintech-green hover:text-white px-8 py-4 text-lg">
                Get Expert Advice
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          {/* Key highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div 
              className="flex items-center justify-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">15%+ Returns</p>
                <p className="text-sm text-gray-600">Average Annual Growth</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">AMFI Registered</p>
                <p className="text-sm text-gray-600">Regulated & Secure</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Calculator className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">₹500 Min SIP</p>
                <p className="text-sm text-gray-600">Start Small, Grow Big</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MutualFundHero;

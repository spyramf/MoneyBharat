import { motion } from "framer-motion";
import { Shield, Heart, Car, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const InsuranceHero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-fintech-blue/5 to-transparent -z-10"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-fintech-purple/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-fintech-blue/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Compare <span className="text-fintech-blue">Health, Life & Vehicle</span>
            <br />
            <span className="text-fintech-purple">Insurance Plans</span> -{" "}
            <span className="text-gray-800">Get Best Rates Online</span>
          </h1>

          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Protect what matters most with comprehensive insurance coverage. Compare plans from top insurers and get
            instant quotes with expert guidance from Money Bharat Finance.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/booking">
              <Button className="bg-gradient-to-r from-fintech-blue to-fintech-purple hover:opacity-90 text-white px-8 py-4 text-lg">
                Get Free Quote
                <Shield className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/booking">
              <Button variant="outline" className="border-fintech-blue text-fintech-blue hover:bg-fintech-blue hover:text-white px-8 py-4 text-lg">
                Compare Plans
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div> */}

          {/* Insurance types highlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              className="flex items-center justify-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Health Insurance</p>
                <p className="text-sm text-gray-600">₹5L+ Coverage Available</p>
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
                <p className="font-semibold text-gray-900">Life Insurance</p>
                <p className="text-sm text-gray-600">₹1Cr+ Term Coverage</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Car className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Vehicle Insurance</p>
                <p className="text-sm text-gray-600">Instant Policy Issuance</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InsuranceHero;

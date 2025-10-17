
import { motion } from "framer-motion";
import { Shield, Umbrella, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const InsuranceSection = () => {
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
      className="py-16 bg-gray-50 md:py-[50px]" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, amount: 0.2 }} 
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center max-w-3xl mx-auto mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Insurance Solutions</h2>
          <p className="text-gray-600">Protect yourself and your loved ones with our range of insurance products</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Life Insurance</CardTitle>
                <CardDescription>Financial security for your family's future</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>High coverage plans at affordable premiums</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Term, endowment, and ULIP options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Additional riders for enhanced protection</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a href="/insurance" className="text-fintech-green hover:text-fintech-green transition-colors font-medium flex items-center">
                  Explore Life Insurance
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </CardFooter>
            </Card>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mb-4">
                  <Umbrella className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Health Insurance</CardTitle>
                <CardDescription>Comprehensive coverage for medical expense</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Family floater and individual plans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Cashless treatment at 10,000+ hospitals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Coverage for pre and post hospitalization</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a href="/insurance" className="text-fintech-green hover:text-fintech-green transition-colors font-medium flex items-center">
                  Explore Health Insurance
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </CardFooter>
            </Card>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full mb-4">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>General Insurance</CardTitle>
                <CardDescription>Protection for your valuable assets</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Motor insurance for cars and two-wheelers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Insurance against natural disasters</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Travel insurance for domestic and international trips</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a href="/insurance" className="text-fintech-green hover:text-fintech-green transition-colors font-medium flex items-center">
                  Explore General Insurance
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
        
        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <Button className="bg-gradient-to-r from-fintech-green to-fintech-green hover:opacity-90 text-white px-8 py-6">
            Get Insurance Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InsuranceSection;

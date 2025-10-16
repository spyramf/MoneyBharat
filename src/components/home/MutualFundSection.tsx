
import { motion } from "framer-motion";
import { PiggyBank, Briefcase, Handshake, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const MutualFundSection = () => {
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
      className="py-16 bg-white md:py-[20px]" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, amount: 0.2 }} 
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center max-w-3xl mx-auto mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mutual Fund Investments</h2>
          <p className="text-gray-600">Grow your wealth with our curated selection of top-performing mutual funds</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                  <PiggyBank className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Equity Funds</CardTitle>
                <CardDescription>Higher returns with market-linked investments</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Diversified portfolios across market caps</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Professionally managed by expert fund managers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Potential for wealth creation over long term</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a href="/mutual-funds" className="text-fintech-green hover:text-fintech-green transition-colors font-medium flex items-center">
                  Explore Equity Funds
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </CardFooter>
            </Card>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mb-4">
                  <Briefcase className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Debt Funds</CardTitle>
                <CardDescription>Stable returns with lower risk investments</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Fixed income securities with regular returns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Lower volatility compared to equity investments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Tax-efficient alternatives to fixed deposits</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a href="/mutual-funds" className="text-fintech-green hover:text-fintech-green transition-colors font-medium flex items-center">
                  Explore Debt Funds
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </CardFooter>
            </Card>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mb-4">
                  <Handshake className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Hybrid Funds</CardTitle>
                <CardDescription>Balanced approach with mixed investments</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Mix of equity and debt for balanced growth</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Automatic asset allocation based on market conditions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Ideal for moderate risk profiles</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a href="/mutual-funds" className="text-fintech-green hover:text-fintech-green transition-colors font-medium flex items-center">
                  Explore Hybrid Funds
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
        
        <motion.div className="mt-12 text-center" variants={itemVariants}>
<Button
  onClick={() => window.location.href = "https://client.moneybharat.co/NewOnBoarding/SignUp"}
  className="bg-gradient-to-r from-fintech-green to-fintech-green hover:opacity-90 text-white px-8 py-6 rounded-sm"
>
  Start Investing Now
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MutualFundSection;

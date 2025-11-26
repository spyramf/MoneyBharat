import { motion } from "framer-motion";
import { CreditCard, BadgeDollarSign, Wallet, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const LoanSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      className="py-16 md:py-24 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center max-w-3xl mx-auto mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loan Solutions</h2>
          <p className="text-muted-foreground">Fast and hassle-free loans with competitive interest rates</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-destructive/10 rounded-full mb-4">
                  <CreditCard className="h-6 w-6 text-destructive" />
                </div>
                <CardTitle>Personal Loans</CardTitle>
                <CardDescription>Quick funds for your personal needs</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Loans up to ₹25 lakhs with minimal documentation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Instant approval with digital verification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Flexible repayment options up to 5 yr</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a
                  href="/loans"
                  className="text-primary hover:text-primary transition-colors font-medium flex items-center"
                >
                  Explore for Personal Loan
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-secondary rounded-full mb-4">
                  <BadgeDollarSign className="h-6 w-6 text-secondary-foreground" />
                </div>
                <CardTitle>Home Loans</CardTitle>
                <CardDescription>Realize your dream of owning a home</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Competitive interest rates starting at 8.5%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>High loan amount with up to 90% financing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Long tenure loans up to 30 years</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a
                  href="/loans/home"
                  className="text-primary hover:text-primary transition-colors font-medium flex items-center"
                >
                  Explore for Home Loan
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                  <Wallet className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Business Loans</CardTitle>
                <CardDescription>Fund your business growth and expansion</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Unsecured loans up to ₹50 lakhs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Special schemes for startups and MSMEs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>Working capital and equipment financing options</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a
                  href="/loans/business"
                  className="text-primary hover:text-primary transition-colors font-medium flex items-center"
                >
                  Explore for Business Loan
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        </div>

        {/* <motion.div className="mt-12 text-center" variants={itemVariants}>
          <Button className="bg-gradient-to-r from-fintech-green to-fintech-green hover:opacity-90 text-white px-8 py-6">
            Check Loan Eligibility
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div> */}
      </div>
    </motion.section>
  );
};

export default LoanSection;

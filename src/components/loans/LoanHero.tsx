import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface LoanHeroProps {
  title: string;
  subtitle: string;
  gradientFrom: string;
  gradientTo: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  className?: string;
}

const LoanHero = ({
  title,
  subtitle,
  gradientFrom,
  gradientTo,
  primaryButtonText = "Book Now",
  secondaryButtonText = "Check Eligibility",
  className = "",
}: LoanHeroProps) => {
  // Create SEO-optimized H1 based on loan type
  const getOptimizedH1 = (title: string) => {
    const loanTypeMap: { [key: string]: string } = {
      "Personal Loan": "Get Instant Personal Loan Online - Quick Approval & Low Interest Rates",
      "Home Loan": "Home Loan with Lowest Interest Rates - Fast Approval & Easy EMI",
      "Car Loan": "Car Loan at Best Interest Rates - Quick Processing & Flexible EMI",
      "Business Loan": "Business Loan for Growth - Instant Approval & Competitive Rates",
      "Education Loan": "Education Loan for Your Dreams - Low Interest & Easy Repayment",
    };

    return loanTypeMap[title] || `${title} - Quick Approval & Best Interest Rates`;
  };

  return (
    <section
      className={`relative overflow-hidden pt-24 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 ${className}`}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-fintech-purple/5 to-transparent -z-10"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-fintech-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-fintech-purple/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">{getOptimizedH1(title)}</h1>

          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/booking">
              <Button
                className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} hover:opacity-90 text-white px-8 py-4 text-lg`}
              >
                {primaryButtonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            {/* <Link to="/booking">
              <Button variant="outline" className="border-fintech-purple text-fintech-purple hover:bg-fintech-purple hover:text-white px-8 py-4 text-lg">
                {secondaryButtonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoanHero;

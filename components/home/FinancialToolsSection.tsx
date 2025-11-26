
import { motion } from "framer-motion";
import { Calculator, Search } from "lucide-react";
import FinancialToolCard from "@/components/FinancialToolCard";

const FinancialToolsSection = () => {
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
      className="py-16 bg-muted/50 md:py-[50px]" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, amount: 0.2 }} 
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center max-w-3xl mx-auto mb-12" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Money Bharat Financial Tools</h2>
          <p className="text-muted-foreground">Calculate, plan and optimize your finances with our expert tools</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div variants={itemVariants}>
            <FinancialToolCard 
              icon={<Calculator className="text-secondary-foreground" />} 
              title="SIP Calculator" 
              description="Calculate your potential returns from systematic investments" 
              bgColor="bg-secondary" 
              linkText="Use Calculator" 
              linkHref="/calculators/sip" 
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <FinancialToolCard 
              icon={<Calculator className="text-primary" />} 
              title="Loan EMI Calculator" 
              description="Plan your loan repayments with our easy EMI calculator" 
              bgColor="bg-primary/5" 
              linkText="Use Calculator" 
              linkHref="/calculators/emi" 
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <FinancialToolCard 
              icon={<Search className="text-accent-foreground" />} 
              title="Tax Saving Tools" 
              description="Find the best tax saving investment options" 
              bgColor="bg-accent" 
              linkText="Use Calculator" 
              linkHref="/tax-saving"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FinancialToolsSection;

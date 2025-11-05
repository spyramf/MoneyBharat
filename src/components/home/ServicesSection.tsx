
import { motion } from "framer-motion";
import { PiggyBank, Shield, Wallet } from "lucide-react";
import ProductCard from "@/components/ProductCard";

const ServicesSection = () => {
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
      className="py-16 md:py-[20px]" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, amount: 0.2 }} 
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center max-w-2xl mx-auto mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Financial Services for <span className="gradient-text">Every Need</span>
          </h2>
          <p className="text-gray-600">
            Our tech-powered platform offers tailored financial solutions to help you achieve your goals and secure your future.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants}>
            <ProductCard 
              title="Mutual Funds" 
              icon={<PiggyBank size={28} />} 
              description="Tech-driven investments with expert portfolio management for optimal returns." 
              features={[
                "Expert-guided investment plans",
                "Personalized portfolio recommendations", 
                "Real-time performance tracking",
                "Automatic SIP management"
              ]} 
              linkText="Explore Mutual Funds" 
              linkHref="/mutual-funds" 
              gradient="bg-gradient-to-r from-fintech-purple to-fintech-blue" 
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ProductCard 
              title="Insurance" 
              icon={<Shield size={28} />} 
              description="Comprehensive coverage options that protect what matters most to you." 
              features={[
                "Digital policy management",
                "AI-powered plan recommendations",
                "Paperless claims processing",
                "Family coverage options"
              ]} 
              linkText="Explore Insurance Plans" 
              linkHref="/insurance" 
              gradient="bg-gradient-to-r from-fintech-blue to-fintech-ocean-blue" 
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ProductCard 
              title="Loans" 
              icon={<Wallet size={28} />} 
              description="Quick, hassle-free loans with competitive rates and flexible terms." 
              features={[
                "Instant eligibility check",
                "Paperless digital process",
                "Competitive interest rates",
                "Flexible repayment options"
              ]} 
              linkText="Explore Loan Options" 
              linkHref="/loans" 
              gradient="bg-gradient-to-r from-fintech-orange to-fintech-purple" 
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;

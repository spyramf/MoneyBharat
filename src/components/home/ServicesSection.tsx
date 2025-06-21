
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
            Money Bharat's Comprehensive Financial Services for <span className="gradient-text">Every Indian</span>
          </h2>
          <p className="text-gray-600">
            Our award-winning platform offers tailored financial solutions to help you achieve your goals and secure your future.
            From zero-commission investments to comprehensive insurance coverage, Money Bharat Finance is your trusted partner.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants}>
            <ProductCard 
              title="Best Mutual Funds in India" 
              icon={<PiggyBank size={28} />} 
              description="Zero-commission direct mutual fund plans with AI-powered portfolio management for optimal returns. Start your SIP journey with Money Bharat Finance." 
              features={[
                "Zero commission direct plans",
                "AI-powered portfolio recommendations", 
                "Real-time performance tracking",
                "Automatic SIP management",
                "Tax-saving ELSS funds"
              ]} 
              linkText="Explore Mutual Funds" 
              linkHref="/mutual-funds" 
              gradient="bg-gradient-to-r from-fintech-purple to-fintech-blue" 
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ProductCard 
              title="Comprehensive Insurance Plans" 
              icon={<Shield size={28} />} 
              description="Complete insurance coverage including health, life, and general insurance that protects what matters most to you and your family." 
              features={[
                "Health & life insurance policies",
                "AI-powered plan recommendations",
                "Paperless claims processing",
                "Family floater options",
                "Cashless hospital network"
              ]} 
              linkText="Explore Insurance Plans" 
              linkHref="/insurance" 
              gradient="bg-gradient-to-r from-fintech-blue to-fintech-ocean-blue" 
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ProductCard 
              title="Quick & Easy Loans" 
              icon={<Wallet size={28} />} 
              description="Instant loan approvals with competitive rates and flexible terms. Personal, home, and business loans with minimal documentation." 
              features={[
                "Instant eligibility check",
                "100% paperless digital process",
                "Competitive interest rates",
                "Flexible repayment options",
                "Same-day loan disbursement"
              ]} 
              linkText="Explore Loan Options" 
              linkHref="/loans" 
              gradient="bg-gradient-to-r from-fintech-orange to-fintech-purple" 
            />
          </motion.div>
        </div>
        
        {/* Additional internal linking section */}
        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <h3 className="text-xl font-semibold mb-4">Popular Money Bharat Finance Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/tools/sip-calculator" className="bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-fintech-green hover:text-white transition-colors">
              SIP Calculator
            </a>
            <a href="/health-insurance" className="bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-fintech-green hover:text-white transition-colors">
              Health Insurance
            </a>
            <a href="/loans/personal" className="bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-fintech-green hover:text-white transition-colors">
              Personal Loans
            </a>
            <a href="/tools/emi-calculator" className="bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-fintech-green hover:text-white transition-colors">
              EMI Calculator
            </a>
            <a href="/blog/top-7-personal-finance-tips-india" className="bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-fintech-green hover:text-white transition-colors">
              Finance Tips
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;

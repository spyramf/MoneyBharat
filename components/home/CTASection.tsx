
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
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
      className="py-16 md:py-24 bg-gradient-to-r from-fintech-green to-fintech-orange text-white" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, amount: 0.2 }} 
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center max-w-2xl mx-auto" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="mb-8 opacity-80 text-lg">
            Join thousands of satisfied clients who have taken control of their finances with Money Bharat's innovative solutions.
          </p>
<Button
  onClick={() => window.location.href = "https://client.moneybharat.co/NewOnBoarding/SignUp"}
  className="bg-white hover:bg-gray-100 px-8 py-6 text-lg text-fintech-green"
>
  Get Started Now
  <ArrowRight className="ml-2 h-5 w-5" />
</Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTASection;

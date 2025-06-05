
import { motion } from "framer-motion";
import TestimonialCard from "@/components/TestimonialCard";

const TestimonialsSection = () => {
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
            Trusted by <span className="gradient-text">Thousands</span> Across India
          </h2>
          <p className="text-gray-600">
            Don't just take our word for it - see what our clients have to say about Money Bharat.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants}>
            <TestimonialCard 
              quote="Money Bharat's mutual fund recommendations helped me achieve 18% returns in just one year. Their technology makes investing so simple." 
              name="Rajesh Sharma" 
              title="IT Professional, Bengaluru" 
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <TestimonialCard 
              quote="I was struggling to find the right insurance for my family. Money Bharat's experts guided me to a comprehensive plan that saved us 30% on premiums." 
              name="Priya Mehta" 
              title="Business Owner, Mumbai" 
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <TestimonialCard 
              quote="Getting a home loan through Money Bharat was incredibly fast and easy. Their digital process saved me countless hours of paperwork." 
              name="Vikram Singh" 
              title="Engineer, Pune" 
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;

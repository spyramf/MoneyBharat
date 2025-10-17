import { motion } from "framer-motion";
import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-columns-1";

const testimonials: Testimonial[] = [
  {
    text: "Money Bharat's mutual fund recommendations helped me achieve 18% returns in just one year. Their technology makes investing so simple.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    name: "Rajesh Sharma",
    role: "IT Professional, Bengaluru",
  },
  {
    text: "I was struggling to find the right insurance for my family. Money Bharat's experts guided me to a comprehensive plan that saved us 30% on premiums.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    name: "Priya Mehta",
    role: "Business Owner, Mumbai",
  },
  {
    text: "Getting a home loan through Money Bharat was incredibly fast and easy. Their digital process saved me countless hours of paperwork.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    name: "Vikram Singh",
    role: "Engineer, Pune",
  },
  {
    text: "The SIP calculator helped me plan my retirement goals perfectly. I'm now investing ₹10,000 monthly with confidence in my future.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces",
    name: "Amit Patel",
    role: "Marketing Manager, Ahmedabad",
  },
  {
    text: "Best term insurance comparison platform I've used. Money Bharat helped me secure my family's future with the perfect policy at great rates.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
    name: "Sneha Kapoor",
    role: "Teacher, Delhi",
  },
  {
    text: "Their health insurance advisory saved me from making costly mistakes. Got comprehensive coverage for my parents at reasonable premiums.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
    name: "Arjun Reddy",
    role: "Software Developer, Hyderabad",
  },
  {
    text: "Money Bharat made my car loan process seamless. Competitive rates, quick approval, and transparent terms. Highly recommended!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces",
    name: "Kavita Iyer",
    role: "HR Executive, Chennai",
  },
  {
    text: "The financial planning tools are excellent. I've organized my investments, insurance, and loans all in one place. Game changer!",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=faces",
    name: "Nikhil Gupta",
    role: "Entrepreneur, Jaipur",
  },
  {
    text: "Tax-saving mutual funds recommended by Money Bharat helped me optimize my returns while reducing tax liability. Smart investing made easy!",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=faces",
    name: "Deepika Nair",
    role: "Chartered Accountant, Kochi",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsSection = () => {
  return (
    <section className="bg-background my-20 py-16 relative">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-primary/30 py-1 px-4 rounded-lg bg-primary/5">
              <span className="text-primary font-medium">Testimonials</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mt-5 text-center">
            Trusted by <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Thousands</span> Across India
          </h2>
          <p className="text-center mt-5 text-muted-foreground">
            Don't just take our word for it - see what our clients have to say about Money Bharat.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

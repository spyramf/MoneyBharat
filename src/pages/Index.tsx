
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import EnhancedHeroSection from '@/components/EnhancedHeroSection';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard';
import FinancialToolCard from '@/components/FinancialToolCard';
import { TrendingUp, Shield, CreditCard, Calculator, Target, ShieldCheck } from 'lucide-react';

const Index = () => {
  const products = [
    {
      title: "Mutual Funds",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Grow your wealth with our expertly managed mutual fund portfolios",
      features: ["SIP Planning", "Goal-based Investing", "Expert Advisory"],
      linkText: "Explore Mutual Funds",
      linkHref: "/mutual-funds",
      gradient: "bg-gradient-to-r from-blue-500 to-blue-600"
    },
    {
      title: "Insurance",
      icon: <Shield className="w-6 h-6" />,
      description: "Comprehensive insurance solutions for life, health, and assets",
      features: ["Life Insurance", "Health Coverage", "Asset Protection"],
      linkText: "View Insurance Plans",
      linkHref: "/insurance",
      gradient: "bg-gradient-to-r from-green-500 to-green-600"
    },
    {
      title: "Personal Loans",
      icon: <CreditCard className="w-6 h-6" />,
      description: "Quick and easy personal loans with competitive interest rates",
      features: ["Instant Approval", "Low Interest", "Flexible Tenure"],
      linkText: "Apply for Loan",
      linkHref: "/loans/personal",
      gradient: "bg-gradient-to-r from-purple-500 to-purple-600"
    }
  ];

  const testimonials = [
    {
      quote: "Money Bharat helped me achieve my financial goals with their expert guidance.",
      name: "Priya Sharma",
      title: "Software Engineer"
    },
    {
      quote: "Excellent service and support. Highly recommended for financial planning.",
      name: "Rajesh Kumar", 
      title: "Business Owner"
    },
    {
      quote: "Professional team and great investment advice. Very satisfied with results.",
      name: "Anita Singh",
      title: "Doctor"
    }
  ];

  const tools = [
    {
      title: "SIP Calculator",
      description: "Calculate your SIP returns",
      icon: <Calculator className="w-8 h-8" />,
      bgColor: "bg-blue-50",
      linkText: "Calculate Now",
      linkHref: "/sip-calculator"
    },
    {
      title: "Goal Planner",
      description: "Plan your financial goals",
      icon: <Target className="w-8 h-8" />,
      bgColor: "bg-green-50",
      linkText: "Plan Goals",
      linkHref: "/goal-planner"
    },
    {
      title: "Risk Profiler",
      description: "Assess your risk appetite",
      icon: <ShieldCheck className="w-8 h-8" />,
      bgColor: "bg-purple-50",
      linkText: "Assess Risk",
      linkHref: "/risk-profiler"
    }
  ];

  return (
    <PageLayout>
      <EnhancedHeroSection />
      
      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                icon={product.icon}
                description={product.description}
                features={product.features}
                linkText={product.linkText}
                linkHref={product.linkHref}
                gradient={product.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Financial Tools */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Financial Tools</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <FinancialToolCard
                key={index}
                title={tool.title}
                description={tool.description}
                icon={tool.icon}
                bgColor={tool.bgColor}
                linkText={tool.linkText}
                linkHref={tool.linkHref}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
              />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;


import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import EnhancedHeroSection from '@/components/EnhancedHeroSection';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard';
import FinancialToolCard from '@/components/FinancialToolCard';

const Index = () => {
  const products = [
    {
      title: "Mutual Funds",
      description: "Grow your wealth with our expertly managed mutual fund portfolios",
      features: ["SIP Planning", "Goal-based Investing", "Expert Advisory"],
    },
    {
      title: "Insurance",
      description: "Comprehensive insurance solutions for life, health, and assets",
      features: ["Life Insurance", "Health Coverage", "Asset Protection"],
    },
    {
      title: "Personal Loans",
      description: "Quick and easy personal loans with competitive interest rates",
      features: ["Instant Approval", "Low Interest", "Flexible Tenure"],
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      content: "Money Bharat helped me achieve my financial goals with their expert guidance.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      content: "Excellent service and support. Highly recommended for financial planning.",
      rating: 5
    },
    {
      name: "Anita Singh",
      content: "Professional team and great investment advice. Very satisfied with results.",
      rating: 5
    }
  ];

  const tools = [
    {
      title: "SIP Calculator",
      description: "Calculate your SIP returns",
      icon: "calculator"
    },
    {
      title: "Goal Planner",
      description: "Plan your financial goals",
      icon: "target"
    },
    {
      title: "Risk Profiler",
      description: "Assess your risk appetite",
      icon: "shield"
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
                description={product.description}
                features={product.features}
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
                name={testimonial.name}
                content={testimonial.content}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import EnhancedHeroSection from '@/components/EnhancedHeroSection';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard';
import { APP_CONFIG } from '@/utils/constants';

const Index = () => {
  return (
    <PageLayout>
      <EnhancedHeroSection />
      
      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Financial Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of financial solutions designed to help you achieve your goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              title="Mutual Funds"
              description="Build wealth with professionally managed mutual fund portfolios"
              image="/lovable-uploads/91d78f6e-991f-4f65-883d-f9962eb33219.png"
              features={["Expert Management", "Diversified Portfolio", "Tax Benefits"]}
            />
            <ProductCard
              title="Insurance"
              description="Protect your family and assets with comprehensive insurance coverage"
              image="/lovable-uploads/92affb7c-7e35-42da-9aff-b0f55a689428.png"
              features={["Life Insurance", "Health Coverage", "Asset Protection"]}
            />
            <ProductCard
              title="Fixed Deposits"
              description="Secure your money with guaranteed returns through fixed deposits"
              image="/lovable-uploads/44003d16-22e1-41e4-962e-2ac9b1e0a394.png"
              features={["Guaranteed Returns", "Flexible Tenure", "Safe Investment"]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">Hear from our satisfied customers about their experience with {APP_CONFIG.name}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Rajesh Kumar"
              role="Business Owner"
              content="Money Bharat helped me diversify my investment portfolio and achieve better returns than I ever thought possible."
              rating={5}
            />
            <TestimonialCard
              name="Priya Sharma"
              role="Software Engineer"
              content="The team's expertise in financial planning helped me secure my family's future with the right insurance policies."
              rating={5}
            />
            <TestimonialCard
              name="Amit Patel"
              role="Doctor"
              content="Their mutual fund recommendations have consistently outperformed my expectations. Highly recommended!"
              rating={5}
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;

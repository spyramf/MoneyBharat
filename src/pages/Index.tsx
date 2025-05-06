
import { 
  BadgeDollarSign, 
  Shield, 
  PiggyBank, 
  Wallet, 
  ArrowRight, 
  CheckCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Financial Services for <span className="gradient-text">Every Need</span>
            </h2>
            <p className="text-gray-600">
              Our tech-powered platform offers tailored financial solutions to help you achieve your goals and secure your future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard 
              title="Mutual Funds"
              icon={<PiggyBank size={28} />}
              description="Tech-driven investments with expert portfolio management for optimal returns."
              features={[
                "Zero commission direct plans",
                "Personalized portfolio recommendations",
                "Real-time performance tracking",
                "Automatic SIP management"
              ]}
              linkText="Explore Mutual Funds"
              linkHref="#mutual-funds"
              gradient="bg-gradient-to-r from-fintech-purple to-fintech-blue"
            />
            
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
              linkHref="#insurance"
              gradient="bg-gradient-to-r from-fintech-blue to-fintech-ocean-blue"
            />
            
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
              linkHref="#loans"
              gradient="bg-gradient-to-r from-fintech-orange to-fintech-purple"
            />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Image */}
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-fintech-purple/10 rounded-full blur-3xl -z-10"></div>
                <div className="glass-card p-8 rounded-xl max-w-lg mx-auto">
                  <div className="bg-gradient-to-br from-fintech-purple/80 to-fintech-blue/80 rounded-lg p-4 mb-6 text-white">
                    <h3 className="text-lg font-semibold mb-2">Wealth Dashboard</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/20 p-3 rounded-lg">
                        <p className="text-xs opacity-80">Total Investments</p>
                        <p className="text-xl font-bold">₹24.6L</p>
                      </div>
                      <div className="bg-white/20 p-3 rounded-lg">
                        <p className="text-xs opacity-80">Total Returns</p>
                        <p className="text-xl font-bold">+18.7%</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <PiggyBank size={20} className="text-fintech-blue" />
                        </div>
                        <div>
                          <p className="font-medium">SBI Blue Chip Fund</p>
                          <p className="text-xs text-gray-500">Large Cap</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">+21.4%</p>
                        <p className="text-xs text-gray-500">₹5.2L</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <PiggyBank size={20} className="text-fintech-purple" />
                        </div>
                        <div>
                          <p className="font-medium">Axis Mid Cap Fund</p>
                          <p className="text-xs text-gray-500">Mid Cap</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">+16.8%</p>
                        <p className="text-xs text-gray-500">₹3.8L</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Finance Made <span className="gradient-text">Smart</span> with Technology
              </h2>
              <p className="text-gray-600 mb-8">
                We leverage cutting-edge technology to simplify complex financial decisions, providing transparent, personalized recommendations that help you build wealth.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-fintech-purple to-fintech-blue flex-shrink-0 flex items-center justify-center text-white">
                    <BadgeDollarSign size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">AI-Powered Recommendations</h3>
                    <p className="text-gray-600">
                      Our algorithm analyzes thousands of options to recommend the perfect financial products for your goals.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-fintech-blue to-fintech-ocean-blue flex-shrink-0 flex items-center justify-center text-white">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Paperless Onboarding</h3>
                    <p className="text-gray-600">
                      Complete KYC and start investing or apply for loans in minutes with our secure digital process.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-fintech-orange to-fintech-purple flex-shrink-0 flex items-center justify-center text-white">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Bank-Grade Security</h3>
                    <p className="text-gray-600">
                      Your data and transactions are protected with 256-bit encryption and multiple security layers.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Button className="bg-gradient-to-r from-fintech-purple to-fintech-blue hover:opacity-90 text-white px-8 py-6">
                  Start Your Financial Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by <span className="gradient-text">Thousands</span> Across India
            </h2>
            <p className="text-gray-600">
              Don't just take our word for it - see what our clients have to say about Money Bharat.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Money Bharat's mutual fund recommendations helped me achieve 18% returns in just one year. Their technology makes investing so simple."
              name="Rajesh Sharma"
              title="IT Professional, Bengaluru"
            />
            
            <TestimonialCard 
              quote="I was struggling to find the right insurance for my family. Money Bharat's experts guided me to a comprehensive plan that saved us 30% on premiums."
              name="Priya Mehta"
              title="Business Owner, Mumbai"
            />
            
            <TestimonialCard 
              quote="Getting a home loan through Money Bharat was incredibly fast and easy. Their digital process saved me countless hours of paperwork."
              name="Vikram Singh"
              title="Engineer, Pune"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-fintech-purple to-fintech-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="mb-8 opacity-80 text-lg">
              Join thousands of satisfied clients who have taken control of their finances with Money Bharat's innovative solutions.
            </p>
            <Button className="bg-white text-fintech-purple hover:bg-gray-100 px-8 py-6 text-lg">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

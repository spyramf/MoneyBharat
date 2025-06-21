
import { PiggyBank, Shield, Wallet } from "lucide-react";
import ProductCard from "@/components/ProductCard";

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50" role="region" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold mb-6">
            Money Bharat's Comprehensive Financial Services for <span className="text-green-600">Every Indian</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our award-winning platform offers tailored financial solutions to help you achieve your goals and secure your future.
            From zero-commission investments to comprehensive insurance coverage, Money Bharat Finance is your trusted partner.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <ProductCard 
              title="Best Mutual Funds in India" 
              icon={<PiggyBank size={32} className="text-purple-600" />} 
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
              gradient="bg-gradient-to-br from-purple-500 to-blue-500" 
            />
          </div>
          
          <div className="transform hover:scale-105 transition-transform duration-300">
            <ProductCard 
              title="Comprehensive Insurance Plans" 
              icon={<Shield size={32} className="text-blue-600" />} 
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
              gradient="bg-gradient-to-br from-blue-500 to-cyan-500" 
            />
          </div>
          
          <div className="transform hover:scale-105 transition-transform duration-300">
            <ProductCard 
              title="Quick & Easy Loans" 
              icon={<Wallet size={32} className="text-orange-600" />} 
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
              gradient="bg-gradient-to-br from-orange-500 to-red-500" 
            />
          </div>
        </div>
        
        {/* Enhanced popular services section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Popular Money Bharat Finance Services</h3>
            <p className="text-gray-600">Quick access to our most-used financial tools and services</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <a href="/tools/sip-calculator" 
               className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 px-4 py-3 rounded-xl hover:from-green-600 hover:to-green-700 hover:text-white transition-all duration-300 text-center group"
               aria-label="Calculate SIP returns and plan investments">
              <div className="font-semibold text-sm">SIP Calculator</div>
              <div className="text-xs mt-1 opacity-75 group-hover:opacity-100">Plan Investments</div>
            </a>
            <a href="/health-insurance" 
               className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 px-4 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 hover:text-white transition-all duration-300 text-center group"
               aria-label="Get comprehensive health insurance coverage">
              <div className="font-semibold text-sm">Health Insurance</div>
              <div className="text-xs mt-1 opacity-75 group-hover:opacity-100">Protect Family</div>
            </a>
            <a href="/loans/personal" 
               className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 px-4 py-3 rounded-xl hover:from-orange-600 hover:to-orange-700 hover:text-white transition-all duration-300 text-center group"
               aria-label="Apply for instant personal loans">
              <div className="font-semibold text-sm">Personal Loans</div>
              <div className="text-xs mt-1 opacity-75 group-hover:opacity-100">Instant Approval</div>
            </a>
            <a href="/tools/emi-calculator" 
               className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 px-4 py-3 rounded-xl hover:from-purple-600 hover:to-purple-700 hover:text-white transition-all duration-300 text-center group"
               aria-label="Calculate loan EMI amounts">
              <div className="font-semibold text-sm">EMI Calculator</div>
              <div className="text-xs mt-1 opacity-75 group-hover:opacity-100">Plan Loans</div>
            </a>
            <a href="/blog/top-7-personal-finance-tips-india" 
               className="bg-gradient-to-r from-teal-50 to-teal-100 border border-teal-200 px-4 py-3 rounded-xl hover:from-teal-600 hover:to-teal-700 hover:text-white transition-all duration-300 text-center group"
               aria-label="Read expert financial tips and advice">
              <div className="font-semibold text-sm">Finance Tips</div>
              <div className="text-xs mt-1 opacity-75 group-hover:opacity-100">Expert Advice</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

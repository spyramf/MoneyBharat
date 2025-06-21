
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, UserCheck, Search, FileCheck, TrendingUp } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Quick Registration Process",
      description: "Sign up with Money Bharat Finance in under 2 minutes. Complete your KYC verification online with Aadhaar and PAN. Our secure onboarding process ensures your data is protected while meeting all regulatory requirements for mutual funds, insurance, and loans."
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "AI-Powered Financial Recommendations",
      description: "Our advanced AI algorithm analyzes your financial goals, risk appetite, and investment horizon to recommend the best mutual funds, insurance policies, and loan products tailored specifically for your unique financial needs and Money Bharat Finance expertise."
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Seamless Investment & Application Process",
      description: "Invest in mutual funds with zero commission through Money Bharat Finance, apply for insurance with instant quotes, or get pre-approved loans with minimal documentation. Our streamlined digital process eliminates paperwork and reduces processing time significantly."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Track & Optimize Your Portfolio",
      description: "Monitor your Money Bharat Finance portfolio performance in real-time through our comprehensive dashboard. Get regular reports, AI-powered rebalancing suggestions, and expert financial advice to optimize your wealth growth and achieve your goals faster."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Money Bharat Finance Works - Your Complete Journey to Financial Freedom
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience a seamless financial journey with Money Bharat Finance. From comprehensive investment planning to instant loan approval, 
              we've simplified every step to help you make smarter financial decisions with complete confidence and expert guidance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-lg transition-all duration-200">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-fintech-green to-fintech-blue text-white flex items-center justify-center mx-auto mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Why Over 500,000+ Investors Choose Money Bharat Finance</h3>
            <p className="text-lg text-gray-700 mb-6">
              Join India's fastest-growing community of smart investors who trust Money Bharat Finance for their complete financial journey
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-fintech-green mb-2">Zero Commission Mutual Fund Investing</h4>
                <p className="text-sm text-gray-600">Save more with direct mutual fund plans and zero hidden charges on Money Bharat Finance platform</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-fintech-blue mb-2">Expert AMFI-Certified Financial Advice</h4>
                <p className="text-sm text-gray-600">Get personalized guidance from AMFI-certified financial advisors at Money Bharat Finance</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-fintech-purple mb-2">100% Secure & Fully Regulated Platform</h4>
                <p className="text-sm text-gray-600">Bank-grade security with complete regulatory compliance for your peace of mind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

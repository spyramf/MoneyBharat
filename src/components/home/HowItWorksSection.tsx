import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, UserCheck, Search, FileCheck, TrendingUp } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Quick Registration",
      description: "Create your account and complete KYC online in just minutes.",
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Smart Recommendations",
      description: "Get AI-based suggestions tailored to your financial goals.",
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Invest & Apply Easily",
      description: "Start investments, insurance, or loans with minimal steps.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Track & Grow",
      description: "Monitor your portfolio and get insights to optimize returns.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Money Bharat Works - Your Journey to Financial Freedom
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience a seamless financial journey with Money Bharat. From investment planning to loan approval,
              we've simplified every step to help you make smarter financial decisions with confidence.
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
            <p className="text-lg text-gray-700 mb-6">
              Join over 500,000+ investors who trust Money Bharat for their financial journey
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-fintech-green mb-2">Expert Advisory Services</h4>
                <p className="text-sm text-gray-600">
                  Get professional guidance on mutual fund plans and investment strategies
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-fintech-blue mb-2">Expert Financial Advice</h4>
                <p className="text-sm text-gray-600">Get personalized guidance from AMFI-certified advisors</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-fintech-purple mb-2">Secure & Regulated</h4>
                <p className="text-sm text-gray-600">Bank-grade security with full regulatory compliance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

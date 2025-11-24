
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Award, FileCheck, Users, TrendingUp } from "lucide-react";

const TrustSecuritySection = () => {
  const trustFactors = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Regulatory Compliance",
      description: "Money Bharat is registered with AMFI for mutual fund distribution, IRDAI-approved for insurance broking, and RBI-compliant for loan facilitation. We adhere to strict regulatory guidelines to ensure complete investor protection."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Bank-Grade Security",
      description: "Your financial data is protected with 256-bit SSL encryption, multi-factor authentication, and advanced cybersecurity protocols. We follow industry best practices and undergo regular security audits to maintain the highest standards."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Certified Advisors",
      description: "Our team consists of AMFI-certified mutual fund advisors, IRDAI-licensed insurance experts, and experienced financial planners who provide you with expert guidance tailored to your unique financial situation and goals."
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Transparent Operations",
      description: "Money Bharat believes in complete transparency. All fees, charges, and terms are clearly disclosed upfront. We provide regular portfolio reports, transaction statements, and performance analytics to keep you informed."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer Support",
      description: "Our dedicated customer support team is available 6 days a week to assist you with any queries. We also provide educational resources, webinars, and personalized financial planning sessions to help you make informed decisions."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Proven Track Record",
      description: "With over 15 years of experience in the financial industry, Money Bharat has helped thousands of investors achieve their financial goals. Our consistent performance and customer satisfaction ratings speak for our commitment to excellence."
    }
  ];

  const stats = [
    { number: "₹500Cr+", label: "Assets Under Management" },
    { number: "50K+", label: "Satisfied Customers" },
    { number: "99.8%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Digital Platform Access" }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Money Bharat is India's Most Trusted Financial Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your financial security is our top priority. We've built Money Bharat with robust security measures, 
              regulatory compliance, and transparent operations to earn your trust and protect your investments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {trustFactors.map((factor, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-200">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-fintech-green to-fintech-blue text-white flex items-center justify-center mb-4">
                    {factor.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{factor.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{factor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Money Bharat by the Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-fintech-green mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-fintech-green to-fintech-blue rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Start Your Secure Investment Journey Today</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of investors who trust Money Bharat for their financial growth. 
              Experience the perfect blend of technology, security, and expert guidance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>AMFI Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                <span>256-bit Encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSecuritySection;

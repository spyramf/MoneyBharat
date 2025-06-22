
import { Globe, Shield, Clock, Users, Award, TrendingUp, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const NRIExcellence = () => {
  const nriFeatures = [
    {
      icon: <Globe className="h-8 w-8 text-fintech-green" />,
      title: "Global Accessibility",
      description: "Invest from anywhere in the world with our international platform designed for NRIs"
    },
    {
      icon: <Shield className="h-8 w-8 text-fintech-green" />,
      title: "FEMA Compliant",
      description: "100% FEMA compliant investment solutions ensuring legal and secure transactions"
    },
    {
      icon: <Clock className="h-8 w-8 text-fintech-green" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support across multiple time zones for global convenience"
    },
    {
      icon: <Users className="h-8 w-8 text-fintech-green" />,
      title: "Dedicated NRI Desk",
      description: "Specialized relationship managers who understand NRI investment needs and challenges"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-fintech-green" />,
      title: "Tax Optimization",
      description: "Expert guidance on tax-efficient investment strategies for NRI portfolio management"
    },
    {
      icon: <Award className="h-8 w-8 text-fintech-green" />,
      title: "Multi-Currency Support",
      description: "Seamless investment in INR while managing your portfolio in your preferred currency"
    }
  ];

  const statistics = [
    { number: "6000+", label: "NRI Clients Served", icon: <Users className="h-6 w-6" /> },
    { number: "65+", label: "Countries Covered", icon: <Globe className="h-6 w-6" /> },
    { number: "99%", label: "Client Satisfaction", icon: <Star className="h-6 w-6" /> },
    { number: "₹50Cr+", label: "NRI AUM Managed", icon: <TrendingUp className="h-6 w-6" /> }
  ];

  const trustIndicators = [
    "SEBI Registered Investment Advisor",
    "ISO 27001 Certified Security",
    "RBI Approved Payment Gateway",
    "BSE & NSE Authorized Partner"
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-fintech-green to-fintech-blue text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="h-4 w-4 mr-2" />
              #1 Choice for NRI Investments
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-800">Money Bharat - </span>
              <span className="bg-gradient-to-r from-fintech-green to-fintech-blue bg-clip-text text-transparent">
                Best for NRI Clients
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trusted by over 6000+ NRIs worldwide, we provide seamless, compliant, and tax-efficient 
              mutual fund investment solutions tailored specifically for Non-Resident Indians.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex justify-center items-center text-fintech-green mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Why NRIs Choose Money Bharat
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nriFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="mb-6">{feature.icon}</div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Trusted & Certified
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-fintech-green flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{indicator}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gradient-to-r from-fintech-green to-fintech-blue rounded-2xl p-8 text-white text-center mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-300 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium italic mb-6">
                "Money Bharat made my investment journey from USA incredibly smooth. Their NRI-focused 
                approach and dedicated support team helped me build a diversified portfolio while 
                staying compliant with all regulations."
              </blockquote>
              <div className="text-lg">
                <div className="font-semibold">Rajesh Patel</div>
                <div className="opacity-90">Software Engineer, Silicon Valley</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Ready to Start Your NRI Investment Journey?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of successful NRI investors who trust Money Bharat 
              for their mutual fund investments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://spyraexima.wylth.com/NewOnBoarding/SignUp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-fintech-green to-fintech-green hover:opacity-90 text-lg px-8 py-6">
                  Start NRI Investment Account
                </Button>
              </a>
              <Button variant="outline" className="text-lg px-8 py-6 border-fintech-green text-fintech-green hover:bg-fintech-green hover:text-white">
                Talk to NRI Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NRIExcellence;

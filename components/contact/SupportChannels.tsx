
import { Headphones, MessageSquare, FileText, Shield, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SupportChannels = () => {
  const supportFeatures = [
    {
      icon: Headphones,
      title: "24/7 Emergency Support",
      description: "Critical investment support available round the clock for existing clients",
      color: "text-red-600 bg-red-50"
    },
    {
      icon: MessageSquare,
      title: "Live Chat Support",
      description: "Instant responses to your queries through our website chat feature",
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: FileText,
      title: "Document Assistance",
      description: "Help with KYC, application forms, and investment documentation",
      color: "text-green-600 bg-green-50"
    },
    {
      icon: Shield,
      title: "Secure Communication",
      description: "All communications are encrypted and completely confidential",
      color: "text-purple-600 bg-purple-50"
    },
    {
      icon: Clock,
      title: "Quick Response Time",
      description: "Average response time of under 2 hours during business hours",
      color: "text-orange-600 bg-orange-50"
    },
    {
      icon: Users,
      title: "Dedicated Relationship Manager",
      description: "Personal advisor assigned for investments above ₹1 lakh",
      color: "text-indigo-600 bg-indigo-50"
    }
  ];

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Multiple Ways to <span className="text-fintech-green">Reach Us</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We believe in being accessible to our clients through various communication channels. 
          Choose the method that works best for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {supportFeatures.map((feature, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0">
            <CardContent className="p-6 text-center">
              <div className={`inline-flex p-4 rounded-full ${feature.color} mb-4`}>
                <feature.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Trust indicators */}
      <div className="mt-12 bg-gradient-to-r from-fintech-green/5 to-blue-50 rounded-2xl p-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose Money Bharat for Support?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-fintech-green">50,000+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-fintech-green">₹500Cr+</div>
              <div className="text-gray-600">Assets Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-fintech-green">99.5%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-fintech-green">5+ Years</div>
              <div className="text-gray-600">Industry Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportChannels;

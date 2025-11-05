import { Shield, FileText, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ContactLegal = () => {
  const legalInfo = [
    {
      title: "AMFI Registration",
      description: "We are registered with Association of Mutual Funds in India",
      details: "Registration Number: ARN - 225204",
      icon: Shield,
    },
    {
      title: "Regulatory Compliance",
      description: "All our services comply with SEBI and RBI guidelines",
      details: "Licensed financial service provider",
      icon: FileText,
    },
  ];

  const contactMethods = [
    {
      title: "Customer Support",
      phone: "+91 9970735694",
      email: "contact@moneybharatfinance.com",
      hours: "Mon-Sat 9AM-7PM IST",
    },
    {
      title: "Grievance Redressal",
      phone: "+91 9970735694",
      email: "grievance@moneybharatfinance.com",
      hours: "Mon-Fri 10AM-6PM IST",
    },
  ];

  return (
    <section className="mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Legal Information & Contact Details</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Money Bharat Finance operates under strict regulatory guidelines to ensure your financial security and
          transparency.
        </p>
      </div>

      {/* Legal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {legalInfo.map((info, index) => (
          <Card key={index} className="shadow-lg border-l-4 border-l-fintech-green">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-fintech-green/10 rounded-lg">
                  <info.icon className="h-6 w-6 text-fintech-green" />
                </div>
                {info.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">{info.description}</p>
              <p className="font-semibold text-fintech-green">{info.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {contactMethods.map((method, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">{method.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-fintech-green" />
                <span className="font-medium">{method.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-fintech-green" />
                <span className="font-medium">{method.email}</span>
              </div>
              <p className="text-sm text-gray-600">{method.hours}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation Links */}
      <Card className="shadow-lg bg-gradient-to-r from-fintech-green/5 to-blue-50">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-gray-900">Quick Navigation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/terms-of-service"
              className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border hover:border-fintech-green/30"
            >
              <FileText className="h-8 w-8 text-fintech-green mx-auto mb-2" />
              <p className="font-medium text-gray-900">Terms of Service</p>
            </Link>

            <Link
              to="/privacy-policy"
              className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border hover:border-fintech-green/30"
            >
              <Shield className="h-8 w-8 text-fintech-green mx-auto mb-2" />
              <p className="font-medium text-gray-900">Privacy Policy</p>
            </Link>

            <Link
              to="/about"
              className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border hover:border-fintech-green/30"
            >
              <FileText className="h-8 w-8 text-fintech-green mx-auto mb-2" />
              <p className="font-medium text-gray-900">About Us</p>
            </Link>

            <Link
              to="/booking"
              className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border hover:border-fintech-green/30"
            >
              <Phone className="h-8 w-8 text-fintech-green mx-auto mb-2" />
              <p className="font-medium text-gray-900">Book Consultation</p>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg border">
        <h3 className="font-semibold text-gray-900 mb-3">Important Disclaimer</h3>
        <div className="text-sm text-gray-600 space-y-2">
          <p>
            • Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully
            before investing.
          </p>
          <p>
            • Past performance is not indicative of future returns. Please consider your specific investment
            requirements before choosing a fund, or designing a portfolio that suits your needs.
          </p>
          <p>• Money Bharat Finance is an AMFI-registered mutual fund distributor (ARN-225204).</p>
          <p>
            • For any grievances related to our services, please contact our grievance officer at
            grievance@moneybharatfinance.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactLegal;

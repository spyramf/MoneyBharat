
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Download, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickTools = [
    { name: "SIP Calculator", path: "/sip-calculator" },
    { name: "EMI Calculator", path: "/emi-calculator" },
    { name: "Tax Saving", path: "/tax-saving" },
    { name: "Book Consultation", path: "/booking" }
  ];

  const trustBadges = [
    { text: "SEBI Registered", subtext: "INA000000000" },
    { text: "256-bit SSL", subtext: "Secure Encryption" },
    { text: "₹10Cr+ Insurance", subtext: "Protected Investments" },
    { text: "ISO 27001", subtext: "Certified Security" }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Main Footer Content */}
      <div className="relative z-10 py-16 md:py-20">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Brand & Contact */}
            <div className="lg:col-span-1 space-y-6">
              <Link to="/" className="flex items-center">
                <div className="h-12 w-12 mr-3">
                  <img 
                    src="/lovable-uploads/92affb7c-7e35-42da-9aff-b0f55a689428.png" 
                    alt="Money Bharat Logo" 
                    className="h-full w-full object-contain" 
                  />
                </div>
                <span className="text-3xl font-bold">
                  <span className="gradient-text">Money</span>
                  <span className="text-fintech-green"> Bharat</span>
                </span>
              </Link>
              
              <p className="text-gray-300 max-w-md leading-relaxed">
                Transforming India's financial landscape with innovative tech-driven solutions. 
                Your trusted partner for wealth creation and financial security.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <h4 className="font-semibold text-white text-sm mb-3">Contact Info</h4>
                <div className="flex items-center text-gray-300 text-sm">
                  <Phone className="h-4 w-4 mr-3 text-fintech-green" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <Mail className="h-4 w-4 mr-3 text-fintech-green" />
                  <span>contact@moneybharat.com</span>
                </div>
                <div className="flex items-start text-gray-300 text-sm">
                  <MapPin className="h-4 w-4 mr-3 text-fintech-green mt-0.5 flex-shrink-0" />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>
            
            {/* Products */}
            <div>
              <h3 className="font-semibold mb-6 text-white text-lg">Products</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/mutual-funds" className="text-gray-300 hover:text-fintech-green transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-fintech-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Mutual Funds
                  </Link>
                </li>
                <li>
                  <Link to="/health-insurance" className="text-gray-300 hover:text-fintech-green transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-fintech-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Health Insurance
                  </Link>
                </li>
                <li>
                  <Link to="/insurance" className="text-gray-300 hover:text-fintech-green transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-fintech-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Term Insurance
                  </Link>
                </li>
                <li>
                  <Link to="/loans/personal" className="text-gray-300 hover:text-fintech-green transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-fintech-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Personal Loans
                  </Link>
                </li>
                <li>
                  <Link to="/loans/business" className="text-gray-300 hover:text-fintech-green transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-fintech-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Business Loans
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Quick Tools & Company */}
            <div>
              <h3 className="font-semibold mb-6 text-white text-lg">Quick Tools</h3>
              <ul className="space-y-3 mb-8">
                {quickTools.map((tool) => (
                  <li key={tool.name}>
                    <Link to={tool.path} className="text-gray-300 hover:text-fintech-green transition-colors duration-200 flex items-center group">
                      <span className="w-2 h-2 bg-fintech-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {tool.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* <h3 className="font-semibold mb-6 text-white text-lg">Company</h3> */}
              {/* <ul className="space-y-3"> */}
              <ul>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-fintech-green transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-fintech-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-300 hover:text-fintech-green transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-fintech-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Legal & App Downloads */}
            <div>
              <h3 className="font-semibold mb-6 text-white text-lg">Legal</h3>
              <ul className="space-y-3 mb-8">
                <li>
                  <Link to="/terms-of-service" className="text-gray-300 hover:text-fintech-green transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-fintech-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-gray-300 hover:text-fintech-green transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-fintech-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Privacy Policy
                  </Link>
                </li>
              </ul>
              
              {/* Mobile App Download */}
              <div>
                <h4 className="font-semibold text-white text-sm mb-3">Download App</h4>
                <div className="flex flex-col gap-2">
                  <a href="#" className="inline-flex items-center text-gray-300 hover:text-fintech-green transition-colors text-sm">
                    <Download className="h-4 w-4 mr-2" />
                    Google Play Store
                  </a>
                  <a href="#" className="inline-flex items-center text-gray-300 hover:text-fintech-green transition-colors text-sm">
                    <Download className="h-4 w-4 mr-2" />
                    Apple App Store
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Trust Badges Section */}
          <div className="border-t border-white/10 pt-8 mb-8">
            <h3 className="text-white font-semibold mb-6 text-center">Trusted & Secure</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustBadges.map((badge, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 text-center p-4 rounded-lg">
                  <p className="text-fintech-green font-semibold text-sm">{badge.text}</p>
                  <p className="text-gray-400 text-xs mt-1">{badge.subtext}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Social & Bottom Section */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <span className="text-white font-medium mr-2">Follow Us:</span>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-fintech-green/20 border border-white/20 hover:border-fintech-green/30 flex items-center justify-center transition-all duration-200 group">
                  <Facebook size={18} className="text-gray-300 group-hover:text-fintech-green" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-fintech-green/20 border border-white/20 hover:border-fintech-green/30 flex items-center justify-center transition-all duration-200 group">
                  <Twitter size={18} className="text-gray-300 group-hover:text-fintech-green" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-fintech-green/20 border border-white/20 hover:border-fintech-green/30 flex items-center justify-center transition-all duration-200 group">
                  <Instagram size={18} className="text-gray-300 group-hover:text-fintech-green" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-fintech-green/20 border border-white/20 hover:border-fintech-green/30 flex items-center justify-center transition-all duration-200 group">
                  <Linkedin size={18} className="text-gray-300 group-hover:text-fintech-green" />
                </a>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Money Bharat Finance. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                SEBI Registered Investment Advisor - INA000000000
              </p>
            </div>
            
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-fintech-green hover:bg-fintech-green/90 flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-fintech-green/25"
              aria-label="Back to top"
            >
              <ArrowUp size={18} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

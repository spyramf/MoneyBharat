import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  return <footer className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold">
              <span className="gradient-text">Money</span>
              <span className="text-fintech-green"> Bharat</span>
            </Link>
            <p className="mt-4 text-gray-600 max-w-xs">
              Transforming India's financial landscape with innovative tech-driven solutions for wealth creation.
            </p>
            
            {/* Social icons */}
            <div className="flex mt-6 gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-fintech-purple/10 flex items-center justify-center transition-colors duration-200">
                <Facebook size={18} className="text-gray-700" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-fintech-purple/10 flex items-center justify-center transition-colors duration-200">
                <Twitter size={18} className="text-gray-700" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-fintech-purple/10 flex items-center justify-center transition-colors duration-200">
                <Instagram size={18} className="text-gray-700" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-fintech-purple/10 flex items-center justify-center transition-colors duration-200">
                <Linkedin size={18} className="text-gray-700" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/mutual-funds" className="text-gray-600 hover:text-fintech-purple">Mutual Funds</Link>
              </li>
              <li>
                <Link to="/health-insurance" className="text-gray-600 hover:text-fintech-purple">Health Insurance</Link>
              </li>
              <li>
                <Link to="/insurance" className="text-gray-600 hover:text-fintech-purple">Term Insurance</Link>
              </li>
              <li>
                <Link to="/insurance" className="text-gray-600 hover:text-fintech-purple">General Insurance</Link>
              </li>
              <li>
                <Link to="/loans/personal" className="text-gray-600 hover:text-fintech-purple">Personal Loans</Link>
              </li>
              <li>
                <Link to="/loans/business" className="text-gray-600 hover:text-fintech-purple">Business Loans</Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-fintech-purple">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-fintech-purple">Blog</Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-600 hover:text-fintech-purple">Book a Consultation</Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-gray-600 hover:text-fintech-purple">Sitemap</Link>
              </li>
              <li>
                <a href="mailto:contact@moneybharat.com" className="text-gray-600 hover:text-fintech-purple">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms-of-service" className="text-gray-600 hover:text-fintech-purple">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-fintech-purple">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-fintech-purple">Cookie Policy</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-fintech-purple">Compliance</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-fintech-purple">Security</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Money Bharat Finance. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            SEBI Registered Investment Advisor - INA000000000
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
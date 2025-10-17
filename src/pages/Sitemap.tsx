
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Map } from "lucide-react";

const Sitemap = () => {
  return (
    <>
      <Helmet>
        <title>Sitemap - Money Bharat Finance</title>
        <meta
          name="description"
          content="Sitemap for Money Bharat Finance - Browse all pages and resources available on our website."
        />
      </Helmet>

      <Navbar />

      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Map className="text-fintech-orange h-12 w-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fintech-purple to-fintech-blue">
              Sitemap
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-10">
            <p className="text-gray-500 mb-8 pb-4 border-b border-gray-100">
              Find all available pages and resources on Money Bharat Finance
            </p>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <span className="bg-fintech-orange/10 text-fintech-orange p-2 rounded-full mr-3">
                      <FileText size={18} />
                    </span>
                    Main Pages
                  </h2>
                  <ul className="space-y-2">
                    <li className="transition-all hover:translate-x-1">
                      <Link to="/" className="inline-flex items-center text-gray-600 hover:text-fintech-purple">
                        <ArrowRight size={14} className="mr-2 text-fintech-blue" /> Home
                      </Link>
                    </li>
                    <li className="transition-all hover:translate-x-1">
                      <Link to="/about" className="inline-flex items-center text-gray-600 hover:text-fintech-purple">
                        <ArrowRight size={14} className="mr-2 text-fintech-blue" /> About Us
                      </Link>
                    </li>
                    <li className="transition-all hover:translate-x-1">
                      <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-fintech-purple">
                        <ArrowRight size={14} className="mr-2 text-fintech-blue" /> Blog
                      </Link>
                    </li>
                    <li className="transition-all hover:translate-x-1">
                      <Link to="/booking" className="inline-flex items-center text-gray-600 hover:text-fintech-purple">
                        <ArrowRight size={14} className="mr-2 text-fintech-blue" /> Book a Consultation
                      </Link>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <span className="bg-fintech-orange/10 text-fintech-orange p-2 rounded-full mr-3">
                      <FileText size={18} />
                    </span>
                    Products
                  </h2>
                  <ul className="space-y-2">
                    <li className="transition-all hover:translate-x-1">
                      <Link to="/mutual-funds" className="inline-flex items-center text-gray-600 hover:text-fintech-purple">
                        <ArrowRight size={14} className="mr-2 text-fintech-blue" /> Mutual Funds
                      </Link>
                    </li>
                    <li className="transition-all hover:translate-x-1">
                      <Link to="/insurance" className="inline-flex items-center text-gray-600 hover:text-fintech-purple">
                        <ArrowRight size={14} className="mr-2 text-fintech-blue" /> Insurance
                      </Link>
                    </li>
                    <li className="transition-all hover:translate-x-1">
                      <Link to="/health-insurance" className="inline-flex items-center text-gray-600 hover:text-fintech-purple">
                        <ArrowRight size={14} className="mr-2 text-fintech-blue" /> Health Insurance
                      </Link>
                    </li>
                    <li className="transition-all hover:translate-x-1">
                      <Link to="/loans" className="inline-flex items-center text-gray-600 hover:text-fintech-purple">
                        <ArrowRight size={14} className="mr-2 text-fintech-blue" /> Loans
                      </Link>
                    </li>
                    <li className="transition-all hover:translate-x-1">
                      <Link to="/loans/personal" className="inline-flex items-center text-gray-600 hover:text-fintech-purple">
                        <ArrowRight size={14} className="mr-2 text-fintech-blue" /> Personal Loans
                      </Link>
                    </li>
                    <li className="transition-all hover:translate-x-1">
                      <Link to="/loans/business" className="inline-flex items-center text-gray-600 hover:text-fintech-purple">
                        <ArrowRight size={14} className="mr-2 text-fintech-blue" /> Business Loans
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <span className="bg-fintech-orange/10 text-fintech-orange p-2 rounded-full mr-3">
                      <FileText size={18} />
                    </span>
                    Financial Tools
                  </h2>
                  <ul className="space-y-2">
                    <li className="transition-all hover:translate-x-1">
                      <Link to="/tools/sip-calculator" className="inline-flex items-center text-gray-600 hover:text-fintech-purple">
                        <ArrowRight size={14} className="mr-2 text-fintech-blue" /> SIP Calculator
                      </Link>
                    </li>
                    <li className="transition-all hover:translate-x-1">
                      <Link to="/tools/emi-calculator" className="inline-flex items-center text-gray-600 hover:text-fintech-purple">
                        <ArrowRight size={14} className="mr-2 text-fintech-blue" /> EMI Calculator
                      </Link>
                    </li>
                    <li className="transition-all hover:translate-x-1">
                      <Link to="/tools/tax-saving" className="inline-flex items-center text-gray-600 hover:text-fintech-purple">
                        <ArrowRight size={14} className="mr-2 text-fintech-blue" /> Tax Saving Calculator
                      </Link>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <span className="bg-fintech-orange/10 text-fintech-orange p-2 rounded-full mr-3">
                      <FileText size={18} />
                    </span>
                    Legal Information
                  </h2>
                  <ul className="space-y-2">
                    <li className="transition-all hover:translate-x-1">
                      <Link to="/privacy-policy" className="inline-flex items-center text-gray-600 hover:text-fintech-purple">
                        <ArrowRight size={14} className="mr-2 text-fintech-blue" /> Privacy Policy
                      </Link>
                    </li>
                    <li className="transition-all hover:translate-x-1">
                      <Link to="/terms-of-service" className="inline-flex items-center text-gray-600 hover:text-fintech-purple">
                        <ArrowRight size={14} className="mr-2 text-fintech-blue" /> Terms of Service
                      </Link>
                    </li>
                    <li className="transition-all hover:translate-x-1">
                      <Link to="/sitemap" className="inline-flex items-center text-gray-600 hover:text-fintech-purple">
                        <ArrowRight size={14} className="mr-2 text-fintech-blue" /> Sitemap
                      </Link>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <span className="bg-fintech-orange/10 text-fintech-orange p-2 rounded-full mr-3">
                      <FileText size={18} />
                    </span>
                    Admin
                  </h2>
                  <ul className="space-y-2">
                    <li className="transition-all hover:translate-x-1">
                      <Link to="/admin" className="inline-flex items-center text-gray-600 hover:text-fintech-purple">
                        <ArrowRight size={14} className="mr-2 text-fintech-blue" /> Admin Dashboard
                      </Link>
                    </li>
                    <li className="transition-all hover:translate-x-1">
                      <Link to="/admin/blogs" className="inline-flex items-center text-gray-600 hover:text-fintech-purple">
                        <ArrowRight size={14} className="mr-2 text-fintech-blue" /> Blog Management
                      </Link>
                    </li>
                    <li className="transition-all hover:translate-x-1">
                      <Link to="/admin/bookings" className="inline-flex items-center text-gray-600 hover:text-fintech-purple">
                        <ArrowRight size={14} className="mr-2 text-fintech-blue" /> Booking Management
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
            
            <div className="mt-12 pt-4 border-t border-gray-100">
              <a href="/" className="inline-flex items-center text-fintech-blue hover:text-fintech-purple transition-colors">
                <ArrowRight size={16} className="mr-2" /> Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sitemap;


import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

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

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Sitemap</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Main Pages</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-fintech-blue hover:text-fintech-purple transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-fintech-blue hover:text-fintech-purple transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-fintech-blue hover:text-fintech-purple transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/booking" className="text-fintech-blue hover:text-fintech-purple transition-colors">
                    Book a Consultation
                  </Link>
                </li>
              </ul>

              <h2 className="text-xl font-semibold mb-4 mt-8">Products</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/mutual-funds" className="text-fintech-blue hover:text-fintech-purple transition-colors">
                    Mutual Funds
                  </Link>
                </li>
                <li>
                  <Link to="/insurance" className="text-fintech-blue hover:text-fintech-purple transition-colors">
                    Insurance
                  </Link>
                </li>
                <li>
                  <Link to="/health-insurance" className="text-fintech-blue hover:text-fintech-purple transition-colors">
                    Health Insurance
                  </Link>
                </li>
                <li>
                  <Link to="/loans" className="text-fintech-blue hover:text-fintech-purple transition-colors">
                    Loans
                  </Link>
                </li>
                <li>
                  <Link to="/loans/personal" className="text-fintech-blue hover:text-fintech-purple transition-colors">
                    Personal Loans
                  </Link>
                </li>
                <li>
                  <Link to="/loans/business" className="text-fintech-blue hover:text-fintech-purple transition-colors">
                    Business Loans
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Financial Tools</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/tools/sip-calculator" className="text-fintech-blue hover:text-fintech-purple transition-colors">
                    SIP Calculator
                  </Link>
                </li>
                <li>
                  <Link to="/tools/emi-calculator" className="text-fintech-blue hover:text-fintech-purple transition-colors">
                    EMI Calculator
                  </Link>
                </li>
                <li>
                  <Link to="/tools/tax-saving" className="text-fintech-blue hover:text-fintech-purple transition-colors">
                    Tax Saving Calculator
                  </Link>
                </li>
              </ul>

              <h2 className="text-xl font-semibold mb-4 mt-8">Legal Information</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy-policy" className="text-fintech-blue hover:text-fintech-purple transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-fintech-blue hover:text-fintech-purple transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/sitemap" className="text-fintech-blue hover:text-fintech-purple transition-colors">
                    Sitemap
                  </Link>
                </li>
              </ul>

              <h2 className="text-xl font-semibold mb-4 mt-8">Admin</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/admin" className="text-fintech-blue hover:text-fintech-purple transition-colors">
                    Admin Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/admin/blogs" className="text-fintech-blue hover:text-fintech-purple transition-colors">
                    Blog Management
                  </Link>
                </li>
                <li>
                  <Link to="/admin/bookings" className="text-fintech-blue hover:text-fintech-purple transition-colors">
                    Booking Management
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Sitemap;

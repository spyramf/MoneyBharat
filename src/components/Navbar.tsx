import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <nav className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4', scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm shadow-sm')}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-10 w-10 mr-2">
                <img src="/lovable-uploads/92affb7c-7e35-42da-9aff-b0f55a689428.png" alt="Money Bharat Logo" className="h-full w-full object-contain" />
              </div>
              <span className="text-2xl font-bold">
                <span className="gradient-text">Money</span>
                <span className="text-[#2EB883]"> Bharat</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/mutual-funds" className="font-medium text-gray-700 hover:text-fintech-green transition-colors">
              Mutual Funds
            </Link>
            <Link to="/insurance" className="font-medium text-gray-700 hover:text-fintech-green transition-colors">
              Insurance
            </Link>
            <Link to="/loans" className="font-medium text-gray-700 hover:text-fintech-green transition-colors">
              Loans
            </Link>
            <div className="relative group">
              <button className="font-medium text-gray-700 hover:text-fintech-green transition-colors">
                Tools
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/calculators/sip" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-fintech-green rounded-t-lg">
                  SIP Calculator
                </Link>
                <Link to="/calculators/emi" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-fintech-green">
                  EMI Calculator
                </Link>
                <Link to="/tax-saving" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-fintech-green rounded-b-lg">
                  Tax Saving
                </Link>
              </div>
            </div>
            <Link to="/blog" className="font-medium text-gray-700 hover:text-fintech-green transition-colors">
              Blog
            </Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-fintech-green transition-colors">
              About Us
            </Link>
<a href="https://client.moneybharat.co/Home/Login" target="_blank" rel="noopener noreferrer">
  <Button className="bg-gradient-to-r from-fintech-green to-fintech-green hover:opacity-90 text-white px-8 py-6">
    Get Started
  </Button>
</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && <div className="md:hidden mt-4 bg-white shadow-lg rounded-lg p-4 absolute left-4 right-4">
            <div className="flex flex-col gap-4">
              <Link to="/mutual-funds" className="font-medium text-gray-700 hover:text-fintech-green transition-colors" onClick={() => setIsOpen(false)}>
                Mutual Funds
              </Link>
              <Link to="/insurance" className="font-medium text-gray-700 hover:text-fintech-green transition-colors" onClick={() => setIsOpen(false)}>
                Insurance
              </Link>
              <Link to="/loans" className="font-medium text-gray-700 hover:text-fintech-green transition-colors" onClick={() => setIsOpen(false)}>
                Loans
              </Link>
              <div className="border-t pt-2">
                <div className="font-medium text-gray-500 text-sm mb-2">Tools</div>
                <Link to="/calculators/sip" className="block pl-4 py-2 text-gray-700 hover:text-fintech-green transition-colors" onClick={() => setIsOpen(false)}>
                  SIP Calculator
                </Link>
                <Link to="/calculators/emi" className="block pl-4 py-2 text-gray-700 hover:text-fintech-green transition-colors" onClick={() => setIsOpen(false)}>
                  EMI Calculator
                </Link>
                <Link to="/tax-saving" className="block pl-4 py-2 text-gray-700 hover:text-fintech-green transition-colors" onClick={() => setIsOpen(false)}>
                  Tax Saving
                </Link>
              </div>
              <Link to="/blog" className="font-medium text-gray-700 hover:text-fintech-green transition-colors" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
              <Link to="/about" className="font-medium text-gray-700 hover:text-fintech-green transition-colors" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
<a href="https://client.moneybharat.co/Home/Login" target="_blank" rel="noopener noreferrer">
  <Button className="bg-fintech-green hover:bg-fintech-green/90 text-white w-full rounded-full">
    Get Started
  </Button>
</a>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;
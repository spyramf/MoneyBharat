
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

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              <span className="gradient-text">Money</span>
              <span className="text-fintech-blue">Bharat</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/mutual-funds" className="font-medium text-gray-700 hover:text-fintech-purple transition-colors">
              Mutual Funds
            </Link>
            <Link to="/insurance" className="font-medium text-gray-700 hover:text-fintech-purple transition-colors">
              Insurance
            </Link>
            <Link to="/loans" className="font-medium text-gray-700 hover:text-fintech-purple transition-colors">
              Loans
            </Link>
            <Link to="/blog" className="font-medium text-gray-700 hover:text-fintech-purple transition-colors">
              Blog
            </Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-fintech-purple transition-colors">
              About Us
            </Link>
            <Button className="bg-fintech-blue hover:opacity-90 text-white rounded-full">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white shadow-lg rounded-lg p-4 absolute left-4 right-4">
            <div className="flex flex-col gap-4">
              <Link
                to="/mutual-funds"
                className="font-medium text-gray-700 hover:text-fintech-purple transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Mutual Funds
              </Link>
              <Link
                to="/insurance"
                className="font-medium text-gray-700 hover:text-fintech-purple transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Insurance
              </Link>
              <Link
                to="/loans"
                className="font-medium text-gray-700 hover:text-fintech-purple transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Loans
              </Link>
              <Link
                to="/blog"
                className="font-medium text-gray-700 hover:text-fintech-purple transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/about"
                className="font-medium text-gray-700 hover:text-fintech-purple transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Button className="bg-fintech-blue hover:opacity-90 text-white w-full rounded-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

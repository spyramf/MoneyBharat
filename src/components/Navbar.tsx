import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/80 backdrop-blur-sm shadow-sm",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="h-8 w-8 mr-2">
              <img
                src="/lovable-uploads/92affb7c-7e35-42da-9aff-b0f55a689428.png"
                alt="Money Bharat Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-xl font-bold leading-none">
              <span className="gradient-text">Money</span>
              <span className="text-[#2EB883]"> Bharat</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/mutual-funds" className="font-medium text-gray-700 hover:text-fintech-green transition-colors">
              Mutual Funds
            </Link>
            <Link to="/insurance" className="font-medium text-gray-700 hover:text-fintech-green transition-colors">
              Insurance
            </Link>
            <Link to="/loans" className="font-medium text-gray-700 hover:text-fintech-green transition-colors">
              Loans
            </Link>
            <Link to="/blog" className="font-medium text-gray-700 hover:text-fintech-green transition-colors">
              Blog
            </Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-fintech-green transition-colors">
              About Us
            </Link>
            <a href="https://moneybharat.net/Home/Login" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-fintech-green to-fintech-green hover:opacity-90 text-white px-6 py-2 rounded-full">
                Get Started
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-3 bg-white shadow-lg rounded-lg p-4 absolute left-4 right-4">
            <div className="flex flex-col gap-4">
              <Link
                to="/mutual-funds"
                className="font-medium text-gray-700 hover:text-fintech-green transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Mutual Funds
              </Link>
              <Link
                to="/insurance"
                className="font-medium text-gray-700 hover:text-fintech-green transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Insurance
              </Link>
              <Link
                to="/loans"
                className="font-medium text-gray-700 hover:text-fintech-green transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Loans
              </Link>
              <Link
                to="/blog"
                className="font-medium text-gray-700 hover:text-fintech-green transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/about"
                className="font-medium text-gray-700 hover:text-fintech-green transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <a href="https://moneybharat.net/Home/Login" target="_blank" rel="noopener noreferrer">
                <Button className="bg-fintech-green hover:bg-fintech-green/90 text-white w-full py-2 rounded-full">
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

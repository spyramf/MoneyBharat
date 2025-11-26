import { navItems } from '@/data/navigationData';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { SITE_CONFIG } from '@/constants/siteConfig';
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
  return <nav className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4', scrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-background/80 backdrop-blur-sm shadow-sm')}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="h-10 w-10 mr-2">
                <img src={SITE_CONFIG.brand.logo} alt="Money Bharat Logo" className="h-full w-full object-contain" />
              </div>
              <span className="text-2xl font-bold">
                <span className="gradient-text">Money</span>
                <span className="text-primary"> Bharat</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              if (item.name === 'Book Now') {
                return (
                  <Link href={item.path} key={item.name}>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-6 py-5">
                      {item.name}
                    </Button>
                  </Link>
                );
              }
              if (item.name === 'Home' || item.name === 'About Us' || item.name === 'Blog') {
                return null;
              }
              return (
                <Link href={item.path} key={item.name} className="font-medium text-foreground hover:text-primary transition-colors">
                  {item.name}
                </Link>
              );
            })}
            <a href="https://client.moneybharat.co/Home/Login" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-primary to-primary/70 hover:opacity-90 text-white px-8 py-6">
                Get Started
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-background shadow-lg rounded-lg p-4 absolute left-4 right-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                if (item.name === 'Book Now') {
                  return (
                    <Link href={item.path} key={item.name} onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white w-full">
                        {item.name}
                      </Button>
                    </Link>
                  );
                }
                return (
                  <Link href={item.path} key={item.name} className="font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                );
              })}
              <a href="https.client.moneybharat.co/Home/Login" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-white w-full rounded-full">
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>;
};
export default Navbar;

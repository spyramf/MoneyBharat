
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navItems, loanNavItems, insuranceNavItems } from '@/data/navigationData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleDropdownToggle = (item: string) => {
    setDropdownOpen(dropdownOpen === item ? null : item);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/lovable-uploads/aaa1dbf8-5b73-4620-a205-6193e82f8185.png" 
              alt="Money Bharat" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const hasSubmenu = item.name === 'Loans' || item.name === 'Insurance';
              
              return (
                <div key={item.name} className="relative">
                  {hasSubmenu ? (
                    <div
                      className="flex items-center space-x-1 cursor-pointer text-gray-700 hover:text-blue-600 transition-colors"
                      onMouseEnter={() => handleDropdownToggle(item.name)}
                      onMouseLeave={() => handleDropdownToggle('')}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                      
                      {/* Dropdown Menu */}
                      {dropdownOpen === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-10">
                          {(item.name === 'Loans' ? loanNavItems : insuranceNavItems).map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                              onClick={() => setDropdownOpen(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}
            
            <Button 
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Link to="/admin/login">
                Admin Login
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/admin/login"
              className="block px-3 py-2 text-base font-medium text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Admin Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

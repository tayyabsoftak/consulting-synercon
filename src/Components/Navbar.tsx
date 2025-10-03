import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigation } from "../Utils/data";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm sticky z-50 md:mx-10 md:rounded-3xl md:mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-primary-600">
            <img src="/logo.svg" alt="Logo" className="h-10 md:h-14" />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden lg:inline-block rounded-md p-[2px] bg-gradient-to-r from-primary to-secondary ">
            <Link
              to="/contact"
              className="group flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium bg-white hover:bg-gradient-to-r from-primary to-secondary"
            >
              <span className="text-black group-hover:text-white">
                CONTACT US
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-50"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.href
                      ? "text-brown"
                      : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </div>
            ))}

            {/* Mobile Contact Button */}
            <div
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-block md:hidden rounded-md p-[2px] bg-gradient-to-r from-primary to-secondary"
            >
              <Link
                to="/contact"
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium bg-white"
              >
                <span className="text-black">CONTACT US</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

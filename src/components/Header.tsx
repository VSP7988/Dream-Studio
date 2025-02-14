import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg dark:shadow-gray-800/30 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div 
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-green-500 to-purple-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </div>

      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="block">
            <img 
              src="https://lctech.in/dreamstudio/logo.png" 
              alt="Dream Studio Logo"
              className="max-w-[200px] h-auto" // Added max-width to reduce logo size
            />
          </NavLink>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 top-3' : 'top-1'
              }`} />
              <span className={`absolute left-0 block w-6 h-0.5 bg-current top-3 transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`absolute left-0 block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 top-3' : 'top-5'
              }`} />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLinks />
            <div className="h-6 w-px bg-gradient-to-b from-green-500 to-purple-500" />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-4">
            <NavLinks mobile />
            <div className="flex justify-center pt-4 border-t border-gray-200 dark:border-gray-700">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const NavLinks = ({ mobile }: { mobile?: boolean }) => {
  const baseStyles = "relative font-medium transition-all duration-200";
  const mobileStyles = "block text-center py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400";
  const desktopStyles = "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400";

  const linkStyle = ({ isActive }: { isActive: boolean }) => {
    const activeStyles = isActive
      ? "text-purple-600 dark:text-purple-400"
      : "";
    
    return `${baseStyles} ${mobile ? mobileStyles : desktopStyles} ${activeStyles} group`;
  };

  const links = [
    { to: "/", text: "Home" },
    { to: "/services", text: "Services" },
    { to: "/contact", text: "Contact" }
  ];

  return (
    <>
      {links.map(({ to, text }) => (
        <NavLink key={to} to={to} className={linkStyle}>
          {text}
          {!mobile && (
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-purple-500 group-hover:w-full transition-all duration-300" />
          )}
        </NavLink>
      ))}
    </>
  );
};
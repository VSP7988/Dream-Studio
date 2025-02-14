import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  ArrowUp
} from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-purple-500 to-green-500"></div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Circles */}
        <div className="absolute -top-40 right-0 w-96 h-96 blur-3xl opacity-20 bg-gradient-to-br from-purple-500 to-green-500 rounded-full"></div>
        <div className="absolute -bottom-40 left-0 w-96 h-96 blur-3xl opacity-20 bg-gradient-to-tr from-green-500 to-purple-500 rounded-full"></div>
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <img 
                src="https://lctech.in/dreamstudio/logo.png" 
                alt="Dream Studio Logo"
              />
            </Link>
            <p className="text-gray-600 dark:text-gray-400">
              Capturing life's precious moments with artistic excellence and professional expertise.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="relative">
            <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-4">
              <FooterLink to="/" text="Home" />
              <FooterLink to="/services" text="Services" />
              <FooterLink to="/contact" text="Contact" />
            </ul>
          </div>

          {/* Contact Info */}
          <div className="relative">
            <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-600 dark:text-gray-400 group">
                <MapPin className="w-5 h-5 mt-0.5 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Vijayawada, AP.
                </span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 group">
                <Phone className="w-5 h-5 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  +91 7799 2121 99
                </span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 group">
                <Mail className="w-5 h-5 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  27dstudio@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative border-t border-gray-200 dark:border-gray-800 py-8">
          <div className="flex justify-center">
            <p className="text-gray-600 dark:text-gray-400 text-center">
              © {currentYear} Dream Studio. All rights reserved.
            </p>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="absolute right-0 -top-6 transform -translate-y-1/2 p-2 rounded-full bg-gradient-to-r from-green-500 to-purple-500 text-white hover:from-green-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-green-500 to-purple-500 text-white hover:from-green-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
  >
    {icon}
  </a>
);

const FooterLink = ({ to, text }: { to: string; text: string }) => (
  <li>
    <Link
      to={to}
      className="group flex items-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
    >
      <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
      <span>{text}</span>
    </Link>
  </li>
);
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ShoppingCart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Royale Touche</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4">
              Crafting excellence in laminates and veneers since 1978. Your trusted partner
              in premium surface solutions.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          {/* <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm sm:text-base">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-start space-x-3">
                  <span className="text-gray-400 mt-1">{item.icon}</span>
                  <span className="text-gray-400">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Royale Touche. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const socialLinks = [
  { name: 'Facebook', url: '#', icon: <Facebook size={20} /> },
  { name: 'Twitter', url: '#', icon: <Twitter size={20} /> },
  { name: 'Instagram', url: '#', icon: <Instagram size={20} /> },
  { name: 'LinkedIn', url: '#', icon: <Linkedin size={20} /> },
];

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Collections', path: '/collections' },
  { label: 'Contact', path: '/contact' },
  { label: 'Blog', path: '/blog' },
  {label:<ShoppingCart/>,path:'/cart'}
];

// const productLinks = [
//   { label: 'Laminates', path: '/products/laminates' },
//   { label: 'Veneers', path: '/products/veneers' },
//   { label: 'Plywood', path: '/products/plywood' },
//   { label: 'New Arrivals', path: '/products/new' },
//   { label: 'Catalogues', path: '/catalogues' },
 
// ];

const contactInfo = [
  { icon: <Mail size={20} />, label: 'Email', value: 'info@royaletouche.com' },
  { icon: <Phone size={20} />, label: 'Phone', value: '+1 (234) 567-8900' },
  { icon: <MapPin size={20} />, label: 'Address', value: '123 Design Street, Creative City, 12345' },
];

export default Footer;

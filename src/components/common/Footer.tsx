import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <Logo scrolled={true} />
            <p className="text-gray-400 mt-4 max-w-xs">
              Creating beautiful, functional, and personalized modular furniture solutions for your home and office since 2009.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/visualizer" className="text-gray-400 hover:text-white transition-colors">Room Visualizer</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Design Blog</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Our Products</h3>
            <ul className="space-y-3">
              <li><Link to="/products/living-room" className="text-gray-400 hover:text-white transition-colors">Living Room</Link></li>
              <li><Link to="/products/bedroom" className="text-gray-400 hover:text-white transition-colors">Bedroom</Link></li>
              <li><Link to="/products/kitchen" className="text-gray-400 hover:text-white transition-colors">Kitchen</Link></li>
              <li><Link to="/products/dining" className="text-gray-400 hover:text-white transition-colors">Dining Room</Link></li>
              <li><Link to="/products/office" className="text-gray-400 hover:text-white transition-colors">Office</Link></li>
              <li><Link to="/products/storage" className="text-gray-400 hover:text-white transition-colors">Storage Solutions</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">No. 58/59 1st Main Road ,4th Cross Lakshmi layout , Mylasandra, Begur Hobli, Bangalore - 560068</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-amber-500" />
                <a href="tel:+918812345678" className="text-gray-400 hover:text-white transition-colors">+91 973 940 7305</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-amber-500" />
                <a href="mailto:info@gpmodular.com" className="text-gray-400 hover:text-white transition-colors">gpmf16@gmail.com <br /> gmpfpl@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-amber-500" />
                <a  className="text-gray-400 hover:text-white transition-colors">29BDLPP0199J1ZV</a>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-amber-500" />
                <span className="text-gray-400">Mon-Sat: 10AM - 8PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} GP Modular Furniture. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
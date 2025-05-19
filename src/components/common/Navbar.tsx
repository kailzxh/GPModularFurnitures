import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  scrolled: boolean;
  openConsultation: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, openConsultation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProductsMenu, setShowProductsMenu] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProductsMenu = () => setShowProductsMenu(!showProductsMenu);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products', hasSubmenu: true },
    { name: 'Services', path: '/services' },
    { name: 'Visualizer', path: '/visualizer' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const productCategories = [
    'Living Room', 'Bedroom', 'Kitchen', 'Dining', 'Office', 'Storage'
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo scrolled={scrolled} />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasSubmenu ? (
                  <button 
                    className="flex items-center text-gray-800 hover:text-amber-700 font-medium"
                    onMouseEnter={() => setShowProductsMenu(true)}
                    onMouseLeave={() => setShowProductsMenu(false)}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                ) : (
                  <NavLink 
                    to={link.path}
                    className={({ isActive }) => 
                      `text-gray-800 hover:text-amber-700 font-medium ${isActive ? 'text-amber-700' : ''}`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
                
                {/* Products Dropdown Menu */}
                {link.hasSubmenu && showProductsMenu && (
                  <div 
                    className="absolute mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20"
                    onMouseEnter={() => setShowProductsMenu(true)}
                    onMouseLeave={() => setShowProductsMenu(false)}
                  >
                    <div className="py-2">
                      {productCategories.map((category) => (
                        <NavLink 
                          key={category}
                          to={`/products/${category.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {category}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <button 
            onClick={openConsultation}
            className="hidden md:block bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-md transition-colors duration-300"
          >
            Book Consultation
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-800"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t border-gray-200 py-4 px-6"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasSubmenu ? (
                  <div>
                    <button 
                      onClick={toggleProductsMenu}
                      className="flex items-center justify-between w-full text-gray-800 font-medium"
                    >
                      <span>{link.name}</span>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-300 ${
                          showProductsMenu ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {showProductsMenu && (
                      <div className="mt-2 ml-4 space-y-2">
                        {productCategories.map((category) => (
                          <NavLink 
                            key={category}
                            to={`/products/${category.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block py-1 text-gray-600 hover:text-amber-700"
                            onClick={() => setIsOpen(false)}
                          >
                            {category}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink 
                    to={link.path}
                    className={({ isActive }) => 
                      `block text-gray-800 hover:text-amber-700 font-medium ${isActive ? 'text-amber-700' : ''}`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}
            
            <button 
              onClick={() => {
                openConsultation();
                setIsOpen(false);
              }}
              className="bg-amber-700 hover:bg-amber-800 text-white w-full py-2 rounded-md mt-4 transition-colors duration-300"
            >
              Book Consultation
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
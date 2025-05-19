import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Filter, X } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'living-room', name: 'Living Room' },
    { id: 'bedroom', name: 'Bedroom' },
    { id: 'kitchen', name: 'Kitchen' },
    { id: 'dining', name: 'Dining' },
    { id: 'office', name: 'Office' },
    { id: 'storage', name: 'Storage' }
  ];
  
  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'budget', name: 'Budget-Friendly' },
    { id: 'mid-range', name: 'Mid-Range' },
    { id: 'premium', name: 'Premium' }
  ];
  
  const products = [
    {
      id: 1,
      name: 'Modular L-Shaped Sofa',
      category: 'living-room',
      priceRange: 'premium',
      price: 85000,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Customizable TV Unit',
      category: 'living-room',
      priceRange: 'mid-range',
      price: 42000,
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600',
      rating: 4.6
    },
    {
      id: 3,
      name: 'Sliding Wardrobe with Mirror',
      category: 'bedroom',
      priceRange: 'premium',
      price: 78000,
      image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1600',
      rating: 4.9
    },
    {
      id: 4,
      name: 'King Size Storage Bed',
      category: 'bedroom',
      priceRange: 'mid-range',
      price: 54000,
      image: 'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=1600',
      rating: 4.7
    },
    {
      id: 5,
      name: 'Modern Kitchen Cabinet Set',
      category: 'kitchen',
      priceRange: 'premium',
      price: 120000,
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1600',
      rating: 4.9
    },
    {
      id: 6,
      name: 'Dining Table with 6 Chairs',
      category: 'dining',
      priceRange: 'mid-range',
      price: 48000,
      image: 'https://images.pexels.com/photos/6489120/pexels-photo-6489120.jpeg?auto=compress&cs=tinysrgb&w=1600',
      rating: 4.5
    },
    {
      id: 7,
      name: 'Executive Office Desk',
      category: 'office',
      priceRange: 'premium',
      price: 65000,
      image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1600',
      rating: 4.8
    },
    {
      id: 8,
      name: 'Bookshelf with Display Unit',
      category: 'storage',
      priceRange: 'budget',
      price: 28000,
      image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1600',
      rating: 4.6
    }
  ];
  
  const filteredProducts = products
    .filter(product => 
      (activeCategory === 'all' || product.category === activeCategory) &&
      (product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="py-24 bg-gray-900 text-white relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.7)), url(https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Product Collections</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Discover our range of premium modular furniture designed for modern living
            </p>
            
            {/* Search Bar */}
            <div className="relative w-full max-w-md">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-3 pr-12 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Categories</h2>
                <ul className="space-y-2 mb-8">
                  {categories.map(category => (
                    <li key={category.id}>
                      <button
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-300 ${
                          activeCategory === category.id
                            ? 'bg-amber-100 text-amber-800'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <h2 className="text-lg font-bold text-gray-900 mb-4">Price Range</h2>
                <ul className="space-y-2">
                  {priceRanges.map(range => (
                    <li key={range.id}>
                      <button
                        className="w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-300"
                      >
                        {range.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Filters Button - Mobile */}
            <div className="lg:hidden fixed bottom-6 right-6 z-30">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center w-14 h-14 bg-amber-700 text-white rounded-full shadow-lg"
              >
                {showFilters ? <X size={24} /> : <Filter size={24} />}
              </button>
            </div>
            
            {/* Filters Sidebar - Mobile */}
            {showFilters && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden">
                <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                      <button
                        onClick={() => setShowFilters(false)}
                        className="text-gray-500"
                      >
                        <X size={24} />
                      </button>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                    <ul className="space-y-2 mb-8">
                      {categories.map(category => (
                        <li key={category.id}>
                          <button
                            onClick={() => {
                              setActiveCategory(category.id);
                              setShowFilters(false);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-300 ${
                              activeCategory === category.id
                                ? 'bg-amber-100 text-amber-800'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {category.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Price Range</h3>
                    <ul className="space-y-2">
                      {priceRanges.map(range => (
                        <li key={range.id}>
                          <button
                            className="w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-300"
                            onClick={() => setShowFilters(false)}
                          >
                            {range.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {/* Products Grid */}
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {categories.find(cat => cat.id === activeCategory)?.name}
                  <span className="ml-2 text-lg font-normal text-gray-500">({filteredProducts.length} products)</span>
                </h2>
                <div className="hidden md:block">
                  <select className="px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                  </select>
                </div>
              </div>
              
              {filteredProducts.length === 0 ? (
                <div className="text-center py-16">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
                  <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                <motion.div 
                  ref={ref}
                  variants={containerVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredProducts.map(product => (
                    <motion.div
                      key={product.id}
                      variants={itemVariants}
                      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="relative h-64 overflow-hidden group">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <button className="bg-white text-gray-900 font-medium px-6 py-2 rounded-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            View Details
                          </button>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                          <div className="flex items-center bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm">
                            ★ {product.rating}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">
                          {categories.find(cat => cat.id === product.category)?.name}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                          <button className="bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-md transition-colors duration-300">
                            Enquire
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
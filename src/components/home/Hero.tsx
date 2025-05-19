import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Transform Your Space with Premium Modular Furniture',
      description: 'Custom designed modular solutions that bring functionality and elegance to your home',
      cta: 'Explore Collections'
    },
    {
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Designed For Modern Living',
      description: 'Innovative furniture solutions that adapt to your lifestyle and space',
      cta: 'View Designs'
    },
    {
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Craftsmanship Meets Technology',
      description: 'Experience the perfect blend of traditional craftsmanship and cutting-edge design',
      cta: 'Our Process'
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 ${index === currentSlide ? 'z-10' : 'z-0'}`}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentSlide ? 1 : 0,
            transition: { duration: 0.8 }
          }}
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-4 md:px-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: index === currentSlide ? 1 : 0,
                  y: index === currentSlide ? 0 : 20,
                  transition: { 
                    duration: 0.8,
                    delay: 0.3
                  }
                }}
                className="max-w-xl text-white"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl opacity-90 mb-8">
                  {slide.description}
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="#collections" 
                    className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-md transition-colors duration-300 flex items-center"
                  >
                    {slide.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                  <a 
                    href="#booking" 
                    className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 rounded-md transition-colors duration-300"
                  >
                    Book Consultation
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
      
      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 z-30 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 z-30 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Hero;
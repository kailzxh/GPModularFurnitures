import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CTASection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  return (
    <section 
      className="py-20 bg-amber-700 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M0 0 L100 0 L100 100 L0 100 Z" 
              fill="url(#grid-pattern)"
            ></path>
            <defs>
              <pattern 
                id="grid-pattern" 
                patternUnits="userSpaceOnUse" 
                width="10" 
                height="10"
              >
                <rect width="1" height="1" fill="white"></rect>
              </pattern>
            </defs>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Book a free consultation with our expert designers and start your journey to a beautifully designed, functional space with GP Modular Furniture.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/consultation" 
              className="bg-white text-amber-700 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors duration-300"
            >
              Book Free Consultation
            </a>
            <a 
              href="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-md font-semibold transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Ruler, Clock, Palette, ShieldCheck, Truck } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const features = [
    {
      icon: <Sparkles className="w-12 h-12 text-amber-600" />,
      title: 'Premium Quality',
      description: 'We use only the finest materials and fittings to ensure durability and long-lasting elegance.'
    },
    {
      icon: <Ruler className="w-12 h-12 text-amber-600" />,
      title: 'Custom Designs',
      description: 'Every piece is customized to your specifications, ensuring a perfect fit for your space.'
    },
    {
      icon: <Clock className="w-12 h-12 text-amber-600" />,
      title: 'Timely Delivery',
      description: 'We value your time and ensure that your furniture is delivered and installed on schedule.'
    },
    {
      icon: <Palette className="w-12 h-12 text-amber-600" />,
      title: 'Expert Designers',
      description: 'Our team of experienced designers will help bring your vision to life with professional guidance.'
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-amber-600" />,
      title: '5-Year Warranty',
      description: 'We stand behind our products with a comprehensive warranty for your peace of mind.'
    },
    {
      icon: <Truck className="w-12 h-12 text-amber-600" />,
      title: 'Free Installation',
      description: 'Professional installation included with every purchase to ensure perfect setup.'
    }
  ];
  
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose GP Modular</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering exceptional quality and service at every step
          </p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
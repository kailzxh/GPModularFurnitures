import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Ruler, PenTool, Settings, Truck, Home } from 'lucide-react';

const DesignProcess: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const steps = [
    {
      icon: <MessageSquare className="w-10 h-10 text-white" />,
      title: 'Consultation',
      description: 'We begin with understanding your requirements, preferences, and budget.'
    },
    {
      icon: <Ruler className="w-10 h-10 text-white" />,
      title: 'Measurement',
      description: 'Our experts visit your space to take precise measurements.'
    },
    {
      icon: <PenTool className="w-10 h-10 text-white" />,
      title: 'Design',
      description: 'Our designers create custom 3D visualizations based on your requirements.'
    },
    {
      icon: <Settings className="w-10 h-10 text-white" />,
      title: 'Production',
      description: 'Once approved, we begin manufacturing with premium materials.'
    },
    {
      icon: <Truck className="w-10 h-10 text-white" />,
      title: 'Delivery',
      description: 'We carefully transport your furniture to your location.'
    },
    {
      icon: <Home className="w-10 h-10 text-white" />,
      title: 'Installation',
      description: 'Our team professionally installs your furniture for the perfect finish.'
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section 
      className="py-20 bg-gray-900 text-white"
      style={{
        backgroundImage: 'linear-gradient(rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.9)), url(https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Design Process</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            From consultation to installation, we ensure a seamless journey to your dream space
          </p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-amber-700">
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-1 h-full bg-amber-700/30 absolute top-14 left-7 ml-px hidden md:block"></div>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    <span className="mr-2 text-amber-500">{index + 1}.</span>
                    {step.title}
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-16">
          <a 
            href="/consultation" 
            className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-md transition-colors duration-300"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
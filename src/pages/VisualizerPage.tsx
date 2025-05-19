import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cuboid as Cube, Monitor, Headset as VrHeadset, Smartphone } from 'lucide-react';

const VisualizerPage: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const features = [
    {
      icon: <Cube className="w-12 h-12 text-amber-600" />,
      title: '3D Modeling',
      description: 'Experience your furniture in detailed 3D before making a decision.'
    },
    {
      icon: <Monitor className="w-12 h-12 text-amber-600" />,
      title: 'Room Layout',
      description: 'Plan your space efficiently with our interactive room layout tool.'
    },
    {
      icon: <VrHeadset className="w-12 h-12 text-amber-600" />,
      title: 'Virtual Reality',
      description: 'Step into your future space with our VR visualization experience.'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-amber-600" />,
      title: 'Mobile Compatible',
      description: 'Access the visualizer from any device, anywhere, anytime.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="py-24 bg-gray-900 text-white relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.7)), url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Room Visualizer</h1>
            <p className="text-lg md:text-xl opacity-90">
              Experience your dream space before it becomes reality with our advanced 3D visualization tools
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visualization Features</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our cutting-edge visualization tools designed to help you make confident decisions
            </p>
          </div>

          <motion.div 
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Coming Soon!</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Our advanced room visualizer is currently under development. Sign up to be notified when it launches!
          </p>
          
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
              <button
                type="submit"
                className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-md transition-colors duration-300"
              >
                Notify Me
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default VisualizerPage;
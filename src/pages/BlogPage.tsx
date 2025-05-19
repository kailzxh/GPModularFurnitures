import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CTASection from '../components/home/CTASection';

const BlogPage: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="py-24 bg-gray-900 text-white relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.7)), url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-lg md:text-xl opacity-90">
              Insights, trends, and inspiration for your living spaces
            </p>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Coming Soon</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We\'re working on bringing you the latest insights, design tips, and trends in modular furniture. 
              Stay tuned for our upcoming blog posts!
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default BlogPage;
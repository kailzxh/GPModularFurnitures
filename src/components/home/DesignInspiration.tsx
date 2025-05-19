import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Calendar, User } from 'lucide-react';

const DesignInspiration: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const blogPosts = [
    {
      id: 1,
      title: 'How to Choose the Perfect Modular Kitchen',
      excerpt: 'Discover the key factors to consider when designing a modular kitchen that combines functionality and style.',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1600',
      date: 'May 12, 2025',
      author: 'Ananya Desai'
    },
    {
      id: 2,
      title: '5 Space-Saving Furniture Ideas for Small Apartments',
      excerpt: 'Make the most of limited space with these innovative modular furniture solutions for urban living.',
      image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1600',
      date: 'Apr 28, 2025',
      author: 'Rahul Sharma'
    },
    {
      id: 3,
      title: 'Interior Design Trends to Watch in 2025',
      excerpt: 'Stay ahead of the curve with our roundup of the hottest interior design and furniture trends for 2025.',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600',
      date: 'Apr 10, 2025',
      author: 'Priya Mehta'
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Design Inspiration</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Get inspired with the latest trends and ideas for your modular furniture projects
          </p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map(post => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a 
                  href={`/blog/${post.id}`}
                  className="flex items-center text-amber-700 font-medium hover:text-amber-800 transition-colors duration-300"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <a 
            href="/blog" 
            className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-md transition-colors duration-300"
          >
            Explore All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default DesignInspiration;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import CTASection from '../components/home/CTASection';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="py-24 bg-gray-900 text-white relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.7)), url(https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About GP Modular Furniture</h1>
            <p className="text-lg md:text-xl opacity-90">
              Creating innovative modular furniture solutions since 2010
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <OurStory />
      
      {/* Our Values */}
      <OurValues />
      
      {/* Team Section */}
      {/* <TeamSection /> */}
      
      {/* Milestones */}
      <Milestones />
      
      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

const OurStory: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="w-24 h-1 bg-amber-600 mb-8"></div>
            <div className="space-y-4 text-gray-600">
              <p>
                Established in 2009 by a group of passionate furniture designers and craftsmen, GP Modular Furniture began with a simple mission: to create customized modular furniture solutions that perfectly blend functionality, aesthetics, and quality.
              </p>
              <p>
                What started as a small workshop in Bangalore has now grown into one of India\'s leading modular furniture companies, with a state-of-the-art manufacturing facility and showrooms across major cities.
              </p>
              <p>
                Over the years, we\'ve had the privilege of transforming thousands of spaces—from cozy apartments to sprawling villas, and from startup offices to corporate headquarters. Each project has added to our experience and refined our craft.
              </p>
              <p>
                Today, GP Modular stands for innovation, precision, and uncompromising quality. We continue to push the boundaries of modular furniture design, incorporating the latest technologies and materials while staying true to our founding principles.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 md:h-[500px]">
              <img 
                src="https://images.pexels.com/photos/4846461/pexels-photo-4846461.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="GP Modular workshop" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-600 rounded-lg z-[-1]"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gray-200 rounded-lg z-[-1]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const OurValues: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const values = [
    {
      title: 'Quality',
      description: 'We never compromise on materials or craftsmanship, ensuring every piece meets our exacting standards.'
    },
    {
      title: 'Innovation',
      description: 'We continuously explore new designs, materials, and technologies to create furniture that\'s ahead of its time.'
    },
    {
      title: 'Sustainability',
      description: 'We\'re committed to environmentally responsible practices, from sourcing materials to manufacturing processes.'
    },
    {
      title: 'Customer Focus',
      description: 'We listen carefully to our clients\' needs and tailor our solutions to exceed their expectations.'
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do, from design to delivery
          </p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-md border-t-4 border-amber-600"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// const TeamSection: React.FC = () => {
//   const { ref, inView } = useInView({
//     threshold: 0.1,
//     triggerOnce: true
//   });
  
//   const teamMembers = [
//     {
//       name: 'Rajiv Gupta',
//       position: 'Founder & CEO',
//       image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       bio: 'With over 20 years of experience in furniture design and manufacturing, Rajiv leads our company with vision and passion.'
//     },
//     {
//       name: 'Ananya Desai',
//       position: 'Head of Design',
//       image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       bio: 'Ananya brings her award-winning design expertise to create innovative and functional furniture solutions for our clients.'
//     },
//     {
//       name: 'Vikram Mehta',
//       position: 'Production Manager',
//       image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       bio: 'Vikram ensures that every piece of furniture is crafted to perfection, maintaining our high quality standards.'
//     },
//     {
//       name: 'Priya Sharma',
//       position: 'Customer Experience Director',
//       image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       bio: 'Priya is dedicated to making sure every client receives exceptional service from initial consultation to installation.'
//     }
//   ];
  
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };
  
//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5
//       }
//     }
//   };

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4 md:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
//           <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
//           <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
//             The passionate experts behind our exceptional furniture
//           </p>
//         </div>
        
//         <motion.div 
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//         >
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className="bg-gray-50 rounded-lg overflow-hidden group"
//             >
//               <div className="relative h-72 overflow-hidden">
//                 <img 
//                   src={member.image} 
//                   alt={member.name} 
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
//                 <p className="text-amber-700 font-medium mb-4">{member.position}</p>
//                 <p className="text-gray-600">{member.bio}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
        
//         <div className="text-center mt-12">
//           <a 
//             href="/careers" 
//             className="inline-flex items-center text-amber-700 font-medium hover:text-amber-800 transition-colors duration-300"
//           >
//             Join Our Team
//             <ArrowRight className="ml-2 w-4 h-4" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

const Milestones: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const milestones = [
    {
      year: 2009,
      title: 'Established in Bangalore',
      description: 'GP Modular Furniture was established with a small workshop and a team of skilled craftsmen.'
    },
    {
      year: 2013,
      title: 'First Showroom',
      description: 'Opened our first exclusive showroom in Indiranagar, Bangalore.'
    },
    {
      year: 2015,
      title: 'Manufacturing Expansion',
      description: 'Expanded our manufacturing facility to 50,000 sq. ft. with state-of-the-art machinery.'
    },
    {
      year: 2017,
      title: 'Design Excellence Award',
      description: 'Received the National Design Excellence Award for our innovative modular solutions.'
    },
    {
      year: 2019,
      title: 'Pan-India Presence',
      description: 'Expanded with showrooms in Mumbai, Delhi, Chennai, and Hyderabad.'
    },
    {
      year: 2021,
      title: 'Sustainable Practices',
      description: 'Implemented fully sustainable manufacturing processes and materials.'
    },
    {
      year: 2023,
      title: 'Virtual Design Studio',
      description: 'Launched our advanced 3D visualization platform for virtual room design.'
    },
    {
      year: 2025,
      title: 'Innovation Hub',
      description: 'Established our dedicated R&D center for next-generation furniture solutions.'
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Key milestones in our growth and evolution
          </p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-700 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative md:grid md:grid-cols-2 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left md:grid-flow-dense'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-amber-700 border-4 border-gray-900 hidden md:block"></div>
                
                {/* Content */}
                <div className={`relative bg-gray-800 p-6 rounded-lg shadow-md mx-4 md:mx-12 ${
                  index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
                }`}>
                  <span className="text-amber-500 font-bold text-xl mb-2 block">{milestone.year}</span>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
                
                {/* Empty Column */}
                <div className={`${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}`}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
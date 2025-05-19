import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  // const { ref, inView } = useInView({
  //   threshold: 0.1,
  //   triggerOnce: true
  // });
  
  const showrooms = [
    {
      name: 'Bangalore (Main)',
      address: '123 Furniture Lane, Indiranagar, Bangalore, Karnataka 560038',
      phone: '+91 80 1234 5678',
      email: 'bangalore@gpmodular.com',
      hours: 'Mon-Sat: 10AM - 8PM, Sun: 11AM - 6PM'
    },
    {
      name: 'Mumbai',
      address: '456 Design Street, Bandra West, Mumbai, Maharashtra 400050',
      phone: '+91 22 9876 5432',
      email: 'mumbai@gpmodular.com',
      hours: 'Mon-Sat: 10AM - 8PM, Sun: 11AM - 6PM'
    },
    {
      name: 'Delhi',
      address: '789 Decor Boulevard, South Extension, New Delhi 110049',
      phone: '+91 11 2345 6789',
      email: 'delhi@gpmodular.com',
      hours: 'Mon-Sat: 10AM - 8PM, Sun: 11AM - 6PM'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl opacity-90">
              We're here to answer any questions you might have about our modular furniture solutions
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                {isSubmitted && (
                  <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                    <p>Thank you for your message! We'll get back to you shortly.</p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    >
                      <option value="">Select Subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Information">Product Information</option>
                      <option value="Consultation Request">Consultation Request</option>
                      <option value="After Sales Support">After Sales Support</option>
                      <option value="Feedback">Feedback</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                    placeholder="Please let us know how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-md transition-colors duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                      <a href="mailto:info@gpmodular.com" className="text-gray-600 hover:text-amber-700 transition-colors duration-300">gpmf16@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                      <a href="tel:+918812345678" className="text-gray-600 hover:text-amber-700 transition-colors duration-300">+91 973 940 7305</a>
                      <p className="text-sm text-gray-500 mt-1">Mon-Sat: 9AM to 7PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Head Office</h3>
                      <p className="text-gray-600">
                        No. 58/59 1st Main Road ,4th Cross Lakshmi layout , Mylasandra, Begur Hobli, Bangalore - 560068
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-amber-50 p-8 rounded-lg border border-amber-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 7:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">11:00 AM - 4:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Showrooms */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visit Our Showrooms</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Experience our furniture collections in person at one of our showrooms
            </p>
          </div>
          
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {showrooms.map((showroom, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{showroom.name}</h3>
                  
                  <div className="space-y-4 text-gray-600">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                      <p>{showroom.address}</p>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                      <a href={`tel:${showroom.phone}`} className="hover:text-amber-700 transition-colors duration-300">
                        {showroom.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                      <a href={`mailto:${showroom.email}`} className="hover:text-amber-700 transition-colors duration-300">
                        {showroom.email}
                      </a>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                      <p>{showroom.hours}</p>
                    </div>
                  </div>
                  
                  <a 
                    href={`https://maps.google.com/?q=${showroom.address}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-md transition-colors duration-300"
                  >
                    Get Directions
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}
      
      {/* Map */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-gray-200 rounded-lg overflow-hidden h-96 shadow-md">
            <div className="w-full h-full">
              {/* Replace with actual Google Maps embed */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <p className="text-gray-600 text-center px-4">Interactive Google Map would be displayed here<br />showing our showroom locations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
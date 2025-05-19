import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '../components/home/Hero';
import FeaturedCategories from '../components/home/FeaturedCategories';
import WhyChooseUs from '../components/home/WhyChooseUs';
import DesignProcess from '../components/home/DesignProcess';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ProjectsGallery from '../components/home/ProjectsGallery';
import DesignInspiration from '../components/home/DesignInspiration';
import CTASection from '../components/home/CTASection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <WhyChooseUs />
      <DesignProcess />
      <TestimonialsSection />
      <ProjectsGallery />
      <DesignInspiration />
      <CTASection />
    </div>
  );
};

export default HomePage;
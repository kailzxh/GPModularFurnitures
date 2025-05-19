import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import BookConsultationModal from '../components/common/BookConsultationModal';

const MainLayout: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar scrolled={scrolled} openConsultation={() => setShowModal(true)} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      {showModal && <BookConsultationModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default MainLayout;
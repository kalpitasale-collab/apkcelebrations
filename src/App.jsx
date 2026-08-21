import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SuccessModal from './components/SuccessModal';
import './styles/app.css';

function App() {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const handleOpenSuccessModal = () => {
    setIsSuccessOpen(true);
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessOpen(false);
  };

  return (
    <>
      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero section */}
      <Hero />

      {/* Welcome / Story & Detailed About section */}
      <About />

      {/* Services grid mapping 9 items */}
      <Services />

      {/* Values & coordinations */}
      <WhyChooseUs />

      {/* Portfolio gallery with filters and full lightbox */}
      <Gallery />

      {/* Dynamic input form with validations */}
      <BookingForm 
        onOpenSuccessModal={handleOpenSuccessModal} 
      />

      {/* Dialers, location and contact quick links */}
      <Contact />

      {/* Branding and quick anchors list */}
      <Footer />

      {/* Popup success message triggers on form validate */}
      <SuccessModal 
        isOpen={isSuccessOpen} 
        onClose={handleCloseSuccessModal} 
      />
    </>
  );
}

export default App;

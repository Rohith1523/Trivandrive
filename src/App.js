import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import CarGallery from './components/CarGallery';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <img 
            src="/logo-sportscar.svg" 
            alt="Triviandrive Logo" 
            className="w-16 h-16 mx-auto mb-4 animate-pulse"
          />
          <h2 className="text-2xl font-bold text-gray-800">Triviandrive</h2>
          <p className="text-gray-600">Loading...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <CarGallery />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

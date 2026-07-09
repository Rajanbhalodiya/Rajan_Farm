import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Mangoes from './components/Mangoes';
import Journey from './components/Journey';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';

import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage or system preference
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-bgWarm-light dark:bg-bgWarm-dark transition-colors duration-500 overflow-x-hidden selection:bg-mango selection:text-farm-deep">
      {/* Navigation */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Sections */}
      <Hero />
      <About />
      <Stats />
      <Mangoes />
      <Journey />
      <WhyChooseUs />
      <Gallery />

      <FAQ />
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

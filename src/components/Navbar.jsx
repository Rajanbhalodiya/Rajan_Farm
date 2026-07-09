import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Our Mangoes' },
    { id: 'journey', label: 'Farm Journey' },
    { id: 'why-choose-us', label: 'Why Choose Us' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section on scroll
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'py-4 glass-nav shadow-luxury dark:shadow-luxury-dark'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 text-left focus:outline-none group"
          >
            <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-mango to-mango-dark rounded-xl shadow-glow-gold transition-all duration-300 group-hover:scale-105">
              <svg viewBox="0 0 100 100" fill="#1B4332" className="w-6 h-6">
                <path d="M50 15 C 20 15, 10 50, 30 75 C 45 90, 75 90, 85 70 C 95 50, 80 15, 50 15 Z" />
              </svg>
            </div>
            <div>
              <span className="block text-lg font-serif font-black tracking-widest text-farm dark:text-mango uppercase leading-none">
                Rajan Farm
              </span>
              <span className="block text-[9px] font-sans tracking-widest text-farm-dark/60 dark:text-white/40 uppercase font-semibold mt-0.5">
                Talala Gir • Gujarat
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-farm dark:text-mango'
                    : 'text-farm-dark/70 dark:text-white/70 hover:text-farm dark:hover:text-mango'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-farm dark:bg-mango rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Action Area */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 rounded-full bg-farm/5 dark:bg-white/5 border border-farm-dark/5 dark:border-white/5 hover:bg-farm/10 dark:hover:bg-white/10 text-farm dark:text-mango transition-all duration-300"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex px-5 py-2.5 rounded-full bg-farm hover:bg-farm-light dark:bg-mango dark:hover:bg-mango-dark text-white dark:text-farm-deep font-semibold text-xs tracking-wider uppercase shadow-md transition-all duration-300"
            >
              Order Now
            </button>

            {/* Mobile Hamburguer */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-full bg-farm/5 dark:bg-white/5 border border-farm-dark/5 dark:border-white/5 text-farm dark:text-white transition-all duration-300"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] z-40 p-6 mx-4 rounded-3xl glass-nav shadow-luxury dark:shadow-luxury-dark lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-2.5 rounded-2xl text-base font-semibold tracking-wide transition-all ${
                    activeSection === item.id
                      ? 'bg-farm/10 dark:bg-mango/15 text-farm dark:text-mango'
                      : 'text-farm-dark/80 dark:text-white/80 hover:bg-farm/5 dark:hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <hr className="border-farm-dark/10 dark:border-white/10 my-2" />
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full text-center py-3 rounded-full bg-farm dark:bg-mango text-white dark:text-farm-deep font-semibold text-sm tracking-wider uppercase shadow-md"
              >
                Order Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

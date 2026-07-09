import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import FloatingMangoes from './FloatingMangoes';
import heroOrchard from '../assets/hero_orchard.jpg';

const Hero = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Create parallax effect on background image
  const backgroundY = useTransform(scrollY, [0, 800], [0, 300]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const textY = useTransform(scrollY, [0, 300], [0, 100]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-farm-deep"
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{
          y: backgroundY,
          backgroundImage: `url(${heroOrchard})`,
        }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
      />

      {/* Dark Luxury Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-farm-deep/80 via-farm-deep/50 to-bgWarm-light dark:to-bgWarm-dark transition-colors duration-500 z-10" />

      {/* Floating Mangoes & Leaves */}
      <FloatingMangoes count={12} />

      {/* Hero Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center z-20 flex flex-col items-center">
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Tagline pill */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-mango/30 bg-white/10 text-mango font-sans text-xs font-semibold uppercase tracking-widest mb-6 shadow-glow-gold/10"
          >
            <span className="w-2 h-2 rounded-full bg-mango animate-pulse-slow" />
            {t('heroTagline')}
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black text-white leading-[1.1] tracking-tight mb-6">
            {t('heroHeading1')} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mango via-mango-light to-mango-dark text-glow-gold">
              {t('heroHeading2')}
            </span>
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl text-base sm:text-lg md:text-xl font-sans text-white/95 dark:text-white/80 font-medium tracking-wide mb-10 leading-relaxed">
            {t('heroSubheading')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-mango w-full sm:w-auto text-sm px-9 py-4 tracking-wider uppercase text-farm-deep hover:scale-105 active:scale-95 duration-300 shadow-glow-gold flex items-center justify-center gap-2"
            >
              {t('heroOrderBtn')} <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="btn-secondary bg-white/5 border-white/20 hover:border-white text-white hover:bg-white hover:text-farm-deep w-full sm:w-auto text-sm px-9 py-4 tracking-wider uppercase backdrop-blur-sm hover:scale-105 active:scale-95 duration-300 flex items-center justify-center gap-2"
            >
              {t('heroExploreBtn')}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-20 flex flex-col items-center gap-1.5 opacity-75 hover:opacity-100 transition-opacity duration-300"
      >
        <span className="text-[10px] font-sans tracking-widest text-farm dark:text-mango-light font-bold uppercase">
          {t('heroScrollDown')}
        </span>
        <div className="w-8 h-8 rounded-full border border-farm/30 dark:border-mango/30 flex items-center justify-center text-farm dark:text-mango-light">
          <ChevronDown size={14} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

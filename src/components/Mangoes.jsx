import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingCart, ShieldCheck } from 'lucide-react';
import mango1 from '../assets/mango_harvest_1.jpg';

const Mangoes = () => {
  const highlights = [
    'Naturally Ripened (Ethylene/Carbide Free)',
    'Unmatched Sweetness & Rich Juicy Pulp',
    'Intense Sweet Saffron Aroma',
    'A-Grade Export Size & Packaging',
    'Hand Picked at Perfect Maturity',
  ];



  const scrollToSection = (id, prefillData = '') => {
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

      // If contact form is present, fill it
      if (prefillData) {
        const qtyInput = document.getElementById('form-qty');
        if (qtyInput) {
          qtyInput.value = prefillData;
        }
      }
    }
  };

  return (
    <section
      id="products"
      className="relative py-24 lg:py-32 px-6 lg:px-8 bg-white dark:bg-bgWarm-dark transition-colors duration-500 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mango/5 dark:bg-mango/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-sans tracking-[0.2em] font-extrabold text-farm dark:text-mango uppercase block"
          >
            OUR HARVEST
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-farm-dark dark:text-white"
          >
            The Famous Gir Kesar
          </motion.h2>
          <div className="w-12 h-1 bg-mango mx-auto rounded-full" />
        </div>

        {/* Spotlight Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left Spotlight Image with Shine effect */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden glass-card shadow-luxury dark:shadow-luxury-dark group cursor-pointer"
          >
            <img
              src={mango1}
              alt="Fresh Gir Kesar Mangoes"
              className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
            />
            {/* Glossy shine overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <div className="absolute top-4 right-4 bg-farm/95 dark:bg-mango/95 text-white dark:text-farm-deep text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
              <ShieldCheck size={14} /> Export Standard
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-farm-deep/60 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 text-white pr-6">
              <span className="text-[10px] font-bold tracking-widest bg-mango text-farm-deep px-2 py-0.5 rounded mr-2 uppercase">
                Spotlight
              </span>
              <h3 className="text-xl font-serif font-bold mt-2">Authentic Talala Origin</h3>
              <p className="text-sm opacity-80 font-sans mt-1">
                Perfect soil chemistry combined with warm coastal breeze makes the Talala Kesar exceptionally sweet.
              </p>
            </div>
          </motion.div>

          {/* Right Features */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-sans tracking-widest font-bold text-farm dark:text-mango uppercase">
                WHY IT SPELLS LUXURY
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-black text-farm-dark dark:text-white">
                Nurtured By Nature
              </h3>
              <p className="text-farm-dark/80 dark:text-white/70 font-sans leading-relaxed">
                Gir Kesar is known globally as the "Queen of Mangoes". Our orchard lies in the heart of Talala
                Gir, where the temperature and rich soil cultivate the highest sugar levels and a distinct
                flavor profile.
              </p>
            </div>

            <ul className="space-y-4">
              {highlights.map((item, index) => (
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  key={index}
                  className="flex items-start gap-3.5"
                >
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-mango/15 dark:bg-mango/10 flex items-center justify-center text-mango">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="font-sans text-sm sm:text-base font-semibold text-farm-dark/95 dark:text-white/80">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            <button
              onClick={() => scrollToSection('contact', 'Orchard Feast Box (10 kg)')}
              className="btn-primary flex items-center gap-2 shine-hover text-sm"
            >
              <ShoppingCart size={16} /> Order Harvest Batch (10 kg)
            </button>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Mangoes;

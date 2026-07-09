import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Truck, Sparkles, Home } from 'lucide-react';
import farmView from '../assets/farm_view_1.jpg';

const About = () => {
  const features = [
    {
      icon: <Sprout className="w-6 h-6 text-farm dark:text-mango" />,
      title: 'Natural Farming',
      description: 'Cultivated using traditional organic nutrients. No artificial carbide ripening.',
    },
    {
      icon: <Truck className="w-6 h-6 text-farm dark:text-mango" />,
      title: 'Farm Fresh Delivery',
      description: 'Handpicked and direct transit to preserve moisture and freshness.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-farm dark:text-mango" />,
      title: 'Premium Quality',
      description: 'Strict grading criteria. Only the top-tier size and aroma make the cut.',
    },
    {
      icon: <Home className="w-6 h-6 text-farm dark:text-mango" />,
      title: 'Direct From Farm',
      description: 'Harvested in Talala Gir orchards and dispatched straight to your doorstep.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 px-6 lg:px-8 bg-bgWarm-light dark:bg-bgWarm-dark transition-colors duration-500 overflow-hidden"
    >
      {/* Decorative ambient glows */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-mango/10 dark:bg-mango/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-farm/10 dark:bg-farm/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Text / Info Panel */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-xs font-sans tracking-[0.2em] font-extrabold text-farm dark:text-mango uppercase block"
              >
                OUR HERITAGE
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-farm-dark dark:text-white leading-tight"
              >
                Welcome To <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-farm via-mango to-mango-dark">
                  Rajan Farm
                </span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-6 text-farm-dark/80 dark:text-white/70 font-sans text-base sm:text-lg leading-relaxed font-normal"
            >
              <p>
                At Rajan Farm, we grow premium-quality{' '}
                <strong className="text-farm dark:text-mango font-semibold">Gir Kesar Mangoes</strong>{' '}
                using natural farming methods in the fertile lands of Talala, Gir. Our family has been
                dedicated to agriculture, keeping traditional methods alive to yield authentic taste.
              </p>
              <p>
                Our mangoes are carefully nurtured, naturally ripened, and harvested at the perfect stage
                to deliver unmatched sweetness, rich saffron-coloured pulp, and a beautiful aroma.
              </p>
              <p>
                Every single mango is handpicked directly from our farm and delivered fresh to clients,
                bringing the authentic taste of Gujarat directly to your home.
              </p>
            </motion.div>

            {/* Farm photo frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative rounded-3xl overflow-hidden aspect-[16/9] shadow-luxury dark:shadow-luxury-dark group cursor-pointer"
            >
              <img
                src={farmView}
                alt="Rajan Farm Orchard"
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-farm-deep/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 text-white z-10">
                <p className="font-serif italic text-lg text-mango-light">Golden Sunshine of Talala</p>
                <p className="text-xs uppercase tracking-widest opacity-80 mt-1">Our Orchard Vista</p>
              </div>
            </motion.div>
          </div>

          {/* Right Card Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="glass-card rounded-3xl p-8 hover:-translate-y-2 flex flex-col justify-between h-64 cursor-default group"
              >
                <div className="w-12 h-12 rounded-2xl bg-farm/10 dark:bg-white/5 flex items-center justify-center border border-farm/10 dark:border-white/10 group-hover:scale-110 group-hover:bg-mango/20 transition-all duration-300">
                  {feature.icon}
                </div>
                <div className="space-y-2.5 mt-8">
                  <h3 className="text-lg font-serif font-bold text-farm-dark dark:text-white group-hover:text-mango transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-sans text-farm-dark/70 dark:text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

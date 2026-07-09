import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Award, Truck, Shield, Flame, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const points = [
    {
      icon: <Sprout className="w-8 h-8 text-farm dark:text-mango" />,
      title: 'Natural Farming',
      desc: 'Cultivated with pure traditional methods. Zero chemical ripening agents or harmful pesticides.',
    },
    {
      icon: <Award className="w-8 h-8 text-farm dark:text-mango" />,
      title: 'Premium Gir Kesar',
      desc: 'Sourced from Talala Gir, the geographical indicator (GI) origin famous for genuine saffron kesar.',
    },
    {
      icon: <Truck className="w-8 h-8 text-farm dark:text-mango" />,
      title: 'Direct Delivery',
      desc: 'Direct transit from trees to your kitchen, cutting out middle agents and storage delays.',
    },
    {
      icon: <Shield className="w-8 h-8 text-farm dark:text-mango" />,
      title: 'Best Quality',
      desc: 'Meticulous manual sorting ensures only perfect shape, size, skin, and fragrance make the cut.',
    },
    {
      icon: <Flame className="w-8 h-8 text-farm dark:text-mango" />,
      title: 'Fresh Harvest',
      desc: 'Plucked only at the perfect ripeness window, maintaining maximum flavor longevity.',
    },
    {
      icon: <Heart className="w-8 h-8 text-farm dark:text-mango" />,
      title: 'Pure Satisfaction',
      desc: 'We guarantee the richest taste, juiciest pulp, and unforgettable Kesar aroma in every box.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="why-choose-us"
      className="relative py-24 lg:py-32 px-6 lg:px-8 bg-white dark:bg-bgWarm-dark transition-colors duration-500 overflow-hidden"
    >
      {/* Background soft lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-mango/10 dark:bg-mango/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-farm/10 dark:bg-farm/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <span className="text-xs font-sans tracking-[0.2em] font-extrabold text-farm dark:text-mango uppercase block">
            OUR PROMISE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-farm-dark dark:text-white">
            Why Choose Rajan Farm
          </h2>
          <div className="w-12 h-1 bg-mango mx-auto rounded-full" />
        </div>

        {/* Points Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card rounded-3xl p-8 hover:-translate-y-2 flex flex-col items-start space-y-6 cursor-default group"
            >
              {/* Icon shell */}
              <div className="w-16 h-16 rounded-2xl bg-farm/5 dark:bg-white/5 border border-farm/10 dark:border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-mango/20 group-hover:border-mango/40 group-hover:scale-110">
                {point.icon}
              </div>

              {/* Title & Desc */}
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-bold text-farm-dark dark:text-white group-hover:text-mango transition-colors duration-300">
                  {point.title}
                </h3>
                <p className="text-sm sm:text-base font-sans text-farm-dark/70 dark:text-white/60 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

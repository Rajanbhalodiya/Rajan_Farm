import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Flower, Sun, Scissors, Package, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Journey = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <Leaf className="w-5 h-5" />,
      titleKey: 'step1Title',
      descKey: 'step1Desc',
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      titleKey: 'step2Title',
      descKey: 'step2Desc',
    },
    {
      icon: <Flower className="w-5 h-5" />,
      titleKey: 'step3Title',
      descKey: 'step3Desc',
    },
    {
      icon: <Sun className="w-5 h-5" />,
      titleKey: 'step4Title',
      descKey: 'step4Desc',
    },
    {
      icon: <Scissors className="w-5 h-5" />,
      titleKey: 'step5Title',
      descKey: 'step5Desc',
    },
    {
      icon: <Package className="w-5 h-5" />,
      titleKey: 'step6Title',
      descKey: 'step6Desc',
    },
    {
      icon: <Send className="w-5 h-5" />,
      titleKey: 'step7Title',
      descKey: 'step7Desc',
    },
  ];

  return (
    <section
      id="journey"
      className="relative py-24 lg:py-32 px-6 lg:px-8 bg-bgWarm-light dark:bg-bgWarm-dark transition-colors duration-500 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-farm/5 dark:bg-farm/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-24">
          <span className="text-xs font-sans tracking-[0.2em] font-extrabold text-farm dark:text-mango uppercase block">
            {t('journeySubtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-farm-dark dark:text-white">
            {t('journeyTitle')}
          </h2>
          <div className="w-12 h-1 bg-mango mx-auto rounded-full" />
        </div>

        {/* Timeline body */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-dashed bg-gradient-to-b from-farm/40 via-mango/40 to-farm/10 dark:from-white/10 dark:via-mango/20 dark:to-white/5 -translate-x-1/2 pointer-events-none" />

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left / Right content container */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.8, type: 'spring' }}
                      className="glass-card rounded-3xl p-8 hover:shadow-luxury dark:hover:shadow-luxury-dark relative"
                    >
                      {/* Step Indicator */}
                      <span className="absolute top-6 right-6 font-serif text-3xl font-black text-farm/10 dark:text-white/5 select-none">
                        0{idx + 1}
                      </span>

                      <h3 className="text-xl font-serif font-bold text-farm dark:text-mango mb-3">
                        {t(step.titleKey)}
                      </h3>
                      <p className="text-sm sm:text-base text-farm-dark/70 dark:text-white/60 font-sans leading-relaxed">
                        {t(step.descKey)}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center Dot with Icon */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                      className="w-14 h-14 rounded-full bg-white dark:bg-farm-deep border-2 border-farm dark:border-mango flex items-center justify-center text-farm dark:text-mango shadow-lg shadow-farm/10 dark:shadow-black/50"
                    >
                      {step.icon}
                    </motion.div>
                  </div>

                  {/* Spacer for layout balancing on desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;

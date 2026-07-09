import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Counter = ({ target, suffix = '', duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const stepTime = Math.max(Math.floor((duration * 1000) / end), 16); // cap at ~60fps
    const stepValue = Math.ceil(end / (1000 / stepTime));

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const { t } = useLanguage();

  const statList = [
    { target: 3, suffix: '+', labelKey: 'statExp' },
    { target: 500, suffix: '+', labelKey: 'statHappy' },
    { target: 100, suffix: '%', labelKey: 'statNatural' },
    { target: 1000, suffix: '+', labelKey: 'statDelivered' },
  ];

  return (
    <section className="relative py-20 px-6 lg:px-8 bg-farm dark:bg-farm-deep transition-colors duration-500 overflow-hidden">
      {/* Absolute graphic elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,183,3,0.15),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statList.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="text-center space-y-2 md:space-y-4"
            >
              {/* Animated number */}
              <div className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-mango text-glow-gold">
                <Counter target={stat.target} suffix={stat.suffix} />
              </div>
              
              {/* Separator line */}
              <div className="w-8 h-[2px] bg-white/20 mx-auto rounded" />

              {/* Label */}
              <p className="text-xs sm:text-sm md:text-base font-sans font-bold tracking-widest text-white/80 uppercase">
                {t(stat.labelKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

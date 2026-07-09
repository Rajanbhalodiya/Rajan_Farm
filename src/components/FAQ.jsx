import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="glass-card rounded-3xl overflow-hidden mb-4">
      <button
        onClick={toggleOpen}
        className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none group"
      >
        <span className="text-base sm:text-lg font-serif font-bold text-farm-dark dark:text-white group-hover:text-farm dark:group-hover:text-mango transition-colors duration-300">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
            isOpen
              ? 'bg-farm border-farm text-white dark:bg-mango dark:border-mango dark:text-farm-deep'
              : 'border-farm-dark/10 dark:border-white/10 text-farm-dark dark:text-white'
          }`}
        >
          <ChevronDown size={14} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 sm:px-8 sm:pb-8 border-t border-farm-dark/5 dark:border-white/5 pt-4 text-sm sm:text-base font-sans text-farm-dark/70 dark:text-white/60 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      question: 'How are the mangoes ripened?',
      answer: 'We ripen our Gir Kesar mangoes naturally using traditional grass-hay beds in well-ventilated chambers. We strictly avoid calcium carbide, ethylene gas, or any chemical ripening agents to ensure authentic taste, health safety, and pure natural aroma.',
    },
    {
      question: 'Do you deliver across Gujarat?',
      answer: 'Yes! We deliver exclusively across all major cities and towns in Gujarat (including Ahmedabad, Surat, Vadodara, Rajkot, Jamnagar, and Bhavnagar). To ensure the absolute freshness of our handpicked Kesar mangoes, we do not offer delivery outside of Gujarat at this time.',
    },
    {
      question: 'What is the minimum order quantity?',
      answer: 'Our minimum order quantity is 10 kg (Orchard Feast Box). To maintain harvest freshness and packaging standards directly from our Talala Gir orchards, we only dispatch orders of 10 kg or more.',
    },
    {
      question: 'Are the mangoes naturally grown?',
      answer: 'Yes, absolutely. Our orchards in Talala Gir follow sustainable natural farming. We use organic cow manure, vermicompost, and home-brewed organic plant protectants, honoring nature to bring you premium, residue-free fruit.',
    },
  ];

  const handleToggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="relative py-24 lg:py-32 px-6 lg:px-8 bg-bgWarm-light dark:bg-bgWarm-dark transition-colors duration-500 overflow-hidden"
    >
      {/* Background glow decoration */}
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-mango/5 dark:bg-mango/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <span className="text-xs font-sans tracking-[0.2em] font-extrabold text-farm dark:text-mango uppercase block">
            QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-farm-dark dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-1 bg-mango mx-auto rounded-full" />
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIdx === idx}
              toggleOpen={() => handleToggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

import React from 'react';
import headIcon from '../assets/head.ico';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

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

  const socials = [
    {
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      link: 'https://www.instagram.com/rajan_farm?utm_source=qr',
      label: 'Instagram',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      ),
      link: 'https://wa.me/919510459100',
      label: 'WhatsApp',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      link: 'https://share.google/hUw6H3iXRVgYpFuOV',
      label: 'Google Maps',
    },
  ];

  return (
    <footer className="relative bg-farm-deep text-white border-t border-white/5 transition-colors duration-500 overflow-hidden">
      {/* Decorative vector */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-gradient-to-tr from-mango/5 via-farm/5 to-transparent pointer-events-none rounded-tl-full" />

      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-12 mb-12">
          {/* Logo & Info */}
          <div className="md:col-span-6 space-y-6">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2.5 text-left focus:outline-none group"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-mango to-mango-dark rounded-xl shadow-glow-gold">
                <img src={headIcon} alt="logo" className="w-6 h-6 object-contain" />
              </div>
              <div>
                <span className="block text-lg font-serif font-black tracking-widest text-mango uppercase leading-none">
                  Rajan Farm
                </span>
                <span className="block text-[9px] font-sans tracking-widest text-white/40 uppercase font-semibold mt-0.5">
                  Talala Gir • Gujarat
                </span>
              </div>
            </button>

            <p className="max-w-md text-sm font-sans text-white/60 leading-relaxed">
              {t('footerDesc')}
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-mango hover:text-farm-deep flex items-center justify-center text-white/80 transition-all duration-300 shadow hover:shadow-glow-gold/20"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-sm font-sans font-bold tracking-widest text-mango uppercase">
              {t('footerQuick')}
            </h4>
            <ul className="space-y-3.5">
              {[
                { id: 'home', labelKey: 'navHome' },
                { id: 'about', labelKey: 'navAbout' },
                { id: 'products', labelKey: 'navProducts' },
                { id: 'journey', labelKey: 'navJourney' },
                { id: 'why-choose-us', labelKey: 'navWhyUs' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm font-sans text-white/60 hover:text-mango transition-colors duration-300"
                  >
                    {t(item.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Links */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-sm font-sans font-bold tracking-widest text-mango uppercase">
              {t('footerExplore')}
            </h4>
            <ul className="space-y-3.5">
              {[
                { id: 'gallery', labelKey: 'navGallery' },
                { id: 'faq', labelKey: 'faqTitle' },
                { id: 'contact', labelKey: 'navOrderNow' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm font-sans text-white/60 hover:text-mango transition-colors duration-300"
                  >
                    {t(item.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Panel */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-white/40 font-semibold tracking-wide">
          <p>{t('footerRights')}</p>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-mango transition-colors duration-300">
              {t('privacyPolicy')}
            </a>
            <a href="#home" className="hover:text-mango transition-colors duration-300">
              {t('termsOfService')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

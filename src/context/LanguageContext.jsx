import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../utils/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    const saved = localStorage.getItem('language');
    if (saved && ['en', 'gu', 'hi'].includes(saved)) {
      return saved;
    }
    return 'en';
  });

  const setLanguage = (lang) => {
    if (['en', 'gu', 'hi'].includes(lang)) {
      setLanguageState(lang);
      localStorage.setItem('language', lang);
    }
  };

  const t = (key) => {
    if (!translations[language] || !translations[language][key]) {
      // Fallback to English
      return translations['en'][key] || key;
    }
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

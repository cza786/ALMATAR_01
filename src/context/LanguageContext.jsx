'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations/dictionary';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('almatar_lang');
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
      setLang(savedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('almatar_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (lang === 'ar') {
      document.body.classList.add('rtl-mode');
    } else {
      document.body.classList.remove('rtl-mode');
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = (keyPath) => {
    const keys = keyPath.split('.');
    let current = translations[lang];
    for (const k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        // Fallback to English if translation key missing
        let fallback = translations['en'];
        for (const fk of keys) {
          if (fallback && fallback[fk] !== undefined) {
            fallback = fallback[fk];
          } else {
            return keyPath;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

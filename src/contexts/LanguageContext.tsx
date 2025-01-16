import React, { createContext, useContext, useState } from 'react';
import translations from '../translations';

type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  t: (key: string) => string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as Language) || 'en';
  });

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === 'en' ? 'tr' : 'en';
      localStorage.setItem('language', newLang);
      return newLang;
    });
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
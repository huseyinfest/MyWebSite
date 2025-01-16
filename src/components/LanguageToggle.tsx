import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle language"
    >
      {language === 'en' ? 'TR' : 'EN'}
    </button>
  );
}
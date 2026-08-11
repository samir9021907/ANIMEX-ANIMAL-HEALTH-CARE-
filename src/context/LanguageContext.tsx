import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('animex_lang') as Language;
    if (saved) return saved;
    return 'en';
  });

  const triggerGoogleTranslate = (langCode: string) => {
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    }
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('animex_lang', lang);

    triggerGoogleTranslate(lang);
    setTimeout(() => triggerGoogleTranslate(lang), 400);
  };

  useEffect(() => {
    const saved = localStorage.getItem('animex_lang');
    if (saved && saved !== 'en') {
      setTimeout(() => triggerGoogleTranslate(saved), 800);
    }
  }, []);

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language]!;
    }
    // Fallback to English if translation key missing
    if (translations[key] && translations[key].en) {
      return translations[key].en!;
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { Language } from '../../i18n/translations';

interface LanguageSwitcherProps {
  variant?: 'topbar' | 'header' | 'mobile';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ variant = 'topbar' }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string; nativeName: string; flag: string }[] = [
    { code: 'en', label: 'English', nativeName: 'English', flag: '🇬🇧' },
    { code: 'hi', label: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳' },
    { code: 'mr', label: 'Marathi', nativeName: 'मराठी', flag: '🚩' },
  ];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLangObj = languages.find(l => l.code === language) || languages[0];

  if (variant === 'mobile') {
    return (
      <div className="w-full pt-2 pb-1 border-t border-slate-100 dark:border-slate-800">
        <div className="text-xs font-bold text-slate-400 mb-2 px-1 flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-animex-orange-500" />
          <span>Select Language / भाषा निवडा</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {languages.map((lang) => {
            const isSelected = language === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl border text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-animex-blue-600 text-white border-animex-blue-600 shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-animex-blue-400'
                }`}
              >
                <span className="text-base leading-none mb-1">{lang.flag}</span>
                <span>{lang.nativeName}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
          variant === 'topbar'
            ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
            : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
        }`}
        title="Switch Language / भाषा बदला"
      >
        <Globe className="w-3.5 h-3.5 text-animex-orange-400 animate-pulse" />
        <span className="text-xs">{currentLangObj.flag}</span>
        <span className="font-extrabold uppercase tracking-wide">{currentLangObj.code}</span>
        <span className="hidden sm:inline-block font-semibold">({currentLangObj.nativeName})</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-3 py-1.5 border-b border-slate-100 dark:border-slate-800 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
            Choose Language
          </div>
          {languages.map((lang) => {
            const isSelected = language === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold transition-colors ${
                  isSelected
                    ? 'bg-animex-blue-50 dark:bg-slate-800/80 text-animex-blue-600 dark:text-sky-400 font-bold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{lang.flag}</span>
                  <div className="flex flex-col text-left">
                    <span>{lang.nativeName}</span>
                    <span className="text-[10px] text-slate-400 font-normal">{lang.label}</span>
                  </div>
                </div>
                {isSelected && <Check className="w-4 h-4 text-animex-orange-500" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

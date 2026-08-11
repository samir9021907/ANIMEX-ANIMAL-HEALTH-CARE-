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
    { code: 'gu', label: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🌾' },
    { code: 'pa', label: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: '🌾' },
    { code: 'kn', label: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🌺' },
    { code: 'ta', label: 'Tamil', nativeName: 'தமிழ்', flag: '🌺' },
    { code: 'te', label: 'Telugu', nativeName: 'తెలుగు', flag: '🌺' },
    { code: 'bn', label: 'Bengali', nativeName: 'বাংলা', flag: '🌾' },
    { code: 'ml', label: 'Malayalam', nativeName: 'മലയാളം', flag: '🌾' },
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
          <span>Select Language / भाषा निवडा (10 Languages)</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 max-h-48 overflow-y-auto p-1">
          {languages.map((lang) => {
            const isSelected = language === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`flex items-center justify-start px-2.5 py-1.5 rounded-xl border text-xs font-bold transition-all gap-1.5 ${
                  isSelected
                    ? 'bg-animex-blue-600 text-white border-animex-blue-600 shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-animex-blue-400'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.nativeName}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left z-30" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 rounded-full font-bold transition-all border ${
          variant === 'topbar'
            ? 'text-[11px] px-2.5 py-1 bg-slate-800/80 hover:bg-slate-800 text-slate-200 border-slate-700'
            : 'text-xs px-3.5 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-animex-orange-500'
        }`}
        aria-label="Select language"
      >
        <Globe className="w-3.5 h-3.5 text-animex-orange-500 shrink-0" />
        <span className="flex items-center gap-1">
          <span>{currentLangObj.flag}</span>
          <span>{currentLangObj.nativeName} ({currentLangObj.code.toUpperCase()})</span>
        </span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 py-2 z-50 animate-in fade-in zoom-in-95 duration-150 max-h-72 overflow-y-auto">
          <div className="px-3 py-1.5 border-b border-slate-100 dark:border-slate-800 text-[10px] font-black uppercase text-slate-400 tracking-wider">
            Select Language (१० भाषा)
          </div>

          <div className="py-1">
            {languages.map((lang) => {
              const isSelected = language === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-2 text-xs font-bold transition-colors ${
                    isSelected
                      ? 'bg-animex-blue-50 dark:bg-slate-800 text-animex-blue-600 dark:text-sky-400'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">{lang.flag}</span>
                    <div className="flex flex-col items-start">
                      <span className="font-extrabold">{lang.nativeName}</span>
                      <span className="text-[10px] text-slate-400 font-normal">{lang.label}</span>
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-animex-blue-600 dark:text-sky-400" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

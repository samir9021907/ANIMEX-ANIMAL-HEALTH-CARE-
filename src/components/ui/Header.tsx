import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../../context/LanguageContext';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Search, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ShieldCheck, 
  Building2, 
  MessageSquare,
  Award,
  Stethoscope,
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  darkMode,
  setDarkMode,
  onOpenSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { id: 'home', label: t('navHome'), icon: Sparkles },
    { id: 'products', label: t('navProducts'), icon: ShieldCheck },
    { id: 'disease-solutions', label: t('navDiseases'), icon: Stethoscope },
    { id: 'dealer-locator', label: t('navDealers'), icon: MapPin },
    { id: 'blogs', label: t('navBlogs'), icon: Award },
    { id: 'contact', label: t('navContact'), icon: Building2 },
  ];

  return (
    <header className="sticky top-0 z-50 transition-colors duration-300">
      {/* Top Corporate Contact Bar */}
      <div className="bg-gradient-to-r from-animex-blue-900 via-animex-blue-800 to-animex-blue-900 text-white text-xs py-2 px-4 border-b border-animex-blue-700/50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <a href="tel:18001234567" className="flex items-center gap-1.5 hover:text-animex-orange-500 transition-colors">
              <PhoneCall className="w-3.5 h-3.5 text-animex-orange-500" />
              <span>{t('tollFree')}: <strong>1800-123-4567</strong></span>
            </a>
            <a href="mailto:info@animexhealth.com" className="hidden sm:flex items-center gap-1.5 hover:text-animex-orange-500 transition-colors">
              <Mail className="w-3.5 h-3.5 text-animex-green-500" />
              <span>info@animexhealth.com</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden lg:inline-block text-slate-300 text-[11px]">
              {t('isoCertified')}
            </span>

            {/* Language Switcher Dropdown */}
            <LanguageSwitcher variant="topbar" />

            {/* Admin CMS Access Link */}
            <button
              onClick={() => setActiveTab('admin')}
              className="flex items-center gap-1 text-[11px] bg-animex-orange-500/20 text-animex-orange-400 hover:bg-animex-orange-500 hover:text-white px-2.5 py-0.5 rounded-full border border-animex-orange-500/30 transition-all font-semibold"
            >
              <ShieldCheck className="w-3 h-3" />
              <span>{t('cmsAdmin')}</span>
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1 rounded-full hover:bg-animex-blue-700 text-slate-200 hover:text-white transition-colors"
              title="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-300" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Glassmorphism Header Bar */}
      <div className="glass-panel border-b shadow-sm py-3 px-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => setActiveTab('home')}
            className="cursor-pointer"
          >
            <BrandLogo size="md" />
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/60 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200/50 dark:border-slate-800">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setActiveTab(link.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-animex-blue-600 text-white shadow-md shadow-animex-blue-600/25 scale-[1.02]'
                      : 'text-slate-700 dark:text-slate-300 hover:text-animex-blue-600 dark:hover:text-sky-400 hover:bg-white/60 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-animex-orange-400' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => {
                setActiveTab('products');
                if (onOpenSearch) onOpenSearch();
              }}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-animex-blue-50 dark:hover:bg-slate-700 hover:text-animex-blue-600 transition-colors"
              title={t('searchPlaceholder')}
            >
              <Search className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/919021590368?text=Hello%20ANIMEX%20Health%20Care,%20I%20want%20product%20information"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-animex-green-600 to-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-md shadow-emerald-500/20 hover:opacity-95 transition-all hover:scale-105"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>{t('whatsappInquiry')}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-animex-blue-600 text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{link.label}</span>
              </button>
            );
          })}
          
          {/* Mobile Language Switcher */}
          <LanguageSwitcher variant="mobile" />

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setActiveTab('admin');
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full bg-animex-blue-50 dark:bg-slate-800 text-animex-blue-600 dark:text-sky-400 py-2.5 rounded-xl font-bold text-xs"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{t('cmsAdmin')}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


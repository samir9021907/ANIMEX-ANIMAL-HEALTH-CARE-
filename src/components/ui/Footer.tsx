import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert, 
  Award,
  Send
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { t } = useLanguage();

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const speciesList = [
    t('animalCOW'),
    t('animalBUFFALO'),
    t('animalGOAT'),
    t('animalSHEEP'),
    t('animalPOULTRY'),
    t('animalHORSE'),
    t('animalCAMEL'),
    t('animalPIG'),
    t('animalPET')
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-animex-blue-950 to-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
        
        {/* Brand Overview & Certification */}
        <div className="lg:col-span-2 space-y-4">
          <BrandLogo size="lg" className="text-white" />
          
          <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-md">
            {t('footerAboutText')}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="flex items-center gap-2 bg-animex-blue-900/60 border border-animex-blue-600/40 px-3 py-1.5 rounded-lg text-xs font-semibold text-sky-300">
              <Award className="w-4 h-4 text-animex-orange-500" />
              <span>GMP Certified Plant</span>
            </div>
            <div className="flex items-center gap-2 bg-animex-blue-900/60 border border-animex-blue-600/40 px-3 py-1.5 rounded-lg text-xs font-semibold text-sky-300">
              <CheckCircle2 className="w-4 h-4 text-animex-green-500" />
              <span>ISO 9001:2015</span>
            </div>
          </div>

          <div className="pt-2 text-xs text-slate-400 space-y-1.5">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-animex-orange-500 shrink-0 mt-0.5" />
              <span>0208/RVN Bahadurpur, Kopargaon, Dist. Ahmednagar - 423605, Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-animex-green-500 shrink-0" />
              <span>{t('tollFree')}: +91 9307990811 / 1800-123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-animex-blue-500 shrink-0" />
              <span>animexanimalhealthcare@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <div className="space-y-3">
          <h4 className="text-sm font-extrabold uppercase tracking-wider text-white border-b border-animex-orange-500/40 pb-1.5 inline-block">
            {t('navProducts')}
          </h4>
          <ul className="space-y-2 text-xs">
            {['Calcium Supplements', 'Mineral Mixtures', 'Liver Tonics', 'Uterine Boosters', 'Gut Health & Probiotics', 'Poultry Vitamins', 'Goat Nutrition', 'Herbal Veterinary'].map((cat, idx) => (
              <li key={idx}>
                <button
                  onClick={() => setActiveTab('products')}
                  className="hover:text-animex-orange-400 transition-colors flex items-center gap-1.5 text-slate-400"
                >
                  <ArrowRight className="w-3 h-3 text-animex-orange-500" />
                  <span>{cat}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Animal Species Covered */}
        <div className="space-y-3">
          <h4 className="text-sm font-extrabold uppercase tracking-wider text-white border-b border-animex-green-500/40 pb-1.5 inline-block">
            {t('categoriesTitle')}
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            {speciesList.map((species, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-animex-green-500" />
                <span>{species}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter & Dealer Application Link */}
        <div className="space-y-4">
          <h4 className="text-sm font-extrabold uppercase tracking-wider text-white border-b border-animex-blue-500/40 pb-1.5 inline-block">
            {t('dealerTitle')}
          </h4>
          <p className="text-xs text-slate-400">
            Subscribe to veterinary health updates, seasonal livestock advice, and new product releases.
          </p>

          <form onSubmit={handleNewsletter} className="space-y-2">
            <div className="relative">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter email address..."
                className="w-full bg-slate-800/80 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-animex-orange-500 transition-colors"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 bg-animex-orange-500 hover:bg-animex-orange-600 text-white px-3 rounded-lg flex items-center justify-center transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            {subscribed && (
              <p className="text-[11px] text-animex-green-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Subscribed successfully!</span>
              </p>
            )}
          </form>

          <div className="pt-2">
            <button
              onClick={() => setActiveTab('dealer-locator')}
              className="w-full bg-gradient-to-r from-animex-blue-600 to-animex-blue-700 hover:from-animex-blue-500 hover:to-animex-blue-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <ShieldAlert className="w-4 h-4 text-animex-orange-400" />
              <span>{t('becomeDealerTitle')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Disclaimer & Copyright */}
      <div className="max-w-7xl mx-auto px-4 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
        <div>
          © {new Date().getFullYear()} {t('rightsReserved')}
        </div>
        <div className="flex gap-4">
          <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          <span>•</span>
          <button onClick={() => setActiveTab('admin')} className="hover:text-animex-orange-400 transition-colors">{t('cmsAdmin')}</button>
        </div>
      </div>
    </footer>
  );
};


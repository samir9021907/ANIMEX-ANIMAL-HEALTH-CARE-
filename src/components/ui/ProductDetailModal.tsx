import React, { useState } from 'react';
import { Product } from '../../types';
import { 
  X, 
  CheckCircle2, 
  MessageSquare, 
  Download, 
  Share2, 
  ShieldCheck, 
  Sparkles, 
  Droplet,
  Stethoscope,
  ChevronRight,
  PhoneCall
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const [selectedPack, setSelectedPack] = useState<string>('');
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!product) return null;

  const currentPack = selectedPack || product.variants[0] || 'Default Pack';

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inquiryName && inquiryPhone) {
      const messageText = `Hello ANIMEX Health Care,\n\nI want product inquiry / quote for:\n📦 Product: ${product.title}\n📏 Pack Size: ${currentPack}\n\n👤 Name: ${inquiryName}\n📞 Phone: ${inquiryPhone}`;
      const waUrl = `https://wa.me/919021590368?text=${encodeURIComponent(messageText)}`;

      // Automatically launch WhatsApp with pre-filled inquiry details
      window.open(waUrl, '_blank');

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl relative my-8 max-h-[90vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 md:p-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Image & Pack Selector */}
            <div className="md:col-span-5 space-y-4">
              <div className="h-72 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 relative shadow-inner">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-animex-orange-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-md">
                  {product.category}
                </span>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-extrabold uppercase text-slate-500">Available Pack Sizes</label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedPack(v)}
                      className={`text-xs font-extrabold px-3 py-2 rounded-xl border transition-all ${
                        currentPack === v
                          ? 'bg-animex-blue-600 text-white border-animex-blue-600 shadow-md'
                          : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-animex-blue-400'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Details */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-extrabold uppercase text-slate-400">
                <span>SKU: {product.sku}</span>
                <span>•</span>
                <div className="flex gap-1">
                  {product.targetAnimals.map(a => (
                    <span key={a} className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md">
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-sans leading-tight">
                {product.title}
              </h2>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {product.description}
              </p>

              {/* Key Clinical Benefits */}
              <div className="space-y-2 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-black uppercase text-animex-orange-500 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Key Clinical Benefits</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {product.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-animex-green-500 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Dosage */}
              <div className="bg-animex-blue-50 dark:bg-slate-800 p-3.5 rounded-2xl border border-animex-blue-200 dark:border-slate-700 text-xs space-y-1">
                <span className="font-extrabold text-animex-blue-600 dark:text-sky-400 uppercase tracking-wider block">
                  Recommended Dosage & Directions:
                </span>
                <p className="text-slate-700 dark:text-slate-300 font-medium">
                  {product.dosage}
                </p>
              </div>

            </div>

          </div>

          {/* Active Ingredients & Composition Table */}
          <div className="space-y-3 border-t border-slate-200 dark:border-slate-800 pt-6">
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-animex-blue-600" />
              <span>Active Composition (Per Serving)</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {product.ingredients.map((ing, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
                  <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">{ing.name}</span>
                  <span className="text-xs font-black text-animex-orange-500">{ing.quantity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="bg-gradient-to-r from-animex-blue-900 via-slate-900 to-animex-blue-950 p-6 rounded-3xl text-white space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-black font-sans">Request Dealer Quotation / Bulk Pricing</h4>
                <p className="text-[11px] text-slate-300">Selected Pack Size: <strong>{currentPack}</strong></p>
              </div>

              <a
                href={`https://wa.me/919021590368?text=Hello%20ANIMEX,%20I%20want%20quote%20for%20${encodeURIComponent(product.title)}%20(${encodeURIComponent(currentPack)})`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-extrabold px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-md hover:scale-105 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>

            {submitted ? (
              <div className="bg-emerald-500/20 border border-emerald-400 text-emerald-300 p-4 rounded-2xl text-xs font-bold text-center flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Redirecting your inquiry for {product.title} to WhatsApp! Our executive will connect shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  required
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  placeholder="Your Name *"
                  className="bg-slate-800/90 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-animex-orange-500"
                />
                <input
                  type="tel"
                  required
                  value={inquiryPhone}
                  onChange={(e) => setInquiryPhone(e.target.value)}
                  placeholder="Phone Number *"
                  className="bg-slate-800/90 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-animex-orange-500"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-600 text-white font-extrabold text-xs py-2 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>Send Inquiry on WhatsApp</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

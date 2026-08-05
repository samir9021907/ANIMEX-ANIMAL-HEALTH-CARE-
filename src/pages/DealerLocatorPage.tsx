import React, { useState } from 'react';
import { Dealer } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Building2, 
  Search, 
  CheckCircle2, 
  ShieldCheck, 
  UserCheck, 
  PlusCircle,
  X
} from 'lucide-react';

interface DealerLocatorPageProps {
  dealers: Dealer[];
  onRegisterDealer: (dealerData: any) => void;
  autoOpenModal?: boolean;
}

export const DealerLocatorPage: React.FC<DealerLocatorPageProps> = ({ dealers, onRegisterDealer, autoOpenModal = false }) => {
  const { t } = useLanguage();
  const [selectedState, setSelectedState] = useState('ALL');
  const [selectedDistrict, setSelectedDistrict] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showRegModal, setShowRegModal] = useState(autoOpenModal);

  // Form states
  const [firmName, setFirmName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [regSuccess, setRegSuccess] = useState(false);

  const states = ['ALL', 'Gujarat', 'Maharashtra', 'Haryana', 'Andhra Pradesh', 'Punjab', 'Rajasthan', 'Uttar Pradesh'];

  const filteredDealers = dealers.filter(d => {
    if (selectedState !== 'ALL' && d.state.toLowerCase() !== selectedState.toLowerCase()) return false;
    if (selectedDistrict !== 'ALL' && d.district.toLowerCase() !== selectedDistrict.toLowerCase()) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchFirm = d.firmName.toLowerCase().includes(q);
      const matchContact = d.contactName.toLowerCase().includes(q);
      const matchDistrict = d.district.toLowerCase().includes(q);
      if (!matchFirm && !matchContact && !matchDistrict) return false;
    }
    return true;
  });

  const handleSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (firmName && contactName && phone) {
      onRegisterDealer({
        firmName,
        contactName,
        phone,
        email,
        district,
        state,
        address
      });
      setRegSuccess(true);
      setTimeout(() => {
        setRegSuccess(false);
        setShowRegModal(false);
        setFirmName('');
        setContactName('');
        setPhone('');
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-animex-blue-900 to-slate-900 p-8 sm:p-12 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-animex-green-500/20 text-animex-green-400 px-3 py-1 rounded-full text-xs font-bold border border-animex-green-500/30">
            <MapPin className="w-4 h-4" />
            <span>1,000+ Stockists Nationwide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-sans">
            ANIMEX Authorized Dealer Network
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Locate authorized veterinary medical stockists, feed stores, and distributors near your farm or district.
          </p>
        </div>

        <button
          onClick={() => setShowRegModal(true)}
          className="bg-gradient-to-r from-animex-orange-500 to-animex-orange-600 hover:from-animex-orange-600 hover:to-animex-orange-700 text-white font-black px-6 py-3.5 rounded-2xl shadow-xl transition-all text-xs uppercase tracking-wider flex items-center gap-2 shrink-0"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Become an Authorized Dealer</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
        
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by firm name, city or district..."
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-animex-orange-500"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
        </div>

        {/* State Filter */}
        <div className="space-y-1">
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl px-3 py-2.5 outline-none focus:border-animex-orange-500 cursor-pointer"
          >
            <option value="ALL">All Indian States</option>
            {states.filter(s => s !== 'ALL').map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="text-xs font-extrabold text-slate-500 text-right">
          Showing <strong>{filteredDealers.length}</strong> Authorized Stockists
        </div>

      </div>

      {/* Dealer Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDealers.map((dealer) => (
          <div
            key={dealer.id}
            className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase bg-animex-green-50 dark:bg-emerald-950 text-animex-green-600 dark:text-emerald-400 px-2.5 py-1 rounded-md flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Authorized Stockist</span>
                </span>
                <span className="text-[10px] text-slate-400 font-semibold">{dealer.state}</span>
              </div>

              <h3 className="text-base font-black text-slate-900 dark:text-white">
                {dealer.firmName}
              </h3>

              <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 pt-2">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-animex-blue-500 shrink-0" />
                  <span>Contact: <strong>{dealer.contactName}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-animex-orange-500 shrink-0" />
                  <span>{dealer.phone}</span>
                </div>
                {dealer.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-animex-green-500 shrink-0" />
                    <span>{dealer.email}</span>
                  </div>
                )}
                <div className="flex items-start gap-2 pt-1">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{dealer.address}</span>
                </div>
              </div>
            </div>

            <a
              href={`tel:${dealer.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full bg-animex-blue-600 hover:bg-animex-blue-700 text-white text-xs font-bold py-2.5 rounded-xl text-center transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Dealer Directly</span>
            </a>
          </div>
        ))}
      </div>

      {/* DEALER REGISTRATION MODAL */}
      {showRegModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl relative space-y-6">
            
            <button
              onClick={() => setShowRegModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <h2 className="text-xl font-black text-slate-900 dark:text-white">
                Dealer / Stockist Application
              </h2>
              <p className="text-xs text-slate-500">
                Partner with ANIMEX ANIMAL HEALTH CARE PRIVATE LIMITED to distribute products in your region.
              </p>
            </div>

            {regSuccess ? (
              <div className="bg-emerald-500/20 border border-emerald-400 text-emerald-400 p-6 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-sm font-black">Application Submitted Successfully!</h4>
                <p className="text-xs text-slate-300">
                  Our regional sales head will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitRegistration} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-extrabold text-slate-700 dark:text-slate-300">Firm / Shop Name *</label>
                    <input
                      type="text"
                      required
                      value={firmName}
                      onChange={(e) => setFirmName(e.target.value)}
                      placeholder="e.g. Kisan Vet Store"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-slate-900 dark:text-white outline-none focus:border-animex-orange-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-extrabold text-slate-700 dark:text-slate-300">Contact Person Name *</label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-slate-900 dark:text-white outline-none focus:border-animex-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-extrabold text-slate-700 dark:text-slate-300">Phone / Mobile *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-slate-900 dark:text-white outline-none focus:border-animex-orange-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-extrabold text-slate-700 dark:text-slate-300">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="dealer@gmail.com"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-slate-900 dark:text-white outline-none focus:border-animex-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-extrabold text-slate-700 dark:text-slate-300">District *</label>
                    <input
                      type="text"
                      required
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      placeholder="e.g. Anand"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-slate-900 dark:text-white outline-none focus:border-animex-orange-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-extrabold text-slate-700 dark:text-slate-300">State *</label>
                    <input
                      type="text"
                      required
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      placeholder="e.g. Gujarat"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-slate-900 dark:text-white outline-none focus:border-animex-orange-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-extrabold text-slate-700 dark:text-slate-300">Full Business Address *</label>
                  <textarea
                    rows={3}
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Shop number, market yard, landmark..."
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-slate-900 dark:text-white outline-none focus:border-animex-orange-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-animex-orange-500 hover:bg-animex-orange-600 text-white font-black text-xs py-3 rounded-xl shadow-lg transition-colors"
                >
                  Submit Application
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

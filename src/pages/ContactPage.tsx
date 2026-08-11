import React, { useState } from 'react';
import { FAQ } from '../types';
import { COMPANY_DETAILS } from '../../server/data/seedData';
import { useLanguage } from '../context/LanguageContext';
import { 
  Building2, 
  PhoneCall, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Award,
  Users,
  FileText,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

interface ContactPageProps {
  faqs: FAQ[];
  onSubmitEnquiry: (data: any) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ faqs, onSubmitEnquiry }) => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone && message) {
      onSubmitEnquiry({ name, phone, email, district, message });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName('');
        setPhone('');
        setEmail('');
        setDistrict('');
        setMessage('');
      }, 4000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs font-extrabold uppercase tracking-widest text-animex-orange-500 bg-animex-orange-500/10 px-3 py-1 rounded-full">
          Corporate & Contact Desk
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-sans">
          ANIMEX ANIMAL HEALTH CARE PVT. LTD.
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Official Corporate Details, Registered Office & Veterinary Customer Support
        </p>
      </div>

      {/* Corporate Registration Highlights Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-animex-blue-950 to-slate-900 p-8 rounded-3xl text-white shadow-xl border border-slate-800 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-animex-orange-500/20 text-animex-orange-400 px-3 py-1 rounded-full text-xs font-bold mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>ROC Pune Registered Private Limited Company</span>
            </div>
            <h2 className="text-xl font-black text-white font-sans">
              CIN: {COMPANY_DETAILS.cin}
            </h2>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-xl border border-emerald-500/30 font-bold">
              Status: Active
            </span>
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1.5 rounded-xl border border-blue-500/30 font-bold">
              Inc: 26 May 2026
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
          {/* Directors */}
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 font-black text-white uppercase text-[11px]">
              <Users className="w-4 h-4 text-animex-orange-400" />
              <span>Board of Directors</span>
            </div>
            {COMPANY_DETAILS.directors.map((dir, idx) => (
              <div key={idx} className="space-y-0.5 border-t border-slate-700/50 pt-1.5 first:border-t-0 first:pt-0">
                <div className="font-bold text-white">{dir.name}</div>
                <div className="text-[10px] text-slate-400">DIN: {dir.din} ({dir.designation})</div>
              </div>
            ))}
          </div>

          {/* Registration Info */}
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 font-black text-white uppercase text-[11px]">
              <FileText className="w-4 h-4 text-animex-green-400" />
              <span>Registration & Capital</span>
            </div>
            <div className="space-y-1 text-[11px]">
              <div>ROC: <strong>{COMPANY_DETAILS.roc}</strong></div>
              <div>Class: <strong>Private Non-Govt Company</strong></div>
              <div>Activity: <strong>Pharma Wholesale & Medical Goods</strong></div>
              <div>Authorised Capital: <strong>{COMPANY_DETAILS.authorisedCapital}</strong></div>
            </div>
          </div>

          {/* Registered Office Address */}
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 space-y-2">
            <div className="flex items-center gap-2 font-black text-white uppercase text-[11px]">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span>Official Registered Office</span>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-300">
              {COMPANY_DETAILS.address}
            </p>
          </div>
        </div>
      </div>

      {/* Grid Contact Information & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="glass-card p-6 rounded-3xl space-y-4 border border-slate-200 dark:border-slate-800">
            <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-animex-blue-600" />
              <span>Headquarters & Customer Support</span>
            </h3>

            <div className="text-xs text-slate-600 dark:text-slate-300 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>
                  <strong>{COMPANY_DETAILS.name}</strong><br />
                  0208/RVN Havaldar Mala, Bahadurpur, Kopargaon Jawalke, Dist. Ahmednagar - 423605, Maharashtra, India
                </span>
              </div>

              <div className="flex items-center gap-3">
                <PhoneCall className="w-4 h-4 text-animex-orange-500 shrink-0" />
                <span>Helpline: <strong>+91 {COMPANY_DETAILS.phone} / {COMPANY_DETAILS.tollFree}</strong></span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-animex-green-500 shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-6 rounded-3xl text-white space-y-3 shadow-lg">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider">
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp Desk</span>
            </div>
            <p className="text-xs text-emerald-100">
              Connect directly with our directors & veterinary team on WhatsApp for instant dealership or bulk product queries.
            </p>
            <a
              href={`https://wa.me/91${COMPANY_DETAILS.phone}?text=Hello%20ANIMEX,%20I%20have%20a%20corporate%20inquiry`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-emerald-800 hover:bg-emerald-50 font-black text-xs px-4 py-2.5 rounded-xl shadow transition-colors"
            >
              <span>Chat on WhatsApp (+91 {COMPANY_DETAILS.phone})</span>
            </a>
          </div>

        </div>

        {/* Right Contact Form */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-black text-slate-900 dark:text-white">
              Send an Online Message
            </h2>
            <p className="text-xs text-slate-500">
              Fill in your details below and our technical sales executive will contact you.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-500/20 border border-emerald-400 text-emerald-600 dark:text-emerald-400 p-6 rounded-2xl text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
              <h4 className="text-sm font-black">Message Sent Successfully!</h4>
              <p className="text-xs">
                Thank you for reaching out to ANIMEX Animal Healthcare. We will respond promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-extrabold text-slate-700 dark:text-slate-300">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Karan Rahane"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-slate-900 dark:text-white outline-none focus:border-animex-orange-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-extrabold text-slate-700 dark:text-slate-300">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 8799883858"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-slate-900 dark:text-white outline-none focus:border-animex-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-extrabold text-slate-700 dark:text-slate-300">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@gmail.com"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-slate-900 dark:text-white outline-none focus:border-animex-orange-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-extrabold text-slate-700 dark:text-slate-300">District & State</label>
                  <input
                    type="text"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    placeholder="e.g. Ahmednagar, Maharashtra"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-slate-900 dark:text-white outline-none focus:border-animex-orange-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-extrabold text-slate-700 dark:text-slate-300">Inquiry Message *</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your inquiry, required product quantities, or dealership query..."
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-slate-900 dark:text-white outline-none focus:border-animex-orange-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-animex-blue-600 hover:bg-animex-blue-700 text-white font-extrabold text-xs py-3 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>

      </div>

      {/* FAQs Section */}
      <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white font-sans">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-500">
            Answers to common questions regarding ANIMEX corporate structure, products, and dealerships.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                  className="w-full p-4 text-left flex items-center justify-between font-black text-xs text-slate-900 dark:text-white hover:text-animex-orange-500 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="p-4 pt-0 text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

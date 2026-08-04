import React from 'react';
import { Disease, Product } from '../types';
import { Stethoscope, Activity, ArrowRight, ShieldCheck, ChevronRight, AlertCircle } from 'lucide-react';

interface DiseaseSolutionsPageProps {
  diseases: Disease[];
  products: Product[];
  setActiveTab: (tab: string) => void;
  setSelectedDisease: (disease: string) => void;
  onOpenProductModal: (product: Product) => void;
}

export const DiseaseSolutionsPage: React.FC<DiseaseSolutionsPageProps> = ({
  diseases,
  products,
  setActiveTab,
  setSelectedDisease,
  onOpenProductModal
}) => {

  const getRecommendedProducts = (diseaseSlug: string) => {
    return products.filter(p => p.diseases.includes(diseaseSlug));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-animex-blue-900 via-slate-900 to-animex-blue-950 p-8 sm:p-12 rounded-3xl text-white shadow-xl space-y-3 relative overflow-hidden">
        <div className="inline-flex items-center gap-2 bg-animex-orange-500/20 text-animex-orange-400 px-3 py-1 rounded-full text-xs font-bold border border-animex-orange-500/30">
          <Stethoscope className="w-4 h-4" />
          <span>Veterinary Symptom Directory</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black font-sans">
          Disease Solutions & Treatment Protocols
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          Targeted veterinary formulations engineered to combat specific metabolic, digestive, hepatic, and reproductive conditions in dairy animals, poultry, and small ruminants.
        </p>
      </div>

      {/* Disease Cards Grid */}
      <div className="space-y-8">
        {diseases.map((disease) => {
          const recommended = getRecommendedProducts(disease.slug);
          return (
            <div
              key={disease.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase bg-animex-blue-50 dark:bg-slate-800 text-animex-blue-600 dark:text-sky-400 px-2.5 py-0.5 rounded-md">
                      {disease.category}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Species: {disease.targetAnimals.join(', ')}
                    </span>
                  </div>
                  <h2 className="text-xl font-black text-slate-900 dark:text-white">
                    {disease.name}
                  </h2>
                </div>

                <button
                  onClick={() => {
                    setSelectedDisease(disease.slug);
                    setActiveTab('products');
                  }}
                  className="bg-animex-orange-500 hover:bg-animex-orange-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors self-start md:self-auto"
                >
                  <span>Browse Products ({recommended.length})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Symptoms & Summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-1">
                  <span className="text-[11px] font-extrabold uppercase text-slate-500">Condition Summary:</span>
                  <p className="text-xs text-slate-700 dark:text-slate-300">{disease.summary}</p>
                </div>

                <div className="bg-rose-50/50 dark:bg-rose-950/20 p-4 rounded-2xl border border-rose-100 dark:border-rose-900/30 space-y-1">
                  <span className="text-[11px] font-extrabold uppercase text-rose-600 dark:text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Clinical Symptoms:</span>
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300">{disease.symptoms}</p>
                </div>
              </div>

              {/* Recommended Products Carousel / Grid */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-animex-green-500" />
                  <span>Recommended ANIMEX Solutions</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recommended.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => onOpenProductModal(prod)}
                      className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-animex-blue-500 cursor-pointer transition-all flex items-center gap-3 group"
                    >
                      <img src={prod.image} alt={prod.title} className="w-14 h-14 rounded-xl object-cover shrink-0" />
                      <div className="space-y-1 overflow-hidden">
                        <h5 className="text-xs font-black text-slate-900 dark:text-white truncate group-hover:text-animex-blue-600 transition-colors">
                          {prod.title}
                        </h5>
                        <p className="text-[10px] text-slate-500 line-clamp-1">{prod.summary}</p>
                        <span className="text-[10px] font-bold text-animex-orange-500 flex items-center gap-0.5">
                          <span>View Product</span>
                          <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

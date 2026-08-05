import React, { useState, useMemo } from 'react';
import { Product, Category, Disease, AnimalType } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  X, 
  Check, 
  MessageSquare, 
  Download, 
  Sparkles, 
  ChevronRight, 
  Heart, 
  ArrowUpDown,
  Stethoscope,
  Building2,
  FileText
} from 'lucide-react';

interface ProductsPageProps {
  products: Product[];
  categories: Category[];
  diseases: Disease[];
  selectedAnimal: string;
  setSelectedAnimal: (animal: string) => void;
  selectedDisease: string;
  setSelectedDisease: (disease: string) => void;
  onOpenProductModal: (product: Product) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  products,
  categories,
  diseases,
  selectedAnimal,
  setSelectedAnimal,
  selectedDisease,
  setSelectedDisease,
  onOpenProductModal
}) => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'featured' | 'title' | 'bestseller'>('featured');
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [downloadingPdf, setDownloadingPdf] = useState<string | null>(null);

  const animalsList: { id: string; label: string }[] = [
    { id: 'ALL', label: t('allAnimals') },
    { id: 'COW', label: t('animalCOW') },
    { id: 'BUFFALO', label: t('animalBUFFALO') },
    { id: 'GOAT', label: t('animalGOAT') },
    { id: 'SHEEP', label: t('animalSHEEP') },
    { id: 'POULTRY', label: t('animalPOULTRY') },
    { id: 'HORSE', label: t('animalHORSE') },
    { id: 'CAMEL', label: t('animalCAMEL') },
    { id: 'PET', label: t('animalPET') }
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesSummary = p.summary.toLowerCase().includes(q);
        const matchesCategory = p.category.toLowerCase().includes(q);
        const matchesSku = p.sku.toLowerCase().includes(q);
        if (!matchesTitle && !matchesSummary && !matchesCategory && !matchesSku) return false;
      }

      // 2. Animal Filter
      if (selectedAnimal !== 'ALL' && selectedAnimal !== '') {
        if (!p.targetAnimals.includes(selectedAnimal as AnimalType)) return false;
      }

      // 3. Category Filter
      if (selectedCategory !== 'ALL') {
        if (p.category !== selectedCategory) return false;
      }

      // 4. Disease Filter
      if (selectedDisease !== 'ALL' && selectedDisease !== '') {
        if (!p.diseases.includes(selectedDisease)) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'featured') return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      if (sortBy === 'bestseller') return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
      return a.title.localeCompare(b.title);
    });
  }, [products, searchQuery, selectedAnimal, selectedCategory, selectedDisease, sortBy]);

  const toggleWishlist = (id: string) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(i => i !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const handleDownloadBrochure = (product: Product) => {
    setDownloadingPdf(product.id);
    setTimeout(() => {
      setDownloadingPdf(null);
      alert(`Downloading official technical brochure for ${product.title}`);
    }, 1200);
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedAnimal('ALL');
    setSelectedCategory('ALL');
    setSelectedDisease('ALL');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      
      {/* Page Header */}
      <div className="space-y-3 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-animex-blue-50 dark:bg-slate-800 text-animex-blue-600 dark:text-sky-400 px-3 py-1 rounded-full text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>Complete Veterinary Portfolio</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white font-sans mt-2">
            ANIMEX Product Catalog ({filteredProducts.length})
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Browse premium veterinary supplements, mineral mixtures, liver tonics, and uterine cleansers.
          </p>
        </div>

        {/* View mode toggle & sorting */}
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'grid' ? 'bg-white dark:bg-slate-900 text-animex-blue-600 shadow-sm' : 'text-slate-500'
              }`}
              title="Grid View"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'list' ? 'bg-white dark:bg-slate-900 text-animex-blue-600 shadow-sm' : 'text-slate-500'
              }`}
              title="List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl px-3 py-2.5 outline-none focus:border-animex-orange-500 cursor-pointer"
            >
              <option value="featured">Featured First</option>
              <option value="bestseller">Bestsellers First</option>
              <option value="title">Alphabetical (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* SIDEBAR FILTERS PANEL */}
        <div className="lg:col-span-3 space-y-6 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm sticky top-24">
          
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 font-black text-sm text-slate-900 dark:text-white">
              <Filter className="w-4 h-4 text-animex-orange-500" />
              <span>Filters & Categories</span>
            </div>
            {(selectedAnimal !== 'ALL' || selectedCategory !== 'ALL' || selectedDisease !== 'ALL' || searchQuery !== '') && (
              <button
                onClick={resetFilters}
                className="text-[11px] font-bold text-animex-orange-500 hover:underline flex items-center gap-1"
              >
                <X className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Search Box */}
          <div className="space-y-1.5">
            <label className="text-xs font-extrabold uppercase text-slate-500">Search Products</label>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Product name, SKU, composition..."
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-animex-orange-500"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>
          </div>

          {/* Animal Species Filter */}
          <div className="space-y-2">
            <label className="text-xs font-extrabold uppercase text-slate-500">Target Animal</label>
            <div className="flex flex-wrap gap-1.5">
              {animalsList.map((an) => {
                const isSelected = selectedAnimal === an.id;
                return (
                  <button
                    key={an.id}
                    onClick={() => setSelectedAnimal(an.id)}
                    className={`text-[11px] font-bold px-2.5 py-1.5 rounded-lg border transition-all ${
                      isSelected
                        ? 'bg-animex-orange-500 text-white border-animex-orange-500 shadow-sm'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-animex-orange-400'
                    }`}
                  >
                    {an.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Filter */}
          <div className="space-y-2">
            <label className="text-xs font-extrabold uppercase text-slate-500">Product Category</label>
            <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
              <button
                onClick={() => setSelectedCategory('ALL')}
                className={`w-full text-left text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors flex items-center justify-between ${
                  selectedCategory === 'ALL'
                    ? 'bg-animex-blue-50 dark:bg-slate-800 text-animex-blue-600 dark:text-sky-400 font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <span>All Categories</span>
                {selectedCategory === 'ALL' && <Check className="w-3.5 h-3.5" />}
              </button>

              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`w-full text-left text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors flex items-center justify-between ${
                    selectedCategory === cat.name
                      ? 'bg-animex-blue-50 dark:bg-slate-800 text-animex-blue-600 dark:text-sky-400 font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{cat.name}</span>
                  {selectedCategory === cat.name && <Check className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>
          </div>

          {/* Disease Solution Filter */}
          <div className="space-y-2">
            <label className="text-xs font-extrabold uppercase text-slate-500">Clinical Symptom / Disease</label>
            <select
              value={selectedDisease}
              onChange={(e) => setSelectedDisease(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 outline-none focus:border-animex-orange-500"
            >
              <option value="ALL">All Health Conditions</option>
              {diseases.map((d) => (
                <option key={d.id} value={d.slug}>{d.name}</option>
              ))}
            </select>
          </div>

        </div>

        {/* PRODUCTS RESULTS DISPLAY */}
        <div className="lg:col-span-9 space-y-6">
          
          {/* Active filter badges */}
          {(selectedAnimal !== 'ALL' || selectedCategory !== 'ALL' || selectedDisease !== 'ALL') && (
            <div className="flex flex-wrap items-center gap-2 bg-slate-100 dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs">
              <span className="font-bold text-slate-500">Active Filters:</span>
              {selectedAnimal !== 'ALL' && (
                <span className="bg-animex-orange-500 text-white px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1">
                  Animal: {selectedAnimal}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedAnimal('ALL')} />
                </span>
              )}
              {selectedCategory !== 'ALL' && (
                <span className="bg-animex-blue-600 text-white px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1">
                  Category: {selectedCategory}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCategory('ALL')} />
                </span>
              )}
              {selectedDisease !== 'ALL' && (
                <span className="bg-animex-green-600 text-white px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1">
                  Disease Filter Active
                  <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedDisease('ALL')} />
                </span>
              )}
            </div>
          )}

          {filteredProducts.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 p-12 rounded-3xl text-center border border-slate-200 dark:border-slate-800 space-y-4">
              <Stethoscope className="w-12 h-12 text-slate-400 mx-auto" />
              <h3 className="text-lg font-black text-slate-800 dark:text-white">No products matched your criteria</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Try resetting your search query or choosing a broader animal species or disease filter.
              </p>
              <button
                onClick={resetFilters}
                className="bg-animex-orange-500 text-white px-6 py-2.5 rounded-xl font-bold text-xs"
              >
                Reset All Filters
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            /* GRID VIEW */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group relative"
                >
                  {/* Wishlist Heart Icon */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md hover:bg-white text-slate-400 hover:text-rose-500 transition-colors shadow-sm"
                    title="Add to Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>

                  <div>
                    <div className="h-52 overflow-hidden relative cursor-pointer" onClick={() => onOpenProductModal(product)}>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-animex-blue-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-md">
                        {product.category}
                      </span>
                    </div>

                    <div className="p-5 space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {product.targetAnimals.map((animal) => (
                          <span key={animal} className="text-[9px] font-extrabold uppercase bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-md">
                            {animal}
                          </span>
                        ))}
                      </div>

                      <h3 
                        onClick={() => onOpenProductModal(product)}
                        className="text-sm font-black text-slate-900 dark:text-white line-clamp-2 hover:text-animex-orange-500 cursor-pointer transition-colors"
                      >
                        {product.title}
                      </h3>

                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                        {product.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 space-y-3">
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      Packs: <strong>{product.variants.join(', ')}</strong>
                    </div>

                    <div className="flex items-center gap-2 pt-1 border-t border-slate-100 dark:border-slate-800">
                      <button
                        onClick={() => onOpenProductModal(product)}
                        className="flex-1 bg-animex-blue-600 hover:bg-animex-blue-700 text-white text-xs font-bold py-2.5 rounded-xl text-center transition-colors"
                      >
                        Details
                      </button>
                      
                      <button
                        onClick={() => handleDownloadBrochure(product)}
                        disabled={downloadingPdf === product.id}
                        className="p-2.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-animex-orange-500 hover:text-white transition-colors"
                        title="Download Technical Brochure"
                      >
                        <Download className="w-4 h-4" />
                      </button>

                      <a
                        href={`https://wa.me/918999323908?text=Hello%20ANIMEX,%20I%20want%20price%20quote%20for%20${encodeURIComponent(product.title)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-xl hover:bg-emerald-600 hover:text-white transition-colors"
                        title="Inquire on WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* LIST VIEW */
            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row items-center justify-between gap-6"
                >
                  <div className="flex items-center gap-5 w-full md:w-2/3">
                    <div className="w-28 h-28 rounded-2xl overflow-hidden shrink-0 relative cursor-pointer" onClick={() => onOpenProductModal(product)}>
                      <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase bg-animex-blue-50 dark:bg-slate-800 text-animex-blue-600 dark:text-sky-400 px-2.5 py-0.5 rounded-md">
                          {product.category}
                        </span>
                        <span className="text-[10px] text-slate-400">SKU: {product.sku}</span>
                      </div>

                      <h3 
                        onClick={() => onOpenProductModal(product)}
                        className="text-base font-black text-slate-900 dark:text-white hover:text-animex-orange-500 cursor-pointer transition-colors"
                      >
                        {product.title}
                      </h3>

                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                        {product.summary}
                      </p>

                      <div className="text-[11px] text-slate-500 font-medium">
                        Packs: <strong>{product.variants.join(', ')}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full md:w-auto shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800 justify-end">
                    <button
                      onClick={() => onOpenProductModal(product)}
                      className="bg-animex-blue-600 hover:bg-animex-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors"
                    >
                      View Specifications
                    </button>
                    <a
                      href={`https://wa.me/918999323908?text=Hello%20ANIMEX,%20I%20want%20quote%20for%20${encodeURIComponent(product.title)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>

    </div>
  );
};

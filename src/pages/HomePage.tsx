import React, { useState, useEffect } from 'react';
import { Product, Category, Disease, Testimonial, Blog } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { 
  ShieldCheck, 
  Sparkles, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Building2, 
  Activity, 
  Droplet, 
  Heart, 
  MessageSquare, 
  Search, 
  ChevronRight, 
  Users, 
  Factory, 
  Microscope, 
  Leaf, 
  Star,
  Download,
  Stethoscope,
  PhoneCall
} from 'lucide-react';

interface HomePageProps {
  products: Product[];
  categories: Category[];
  diseases: Disease[];
  testimonials: Testimonial[];
  blogs: Blog[];
  setActiveTab: (tab: string) => void;
  setSelectedCategory: (cat: string) => void;
  setSelectedAnimal: (animal: string) => void;
  setSelectedDisease: (disease: string) => void;
  onOpenProductModal: (product: Product) => void;
  onOpenDealerRegistration?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  products,
  categories,
  diseases,
  testimonials,
  blogs,
  setActiveTab,
  setSelectedCategory,
  setSelectedAnimal,
  setSelectedDisease,
  onOpenProductModal,
  onOpenDealerRegistration
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const heroSlides = [
    {
      title: "Pioneering Veterinary Healthcare & Livestock Nutrition",
      subtitle: "ANIMEX CAL-GOLD & CHELATED MINERAL MIXTURES",
      description: "Empowering 10,000+ dairy farmers, poultry integrators, and goat breeders with high bio-availability veterinary formulations engineered for peak yield & vitality.",
      badge: "ISO 9001:2015 & GMP CERTIFIED",
      bgGradient: "from-animex-blue-900 via-animex-blue-800 to-slate-900",
      image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=1200&q=80",
      ctaPrimary: "Explore 50+ Products",
      ctaSecondary: "Find Nearby Dealer"
    },
    {
      title: "Advanced Chelated Minerals & Herbal Galactagogues",
      subtitle: "MAXIMIZE DAILY MILK FAT & SNF PERCENTAGE",
      description: "Formula enriched with organic amino-acid chelated Copper, Zinc, Cobalt, Shatavari, and Jivanti for complete reproductive and metabolic health.",
      badge: "CLINICALLY TESTED FORMULATION",
      bgGradient: "from-slate-900 via-animex-blue-900 to-emerald-950",
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80",
      ctaPrimary: "View Milk Boosters",
      ctaSecondary: "Disease Solutions"
    },
    {
      title: "Herbal Liver Tonics & Rumen Microflora Activators",
      subtitle: "ZERO CHEMICAL RESIDUE • RAPID RECOVERY",
      description: "Protecting cattle, buffalo, poultry, and small ruminants against toxin stress, bloat, and seasonal anorexia with 100% natural bio-buffers.",
      badge: "TRUSTED BY VETERINARY SURGEONS",
      bgGradient: "from-slate-900 via-emerald-950 to-animex-blue-900",
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80",
      ctaPrimary: "Gut & Liver Care",
      ctaSecondary: "Dealer Registration"
    },
    {
      title: "MILKYMEX-DS™ Chelated Mineral & Vitamin Powder",
      subtitle: "संतुलित पोषण, स्वस्थ पशु, अधिक दूध, अधिक लाभ!",
      description: "Organic chelated minerals, vitamins, probiotics & Shatavari extract for peak milk fat, SNF, bone strength, fertility & digestion.",
      badge: "PREMIUM QUALITY RESULTS • 25KG PACK",
      bgGradient: "from-emerald-950 via-slate-900 to-animex-blue-900",
      image: "/images/milkymex-ds.jpg",
      ctaPrimary: "Explore Milkymex-DS",
      ctaSecondary: "Inquire on WhatsApp"
    }
  ];

  const animalsList = [
    { id: 'COW', name: t('animalCOW'), image: '/images/animals/cow.png', badge: 'High Milk' },
    { id: 'BUFFALO', name: t('animalBUFFALO'), image: '/images/animals/buffalo.png', badge: 'High Fat' },
    { id: 'GOAT', name: t('animalGOAT'), image: '/images/animals/goat.png', badge: 'Growth' },
    { id: 'SHEEP', name: t('animalSHEEP'), image: '/images/animals/sheep.png', badge: 'Wool/Meat' },
    { id: 'POULTRY', name: t('animalPOULTRY'), image: '/images/animals/poultry.png', badge: 'Layers/Broilers' },
    { id: 'HORSE', name: t('animalHORSE'), image: '/images/animals/horse.png', badge: 'Stamina' },
    { id: 'CAMEL', name: t('animalCAMEL'), image: '/images/animals/camel.png', badge: 'Endurance' },
    { id: 'PET', name: t('animalPET'), image: '/images/animals/pet.png', badge: 'Pet Care' }
  ];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(slideTimer);
  }, [heroSlides.length]);

  const activeHighlightProduct = products[currentSlide % products.length] || products[0];

  return (
    <div className="space-y-16 pb-12">
      
      {/* 1. HERO SLIDER SECTION WITH ANIMATED ACCENTS */}
      <section className="relative overflow-hidden min-h-[580px] lg:min-h-[640px] flex items-center bg-slate-950 text-white">
        {/* Slide background visual with smooth gradient overlays */}
        <div className="absolute inset-0 z-0">
          <img
            key={currentSlide}
            src={heroSlides[currentSlide].image}
            alt="Livestock healthcare background"
            className="w-full h-full object-cover object-center opacity-35 transition-all duration-1000 scale-105 animate-in fade-in"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${heroSlides[currentSlide].bgGradient} opacity-90 transition-colors duration-1000`} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-animex-orange-500/20 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6 animate-in fade-in duration-500" key={`slide-text-${currentSlide}`}>
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-animex-orange-400">
              <Award className="w-4 h-4 text-animex-orange-400 animate-pulse" />
              <span>{heroSlides[currentSlide].badge}</span>
            </div>

            {/* Subtitle */}
            <h3 className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-sky-400 font-sans">
              {heroSlides[currentSlide].subtitle}
            </h3>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans tracking-tight leading-tight text-white">
              {heroSlides[currentSlide].title}
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              {heroSlides[currentSlide].description}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => setActiveTab('products')}
                className="bg-gradient-to-r from-animex-orange-500 to-animex-orange-600 hover:from-animex-orange-600 hover:to-animex-orange-700 text-white font-extrabold px-7 py-3.5 rounded-2xl shadow-xl shadow-animex-orange-500/30 hover:scale-105 transition-all text-sm flex items-center gap-2"
              >
                <span>{heroSlides[currentSlide].ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('dealer-locator')}
                className="bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md font-bold px-6 py-3.5 rounded-2xl transition-all text-sm flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-animex-green-400" />
                <span>{heroSlides[currentSlide].ctaSecondary}</span>
              </button>
            </div>

            {/* Slide Navigation Dots */}
            <div className="flex items-center gap-3 pt-6">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'w-10 bg-animex-orange-500 shadow-md shadow-animex-orange-500/50' : 'w-3 bg-white/40 hover:bg-white/80'
                  }`}
                  title={`Switch to Slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Floating Product Highlight Card */}
          <div className="lg:col-span-5 hidden lg:block" key={`slide-card-${currentSlide}`}>
            <div className="glass-panel p-6 rounded-3xl border border-white/20 shadow-2xl relative animate-float">
              <div className="absolute -top-3 -right-3 bg-animex-orange-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-md">
                Featured Product #{currentSlide + 1}
              </div>
              <div className="h-56 rounded-2xl overflow-hidden mb-4 relative group">
                <img
                  src={activeHighlightProduct?.image || heroSlides[currentSlide].image}
                  alt={activeHighlightProduct?.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <div>
                    <span className="text-[11px] font-extrabold text-animex-green-400 uppercase tracking-wider block">
                      {activeHighlightProduct?.category}
                    </span>
                    <h4 className="text-base font-black text-white">
                      {activeHighlightProduct?.title}
                    </h4>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-animex-green-400 shrink-0" />
                  <span>High bio-availability veterinary formula</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-animex-green-400 shrink-0" />
                  <span>Fast clinical action for peak productivity</span>
                </div>
              </div>

              <button
                onClick={() => onOpenProductModal(activeHighlightProduct)}
                className="w-full mt-4 bg-animex-blue-600 hover:bg-animex-blue-700 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <span>View Specifications</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 2. STATISTICS STRIP */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-xl border border-slate-200/80 dark:border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-slate-800">
          
          <div
            onClick={() => setActiveTab('products')}
            className="space-y-1 cursor-pointer group hover:scale-105 transition-all p-2 rounded-2xl"
            title="Click to view all 50+ products"
          >
            <div className="text-3xl lg:text-4xl font-black text-animex-blue-600 dark:text-sky-400 font-sans group-hover:text-animex-orange-500 transition-colors">
              50+
            </div>
            <div className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider group-hover:text-slate-900 dark:group-hover:text-white">
              {t('formulationsCount')}
            </div>
            <div className="text-[10px] font-extrabold text-animex-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
              View Products →
            </div>
          </div>

          <div
            onClick={() => setActiveTab('dealer-locator')}
            className="space-y-1 pt-4 lg:pt-0 cursor-pointer group hover:scale-105 transition-all p-2 rounded-2xl"
            title="Click to find authorized dealers"
          >
            <div className="text-3xl lg:text-4xl font-black text-animex-orange-500 font-sans group-hover:text-animex-blue-600 transition-colors">
              1,000+
            </div>
            <div className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider group-hover:text-slate-900 dark:group-hover:text-white">
              {t('dealersNationwide')}
            </div>
            <div className="text-[10px] font-extrabold text-animex-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
              Find Dealers →
            </div>
          </div>

          <div
            onClick={() => setActiveTab('contact')}
            className="space-y-1 pt-4 lg:pt-0 cursor-pointer group hover:scale-105 transition-all p-2 rounded-2xl"
            title="Click to see farmer reviews & contact"
          >
            <div className="text-3xl lg:text-4xl font-black text-animex-green-600 dark:text-emerald-400 font-sans group-hover:text-animex-orange-500 transition-colors">
              10,000+
            </div>
            <div className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider group-hover:text-slate-900 dark:group-hover:text-white">
              {t('farmersServed')}
            </div>
            <div className="text-[10px] font-extrabold text-animex-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
              Contact Us →
            </div>
          </div>

          <div
            onClick={() => setActiveTab('products')}
            className="space-y-1 pt-4 lg:pt-0 cursor-pointer group hover:scale-105 transition-all p-2 rounded-2xl"
            title="Click to check quality formulations"
          >
            <div className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white font-sans group-hover:text-animex-blue-600 transition-colors">
              99.8%
            </div>
            <div className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider group-hover:text-slate-900 dark:group-hover:text-white">
              {t('qualityAssurance')}
            </div>
            <div className="text-[10px] font-extrabold text-animex-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
              GMP Certified →
            </div>
          </div>

        </div>
      </section>

      {/* 3. LIVESTOCK TARGET SPECIES SELECTOR */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-animex-orange-500 bg-animex-orange-500/10 px-3 py-1 rounded-full">
            {t('categoriesSubtitle')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-sans">
            {t('categoriesTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {animalsList.map((animal) => (
            <div
              key={animal.id}
              onClick={() => {
                setSelectedAnimal(animal.id);
                setActiveTab('products');
              }}
              className="glass-card rounded-2xl p-3 text-center cursor-pointer group hover:border-animex-orange-500 transition-all flex flex-col items-center justify-between"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-white dark:border-slate-800 shadow-md group-hover:scale-110 transition-transform">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs font-black text-slate-800 dark:text-slate-200 group-hover:text-animex-orange-500">
                {animal.name}
              </span>
              <span className="text-[10px] text-animex-green-600 dark:text-emerald-400 font-semibold mt-0.5">
                {animal.badge}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PRODUCT CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-animex-blue-600 dark:text-sky-400 bg-animex-blue-50 dark:bg-slate-800 px-3 py-1 rounded-full">
              {t('navProducts')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-sans mt-2">
              {t('featuredProductsTitle')}
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('products')}
            className="mt-4 md:mt-0 text-xs font-extrabold text-animex-blue-600 dark:text-sky-400 hover:text-animex-orange-500 flex items-center gap-1.5"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const lower = cat.name.toLowerCase();
            let iconElement = <Droplet className="w-6 h-6" />;
            let badgeBg = 'bg-animex-blue-600/10 text-animex-blue-600 dark:text-sky-400 group-hover:bg-animex-orange-500';
            let catSummary = 'High potency veterinary formulas optimized for high absorption and clinical efficacy.';

            if (lower.includes('calcium')) {
              iconElement = <ShieldCheck className="w-6 h-6" />;
              badgeBg = 'bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600';
              catSummary = 'High potency oral calcium, minerals & vitamins for lactation & Milk Fever prevention.';
            } else if (lower.includes('rumen') || lower.includes('gut')) {
              iconElement = <Activity className="w-6 h-6" />;
              badgeBg = 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600';
              catSummary = 'Bio-buffers, probiotics & herbs for bloat, gas, digestion & rumen motility.';
            } else if (lower.includes('liver')) {
              iconElement = <Stethoscope className="w-6 h-6" />;
              badgeBg = 'bg-amber-500/10 text-amber-600 dark:text-amber-400 group-hover:bg-amber-500';
              catSummary = 'Herbal hepatoprotectives for toxin detox, appetite boost & liver regeneration.';
            } else if (lower.includes('mineral')) {
              iconElement = <Sparkles className="w-6 h-6" />;
              badgeBg = 'bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600';
              catSummary = 'Organic amino-acid chelated Copper, Zinc, Cobalt & Shatavari for peak milk fat & SNF.';
            } else if (lower.includes('uterine') || lower.includes('fertility')) {
              iconElement = <Heart className="w-6 h-6" />;
              badgeBg = 'bg-rose-500/10 text-rose-600 dark:text-rose-400 group-hover:bg-rose-600';
              catSummary = 'Uterine cleansing herbal tonics for timely heat, fertility & post-calving care.';
            } else if (lower.includes('poultry')) {
              iconElement = <Award className="w-6 h-6" />;
              badgeBg = 'bg-orange-500/10 text-orange-600 dark:text-orange-400 group-hover:bg-orange-600';
              catSummary = 'High potency vitamins & minerals for broiler weight gain & layer eggshell strength.';
            } else if (lower.includes('goat') || lower.includes('sheep')) {
              iconElement = <Users className="w-6 h-6" />;
              badgeBg = 'bg-teal-500/10 text-teal-600 dark:text-teal-400 group-hover:bg-teal-600';
              catSummary = 'Specialized small ruminant formulas for rapid weight gain, stamina & immunity.';
            } else if (lower.includes('herbal')) {
              iconElement = <Leaf className="w-6 h-6" />;
              badgeBg = 'bg-green-500/10 text-green-600 dark:text-green-400 group-hover:bg-green-600';
              catSummary = '100% natural Ayurvedic formulations with zero chemical residue & high safety.';
            }

            return (
              <div
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.name);
                  setActiveTab('products');
                }}
                className="glass-card p-6 rounded-3xl cursor-pointer group hover:bg-gradient-to-br hover:from-white hover:to-animex-blue-50/50 dark:hover:from-slate-900 dark:hover:to-slate-800 transition-all border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:text-white transition-all duration-300 shadow-sm ${badgeBg}`}>
                  {iconElement}
                </div>
                <h3 className="text-base font-black text-slate-900 dark:text-white group-hover:text-animex-blue-600 dark:group-hover:text-sky-400 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {catSummary}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-animex-orange-500">
                  <span>Explore Products</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS GRID */}
      <section className="bg-slate-100/70 dark:bg-slate-900/50 py-12 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-animex-green-600 dark:text-emerald-400 bg-animex-green-500/10 px-3 py-1 rounded-full">
              Bestsellers & Flagships
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-sans">
              Popular Animal Healthcare Products
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto">
              Trusted by veterinarians, dairy farm owners, and poultry farmers across India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
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

                    <h3 className="text-sm font-black text-slate-900 dark:text-white line-clamp-2 group-hover:text-animex-orange-500 transition-colors">
                      {product.title}
                    </h3>

                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {product.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 space-y-2">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    Available in: <strong>{product.variants.join(', ')}</strong>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      onClick={() => onOpenProductModal(product)}
                      className="flex-1 bg-animex-blue-600 hover:bg-animex-blue-700 text-white text-xs font-bold py-2 rounded-xl text-center transition-colors"
                    >
                      Quick View
                    </button>
                    <a
                      href={`https://wa.me/918999323908?text=I%20am%20interested%20in%20${encodeURIComponent(product.title)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-xl hover:bg-emerald-600 hover:text-white transition-colors"
                      title="Inquire on WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => setActiveTab('products')}
              className="bg-animex-orange-500 hover:bg-animex-orange-600 text-white font-extrabold px-8 py-3.5 rounded-2xl shadow-lg transition-all text-xs uppercase tracking-wider inline-flex items-center gap-2"
            >
              <span>Explore All 50+ Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE DISEASE SOLUTION FINDER */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-animex-blue-500/20 shadow-xl bg-gradient-to-br from-animex-blue-900/10 via-slate-900/5 to-animex-orange-500/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 bg-animex-orange-500/10 text-animex-orange-500 px-3 py-1 rounded-full text-xs font-bold">
                <Stethoscope className="w-4 h-4" />
                <span>Veterinary Clinical Guide</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-sans">
                Disease & Health Problem Finder
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Facing specific livestock symptoms like sudden milk drop, sluggish appetite, silent heat, or udder swelling? Select a disease below to find targeted products.
              </p>
              <button
                onClick={() => setActiveTab('disease-solutions')}
                className="bg-animex-blue-600 hover:bg-animex-blue-700 text-white font-bold px-6 py-3 rounded-xl text-xs inline-flex items-center gap-2 transition-colors"
              >
                <span>View Full Clinical Directory</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {diseases.map((dis) => (
                <div
                  key={dis.id}
                  onClick={() => {
                    setSelectedDisease(dis.slug);
                    setActiveTab('products');
                  }}
                  className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-animex-orange-500 cursor-pointer transition-all shadow-sm hover:shadow-md group"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-extrabold uppercase text-animex-blue-600 dark:text-sky-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                      {dis.category}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-animex-orange-500 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="text-xs font-black text-slate-900 dark:text-white mt-2 group-hover:text-animex-orange-500 transition-colors">
                    {dis.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                    {dis.summary}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE ANIMEX MANUFACTURING & RESEARCH */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-animex-blue-600 dark:text-sky-400 bg-animex-blue-50 dark:bg-slate-800 px-3 py-1 rounded-full">
            Pharmaceutical Excellence
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-sans">
            Why ANIMEX Health Products Excel
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div
            onClick={() => setActiveTab('contact')}
            className="glass-card p-6 rounded-3xl space-y-3 border border-slate-200 dark:border-slate-800 cursor-pointer group hover:border-animex-orange-500 transition-all shadow-sm hover:shadow-md"
            title="Click to view company certifications & manufacturing details"
          >
            <div className="w-12 h-12 rounded-2xl bg-animex-orange-500/10 text-animex-orange-500 flex items-center justify-center group-hover:bg-animex-orange-500 group-hover:text-white transition-colors">
              <Factory className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-slate-900 dark:text-white group-hover:text-animex-orange-500 transition-colors">
              GMP Certified Automated Manufacturing
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Manufactured in state-of-the-art sterile liquid bottling and micro-powder blender plants ensuring zero cross-contamination.
            </p>
            <div className="pt-2 text-xs font-bold text-animex-orange-500 flex items-center gap-1">
              <span>View Certifications</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div
            onClick={() => {
              setSelectedCategory('Mineral Mixtures');
              setActiveTab('products');
            }}
            className="glass-card p-6 rounded-3xl space-y-3 border border-slate-200 dark:border-slate-800 cursor-pointer group hover:border-animex-green-500 transition-all shadow-sm hover:shadow-md"
            title="Click to explore Chelated Mineral Mixtures"
          >
            <div className="w-12 h-12 rounded-2xl bg-animex-green-500/10 text-animex-green-500 flex items-center justify-center group-hover:bg-animex-green-500 group-hover:text-white transition-colors">
              <Microscope className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-slate-900 dark:text-white group-hover:text-animex-green-600 dark:group-hover:text-emerald-400 transition-colors">
              Organic Amino-Acid Chelation
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Our chelated trace minerals possess 3-4x higher intestinal absorption than standard inorganic salts, guaranteeing faster recovery.
            </p>
            <div className="pt-2 text-xs font-bold text-animex-green-600 dark:text-emerald-400 flex items-center gap-1">
              <span>Browse Chelated Range</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div
            onClick={() => {
              setSelectedCategory('Herbal Veterinary Products');
              setActiveTab('products');
            }}
            className="glass-card p-6 rounded-3xl space-y-3 border border-slate-200 dark:border-slate-800 cursor-pointer group hover:border-animex-blue-500 transition-all shadow-sm hover:shadow-md"
            title="Click to explore Herbal Veterinary Products"
          >
            <div className="w-12 h-12 rounded-2xl bg-animex-blue-500/10 text-animex-blue-500 flex items-center justify-center group-hover:bg-animex-blue-600 group-hover:text-white transition-colors">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-slate-900 dark:text-white group-hover:text-animex-blue-600 dark:group-hover:text-sky-400 transition-colors">
              Zero Chemical & Antibiotic Residue
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Formulated with standardized Shatavari, Jivanti, and Silymarin extracts ensuring milk and meat remain 100% safe for human consumption.
            </p>
            <div className="pt-2 text-xs font-bold text-animex-blue-600 dark:text-sky-400 flex items-center gap-1">
              <span>Explore Herbal Products</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>
      </section>

      {/* 8. FARMER TESTIMONIALS */}
      <section className="bg-slate-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-animex-orange-400 bg-animex-orange-500/20 px-3 py-1 rounded-full">
              Voice of Dairy Farmers
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-sans text-white">
              Trusted Across India's Dairy & Poultry Belts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((tst) => (
              <div key={tst.id} className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(tst.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    "{tst.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-extrabold text-white">{tst.farmerName}</h4>
                    <span className="text-[11px] text-animex-orange-400">{tst.location}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-1 rounded-md">
                    {tst.animalType}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LATEST BLOGS & ARTICLES */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-animex-blue-600 dark:text-sky-400 bg-animex-blue-50 dark:bg-slate-800 px-3 py-1 rounded-full">
              Knowledge Hub
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-sans mt-2">
              Veterinary Advice & Feed Guidance
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('blogs')}
            className="mt-4 md:mt-0 text-xs font-extrabold text-animex-blue-600 dark:text-sky-400 hover:text-animex-orange-500 flex items-center gap-1.5"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => setActiveTab('blogs')}
              className="glass-card rounded-3xl overflow-hidden cursor-pointer group border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-animex-orange-500 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[10px] text-slate-400 font-semibold">{blog.date}</span>
                  <h3 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-animex-blue-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <span className="text-xs font-extrabold text-animex-blue-600 dark:text-sky-400 group-hover:text-animex-orange-500 flex items-center gap-1">
                  <span>Read Article</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CALL TO ACTION FOOTER BANNER */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-animex-blue-900 via-animex-blue-800 to-animex-orange-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 relative z-10 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-black font-sans">
              Expand Your Business with ANIMEX Dealer Network
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Join 1,000+ successful stockists, agricultural co-operatives, and veterinary shops across India. Attractive margins & complete promotional support provided.
            </p>
          </div>

          <div className="flex flex-row items-center gap-3 relative z-10 shrink-0">
            <button
              onClick={() => {
                if (onOpenDealerRegistration) {
                  onOpenDealerRegistration();
                } else {
                  setActiveTab('dealer-locator');
                }
              }}
              className="bg-white text-animex-blue-900 hover:bg-slate-100 font-black px-5 sm:px-6 py-3.5 rounded-2xl text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-105 whitespace-nowrap"
            >
              Apply for Dealership
            </button>
            <a
              href="tel:8999323908"
              onClick={() => {
                window.open('https://wa.me/918999323908?text=Hello%20ANIMEX,%20I%20want%20to%20apply%20for%20dealership%20and%20product%20distribution.', '_blank');
              }}
              className="bg-animex-orange-500 hover:bg-animex-orange-600 text-white font-black px-4 sm:px-5 py-3.5 rounded-2xl text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-md hover:scale-105 whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4 shrink-0" />
              <span>Call Helpline / WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

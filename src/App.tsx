import React, { useState, useEffect } from 'react';
import { Header } from './components/ui/Header';
import { Footer } from './components/ui/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { DiseaseSolutionsPage } from './pages/DiseaseSolutionsPage';
import { DealerLocatorPage } from './pages/DealerLocatorPage';
import { BlogsPage } from './pages/BlogsPage';
import { ContactPage } from './pages/ContactPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { ProductDetailModal } from './components/ui/ProductDetailModal';
import { LanguageProvider } from './context/LanguageContext';
import { Product, Dealer, Enquiry } from './types';
import { PRODUCTS, CATEGORIES, DISEASES, DEALERS, BLOGS, TESTIMONIALS, FAQS } from '../server/data/seedData';
import { ArrowLeft } from 'lucide-react';

export const App: React.FC = () => {
  const [activeTab, setActiveTabState] = useState<string>('home');
  const [tabHistory, setTabHistory] = useState<string[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  
  // App Data States
  const [productsList, setProductsList] = useState<Product[]>(PRODUCTS as any);
  const [dealersList, setDealersList] = useState<Dealer[]>(DEALERS as any);
  const [enquiriesList, setEnquiriesList] = useState<Enquiry[]>([
    { id: 'enq-1', name: 'Karan Rahane', phone: '+91 87998 83858', email: 'karanrahane@gmail.com', message: 'Need bulk price for 100 cans of Cal-Gold 5 Litre', productId: 'prod-1', status: 'PENDING', createdAt: '2026-08-01' },
    { id: 'enq-2', name: 'Sunil Verma', phone: '+91 98980 11223', email: 'sunil@verma.com', message: 'Interested in becoming sole distributor in Karnal area.', status: 'IN_PROGRESS', createdAt: '2026-08-03' }
  ]);

  // Selected filters across pages
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedAnimal, setSelectedAnimal] = useState<string>('ALL');
  const [selectedDisease, setSelectedDisease] = useState<string>('ALL');
  
  // Modal States & Scroll Preservation
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [autoOpenDealerModal, setAutoOpenDealerModal] = useState<boolean>(false);
  const savedScrollPosition = React.useRef<number>(0);

  const openProductModal = (product: Product) => {
    savedScrollPosition.current = window.scrollY;
    setActiveModalProduct(product);
  };

  const closeProductModal = () => {
    const targetY = savedScrollPosition.current;
    setActiveModalProduct(null);
    setTimeout(() => {
      window.scrollTo({ top: targetY, behavior: 'instant' });
    }, 20);
  };

  // Navigation tab switcher with history stack & browser pushState
  const setActiveTab = (newTab: string) => {
    if (newTab !== activeTab) {
      setTabHistory(prev => [...prev, activeTab]);
      setActiveTabState(newTab);
      window.history.pushState({ tab: newTab }, '', `#/${newTab}`);
    }
  };

  // Dedicated Back Button Handler
  const handleGoBack = () => {
    if (activeModalProduct) {
      closeProductModal();
      return;
    }
    if (tabHistory.length > 0) {
      const prevTab = tabHistory[tabHistory.length - 1];
      setTabHistory(prev => prev.slice(0, prev.length - 1));
      setActiveTabState(prevTab);
      window.history.pushState({ tab: prevTab }, '', `#/${prevTab}`);
    } else {
      setActiveTabState('home');
      window.history.pushState({ tab: 'home' }, '', '#/home');
    }
  };

  // Listen to browser Back / Forward buttons (popstate)
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      if (activeModalProduct) {
        closeProductModal();
        return;
      }
      if (e.state && e.state.tab) {
        setActiveTabState(e.state.tab);
      } else {
        setActiveTabState('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [activeModalProduct]);

  // Dark Mode Toggle Class Effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll to top of window on page navigation tab change
  useEffect(() => {
    if (!activeModalProduct) {
      window.scrollTo(0, 0);
    }
  }, [activeTab]);

  // Handlers
  const handleAddProduct = (newProd: any) => {
    const created: Product = {
      id: `prod-${Date.now()}`,
      slug: newProd.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      ...newProd
    };
    setProductsList([created, ...productsList]);
  };

  const handleUpdateProduct = (id: string, updatedPayload: any) => {
    setProductsList(productsList.map(p => p.id === id ? { ...p, ...updatedPayload } : p));
  };

  const handleDeleteProduct = (id: string) => {
    setProductsList(productsList.filter(p => p.id !== id));
  };

  const handleRegisterDealer = (dealerData: any) => {
    const newDlr: Dealer = {
      id: `dlr-${Date.now()}`,
      firmName: dealerData.firmName,
      contactName: dealerData.contactName,
      phone: dealerData.phone,
      email: dealerData.email || '',
      district: dealerData.district,
      state: dealerData.state,
      address: dealerData.address,
      status: 'PENDING'
    };
    setDealersList([newDlr, ...dealersList]);
  };

  const handleApproveDealer = (id: string) => {
    setDealersList(dealersList.map(d => d.id === id ? { ...d, status: 'APPROVED' } : d));
  };

  const handleRejectDealer = (id: string) => {
    setDealersList(dealersList.filter(d => d.id !== id));
  };

  const handleSubmitEnquiry = (enqData: any) => {
    const newEnq: Enquiry = {
      id: `enq-${Date.now()}`,
      ...enqData,
      status: 'PENDING',
      createdAt: new Date().toISOString().split('T')[0]
    };
    setEnquiriesList([newEnq, ...enquiriesList]);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
        
        {/* Sticky Header */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* Global Breadcrumb & Back Navigation Strip */}
        {activeTab !== 'home' && (
          <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-16 z-20 transition-all">
            <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
              <button
                onClick={handleGoBack}
                className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-animex-orange-500 font-black text-xs px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:scale-105"
              >
                <ArrowLeft className="w-4 h-4 text-animex-orange-500" />
                <span>← Back / मागे जा</span>
              </button>

              <div className="text-[11px] font-extrabold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <span 
                  onClick={() => setActiveTab('home')}
                  className="cursor-pointer hover:text-animex-blue-500 transition-colors"
                >
                  Home
                </span>
                <span>/</span>
                <span className="capitalize text-animex-orange-500 font-black">
                  {activeTab.replace('-', ' ')}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Main Content Pages */}
        <main className="flex-1">
          {activeTab === 'home' && (
            <HomePage
              products={productsList}
              categories={CATEGORIES as any}
              diseases={DISEASES as any}
              testimonials={TESTIMONIALS as any}
              blogs={BLOGS as any}
              setActiveTab={setActiveTab}
              setSelectedCategory={setSelectedCategory}
              setSelectedAnimal={setSelectedAnimal}
              setSelectedDisease={setSelectedDisease}
              onOpenProductModal={(p) => openProductModal(p)}
              onOpenDealerRegistration={() => {
                setActiveTab('dealer-locator');
                setAutoOpenDealerModal(true);
              }}
            />
          )}

          {activeTab === 'products' && (
            <ProductsPage
              products={productsList}
              categories={CATEGORIES as any}
              diseases={DISEASES as any}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedAnimal={selectedAnimal}
              setSelectedAnimal={setSelectedAnimal}
              selectedDisease={selectedDisease}
              setSelectedDisease={setSelectedDisease}
              onOpenProductModal={(p) => openProductModal(p)}
            />
          )}

          {activeTab === 'disease-solutions' && (
            <DiseaseSolutionsPage
              diseases={DISEASES as any}
              products={productsList}
              setActiveTab={setActiveTab}
              setSelectedDisease={setSelectedDisease}
              onOpenProductModal={(p) => openProductModal(p)}
            />
          )}

          {activeTab === 'dealer-locator' && (
            <DealerLocatorPage
              dealers={dealersList}
              onRegisterDealer={handleRegisterDealer}
              autoOpenModal={autoOpenDealerModal}
            />
          )}

          {activeTab === 'blogs' && (
            <BlogsPage
              blogs={BLOGS as any}
            />
          )}

          {activeTab === 'contact' && (
            <ContactPage
              faqs={FAQS as any}
              onSubmitEnquiry={handleSubmitEnquiry}
            />
          )}

          {activeTab === 'admin' && (
            <AdminDashboard
              products={productsList}
              dealers={dealersList}
              enquiries={enquiriesList}
              stats={{
                totalProducts: productsList.length,
                totalDealers: dealersList.length,
                pendingDealers: dealersList.filter(d => d.status === 'PENDING').length,
                totalEnquiries: enquiriesList.length,
                pendingEnquiries: enquiriesList.filter(e => e.status === 'PENDING').length,
                totalFarmersServed: '10,000+',
                monthlyGrowthRate: '+24.5%'
              }}
              onAddProduct={handleAddProduct}
              onUpdateProduct={handleUpdateProduct}
              onDeleteProduct={handleDeleteProduct}
              onApproveDealer={handleApproveDealer}
              onRejectDealer={handleRejectDealer}
            />
          )}
        </main>

        {/* Global Product Specification Detail Modal */}
        <ProductDetailModal
          product={activeModalProduct}
          onClose={closeProductModal}
        />

        {/* Corporate Brand Footer */}
        <Footer setActiveTab={setActiveTab} />

      </div>
    </LanguageProvider>
  );
};


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
import { Product, Dealer, Enquiry } from './types';
import { PRODUCTS, CATEGORIES, DISEASES, DEALERS, BLOGS, TESTIMONIALS, FAQS } from '../server/data/seedData';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  
  // App Data States
  const [productsList, setProductsList] = useState<Product[]>(PRODUCTS as any);
  const [dealersList, setDealersList] = useState<Dealer[]>(DEALERS as any);
  const [enquiriesList, setEnquiriesList] = useState<Enquiry[]>([
    { id: 'enq-1', name: 'Ramesh Patel', phone: '+91 98250 12345', email: 'ramesh@gmail.com', message: 'Need bulk price for 100 cans of Cal-Gold 5 Litre', productId: 'prod-1', status: 'PENDING', createdAt: '2026-08-01' },
    { id: 'enq-2', name: 'Sunil Verma', phone: '+91 98980 11223', email: 'sunil@verma.com', message: 'Interested in becoming sole distributor in Karnal area.', status: 'IN_PROGRESS', createdAt: '2026-08-03' }
  ]);

  // Selected filters across pages
  const [selectedAnimal, setSelectedAnimal] = useState<string>('ALL');
  const [selectedDisease, setSelectedDisease] = useState<string>('ALL');
  
  // Modal State
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  // Dark Mode Toggle Class Effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

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
    setDealersList(dealersList.map(d => d.id === id ? { ...d, status: 'REJECTED' } : d));
  };

  const handleSubmitEnquiry = (enqData: any) => {
    const newEnq: Enquiry = {
      id: `enq-${Date.now()}`,
      name: enqData.name,
      phone: enqData.phone,
      email: enqData.email,
      message: enqData.message,
      status: 'PENDING',
      createdAt: new Date().toISOString().split('T')[0]
    };
    setEnquiriesList([newEnq, ...enquiriesList]);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300">
      
      {/* Sticky Brand Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Content View Switcher */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <HomePage
            products={productsList}
            categories={CATEGORIES as any}
            diseases={DISEASES as any}
            testimonials={TESTIMONIALS as any}
            blogs={BLOGS as any}
            setActiveTab={setActiveTab}
            setSelectedAnimal={setSelectedAnimal}
            setSelectedDisease={setSelectedDisease}
            onOpenProductModal={(p) => setActiveModalProduct(p)}
          />
        )}

        {activeTab === 'products' && (
          <ProductsPage
            products={productsList}
            categories={CATEGORIES as any}
            diseases={DISEASES as any}
            selectedAnimal={selectedAnimal}
            setSelectedAnimal={setSelectedAnimal}
            selectedDisease={selectedDisease}
            setSelectedDisease={setSelectedDisease}
            onOpenProductModal={(p) => setActiveModalProduct(p)}
          />
        )}

        {activeTab === 'disease-solutions' && (
          <DiseaseSolutionsPage
            diseases={DISEASES as any}
            products={productsList}
            setActiveTab={setActiveTab}
            setSelectedDisease={setSelectedDisease}
            onOpenProductModal={(p) => setActiveModalProduct(p)}
          />
        )}

        {activeTab === 'dealer-locator' && (
          <DealerLocatorPage
            dealers={dealersList}
            onRegisterDealer={handleRegisterDealer}
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
        onClose={() => setActiveModalProduct(null)}
      />

      {/* Corporate Brand Footer */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  );
};

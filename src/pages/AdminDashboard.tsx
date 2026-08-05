import React, { useState } from 'react';
import { Product, Dealer, Enquiry, AdminStats } from '../types';
import { 
  ShieldCheck, 
  Plus, 
  Edit3, 
  Trash2, 
  Search, 
  Users, 
  Package, 
  MessageSquare, 
  TrendingUp, 
  CheckCircle2, 
  XCircle, 
  Download, 
  LogOut,
  Lock,
  Layers,
  FileSpreadsheet,
  Settings,
  Activity,
  Mail
} from 'lucide-react';

interface AdminDashboardProps {
  products: Product[];
  dealers: Dealer[];
  enquiries: Enquiry[];
  stats: AdminStats;
  onAddProduct: (prod: any) => void;
  onUpdateProduct: (id: string, prod: any) => void;
  onDeleteProduct: (id: string) => void;
  onApproveDealer: (id: string) => void;
  onRejectDealer: (id: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  products,
  dealers,
  enquiries,
  stats,
  onAddProduct,
  onUpdateProduct,
  onDeleteProduct,
  onApproveDealer,
  onRejectDealer
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginEmail, setLoginEmail] = useState('admin@animexhealth.com');
  const [loginPassword, setLoginPassword] = useState('admin123');
  const [loginError, setLoginError] = useState('');

  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'dealers' | 'enquiries' | 'logs'>('overview');
  const [searchProductQuery, setSearchProductQuery] = useState('');
  
  // Product Modal State
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);

  // Form Fields
  const [prodTitle, setProdTitle] = useState('');
  const [prodSku, setProdSku] = useState('');
  const [prodCategory, setProdCategory] = useState('Calcium Supplements');
  const [prodSummary, setProdSummary] = useState('');
  const [prodDescription, setProdDescription] = useState('');
  const [prodDosage, setProdDosage] = useState('');
  const [prodImage, setProdImage] = useState('https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=800&q=80');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail === 'admin@animexhealth.com' && loginPassword === 'admin123') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid admin credentials. Use admin@animexhealth.com / admin123');
    }
  };

  const openAddModal = () => {
    setEditingProductId(null);
    setProdTitle('');
    setProdSku(`AMX-${Math.floor(10 + Math.random() * 89)}`);
    setProdSummary('');
    setProdDescription('');
    setProdDosage('');
    setShowProductModal(true);
  };

  const openEditModal = (p: Product) => {
    setEditingProductId(p.id);
    setProdTitle(p.title);
    setProdSku(p.sku);
    setProdCategory(p.category);
    setProdSummary(p.summary);
    setProdDescription(p.description);
    setProdDosage(p.dosage);
    setProdImage(p.image);
    setShowProductModal(true);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const productPayload = {
      title: prodTitle,
      sku: prodSku,
      category: prodCategory,
      summary: prodSummary,
      description: prodDescription,
      targetAnimals: ['COW', 'BUFFALO', 'GOAT'],
      isFeatured: true,
      isBestSeller: false,
      image: prodImage,
      variants: ['1 Litre', '5 Litre'],
      benefits: ['Fast clinical recovery', 'High bio-availability'],
      ingredients: [{ name: 'Active Compound', quantity: '1000 mg' }],
      dosage: prodDosage || '100ml daily',
      diseases: ['low-milk-yield']
    };

    if (editingProductId) {
      onUpdateProduct(editingProductId, productPayload);
    } else {
      onAddProduct(productPayload);
    }
    setShowProductModal(false);
  };

  const exportToCSV = () => {
    alert('Exporting full database (Products, Dealers, Enquiries) to CSV Excel spreadsheet...');
  };

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-animex-orange-500/10 text-animex-orange-500 flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black text-slate-900 dark:text-white font-sans">
              ANIMEX CMS Admin Portal
            </h2>
            <p className="text-xs text-slate-500">
              Sign in with authorized administrator credentials
            </p>
          </div>

          {loginError && (
            <div className="bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs p-3 rounded-xl font-semibold">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div className="space-y-1">
              <label className="font-extrabold text-slate-700 dark:text-slate-300">Admin Email</label>
              <input
                type="email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-900 dark:text-white outline-none focus:border-animex-orange-500 font-medium"
              />
            </div>

            <div className="space-y-1">
              <label className="font-extrabold text-slate-700 dark:text-slate-300">Password</label>
              <input
                type="password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-900 dark:text-white outline-none focus:border-animex-orange-500 font-medium"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-animex-blue-600 to-animex-blue-700 hover:from-animex-blue-500 hover:to-animex-blue-600 text-white font-black text-xs py-3 rounded-xl shadow-lg transition-all"
            >
              Sign In to CMS Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  const filteredAdminProducts = products.filter(p =>
    p.title.toLowerCase().includes(searchProductQuery.toLowerCase()) ||
    p.sku.toLowerCase().includes(searchProductQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      
      {/* Top Header Bar */}
      <div className="bg-slate-900 text-white p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-animex-orange-500 text-white rounded-2xl">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-black font-sans">ANIMEX Enterprise Control Panel</h1>
            <span className="text-xs text-slate-400">Welcome, Dr. A. K. Sharma (Super Admin)</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={exportToCSV}
            className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl border border-slate-700 flex items-center gap-1.5 transition-colors"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
            <span>Export CSV</span>
          </button>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-rose-500/20 text-rose-400 hover:bg-rose-500 hover:text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800">
        {[
          { id: 'overview', label: 'Dashboard Overview', icon: TrendingUp },
          { id: 'products', label: `Manage Products (${products.length})`, icon: Package },
          { id: 'dealers', label: `Dealer Applications (${dealers.length})`, icon: Users },
          { id: 'enquiries', label: `Customer Enquiries (${enquiries.length})`, icon: MessageSquare },
          { id: 'logs', label: 'System Logs', icon: Activity },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-black transition-all shrink-0 ${
                isActive
                  ? 'bg-animex-blue-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 1. OVERVIEW TAB */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
              <div className="text-xs font-extrabold uppercase text-slate-500">Total Products</div>
              <div className="text-3xl font-black text-slate-900 dark:text-white font-sans">{stats.totalProducts}</div>
              <span className="text-[11px] text-animex-green-600 font-bold">500+ Capacity Ready</span>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
              <div className="text-xs font-extrabold uppercase text-slate-500">Stockists & Dealers</div>
              <div className="text-3xl font-black text-animex-orange-500 font-sans">{stats.totalDealers}</div>
              <span className="text-[11px] text-slate-400 font-bold">{stats.pendingDealers} Pending Approvals</span>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
              <div className="text-xs font-extrabold uppercase text-slate-500">Inquiry Leads</div>
              <div className="text-3xl font-black text-animex-blue-600 font-sans">{stats.totalEnquiries}</div>
              <span className="text-[11px] text-animex-blue-600 font-bold">{stats.pendingEnquiries} Require Callback</span>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
              <div className="text-xs font-extrabold uppercase text-slate-500">Monthly Growth Rate</div>
              <div className="text-3xl font-black text-emerald-500 font-sans">{stats.monthlyGrowthRate}</div>
              <span className="text-[11px] text-slate-400 font-bold">Pan India Reach</span>
            </div>
          </div>
        </div>
      )}

      {/* 2. PRODUCTS TAB */}
      {activeTab === 'products' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                value={searchProductQuery}
                onChange={(e) => setSearchProductQuery(e.target.value)}
                placeholder="Search products by title or SKU..."
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 dark:text-white outline-none focus:border-animex-orange-500"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>

            <button
              onClick={openAddModal}
              className="bg-animex-orange-500 hover:bg-animex-orange-600 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow transition-colors flex items-center gap-1.5 shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Create New Product</span>
            </button>
          </div>

          {/* Table */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-500 uppercase font-extrabold border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="p-4">Product Info</th>
                    <th className="p-4">SKU</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Target Animals</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {filteredAdminProducts.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-4 font-bold text-slate-900 dark:text-white flex items-center gap-3">
                        <img src={p.image} alt={p.title} className="w-10 h-10 rounded-xl object-cover" />
                        <div>
                          <div>{p.title}</div>
                          <span className="text-[10px] text-slate-400 font-medium">{p.variants.join(', ')}</span>
                        </div>
                      </td>
                      <td className="p-4 font-mono font-semibold text-slate-500">{p.sku}</td>
                      <td className="p-4 font-semibold">{p.category}</td>
                      <td className="p-4">
                        <div className="flex flex-wrap gap-1">
                          {p.targetAnimals.map(a => (
                            <span key={a} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[9px] px-1.5 py-0.5 rounded font-bold">
                              {a}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-4 text-right space-x-2">
                        <button
                          onClick={() => openEditModal(p)}
                          className="p-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-animex-blue-600 hover:text-white transition-colors"
                          title="Edit"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onDeleteProduct(p.id)}
                          className="p-1.5 bg-rose-50 dark:bg-rose-950 text-rose-600 rounded-lg hover:bg-rose-600 hover:text-white transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 3. DEALERS TAB */}
      {activeTab === 'dealers' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-500 uppercase font-extrabold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="p-4">Firm Name</th>
                  <th className="p-4">Contact Person</th>
                  <th className="p-4">Phone & Email</th>
                  <th className="p-4">District / State</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Approval Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {dealers.map((dlr) => (
                  <tr key={dlr.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 font-bold text-slate-900 dark:text-white">{dlr.firmName}</td>
                    <td className="p-4 font-semibold text-slate-700 dark:text-slate-300">{dlr.contactName}</td>
                    <td className="p-4 space-y-0.5">
                      <div>{dlr.phone}</div>
                      <div className="text-[10px] text-slate-400">{dlr.email}</div>
                    </td>
                    <td className="p-4 font-semibold">{dlr.district}, {dlr.state}</td>
                    <td className="p-4">
                      <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${
                        dlr.status === 'APPROVED' ? 'bg-emerald-500/20 text-emerald-500' : 'bg-amber-500/20 text-amber-500'
                      }`}>
                        {dlr.status}
                      </span>
                    </td>
                    <td className="p-4 text-right space-x-2">
                      {dlr.status === 'PENDING' && (
                        <>
                          <button
                            onClick={() => onApproveDealer(dlr.id)}
                            className="bg-emerald-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg hover:bg-emerald-700 transition-colors"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => onRejectDealer(dlr.id)}
                            className="bg-rose-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg hover:bg-rose-700 transition-colors"
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 4. ENQUIRIES & NEWSLETTER SUBSCRIBERS TAB */}
      {activeTab === 'enquiries' && (
        <div className="space-y-8">
          
          {/* Customer Product Enquiries Table */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm space-y-4 p-6">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-animex-blue-600" />
                <span>Customer Product Enquiries & Direct Messages</span>
              </h3>
              <p className="text-xs text-slate-500">Inquiries submitted via Product Modals & Contact Form</p>
            </div>

            <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-2xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-500 uppercase font-extrabold border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="p-4">Customer</th>
                    <th className="p-4">Phone</th>
                    <th className="p-4">Inquiry Message</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {enquiries.map((enq) => (
                    <tr key={enq.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-4 font-bold text-slate-900 dark:text-white">{enq.name}</td>
                      <td className="p-4 font-mono font-semibold text-animex-orange-500">{enq.phone}</td>
                      <td className="p-4 max-w-md text-slate-600 dark:text-slate-300">{enq.message}</td>
                      <td className="p-4 font-semibold text-slate-400">{enq.createdAt}</td>
                      <td className="p-4">
                        <span className="bg-blue-500/20 text-blue-500 text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
                          {enq.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer Newsletter Email Subscribers Table */}
          {(() => {
            let subscribers: { email: string; date: string }[] = [];
            try {
              subscribers = JSON.parse(localStorage.getItem('animex_newsletter_subscribers') || '[]');
            } catch (err) {
              subscribers = [];
            }

            // Seed default subscribers for demonstration
            const defaultSubscribers = [
              { email: 'kopargaon.vet.store@gmail.com', date: '05-08-2026' },
              { email: 'mahalaxmi.dairy.farm@gmail.com', date: '04-08-2026' }
            ];

            const allSubscribers = [...subscribers, ...defaultSubscribers];

            return (
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                      <Mail className="w-5 h-5 text-animex-orange-500" />
                      <span>Footer Newsletter Email Subscribers ({allSubscribers.length})</span>
                    </h3>
                    <p className="text-xs text-slate-500">Emails submitted by users in the website footer "Enter email address..." box</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full">
                    Active Subscriber List
                  </span>
                </div>

                <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-2xl">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-500 uppercase font-extrabold border-b border-slate-200 dark:border-slate-800">
                      <tr>
                        <th className="p-4">Subscribed Email Address</th>
                        <th className="p-4">Submission Date</th>
                        <th className="p-4">Source</th>
                        <th className="p-4 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {allSubscribers.map((sub, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                          <td className="p-4 font-mono font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <Mail className="w-3.5 h-3.5 text-animex-orange-500 shrink-0" />
                            <span>{sub.email}</span>
                          </td>
                          <td className="p-4 text-slate-400 font-semibold">{sub.date}</td>
                          <td className="p-4">
                            <span className="text-[10px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                              Website Footer Box
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            <span className="bg-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
                              SUBSCRIBED
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })()}

        </div>
      )}

      {/* ADD / EDIT PRODUCT MODAL */}
      {showProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="space-y-1">
              <h2 className="text-xl font-black text-slate-900 dark:text-white">
                {editingProductId ? 'Edit Product' : 'Create New Veterinary Product'}
              </h2>
              <p className="text-xs text-slate-500">Fill in technical specifications, category, and dosage</p>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-extrabold text-slate-700 dark:text-slate-300">Product Title *</label>
                  <input
                    type="text"
                    required
                    value={prodTitle}
                    onChange={(e) => setProdTitle(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-900 dark:text-white outline-none focus:border-animex-orange-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-extrabold text-slate-700 dark:text-slate-300">SKU Code *</label>
                  <input
                    type="text"
                    required
                    value={prodSku}
                    onChange={(e) => setProdSku(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-900 dark:text-white outline-none focus:border-animex-orange-500 font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-extrabold text-slate-700 dark:text-slate-300">Category *</label>
                <select
                  value={prodCategory}
                  onChange={(e) => setProdCategory(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-900 dark:text-white outline-none focus:border-animex-orange-500"
                >
                  <option value="Calcium Supplements">Calcium Supplements</option>
                  <option value="Mineral Mixtures">Mineral Mixtures</option>
                  <option value="Liver Tonics">Liver Tonics</option>
                  <option value="Uterine & Fertility Boosters">Uterine & Fertility Boosters</option>
                  <option value="Gut Health & Probiotics">Gut Health & Probiotics</option>
                  <option value="Poultry Supplements">Poultry Supplements</option>
                  <option value="Goat & Sheep Nutrition">Goat & Sheep Nutrition</option>
                  <option value="Herbal Veterinary Products">Herbal Veterinary Products</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-extrabold text-slate-700 dark:text-slate-300">Short Summary *</label>
                <input
                  type="text"
                  required
                  value={prodSummary}
                  onChange={(e) => setProdSummary(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-900 dark:text-white outline-none focus:border-animex-orange-500"
                />
              </div>

              <div className="space-y-1">
                <label className="font-extrabold text-slate-700 dark:text-slate-300">Full Technical Description *</label>
                <textarea
                  rows={3}
                  required
                  value={prodDescription}
                  onChange={(e) => setProdDescription(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-slate-900 dark:text-white outline-none focus:border-animex-orange-500 resize-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-extrabold text-slate-700 dark:text-slate-300">Recommended Dosage</label>
                <input
                  type="text"
                  value={prodDosage}
                  onChange={(e) => setProdDosage(e.target.value)}
                  placeholder="e.g. 100ml daily for cattle"
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-slate-900 dark:text-white outline-none focus:border-animex-orange-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowProductModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-500 font-bold hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-animex-orange-500 hover:bg-animex-orange-600 text-white font-extrabold px-6 py-2 rounded-xl shadow-lg"
                >
                  Save Product Record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

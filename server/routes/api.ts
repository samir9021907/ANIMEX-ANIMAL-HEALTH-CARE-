import { Router } from 'express';
import { PRODUCTS, CATEGORIES, DISEASES, DEALERS, BLOGS, CERTIFICATES, TESTIMONIALS, FAQS } from '../data/seedData';

const router = Router();

// In-memory active database copy (falls back from seed data)
let dbProducts = [...PRODUCTS];
let dbDealers = [...DEALERS];
let dbEnquiries: any[] = [
  { id: 'enq-1', name: 'Ramesh Patel', phone: '+91 98250 12345', email: 'ramesh@gmail.com', message: 'Need bulk price for 100 cans of Cal-Gold 5 Litre', productId: 'prod-1', status: 'PENDING', createdAt: '2026-08-01' },
  { id: 'enq-2', name: 'Sunil Verma', phone: '+91 98980 11223', email: 'sunil@verma.com', message: 'Interested in becoming sole distributor in Karnal area.', status: 'IN_PROGRESS', createdAt: '2026-08-03' }
];

// --- PRODUCTS ---
router.get('/products', (req:any, res:any) => {
  const { search, animal, category, disease, isFeatured, isBestSeller } = req.query;
  let result = [...dbProducts];

  if (search) {
    const q = String(search).toLowerCase();
    result = result.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.sku.toLowerCase().includes(q)
    );
  }

  if (animal) {
    const animalUpper = String(animal).toUpperCase();
    result = result.filter(p => p.targetAnimals.includes(animalUpper));
  }

  if (category) {
    const catSlug = String(category).toLowerCase();
    result = result.filter(p => {
      const cat = CATEGORIES.find(c => c.slug === catSlug || c.name.toLowerCase() === catSlug);
      return cat ? p.category === cat.name : p.category.toLowerCase() === catSlug;
    });
  }

  if (disease) {
    const disSlug = String(disease).toLowerCase();
    result = result.filter(p => p.diseases.includes(disSlug));
  }

  if (isFeatured === 'true') {
    result = result.filter(p => p.isFeatured);
  }

  if (isBestSeller === 'true') {
    result = result.filter(p => p.isBestSeller);
  }

  res.json({
    success: true,
    count: result.length,
    data: result
  });
});

router.get('/products/:id', (req:any, res:any) => {
  const product = dbProducts.find(p => p.id === req.params.id || p.slug === req.params.id);
  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  res.json({ success: true, data: product });
});

router.post('/products', (req :any, res:any) => {
  const newProduct = {
    id: `prod-${Date.now()}`,
    slug: req.body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    ...req.body
  };
  dbProducts.unshift(newProduct);
  res.status(201).json({ success: true, message: 'Product created successfully', data: newProduct });
});

router.put('/products/:id', (req:any, res:any) => {
  const index = dbProducts.findIndex(p => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  dbProducts[index] = { ...dbProducts[index], ...req.body };
  res.json({ success: true, message: 'Product updated successfully', data: dbProducts[index] });
});

router.delete('/products/:id', (req:any, res:any) => {
  dbProducts = dbProducts.filter(p => p.id !== req.params.id);
  res.json({ success: true, message: 'Product deleted successfully' });
});

// --- CATEGORIES & DISEASES ---
router.get('/categories', (req:any, res:any) => {
  res.json({ success: true, data: CATEGORIES });
});

router.get('/diseases', (req:any, res:any) => {
  res.json({ success: true, data: DISEASES });
});

// --- DEALERS ---
router.get('/dealers', (req:any, res:any) => {
  const { state, district } = req.query;
  let result = [...dbDealers];

  if (state) {
    result = result.filter(d => d.state.toLowerCase() === String(state).toLowerCase());
  }
  if (district) {
    result = result.filter(d => d.district.toLowerCase() === String(district).toLowerCase());
  }

  res.json({ success: true, count: result.length, data: result });
});

router.post('/dealers/register', (req:any, res:any) => {
  const { firmName, contactName, phone, email, district, state, address } = req.body;
  if (!firmName || !contactName || !phone) {
    return res.status(400).json({ success: false, message: 'Required fields missing' });
  }
  const newDealer = {
    id: `dlr-${Date.now()}`,
    firmName,
    contactName,
    phone,
    email: email || '',
    district: district || '',
    state: state || '',
    address: address || '',
    status: 'PENDING'
  };
  dbDealers.push(newDealer);
  res.status(201).json({
    success: true,
    message: 'Dealer registration submitted successfully! Our marketing team will get in touch.',
    data: newDealer
  });
});

// --- BLOGS, CERTIFICATES, TESTIMONIALS, FAQS ---
router.get('/blogs', (req:any, res:any) => {
  res.json({ success: true, data: BLOGS });
});

router.get('/certificates', (req:any, res:any) => {
  res.json({ success: true, data: CERTIFICATES });
});

router.get('/testimonials', (req:any, res:any) => {
  res.json({ success: true, data: TESTIMONIALS });
});

router.get('/faqs', (req:any, res:any) => {
  res.json({ success: true, data: FAQS });
});

// --- ENQUIRIES & CONTACT ---
router.get('/enquiries', (req:any, res:any) => {
  res.json({ success: true, data: dbEnquiries });
});

router.post('/enquiries', (req:any, res:any) => {
  const { name, phone, message, productId, email } = req.body;
  if (!name || !phone || !message) {
    return res.status(400).json({ success: false, message: 'Please provide name, phone and message' });
  }
  const newEnquiry = {
    id: `enq-${Date.now()}`,
    name,
    phone,
    email: email || '',
    message,
    productId: productId || null,
    status: 'PENDING',
    createdAt: new Date().toISOString().split('T')[0]
  };
  dbEnquiries.unshift(newEnquiry);
  res.status(201).json({
    success: true,
    message: 'Inquiry submitted successfully! An ANIMEX representative will call you shortly.',
    data: newEnquiry
  });
});

// --- ADMIN AUTH & ANALYTICS ---
router.post('/auth/login', (req:any, res:any) => {
  const { email, password } = req.body;
  if (email === 'admin@animexhealth.com' && password === 'admin123') {
    return res.json({
      success: true,
      token: 'jwt_token_animex_admin_987654321',
      user: {
        id: 'usr-admin-1',
        name: 'Dr. A. K. Sharma (Super Admin)',
        email: 'admin@animexhealth.com',
        role: 'SUPER_ADMIN'
      }
    });
  }
  return res.status(401).json({ success: false, message: 'Invalid credentials. Use admin@animexhealth.com / admin123' });
});

router.get('/admin/stats', (req:any, res:any) => {
  res.json({
    success: true,
    data: {
      totalProducts: dbProducts.length,
      totalDealers: dbDealers.length,
      pendingDealers: dbDealers.filter(d => d.status === 'PENDING').length,
      totalEnquiries: dbEnquiries.length,
      pendingEnquiries: dbEnquiries.filter(e => e.status === 'PENDING').length,
      totalFarmersServed: '10,000+',
      monthlyGrowthRate: '+24.5%'
    }
  });
});

export default router;

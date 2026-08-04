export type AnimalType = 'COW' | 'BUFFALO' | 'GOAT' | 'SHEEP' | 'POULTRY' | 'HORSE' | 'CAMEL' | 'PIG' | 'PET';

export interface ProductIngredient {
  name: string;
  quantity: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  sku: string;
  category: string;
  summary: string;
  description: string;
  targetAnimals: AnimalType[];
  isFeatured: boolean;
  isBestSeller: boolean;
  image: string;
  variants: string[];
  benefits: string[];
  ingredients: ProductIngredient[];
  dosage: string;
  diseases: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
}

export interface Disease {
  id: string;
  name: string;
  slug: string;
  summary: string;
  symptoms: string;
  category: string;
  targetAnimals: AnimalType[];
}

export interface Dealer {
  id: string;
  firmName: string;
  contactName: string;
  phone: string;
  email: string;
  district: string;
  state: string;
  address: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  date: string;
}

export interface Testimonial {
  id: string;
  farmerName: string;
  location: string;
  animalType: string;
  comment: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Enquiry {
  id: string;
  name: string;
  phone: string;
  email?: string;
  message: string;
  productId?: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  createdAt: string;
}

export interface AdminStats {
  totalProducts: number;
  totalDealers: number;
  pendingDealers: number;
  totalEnquiries: number;
  pendingEnquiries: number;
  totalFarmersServed: string;
  monthlyGrowthRate: string;
}

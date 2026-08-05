export interface SeedProduct {
  id: string;
  title: string;
  slug: string;
  sku: string;
  category: string;
  summary: string;
  description: string;
  targetAnimals: string[];
  isFeatured: boolean;
  isBestSeller: boolean;
  image: string;
  variants: string[];
  benefits: string[];
  ingredients: { name: string; quantity: string }[];
  dosage: string;
  diseases: string[];
}

export interface SeedDisease {
  id: string;
  name: string;
  slug: string;
  summary: string;
  symptoms: string;
  category: string;
  targetAnimals: string[];
}

export interface SeedDealer {
  id: string;
  firmName: string;
  contactName: string;
  phone: string;
  email: string;
  district: string;
  state: string;
  address: string;
  status: string;
}

export interface SeedBlog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  date: string;
}

export const COMPANY_DETAILS = {
  name: 'ANIMEX ANIMAL HEALTH CARE PRIVATE LIMITED',
  cin: 'U46497PN2026PTC256177',
  incorporationDate: '26 May 2026',
  roc: 'ROC Pune',
  classOfCompany: 'Private Non-Government Company',
  activity: 'Wholesale of pharmaceutical and medical goods',
  authorisedCapital: '₹5,00,000',
  paidUpCapital: '₹1,00,000',
  tagline: 'Healthy Animals... Prosperous Farms!',
  address: '0208/RVN Havaldar Mala, Bahadurpur, Kopargaon Jawalke, Dist. Ahmednagar - 423605, Maharashtra, India',
  phone: '8999323908',
  tollFree: '1800-123-4567',
  email: 'animexanimalhealthcare@gmail.com',
  directors: [
    { name: 'Pratik Haridas Rahane', din: '11743257', designation: 'Director', dateOfAppointment: '26-05-2026' },
    { name: 'Karan Vijay Rahane', din: '11743258', designation: 'Director', dateOfAppointment: '26-05-2026' }
  ],
  certifications: ['GMP CERTIFIED', 'ISO 9001:2015 CERTIFIED', 'ROC PUNE REGISTERED']
};

export const CATEGORIES = [
  { id: 'cat-1', name: 'Calcium Supplements', slug: 'calcium-supplements', icon: 'Droplet' },
  { id: 'cat-2', name: 'Rumen & Gut Health', slug: 'rumen-gut-health', icon: 'ShieldCheck' },
  { id: 'cat-3', name: 'Liver Tonics', slug: 'liver-tonics', icon: 'Activity' },
  { id: 'cat-4', name: 'Mineral Mixtures', slug: 'mineral-mixtures', icon: 'Sparkles' },
  { id: 'cat-5', name: 'Uterine & Fertility Boosters', slug: 'uterine-fertility', icon: 'Heart' },
  { id: 'cat-6', name: 'Poultry Supplements', slug: 'poultry-supplements', icon: 'Feather' },
  { id: 'cat-7', name: 'Goat & Sheep Nutrition', slug: 'goat-sheep-nutrition', icon: 'Wheat' },
  { id: 'cat-8', name: 'Herbal Veterinary Products', slug: 'herbal-products', icon: 'Leaf' }
];

export const DISEASES: SeedDisease[] = [
  {
    id: 'dis-1',
    name: 'Milk Fever & Hypocalcemia (दूध की बीमारी)',
    slug: 'milk-fever-hypocalcemia',
    summary: 'Sudden drop in blood calcium level post-calving causing paralysis, weakness, and severe milk reduction.',
    symptoms: 'Inability to stand, cold ears, dull eyes, severe milk yield reduction, muscle tremors.',
    category: 'Metabolic & Parturition',
    targetAnimals: ['COW', 'BUFFALO', 'GOAT']
  },
  {
    id: 'dis-2',
    name: 'Poor Digestion, Bloating & Anorexia (अपच व आफरा)',
    slug: 'poor-digestion-bloating',
    summary: 'Rumen motility slowdown, gas accumulation, indigestive bloat, and off-feed condition.',
    symptoms: 'Loss of appetite, hard feces, abdominal distension, reduced rumination.',
    category: 'Digestive & Rumen System',
    targetAnimals: ['COW', 'BUFFALO', 'GOAT', 'SHEEP', 'HORSE']
  },
  {
    id: 'dis-3',
    name: 'Liver Dysfunction & Toxin Stress (लीवर कमजोरी व टॉक्सिन)',
    slug: 'liver-dysfunction-toxin',
    summary: 'Feed toxin buildup, hepatitis, fatty liver, and reduced nutrient absorption.',
    symptoms: 'Sluggish feed intake, dull skin coat, jaundice, poor growth rate, reduced immunity.',
    category: 'Hepatic & Immunity',
    targetAnimals: ['COW', 'BUFFALO', 'POULTRY', 'GOAT', 'PET']
  },
  {
    id: 'dis-4',
    name: 'Bone Weakness & Mineral Deficiency (हड्डी कमजोरी)',
    slug: 'bone-weakness-deficiency',
    summary: 'Fragile joints, pica (eating mud/plastic), and slow body growth in young calves.',
    symptoms: 'Joint stiffness, difficulty standing, licking soil or walls, rickets.',
    category: 'Nutritional Deficiency',
    targetAnimals: ['COW', 'BUFFALO', 'GOAT', 'SHEEP', 'HORSE', 'PET']
  }
];

export const PRODUCTS: SeedProduct[] = [
  {
    id: 'prod-1',
    title: 'CALCIMEX-GOLD (Liquid Calcium)',
    slug: 'calcimex-gold-liquid-calcium',
    sku: 'AMX-CAL-GOLD-01',
    category: 'Calcium Supplements',
    summary: 'Liquid Feed Supplement of Calcium, Phosphorus, Vit. A, B12, D3, E, Minerals & Herbs Extract for Stronger Animals & Higher Productivity.',
    description: 'CALCIMEX-GOLD is a premium liquid calcium formulation fortified with high bio-available phosphorus, essential vitamins, organic minerals, and standardized herbal galactagogue extracts. Engineered to optimize milk production in dairy cattle, support healthy lactation cycles, strengthen bones, and accelerate recovery after calving.',
    targetAnimals: ['COW', 'BUFFALO', 'GOAT', 'SHEEP', 'POULTRY'],
    isFeatured: true,
    isBestSeller: true,
    image: '/images/calcimex-gold.jpg',
    variants: ['1 Litre Bottle', '2 Litre Can', '5 Litre Can', '10 Litre Can'],
    benefits: [
      'Optimizes milk production in dairy cattle & buffaloes',
      'Supports healthy lactation cycle & improves FAT / SNF',
      'Improves calcium & phosphorus utilization efficiency',
      'Strengthens bones, teeth, hooves & joints',
      'Helps reduce mineral deficiency symptoms & pica',
      'Enhances immunity and overall vitality',
      'Promotes faster post-calving recovery',
      'Improves feed conversion efficiency & productivity'
    ],
    ingredients: [
      { name: 'Calcium (Bio-available)', quantity: '35,000 mg' },
      { name: 'Phosphorus', quantity: '17,500 mg' },
      { name: 'Vitamin D3', quantity: '150,000 IU' },
      { name: 'Vitamin B12', quantity: '2,000 mcg' },
      { name: 'Vitamin A', quantity: '45,000 IU' },
      { name: 'Vitamin E', quantity: '250 mg' },
      { name: 'Shatavari & Herbal Extracts', quantity: '5,000 mg' }
    ],
    dosage: 'Cow & Buffalo: 50 to 100 ml daily | Sheep & Goat: 10 to 20 ml daily | Calves: 40 ml daily | Poultry per 100 birds: 50-100 ml daily.',
    diseases: ['milk-fever-hypocalcemia', 'bone-weakness-deficiency']
  },
  {
    id: 'prod-2',
    title: 'CALCIMEX GEL ADVANCE (Triple Power Oral Calcium Gel)',
    slug: 'calcimex-gel-advance',
    sku: 'AMX-CAL-GEL-02',
    category: 'Calcium Supplements',
    summary: 'Triple Power Oral Calcium Gel With Vitamins, Minerals, PG, Bypass Fat & Herbal Extract (Ashwagandha, Satavari & Vidarikhand).',
    description: 'CALCIMEX GEL ADVANCE provides instant high-potency oral calcium therapy designed to prevent and treat post-partum Milk Fever (Hypocalcemia). Packed with 43.5g Ionic Calcium, Tri Calcium Phosphate, Propylene Glycol, Bypass FAT, Vitamin D3 (160,000 IU), Niacinamide, and energizing herbs.',
    targetAnimals: ['COW', 'BUFFALO'],
    isFeatured: true,
    isBestSeller: true,
    image: '/images/calcimex-gel.jpg',
    variants: ['300 ml Single Dose Tube'],
    benefits: [
      'Prevents Milk Fever & Post-partum Hypocalcemia',
      'Fulfills instant high calcium requirement immediately post-calving',
      'Provides balanced instant energy (Propylene Glycol + Bypass FAT)',
      'Improves liver metabolism & prevents ketosis',
      'Boosts immunity & overall animal stamina',
      'Enriched with Ashwagandha, Satavari & Vidarikhand extracts'
    ],
    ingredients: [
      { name: 'Ionic Calcium', quantity: '43.5 gm' },
      { name: 'Tri Calcium Phosphate', quantity: '10,000 mg' },
      { name: 'Vitamin D3', quantity: '160,000 IU' },
      { name: 'Niacinamide', quantity: '3,000 mg' },
      { name: 'Biotin', quantity: '10,000 mcg' },
      { name: 'Vitamin B12', quantity: '2,400 mcg' },
      { name: 'Magnesium', quantity: '3,200 mg' },
      { name: 'Zinc', quantity: '1,600 mg' },
      { name: 'Calcium Lactate', quantity: '5,000 mg' },
      { name: 'Propylene Glycol', quantity: '15 gm' },
      { name: 'Vitamin E', quantity: '500 mg' },
      { name: 'Selenium', quantity: '2.5 mg' },
      { name: 'Bypass FAT', quantity: '20 gm' }
    ],
    dosage: 'To Prevent Milk Fever: Administer 1 tube (300ml) 6-12 hours prior to calving & another tube 6-12 hours after calving. Repeat after 24 hours. For High Milk Yield: 1 tube daily for 5-10 days.',
    diseases: ['milk-fever-hypocalcemia']
  },
  {
    id: 'prod-3',
    title: 'RUMEN MEX (For Rumen & Gut Health)',
    slug: 'rumen-mex-gut-health',
    sku: 'AMX-RUM-MEX-03',
    category: 'Rumen & Gut Health',
    summary: 'Natural Herbal Formula with Minerals, Lactobacillus, Herbs Extracts for Rumen Motility & Digestion (रूमेन व पाचन तंत्र मजबूत).',
    description: 'RUMEN MEX is a highly effective natural herbal liquid formulation enriched with digestive minerals, active Lactobacillus strains, and plant extracts. Specially designed to treat bloating (आफरा), indigestion (अपच), gas, and sluggish rumen action while boosting daily milk yield and beneficial gut flora.',
    targetAnimals: ['COW', 'BUFFALO', 'GOAT', 'SHEEP', 'HORSE'],
    isFeatured: true,
    isBestSeller: true,
    image: '/images/rumen-mex.jpg',
    variants: ['300 ml Bottle', '1 Litre Bottle'],
    benefits: [
      'बेहतर पाचन और भूख में वृद्धि (रूमेन की क्रिया को सक्रिय करे)',
      'गैस, आफरा (bloating) और अपच से तुरंत राहत',
      'लाभदायक बैक्टीरिया (Lactobacillus & Probiotics) का विकास',
      'दूध उत्पादन व गुणवत्ता में उल्लेखनीय वृद्धि',
      'रोग प्रतिरोधक क्षमता (Immunity) में सुधार',
      '100% हर्बल और सुरक्षित - कोई साइड इफेक्ट नहीं'
    ],
    ingredients: [
      { name: 'Lactobacillus Spores', quantity: '10 Billion CFU' },
      { name: 'Digestive Mineral Complex', quantity: '5,000 mg' },
      { name: 'Ginger Extract', quantity: '1,200 mg' },
      { name: 'Ajwain & Herbal Extract', quantity: '2,500 mg' }
    ],
    dosage: 'बड़े पशु (गाय, भैंस, घोड़ा): 300 ml. प्रतिदिन (3-5 दिन) | छोटे पशु (बकरा, भेड़, बछड़े): 150 ml. प्रतिदिन (4-6 दिन).',
    diseases: ['poor-digestion-bloating']
  },
  {
    id: 'prod-4',
    title: 'ANIMEX LIV (Herbal Liver Tonic)',
    slug: 'animex-liv-herbal-liver-tonic',
    sku: 'AMX-LIV-04',
    category: 'Liver Tonics',
    summary: 'Herbal Based Natural & Safe Powerful Liver Tonic for Better Liver Health & Overall Productivity (Choline | Liver Extract | Herbs Extracts).',
    description: 'ANIMEX LIV is a high-potency hepato-protective herbal tonic formulated with Choline Chloride, Liver Extract, and active herbal bio-flavonoids. Protects liver cells against feed toxins, improves digestion, boosts appetite, and increases daily milk output.',
    targetAnimals: ['COW', 'BUFFALO', 'GOAT', 'SHEEP', 'POULTRY', 'PET'],
    isFeatured: true,
    isBestSeller: true,
    image: '/images/animex-liv.jpg',
    variants: ['500 ml', '1 Litre Bottle', '5 Litre Can'],
    benefits: [
      'लीवर की टॉक्सिन एवं हानिकारक पदार्थों से सुरक्षा',
      'हानिकारक टॉक्सिन बाहर निकालकर लीवर डिटॉक्स करता है',
      'भूख बढ़ाए और पाचन शक्ति में सुधार करे',
      'दूध उत्पादन एवं फैट की मात्रा में वृद्धि',
      'कम बीमारी, बेहतर शारीरिक विकास और ज्यादा मुनाफा'
    ],
    ingredients: [
      { name: 'Choline Chloride', quantity: '1,500 mg' },
      { name: 'Purified Liver Extract', quantity: '250 mg' },
      { name: 'Silymarin (Milk Thistle)', quantity: '300 mg' },
      { name: 'Inositol', quantity: '40 mg' },
      { name: 'Vitamin B12', quantity: '25 mcg' }
    ],
    dosage: 'Cattle & Buffalo: 50-100ml daily | Sheep & Goat: 15-20ml daily | Poultry: 10-20ml per 100 birds in drinking water.',
    diseases: ['liver-dysfunction-toxin', 'poor-digestion-bloating']
  },
  {
    id: 'prod-5',
    title: 'UTRIMEX (Uterine Cleanser & Restorative)',
    slug: 'utrimex-uterine-cleanser',
    sku: 'AMX-UTRI-05',
    category: 'Uterine & Fertility Boosters',
    summary: 'गाय-भैंस के लिए गर्भाशय की पूरी देखभाल - Herbal Based Natural & Safe Uterine Cleanser & Restorative.',
    description: 'UTRIMEX is a highly potent herbal uterine cleanser and tonic formulated to clean the uterus post-calving, remove placenta/pus/debris, prevent uterine bacterial infections, contract uterine walls, and bring cows & buffaloes into timely heat cycles for higher milk productivity.',
    targetAnimals: ['COW', 'BUFFALO'],
    isFeatured: true,
    isBestSeller: true,
    image: '/images/utrimex.jpg',
    variants: ['500 ml. Bottle'],
    benefits: [
      'गर्भाशय की सफाई में सहायक (बच्चेदानी में जमा गंदगी, पस और मलबा बाहर निकालने में मदद करता है)',
      'संक्रमण से सुरक्षा (गर्भाशय में बैक्टीरिया संक्रमण को कम करता है और स्वच्छता बनाए रखता है)',
      'प्लेसेंटा निकालने में सहायक (रुकी हुई प्लेसेंटा को निकालने में सहायक, पशु को राहत देता है)',
      'दूध उत्पादन में वृद्धि (गर्भाशय स्वस्थ रहने से पशु जल्दी हीट में आता है और दूध उत्पादन में सुधार होता है)',
      'हर्बल एवं सुरक्षित (प्राकृतिक जड़ी-बूटियों से बना, बिना किसी साइड इफेक्ट के सुरक्षित एवं प्रभावी)'
    ],
    ingredients: [
      { name: 'Aloes Extract', quantity: '1,500 mg' },
      { name: 'Gloriosa Superba Extract', quantity: '500 mg' },
      { name: 'Vasaka Extract', quantity: '1,000 mg' },
      { name: 'Harmal Extract', quantity: '750 mg' }
    ],
    dosage: '100-200ml daily post-calving for 3-5 days or as advised by veterinary consultant.',
    diseases: ['milk-fever-hypocalcemia']
  },
  {
    id: 'prod-6',
    title: 'MILKYMEX-DS™ (Chelated Mineral Mixture Powder)',
    slug: 'milkymex-ds-mineral-mixture',
    sku: 'AMX-MLK-DS-06',
    category: 'Mineral Mixtures',
    summary: 'संतुलित पोषण, स्वस्थ पशु, अधिक दूध, अधिक लाभ! Premium Chelated Minerals, Vitamins & Probiotics Powder.',
    description: 'MILKYMEX-DS™ is a high-grade premium chelated mineral mixture powder enriched with essential minerals, vitamins, and probiotics. Specially formulated for cows, buffaloes, goats, sheep, and poultry to increase milk yield, fat percentage, bone strength, fertility, and immunity.',
    targetAnimals: ['COW', 'BUFFALO', 'GOAT', 'SHEEP', 'POULTRY'],
    isFeatured: true,
    isBestSeller: true,
    image: '/images/milkymex-ds.jpg',
    variants: ['1 kg Pack', '5 kg Bucket', '10 kg Bucket', '25 kg Pack / Bucket'],
    benefits: [
      'दूध उत्पादन में वृद्धि (दूध की मात्रा और गुणवत्ता दोनों को बेहतर बनाता है)',
      'मजबूत हड्डियाँ (कैल्शियम, फॉस्फोरस और विटामिन D3 से हड्डियाँ मजबूत)',
      'रोग प्रतिरोधक क्षमता बढ़ाए (सूक्ष्म पोषक तत्व इम्युनिटी बढ़ाते हैं, बीमारी से बचाव)',
      'बेहतर वृद्धि एवं विकास (विटामिन, मिनरल्स और प्रीबायोटिक्स से तेजी से ग्रोथ)',
      'फर्टिलिटी एवं रिप्रोडक्शन में सुधार (हीट में सुधार, कंसीव रेट बढ़ाता है)',
      'बेहतर पाचन और पोषक तत्वों का अवशोषण (प्रीबायोटिक्स पाचन सुधारते हैं)'
    ],
    ingredients: [
      { name: 'Chelated Minerals (Cu, Zn, Mn, Fe, Co, I)', quantity: 'Organic Bio-available' },
      { name: 'Calcium & Phosphorus', quantity: 'Balanced Ratio' },
      { name: 'Vitamin A, D3, E & Biotin', quantity: 'High Potency' },
      { name: 'Probiotics & Prebiotics', quantity: 'Gut Active Strains' },
      { name: 'Shatavari & Herbal Extracts', quantity: 'Pure Extract' }
    ],
    dosage: 'Cattle & Buffalo: 50g daily | Calf, Sheep & Goat: 15-20g daily | Poultry: 1kg per 100kg feed mixture.',
    diseases: ['milk-fever-hypocalcemia', 'bone-weakness-deficiency', 'poor-digestion-bloating']
  }
];

export const DEALERS: SeedDealer[] = [
  {
    id: 'dlr-1',
    firmName: 'Kopargaon Vet & Pashu Seva Kendra',
    contactName: 'Pratik Haridas Rahane',
    phone: '+91 93079 90811',
    email: 'animexanimalhealthcare@gmail.com',
    district: 'Ahmednagar',
    state: 'Maharashtra',
    address: '0208/RVN Havaldar Mala, Bahadurpur, Kopargaon Jawalke - 423605',
    status: 'APPROVED'
  },
  {
    id: 'dlr-2',
    firmName: 'Mahalaxmi Dairy & Vet Store',
    contactName: 'Karan Vijay Rahane',
    phone: '+91 94221 67890',
    email: 'mahalaxmi.vet@gmail.com',
    district: 'Kolhapur',
    state: 'Maharashtra',
    address: 'Gokul Shirgaon MIDC, Kolhapur - 416234',
    status: 'APPROVED'
  }
];

export const BLOGS: SeedBlog[] = [
  {
    id: 'blog-1',
    title: 'Post-Calving Milk Fever Prevention using CALCIMEX GEL ADVANCE',
    slug: 'prevent-milk-fever-calcimex-gel',
    excerpt: 'Hypocalcemia causes over 70% of post-partum complications in dairy cows. Learn how oral calcium gel administration restores blood ionic calcium levels rapidly.',
    content: 'Within 24 hours of calving, a dairy cow produces several litres of colostrum, drawing massive calcium from blood plasma. CALCIMEX GEL ADVANCE delivers 43.5g of ionic calcium with Propylene Glycol to prevent downer cow syndrome...',
    coverImage: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=800&q=80',
    category: 'Calcium & Lactation',
    date: '2026-08-02'
  },
  {
    id: 'blog-2',
    title: 'Maximizing Milk Fat & SNF Percentage with MILKYMEX-DS Chelated Minerals',
    slug: 'maximize-milk-fat-snf-milkymex-ds',
    excerpt: 'How organic chelated trace minerals (Copper, Zinc, Cobalt) and Shatavari galactagogues boost daily milk fat %, SNF, and peak lactation curve.',
    content: 'Balanced nutrition is essential for peak daily milk fat and SNF yield. Standard inorganic mineral salts have low bio-absorption... MILKYMEX-DS contains amino-acid chelated minerals...',
    coverImage: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    category: 'Nutrition & Milk Fat',
    date: '2026-08-04'
  },
  {
    id: 'blog-3',
    title: 'Managing Bloating, Indigestion & Seasonal Anorexia with RUMEN MEX',
    slug: 'managing-bloating-indigestion-rumen-mex',
    excerpt: 'Rumen acidosis and sluggish microflora cause severe appetite reduction in high-yield dairy cows and buffaloes. Discover herbal bio-buffer therapy.',
    content: 'Sudden feed changes and high-concentrate diet often lead to rumen bloat and anorexia. RUMEN MEX delivers active Lactobacillus strains, Ajwain, and Ginger extracts...',
    coverImage: 'https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&w=800&q=80',
    category: 'Gut & Rumen Health',
    date: '2026-08-05'
  }
];

export const CERTIFICATES = [
  { id: 'cert-1', title: 'ROC Pune Incorporated Private Limited', issuedBy: 'Ministry of Corporate Affairs Govt. of India (CIN: U46497PN2026PTC256177)', imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80' },
  { id: 'cert-2', title: 'GMP Certified Veterinary Facility', issuedBy: 'Licensing Authority Govt. of Maharashtra', imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80' },
  { id: 'cert-3', title: 'ISO 9001:2015 Quality Management System', issuedBy: 'International Accreditation Forum', imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=600&q=80' }
];

export const TESTIMONIALS = [
  {
    id: 'tst-1',
    farmerName: 'Dnyaneshwar Shinde',
    location: 'Kopargaon, Maharashtra',
    animalType: 'Dairy Farmer (25 Buffaloes)',
    comment: 'CALCIMEX GEL ADVANCE दिला आणि ५ तासात म्हैस उभी राहिली! Milk fat सुध्दा ६.५% वरून ७.४% झाला. खूप भारी प्रॉडक्ट आहे.',
    rating: 5
  },
  {
    id: 'tst-2',
    farmerName: 'Balasaheb Patil',
    location: 'Sangamner, Maharashtra',
    animalType: 'Dairy Farm Owner (40 Cows)',
    comment: 'MILKYMEX-DS पावडर रोज ५० ग्रॅम दिल्यापासून गाईंच्या दुधात दररोज १.५ ते २ लिटर वाढ झाली आहे आणि फर्टिलिटी सुध्दा एकदम मस्त आहे.',
    rating: 5
  },
  {
    id: 'tst-3',
    farmerName: 'Sachin Deshmukh',
    location: 'Kolhapur, Maharashtra',
    animalType: 'Goat & Sheep Breeder (80 Goats)',
    comment: 'ANIMEX LIV लिव्हर टॉनिक आणि RUMEN MEX मुळे शेळ्यांची भूक वाढली आणि पचन एकदम चांगले राहते. वजन झपाट्याने वाढते.',
    rating: 5
  }
];

export const FAQS = [
  {
    id: 'faq-1',
    question: 'Animex Animal Healthcare Pvt. Ltd. ची अधिकृत कॉर्पोरेट नोंदणी (CIN) माहिती काय आहे?',
    answer: 'ANIMEX ANIMAL HEALTH CARE PRIVATE LIMITED ही ROC Pune (महाराष्ट्र) अंतर्गत नोंदणीकृत कंपनी आहे. CIN: U46497PN2026PTC256177. कंपनी संचालक श्री. प्रिक हरीदास रहाणे आणि श्री. करण विजय रहाणे आहेत.',
    category: 'Corporate'
  }
];

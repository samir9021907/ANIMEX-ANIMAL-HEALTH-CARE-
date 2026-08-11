export type Language = 'en' | 'hi' | 'mr' | 'gu' | 'pa' | 'kn' | 'ta' | 'te' | 'bn' | 'ml';

export interface TranslationDictionary {
  [key: string]: {
    [lang in Language]?: string;
  };
}

export const translations: TranslationDictionary = {
  // Topbar & Header
  tollFree: {
    en: "Toll Free",
    hi: "टोल फ्री",
    mr: "टोल फ्री"
  },
  isoCertified: {
    en: "ISO 9001:2015 & GMP Certified Veterinary Manufacturer",
    hi: "ISO 9001:2015 एवं GMP प्रमाणित पशु चिकित्सा निर्माता",
    mr: "ISO 9001:2015 आणि GMP प्रमाणित पशुवैद्यकीय निर्माता"
  },
  cmsAdmin: {
    en: "CMS Admin Panel",
    hi: "सीएमएस एडमिन पैनल",
    mr: "सीएमएस अ‍ॅडमिन पॅनेल"
  },
  searchPlaceholder: {
    en: "Search 50+ Products",
    hi: "50+ उत्पाद खोजें",
    mr: "५०+ उत्पादने शोधा"
  },
  whatsappInquiry: {
    en: "WhatsApp Inquiry",
    hi: "व्हाट्सएप पूछताछ",
    mr: "व्हॉट्सॲप चौकशी"
  },
  
  // Navigation
  navHome: {
    en: "Home",
    hi: "मुख्य पृष्ठ",
    mr: "मुख्य पृष्ठ"
  },
  navProducts: {
    en: "Products Catalog",
    hi: "उत्पाद सूची",
    mr: "उत्पादने कॅटलॉग"
  },
  navDiseases: {
    en: "Disease Solutions",
    hi: "रोग निवारण",
    mr: "आजार निवारण"
  },
  navDealers: {
    en: "Dealer Network",
    hi: "डीलर नेटवर्क",
    mr: "डीलर नेटवर्क"
  },
  navBlogs: {
    en: "Knowledge & Blogs",
    hi: "ज्ञान एवं ब्लॉग",
    mr: "माहिती व ब्लॉग्स"
  },
  navContact: {
    en: "Contact Us",
    hi: "संपर्क करें",
    mr: "संपर्क करा"
  },

  // Hero Section
  heroBadge: {
    en: "Trusted Veterinary Healthcare Partner Since 2012",
    hi: "2012 से भरोसेमंद पशु स्वास्थ्य सेवा भागीदार",
    mr: "२०१२ पासून विश्वासू पशु आरोग्य सेवा भागीदार"
  },
  heroTitlePrefix: {
    en: "Advanced Science For Better",
    hi: "बेहतर पशु स्वास्थ्य के लिए",
    mr: "उत्कृष्ट पशु आरोग्यासाठी"
  },
  heroTitleHighlight: {
    en: "Animal Health & Yield",
    hi: "उन्नत विज्ञान और उत्पादन",
    mr: "आधुनिक विज्ञान व उत्पादन"
  },
  heroSubtext: {
    en: "Empowering farmers and veterinarians with premium GMP-certified nutritional supplements, cattle feeds, herbal remedies, and veterinary pharmaceuticals.",
    hi: "किसानों और पशु चिकित्सकों को प्रीमियम जीएमपी-प्रमाणित पोषण पूरक, मवेशी आहार, हर्बल उपचार और पशु औषधियां प्रदान करना।",
    mr: "शेतकरी आणि पशुवैद्यकांना उच्च दर्जाचे GMP-प्रमाणित पोषण पुरक, पशुखाद्य, हर्बल औषधे आणि व्हिटॅमिन सप्लिमेंट्स पुरवणे."
  },
  exploreProductsBtn: {
    en: "Explore Products",
    hi: "उत्पाद देखें",
    mr: "उत्पादने पहा"
  },
  findNearestDealerBtn: {
    en: "Find Nearest Dealer",
    hi: "निकटतम डीलर खोजें",
    mr: "जवळचा डीलर शोधा"
  },

  // Stats Counter
  farmersServed: {
    en: "Farmers Served",
    hi: "सेवा प्राप्त किसान",
    mr: "लाभार्थी शेतकरी"
  },
  formulationsCount: {
    en: "Veterinary Products",
    hi: "पशु चिकित्सा उत्पाद",
    mr: "व्हेटेनरी प्रॉडक्ट्स"
  },
  dealersNationwide: {
    en: "Dealers Nationwide",
    hi: "देशभर में डीलर",
    mr: "देशभरात डीलर्स"
  },
  qualityAssurance: {
    en: "Quality Satisfaction",
    hi: "गुणवत्ता संतुष्टि",
    mr: "गुणवत्ता समाधान"
  },

  // Categories Section
  categoriesTitle: {
    en: "Target Animal Categories",
    hi: "पशु श्रेणियां",
    mr: "पशू वर्गवारी"
  },
  categoriesSubtitle: {
    en: "Specialized formulations engineered for diverse livestock and companion animals",
    hi: "विभिन्न पशुओं और पालतू जानवरों के लिए विशेष फॉर्मूलेशन",
    mr: "विविध पशुधन आणि पाळीव प्राण्यांसाठी विशेषीकृत उत्पादने"
  },
  viewCategoryProducts: {
    en: "View Products",
    hi: "उत्पाद देखें",
    mr: "उत्पादने पहा"
  },

  // Animals
  animalCOW: {
    en: "Cattle & Cow",
    hi: "गाय एवं मवेशी",
    mr: "गाय व गुरे"
  },
  animalBUFFALO: {
    en: "Buffalo",
    hi: "भैंस",
    mr: "म्हैस"
  },
  animalGOAT: {
    en: "Goat",
    hi: "बकरी",
    mr: "शेळी"
  },
  animalSHEEP: {
    en: "Sheep",
    hi: "भेड़",
    mr: "मेंढी"
  },
  animalPOULTRY: {
    en: "Poultry & Birds",
    hi: "पोल्ट्री एवं मुर्गी",
    mr: "कुक्कुटपालन (पोल्ट्री)"
  },
  animalHORSE: {
    en: "Horse & Equine",
    hi: "घोड़ा",
    mr: "घोडा"
  },
  animalCAMEL: {
    en: "Camel",
    hi: "ऊंट",
    mr: "उंट"
  },
  animalPIG: {
    en: "Swine & Pig",
    hi: "सुअर",
    mr: "डुकरांचे संगोपन"
  },
  animalPET: {
    en: "Pets & Dogs",
    hi: "पालतू जानवर",
    mr: "पाळीव प्राणी"
  },
  allAnimals: {
    en: "All Species",
    hi: "सभी पशु",
    mr: "सर्व प्राणी"
  },

  // Products Section
  featuredProductsTitle: {
    en: "Featured & High Demand Products",
    hi: "प्रमुख एवं लोकप्रिय उत्पाद",
    mr: "प्रमुख व सर्वाधिक मागणी असलेली उत्पादने"
  },
  featuredProductsSubtitle: {
    en: "Scientifically tested for peak milk production, growth, and immunity",
    hi: "अधिक दूध उत्पादन, विकास और प्रतिरक्षा के लिए वैज्ञानिक रूप से परीक्षण किए गए",
    mr: "जास्त दूध उत्पादन, वाढ आणि प्रतिकारशक्तीसाठी शास्त्रोक्त पद्धतीने चाचणी केलेले"
  },
  bestSellerBadge: {
    en: "Best Seller",
    hi: "बेस्ट सेलर",
    mr: "बेस्ट सेलर"
  },
  viewDetails: {
    en: "View Details & Specs",
    hi: "विवरण और निर्देश देखें",
    mr: "माहिती व तपशील पहा"
  },
  inquireNow: {
    en: "Inquire Now",
    hi: "अभी पूछताछ करें",
    mr: "आत्ताच चौकशी करा"
  },
  dosageLabel: {
    en: "Recommended Dosage",
    hi: "अनुशंसित खुराक",
    mr: "शिफारस केलेला डोस"
  },
  benefitsLabel: {
    en: "Key Benefits",
    hi: "मुख्य लाभ",
    mr: "प्रमुख फायदे"
  },
  ingredientsLabel: {
    en: "Active Composition",
    hi: "सक्रिय सामग्री",
    mr: "सक्रिय घटक"
  },

  // Disease Solutions
  diseaseTitle: {
    en: "Veterinary Disease Solutions & Care",
    hi: "पशु रोग निवारण एवं देखभाल",
    mr: "पशु आजार निवारण व काळजी"
  },
  diseaseSubtitle: {
    en: "Identify symptoms early and discover recommended remedies for livestock ailments",
    hi: "लक्षणों को जल्दी पहचानें और अनुशंसित उपचार खोजें",
    mr: "लक्षणे लवकर ओळखा आणि पशुधनाच्या आजारांवर योग्य उपाय शोधा"
  },
  symptomsLabel: {
    en: "Common Symptoms",
    hi: "सामान्य लक्षण",
    mr: "सामान्य लक्षणे"
  },
  remediesLabel: {
    en: "Recommended Products",
    hi: "अनुशंसित उत्पाद",
    mr: "शिफारस केलेली उत्पादने"
  },

  // Dealer Locator
  dealerTitle: {
    en: "Authorized Dealer & Distributor Network",
    hi: "अधिकृत डीलर और वितरक नेटवर्क",
    mr: "अधिकृत डीलर आणि वितरक नेटवर्क"
  },
  dealerSubtitle: {
    en: "Locate trusted suppliers near your farm or apply to become a distributor",
    hi: "अपने खेत के पास विश्वसनीय आपूर्तिकर्ता खोजें या वितरक बनने के लिए आवेदन करें",
    mr: "तुमच्या शेताजवळ विश्वासू पुरवठादार शोधा किंवा डीलर होण्यासाठी अर्ज करा"
  },
  searchDistrictPlaceholder: {
    en: "Enter District or City Name (e.g. Pune, Karnal, Anand)",
    hi: "जिला या शहर का नाम दर्ज करें (जैसे पुणे, करनाल, आनंद)",
    mr: "जिल्हा किंवा शहराचे नाव प्रविष्ट करा (उदा. पुणे, कोल्हापूर, नाशिक)"
  },
  becomeDealerTitle: {
    en: "Become an Authorized Dealer / Distributor",
    hi: "अधिकृत डीलर / वितरक बनें",
    mr: "अधिकृत डीलर / डिस्ट्रीब्यूटर बना"
  },
  firmNameLabel: {
    en: "Firm / Agency Name",
    hi: "फर्म / एजेंसी का नाम",
    mr: "फर्म / एजन्सीचे नाव"
  },
  contactNameLabel: {
    en: "Contact Person Name",
    hi: "संपर्क व्यक्ति का नाम",
    mr: "संपर्क व्यक्तीचे नाव"
  },
  phoneLabel: {
    en: "Phone / WhatsApp Number",
    hi: "फोन / व्हाट्सएप नंबर",
    mr: "फोन / व्हॉट्सॲप नंबर"
  },
  emailLabel: {
    en: "Email Address",
    hi: "ईमेल पता",
    mr: "ईमेल पत्ता"
  },
  districtLabel: {
    en: "District / City",
    hi: "जिला / शहर",
    mr: "जिल्हा / शहर"
  },
  stateLabel: {
    en: "State",
    hi: "राज्य",
    mr: "राज्य"
  },
  addressLabel: {
    en: "Complete Shop / Godown Address",
    hi: "दुकान / गोदाम का पूरा पता",
    mr: "दुकान / गोदामाचा पूर्ण पत्ता"
  },
  submitApplicationBtn: {
    en: "Submit Dealer Application",
    hi: "डीलर आवेदन जमा करें",
    mr: "डीलर अर्ज सादर करा"
  },
  applicationSuccessMsg: {
    en: "Your application has been received! Our sales representative will contact you within 24 hours.",
    hi: "आपका आवेदन प्राप्त हो गया है! हमारा बिक्री प्रतिनिधि 24 घंटे के भीतर आपसे संपर्क करेगा।",
    mr: "तुमचा अर्ज प्राप्त झाला आहे! आमचे विक्री प्रतिनिधी २४ तासांच्या आत तुमच्याशी संपर्क साधतील."
  },

  // Contact Page
  contactTitle: {
    en: "Get in Touch With Our Veterinary Experts",
    hi: "हमारे पशु चिकित्सा विशेषज्ञों से संपर्क करें",
    mr: "आमच्या पशुवैद्यकीय तज्ञांशी संपर्क साधा"
  },
  contactSubtitle: {
    en: "Have questions about product dosage, bulk distribution, or animal health concerns?",
    hi: "उत्पाद की खुराक, थोक वितरण या पशु स्वास्थ्य संबंधी प्रश्न हैं?",
    mr: "उत्पादनाचा डोस, ठोक विक्री किंवा प्राण्यांच्या आरोग्याविषयी प्रश्न आहेत का?"
  },
  enquiryFormHeader: {
    en: "Send Us a Message / Direct Inquiry",
    hi: "हमें संदेश / पूछताछ भेजें",
    mr: "आम्हाला संदेश / थेट चौकशी पाठवा"
  },
  messageLabel: {
    en: "Your Requirement / Query Details",
    hi: "आपकी आवश्यकता / प्रश्न विवरण",
    mr: "तुमची गरज / चौकशीचा तपशील"
  },
  sendMessageBtn: {
    en: "Submit Enquiry",
    hi: "पूछताछ सबमिट करें",
    mr: "चौकशी सादर करा"
  },
  faqHeaderTitle: {
    en: "Frequently Asked Questions (FAQs)",
    hi: "अक्सर पूछे जाने वाले प्रश्न (FAQs)",
    mr: "सतत विचारले जाणारे प्रश्न (FAQs)"
  },

  // Footer
  footerAboutText: {
    en: "ANIMEX Animal Health Care Pvt. Ltd. is a pioneer in high-potency veterinary nutrition, mineral mixtures, and healthcare remedies for cattle, poultry, and small ruminants.",
    hi: "एनिमेक्स एनिमल हेल्थ केयर प्राइवेट लिमिटेड पशुधन, पोल्ट्री और छोटे जुगाली करने वाले पशुओं के लिए उच्च क्षमता वाले पशु पोषण, खनिज मिश्रण और स्वास्थ्य देखभाल के क्षेत्र में अग्रणी है।",
    mr: "ॲनिमेक्स अ‍ॅनिमल हेल्थ केर प्रायव्हेट लिमिटेड पशुधन, कुक्कुटपालन आणि लहान जनावरांसाठी उच्च दर्जाचे पोषण, मिनरल मिक्स्चर आणि आरोग्यदायी उपायांमध्ये अग्रेसर आहे."
  },
  footerQuickLinks: {
    en: "Quick Links",
    hi: "त्वरित लिंक",
    mr: "महत्वाच्या लिंक्स"
  },
  footerContactUs: {
    en: "Contact Information",
    hi: "संपर्क जानकारी",
    mr: "संपर्क माहिती"
  },
  footerCertifications: {
    en: "Certifications & Quality Standard",
    hi: "प्रमाणपत्र और गुणवत्ता मानक",
    mr: "प्रमाणपत्रे आणि गुणवत्ता मानके"
  },
  rightsReserved: {
    en: "ANIMEX Animal Health Care Private Limited. All Rights Reserved.",
    hi: "एनिमेक्स एनिमल हेल्थ केयर प्राइवेट लिमिटेड। सर्वाधिकार सुरक्षित।",
    mr: "ॲनिमेक्स अ‍ॅनिमल हेल्थ केर प्रायव्हेट लिमिटेड. सर्व हक्क राखीव."
  },

  // Language Switcher Titles
  selectLanguage: {
    en: "Select Language",
    hi: "भाषा चुनें",
    mr: "भाषा निवडा"
  },
  langEnglish: {
    en: "English",
    hi: "English",
    mr: "English"
  },
  langHindi: {
    en: "हिंदी (Hindi)",
    hi: "हिंदी (Hindi)",
    mr: "हिंदी (Hindi)"
  },
  langMarathi: {
    en: "मराठी (Marathi)",
    hi: "मराठी (Marathi)",
    mr: "मराठी (Marathi)"
  }
};

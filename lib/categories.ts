export const CATEGORIES = {
  'status-check': {
    name: 'Verification & Status',
    nameHi: 'सत्यापन और स्थिति',
    description: 'Kist verification, beneficiary roster, FTO, eKYC, land seeding guides',
    descriptionHi: 'किस्त सत्यापन, लाभार्थी सूची, एफटीओ, ईकेवाईसी, भूमि सीडिंग गाइड',
    
    color: 'blue',
  },
  'loan': {
    name: 'Credit & Loans',
    nameHi: 'ऋण और क्रेडिट',
    description: 'KCC loan, farm equipment loan, and bank credit guides',
    descriptionHi: 'केसीसी लोन, कृषि उपकरण ऋण, और बैंक क्रेडिट गाइड',
    
    color: 'amber',
  },
  'farming': {
    name: 'Farming & Schemes',
    nameHi: 'खेती और योजनाएं',
    description: 'Soil analysis, crop insurance, AgriStack, Nano DAP and other schemes',
    descriptionHi: 'मृदा विश्लेषण, फसल बीमा, एग्रीस्टैक, नैनो डीएपी और अन्य योजनाएं',
    icon: '',
    color: 'emerald',
  },
  'mandi': {
    name: 'Market Rates',
    nameHi: 'बाजार दरें',
    description: 'Daily vegetable and fruit market rates, wholesale prices',
    descriptionHi: 'दैनिक सब्जी और फल बाजार दरें, थोक कीमतें',
    
    color: 'yellow',
  },
  'pashupalan': {
    name: 'Pashupalan & Matsya Palan',
    nameHi: 'पशुपालन और मत्स्य पालन',
    description: 'Goat farming, beekeeping, fish farming and silage subsidy guides',
    descriptionHi: 'बकरी पालन, मधुमक्खी पालन, मछली पालन और साइलेज सब्सिडी गाइड',
    icon: '',
    color: 'orange',
  },
  'agri-business': {
    name: 'Agri Business & Subsidy',
    nameHi: 'कृषि व्यवसाय और सब्सिडी',
    description: 'Mushroom farming, vermicompost, food processing, CHC and irrigation subsidy guides',
    descriptionHi: 'मशरूम की खेती, वर्मी कम्पोस्ट, फूड प्रोसेसिंग, सीएचसी और सिंचाई सब्सिडी गाइड',
    icon: '',
    color: 'teal',
  },
} as const;

export type CategorySlug = keyof typeof CATEGORIES;

export interface ArticleMeta {
  slug: string;
  title: string;
  desc: string;
  ogTitle: string;
  seoTitle?: string;
  readonly keywords: readonly string[];
  component: string;
  category: CategorySlug;
  publishedTime: string;
  modifiedTime: string;
  readingTime?: number;
  author: string;
  authorBio?: string;
  states?: readonly string[];
  districts?: readonly string[];
  banks?: readonly string[];
  schemes?: readonly string[];
  ogImage?: string;
  relatedSlugs?: readonly string[];
}

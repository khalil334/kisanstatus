// lib/maandhan-data.ts

export type MaandhanArticleMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string;
  modified: string;
  readTime: string;
};

export const MAANDHAN_ARTICLES: MaandhanArticleMeta[] = [
  {
    slug: 'pm-kisan-maandhan-registration-2026',
    title: 'PM Kisan Maandhan Yojana Registration 2026: ₹3000 Pension Ke Liye Online Apply Karein',
    description: 'PM Kisan Maandhan Yojana mein online registration ka complete process, eligibility, aur zaroori documents ki jankari.',
    category: 'pension-scheme',
    published: '2024-01-15T08:00:00+05:30',
    modified: '2026-07-21T08:00:00+05:30',
    readTime: '12 min read',
  },
  {
    slug: 'pm-kisan-maandhan-eligibility-documents',
    title: 'PM Kisan Maandhan Eligibility & Documents: Kaun Le Sakta Hai Aur Kya Chahiye?',
    description: 'Janie kaun se kisan is pension scheme ke liye eligible hain aur registration ke waqt kaun se documents zaroori hain.',
    category: 'pension-scheme',
    published: '2024-01-15T08:00:00+05:30',
    modified: '2026-07-21T08:00:00+05:30',
    readTime: '10 min read',
  },
  {
    slug: 'pm-kisan-maandhan-pension-calculator',
    title: 'PM Kisan Maandhan Pension Calculator: Age Ke Hisaab Se Kitna Contribution Dena Hoga',
    description: 'Complete pension calculator guide. 18 se 40 saal ki umar ke beech join karne par monthly contribution aur ₹3000 pension ka hisaab.',
    category: 'pension-scheme',
    published: '2024-01-15T08:00:00+05:30',
    modified: '2026-07-21T08:00:00+05:30',
    readTime: '8 min read',
  },
  {
    slug: 'pm-kisan-maandhan-withdrawal-refund-rules',
    title: 'PM Kisan Maandhan Withdrawal & Refund Rules: Scheme Chhodne Par Paisa Wapas Milega?',
    description: 'PM Kisan Maandhan se exit karne ke rules, pension ka paisa family ko kaise milega, aur contribution refund hone ki puri sachai.',
    category: 'pension-scheme',
    published: '2024-01-15T08:00:00+05:30',
    modified: '2026-07-21T08:00:00+05:30',
    readTime: '9 min read',
  },
];
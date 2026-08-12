// Homepage data & icons — extracted from HomeContent.tsx (no content changes).

export function IconWallet({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9.75A2.25 2.25 0 0018.75 7.5H5.25A2.25 2.25 0 003 9.75V12m18 0h-6" />
    </svg>
  );
}

export function IconCreditCard({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
    </svg>
  );
}

export function IconTractor({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      <circle cx="7.5" cy="17.25" r="1.5" fill="currentColor" />
      <circle cx="16.5" cy="17.25" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function IconCalculator({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export function IconSprout({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  );
}

export function IconBookOpen({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

export function IconArrowRight({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export function IconCheck({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export const TOOLS = [
  {
    href: '/articles/PmKisan24viKist2026',
    icon: IconWallet,
    bg: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-200 dark:border-green-800',
    iconBg: 'bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300',
    title: 'PM Kisan Status',
    desc: '24vi kist kab aayegi? Status check, eKYC, beneficiary list — sab yahan.',
  },
  {
    href: '/articles/KisanCreditCardOnlineApply2026',
    icon: IconCreditCard,
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-800',
    iconBg: 'bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300',
    title: 'KCC Loan',
    desc: '₹5 Lakh tak loan, 4% interest. Online apply process aur document checklist.',
  },
  {
    href: '/articles/KisanTractorLoan2026',
    icon: IconTractor,
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    border: 'border-amber-200 dark:border-amber-800',
    iconBg: 'bg-amber-100 dark:bg-amber-800 text-amber-600 dark:text-amber-300',
    title: 'Tractor Subsidy',
    desc: 'SMAM subsidy 35-50%. Bina down payment ke tractor kaise lein.',
  },
  {
    href: '/calculator/kcc-loan-emi',
    icon: IconCalculator,
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    border: 'border-purple-200 dark:border-purple-800',
    iconBg: 'bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300',
    title: 'EMI Calculator',
    desc: 'Loan amount, interest, tenure daalo — monthly EMI turant calculate karo.',
  },
  {
    href: '/articles/PmfbyCropInsurance2026',
    icon: IconSprout,
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    border: 'border-emerald-200 dark:border-emerald-800',
    iconBg: 'bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-300',
    title: 'Farming Schemes',
    desc: 'PMFBY, Soil Health Card, Nano DAP, AgriStack — sab schemes ki jankari.',
  },
  {
    href: '/articles',
    icon: IconBookOpen,
    bg: 'bg-rose-50 dark:bg-rose-900/20',
    border: 'border-rose-200 dark:border-rose-800',
    iconBg: 'bg-rose-100 dark:bg-rose-800 text-rose-600 dark:text-rose-300',
    title: 'Latest Articles',
    desc: 'PM Kisan updates, farming tips, loan guides — Hindi mein simple bhasha.',
  },
];

export const FAQS = [
  {
    question: 'PM Kisan 24vi kist kab aayegi 2026 mein?',
    answer: 'PM Kisan ki 24vi kist October 2026 mein aane ki ummeed hai. Beneficiaries ko ₹2,000 seedha unke registered bank account mein Direct Benefit Transfer (DBT) ke through milenge. Apna status pmkisan.gov.in par check karein.',
  },
  {
    question: 'PM Kisan status check kaise karein online?',
    answer: 'PM Kisan status check karne ke liye: 1) pmkisan.gov.in par jayein, 2) "Beneficiary Status" par click karein, 3) Apna Aadhaar number ya registered mobile number enter karein, 4) OTP verify karein, 5) Apna latest payment status dekhein.',
  },
  {
    question: 'Kisan Credit Card (KCC) ke liye kaise apply karein?',
    answer: 'KCC apply karne ke liye apne nazdiki bank branch jayein, application form bharein, aur land documents, Aadhaar, aur PAN card submit karein. Bank verification ke baad aapko ₹5 lakh tak ka loan 4% ki concessional interest rate par mil jayega.',
  },
  {
    question: 'PM Kisan eKYC kaise complete karein?',
    answer: 'eKYC complete karne ke liye pmkisan.gov.in par jakar "Farmers Corner" mein "eKYC" option select karein. Apna Aadhaar number enter karke OTP ya biometric authentication ke through verify karein. Confirmation SMS aane par eKYC complete ho jati hai.',
  },
  {
    question: 'Tractor subsidy kaise milegi SMAM yojana mein?',
    answer: 'SMAM (Sub-Mission on Agricultural Mechanization) ke tahat tractor subsidy ke liye Kisan portal par register karein. Chhote aur seemant kisanon ko 35-50% tak subsidy milti hai, jo seedha dealer ko transfer ho jati hai, jisse bina down payment ke loan lena aasan ho jata hai.',
  },
];

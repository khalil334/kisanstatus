/**
 * Official Government Links Page — KisanStatus.com
 * Sari sarkari links ek jagah — clean & separate from about/privacy/disclaimer
 */
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sarkari Links — PM Kisan Official Government Portals | KisanStatus.com',
  description:
    'PM Kisan, eKYC, Beneficiary Status, Agriculture Ministry — sabhi official government portals ke direct links ek jagah. pmkisan.gov.in aur doosre sarkari portals.',
  authors: [{ name: 'Sidhu Singh', url: 'https://kisanstatus.com/about' }],
  alternates: { canonical: 'https://kisanstatus.com/official-links' },
  openGraph: {
    title: 'Sarkari Official Links — KisanStatus.com',
    description: 'PM Kisan aur sabhi sarkari portals ke direct links ek jagah.',
    type: 'website',
    url: 'https://kisanstatus.com/official-links',
  },
  robots: { index: true, follow: true },
};

const officialLinks = [
  {
    category: '🌾 PM Kisan Main Portal',
    links: [
      { label: 'PM Kisan Official Homepage', url: 'https://pmkisan.gov.in/', desc: 'Pradhan Mantri Kisan Samman Nidhi ka official portal' },
      { label: 'Beneficiary Status Check', url: 'https://pmkisan.gov.in/BeneficiaryStatus.aspx', desc: 'Apna PM Kisan payment status check karo' },
      { label: 'Beneficiary List (Village Wise)', url: 'https://pmkisan.gov.in/Rpt_BeneficiaryStatus_pub.aspx', desc: 'State, district, block, gaon ke hisaab se list' },
      { label: 'New Farmer Registration', url: 'https://pmkisan.gov.in/RegistrationForm.aspx', desc: 'Naye kisan ka PM Kisan registration' },
      { label: 'Edit / Correct Aadhaar', url: 'https://pmkisan.gov.in/UpdateAadharNo.aspx', desc: 'Aadhaar number me correction karo' },
    ],
  },
  {
    category: '🔐 eKYC & Verification',
    links: [
      { label: 'eKYC Online (OTP se)', url: 'https://pmkisan.gov.in/eKYC.aspx', desc: 'OTP se ghar baithe eKYC complete karo' },
      { label: 'Land Seeding Status', url: 'https://pmkisan.gov.in/LandSeeding.aspx', desc: 'Land seeding verification status dekho' },
      { label: 'Installment History', url: 'https://pmkisan.gov.in/AccountStatus.aspx', desc: 'Pichli kiston ka payment history check karo' },
    ],
  },
  {
    category: '🏛️ Agriculture Ministry',
    links: [
      { label: 'Ministry of Agriculture & Farmers Welfare', url: 'https://agriculture.gov.in/', desc: 'Krishi Mantralaya ka official website' },
      { label: 'PM Kisan Mobile App (Android)', url: 'https://play.google.com/store/apps/details?id=com.nic.project.pmkisan', desc: 'Official PM Kisan Android app' },
      { label: 'Digital India Portal', url: 'https://digitalindia.gov.in/', desc: 'Digital India — e-governance services' },
      { label: 'India.gov.in National Portal', url: 'https://www.india.gov.in/', desc: 'Government of India ka main portal' },
    ],
  },
  {
    category: '🌱 Kisan Related Schemes',
    links: [
      { label: 'PM Fasal Bima Yojana (PMFBY)', url: 'https://pmfby.gov.in/', desc: 'Pradhan Mantri Fasal Bima Yojana — crop insurance' },
      { label: 'Kisan Credit Card (KCC)', url: 'https://www.nabard.org/content.aspx?id=595', desc: 'Kisan Credit Card scheme information' },
      { label: 'Soil Health Card', url: 'https://soilhealth.dac.gov.in/', desc: 'Apni zameen ka soil health card dekho' },
      { label: 'PM Krishi Sinchai Yojana', url: 'https://pmksy.gov.in/', desc: 'Sinchai se sambandhit yojana' },
      { label: 'e-NAM (National Agriculture Market)', url: 'https://enam.gov.in/', desc: 'Online agriculture market — fasal becho' },
    ],
  },
  {
    category: '📞 Helpline & Support',
    links: [
      { label: 'PM Kisan Helpline — 155261', url: 'tel:155261', desc: 'Toll-free helpline — 9 AM to 5 PM' },
      { label: 'PM Kisan Alternate — 011-24300606', url: 'tel:01124300606', desc: 'Direct helpline number' },
      { label: 'PM Kisan Email Support', url: 'mailto:pmkisan-ict@gov.in', desc: 'Email karein: pmkisan-ict@gov.in' },
      { label: 'Kisan Call Center — 1800-180-1551', url: 'tel:18001801551', desc: 'Agriculture helpline — free call' },
    ],
  },
];

export default function OfficialLinksPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-primary-600 py-10">
        <div className="container-site">
          <nav className="text-green-200 text-sm mb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white">Official Government Links</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-white">🏛️ Sarkari Official Links</h1>
          <p className="text-green-200 text-sm mt-1">PM Kisan aur sabhi government portals ke direct links — ek jagah</p>
        </div>
      </div>

      <div className="container-site py-10 max-w-4xl mx-auto">

        {/* Disclaimer banner */}
        <div className="p-4 bg-amber-50 border border-amber-300 rounded-xl mb-8 text-sm text-amber-900">
          <strong>⚠️ Important:</strong> Neeche diye gaye saare links official government websites ke hain.
          KisanStatus.com in links ka sirf reference deta hai — hum koi government website nahi hain.
          Official kaam ke liye hamesha{' '}
          <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
            pmkisan.gov.in ↗
          </a>{' '}
          ka hi use karein.
        </div>

        {/* Links by category */}
        <div className="space-y-8">
          {officialLinks.map((section) => (
            <div key={section.category} className="card">
              <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-3 p-3 bg-gray-50 border border-gray-200 rounded-xl hover:border-green-400 hover:bg-green-50 transition-colors group"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-primary-700 group-hover:text-primary-900">
                        {link.label}
                        {link.url.startsWith('http') && <span className="ml-1 text-gray-400">↗</span>}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">{link.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 p-5 bg-green-50 border border-green-200 rounded-2xl text-center">
          <p className="text-sm text-gray-700 mb-3">
            <strong>KisanStatus.com</strong> ek informational website hai. Upar diye gaye links sirf aapki
            suvidha ke liye hain. Koi bhi official kaam seedha government website par hi karein.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/pm-kisan-status" className="btn-primary text-sm">✅ Status Check Guide</Link>
            <Link href="/articles/pm-kisan-ekyc-online-2026" className="btn-secondary text-sm">🔐 eKYC Guide</Link>
            <Link href="/contact" className="btn-secondary text-sm">📧 Contact Us</Link>
          </div>
        </div>

      </div>
    </>
  );
}

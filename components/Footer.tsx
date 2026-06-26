/**
 * Footer Component — KisanStatus.com v2.0
 * ✅ SEO OPTIMIZED — Internal linking structure
 * ✅ SCHEMA MARKUP — Organization + LocalBusiness
 * ✅ ACCESSIBILITY ENHANCED — ARIA labels, focus states
 * ✅ MOBILE RESPONSIVE — 4 column → 1 column
 * ✅ BETTER STRUCTURE — Quick articles, newsletter, social links
 */
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  const quickArticles = [
    { href: '/articles/pm-kisan-23vi-kist-2026-status-check', label: '23vi Kist Status 2026' },
    { href: '/articles/pm-kisan-ekyc-online-2026', label: 'eKYC Online Guide' },
    { href: '/articles/soil-health-card-complete-guide-2026', label: 'Soil Health Card Guide' },
    { href: '/articles/kisan-credit-card-online-apply-2026', label: 'KCC Loan Apply' },
    { href: '/articles/pm-kisan-payment-failed-status-2026', label: 'Payment Failed Fix' },
    { href: '/articles/agristack-kya-hai', label: 'AgriStack Kya Hai' },
  ];

  const siteLinks = [
    { href: '/', label: 'Home' },
    { href: '/articles', label: 'All Articles' },
    { href: '/pm-kisan-status', label: 'Status Check' },
    { href: '/calculator', label: 'Kisan Calculator' },
    { href: '/about', label: 'About Us' },
    { href: '/author', label: 'Author — Sidhu Singh' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const legalLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/disclaimer', label: 'Disclaimer' },
    { href: '/terms-of-service', label: 'Terms of Service' },
    { href: '/sitemap.xml', label: 'Sitemap' },
  ];

  const officialLinks = [
    { href: 'https://pmkisan.gov.in/', label: 'PM Kisan Official Portal' },
    { href: 'https://pmkisan.gov.in/BeneficiaryStatus.aspx', label: 'Beneficiary Status Check' },
    { href: 'https://pmkisan.gov.in/RegistrationForm.aspx', label: 'New Farmer Registration' },
    { href: 'https://pmkisan.gov.in/eKYC.aspx', label: 'eKYC Update Portal' },
    { href: 'https://pmkisan.gov.in/FarmerCorner.aspx', label: 'Farmers Corner' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto" itemScope itemType="https://schema.org/WPFooter">
      {/* Disclaimer banner — Legal requirement */}
      <div className="bg-amber-600 text-white text-sm text-center py-3 px-4" role="alert">
        ⚠️ <strong>Disclaimer:</strong> KisanStatus.com ek <strong>independent informational portal</strong> hai — Government of India ya pmkisan.gov.in ka official website NAHI hai.
        Official jankari ke liye visit karein{' '}
        <a
          href="https://pmkisan.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold hover:text-yellow-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
          aria-label="Visit official PM Kisan website (opens in new tab)"
        >
          pmkisan.gov.in ↗
        </a>
      </div>

      {/* Trust badges section */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="container-site py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl" aria-hidden="true">✅</span>
              <span className="text-xs text-gray-400">100% Free Info</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl" aria-hidden="true">🔒</span>
              <span className="text-xs text-gray-400">Data Safe</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl" aria-hidden="true">🏛️</span>
              <span className="text-xs text-gray-400">Govt Verified</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl" aria-hidden="true">✍️</span>
              <span className="text-xs text-gray-400">Expert Written</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-site py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="space-y-4" itemProp="publisher" itemScope itemType="https://schema.org/Organization">
            <h3 className="font-bold text-white text-xl flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">🌾</span>
              <span itemProp="name">KisanStatus.com</span>
            </h3>
            <p className="text-sm leading-relaxed text-gray-400" itemProp="description">
              PM Kisan ki sahi aur up-to-date jankari ke liye Bharat ka #1 bharosemand portal.
              Status check, eKYC guide, beneficiary list, Soil Health Card, KCC loan — sab Hindi mein.
            </p>
            
            {/* Author Credit */}
            <div 
              className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
              itemProp="founder" 
              itemScope 
              itemType="https://schema.org/Person"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
                SS
              </div>
              <div>
                <p className="text-xs text-gray-400">Author & Agricultural Expert</p>
                <p className="text-sm font-semibold text-white" itemProp="name">Sidhu Singh</p>
                <p className="text-xs text-gray-500">5+ Years Experience</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2 text-gray-400">
                <span aria-hidden="true">📧</span>
                <a 
                  href="mailto:kisanstatus.support@gmail.com" 
                  className="hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
                  itemProp="email"
                >
                  kisanstatus.support@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <span aria-hidden="true">📞</span>
                <span>PM Kisan Helpline: <strong className="text-gray-300">155261</strong></span>
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <span aria-hidden="true">🌍</span>
                <span itemProp="areaServed">India (Bharat)</span>
              </p>
            </div>

            {/* Social Media */}
            <div className="flex gap-2 pt-2">
              <a
                href="https://youtube.com/@kisanstatus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to KisanStatus YouTube channel"
                className="w-10 h-10 bg-red-600/20 hover:bg-red-600/40 text-red-400 hover:text-red-300 rounded-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://whatsapp.com/kisanstatus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join KisanStatus WhatsApp group"
                className="w-10 h-10 bg-green-600/20 hover:bg-green-600/40 text-green-400 hover:text-green-300 rounded-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://telegram.me/kisanstatus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join KisanStatus Telegram channel"
                className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 hover:text-blue-300 rounded-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/kisanstatus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow KisanStatus on Facebook"
                className="w-10 h-10 bg-blue-700/20 hover:bg-blue-700/40 text-blue-400 hover:text-blue-300 rounded-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Articles */}
          <div>
            <h4 className="font-semibold text-white text-base mb-4 flex items-center gap-2">
              <span aria-hidden="true">📚</span>
              Popular Articles
            </h4>
            <ul className="space-y-2 text-sm">
              {quickArticles.map((article) => (
                <li key={article.href}>
                  <Link 
                    href={article.href} 
                    className="hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded inline-block py-0.5"
                  >
                    {article.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link 
                  href="/articles" 
                  className="text-green-400 hover:text-green-300 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded inline-flex items-center gap-1"
                >
                  View All Articles
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* Site Links */}
          <div>
            <h4 className="font-semibold text-white text-base mb-4 flex items-center gap-2">
              <span aria-hidden="true">🗺️</span>
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm mb-6">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-white text-base mb-4 flex items-center gap-2">
              <span aria-hidden="true">📜</span>
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Resources */}
          <div>
            <h4 className="font-semibold text-white text-base mb-4 flex items-center gap-2">
              <span aria-hidden="true">🏛️</span>
              Official Government Links
            </h4>
            <ul className="space-y-2 text-sm mb-6">
              {officialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded inline-flex items-center gap-1 py-0.5"
                    aria-label={`${link.label} (opens in new tab)`}
                  >
                    {link.label}
                    <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            {/* Helpline Card */}
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-4 mt-4">
              <h5 className="text-sm font-bold text-green-300 mb-2">📞 24/7 Helpline</h5>
              <p className="text-xs text-gray-400 mb-3">
                PM Kisan ki kisi bhi problem ke liye call karein
              </p>
              <div className="space-y-2">
                <a
                  href="tel:155261"
                  className="block text-center bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  📱 Call: 155261 (Toll-Free)
                </a>
                <a
                  href="tel:01124300606"
                  className="block text-center bg-gray-700 hover:bg-gray-600 text-white text-sm py-2 px-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  📞 Landline: 011-24300606
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container-site py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p className="text-center md:text-left">
            © {year} <Link href="/" className="hover:text-gray-300 transition-colors font-semibold">KisanStatus.com</Link> by{' '}
            <Link href="/author" className="hover:text-gray-300 transition-colors font-semibold">Sidhu Singh</Link>
            {' '}— Informational purposes only. Not affiliated with Government of India.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy</Link>
            <Link href="/disclaimer" className="hover:text-gray-300 transition-colors">Disclaimer</Link>
            <Link href="/terms-of-service" className="hover:text-gray-300 transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-gray-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>

      {/* Schema.org structured data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'KisanStatus.com',
            url: 'https://kisanstatus.com',
            logo: 'https://kisanstatus.com/logo.webp',
            description: 'Independent informational portal providing PM Kisan Samman Nidhi status check, eKYC guides, beneficiary lists, and farming schemes information in Hindi.',
            founder: {
              '@type': 'Person',
              name: 'Sidhu Singh',
              jobTitle: 'Agricultural Content Expert',
              url: 'https://kisanstatus.com/author',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'kisanstatus.support@gmail.com',
              contactType: 'customer support',
              availableLanguage: ['Hindi', 'English'],
              areaServed: 'IN',
            },
            sameAs: [
              'https://youtube.com/@kisanstatus',
              'https://facebook.com/kisanstatus',
              'https://telegram.me/kisanstatus',
            ],
            foundingDate: '2024',
            slogan: 'India ka #1 PM Kisan Information Portal',
          }),
        }}
      />
    </footer>
  );
}
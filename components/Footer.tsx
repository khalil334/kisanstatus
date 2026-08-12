import Link from 'next/link';
import {
  AUTHOR_NAME,
  SITE_NAME,
  SUPPORT_EMAIL,
  HELPLINE,
  HELPLINE_ALT,
  SOCIAL_LINKS,
  getCopyrightYears,
} from '@/lib/site-config';

const EXTERNAL_ICON = (
  <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export default function Footer() {
  const currentYear = getCopyrightYears();

  return (
    <footer
      className="bg-[var(--color-text)] text-white py-12"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-white text-base mb-4" itemProp="name">{SITE_NAME}</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-4" itemProp="description">
              Bharat ke kisaanon ke liye — PM Kisan, eKYC, kist status, aur free agricultural calculators.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>
                By{' '}
                <Link
                  href="/about"
                  className="text-green-400 hover:text-green-300 hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
                  itemProp="url"
                >
                  <span itemProp="author">{AUTHOR_NAME}</span>
                </Link>
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white text-base mb-4">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2 text-sm" role="list">
                {[
                  { href: '/', label: '🏠 Home' },
                  { href: '/articles', label: 'All Articles' },
                  { href: '/articles/hi', label: '🇮🇳 हिंदी योजना गाइड' },
                  { href: '/rajya-yojana', label: '🏛️ Rajya Yojana' },
                  { href: '/calculator', label: 'Calculators' },
                  { href: '/calculator/quick-status-check', label: 'Quick Status Check' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded inline-block py-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-white text-base mb-4">Company & Legal</h4>
            <nav aria-label="Company and legal pages">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm" role="list">
                {[
                  { href: '/about', label: '👤 About Us' },
                  { href: '/contact', label: 'Contact Us' },
                  { href: '/privacy-policy', label: 'Privacy Policy' },
                  { href: '/terms-of-service', label: 'Terms of Service' },
                  { href: '/disclaimer', label: 'Disclaimer' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded inline-block py-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-white text-base mb-4 flex items-center gap-2">
              Website Contact
            </h4>

            <address className="bg-white/10 border border-white/10 rounded-lg p-4 mb-4 not-italic" itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
              <meta itemProp="contactType" content="customer support" />
              <meta itemProp="areaServed" content="IN" />
              <meta itemProp="availableLanguage" content="Hindi" />
              <meta itemProp="availableLanguage" content="English" />
              <h5 className="text-sm font-bold text-green-400 mb-3 flex items-center gap-2">
                 KisanStatus Se Sampark
              </h5>
              <div className="space-y-2.5 text-xs text-gray-300">
                <p className="flex items-start gap-2">
                  <span>
                    Email:{' '}
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="text-white hover:underline break-all focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
                      itemProp="email"
                    >
                      {SUPPORT_EMAIL}
                    </a>
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span>
                    <Link
                      href="/contact"
                      className="text-white hover:underline focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
                    >
                      Contact form se message bhejein
                    </Link>
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span itemProp="hoursAvailable" itemScope itemType="https://schema.org/OpeningHoursSpecification">
                    <meta itemProp="dayOfWeek" content="https://schema.org/Monday" />
                    <meta itemProp="dayOfWeek" content="https://schema.org/Tuesday" />
                    <meta itemProp="dayOfWeek" content="https://schema.org/Wednesday" />
                    <meta itemProp="dayOfWeek" content="https://schema.org/Thursday" />
                    <meta itemProp="dayOfWeek" content="https://schema.org/Friday" />
                    <meta itemProp="dayOfWeek" content="https://schema.org/Saturday" />
                    <meta itemProp="opens" content="09:30" />
                    <meta itemProp="closes" content="18:00" />
                    <span aria-hidden="true">Mon-Sat 9:30AM - 6:00PM</span>
                  </span>
                </p>
              </div>
            </address>

            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-3 rounded-lg transition-colors text-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Follow KisanStatus on Facebook (opens in new tab)"
              itemProp="sameAs"
            >
              👍 Facebook Page Par Follow Karein ↗
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 pb-6">
          <h4 className="font-semibold text-white text-base mb-4 flex items-center gap-2">
            <span aria-hidden="true">🏛️</span>
            Official Government Links & Helpline
          </h4>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
            <h5 className="text-sm font-bold text-green-400 mb-3 flex items-center gap-2">
               Sarkari Helpline (PM Kisan — Official)
            </h5>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs text-gray-300">
              <p className="flex items-start gap-2">
                <span>
                  PM Kisan Helpline:{' '}
                  <a
                    href={`tel:${HELPLINE}`}
                    className="text-white font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
                  >
                    {HELPLINE}
                  </a>{' '}
                  (Toll-Free)
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span>
                  Alt Helpline:{' '}
                  <a
                    href={`tel:${HELPLINE_ALT.replace(/-/g, '')}`}
                    className="text-white font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
                  >
                    {HELPLINE_ALT}
                  </a>
                </span>
              </p>
            </div>
            <p className="mt-2 text-[11px] text-gray-500">
              Ye numbers Government of India (PM Kisan) ke official helpline hain — KisanStatus ke nahi.
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm" role="list">
            {[
              { href: 'https://pmkisan.gov.in/', label: 'PM Kisan Portal' },
              { href: 'https://pmkisan.gov.in/BeneficiaryStatus.aspx', label: 'Beneficiary Status' },
              { href: 'https://pmkisan.gov.in/NewFarmerRegistration.aspx', label: 'New Registration' },
              { href: 'https://pmkisan.gov.in/FarmersCorner.aspx', label: 'Farmers Corner' },
              { href: 'https://pmkisan.gov.in/Dashboard.aspx', label: 'Dashboard' },
              { href: 'https://pmkisan.gov.in/Help.aspx', label: 'Help & Support' },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-gray-400 hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded inline-flex items-center gap-1 py-0.5"
                  aria-label={`${link.label} (opens in new tab)`}
                >
                  {link.label}
                  {EXTERNAL_ICON}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © {currentYear} {SITE_NAME} — Built with ❤️ for Indian Farmers
              </p>
              <p className="mt-1 text-xs text-gray-500">
                By{' '}
                <Link
                  href="/about"
                  className="text-green-400 hover:text-green-300 hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
                >
                  {AUTHOR_NAME}
                </Link>{' '}
                | Agricultural Content Expert
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs text-gray-500">Independent Information Portal</p>
              <p className="text-xs text-gray-600 mt-1">Not affiliated with Government of India</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

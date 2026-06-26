'use client';
/**
 * Header — KisanStatus.com v12
 * ✅ SEO OPTIMIZED
 * ✅ ACCESSIBILITY ENHANCED
 * ✅ BETTER NAVIGATION STRUCTURE
 * ✅ MOBILE-FIRST DESIGN
 * ✅ SCHEMA MARKUP ADDED
 */
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Logo from './Logo';

const navLinks = [
  { href: '/', label: 'Home', emoji: '🏠' },
  { href: '/articles', label: 'Articles', emoji: '📚' },
  { href: '/pm-kisan-status', label: 'Status Check', emoji: '📊' },
  { href: '/new-registration', label: 'New Registration', emoji: '📝' },
  { href: '/beneficiary-list/uttar-pradesh', label: 'Beneficiary List', emoji: '📋' },
  { href: '/calculator', label: 'Calculator', emoji: '🧮' },
  { href: '/about', label: 'About', emoji: 'ℹ️' },
  { href: '/contact', label: 'Contact', emoji: '📞' },
];

const quickLinks = [
  { href: '/articles/pm-kisan-23vi-kist-2026-status-check', label: '23vi Kist Status', emoji: '💰' },
  { href: '/articles/pm-kisan-ekyc-online-2026', label: 'eKYC Guide', emoji: '🔐' },
  { href: '/articles/soil-health-card-complete-guide-2026', label: 'Soil Health Card', emoji: '🌱' },
  { href: '/articles/kisan-credit-card-online-apply-2026', label: 'KCC Loan', emoji: '💳' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  return (
    <>
      <header 
        className={`bg-white border-b border-green-100 sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`} 
        role="banner"
        itemScope
        itemType="https://schema.org/WPHeader"
      >
        {/* Main header row */}
        <div className="container-site flex items-center justify-between h-16 gap-3">
          <Link 
            href="/" 
            aria-label="KisanStatus.com — Home" 
            className="shrink-0 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-lg"
          >
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav 
            aria-label="Main navigation" 
            className="hidden lg:flex items-center gap-1 flex-1 justify-center"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                  isActive(link.href)
                    ? 'text-primary-600 bg-green-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-green-50'
                }`}
                itemProp="url"
              >
                <span className="mr-1">{link.emoji}</span>
                <span itemProp="name">{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop right side: Language switcher + CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <LanguageSwitcher />
            <a
              href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-5 whitespace-nowrap hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label="Check PM Kisan status on official website (opens in new tab)"
            >
              ✅ Check Status ↗
            </a>
          </div>

          {/* Mobile: hamburger */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-primary-600 rounded-lg hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav 
            id="mobile-menu"
            className="lg:hidden border-t border-green-100 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto" 
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col py-2">
              {/* Quick Links Section */}
              <div className="px-4 py-3 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  🔥 Quick Links
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-gray-700 bg-white rounded-lg hover:bg-green-50 transition-colors min-h-[44px]"
                    >
                      <span>{link.emoji}</span>
                      <span className="truncate">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Main Navigation */}
              <div className="py-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 text-sm font-medium flex items-center gap-3 transition-colors min-h-[48px] ${
                      isActive(link.href)
                        ? 'text-primary-600 bg-green-50 border-l-4 border-primary-600'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-green-50'
                    }`}
                  >
                    <span className="text-lg">{link.emoji}</span>
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>

              {/* Bottom Actions */}
              <div className="px-4 py-3 border-t border-green-100 bg-gray-50 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-600">Language:</span>
                  <LanguageSwitcher />
                </div>
                <a
                  href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block py-3"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Check PM Kisan status on official website (opens in new tab)"
                >
                  ✅ Check Status on pmkisan.gov.in ↗
                </a>
              </div>
            </div>
          </nav>
        )}
      </header>

      {/* Schema.org structured data for navigation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SiteNavigationElement',
            name: navLinks.map(link => link.label),
            url: navLinks.map(link => `https://kisanstatus.com${link.href}`),
          }),
        }}
      />
    </>
  );
}
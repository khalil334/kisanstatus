'use client';
/**
 * Header — KisanStatus.com v10
 * Bugs fixed:
 *   - SearchBar completely removed (import + mobile bar + desktop button)
 *   - setDesktopSearch reference removed
 *   - Clean nav with all working links
 *   - Logo variant fixed: dark (white background par visible)
 */
import { useState } from 'react';
import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Logo from './Logo';

const navLinks = [
  { href: '/',                                label: 'Home' },
  { href: '/pm-kisan-status',                 label: 'Status Check' },
  { href: '/new-registration',                label: 'New Registration' },
  { href: '/beneficiary-list/uttar-pradesh',  label: 'Beneficiary List' },
  { href: '/about',                           label: 'About' },
  { href: '/contact',                         label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-green-100 sticky top-0 z-30 shadow-sm" role="banner">
      {/* Announcement bar */}
      <div className="bg-primary-600 text-white text-xs text-center py-1.5 px-4">
        🌾 PM Kisan 23vi Kist: 20 June 2026 ko release ho chuki hai — eKYC abhi kara lo warna agli kist ruk sakti hai | Helpline: 155261
      </div>

      {/* Main header row */}
      <div className="container-site flex items-center justify-between h-14 gap-3">
        <Link href="/" aria-label="KisanStatus.com — Home" className="shrink-0">
          <Logo variant="dark" />  {/* ✅ FIXED: was default 'light' — text invisible tha white bg par */}
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-green-50 rounded-lg transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right side: Language switcher + CTA */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <LanguageSwitcher />
          <a
            href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-4 whitespace-nowrap"
          >
            ✅ Check Status ↗
          </a>
        </div>

        {/* Mobile: hamburger */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:text-primary-600 rounded-lg hover:bg-green-50 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-green-100 bg-white" aria-label="Mobile navigation">
          <div className="flex flex-col py-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-green-50 transition-colors min-h-[48px] flex items-center"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 py-2 border-t border-green-50">
              <LanguageSwitcher />
            </div>
            <div className="px-4 pt-2 pb-3">
              <a
                href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block"
                onClick={() => setMobileOpen(false)}
              >
                ✅ Check Status on pmkisan.gov.in ↗
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

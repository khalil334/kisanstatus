'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/articles', label: 'Articles' },
  { href: '/articles/pm-kisan-23vi-kist-2026-status-check', label: 'Status Check' },
  { href: '/articles/pm-kisan-registration-online-2026', label: 'New Registration' },
  { href: '/articles/pm-kisan-beneficiary-list-2026', label: 'Beneficiary List' },
  { href: '/calculator', label: 'Calculator' },
];

const quickLinks = [
  { href: '/articles/pm-kisan-23vi-kist-2026-status-check', label: '23vi Kist Status' },
  { href: '/articles/pm-kisan-ekyc-online-2026', label: 'eKYC Guide' },
  { href: '/articles/soil-health-card-complete-guide-2026', label: 'Soil Health Card' },
  { href: '/articles/kisan-credit-card-online-apply-2026', label: 'KCC Loan' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  return (
    <header className={`bg-white border-b border-green-100 sticky top-0 z-50 transition-shadow ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container-site flex items-center justify-between h-16">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive(link.href)
                  ? 'text-green-700 bg-green-50'
                  : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-500 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors"
          >
            Check Status ↗
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-gray-700 hover:bg-green-50 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden border-t border-green-100 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 py-3 bg-green-50 border-b border-green-100">
            <p className="text-xs font-bold text-gray-500 uppercase mb-2">Quick Links</p>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 text-xs font-medium text-gray-700 bg-white rounded-lg hover:bg-green-50"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 text-sm font-medium ${
                  isActive(link.href)
                    ? 'text-green-700 bg-green-50 border-l-4 border-green-700'
                    : 'text-gray-700 hover:bg-green-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="px-4 py-3 border-t border-green-100 bg-gray-50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Language:</span>
              <LanguageSwitcher />
            </div>
            <a
              href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block w-full bg-green-600 hover:bg-green-500 text-white text-center font-bold py-3 rounded-lg"
            >
              Check Status on pmkisan.gov.in ↗
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
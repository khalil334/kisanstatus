'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';

// ── Navigation Data ─────────────────────────────────────────────────────────
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/articles', label: 'Articles' },
  { href: '/articles/pm-kisan-23vi-kist-2026-status-check', label: 'Status Check' },
  { href: '/articles/pm-kisan-registration-online-2026', label: 'New Registration' },
  { href: '/articles/pm-kisan-beneficiary-list-2026', label: 'Beneficiary List' },
  { href: '/calculator', label: 'Calculator' },
] as const;

const quickLinks = [
  { href: '/articles/pm-kisan-23vi-kist-2026-status-check', label: '23vi Kist Status', emoji: '📆' },
  { href: '/articles/pm-kisan-ekyc-online-2026', label: 'eKYC Guide', emoji: '🔐' },
  { href: '/articles/soil-health-card-complete-guide-2026', label: 'Soil Health Card', emoji: '🌱' },
  { href: '/articles/kisan-credit-card-online-apply-2026', label: 'KCC Loan', emoji: '💳' },
] as const;

// ── Header Component ────────────────────────────────────────────────────────
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // ── Scroll Effect ───────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Mobile Menu Body Scroll Lock ────────────────────────────────────────
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // ── Close mobile menu on route change ───────────────────────────────────
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // ── Memoized Active Check ───────────────────────────────────────────────
  const isActive = useCallback(
    (href: string) => {
      if (href === '/') return pathname === '/';
      return pathname?.startsWith(href);
    },
    [pathname]
  );

  // ── Memoized Nav Links ──────────────────────────────────────────────────
  const renderedNavLinks = useMemo(
    () =>
      navLinks.map((link) => {
        const active = isActive(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              active
                ? 'text-green-700 bg-green-50'
                : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
            }`}
            aria-current={active ? 'page' : undefined}
          >
            {link.label}
          </Link>
        );
      }),
    [isActive]
  );

  // ── Close Mobile Menu Handler ───────────────────────────────────────────
  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={`bg-white border-b border-green-100 sticky top-0 z-50 transition-shadow ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
      role="banner"
    >
      <div className="container-site flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="shrink-0" aria-label="KisanStatus Home">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center" aria-label="Main navigation">
          {renderedNavLinks}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-500 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors shadow-sm hover:shadow-md"
            aria-label="Check PM Kisan Status on official website"
          >
            Check Status ↗
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:bg-green-50 rounded-lg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          className="lg:hidden border-t border-green-100 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto"
          aria-label="Mobile navigation"
        >
          {/* Quick Links Section */}
          <div className="px-4 py-3 bg-green-50 border-b border-green-100">
            <p className="text-xs font-bold text-gray-500 uppercase mb-2">Quick Links</p>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="px-3 py-2 text-xs font-medium text-gray-700 bg-white rounded-lg hover:bg-green-50 transition-colors flex items-center gap-1.5"
                >
                  <span aria-hidden="true">{link.emoji}</span>
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Main Navigation Links */}
          <div className="py-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 text-sm font-medium transition-colors ${
                    active
                      ? 'text-green-700 bg-green-50 border-l-4 border-green-700'
                      : 'text-gray-700 hover:bg-green-50'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Actions */}
          <div className="px-4 py-3 border-t border-green-100 bg-gray-50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600 font-medium">Language:</span>
              <LanguageSwitcher />
            </div>
            <a
              href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="block w-full bg-green-600 hover:bg-green-500 text-white text-center font-bold py-3 rounded-lg transition-colors shadow-sm"
              aria-label="Check PM Kisan Status on official website"
            >
              Check Status on pmkisan.gov.in ↗
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
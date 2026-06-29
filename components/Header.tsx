'use client';

import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';
import { ARTICLES } from '@/lib/articles-data';

// ── Navigation Data ─────────────────────────────────────────────────────────
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/articles', label: 'Articles' },
  { href: '/articles/pm-kisan-23vi-kist-2026-status-check', label: 'Status Check' },
  { href: '/articles/pm-kisan-registration-online-2026', label: 'New Registration' },
  { href: '/beneficiary-list', label: 'Beneficiary List' },
  { href: '/calculator', label: 'Calculator' },
] as const;

const quickLinks = [
  { href: '/articles/pm-kisan-23vi-kist-2026-status-check', label: '23vi Kist Status', emoji: '📆' },
  { href: '/articles/pm-kisan-ekyc-online-2026', label: 'eKYC Guide', emoji: '🔐' },
  { href: '/articles/soil-health-card-complete-guide-2026', label: 'Soil Health Card', emoji: '🌱' },
  { href: '/articles/kisan-credit-card-online-apply-2026', label: 'KCC Loan', emoji: '💳' },
] as const;

// ── Dynamic Search from articles-data.ts ────────────────────────────────────
const CATEGORY_EMOJIS: Record<string, string> = {
  'status-check': '📆',
  'ekyc': '🔐',
  'payment': '💸',
  'loan': '💳',
  'registration': '📝',
  'farming': '🌱',
  'correction': '✏️',
};

function fuzzySearch(query: string) {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  return ARTICLES.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.keywords.some((kw) => kw.toLowerCase().includes(q)) ||
      item.category.toLowerCase().includes(q)
  )
    .sort((a, b) => {
      const aExact = a.title.toLowerCase().includes(q) ? 0 : 1;
      const bExact = b.title.toLowerCase().includes(q) ? 0 : 1;
      if (aExact !== bExact) return aExact - bExact;
      const dateA = new Date(a.publishedTime || 0).getTime();
      const dateB = new Date(b.publishedTime || 0).getTime();
      return dateB - dateA;
    })
    .slice(0, 6)
    .map((a) => ({
      slug: a.slug,
      title: a.title,
      emoji: CATEGORY_EMOJIS[a.category] || '📄',
      category: a.category,
    }));
}

// ── Search Modal ────────────────────────────────────────────────────────────
function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const results = useMemo(() => fuzzySearch(query), [query]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Search articles">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative max-w-lg mx-auto mt-20 md:mt-32 px-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-green-200">
          {/* Search Input */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 bg-green-50">
            <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search karo... e.g. eKYC, payment, loan"
              className="flex-1 bg-transparent text-sm font-medium text-gray-900 placeholder-gray-400 outline-none"
            />
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xs font-bold px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 transition-colors">
              ESC
            </button>
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto">
            {!query.trim() && (
              <div className="p-6 text-center">
                <span className="text-3xl block mb-2">🔍</span>
                <p className="text-sm text-gray-500">Type karke search karo — articles, guides, calculators</p>
              </div>
            )}

            {query.trim() && results.length === 0 && (
              <div className="p-6 text-center">
                <span className="text-3xl block mb-2">😕</span>
                <p className="text-sm text-gray-500">"<strong>{query}</strong>" ke liye kuch nahi mila</p>
                <Link href="/articles" onClick={onClose} className="text-green-700 text-xs font-bold mt-2 inline-block hover:underline">
                  Saare Articles Dekho →
                </Link>
              </div>
            )}

            {results.map((item) => (
              <Link
                key={item.slug}
                href={`/articles/${item.slug}`}
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 transition-colors border-b border-gray-50 last:border-0 group"
              >
                <span className="text-xl shrink-0">{item.emoji}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-gray-900 group-hover:text-green-700 transition-colors truncate">
                    {item.title}
                  </p>
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">{item.category}</p>
                </div>
                <span className="text-green-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-xs font-bold">→</span>
              </Link>
            ))}
          </div>

          {/* Footer */}
          <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
            <span className="text-[10px] text-gray-400">
              {query.trim() ? `${results.length} results` : `${ARTICLES.length} articles available`}
            </span>
            <Link href="/articles" onClick={onClose} className="text-[10px] text-green-700 font-bold hover:underline">
              View All Articles →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Header Component ────────────────────────────────────────────────────────
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [shortcutKey, setShortcutKey] = useState<string | null>(null); // ✅ ADDED: OS detection state
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // ✅ ADDED: Detect Mobile & OS for shortcut hint
  useEffect(() => {
    const updateShortcut = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      const isMobile = isTouchDevice || isSmallScreen;

      if (isMobile) {
        setShortcutKey(null); // Mobile par badge completely hide
      } else {
        const isMac = navigator.platform?.toUpperCase().includes('MAC') || 
                      navigator.userAgent?.toUpperCase().includes('MAC');
        setShortcutKey(isMac ? '⌘K' : 'Ctrl+K'); // Desktop par OS ke hisaab se text
      }
    };

    updateShortcut();
    window.addEventListener('resize', updateShortcut);
    return () => window.removeEventListener('resize', updateShortcut);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isActive = useCallback(
    (href: string) => {
      if (href === '/') return pathname === '/';
      return pathname?.startsWith(href);
    },
    [pathname]
  );

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

  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

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
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 bg-gray-50 border border-gray-200 rounded-lg hover:bg-green-50 hover:text-green-700 hover:border-green-200 transition-all"
              aria-label="Search articles"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="font-medium">Search</span>
              
              {/* ✅ UPDATED: Conditional rendering based on OS and Mobile detection */}
              {shortcutKey && (
                <kbd className="hidden xl:inline-flex text-[10px] font-mono text-gray-400 bg-white border border-gray-200 rounded px-1.5 py-0.5 ml-1">
                  {shortcutKey}
                </kbd>
              )}
            </button>

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

          {/* Mobile Actions Row */}
          <div className="flex lg:hidden items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-gray-700 hover:bg-green-50 rounded-lg transition-colors"
              aria-label="Search articles"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button
              className="p-2 text-gray-700 hover:bg-green-50 rounded-lg transition-colors"
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
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav
            id="mobile-menu"
            className="lg:hidden border-t border-green-100 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto"
            aria-label="Mobile navigation"
          >
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
    </>
  );
}
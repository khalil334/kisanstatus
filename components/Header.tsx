'use client';

import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';
import { ARTICLES } from '@/lib/articles-data';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/articles', label: 'Articles' },
  { href: '/articles/PmKisan24viKist2026', label: '24vi Kist Status' },
  { href: '/articles/PmKisanMasterGuide2026', label: 'Complete Guide' },
  { href: '/calculator', label: 'Calculator' },
] as const;

const quickLinks = [
  { href: '/articles/PmKisan24viKist2026', label: '24vi Kist Status', emoji: '📆' },
  { href: '/articles/pm-kisan-fto-generated-ka-matlab-kya-hai', label: 'FTO Guide', emoji: '📋' },
  { href: '/articles/soil-health-card-complete-guide-2026', label: 'Soil Health Card', emoji: '🌱' },
  { href: '/articles/KisanCreditCardOnlineApply2026', label: 'KCC Loan', emoji: '💳' },
] as const;

const CATEGORY_EMOJIS: Record<string, string> = {
  'status-check': '📆',
  'loan': '💳',
  'farming': '🌱',
  'mandi': '🏪',
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

function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const results = useMemo(() => fuzzySearch(query), [query]);

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
        <div className="bg-[var(--color-card)] rounded-2xl shadow-2xl overflow-hidden border border-[var(--color-border)]">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg-alt)]">
            <svg className="w-5 h-5 text-[var(--color-primary)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search karo... e.g. FTO, loan, mandi"
              className="flex-1 bg-transparent text-sm font-medium text-[var(--color-text)] placeholder-[var(--color-text-muted)] outline-none"
            />
            <button onClick={onClose} className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] text-xs font-bold px-2 py-1 rounded bg-[var(--color-bg-alt)] hover:bg-[var(--color-border)] transition-colors">
              ESC
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto">
            {!query.trim() && (
              <div className="p-6 text-center">
                <span className="text-3xl block mb-2">🔍</span>
                <p className="text-sm text-[var(--color-text-muted)]">Type karke search karo — articles, guides, calculators</p>
              </div>
            )}

            {query.trim() && results.length === 0 && (
              <div className="p-6 text-center">
                <span className="text-3xl block mb-2">😕</span>
                <p className="text-sm text-[var(--color-text-muted)]">"<strong>{query}</strong>" ke liye kuch nahi mila</p>
                <Link href="/articles" onClick={onClose} className="text-[var(--color-primary)] text-xs font-bold mt-2 inline-block hover:underline">
                  Saare Articles Dekho →
                </Link>
              </div>
            )}

            {results.map((item) => (
              <Link
                key={item.slug}
                href={`/articles/${item.slug}`}
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--color-bg-alt)] transition-colors border-b border-[var(--color-border)] last:border-0 group"
              >
                <span className="text-xl shrink-0">{item.emoji}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors truncate">
                    {item.title}
                  </p>
                  <p className="text-[10px] text-[var(--color-text-muted)] font-medium uppercase tracking-wide">{item.category}</p>
                </div>
                <span className="text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-xs font-bold">→</span>
              </Link>
            ))}
          </div>

          <div className="px-4 py-2 bg-[var(--color-bg-alt)] border-t border-[var(--color-border)] flex items-center justify-between">
            <span className="text-[10px] text-[var(--color-text-muted)]">
              {query.trim() ? `${results.length} results` : `${ARTICLES.length} articles available`}
            </span>
            <Link href="/articles" onClick={onClose} className="text-[10px] text-[var(--color-primary)] font-bold hover:underline">
              View All Articles →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else if (stored === 'light') {
      document.documentElement.classList.add('light');
      setIsDark(false);
    }
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('dark');
      html.classList.add('light');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.remove('light');
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  // ✅ FIX: Empty div ki jagah actual button return karo (hydration mismatch fix)
  return (
    <button
      onClick={toggle}
      className="theme-toggle"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light Mode' : 'Dark Mode'}
    >
      {isDark ? (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [shortcutKey, setShortcutKey] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth < 768;
    const isMobile = isTouchDevice || isSmallScreen;

    if (!isMobile) {
      const isMac = navigator.platform?.toUpperCase().includes('MAC') || 
                    navigator.userAgent?.toUpperCase().includes('MAC');
      setShortcutKey(isMac ? '⌘K' : 'Ctrl+K');
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

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
                ? 'text-[var(--color-primary)] bg-[var(--color-bg-alt)]' 
                : 'text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg-alt)]'
            }`}
            aria-current={active ? 'page' : undefined}
          >
            {link.label}
          </Link>
        );
      }),
    [isActive]
  );

  return (
    <>
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      <header
        className={`bg-[var(--color-card)] border-b border-[var(--color-border)] sticky top-0 z-50 transition-shadow ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
        role="banner"
      >
        <div className="container-site flex items-center justify-between h-16">
          <Link href="/" className="shrink-0" aria-label="KisanStatus Home">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center" aria-label="Main navigation">
            {renderedNavLinks}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-[var(--color-text-muted)] bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all"
              aria-label="Search articles"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="font-medium">Search</span>
              {shortcutKey && (
                <kbd className="hidden xl:inline-flex text-[10px] font-mono text-[var(--color-text-muted)] bg-[var(--color-card)] border border-[var(--color-border)] rounded px-1.5 py-0.5 ml-1">
                  {shortcutKey}
                </kbd>
              )}
            </button>

            <ThemeToggle />
            <LanguageSwitcher />
            <a
              href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors shadow-sm hover:shadow-md"
              aria-label="Check PM Kisan Status on official website"
            >
              Check Status ↗
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-[var(--color-text)] hover:bg-[var(--color-bg-alt)] rounded-lg transition-colors"
              aria-label="Search articles"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <ThemeToggle />

            <button
              className="p-2 text-[var(--color-text)] hover:bg-[var(--color-bg-alt)] rounded-lg transition-colors"
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

        {mobileOpen && (
          <nav
            id="mobile-menu"
            className="lg:hidden fixed top-16 right-0 w-80 max-w-[85vw] h-[calc(100vh-4rem)] bg-[var(--color-card)] border-l border-[var(--color-border)] shadow-2xl overflow-y-auto z-50"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-3 bg-[var(--color-bg-alt)] border-b border-[var(--color-border)]">
              <p className="text-xs font-bold text-[var(--color-text-muted)] uppercase mb-2">Quick Links</p>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2 text-xs font-medium text-[var(--color-text)] bg-[var(--color-card)] rounded-lg hover:bg-[var(--color-bg-alt)] transition-colors flex items-center gap-1.5"
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
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 text-sm font-medium transition-colors ${
                      active 
                        ? 'text-[var(--color-primary)] bg-[var(--color-bg-alt)] border-l-4 border-[var(--color-primary)]' 
                        : 'text-[var(--color-text)] hover:bg-[var(--color-bg-alt)]'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="px-4 py-3 border-t border-[var(--color-border)] bg-[var(--color-bg-alt)] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[var(--color-text-muted)] font-medium">Language:</span>
                <LanguageSwitcher />
              </div>
              <a
                href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-center font-bold py-3 rounded-lg transition-colors shadow-sm"
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
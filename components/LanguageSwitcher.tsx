/**
 * LanguageSwitcher — Dropdown to switch between 8 Indian languages
 * Shows native language name + English name
 */
'use client';

import { useState, useRef, useEffect } from 'react';
import { useLang } from '@/lib/LanguageContext';
import { LANGUAGES } from '@/lib/translations';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Trigger button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-green-200 bg-white hover:bg-green-50 transition-colors text-sm font-medium text-gray-700 min-h-[36px]"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden sm:inline">{current.label}</span>
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2"
          className={`shrink-0 text-gray-400 transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full mt-1.5 w-52 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden py-1"
        >
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              role="option"
              aria-selected={l.code === lang}
              onClick={() => { setLang(l.code); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-green-50 transition-colors text-sm
                ${l.code === lang ? 'bg-green-50 font-semibold text-green-800' : 'text-gray-700'}`}
            >
              <span className="text-lg shrink-0">{l.flag}</span>
              <div>
                <div className="font-medium leading-snug">{l.label}</div>
                <div className="text-xs text-gray-400 leading-none">{l.labelEn}</div>
              </div>
              {l.code === lang && (
                <svg className="ml-auto shrink-0 text-green-600" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

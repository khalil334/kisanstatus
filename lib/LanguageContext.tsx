/**
 * LanguageContext — React context for multi-language support
 * Stores selected language in localStorage so it persists across pages
 */
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { LangCode } from './translations';
import t from './translations';

interface LangContextType {
  lang: LangCode;
  setLang: (l: LangCode) => void;
  tr: typeof t['hi'];
}

const LangContext = createContext<LangContextType>({
  lang: 'hi',
  setLang: () => {},
  tr: t['hi'],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>('hi');

  // Read from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ks_lang') as LangCode | null;
      if (saved && t[saved]) setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: LangCode) => {
    setLangState(l);
    try { localStorage.setItem('ks_lang', l); } catch {}
  };

  return (
    <LangContext.Provider value={{ lang, setLang, tr: t[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);

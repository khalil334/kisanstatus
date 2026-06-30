'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import type { LangCode } from './translations';
import t from './translations';
import { trackEvent } from './gtag';

const STORAGE_KEY = 'ks_lang';
const DEFAULT_LANG: LangCode = 'hi';
const SUPPORTED_LANGS: LangCode[] = ['hi', 'en'];

const LANGUAGE_META = {
  hi: { name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳', dir: 'ltr' as const },
  en: { name: 'English', nativeName: 'English', flag: '🇬🇧', dir: 'ltr' as const },
};

interface LangContextType {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
  tr: typeof t['hi'];
  isLoaded: boolean;
  getLangName: (code: LangCode) => string;
  supportedLangs: LangCode[];
}

interface LanguageProviderProps {
  children: React.ReactNode;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

function getBrowserLanguage(): LangCode {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  
  try {
    const languages = navigator.languages || [navigator.language];
    
    for (const lang of languages) {
      const langCode = lang.toLowerCase();
      if (langCode.startsWith('en')) return 'en';
      if (langCode.startsWith('hi')) return 'hi';
    }
    
    const primaryLang = languages[0]?.toLowerCase() || '';
    const indianLangs = ['bn', 'ta', 'te', 'mr', 'gu', 'kn', 'ml', 'pa', 'ur'];
    if (indianLangs.some(lang => primaryLang.startsWith(lang))) return 'hi';
    
    return DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
}

function getStoredLanguage(): LangCode | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LANGS.includes(stored as LangCode)) {
      return stored as LangCode;
    }
    return null;
  } catch {
    return null;
  }
}

function setStoredLanguage(lang: LangCode): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {}
}

function updateDocumentLang(lang: LangCode): void {
  if (typeof document === 'undefined') return;
  const meta = LANGUAGE_META[lang as keyof typeof LANGUAGE_META];
  if (meta) {
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;
  }
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [lang, setLangState] = useState<LangCode>(DEFAULT_LANG);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedLang = getStoredLanguage();
    const browserLang = getBrowserLanguage();
    const initialLang = storedLang || browserLang || DEFAULT_LANG;
    
    setLangState(initialLang);
    updateDocumentLang(initialLang);
    setIsLoaded(true);
  }, []);

  const setLang = useCallback((newLang: LangCode) => {
    if (!SUPPORTED_LANGS.includes(newLang)) return;

    setLangState(newLang);
    setStoredLanguage(newLang);
    updateDocumentLang(newLang);
    
    try {
      trackEvent('select_language', {
        event_category: 'User Preference',
        event_label: newLang,
        value: LANGUAGE_META[newLang as keyof typeof LANGUAGE_META]?.name,
      });
    } catch {}
  }, []);

  const getLangName = useCallback((code: LangCode): string => {
    return LANGUAGE_META[code as keyof typeof LANGUAGE_META]?.nativeName || code;
  }, []);

  const contextValue = useMemo<LangContextType>(() => ({
    lang,
    setLang,
    tr: t[lang] || t[DEFAULT_LANG],
    isLoaded,
    getLangName,
    supportedLangs: SUPPORTED_LANGS,
  }), [lang, setLang, isLoaded, getLangName]);

  return (
    <LangContext.Provider value={contextValue}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextType {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within LanguageProvider');
  }
  return context;
}

export function getSupportedLanguages(): LangCode[] {
  return SUPPORTED_LANGS;
}

export function isLanguageSupported(lang: string): lang is LangCode {
  return SUPPORTED_LANGS.includes(lang as LangCode);
}

export function getLanguageName(lang: LangCode): string {
  return LANGUAGE_META[lang as keyof typeof LANGUAGE_META]?.nativeName || lang;
}

export function getLanguageFlag(lang: LangCode): string {
  return LANGUAGE_META[lang as keyof typeof LANGUAGE_META]?.flag || '🌐';
}
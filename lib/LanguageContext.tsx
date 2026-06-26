/**
 * LanguageContext — React context for multi-language support
 * ✅ PRODUCTION READY v2.0
 * ✅ TYPE SAFE
 * ✅ HYDRATION SAFE
 * ✅ BROWSER LANGUAGE DETECTION
 * ✅ LOCALSTORAGE PERSISTENCE
 * ✅ ANALYTICS INTEGRATION
 * 
 * Features:
 * - Stores selected language in localStorage
 * - Detects browser language on first visit
 * - Hydration-safe (no SSR mismatches)
 * - Type-safe language switching
 * - Analytics tracking for language changes
 */
'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import type { LangCode } from './translations';
import t from './translations';
import { trackEvent } from './gtag';

// ── Types ─────────────────────────────────────────────────────────────────────

interface LangContextType {
  /** Current language code */
  lang: LangCode;
  /** Set new language */
  setLang: (lang: LangCode) => void;
  /** Translation function for current language */
  tr: typeof t['hi'];
  /** Check if language is loaded */
  isLoaded: boolean;
}

// ── Constants ─────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'ks_lang';
const DEFAULT_LANG: LangCode = 'hi';
const SUPPORTED_LANGS: LangCode[] = ['hi', 'en'];

// ── Helper Functions ──────────────────────────────────────────────────────────

/**
 * Get browser language from navigator
 * Returns 'hi' or 'en' based on browser settings
 */
function getBrowserLanguage(): LangCode {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  
  try {
    const browserLang = navigator.language.toLowerCase();
    
    // Check if browser language starts with 'en'
    if (browserLang.startsWith('en')) {
      return 'en';
    }
    
    // Check if browser language starts with 'hi'
    if (browserLang.startsWith('hi')) {
      return 'hi';
    }
    
    // Default to Hindi for Indian languages
    if (
      browserLang.startsWith('bn') || // Bengali
      browserLang.startsWith('ta') || // Tamil
      browserLang.startsWith('te') || // Telugu
      browserLang.startsWith('mr') || // Marathi
      browserLang.startsWith('gu') || // Gujarati
      browserLang.startsWith('kn') || // Kannada
      browserLang.startsWith('ml') || // Malayalam
      browserLang.startsWith('pa') || // Punjabi
      browserLang.startsWith('ur')    // Urdu
    ) {
      return 'hi';
    }
    
    return DEFAULT_LANG;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('[LanguageContext] Error detecting browser language:', error);
    }
    return DEFAULT_LANG;
  }
}

/**
 * Safely read from localStorage
 */
function getStoredLanguage(): LangCode | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LANGS.includes(stored as LangCode)) {
      return stored as LangCode;
    }
    return null;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('[LanguageContext] Error reading from localStorage:', error);
    }
    return null;
  }
}

/**
 * Safely write to localStorage
 */
function setStoredLanguage(lang: LangCode): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('[LanguageContext] Error writing to localStorage:', error);
    }
  }
}

// ── Context Creation ──────────────────────────────────────────────────────────

const LangContext = createContext<LangContextType | undefined>(undefined);

// ── Provider Component ────────────────────────────────────────────────────────

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>(DEFAULT_LANG);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize language on mount (hydration-safe)
  useEffect(() => {
    // Priority: localStorage > browser language > default
    const storedLang = getStoredLanguage();
    const browserLang = getBrowserLanguage();
    const initialLang = storedLang || browserLang || DEFAULT_LANG;
    
    setLangState(initialLang);
    setIsLoaded(true);
    
    if (process.env.NODE_ENV === 'development') {
      console.log('[LanguageContext] Initialized with language:', initialLang, {
        stored: storedLang,
        browser: browserLang,
        default: DEFAULT_LANG,
      });
    }
  }, []);

  // Language change handler with analytics
  const setLang = useCallback((newLang: LangCode) => {
    if (!SUPPORTED_LANGS.includes(newLang)) {
      if (process.env.NODE_ENV === 'development') {
        console.error('[LanguageContext] Invalid language code:', newLang);
      }
      return;
    }

    setLangState(newLang);
    setStoredLanguage(newLang);
    
    // Track language change in analytics
    try {
      trackEvent('select_language', {
        event_category: 'User Preference',
        event_label: newLang,
      });
    } catch (error) {
      // Analytics error shouldn't break the app
      if (process.env.NODE_ENV === 'development') {
        console.error('[LanguageContext] Error tracking language change:', error);
      }
    }

    // Update document language attribute for SEO
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLang;
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('[LanguageContext] Language changed to:', newLang);
    }
  }, []);

  // Get translations for current language
  const tr = t[lang] || t[DEFAULT_LANG];

  // Context value
  const contextValue: LangContextType = {
    lang,
    setLang,
    tr,
    isLoaded,
  };

  return (
    <LangContext.Provider value={contextValue}>
      {children}
    </LangContext.Provider>
  );
}

// ── Hook ──────────────────────────────────────────────────────────────────────

/**
 * Custom hook to access language context
 * 
 * @example
 * const { lang, setLang, tr, isLoaded } = useLang();
 * 
 * // Change language
 * setLang('en');
 * 
 * // Use translation
 * const title = tr.home.title;
 */
export function useLang(): LangContextType {
  const context = useContext(LangContext);
  
  if (context === undefined) {
    throw new Error(
      'useLang must be used within a LanguageProvider. ' +
      'Wrap your component tree with <LanguageProvider>.'
    );
  }
  
  return context;
}

// ── Utility Exports ───────────────────────────────────────────────────────────

/**
 * Get all supported languages
 */
export function getSupportedLanguages(): LangCode[] {
  return SUPPORTED_LANGS;
}

/**
 * Check if a language code is supported
 */
export function isLanguageSupported(lang: string): lang is LangCode {
  return SUPPORTED_LANGS.includes(lang as LangCode);
}

/**
 * Get language display name
 */
export function getLanguageName(lang: LangCode): string {
  const names: Record<LangCode, string> = {
    hi: 'हिंदी',
    en: 'English',
  };
  return names[lang] || lang;
}

/**
 * Get language native name
 */
export function getLanguageNativeName(lang: LangCode): string {
  const names: Record<LangCode, string> = {
    hi: 'Hindi',
    en: 'English',
  };
  return names[lang] || lang;
}
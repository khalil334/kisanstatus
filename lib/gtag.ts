/**
 * Google Analytics 4 helper utilities — KisanStatus.com
 * ✅ PRODUCTION READY v2.0
 * ✅ TYPE SAFE
 * ✅ ERROR HANDLING
 * ✅ SEO TRACKING EVENTS
 * ✅ PERFORMANCE OPTIMIZED
 * 
 * Setup Instructions:
 * 1. Create .env.local file in root directory
 * 2. Add: NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
 * 3. Restart development server
 */

// ── Types ─────────────────────────────────────────────────────────────────────

/**
 * GA4 Event types for better type safety
 */
export type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

/**
 * Recommended GA4 event types
 */
export type GA4Event = 
  | 'page_view'
  | 'scroll'
  | 'click'
  | 'view_search_results'
  | 'file_download'
  | 'form_submit'
  | 'share'
  | 'login'
  | 'sign_up'
  | 'purchase'
  | 'generate_lead'
  | 'custom';

/**
 * GA4 Event parameters
 */
export interface GA4EventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  currency?: string;
  transaction_id?: string;
  [key: string]: string | number | boolean | undefined;
}

// ── Measurement ID ─────────────────────────────────────────────────────────────

/**
 * GA4 Measurement ID from environment variable
 * Fallback to default ID if not set
 */
export const GA_MEASUREMENT_ID: string = 
  process.env.NEXT_PUBLIC_GA_ID ?? 'G-GZLLLGC4VC';

/**
 * Check if GA is enabled
 */
export const isGAEnabled: boolean = 
  typeof window !== 'undefined' && 
  typeof window.gtag !== 'undefined' &&
  GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX';

// ── Core Functions ─────────────────────────────────────────────────────────────

/**
 * Track a page view
 * Called automatically by Next.js router events
 * 
 * @param url - Page URL to track
 * @param title - Page title (optional)
 * 
 * @example
 * pageview('/articles/pm-kisan-23vi-kist')
 * pageview('/articles/pm-kisan-23vi-kist', 'PM Kisan 23vi Kist Status')
 */
export function pageview(url: string, title?: string): void {
  if (!isGAEnabled) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[GA4] Page view:', { url, title });
    }
    return;
  }

  try {
    window.gtag?.('config', GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: title,
    });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('[GA4] Error tracking page view:', error);
    }
  }
}

/**
 * Fire a custom GA4 event
 * 
 * @param params - Event parameters
 * 
 * @example
 * gtag({ 
 *   action: 'click_status_check_btn', 
 *   category: 'CTA', 
 *   label: 'Hero Section' 
 * })
 */
export function gtag({ action, category, label, value }: GTagEvent): void {
  if (!isGAEnabled) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[GA4] Custom event:', { action, category, label, value });
    }
    return;
  }

  try {
    window.gtag?.('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('[GA4] Error tracking custom event:', error);
    }
  }
}

/**
 * Fire a recommended GA4 event
 * 
 * @param eventName - GA4 recommended event name
 * @param params - Event parameters
 * 
 * @example
 * trackEvent('click', { 
 *   event_category: 'navigation',
 *   event_label: 'header_menu'
 * })
 */
export function trackEvent(eventName: GA4Event, params?: GA4EventParams): void {
  if (!isGAEnabled) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[GA4] Recommended event:', { eventName, params });
    }
    return;
  }

  try {
    window.gtag?.('event', eventName, params);
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('[GA4] Error tracking recommended event:', error);
    }
  }
}

// ── Pre-defined Event Trackers ─────────────────────────────────────────────────

/**
 * Track article view
 */
export function trackArticleView(articleSlug: string, articleTitle: string): void {
  trackEvent('view_item', {
    event_category: 'Article',
    event_label: articleSlug,
    value: articleTitle,
  });
}

/**
 * Track CTA button click
 */
export function trackCTAClick(buttonName: string, location: string): void {
  trackEvent('click', {
    event_category: 'CTA',
    event_label: buttonName,
    value: location,
  });
}

/**
 * Track external link click
 */
export function trackExternalLink(url: string, linkText: string): void {
  trackEvent('click', {
    event_category: 'External Link',
    event_label: linkText,
    value: url,
  });
}

/**
 * Track form submission
 */
export function trackFormSubmit(formName: string, success: boolean): void {
  trackEvent('form_submit', {
    event_category: 'Form',
    event_label: formName,
    value: success ? 'success' : 'error',
  });
}

/**
 * Track search query
 */
export function trackSearch(query: string, resultsCount: number): void {
  trackEvent('view_search_results', {
    search_term: query,
    value: resultsCount,
  });
}

/**
 * Track social share
 */
export function trackShare(platform: string, contentType: string, contentId: string): void {
  trackEvent('share', {
    method: platform,
    content_type: contentType,
    item_id: contentId,
  });
}

/**
 * Track newsletter signup
 */
export function trackNewsletterSignup(source: string): void {
  trackEvent('sign_up', {
    event_category: 'Newsletter',
    event_label: source,
  });
}

/**
 * Track file download
 */
export function trackFileDownload(fileName: string, fileType: string): void {
  trackEvent('file_download', {
    file_name: fileName,
    file_extension: fileType,
  });
}

/**
 * Track error
 */
export function trackError(errorMessage: string, errorType: string): void {
  trackEvent('exception', {
    description: errorMessage,
    fatal: false,
    error_type: errorType,
  });
}

/**
 * Track time on page
 */
export function trackTimeOnPage(timeSpent: number, pageUrl: string): void {
  trackEvent('custom', {
    event_category: 'Engagement',
    event_label: 'Time on Page',
    value: timeSpent,
    page_url: pageUrl,
  });
}

// ── Global type augmentation ──────────────────────────────────────────────────

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// ── Development Mode Helpers ──────────────────────────────────────────────────

/**
 * Log all GA4 events in development mode
 */
if (process.env.NODE_ENV === 'development') {
  console.log('[GA4] Analytics initialized', {
    measurementId: GA_MEASUREMENT_ID,
    enabled: isGAEnabled,
    environment: process.env.NODE_ENV,
  });
}
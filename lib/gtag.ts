/**
 * Google Analytics 4 helper utilities — KisanStatus.com
 * Setup: .env.local mein NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX add karo
 */

export type GA4Event = 
  // Standard GA4 Events
  | 'page_view'
  | 'scroll'
  | 'click'
  | 'view_search_results'
  | 'file_download'
  | 'form_start'
  | 'form_submit'
  | 'share'
  | 'login'
  | 'sign_up'
  | 'purchase'
  | 'generate_lead'
  | 'view_item'
  | 'select_item'
  | 'select_language'  // ✅ YE ADD KIYA - missing tha
  | 'add_to_cart'
  | 'remove_from_cart'
  | 'begin_checkout'
  | 'add_payment_info'
  | 'add_shipping_info'
  | 'exception'
  | 'screen_view'
  
  // Custom Events for KisanStatus
  | 'article_view'
  | 'cta_click'
  | 'external_link_click'
  | 'search_query'
  | 'newsletter_signup'
  | 'time_on_page'
  | 'chatbot_open'
  | 'chatbot_close'
  | 'chatbot_message'
  | 'chatbot_response'
  | 'chatbot_error'
  | 'chatbot_quick_question'
  | 'language_change'
  | 'calculator_use'
  | 'status_check'
  | 'custom';

export interface GA4EventParams {
  event_category?: string;
  event_label?: string;
  value?: string | number;
  currency?: string;
  transaction_id?: string;
  item_id?: string;
  item_name?: string;
  item_brand?: string;
  item_category?: string;
  price?: number;
  quantity?: number;
  search_term?: string;
  method?: string;
  content_type?: string;
  description?: string;
  fatal?: boolean;
  error_type?: string;
  page_url?: string;
  user_type?: string;
  location?: string;
  from_language?: string;
  to_language?: string;
  file_name?: string;
  file_extension?: string;
  [key: string]: string | number | boolean | undefined;
}

export type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: string | number;
};

export const GA_MEASUREMENT_ID: string = 
  process.env.NEXT_PUBLIC_GA_ID ?? 'G-GZLLLGC4VC';

export const isGAEnabled: boolean = 
  typeof window !== 'undefined' && 
  typeof window.gtag !== 'undefined' &&
  GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX' &&
  process.env.NODE_ENV !== 'test';

export function pageview(url: string, title?: string): void {
  if (!isGAEnabled) return;
  try {
    window.gtag?.('config', GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: title,
    });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('[GA4] Page view error:', error);
    }
  }
}

export function gtag({ action, category, label, value }: GTagEvent): void {
  if (!isGAEnabled) return;
  try {
    window.gtag?.('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('[GA4] Custom event error:', error);
    }
  }
}

export function trackEvent(eventName: GA4Event, params?: GA4EventParams): void {
  if (!isGAEnabled) return;
  try {
    window.gtag?.('event', eventName, params);
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('[GA4] Event error:', error);
    }
  }
}

export function trackArticleView(articleSlug: string, articleTitle: string): void {
  trackEvent('article_view', {
    event_category: 'Article',
    event_label: articleSlug,
    item_id: articleSlug,
    item_name: articleTitle,
  });
}

export function trackCTAClick(buttonName: string, location: string): void {
  trackEvent('cta_click', {
    event_category: 'CTA',
    event_label: buttonName,
    location,
  });
}

export function trackExternalLink(url: string, linkText: string): void {
  trackEvent('external_link_click', {
    event_category: 'External Link',
    event_label: linkText,
    page_url: url,
  });
}

export function trackFormSubmit(formName: string, success: boolean): void {
  trackEvent('form_submit', {
    event_category: 'Form',
    event_label: formName,
    value: success ? 1 : 0,
  });
}

export function trackSearch(query: string, resultsCount: number): void {
  trackEvent('search_query', {
    event_category: 'Search',
    event_label: query,
    search_term: query,
    value: resultsCount,
  });
}

export function trackShare(platform: string, contentType: string, contentId: string): void {
  trackEvent('share', {
    method: platform,
    content_type: contentType,
    item_id: contentId,
  });
}

export function trackNewsletterSignup(source: string): void {
  trackEvent('newsletter_signup', {
    event_category: 'Newsletter',
    event_label: source,
  });
}

export function trackFileDownload(fileName: string, fileType: string): void {
  trackEvent('file_download', {
    event_category: 'Download',
    event_label: fileName,
    file_name: fileName,
    file_extension: fileType,
  });
}

export function trackError(errorMessage: string, errorType: string): void {
  trackEvent('exception', {
    description: errorMessage,
    fatal: false,
    error_type: errorType,
  });
}

export function trackTimeOnPage(timeSpent: number, pageUrl: string): void {
  trackEvent('time_on_page', {
    event_category: 'Engagement',
    event_label: 'Time on Page',
    value: timeSpent,
    page_url: pageUrl,
  });
}

export function trackChatbot(action: 'open' | 'close' | 'message' | 'response' | 'error' | 'quick_question', data?: Record<string, string | number>): void {
  trackEvent(`chatbot_${action}` as GA4Event, {
    event_category: 'AI Assistant',
    event_label: action,
    ...data,
  });
}

export function trackLanguageChange(fromLang: string, toLang: string): void {
  trackEvent('language_change', {
    event_category: 'User Preference',
    event_label: toLang,
    from_language: fromLang,
    to_language: toLang,
  });
}

export function trackCalculatorUse(calculatorName: string, result?: number): void {
  trackEvent('calculator_use', {
    event_category: 'Tools',
    event_label: calculatorName,
    value: result,
  });
}

export function trackStatusCheck(statusType: string, result: string): void {
  trackEvent('status_check', {
    event_category: 'Status',
    event_label: statusType,
    value: result,
  });
}

export function batchTrack(events: Array<{ event: GA4Event; params?: GA4EventParams }>): void {
  events.forEach(({ event, params }) => {
    trackEvent(event, params);
  });
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
/**
 * Google Analytics 4 helper utilities
 * Replace 'G-XXXXXXXXXX' with your actual GA4 Measurement ID in .env.local:
 *   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
 */

// ── Types ─────────────────────────────────────────────────────────────────────

export type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

// ── Measurement ID ─────────────────────────────────────────────────────────────
// TODO: Replace with your GA4 Measurement ID — e.g. NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID ?? 'G-GZLLLGC4VC';

// ── Page View ─────────────────────────────────────────────────────────────────

/**
 * Track a page view. Called on route changes (handled automatically by Next.js
 * script strategy="afterInteractive" in layout.tsx).
 */
export function pageview(url: string): void {
  if (typeof window === 'undefined') return;
  window.gtag?.('config', GA_MEASUREMENT_ID, { page_path: url });
}

// ── Custom Event ──────────────────────────────────────────────────────────────

/**
 * Fire a custom GA4 event.
 * @example gtag({ action: 'click_status_check_btn', category: 'CTA', label: 'Hero' })
 */
export function gtag({ action, category, label, value }: GTagEvent): void {
  if (typeof window === 'undefined') return;
  window.gtag?.('event', action, {
    event_category: category,
    event_label:    label,
    value,
  });
}

// ── Global type augmentation ──────────────────────────────────────────────────
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
  }
}

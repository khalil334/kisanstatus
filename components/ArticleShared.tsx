'use client';
/**
 * ArticleShared.tsx — Reusable components for article pages
 * Data-driven, scheme-agnostic, programmatic SEO ready
 */
import Link from 'next/link';
import React, { useMemo } from 'react';
import { SITE_URL, AUTHOR_NAME, AUTHOR_BIO, DISCLAIMER_TEXT, HELPLINE } from '@/lib/site-config';

// ═══════════════════════════════════════════════════════════
// DATE FORMATTER
// ═══════════════════════════════════════════════════════════

export function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// ═══════════════════════════════════════════════════════════
// STEP LIST COMPONENTS — Semantic HTML with proper list structure
// ═══════════════════════════════════════════════════════════

export function SI({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-3 items-stretch mb-2">
      <div className="flex flex-col items-center shrink-0 w-9">
        <div className="w-9 h-9 rounded-full bg-[var(--color-primary)] text-white text-sm font-black flex items-center justify-center shadow-md shrink-0">
          {n}
        </div>
        <div className="w-0.5 flex-1 bg-gradient-to-b from-green-300 to-transparent mt-1 min-h-[12px]" />
      </div>
      <div className="flex-1 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-[var(--color-text)] leading-relaxed shadow-sm mb-1 hover:border-[var(--color-primary)] transition-colors">
        {children}
      </div>
    </li>
  );
}

export function StepList({ children }: { children: React.ReactNode }) {
  return <ol className="space-y-0 my-4 list-none">{children}</ol>;
}

// ═══════════════════════════════════════════════════════════
// INFO BOXES — Color-coded for different message types
// ═══════════════════════════════════════════════════════════

export function IB({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 dark:border-green-500 rounded-r-xl text-sm text-[var(--color-text)] leading-relaxed" role="note">
      {children}
    </div>
  );
}

export function WB({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 p-4 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-xl text-sm text-[var(--color-text)] leading-relaxed" role="note">
      {children}
    </div>
  );
}

export function DB({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-xl text-sm text-[var(--color-text)] leading-relaxed" role="alert">
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SECTION HEADING — Consistent h2 styling
// ═══════════════════════════════════════════════════════════

export function SH({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-black text-[var(--color-text)] mb-4 pb-2 border-b-2 border-[var(--color-border)] flex items-center gap-2">
      {children}
    </h2>
  );
}

// ═══════════════════════════════════════════════════════════
// GOV LINK — Scheme-agnostic, portal URL from props
// ═══════════════════════════════════════════════════════════

export function GovLink({
  href,
  label,
  guide,
  guideHref,
  portalName = 'Official Government Portal',
}: {
  href: string;
  label: string;
  guide: string;
  guideHref?: string;
  portalName?: string;
}) {
  return (
    <div className="my-5 border-2 border-[
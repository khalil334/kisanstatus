import Link from 'next/link';
import { getCrossSectionLinks, getLanguagePairLink, type SectionKind } from '@/lib/cross-links';

/**
 * Cross-section internal-link block (SEO-INDEXING-FIX.md — Fix 0 / Part 11).
 *
 * Rendered at the bottom of every article template. Unlike the existing
 * same-category "Related Articles" blocks, this deliberately links OUT of the
 * current section (Hindi ↔ Hinglish ↔ calculators ↔ maandhan ↔ rajya-yojana ↔
 * category hubs) so the orphaned sections get inbound internal links.
 */
export function CrossSectionLinks({
  currentPath,
  section,
  heading = 'Site Ke Doosre Section — Yeh Bhi Dekhein',
}: {
  currentPath: string;
  section: SectionKind;
  heading?: string;
}) {
  const links = getCrossSectionLinks(currentPath, section);
  const pair = getLanguagePairLink(currentPath);
  if (links.length === 0 && !pair) return null;

  return (
    <section
      aria-labelledby="cross-section-links"
      className="container-site max-w-3xl mx-auto px-4 pb-10"
    >
      <div className="mt-8 p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl">
        <h2
          id="cross-section-links"
          className="font-black text-[var(--color-text)] mb-4 text-base"
        >
          {heading}
        </h2>

        {pair && (
          <Link
            href={pair.href}
            className="flex items-center justify-between gap-3 mb-3 p-3 bg-[var(--color-card)] border border-[var(--color-primary)] rounded-xl text-sm font-semibold text-[var(--color-text)] no-underline hover:bg-[var(--color-bg-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          >
            <span>{pair.label}</span>
            <span className="shrink-0 text-xs font-bold uppercase tracking-wide text-[var(--color-primary)]">
              {pair.section}
            </span>
          </Link>
        )}

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2" role="list">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="flex h-full flex-col gap-1 p-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl text-sm font-medium text-[var(--color-text)] no-underline hover:border-[var(--color-primary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              >
                <span className="text-[11px] font-bold uppercase tracking-wide text-[var(--color-text-muted,#6b7280)]">
                  {l.section}
                </span>
                <span>{l.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

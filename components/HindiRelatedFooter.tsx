import Link from 'next/link';

/**
 * Shared closing "related articles" box for Hindi articles.
 * Markup lives here once; each article passes its own heading + links,
 * so wording stays varied per-page while the layout is maintained centrally.
 */
export type RelatedLink = { href: string; label: string };

export default function HindiRelatedFooter({
  heading,
  links,
  compact = false,
}: {
  heading: string;
  links: RelatedLink[];
  compact?: boolean;
}) {
  if (compact) {
    return (
      <div className="mt-8 p-4 bg-[var(--color-bg-alt)] rounded-xl text-sm">
        <p className="font-bold mb-2">{heading}</p>
        <ul className="space-y-1 list-disc pl-5">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className="mt-8 p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl">
      <h3 className="font-black text-[var(--color-text)] mb-3 text-base">{heading}</h3>
      <ul className="list-disc pl-5 space-y-1.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

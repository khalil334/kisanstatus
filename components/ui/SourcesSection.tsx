import React from 'react';

export type SourceItem = {
  label: string;
  href?: string;
  note?: string;
};

export default function SourcesSection({
  heading = 'Sources. Jankari Kahan Se Aayi',
  checkedLabel = 'Aakhri baar jaancha gaya:',
  checkedOn,
  sources,
}: {
  heading?: string;
  checkedLabel?: string;
  checkedOn?: string;
  sources: SourceItem[];
}) {
  const formatted = checkedOn
    ? new Date(checkedOn).toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' })
    : null;
  return (
    <section className="not-prose my-8 p-5 bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl">
      <h2 className="text-lg font-black text-[var(--color-text)] mb-3 pb-2 border-b-2 border-[var(--color-border)]">
        {heading}
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-sm text-[var(--color-text-muted)]">
        {sources.map((s) => (
          <li key={s.label}>
            {s.href ? (
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="underline font-medium text-[var(--color-text)]">
                {s.label}
              </a>
            ) : (
              <strong className="text-[var(--color-text)]">{s.label}</strong>
            )}
            {s.note ? <> — {s.note}</> : null}
          </li>
        ))}
      </ul>
      {formatted && (
        <p className="text-xs text-[var(--color-text-muted)] mt-4 mb-0 italic">
          {checkedLabel} {formatted}
        </p>
      )}
    </section>
  );
}

import React from 'react';

/**
 * Horizontally-scrollable wrapper for the plain `<tr>/<th>/<td>` markup that
 * article bodies write inline. Children are the rows; the first row is
 * expected to be the header row (`<th>` cells) and is styled as such via CSS
 * selectors, so callers don't need to wrap anything in `<thead>`/`<tbody>`.
 */
export default function SchemeTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 -mx-4 sm:mx-0 overflow-x-auto">
      <table
        className="w-full min-w-[32rem] border-collapse text-sm text-left
          [&_th]:bg-[var(--color-bg-alt)] [&_th]:font-black [&_th]:text-[var(--color-text)]
          [&_th]:px-3 [&_th]:py-2.5 [&_th]:border [&_th]:border-[var(--color-border)]
          [&_td]:px-3 [&_td]:py-2.5 [&_td]:border [&_td]:border-[var(--color-border)]
          [&_td]:align-top [&_td]:text-[var(--color-text)]
          [&_tr:nth-child(even)_td]:bg-[var(--color-card)]"
      >
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

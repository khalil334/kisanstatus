'use client';

import { useState, lazy, Suspense, type ReactNode } from 'react';

const CountdownModal = lazy(() => import('./CountdownModal'));

interface OfficialLinkButtonProps {
  title: string;
  message: string;
  url: string;
  infoNote?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Small client island for the "official portal" countdown buttons.
 * Keeps the surrounding article a server component (INP fix — previously
 * each ~500-line article was fully hydrated just for this one button).
 * CountdownModal is lazy-loaded so its JS only ships after the first tap.
 */
export default function OfficialLinkButton({
  title,
  message,
  url,
  infoNote,
  className,
  children,
}: OfficialLinkButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      {open && (
        <Suspense fallback={null}>
          <CountdownModal
            title={title}
            message={message}
            redirectUrl={url}
            onClose={() => setOpen(false)}
            infoNote={infoNote}
          />
        </Suspense>
      )}
    </>
  );
}

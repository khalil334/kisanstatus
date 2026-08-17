'use client';

import { useState, useEffect } from 'react';

/**
 * Tiny client island: countdown-then-open-official-portal button.
 * Extracted from article components so they can stay server components (INP fix).
 */
export default function CountdownRedirectButton({
  href,
  label,
  seconds = 5,
  variant = 'primary'
}: {
  href: string;
  label: string;
  seconds?: number;
  variant?: 'primary' | 'secondary' | 'success';
}) {
  const [countdown, setCountdown] = useState<number | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleClick = () => {
    if (countdown === null) {
      setCountdown(seconds);
      setIsRedirecting(true);
    }
  };

  useEffect(() => {
    if (countdown === null) return;

    const timer = setTimeout(() => {
      if (countdown <= 1) {
        window.open(href, '_blank', 'noopener,noreferrer');
        setCountdown(null);
        setIsRedirecting(false);
      } else {
        setCountdown(countdown - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, href]);

  const buttonColors = {
    primary: 'bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600',
    secondary: 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600',
    success: 'bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600',
  };

  return (
    <button
      onClick={handleClick}
      disabled={isRedirecting && countdown !== null}
      className={`
        w-full py-4 px-6 rounded-xl font-bold text-white text-base
        transition-all duration-200 shadow-md
        ${buttonColors[variant]}
        ${isRedirecting && countdown !== null ? 'cursor-wait opacity-90' : 'cursor-pointer hover:shadow-lg'}
        flex items-center justify-center gap-2
      `}
    >
      {isRedirecting && countdown !== null ? (
        <>
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Redirecting in {countdown}s...</span>
        </>
      ) : (
        <>
          <span>{label}</span>
        </>
      )}
    </button>
  );
}

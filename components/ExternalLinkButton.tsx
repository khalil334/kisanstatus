'use client';

import { useState, useEffect } from 'react';

interface ExternalLinkButtonProps {
  url: string;
  label: string;
  className?: string;
}

export default function ExternalLinkButton({ url, label, className = '' }: ExternalLinkButtonProps) {
  const [countdown, setCountdown] = useState<number | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setCountdown(10);
    setIsRedirecting(true);
  };

  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) {
      // Secure redirect: _blank aur noopener/noreferrer ke saath
      window.open(url, '_blank', 'noopener,noreferrer');
      setIsRedirecting(false);
      setCountdown(null);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => (prev !== null ? prev - 1 : null));
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, url]);

  return (
    <div className="my-6 flex flex-col items-center">
      <button
        onClick={handleClick}
        disabled={isRedirecting}
        className={`inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-green-500 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:ring-2 focus:ring-green-300 focus:outline-none ${className} ${
          isRedirecting ? 'cursor-wait' : 'cursor-pointer'
        }`}
        aria-label={isRedirecting ? `Redirecting in ${countdown} seconds` : label}
      >
        {isRedirecting ? (
          <>
            <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Redirecting in {countdown}s...</span>
          </>
        ) : (
          <>
            <span>{label}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </>
        )}
      </button>
      
      {isRedirecting && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center animate-pulse">
          🔒 Aapko secure external website par le jaya ja raha hai. Thoda wait karein...
        </p>
      )}
    </div>
  );
}
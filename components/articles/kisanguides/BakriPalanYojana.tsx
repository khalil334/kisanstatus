'use client';

import { useState, useEffect } from 'react';

interface ExternalLinkButtonProps {
  url: string;
  label: string;
}

export default function ExternalLinkButton({ url, label }: ExternalLinkButtonProps) {
  const [countdown, setCountdown] = useState<number | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRedirecting && countdown !== null && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      window.open(url, '_blank', 'noopener,noreferrer');
      setIsRedirecting(false);
      setCountdown(null);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [countdown, isRedirecting, url]);

  const handleClick = () => {
    setIsRedirecting(true);
    setCountdown(10);
  };

  const handleCancel = () => {
    setIsRedirecting(false);
    setCountdown(null);
  };

  if (isRedirecting) {
    return (
      <div className="my-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg text-center">
        <p className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
          Redirecting in {countdown} seconds...
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Aap <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{new URL(url).hostname}</span> par ja rahe hain
        </p>
        <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2 mb-3 overflow-hidden">
          <div 
            className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${((10 - (countdown || 0)) / 10) * 100}%` }}
          ></div>
        </div>
        <button
          onClick={handleCancel}
          className="text-sm text-red-600 dark:text-red-400 hover:underline"
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div className="my-6 text-center">
      <button
        onClick={handleClick}
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        {label}
      </button>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        External link - 10 second countdown ke baad khulega
      </p>
    </div>
  );
}
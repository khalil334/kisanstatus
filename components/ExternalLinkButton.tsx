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
    if (countdown !== null && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      window.open(url, '_blank', 'noopener,noreferrer');
      setIsRedirecting(false);
      setCountdown(null);
    }
  }, [countdown, url]);

  const handleClick = () => {
    setIsRedirecting(true);
    setCountdown(10);
  };

  const handleCancel = () => {
    setIsRedirecting(false);
    setCountdown(null);
  };

  if (isRedirecting && countdown !== null) {
    return (
      <div className="my-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-300 dark:border-blue-700 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full mb-3">
              <span className="text-3xl font-bold text-blue-600 dark:text-blue-300">
                {countdown}
              </span>
            </div>
            <p className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
              Redirecting in {countdown} seconds...
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Aap <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{new URL(url).hostname}</span> par ja rahe hain
            </p>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${((10 - countdown) / 10) * 100}%` }}
            ></div>
          </div>

          <button
            onClick={handleCancel}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 underline transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="my-6">
      <button
        onClick={handleClick}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        <span className="flex items-center justify-center gap-2">
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
            />
          </svg>
          {label}
        </span>
      </button>
      <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">
        Click karne par 10 second baad naye tab mein khulega
      </p>
    </div>
  );
}
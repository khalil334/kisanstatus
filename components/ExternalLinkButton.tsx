'use client';
import { useState } from 'react';

interface ExternalLinkButtonProps {
  url: string;
  label: string;
}

export default function ExternalLinkButton({ url, label }: ExternalLinkButtonProps) {
  const [countdown, setCountdown] = useState<number | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleClick = () => {
    setIsRedirecting(true);
    setCountdown(10);

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(interval);
          window.open(url, '_blank');
          setIsRedirecting(false);
          return null;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="my-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
      {isRedirecting && countdown !== null ? (
        <div className="text-center">
          <p className="text-lg font-semibold text-blue-800 mb-2">
            Redirecting in {countdown} seconds...
          </p>
          <p className="text-sm text-gray-600">
            Aap {new URL(url).hostname} par ja rahe hain
          </p>
          <div className="mt-3 w-full bg-blue-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${(countdown / 10) * 100}%` }}
            ></div>
          </div>
        </div>
      ) : (
        <button
          onClick={handleClick}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md"
        >
          {label}
        </button>
      )}
    </div>
  );
}
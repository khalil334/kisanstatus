'use client';

import { useState, useEffect, useCallback, memo } from 'react';

/**
 * Client island: 10s countdown card with cancel, then reveals the official-portal link.
 * Extracted so the surrounding article stays a server component (INP fix).
 */
const CountdownPortalCard = memo(function CountdownPortalCard({
  title,
  description,
  url,
  buttonText,
  variant = 'blue'
}: {
  title: string;
  description: string;
  url: string;
  buttonText: string;
  variant?: 'green' | 'blue';
}) {
  const [count, setCount] = useState<number | null>(null);
  const ready = count === 0;

  const handleClick = useCallback(() => {
    setCount(10);
  }, []);

  useEffect(() => {
    if (count === null || count === 0) return;

    const timer = setTimeout(() => {
      setCount((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  const handleCancel = useCallback(() => {
    setCount(null);
  }, []);

  const bgColor = variant === 'green'
    ? 'bg-green-600 hover:bg-green-700'
    : 'bg-blue-600 hover:bg-blue-700';

  return (
    <div className="my-6 p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 shadow-lg">
      <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
        {description}
      </p>

      {ready ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`block text-center w-full px-6 py-4 ${bgColor} text-white text-sm font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]`}
          aria-label={`${buttonText}. Opens the official portal in a new tab.`}
        >
           Portal taiyar hai — yahan tap karke kholein
        </a>
      ) : count === null ? (
        <button
          onClick={handleClick}
          className={`w-full px-6 py-4 ${bgColor} text-white text-sm font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]`}
          aria-label={`${buttonText}. Link ready in 10 seconds after clicking.`}
        >
          {buttonText}
        </button>
      ) : (
        <div className="text-center py-4" role="status" aria-live="polite">
          <div className={`text-6xl font-black ${variant === 'green' ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'} mb-3 animate-pulse`}>
            {count}
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-1 font-semibold">
            Official portal khulne wala hai...
          </p>
          <button
            onClick={handleCancel}
            className="mt-4 px-6 py-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm font-bold rounded-lg transition-colors"
            aria-label="Cancel countdown and close"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
});

export default CountdownPortalCard;

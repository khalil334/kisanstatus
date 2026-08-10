'use client';

import { useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface CountdownModalProps {
  title: string;
  message: string;
  redirectUrl: string;
  onClose: () => void;
  seconds?: number;
  icon?: string;
  countdownNote?: string;
  infoNote?: string;
  cancelLabel?: string;
  borderColorClass?: string;
  readyContent?: ReactNode;
}

export default function CountdownModal({
  title,
  message,
  redirectUrl,
  onClose,
  seconds = 10,
  icon = '⏳',
  countdownNote = 'seconds mein official portal khulega...',
  infoNote,
  cancelLabel = 'Cancel',
  borderColorClass = 'border-green-500',
  readyContent,
}: CountdownModalProps) {
  const [count, setCount] = useState(seconds);
  const router = useRouter();
  const done = count === 0;

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => (c > 0 ? c - 1 : c));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!done || readyContent) return;
    if (redirectUrl.startsWith('http')) {
      window.open(redirectUrl, '_blank', 'noopener,noreferrer');
    } else {
      router.push(redirectUrl);
    }
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4" onClick={onClose}>
      <div
        className={`w-full max-w-sm rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-2xl border-2 ${borderColorClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <div className="text-5xl mb-3" aria-hidden="true">{icon}</div>
          <h3 className="text-lg font-black text-gray-800 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            {message}
          </p>

          {!done || !readyContent ? (
            <div className="mb-4" role="status" aria-live="polite">
              <div className="text-6xl font-black text-green-600 dark:text-green-400">
                {count}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {countdownNote}
              </p>
            </div>
          ) : (
            <div className="mb-4 space-y-3">{readyContent}</div>
          )}

          {infoNote && (
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3 mb-4">
              <p className="text-xs text-blue-800 dark:text-blue-300">
                {infoNote}
              </p>
            </div>
          )}
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm font-bold rounded-lg transition-colors"
          >
            {cancelLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

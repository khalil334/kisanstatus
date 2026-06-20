/**
 * StepCard.tsx — KisanStatus.com
 * Mobile-first step layout component
 * Replaces 4-col grid steps with vertical numbered cards
 * Works perfectly on all screen sizes
 */

import React from 'react';

interface Step {
  icon?: string;
  title: string;
  desc: string;
}

interface StepCardListProps {
  steps: Step[];
  /** Color theme: 'green' | 'blue' | 'amber' | 'purple' | 'red' */
  color?: 'green' | 'blue' | 'amber' | 'purple' | 'red';
  /** Compact mode for simple steps */
  compact?: boolean;
}

const COLOR_MAP = {
  green:  { ring: 'bg-green-600',  light: 'bg-green-50',  border: 'border-green-100',  text: 'text-green-700',  connector: 'bg-green-200' },
  blue:   { ring: 'bg-blue-600',   light: 'bg-blue-50',   border: 'border-blue-100',   text: 'text-blue-700',   connector: 'bg-blue-200'  },
  amber:  { ring: 'bg-amber-600',  light: 'bg-amber-50',  border: 'border-amber-200',  text: 'text-amber-700',  connector: 'bg-amber-200' },
  purple: { ring: 'bg-purple-600', light: 'bg-purple-50', border: 'border-purple-100', text: 'text-purple-700', connector: 'bg-purple-200'},
  red:    { ring: 'bg-red-600',    light: 'bg-red-50',    border: 'border-red-100',    text: 'text-red-700',    connector: 'bg-red-200'   },
};

export function StepCardList({ steps, color = 'green', compact = false }: StepCardListProps) {
  const c = COLOR_MAP[color];
  const isLast = (i: number) => i === steps.length - 1;

  return (
    <ol className="relative space-y-0 pl-0 list-none my-5">
      {steps.map((step, i) => (
        <li key={i} className="relative flex gap-4">
          {/* Left: number + connector line */}
          <div className="flex flex-col items-center">
            <div className={`flex-shrink-0 w-9 h-9 rounded-full ${c.ring} text-white flex items-center justify-center font-bold text-sm shadow-sm z-10`}>
              {step.icon ?? (i + 1)}
            </div>
            {!isLast(i) && (
              <div className={`w-0.5 flex-1 ${c.connector} my-1`} style={{ minHeight: '20px' }} />
            )}
          </div>

          {/* Right: content card */}
          <div className={`flex-1 mb-4 ${compact ? 'pb-0' : ''}`}>
            <div className={`${c.light} ${c.border} border rounded-xl px-4 ${compact ? 'py-2.5' : 'py-3'}`}>
              {step.icon && !compact && (
                <span className="text-lg mr-2">{step.icon}</span>
              )}
              <span className={`font-bold text-sm ${c.text}`}>
                Step {i + 1}:
              </span>{' '}
              <span className="font-semibold text-gray-800 text-sm">{step.title}</span>
              {step.desc && (
                <p className="text-gray-600 text-xs mt-1 leading-relaxed">{step.desc}</p>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Simple Quick Summary row — replaces 4-col grid on mobile */
interface QuickSummaryItem {
  icon: string;
  label: string;
  value?: string;
}
interface QuickSummaryProps {
  items: QuickSummaryItem[];
}

export function QuickSummary({ items }: QuickSummaryProps) {
  return (
    <div className="grid grid-cols-2 gap-3 my-4 sm:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center gap-1 p-3 bg-white border border-green-200 rounded-xl text-center shadow-sm"
        >
          <span className="text-2xl">{item.icon}</span>
          {item.value && (
            <span className="font-black text-green-700 text-sm">{item.value}</span>
          )}
          <span className="text-xs font-medium text-gray-700 leading-tight">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default StepCardList;

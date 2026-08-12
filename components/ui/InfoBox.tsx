import React from 'react';

export type InfoBoxType = 'info' | 'tip' | 'warning' | 'update';

const STYLES: Record<InfoBoxType, { wrap: string; icon?: string; label: string }> = {
  info: {
    wrap: 'bg-green-50 dark:bg-green-900/20 border-green-600 dark:border-green-500',
    icon: 'ℹ️',
    label: 'Jaankari',
  },
  tip: {
    wrap: 'bg-blue-50 dark:bg-blue-900/20 border-blue-500',
    
    label: 'Tip',
  },
  warning: {
    wrap: 'bg-amber-50 dark:bg-amber-900/20 border-amber-500',
    
    label: 'Dhyan Dein',
  },
  update: {
    wrap: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-600 dark:border-emerald-500',
    
    label: 'Update',
  },
};

export default function InfoBox({
  type = 'info',
  date,
  children,
}: {
  type?: InfoBoxType;
  date?: string;
  children: React.ReactNode;
}) {
  const style = STYLES[type] ?? STYLES.info;

  return (
    <aside
      className={`my-6 p-4 border-l-4 rounded-r-xl text-sm text-[var(--color-text)] leading-relaxed ${style.wrap}`}
    >
      <div className="flex items-center gap-2 mb-2 font-black text-[var(--color-text)]">
        <span aria-hidden="true">{style.icon}</span>
        <span>{style.label}</span>
        {date && (
          <span className="ml-auto text-xs font-medium text-gray-500 dark:text-gray-400">
            {date}
          </span>
        )}
      </div>
      <div className="space-y-2 [&_a]:text-[var(--color-primary)] [&_a]:underline">{children}</div>
    </aside>
  );
}

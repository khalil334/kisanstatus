/**
 * FAQ Section — Client Component for accordion behavior
 * Pure accordion — heading and container handled by parent page
 */
'use client';

import { useState } from 'react';

interface FAQ {
  q: string;
  a: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div>
      <div className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="card !p-0 overflow-hidden"
            >
              {/* Question button */}
              <button
                onClick={() => toggle(i)}
                className="w-full text-left flex items-start justify-between gap-4 p-5 min-h-[52px] hover:bg-gray-50 transition-colors duration-150"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span className="font-medium text-gray-900 text-sm md:text-base leading-snug pr-2">
                  {faq.q}
                </span>
                {/* Chevron icon */}
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className={`shrink-0 text-primary-600 transition-transform duration-200 mt-0.5 ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Answer */}
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Helpline info */}
      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
        <p className="text-sm text-green-900">
          📞 <strong>PM Kisan Helpline:</strong>{' '}
          <a href="tel:155261" className="font-semibold underline hover:no-underline">155261</a>
          {' '}/ {' '}
          <a href="tel:01124300606" className="font-semibold underline hover:no-underline">011-24300606</a>
          {' '} | Email:{' '}
          <a href="mailto:pmkisan-ict@gov.in" className="font-semibold underline hover:no-underline">pmkisan-ict@gov.in</a>
        </p>
      </div>
    </div>
  );
}

'use client';

import { useState, ReactNode } from 'react';
import Link from 'next/link';

interface FAQ {
  q: string;
  a: ReactNode;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
}

export default function FAQSection({ 
  faqs, 
  title = "Frequently Asked Questions",
  subtitle = "PM Kisan se jude common sawalon ke jawab"
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="faq-heading">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            ❓ Common Questions
          </span>
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
            {title}
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`bg-white rounded-xl border-2 transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-green-400 shadow-lg shadow-green-100' 
                      : 'border-gray-200 hover:border-green-300 hover:shadow-md'
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full text-left flex items-start justify-between gap-4 p-5 md:p-6 min-h-[60px] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-xl transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <span 
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                          isOpen 
                            ? 'bg-green-500 text-white' 
                            : 'bg-green-100 text-green-700'
                        }`}
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      <span className="font-semibold text-gray-900 text-sm md:text-base leading-snug pt-1">
                        {faq.q}
                      </span>
                    </div>
                    
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      className={`shrink-0 text-green-600 transition-transform duration-300 mt-1 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 pb-5 md:px-6 md:pb-6">
                      <div className="border-t-2 border-green-100 pt-4 ml-11">
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Helpline info */}
          <div className="mt-8 p-5 md:p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl">
            <div className="flex items-start gap-3">
              <span className="text-3xl shrink-0" aria-hidden="true">📞</span>
              <div className="flex-1">
                <h3 className="font-bold text-green-900 text-base md:text-lg mb-2">
                  Koi Aur Sawal Hai? Humari Team Se Baat Karein
                </h3>
                <div className="space-y-2 text-sm md:text-base text-green-800">
                  <p className="flex flex-wrap items-center gap-2">
                    <strong>PM Kisan Helpline:</strong>
                    <a href="tel:155261" className="font-bold underline hover:no-underline">
                      155261
                    </a>
                    <span>(Toll-Free)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
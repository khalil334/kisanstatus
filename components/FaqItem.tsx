export default function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  return (
    <details
      className="group border-b border-gray-200 dark:border-gray-700"
      id={`faq-${index}`}
    >
      <summary className="w-full flex items-center justify-between py-5 text-left cursor-pointer list-none transition-colors [&::-webkit-details-marker]:hidden">
        <h3 className="font-bold text-gray-900 dark:text-white text-base pr-4">{question}</h3>
        <svg
          className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0 transition-transform duration-300 group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="pb-5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {answer}
      </div>
    </details>
  );
}

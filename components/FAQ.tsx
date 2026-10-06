'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQItem = { question: string; answer: string };

export function FAQ({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-display font-semibold text-brand-950 mb-6">{title}</h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-sm overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
              className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-brand-950 hover:bg-brand-50 transition-colors"
            >
              <span className="pr-4">{faq.question}</span>
              <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`} />
            </button>
            {/* Always rendered so every answer is in the HTML; collapsed ones are hidden. */}
            <div hidden={openIndex !== i} className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-brand-100 pt-4">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

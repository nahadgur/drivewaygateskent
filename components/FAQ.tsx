'use client';
import { useId, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
type FAQItem = { question: string; answer: string };
export function FAQ({ faqs, title = 'Frequently Asked Questions' }: { faqs: FAQItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const id = useId();
  return <section className="faq-block">
    <h2>{title}</h2>
    <div className="faq-list">{faqs.map((faq, i) => <div className="faq-item" key={faq.question}>
      <h3><button onClick={() => setOpenIndex(openIndex === i ? null : i)} aria-expanded={openIndex === i} aria-controls={id + '-' + i}>
        <span>{faq.question}</span>{openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
      </button></h3>
      <div id={id + '-' + i} hidden={openIndex !== i} className="faq-answer">{faq.answer}</div>
    </div>)}</div>
  </section>;
}

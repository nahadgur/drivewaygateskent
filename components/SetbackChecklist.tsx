'use client';

import { useState } from 'react';
import { trackArticleEvent } from '@/lib/articleEvents';

const checks = [
  'Record the distance to the closed gate and exactly where you started measuring: pavement edge, road edge or another point. Confirm the reference point required by your authority.',
  'Record the full length of the largest vehicle and trailer you use. Check whether it can wait clear of the road and pavement while the gate operates.',
  'Record the gate opening direction and available clearance. For swing gates, include the space each leaf uses and the position of parked vehicles.',
  'Note slopes, bends, nearby junctions and anything that blocks the view of pedestrians or approaching vehicles.',
  'Check your local authority’s requirements and any conditions on the property’s permission before relying on a proposed gate position.',
];

export function SetbackChecklist({ slug }: { slug: string }) {
  const [checked, setChecked] = useState<boolean[]>(checks.map(() => false));
  const count = checked.filter(Boolean).length;
  return (
    <details id="gate-clearance-checklist" className="my-8 border border-brand-500 bg-brand-50 p-5 sm:p-7" onToggle={e => {
      if (e.currentTarget.open) trackArticleEvent('article_checklist_open', slug);
    }}>
      <summary className="cursor-pointer text-xl font-display font-semibold text-brand-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500">Check your gate clearance</summary>
      <p className="mt-3 text-gray-600">Use this checklist to prepare your measurements. No contact details needed; ticks stay on this page only.</p>
      <div className="my-5 space-y-4">
        {checks.map((text, index) => <label key={text} className="flex items-start gap-3 text-gray-700 cursor-pointer">
          <input type="checkbox" checked={checked[index]} className="mt-1 h-5 w-5 shrink-0 accent-brand-600" onChange={e => {
            const next = checked.map((value, i) => i === index ? e.target.checked : value);
            setChecked(next);
            if (next.every(Boolean)) trackArticleEvent('article_checklist_complete', slug);
          }} />
          <span>{text}</span>
        </label>)}
      </div>
      <p role="status" className="font-semibold text-brand-950">{count} of {checks.length} checks recorded</p>
      <p className="mt-2 text-sm text-gray-600">This records what you have checked; it does not confirm compliance or grant permission. If you only need to confirm the permitted position, ask your planning or highway authority. The quote form below is for gate work you want priced.</p>
    </details>
  );
}

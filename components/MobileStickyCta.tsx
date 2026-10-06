'use client';

import { useState } from 'react';

import { LeadFormModal } from '@/components/LeadFormModal';

export function MobileStickyCta() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 md:hidden bg-brand-950/95 backdrop-blur-md border-t border-brand-700 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="w-full min-h-12 bg-brand-500 hover:bg-brand-600 text-white font-bold flex items-center justify-center gap-2 rounded-sm shadow-lg"
        >
          Get free quotes

        </button>
      </div>
      <LeadFormModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

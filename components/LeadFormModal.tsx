'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GATE_TYPES = [
  'Electric Sliding Gates',
  'Electric Swing Gates',
  'Wooden Driveway Gates',
  'Metal / Wrought Iron Gates',
  'Aluminium Gates',
  'Composite Gates',
  'Hardwood Gates',
  'Automated Gate Systems',
  'Gate Automation (Retrofit)',
  'Pedestrian / Side Gates',
  'Commercial Gates',
  'Access Control System',
  'Gate Repair and Maintenance',
  'Not sure yet',
];

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzLbvBw8jR-Cpr87ZQSpNcEKEmSGUo_FnAi9ofkNgGIIWX50v_8u7is6yUgsdP3bMki/exec';

export function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess]       = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [animationState, setAnimationState] = useState<'idle' | 'entering' | 'exiting'>('idle');
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Animation state management
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setAnimationState('entering');
    } else if (shouldRender) {
      setAnimationState('exiting');
      const timer = setTimeout(() => {
        setShouldRender(false);
        setAnimationState('idle');
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  // Escape key to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Body scroll lock
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = originalOverflow; };
  }, [isOpen]);

  // Auto-focus first input on open + restore focus on close
  useEffect(() => {
    if (isOpen && modalRef.current) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      const firstInput = modalRef.current.querySelector<HTMLElement>('input, select, button');
      firstInput?.focus();
    }
    if (!isOpen && previousFocusRef.current) {
      previousFocusRef.current.focus();
      previousFocusRef.current = null;
    }
  }, [isOpen]);

  // Focus trap — keep Tab cycling within the modal
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'input, select, textarea, button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  if (!shouldRender) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    try {
      const formData = new FormData(e.currentTarget);
      const payload = {
        phone: formData.get('phone') as string,
        fullName: formData.get('fullName') as string,
        email: formData.get('email') as string,
        treatment: formData.get('treatment') as string,
        location: formData.get('location') as string,
        page: window.location.href,
        source: 'Driveway Gates Kent',
      };

      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let data: any = {};
      try { data = JSON.parse(text); } catch {}

      if (data && data.ok === false) throw new Error(data.error || 'Submission failed');

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setErrorMessage('Something went wrong. Please check your details and try again.');
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const labelClass = "block text-xs font-bold text-gray-600 mb-1 ml-1";
  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition";

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm
        ${animationState === 'entering' ? 'animate-backdrop-in' : animationState === 'exiting' ? 'animate-backdrop-out' : 'opacity-100'}`}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label="Get free gate installation quotes"
        className={`relative w-full max-w-lg overflow-hidden bg-white rounded-2xl shadow-2xl
          ${animationState === 'entering' ? 'animate-modal-in' : 'animate-modal-out'}`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {isSuccess ? (
            <div className="flex flex-col items-center text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-display font-bold text-gray-900">Request Received!</h2>
              <p className="text-gray-600">We&apos;ve matched you with a vetted installer. Expect a call back within <strong className="text-gray-800">2 hours</strong>. Check your email for confirmation.</p>
              <button
                onClick={() => { setIsSuccess(false); onClose(); }}
                className="mt-2 bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 px-8 rounded-xl transition-colors text-sm shadow-md shadow-brand-500/20"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-brand-50 text-brand-600 text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                  Free Matching Service
                </span>
                <h2 className="text-2xl font-display font-bold text-gray-900">Find Your Gate Installer</h2>
                <p className="text-gray-600 text-sm mt-1">Complete the form to get matched with vetted Kent gate installers.</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                {errorMessage && (
                  <div role="alert" className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    <span className="text-red-500 text-lg leading-none mt-0.5">!</span>
                    <div className="flex-1">
                      <p className="text-red-800 text-sm font-medium">{errorMessage}</p>
                    </div>
                    <button type="button" onClick={() => setErrorMessage(null)} className="text-red-400 hover:text-red-600 transition-colors p-0.5" aria-label="Dismiss error">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
                <div>
                  <label htmlFor="lead-phone" className={labelClass}>Phone number <span className="text-red-400">*</span></label>
                  <input id="lead-phone" required name="phone" type="tel" placeholder="e.g. 07700 900123" className={inputClass} autoComplete="tel" />
                </div>
                <div>
                  <label htmlFor="lead-name" className={labelClass}>Full name <span className="text-red-400">*</span></label>
                  <input id="lead-name" required name="fullName" type="text" placeholder="e.g. James Patterson" className={inputClass} autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="lead-email" className={labelClass}>Email address <span className="text-red-400">*</span></label>
                  <input id="lead-email" required name="email" type="email" placeholder="e.g. james@example.com" className={inputClass} autoComplete="email" />
                </div>
                <div>
                  <label htmlFor="lead-gate-type" className={labelClass}>Type of gate <span className="text-red-400">*</span></label>
                  <select id="lead-gate-type" required name="treatment" className={inputClass + ' appearance-none cursor-pointer'} defaultValue="">
                    <option value="" disabled>Select a gate type</option>
                    {GATE_TYPES.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="lead-location" className={labelClass}>Your area or postcode <span className="text-red-400">*</span></label>
                  <input id="lead-location" required name="location" type="text" placeholder="e.g. Maidstone or ME14" className={inputClass} />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-500 hover:bg-brand-600 active:scale-[0.98] disabled:opacity-60 text-white font-bold py-3.5 px-6 rounded-xl transition-all text-base mt-1 shadow-md shadow-brand-500/20"
                >
                  {isSubmitting ? 'Sending…' : 'Request a Free Call Back →'}
                </button>

                <p className="text-center text-xs text-gray-500 leading-relaxed">
                  We typically call back within <strong className="text-gray-700">2 hours</strong> · 100% free, no obligation
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

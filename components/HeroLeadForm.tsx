'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface HeroLeadFormProps {
  city?: string;
  service?: string;
  layout?: 'stacked' | 'wide';
}

const GATE_TYPES = [
  'Electric Sliding Gates',
  'Electric Swing Gates',
  'Wooden Driveway Gates',
  'Metal Driveway Gates',
  'Automated Gate Systems',
  'Gate Repair and Maintenance',
];

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzLbvBw8jR-Cpr87ZQSpNcEKEmSGUo_FnAi9ofkNgGIIWX50v_8u7is6yUgsdP3bMki/exec';

export function HeroLeadForm({ city, service, layout = 'stacked' }: HeroLeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: city || '',
    treatment: service || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        location: formData.location || city || '',
        treatment: formData.treatment || service || '',
        page: window.location.href,
        source: 'Driveway Gates Kent',
      };

      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let data: { ok?: boolean; error?: string } = {};
      try { data = JSON.parse(text); } catch {}

      if (data && data.ok === false) throw new Error(data.error || 'Submission failed');

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      alert('Something went wrong. Please try again.');
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-sm border border-gray-200 bg-brand-50 text-brand-950 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition";

  if (isSuccess) {
    return (
      <div className="bg-white text-brand-950 rounded-sm p-8 shadow-lg border border-brand-100 flex flex-col items-center justify-center text-center gap-4 min-h-[340px]">
        <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-display font-semibold">Request Received!</h3>
        <p className="text-gray-600">
          Thanks, your enquiry has been sent. Up to three installers{city ? ` covering ${city}` : ''} will be in touch to arrange a survey.
        </p>
      </div>
    );
  }

  return (
    <div className={`inline-quote-form${layout === 'wide' ? ' quote-form-wide' : ''}`}>
      <div className="quote-form-heading mb-6">
        <h2 className="quote-form-title">
          Get free quotes{city ? ` in ${city}` : ''}
        </h2>
        <p className="text-gray-600 text-sm mt-1">
          Up to three Kent installers will contact you
        </p>
        {layout === 'wide' && <p className="quote-form-note">No fee for homeowners.<br />No obligation to go ahead.</p>}
      </div>

      <form onSubmit={handleSubmit} className="quote-form-fields flex flex-col gap-3">
        <label className="quote-field"><span>Full name *</span><input aria-label="Full name" autoComplete="name" required name="fullName" type="text" value={formData.fullName} onChange={handleChange} placeholder="Full name" className={inputClass} /></label>

        <div className="quote-contact-fields grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="quote-field"><span>Phone number *</span><input aria-label="Phone number" autoComplete="tel" required name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone number" className={inputClass} /></label>
          <label className="quote-field"><span>Email address *</span><input aria-label="Email address" autoComplete="email" required name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email address" className={inputClass} /></label>
        </div>

        <label className="quote-field"><span>Type of gate *</span><select aria-label="Type of gate" required name="treatment" value={formData.treatment} onChange={handleChange} className={inputClass + " cursor-pointer"}>
          <option value="" disabled>What type of gate? *</option>
          {GATE_TYPES.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select></label>

        {!city && (
          <label className="quote-field"><span>Your Kent town or postcode *</span><input aria-label="Your Kent town or postcode" required name="location" type="text" value={formData.location} onChange={handleChange} placeholder="Town or postcode" className={inputClass} /></label>
        )}

        <button
          disabled={isSubmitting}
          type="submit"
          className="btn-primary w-full disabled:opacity-60 mt-1"
        >
          {isSubmitting ? 'Sending...' : 'Get free quotes'}
        </button>

        <div className="quote-form-assurances flex items-center justify-center gap-4 pt-1">
          {['100% Free', 'No Spam', 'No Obligation'].map(item => (
            <span key={item} className="flex items-center gap-1 text-xs text-brand-700 font-medium">

              {item}
            </span>
          ))}
        </div>
      </form>
    </div>
  );
}

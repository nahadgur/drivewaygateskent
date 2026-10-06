'use client';

import { PoundSterling, CheckCircle, CreditCard } from 'lucide-react';
import { pricingTiers, treatmentIncludes, getPricingForService, type PricingTier } from '@/data/pricing';

interface PricingSectionProps {
  cityName?: string;
  serviceId?: string;
  serviceName?: string;
}

export function PricingSection({ cityName, serviceId, serviceName }: PricingSectionProps) {
  const tiers = serviceId ? getPricingForService(serviceId) : pricingTiers;

  const heading = cityName && serviceName
    ? `How Much Do ${serviceName} Cost in ${cityName}?`
    : cityName
    ? `How Much Do Driveway Gates Cost in ${cityName}?`
    : serviceName
    ? `${serviceName} Pricing Guide`
    : 'Driveway Gate Pricing Guide';

  const intro = cityName
    ? `Driveway gate prices in ${cityName} vary depending on the gate type, material, and level of automation. Below are guide prices for Kent installations. All prices are in GBP, include installation, and are indicative until a site survey.`
    : 'Driveway gate prices across Kent vary depending on the gate type, material, automation requirements, and design complexity. Below are guide prices for Kent installations. All prices are in GBP, include installation, and are indicative until a site survey.';

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-brand-100 p-2 rounded-sm">
          <PoundSterling className="w-5 h-5 text-brand-600" />
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-brand-950">{heading}</h2>
      </div>
      <p className="text-gray-600 mb-8 leading-relaxed">{intro}</p>

      {/* Pricing Table */}
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border border-gray-200 rounded-sm overflow-hidden">
          <thead>
            <tr className="bg-brand-50 text-left">
              <th className="px-5 py-3 font-bold text-brand-950">Gate Type</th>
              <th className="px-5 py-3 font-bold text-brand-950">Price Range</th>
              <th className="px-5 py-3 font-bold text-brand-950 hidden md:table-cell">Install Time</th>
              <th className="px-5 py-3 font-bold text-brand-950 hidden lg:table-cell">What is Included</th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((tier, i) => (
              <tr key={tier.slug} className={i % 2 === 0 ? 'bg-white' : 'bg-brand-50'}>
                <td className="px-5 py-4">
                  <div className="font-bold text-brand-950">{tier.treatment}</div>
                  <p className="text-gray-500 text-xs mt-0.5 hidden sm:block">{tier.description}</p>
                </td>
                <td className="px-5 py-4">
                  <span className="font-bold text-brand-600 text-base">&pound;{tier.priceFrom.toLocaleString()} to &pound;{tier.priceTo.toLocaleString()}</span>
                </td>
                <td className="px-5 py-4 text-gray-700 hidden md:table-cell">{tier.typicalDuration}</td>
                <td className="px-5 py-4 text-gray-700 hidden lg:table-cell">{tier.includes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile pricing cards */}
      <div className="md:hidden space-y-3 mb-8">
        {tiers.map(tier => (
          <div key={tier.slug} className="bg-white border border-gray-200 rounded-sm p-4">
            <div className="flex justify-between items-start mb-2">
              <span className="font-bold text-brand-950 text-sm">{tier.treatment}</span>
              <span className="font-bold text-brand-600">&pound;{tier.priceFrom.toLocaleString()} to &pound;{tier.priceTo.toLocaleString()}</span>
            </div>
            <div className="flex gap-4 text-xs text-gray-500">
              <span>{tier.typicalDuration}</span>
              <span>{tier.includes}</span>
            </div>
          </div>
        ))}
      </div>

      {/* What's Included + Finance */}
      <div className="grid gap-6">
        <div className="bg-brand-50 rounded-sm p-6 border border-brand-100">
          <h3 className="font-display font-semibold text-brand-950 mb-4">What&apos;s Included in the Price</h3>
          <ul className="space-y-2.5">
            {treatmentIncludes.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* SEO paragraph */}
      {cityName && (
        <div className="mt-8 prose prose-sm max-w-none text-gray-600">
          <p>
            The cost of driveway gates in {cityName} depends on several factors: the material (wood, steel, aluminium, or wrought iron), whether you want automation, the width of your driveway entrance, and any bespoke design requirements. Prices vary across Kent depending on site conditions and specification. Ask for an itemised written quote after a site survey before you commit to anything.
          </p>
        </div>
      )}
    </section>
  );
}

'use client';

import { pricingTiers, treatmentIncludes, getPricingForService } from '@/data/pricing';

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

  return <section className="detail-section subpage-pricing">
    <p className="eyebrow">Plan your project</p><h2>{heading}</h2><p>{intro}</p>
    <div className="price-list">{tiers.map(tier => <details key={tier.slug} className="price-row"><summary><span><span className="price-name">{tier.treatment}</span><span className="price-meta">{tier.typicalDuration}</span></span><span className="price-amount">&pound;{tier.priceFrom.toLocaleString()} <span>&ndash;</span> &pound;{tier.priceTo.toLocaleString()}</span><span className="price-toggle" aria-hidden="true"><span className="price-symbol-closed">+</span><span className="price-symbol-open">&minus;</span></span></summary><div className="price-details"><p>{tier.includes}</p><p>{tier.description}</p></div></details>)}</div>
    <div className="price-inclusions"><h3>What&apos;s Included in the Price</h3><ul className="specification-list">{treatmentIncludes.map(item => <li key={item}>{item}</li>)}</ul></div>
    {cityName && <p>The cost of driveway gates in {cityName} depends on several factors: the material (wood, steel, aluminium, or wrought iron), whether you want automation, the width of your driveway entrance, and any bespoke design requirements. Prices vary across Kent depending on site conditions and specification. Ask for an itemised written quote after a site survey before you commit to anything.</p>}
  </section>;
}

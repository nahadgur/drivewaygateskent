const proofPoints = [
  { title: '50+ installs', description: 'per approved specialist' },
  { title: 'Free site survey', description: 'before every quote' },
  { title: '4.9 / 5 rated', description: 'by Kent homeowners' },
  { title: 'Written warranties', description: 'gate and automation' },
];

export function TrustBadges() {
  return (
    <section className="relative z-10 -mt-9 md:-mt-10 pb-10 bg-transparent">
      <div className="container-width">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-brand-200 bg-white shadow-lg">
          {proofPoints.map(point => (
            <div key={point.title} className="p-5 md:px-7 md:py-6 border-b lg:border-b-0 border-r border-brand-200 last:border-r-0">
              <div>
                <div className="font-body font-bold text-brand-950 text-lg">{point.title}</div>
                <div className="text-xs text-brand-700 mt-1">{point.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Layout wrapper for one section of a town page. Headings and copy are written per town.
export function TownSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-display font-semibold text-brand-950 mb-4">{title}</h2>
      <div className="text-gray-700 leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

// Inline link styles shared by the town pages.
export const linkClass = 'text-brand-600 underline underline-offset-2 hover:text-brand-800';

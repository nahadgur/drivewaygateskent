export function TownSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="town-section"><h2>{title}</h2><div className="reading-copy">{children}</div></section>;
}
export const linkClass = 'inline-link';

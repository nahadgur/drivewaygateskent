export function QuoteBand({ title = 'Need a Gate Installer in Kent?', headingAs = 'h2', children, onOpenModal }: {
  title?: string;
  // 'p' for a repeated in-article band, so the page outline keeps one CTA heading
  headingAs?: 'h2' | 'p';
  children: React.ReactNode;
  onOpenModal: () => void;
}) {
  const Heading = headingAs;
  return <section className="quote-band">
    <div><Heading className="quote-band-title">{title}</Heading><div>{children}</div></div>
    <button className="btn-primary" onClick={onOpenModal}>Get free quotes</button>
  </section>;
}

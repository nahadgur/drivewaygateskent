export function QuoteBand({ title = 'Need a Gate Installer in Kent?', children, onOpenModal }: {
  title?: string;
  children: React.ReactNode;
  onOpenModal: () => void;
}) {
  return <section className="quote-band">
    <div><h2>{title}</h2><div>{children}</div></div>
    <button className="btn-primary" onClick={onOpenModal}>Get free quotes</button>
  </section>;
}

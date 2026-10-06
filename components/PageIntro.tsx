import { Breadcrumbs } from '@/components/Breadcrumbs';

export function PageIntro({ eyebrow, title, children, breadcrumbs }: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return <header className="page-intro container-width">
    {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
    <p className="eyebrow">{eyebrow}</p>
    <div className="page-intro-layout"><h1>{title}</h1><div className="page-intro-description">{children}</div></div>
  </header>;
}

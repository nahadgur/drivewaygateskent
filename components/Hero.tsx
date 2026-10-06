import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  showCta?: boolean;
  onOpenModal?: () => void;
  checklist?: string[];
  // When set, the hero becomes two columns with this form on the right (desktop)
  // or below the copy (mobile). Browse/index pages leave it unset: modal only.
  form?: React.ReactNode;
}

export function Hero({ title, subtitle, image, showCta = true, onOpenModal, checklist, form }: HeroProps) {
  const copy = (
    <div className="max-w-[700px]">
      <h1 className={`${form ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-5xl md:text-6xl lg:text-[76px]'} font-display font-medium tracking-tight leading-[1.04] mb-5 text-white text-balance`}>
        {title}
      </h1>
      <p className="text-lg md:text-xl text-brand-50/90 mb-6 leading-relaxed max-w-2xl">{subtitle}</p>

      {checklist && checklist.length > 0 && (
        <ul className="space-y-2.5 mb-2">
          {checklist.map(item => (
            <li key={item} className="flex items-start gap-3 text-base md:text-lg text-white">
              <CheckCircle className="w-5 h-5 text-brand-300 flex-shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {showCta && !form && (
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          {onOpenModal ? (
            <button onClick={onOpenModal} className="btn-primary text-lg !px-8 !py-4 text-center">
              Get three free quotes
            </button>
          ) : (
            <Link href="/services/" className="btn-primary text-lg !px-8 !py-4 text-center">
              Get three free quotes
            </Link>
          )}
          <Link href="/services/" className="btn-secondary !bg-transparent !border-brand-200/60 !text-white hover:!bg-white/10 text-lg !px-8 !py-4 text-center">
            Explore gate styles
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <section className={`relative bg-brand-950 text-white overflow-hidden flex items-center ${form ? 'lg:max-h-[700px]' : 'min-h-[620px]'}`}>
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="w-full h-full object-cover opacity-90" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/80 to-brand-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/45 via-transparent to-transparent" />
      </div>

      <div className={`relative container-width w-full ${form ? 'py-10 md:py-14' : 'pt-24 pb-32 md:pt-28 md:pb-40'}`}>
        {form ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {copy}
            <div>{form}</div>
          </div>
        ) : (
          copy
        )}
      </div>
    </section>
  );
}

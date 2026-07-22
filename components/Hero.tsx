import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  showCta?: boolean;
  showTrust?: boolean;
  onOpenModal?: () => void;
  eyebrow?: string;
}

export function Hero({ title, subtitle, image, showCta = true, showTrust = true, onOpenModal, eyebrow = 'Kent gate specialists' }: HeroProps) {
  return (
    <section className="relative bg-brand-950 text-white overflow-hidden min-h-[620px] flex items-center">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="w-full h-full object-cover opacity-90" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/75 to-brand-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/45 via-transparent to-transparent" />
      </div>

      <div className="relative container-width pt-24 pb-32 md:pt-28 md:pb-40 w-full">
        <div className="max-w-[700px]">
          <p className="text-brand-300 text-xs font-bold uppercase tracking-[0.2em] mb-6">{eyebrow}</p>
          <h1 className="text-5xl md:text-6xl lg:text-[76px] font-display font-medium tracking-tight leading-[1.01] mb-6 text-white text-balance">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-brand-50/90 mb-8 leading-relaxed max-w-2xl">{subtitle}</p>

          {showCta && (
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
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

          {showTrust && (
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-brand-50/90 border-t border-white/20 pt-6">
              {['50+ Installs Per Installer', 'Free Site Surveys', '4.9 Star Rated'].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

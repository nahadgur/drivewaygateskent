import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-brand-50">
        <div className="container-width py-28 md:py-40 text-center">
          <p className="text-brand-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">The path ends here</p>
          <h1 className="text-7xl font-display font-semibold text-brand-950 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Sorry, that page doesn&apos;t exist.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="btn-primary">Return home</Link>
            <Link href="/services/" className="btn-secondary">Explore gate styles</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

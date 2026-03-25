import Image from 'next/image';
import { getDictionary } from '@/lib/i18n';
import MenuContent from '@/components/MenuContent';

export const metadata = {
  title: 'Menu',
  description:
    'Explore our Asian fusion menu — sharing plates, dim sum, curries, craft cocktails, and 110+ wines at Hammett\'s Gastro Bar, Sliema, Malta.',
};

export default async function MenuPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative h-[40vh] min-h-[320px] flex items-end justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/food/hero-food-sharing.jpg"
            alt="Sharing plates at Hammett's Gastro Bar"
            fill
            priority
            className="object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-navy-dark/20" />
        </div>

        {/* Hero text */}
        <div className="relative z-10 pb-12 text-center animate-fade-in">
          <p className="font-body text-xs tracking-[0.35em] text-copper uppercase mb-3">
            {dict.menu.subtitle}
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-light tracking-wide text-cream">
            {dict.menu.heading}
          </h1>
          <div className="mt-4 mx-auto h-px w-16 bg-copper/40" />
        </div>
      </section>

      {/* ─── Menu Content (Client Component) ─── */}
      <MenuContent dict={dict} />

      {/* ─── Footer Notes ─── */}
      <section className="bg-navy-dark py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          {/* Dietary legend */}
          <p className="font-body text-sm text-cream/50 leading-relaxed">
            {dict.menu.dietaryNote}
          </p>

          {/* Download links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/menus/hammetts-menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-copper/30 px-5 py-2.5 font-body text-sm tracking-wider text-copper transition-all duration-300 hover:border-copper hover:bg-copper/10"
            >
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              {dict.menu.downloadMenu}
            </a>
            <a
              href="/menus/hammetts-wine-list.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-copper/30 px-5 py-2.5 font-body text-sm tracking-wider text-copper transition-all duration-300 hover:border-copper hover:bg-copper/10"
            >
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              {dict.menu.downloadWineList}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

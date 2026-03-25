'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Dictionary } from '@/lib/i18n';

interface HeroSectionProps {
  lang: string;
  dictionary: Dictionary;
}

export default function HeroSection({ lang, dictionary }: HeroSectionProps) {
  const t = dictionary.hero;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0 animate-slow-zoom">
        <Image
          src="/images/interior/cocktail-pouring.jpg"
          alt="Hammett's Gastro Bar — cocktail being crafted"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content — CSS animations instead of framer-motion for instant render */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="animate-[fadeSlideUp_1s_ease-out_0.3s_both]">
          <h1 className="font-heading text-6xl font-light tracking-widest text-cream md:text-8xl lg:text-9xl">
            HAMMETT&apos;S
          </h1>
        </div>

        <p className="mt-2 font-heading text-2xl tracking-[0.3em] text-copper md:text-3xl animate-[fadeSlideUp_1s_ease-out_0.6s_both]">
          GASTRO BAR
        </p>

        <p className="mt-6 font-heading text-xl italic text-cream/80 md:text-2xl animate-[fadeIn_1s_ease-out_1s_both]">
          {t.tagline}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-[fadeSlideUp_0.8s_ease-out_1.3s_both]">
          <Link
            href={`/${lang}/menu`}
            className="inline-block rounded-sm bg-copper px-8 py-3 font-body text-sm font-medium uppercase tracking-wider text-navy-dark transition-all duration-300 hover:bg-copper-light hover:shadow-lg hover:shadow-copper/20"
          >
            {t.cta}
          </Link>
          <Link
            href={`/${lang}/contact`}
            className="inline-block rounded-sm border border-cream/40 px-8 py-3 font-body text-sm font-medium uppercase tracking-wider text-cream transition-all duration-300 hover:border-cream hover:bg-cream/10"
          >
            {t.ctaSecondary}
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-[fadeIn_1s_ease-out_2s_both]">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-widest text-cream/50">Scroll</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-cream/50"
          >
            <path
              d="M10 3L10 17M10 17L4 11M10 17L16 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { getDictionary } from '@/lib/i18n';
import HeroSection from '@/components/HeroSection';
import ScrollReveal from '@/components/ScrollReveal';

const FOOD_IMAGES = [
  { src: '/images/food/pork-belly-yakitori.jpg', alt: 'Pork Belly Yakitori' },
  { src: '/images/food/thai-vegan-curry.jpg', alt: 'Thai Vegan Curry' },
  { src: '/images/food/chocolate-overdose.jpg', alt: 'Chocolate Overdose' },
  { src: '/images/food/kfc.jpg', alt: 'Korean Fried Cauliflower' },
];

const COCKTAIL_IMAGES = [
  { src: '/images/cocktails/cocktail-1.jpg', alt: 'Signature cocktail' },
  { src: '/images/cocktails/cocktail-2.jpg', alt: 'Craft cocktail' },
  { src: '/images/cocktails/cocktail-3.jpg', alt: 'Asian-inspired cocktail' },
  { src: '/images/cocktails/cocktail-4.jpg', alt: 'House special cocktail' },
];

const HOURS = [
  { days: 'Monday \u2013 Thursday', time: '17:00 \u2013 23:00' },
  { days: 'Friday', time: '12:00 \u2013 23:00' },
  { days: 'Saturday \u2013 Sunday', time: '11:00 \u2013 23:00' },
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);
  const t = dictionary.sections;

  return (
    <>
      {/* ===== 1. HERO SECTION ===== */}
      <HeroSection lang={lang} dictionary={dictionary} />

      {/* ===== 2. WELCOME SECTION ===== */}
      <section className="bg-navy py-20 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-4xl font-light tracking-wide text-cream md:text-5xl">
              {t.welcome}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            {/* Copper divider */}
            <div className="mx-auto mt-6 h-px w-16 bg-copper" />
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="mt-8 font-body text-lg leading-relaxed text-cream/70 md:text-xl">
              Hammett&apos;s Gastro Bar is a &lsquo;not quite tapas&rsquo; dining
              experience on Malta&apos;s Sliema seafront. Chef Chris Hammett brings
              bold Asian&nbsp;fusion flavours to small sharing plates designed for the
              table&nbsp;&mdash; encouraging conversation, discovery, and a social way
              of eating that feels both familiar and entirely new.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <p className="mt-8 inline-flex items-center gap-3 font-body text-sm uppercase tracking-widest text-copper">
              <span className="h-px w-8 bg-copper/50" />
              Ranked #1 by the Definitively Good Guide
              <span className="h-px w-8 bg-copper/50" />
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 3. GASTRO FOOD SECTION ===== */}
      <section className="bg-navy-dark py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-heading text-4xl font-light tracking-wide text-cream md:text-5xl lg:text-6xl">
                {t.gastroFood}
              </h2>
              <div className="mx-auto mt-6 h-px w-16 bg-copper" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-3xl text-center font-body text-lg leading-relaxed text-cream/70">
              Chef Chris Hammett&apos;s menu is built around bold, shareable plates
              that draw on flavours from across Asia. Every dish is designed to be
              passed around the table&nbsp;&mdash; from sticky pork belly yakitori and
              fragrant Thai curries to our legendary Korean Fried Cauliflower.
            </p>
          </ScrollReveal>

          {/* Food image grid */}
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {FOOD_IMAGES.map((img, i) => (
              <ScrollReveal key={img.src} delay={0.1 * i}>
                <div className="group relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <p className="absolute bottom-4 left-4 font-heading text-lg tracking-wide text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {img.alt}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 text-center">
              <Link
                href={`/${lang}/menu`}
                className="inline-block rounded-sm bg-copper px-8 py-3 font-body text-sm font-medium uppercase tracking-wider text-navy-dark transition-all duration-300 hover:bg-copper-light hover:shadow-lg hover:shadow-copper/20"
              >
                View Full Menu
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 4. GASTRO BAR SECTION ===== */}
      <section className="relative py-20 md:py-32">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/interior/cocktail-pouring.jpg"
            alt="Cocktail being prepared"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-dark/85" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-heading text-4xl font-light tracking-wide text-cream md:text-5xl lg:text-6xl">
                {t.gastroBar}
              </h2>
              <div className="mx-auto mt-6 h-px w-16 bg-copper" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mx-auto mt-8 max-w-3xl text-center font-body text-lg leading-relaxed text-cream/70">
              Malta&apos;s first Asian-inspired cocktail bar. Our bartenders craft
              inventive drinks using house-made infusions, fresh ingredients, and
              premium spirits. With over 110&nbsp;wines by the bottle and a rotating
              selection by the glass, there&apos;s always something new to discover.
            </p>
          </ScrollReveal>

          {/* Cocktail image grid */}
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {COCKTAIL_IMAGES.map((img, i) => (
              <ScrollReveal key={img.src} delay={0.1 * i}>
                <div className="group relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 text-center">
              <Link
                href={`/${lang}/menu#cocktails`}
                className="inline-block rounded-sm border border-cream/40 px-8 py-3 font-body text-sm font-medium uppercase tracking-wider text-cream transition-all duration-300 hover:border-cream hover:bg-cream/10"
              >
                View Cocktails
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 5. HAPPY HOUR BANNER ===== */}
      <section className="bg-copper py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-4xl font-light tracking-wide text-navy-dark md:text-5xl">
              {t.happyHour}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-4 font-body text-lg text-navy-dark/80">
              Mon&ndash;Thu 17:00&ndash;19:00 &middot; Fri&ndash;Sun 15:00&ndash;19:00
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-2 font-heading text-2xl text-navy-dark md:text-3xl">
              Cocktails at &euro;6.50 &bull; Prosecco &amp; Beer at &euro;3.50
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 6. LOCATION & HOURS SECTION ===== */}
      <section id="location" className="bg-navy py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-center font-heading text-4xl font-light tracking-wide text-cream md:text-5xl">
              {t.findUs}
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-copper" />
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            {/* Left: Map / Address */}
            <ScrollReveal direction="left">
              <div>
                {/* Map placeholder */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-navy-dark">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.1!2d14.5025!3d35.9175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e45298f5a3c9d%3A0x6a5e2c7c6ef5d7e5!2sHammett&#39;s%20Gastro%20Bar!5e0!3m2!1sen!2smt!4v1"
                    className="absolute inset-0 h-full w-full border-0 opacity-70 grayscale"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hammett's Gastro Bar location"
                  />
                </div>

                <div className="mt-8 space-y-3">
                  <p className="font-body text-sm italic text-cream/50">
                    5 minutes walk from Tigne Point on the Sliema seafront
                  </p>
                  <p className="font-body text-base leading-relaxed text-cream/80">
                    33/34 Tigne Seafront
                    <br />
                    Sliema SLM 3011, Malta
                  </p>
                  <p>
                    <a
                      href="tel:+35621344955"
                      className="font-body text-base text-copper transition-colors hover:text-copper-light"
                    >
                      +356 2134 4955
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:gastrobar@hammetts.com"
                      className="font-body text-base text-cream/60 transition-colors hover:text-copper"
                    >
                      gastrobar@hammetts.com
                    </a>
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Opening Hours */}
            <ScrollReveal direction="right">
              <div>
                <h3 className="font-heading text-2xl tracking-wide text-copper">
                  {t.hours}
                </h3>
                <div className="mt-6 space-y-4">
                  {HOURS.map((slot) => (
                    <div
                      key={slot.days}
                      className="flex items-baseline justify-between border-b border-cream/10 pb-4"
                    >
                      <span className="font-body text-base text-cream/80">
                        {slot.days}
                      </span>
                      <span className="font-body text-base text-cream">
                        {slot.time}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-sm border border-copper/20 bg-copper/5 px-6 py-5">
                  <p className="font-heading text-lg text-copper">
                    Happy Hour
                  </p>
                  <p className="mt-1 font-body text-sm text-cream/60">
                    Mon&ndash;Thu 17:00&ndash;19:00 &middot; Fri&ndash;Sun 15:00&ndash;19:00
                  </p>
                  <p className="mt-1 font-body text-sm text-cream/80">
                    Cocktails at &euro;6.50 &bull; Prosecco &amp; Beer at &euro;3.50
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== 7. NO RESERVATIONS NOTICE ===== */}
      <section className="bg-navy-dark py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <ScrollReveal>
            <div className="rounded-sm border border-cream/10 bg-navy/50 px-8 py-12 md:px-16 md:py-16">
              <h2 className="font-heading text-3xl font-light tracking-wide text-cream md:text-4xl">
                No reservations needed &mdash; just walk&nbsp;in
              </h2>
              <div className="mx-auto mt-6 h-px w-12 bg-copper/50" />
              <p className="mt-6 font-body text-base leading-relaxed text-cream/60">
                We operate on a first-come, first-served basis. Walk in anytime during
                opening hours and we&apos;ll find you a table. The bar is always open
                for drinks while you wait.
              </p>
              <p className="mt-6 font-body text-sm text-cream/50">
                For groups over 8, please{' '}
                <Link
                  href={`/${lang}/contact`}
                  className="text-copper underline underline-offset-4 transition-colors hover:text-copper-light"
                >
                  contact us
                </Link>{' '}
                in advance.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

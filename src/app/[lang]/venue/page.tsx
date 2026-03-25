import Image from 'next/image';
import { getDictionary } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Venue",
  description:
    "Explore Hammett's Gastro Bar venue on the Sliema seafront — navy velvet banquettes, copper accents, industrial-chic lighting, and Asian-inspired decor.",
};

const VENUE_PHOTOS = [
  { src: '/images/interior/venue-hero-1.jpg', alt: "Hammett's main dining area with navy velvet banquettes" },
  { src: '/images/interior/venue-hero-2.jpg', alt: 'Copper and gold accent lighting at the bar' },
  { src: '/images/interior/dining-area.jpg', alt: 'Intimate dining space with Asian-inspired decor' },
  { src: '/images/interior/bar-interior.jpg', alt: 'Industrial-chic bar area with craft cocktail station' },
];

export default async function VenuePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <Image
          src="/images/interior/venue-hero-1.jpg"
          alt="Hammett's Gastro Bar venue interior"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/60 via-navy-dark/40 to-navy-dark" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="font-heading text-5xl font-light tracking-widest text-cream md:text-7xl">
            {dict.nav.venue}
          </h1>
          <div className="mt-4 h-px w-24 bg-copper" />
        </div>
      </section>

      {/* About */}
      <section className="bg-navy-dark px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl tracking-wider text-copper md:text-4xl">
            A Feast for the Senses
          </h2>
          <p className="mt-8 font-body text-lg leading-relaxed text-cream/70">
            Step into a world where East meets Mediterranean. Our venue features plush navy velvet
            banquettes, warm copper and gold accents, industrial-chic lighting, and Asian-inspired
            decor elements that create an atmosphere of relaxed sophistication. Every detail has been
            curated to complement the culinary journey that awaits.
          </p>
          <p className="mt-6 font-body text-lg leading-relaxed text-cream/70">
            Perched on the Sliema seafront with views across Marsamxett Harbour, our space transforms
            from a sunlit afternoon brunch spot to an intimate evening destination where cocktails
            flow and flavours collide.
          </p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="bg-navy px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center font-heading text-3xl tracking-wider text-copper md:text-4xl">
            Explore Our Space
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {VENUE_PHOTOS.map((photo) => (
              <div
                key={photo.src}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-navy-dark/20 transition-opacity duration-500 group-hover:opacity-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Context */}
      <section className="bg-navy-dark px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-heading text-xl italic leading-relaxed text-cream/80 md:text-2xl">
            Situated on the Sliema seafront, just 5 minutes walk from Tigne Point shopping centre
            and the Sliema&ndash;Valletta ferry.
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="bg-navy px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-lg">
          <iframe
            title="Hammett's Gastro Bar location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.7!2d14.5044!3d35.9131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e452c!2sHammett%27s+Gastro+Bar!5e0!3m2!1sen!2smt!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Awards */}
      <section className="bg-navy-dark px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl tracking-wider text-copper md:text-4xl">
            Recognition
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-copper/20 bg-navy/50 px-6 py-8">
              <div className="mb-4 text-4xl text-copper">#1</div>
              <p className="font-body text-sm leading-relaxed text-cream/70">
                Ranked #1 by the Definitively Good Guide
              </p>
            </div>
            <div className="rounded-lg border border-copper/20 bg-navy/50 px-6 py-8">
              <div className="mb-4 font-heading text-4xl text-copper">27</div>
              <p className="font-body text-sm leading-relaxed text-cream/70">
                Award winning team
              </p>
            </div>
            <div className="rounded-lg border border-copper/20 bg-navy/50 px-6 py-8">
              <div className="mb-4 text-4xl text-copper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto h-10 w-10">
                  <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z" />
                </svg>
              </div>
              <p className="font-body text-sm leading-relaxed text-cream/70">
                Malta Tourism Authority Quality Assured
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

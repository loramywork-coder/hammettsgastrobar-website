import Image from 'next/image';
import { getDictionary } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Private Dining & Events',
  description:
    "Host your next event at Hammett's Gastro Bar. Standing and seated events for 25-100+ guests. Asian fusion dining, craft cocktails, and a dedicated events team.",
};

export default async function EventsPage({
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
          src="/images/interior/private-dining.jpg"
          alt="Private dining setup at Hammett's Gastro Bar"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/60 via-navy-dark/40 to-navy-dark" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="font-heading text-4xl font-light tracking-widest text-cream md:text-6xl lg:text-7xl">
            {dict.sections.privateDining}
          </h1>
          <div className="mt-4 h-px w-24 bg-copper" />
        </div>
      </section>

      {/* Intro */}
      <section className="bg-navy-dark px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-2xl italic leading-relaxed text-cream/80 md:text-3xl">
            Party with us!
          </p>
          <p className="mt-6 font-body text-lg leading-relaxed text-cream/60">
            Our events team will work with you to create a unique celebration your guests
            will love. From intimate dinners to full venue buyouts, we tailor every detail
            to make your event unforgettable.
          </p>
        </div>
      </section>

      {/* Capacity */}
      <section className="bg-navy px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center font-heading text-3xl tracking-wider text-copper md:text-4xl">
            Capacity
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-copper/20 bg-navy-dark/50 p-8 text-center">
              <div className="mb-2 font-heading text-5xl font-light text-copper">25&ndash;100+</div>
              <p className="font-body text-sm uppercase tracking-widest text-cream/60">
                Standing Events
              </p>
              <p className="mt-4 font-body text-sm leading-relaxed text-cream/50">
                Cocktail receptions, launch parties, and social gatherings with canap&eacute;s and flowing drinks.
              </p>
            </div>
            <div className="rounded-lg border border-copper/20 bg-navy-dark/50 p-8 text-center">
              <div className="mb-2 font-heading text-5xl font-light text-copper">25&ndash;100+</div>
              <p className="font-body text-sm uppercase tracking-widest text-cream/60">
                Seated Events
              </p>
              <p className="mt-4 font-body text-sm leading-relaxed text-cream/50">
                Private dinners, corporate functions, and celebrations with bespoke set menus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gaming Fridays */}
      <section className="bg-navy-dark px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-copper/30 bg-gradient-to-br from-navy via-navy to-navy-dark p-10 text-center md:p-14">
            <div className="mb-4 text-5xl">&#x1F3B2;</div>
            <h2 className="font-heading text-3xl tracking-wider text-copper md:text-4xl">
              {dict.sections.gamingFridays}
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-cream/70">
              Every Friday, try your luck with our Lucky 6 dice game. Roll two dice
              with your bill &mdash; one six gets you <span className="font-semibold text-copper">50% off</span>,
              two sixes and the <span className="font-semibold text-copper">bill is on us</span>!
            </p>
            <p className="mt-6 font-heading text-2xl italic tracking-wider text-cream/90">
              Simple. Risky. Fun.
            </p>
          </div>
        </div>
      </section>

      {/* Event Inquiry */}
      <section className="bg-navy px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-heading text-3xl tracking-wider text-copper md:text-4xl">
            Plan Your Event
          </h2>
          <p className="mb-12 text-center font-body text-lg text-cream/60">
            Get in touch with our events team to start planning your celebration.
            Share the details below and we&apos;ll get back to you within 24 hours.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* What we need */}
            <div className="rounded-lg border border-cream/10 bg-navy-dark/50 p-8">
              <h3 className="mb-6 font-heading text-xl tracking-wider text-cream">
                What we&apos;ll need from you
              </h3>
              <ul className="space-y-4 font-body text-sm text-cream/60">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-copper">&#8226;</span>
                  <span>Your name and contact details</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-copper">&#8226;</span>
                  <span>Email address and phone number</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-copper">&#8226;</span>
                  <span>Type of event (birthday, corporate, wedding, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-copper">&#8226;</span>
                  <span>Estimated number of guests</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-copper">&#8226;</span>
                  <span>Preferred date and time</span>
                </li>
              </ul>
            </div>

            {/* CTA card */}
            <div className="flex flex-col items-center justify-center rounded-lg border border-copper/20 bg-navy-dark/50 p-8 text-center">
              <h3 className="mb-6 font-heading text-xl tracking-wider text-cream">
                Get In Touch
              </h3>
              <a
                href="mailto:gastrobar@hammetts.com"
                className="mb-3 font-body text-lg text-copper transition-colors hover:text-copper/80"
              >
                gastrobar@hammetts.com
              </a>
              <a
                href="tel:+35621344955"
                className="mb-8 font-body text-lg text-cream/70 transition-colors hover:text-copper"
              >
                +356 2134 4955
              </a>
              <a
                href="mailto:gastrobar@hammetts.com?subject=Event%20Inquiry"
                className="inline-block rounded-sm bg-copper px-8 py-3 font-body text-sm font-medium uppercase tracking-wider text-navy-dark transition-all duration-300 hover:bg-copper/80 hover:shadow-lg hover:shadow-copper/20"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

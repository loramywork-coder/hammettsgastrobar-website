import Image from 'next/image';
import { getDictionary } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Opening Hours',
  description:
    "Hammett's Gastro Bar opening hours. Monday-Thursday 17:00-23:00, Friday 12:00-23:00, Saturday & Sunday 11:00-23:00. Happy Hour daily.",
};

const SCHEDULE = [
  { day: 'Monday \u2013 Thursday', time: '17:00 \u2013 23:00' },
  { day: 'Friday', time: '12:00 \u2013 23:00' },
  { day: 'Saturday & Sunday', time: '11:00 \u2013 23:00' },
];

const HAPPY_HOUR = [
  { day: 'Mon\u2013Thu', time: '17:00 \u2013 19:00' },
  { day: 'Fri\u2013Sun', time: '15:00 \u2013 19:00' },
];

export default async function HoursPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src="/images/interior/venue-hero-2.jpg"
          alt="Hammett's Gastro Bar ambience"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/60 via-navy-dark/40 to-navy-dark" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="font-heading text-5xl font-light tracking-widest text-cream md:text-7xl">
            {dict.sections.hours}
          </h1>
          <div className="mt-4 h-px w-24 bg-copper" />
        </div>
      </section>

      {/* Opening Hours Table */}
      <section className="bg-navy-dark px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="overflow-hidden rounded-xl border border-cream/10 bg-navy/50">
            {SCHEDULE.map((item, index) => (
              <div
                key={item.day}
                className={`flex items-center justify-between px-8 py-6 ${
                  index < SCHEDULE.length - 1 ? 'border-b border-cream/10' : ''
                }`}
              >
                <span className="font-heading text-lg tracking-wider text-cream md:text-xl">
                  {item.day}
                </span>
                <span className="font-body text-lg text-cream/80 md:text-xl">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Hour */}
      <section className="bg-navy px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="rounded-xl border border-copper/30 bg-gradient-to-br from-navy-dark via-navy-dark to-navy p-10 md:p-14">
            <h2 className="font-heading text-3xl tracking-wider text-copper md:text-4xl">
              {dict.sections.happyHour}
            </h2>

            <div className="mt-8 space-y-4">
              {HAPPY_HOUR.map((item) => (
                <div key={item.day} className="flex items-center justify-center gap-4">
                  <span className="font-body text-lg text-cream/80">{item.day}</span>
                  <span className="text-copper">&mdash;</span>
                  <span className="font-body text-lg text-cream/80">{item.time}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 h-px bg-copper/20" />

            <p className="mt-8 font-heading text-xl italic text-copper md:text-2xl">
              Cocktails at &euro;6.50 &bull; Prosecco &amp; Beer at &euro;3.50
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-navy-dark px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-heading text-3xl tracking-wider text-copper md:text-4xl">
            {dict.sections.findUs}
          </h2>

          <div className="mb-8 text-center font-body text-lg text-cream/60">
            <p>33/34 Tigne Seafront</p>
            <p>Sliema SLM 3011, Malta</p>
            <p className="mt-3">
              <a href="tel:+35621344955" className="text-cream/70 transition-colors hover:text-copper">
                +356 2134 4955
              </a>
            </p>
          </div>

          <div className="overflow-hidden rounded-lg">
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
        </div>
      </section>
    </>
  );
}

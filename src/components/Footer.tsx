import Link from 'next/link';
import { getDictionary } from '@/lib/i18n';

interface FooterProps {
  lang: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
    </svg>
  );
}

const QUICK_LINKS = [
  { key: 'menus', href: '/menu' },
  { key: 'venue', href: '/venue' },
  { key: 'events', href: '/events' },
  { key: 'hours', href: '/hours' },
  { key: 'contact', href: '/contact' },
] as const;

export default function Footer({ lang, dictionary }: FooterProps) {
  const t = dictionary.footer;
  const nav = dictionary.nav;

  return (
    <footer className="bg-navy-dark">
      {/* Copper accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-copper/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8">
        {/* Top section: 4-column grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Opening Hours */}
          <div>
            <h3 className="font-heading text-lg tracking-wider text-copper">
              {t.openingHours}
            </h3>
            <div className="mt-4 space-y-2 font-body text-sm leading-relaxed text-cream/60">
              <p>
                <span className="text-cream/80">{t.monThu}</span>
                <br />
                17:00 &ndash; 23:00
              </p>
              <p>
                <span className="text-cream/80">{t.fri}</span>
                <br />
                12:00 &ndash; 23:00
              </p>
              <p>
                <span className="text-cream/80">{t.satSun}</span>
                <br />
                11:00 &ndash; 23:00
              </p>
              <div className="mt-3 border-t border-cream/10 pt-3">
                <p className="text-copper/80">
                  <span className="text-cream/80">{t.happyHour}</span>
                  <br />
                  {t.happyHourTimes}
                </p>
              </div>
            </div>
          </div>

          {/* Find Us */}
          <div>
            <h3 className="font-heading text-lg tracking-wider text-copper">
              {t.findUs}
            </h3>
            <div className="mt-4 space-y-3 font-body text-sm leading-relaxed text-cream/60">
              <p>
                33/34 Tigne Seafront
                <br />
                Sliema SLM 3011
                <br />
                Malta
              </p>
              <p>
                <a
                  href="tel:+35621344955"
                  className="transition-colors hover:text-copper"
                >
                  +356 2134 4955
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@hammetts.com.mt"
                  className="transition-colors hover:text-copper"
                >
                  info@hammetts.com.mt
                </a>
              </p>
              <p className="mt-2 text-xs italic text-cream/40">
                {t.locationContext}
              </p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-heading text-lg tracking-wider text-copper">
              {t.followUs}
            </h3>
            <div className="mt-4 flex gap-4">
              <a
                href="https://www.instagram.com/hammettsgastrobar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 transition-colors duration-300 hover:text-copper"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/hammettsgastrobar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 transition-colors duration-300 hover:text-copper"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
            <div className="mt-8">
              <p className="font-body text-xs leading-relaxed text-cream/30">
                {t.mta}
              </p>
              <p className="mt-1 font-body text-xs text-cream/30">
                {t.qualityAssured}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg tracking-wider text-copper">
              {t.quickLinks}
            </h3>
            <nav className="mt-4 flex flex-col gap-2">
              {QUICK_LINKS.map((item) => (
                <Link
                  key={item.key}
                  href={`/${lang}${item.href}`}
                  className="font-body text-sm text-cream/50 transition-colors duration-300 hover:text-copper"
                >
                  {nav[item.key as keyof typeof nav]}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-cream/10 pt-6">
          <p className="text-center font-body text-xs tracking-wide text-cream/30">
            &copy; 2024 IBB Hammett&apos;s Operations Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

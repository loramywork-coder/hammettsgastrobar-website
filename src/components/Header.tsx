'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { getDictionary } from '@/lib/i18n';

interface HeaderProps {
  lang: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

const NAV_ITEMS = [
  { key: 'menus', href: '/menu' },
  { key: 'venue', href: '/venue' },
  { key: 'events', href: '/events' },
  { key: 'hours', href: '/hours' },
  { key: 'contact', href: '/contact' },
] as const;

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'fr', label: 'FR' },
] as const;

export default function Header({ lang, dictionary }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const t = dictionary.nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <Link href={`/${lang}`} className="group flex items-baseline gap-2">
            <span className="font-heading text-2xl font-semibold tracking-[0.15em] text-cream transition-colors group-hover:text-copper sm:text-3xl">
              HAMMETT&apos;S
            </span>
            <span className="font-heading text-xs tracking-[0.25em] text-copper/80 sm:text-sm">
              GASTRO BAR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={`/${lang}${item.href}`}
                className="font-body text-sm tracking-wider text-cream/70 transition-colors duration-300 hover:text-copper"
              >
                {t[item.key as keyof typeof t]}
              </Link>
            ))}
          </nav>

          {/* Language Switcher (Desktop) */}
          <div className="hidden items-center gap-1 lg:flex">
            {LANGUAGES.map((l, i) => (
              <span key={l.code} className="flex items-center">
                {i > 0 && (
                  <span className="mx-1 text-cream/20">|</span>
                )}
                <Link
                  href={`/${l.code}`}
                  className={`font-body text-xs tracking-widest transition-colors duration-300 ${
                    lang === l.code
                      ? 'text-copper'
                      : 'text-cream/50 hover:text-cream'
                  }`}
                >
                  {l.label}
                </Link>
              </span>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-[1.5px] w-6 bg-cream transition-all duration-300 ${
                mobileOpen ? 'translate-y-[7.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-cream transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-cream transition-all duration-300 ${
                mobileOpen ? '-translate-y-[7.5px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-navy transition-opacity duration-500 lg:hidden ${
          mobileOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.key}
              href={`/${lang}${item.href}`}
              onClick={closeMobile}
              className={`font-heading text-3xl tracking-[0.12em] text-cream/90 transition-all duration-500 hover:text-copper sm:text-4xl ${
                mobileOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-6 opacity-0'
              }`}
              style={{
                transitionDelay: mobileOpen ? `${150 + index * 80}ms` : '0ms',
              }}
            >
              {t[item.key as keyof typeof t]}
            </Link>
          ))}

          {/* Mobile Language Switcher */}
          <div
            className={`mt-8 flex items-center gap-3 transition-all duration-500 ${
              mobileOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-6 opacity-0'
            }`}
            style={{
              transitionDelay: mobileOpen
                ? `${150 + NAV_ITEMS.length * 80}ms`
                : '0ms',
            }}
          >
            {LANGUAGES.map((l, i) => (
              <span key={l.code} className="flex items-center">
                {i > 0 && (
                  <span className="mx-2 text-cream/20">|</span>
                )}
                <Link
                  href={`/${l.code}`}
                  onClick={closeMobile}
                  className={`font-body text-sm tracking-widest transition-colors ${
                    lang === l.code
                      ? 'text-copper'
                      : 'text-cream/50 hover:text-cream'
                  }`}
                >
                  {l.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

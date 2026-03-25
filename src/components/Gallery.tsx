'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type Category = 'all' | 'food' | 'cocktails' | 'interior' | 'bar';

interface GalleryImage {
  src: string;
  alt: string;
  category: Category;
  tall?: boolean;
}

const IMAGES: GalleryImage[] = [
  // Food
  { src: '/images/food/pork-belly-yakitori.jpg', alt: 'Pork belly yakitori with Asian glaze', category: 'food', tall: true },
  { src: '/images/food/thai-vegan-curry.jpg', alt: 'Thai vegan curry with coconut and lemongrass', category: 'food' },
  { src: '/images/food/chocolate-overdose.jpg', alt: 'Chocolate overdose dessert', category: 'food' },
  { src: '/images/food/kfc.jpg', alt: 'Korean fried chicken', category: 'food', tall: true },
  { src: '/images/food/hero-food-sharing.jpg', alt: 'Sharing plates spread across the table', category: 'food' },
  { src: '/images/food/dish-plating-1.jpg', alt: 'Chef plating an intricate dish', category: 'food', tall: true },
  { src: '/images/food/dish-plating-2.jpg', alt: 'Beautifully plated Asian fusion dish', category: 'food' },
  { src: '/images/food/menu-hero.jpg', alt: 'Signature dishes from the menu', category: 'food' },
  // Cocktails
  { src: '/images/cocktails/cocktail-1.jpg', alt: 'Craft cocktail with house-made infusion', category: 'cocktails', tall: true },
  { src: '/images/cocktails/cocktail-2.jpg', alt: 'Tropical cocktail with fresh garnish', category: 'cocktails' },
  { src: '/images/cocktails/cocktail-3.jpg', alt: 'Smoked old fashioned cocktail', category: 'cocktails' },
  { src: '/images/cocktails/cocktail-4.jpg', alt: 'Signature cocktail with edible flowers', category: 'cocktails', tall: true },
  // Interior
  { src: '/images/interior/cocktail-pouring.jpg', alt: 'Bartender pouring a cocktail', category: 'interior' },
  { src: '/images/interior/venue-hero-1.jpg', alt: 'Main dining area with velvet banquettes', category: 'interior', tall: true },
  { src: '/images/interior/venue-hero-2.jpg', alt: 'Industrial-chic lighting and copper accents', category: 'interior' },
  { src: '/images/interior/dining-area.jpg', alt: 'Intimate dining setting', category: 'interior' },
  { src: '/images/interior/private-dining.jpg', alt: 'Private dining space', category: 'interior', tall: true },
  // Bar
  { src: '/images/interior/bar-interior.jpg', alt: 'Bar area with premium spirits display', category: 'bar' },
];

const TABS: { key: Category; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'food', label: 'Food' },
  { key: 'cocktails', label: 'Cocktails' },
  { key: 'interior', label: 'Interior' },
  { key: 'bar', label: 'Bar' },
];

interface GalleryProps {
  labels: {
    all: string;
    food: string;
    cocktails: string;
    interior: string;
    bar: string;
  };
}

export default function Gallery({ labels }: GalleryProps) {
  const [activeTab, setActiveTab] = useState<Category>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeTab === 'all' ? IMAGES : IMAGES.filter((img) => img.category === activeTab);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filtered.length : null));
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filtered.length) % filtered.length : null));
  }, [filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  const tabLabels: Record<Category, string> = {
    all: labels.all,
    food: labels.food,
    cocktails: labels.cocktails,
    interior: labels.interior,
    bar: labels.bar,
  };

  return (
    <>
      {/* Filter Tabs */}
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`rounded-full px-6 py-2 font-body text-sm tracking-wider transition-all duration-300 ${
              activeTab === tab.key
                ? 'bg-copper text-navy-dark'
                : 'border border-cream/20 text-cream/60 hover:border-copper/50 hover:text-cream'
            }`}
          >
            {tabLabels[tab.key]}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <motion.div
        layout
        className="columns-1 gap-4 sm:columns-2 lg:columns-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((image, index) => (
            <motion.div
              key={image.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-lg"
              onClick={() => openLightbox(index)}
            >
              <div className={`relative w-full ${image.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-navy-dark/0 transition-all duration-500 group-hover:bg-navy-dark/30" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full text-cream/70 transition-colors hover:text-cream"
              aria-label="Close lightbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-navy/50 text-cream/70 transition-colors hover:bg-navy hover:text-cream"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={filtered[lightboxIndex].src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[85vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto rounded-lg object-contain"
                sizes="90vw"
                priority
              />
              <p className="mt-4 text-center font-body text-sm text-cream/60">
                {filtered[lightboxIndex].alt}
              </p>
            </motion.div>

            {/* Next button */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-navy/50 text-cream/70 transition-colors hover:bg-navy hover:text-cream"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-body text-sm text-cream/50">
              {lightboxIndex + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

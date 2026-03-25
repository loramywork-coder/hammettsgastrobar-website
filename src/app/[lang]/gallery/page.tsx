import { getDictionary } from '@/lib/i18n';
import Gallery from '@/components/Gallery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    "Browse photos of Hammett's Gastro Bar — our Asian fusion dishes, craft cocktails, stunning venue interior, and bar area on the Sliema seafront.",
};

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <section className="bg-navy-dark px-6 pb-20 pt-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h1 className="font-heading text-5xl font-light tracking-widest text-cream md:text-7xl">
            {dict.sections.gallery}
          </h1>
          <div className="mx-auto mt-4 h-px w-24 bg-copper" />
        </div>

        {/* Gallery Component */}
        <Gallery
          labels={{
            all: 'All',
            food: 'Food',
            cocktails: 'Cocktails',
            interior: 'Interior',
            bar: 'Bar',
          }}
        />
      </div>
    </section>
  );
}

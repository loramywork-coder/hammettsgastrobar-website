import { getDictionary } from '@/lib/i18n';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with Hammett's Gastro Bar. 33/34 Tigne Seafront, Sliema, Malta. Phone +356 21344955. No reservations needed — just walk in!",
};

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
    </svg>
  );
}

export default async function ContactPage({
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
            {dict.sections.contact}
          </h1>
          <div className="mx-auto mt-4 h-px w-24 bg-copper" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column — Contact Info + Form */}
          <div>
            {/* Contact Info */}
            <div className="mb-10 space-y-5">
              <div>
                <h2 className="mb-3 font-heading text-xl tracking-wider text-copper">Address</h2>
                <p className="font-body text-cream/70">
                  33/34 Tigne Seafront<br />
                  Sliema SLM 3011<br />
                  Malta
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-xl tracking-wider text-copper">Phone</h2>
                <a href="tel:+35621344955" className="font-body text-cream/70 transition-colors hover:text-copper">
                  +356 2134 4955
                </a>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-xl tracking-wider text-copper">Email</h2>
                <a href="mailto:gastrobar@hammetts.com" className="font-body text-cream/70 transition-colors hover:text-copper">
                  gastrobar@hammetts.com
                </a>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-xl tracking-wider text-copper">Follow Us</h2>
                <div className="flex gap-4">
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
              </div>
            </div>

            {/* Policy Notices */}
            <div className="mb-10 space-y-4 rounded-lg border border-copper/20 bg-navy/50 p-6">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-copper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
                  </svg>
                </span>
                <p className="font-body text-sm leading-relaxed text-cream/70">
                  <strong className="text-cream/90">No reservations policy.</strong> We operate on a no reservations policy. Just walk in!
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-copper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                  </svg>
                </span>
                <p className="font-body text-sm leading-relaxed text-cream/70">
                  <strong className="text-cream/90">Large groups.</strong> For groups over 8, please contact us. For parties over 16, ask about our function packages.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-5" onSubmit={undefined}>
              <div>
                <label htmlFor="name" className="mb-1.5 block font-body text-sm tracking-wider text-cream/60">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-lg border border-cream/15 bg-navy/50 px-4 py-3 font-body text-sm text-cream placeholder:text-cream/30 focus:border-copper/50 focus:outline-none focus:ring-1 focus:ring-copper/30"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1.5 block font-body text-sm tracking-wider text-cream/60">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-lg border border-cream/15 bg-navy/50 px-4 py-3 font-body text-sm text-cream placeholder:text-cream/30 focus:border-copper/50 focus:outline-none focus:ring-1 focus:ring-copper/30"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block font-body text-sm tracking-wider text-cream/60">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-lg border border-cream/15 bg-navy/50 px-4 py-3 font-body text-sm text-cream placeholder:text-cream/30 focus:border-copper/50 focus:outline-none focus:ring-1 focus:ring-copper/30"
                    placeholder="+356 ..."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block font-body text-sm tracking-wider text-cream/60">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full rounded-lg border border-cream/15 bg-navy/50 px-4 py-3 font-body text-sm text-cream placeholder:text-cream/30 focus:border-copper/50 focus:outline-none focus:ring-1 focus:ring-copper/30"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block font-body text-sm tracking-wider text-cream/60">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-lg border border-cream/15 bg-navy/50 px-4 py-3 font-body text-sm text-cream placeholder:text-cream/30 focus:border-copper/50 focus:outline-none focus:ring-1 focus:ring-copper/30"
                  placeholder="Tell us more..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-copper px-8 py-3.5 font-body text-sm font-medium uppercase tracking-wider text-navy-dark transition-all duration-300 hover:bg-copper/80 hover:shadow-lg hover:shadow-copper/20 sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column — Map */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-lg">
              <iframe
                title="Hammett's Gastro Bar location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.7!2d14.5044!3d35.9131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e452c!2sHammett%27s+Gastro+Bar!5e0!3m2!1sen!2smt!4v1"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
            <p className="mt-4 text-center font-body text-sm italic text-cream/40">
              Situated on the Sliema seafront, just 5 minutes walk from Tigne Point shopping centre
              and the Sliema&ndash;Valletta ferry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

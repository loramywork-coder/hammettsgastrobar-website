import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RestaurantSchema from "@/components/RestaurantSchema";
import { getDictionary } from "@/lib/i18n";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hammett's Gastro Bar | Asian Fusion Dining & Cocktails | Sliema, Malta",
    template: "%s | Hammett's Gastro Bar",
  },
  description:
    "Award-winning Asian fusion gastro bar on the Sliema seafront, Malta. Small sharing plates, craft cocktails with house-made infusions, and 110+ wines. No reservations needed.",
  keywords: [
    "Hammett's Gastro Bar",
    "Asian fusion Malta",
    "Sliema restaurant",
    "cocktail bar Malta",
    "sharing plates",
    "gastro bar",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.hammettsgastrobar.com",
    siteName: "Hammett's Gastro Bar",
    title: "Hammett's Gastro Bar | Asian Fusion Dining & Cocktails",
    description:
      "Award-winning Asian fusion gastro bar on the Sliema seafront. Small sharing plates, craft cocktails, 110+ wines.",
    images: [{ url: "/images/food/hero-food-sharing.jpg", width: 1200, height: 630 }],
  },
};

const supportedLocales = ["en", "de", "fr"];

export function generateStaticParams() {
  return supportedLocales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = supportedLocales.includes(lang) ? lang : "en";
  const dictionary = getDictionary(locale);

  return (
    <html lang={locale} className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-navy-dark text-cream">
        <RestaurantSchema />
        <Header lang={locale} dictionary={dictionary} />
        <main className="flex-1">{children}</main>
        <Footer lang={locale} dictionary={dictionary} />
      </body>
    </html>
  );
}

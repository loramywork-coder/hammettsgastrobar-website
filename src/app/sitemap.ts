import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hammettsgastrobar-website.vercel.app";
  const langs = ["en", "de", "fr"];
  const pages = ["", "/menu", "/venue", "/events", "/gallery", "/hours", "/contact"];

  const entries: MetadataRoute.Sitemap = [];

  for (const lang of langs) {
    for (const page of pages) {
      entries.push({
        url: `${baseUrl}/${lang}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "/menu" ? "weekly" : "monthly",
        priority: page === "" ? 1 : page === "/menu" ? 0.9 : 0.7,
      });
    }
  }

  return entries;
}

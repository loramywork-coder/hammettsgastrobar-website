export default function RestaurantSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Hammett's Gastro Bar",
    alternateName: "Hammetts Gastro Bar",
    description:
      "Award-winning Asian fusion gastro bar on the Sliema seafront, Malta. Small sharing plates, craft cocktails with house-made infusions, and 110+ wines.",
    url: "https://www.hammettsgastrobar.com",
    telephone: "+35621344955",
    email: "gastrobar@hammetts.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "33/34 Tigne Seafront",
      addressLocality: "Sliema",
      postalCode: "SLM 3011",
      addressCountry: "MT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.9131,
      longitude: 14.5047,
    },
    image: "/images/food/hero-food-sharing.jpg",
    priceRange: "€€",
    servesCuisine: ["Asian Fusion", "Japanese", "Thai", "Chinese", "Korean"],
    hasMenu: "https://www.hammettsgastrobar.com/menu",
    acceptsReservations: "False",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "17:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "12:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "11:00",
        closes: "23:00",
      },
    ],
    founder: {
      "@type": "Person",
      name: "Chris Hammett",
      jobTitle: "Chef and Restaurateur",
    },
    award: [
      "Ranked #1 by the Definitively Good Guide",
      "Malta Tourism Authority Quality Assured",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

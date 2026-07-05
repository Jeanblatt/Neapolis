import { CONTACT_INFO, OPENING_HOURS, SITE_NAME } from "@/lib/constants";
import { SITE_URL } from "@/lib/seo";
import type { Product } from "@/types";

const DAY_MAP: Record<string, string[]> = {
  "Lundi - Vendredi": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  Samedi: ["Saturday"],
};

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT_INFO.address,
      addressCountry: "TN",
    },
    openingHoursSpecification: OPENING_HOURS.filter((slot) => DAY_MAP[slot.days]).map((slot) => {
      const [opens, closes] = slot.hours.split(" - ");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: DAY_MAP[slot.days],
        opens,
        closes,
      };
    }),
  };
}

const AVAILABILITY_MAP: Record<Product["stockStatus"], string> = {
  in_stock: "https://schema.org/InStock",
  out_of_stock: "https://schema.org/OutOfStock",
  on_order: "https://schema.org/PreOrder",
};

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    url: new URL(`/produits/${product.id}`, SITE_URL).toString(),
    ...(product.price !== undefined && {
      offers: {
        "@type": "Offer",
        priceCurrency: "TND",
        price: product.price,
        availability: AVAILABILITY_MAP[product.stockStatus],
      },
    }),
  };
}

import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://neapolis.tn";

const DEFAULT_TITLE = `${SITE_NAME} | Boutique Informatique en Tunisie`;

/**
 * Construit un objet Metadata autonome pour une page. Chaque page redéfinit
 * entièrement `openGraph`/`twitter` plutôt que de compter sur la fusion
 * partielle de l'API Metadata (un enfant qui redéfinit `openGraph` remplace
 * intégralement celui du parent).
 */
export function buildMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const url = new URL(path, SITE_URL).toString();

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "fr_TN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

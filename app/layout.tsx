import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipLink from "@/components/layout/SkipLink";
import AmbientBackground from "@/components/layout/AmbientBackground";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";
import JsonLd from "@/components/seo/JsonLd";
import { organizationJsonLd } from "@/lib/json-ld";
import { buildMetadata, SITE_URL } from "@/lib/seo";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...buildMetadata({ path: "/" }),
  metadataBase: new URL(SITE_URL),
  keywords: [
    "informatique Tunisie",
    "vente ordinateurs Tunis",
    "réparation ordinateur",
    "PC portable Tunisie",
    "Néapolis",
  ],
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col">
        <AmbientBackground />
        <noscript>
          <style>{".reveal{opacity:1 !important;transform:none !important;}"}</style>
        </noscript>
        <JsonLd data={organizationJsonLd()} />
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}

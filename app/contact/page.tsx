import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/contact/ContactForm";
import { CONTACT_INFO, OPENING_HOURS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Contactez Néapolis par téléphone, WhatsApp ou email pour toute question.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Nous contacter" title="Contact" description="Une question ? Contactez-nous." />
      <Container>
        <div className="grid grid-cols-1 gap-12 rounded-3xl bg-background/65 px-6 py-12 shadow-premium backdrop-blur-sm sm:px-10 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 text-zinc-600 dark:text-zinc-400">
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                {CONTACT_INFO.phone}
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                {CONTACT_INFO.email}
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                {CONTACT_INFO.address}
              </p>
              <div className="pt-2">
                <Button href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  Discuter sur WhatsApp
                </Button>
              </div>
            </div>

            <div>
              <p className="flex items-center gap-2 text-sm font-semibold">
                <Clock className="h-4 w-4 text-primary" />
                Horaires d&apos;ouverture
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                {OPENING_HOURS.map((slot) => (
                  <li key={slot.days} className="flex justify-between gap-4">
                    <span>{slot.days}</span>
                    <span>{slot.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex aspect-video items-center justify-center gap-2 rounded-2xl border border-dashed border-black/10 text-zinc-500 dark:border-white/10 dark:text-zinc-500">
              <MapPin className="h-5 w-5" />
              <span className="text-sm">Carte Google Maps à venir</span>
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </>
  );
}

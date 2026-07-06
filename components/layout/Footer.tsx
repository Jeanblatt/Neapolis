import Link from "next/link";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import CurrentYear from "@/components/layout/CurrentYear";
import { CONTACT_INFO, NAV_LINKS, OPENING_HOURS, SITE_NAME, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-black/10 bg-background/65 backdrop-blur-sm dark:border-white/10">
      <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <Container>
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <p className="text-lg font-semibold tracking-tight">{SITE_NAME}</p>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              Votre boutique informatique en Tunisie.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase dark:text-zinc-500">
              Navigation
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase dark:text-zinc-500">
              Contact
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex items-center gap-2">
                <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
                {CONTACT_INFO.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
                {CONTACT_INFO.email}
              </li>
              <li className="flex items-center gap-2">
                <MapPin aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
                {CONTACT_INFO.address}
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase dark:text-zinc-500">
              Horaires
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
              {OPENING_HOURS.map((slot) => (
                <li key={slot.days} className="flex justify-between gap-4">
                  <span>{slot.days}</span>
                  <span>{slot.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase dark:text-zinc-500">
              Suivez-nous
            </p>
            <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">Comptes bientôt disponibles</p>
            <div className="mt-4 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <span
                  key={social.label}
                  aria-label={`${social.label} (bientôt disponible)`}
                  className="flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-full border border-black/10 text-zinc-400 dark:border-white/10 dark:text-zinc-600"
                >
                  <Globe aria-hidden="true" className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-black/10 py-6 text-center text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-400">
          © <CurrentYear /> {SITE_NAME}. Tous droits réservés.
        </div>
      </Container>
    </footer>
  );
}

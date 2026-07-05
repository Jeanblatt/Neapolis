import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import { CONTACT_INFO, NAV_LINKS, OPENING_HOURS, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-semibold tracking-tight">{SITE_NAME}</p>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              Votre boutique informatique en Tunisie.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">Navigation</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Contact</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                {CONTACT_INFO.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                {CONTACT_INFO.email}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                {CONTACT_INFO.address}
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Horaires</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              {OPENING_HOURS.map((slot) => (
                <li key={slot.days} className="flex justify-between gap-4">
                  <span>{slot.days}</span>
                  <span>{slot.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 py-6 text-center text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-400">
          © {year} {SITE_NAME}. Tous droits réservés.
        </div>
      </Container>
    </footer>
  );
}

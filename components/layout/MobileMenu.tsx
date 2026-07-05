"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { PRIMARY_NAV_LINKS } from "@/lib/constants";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground"
      >
        {isOpen ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-16 border-b border-black/10 bg-background px-4 py-4 shadow-lg dark:border-white/10"
        >
          <nav className="flex flex-col gap-1">
            {PRIMARY_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 hover:bg-black/5 dark:text-zinc-300 dark:hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 border-t border-black/10 pt-3 dark:border-white/10">
            <Button href="/devis" className="w-full" onClick={() => setIsOpen(false)}>
              Demander un devis
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

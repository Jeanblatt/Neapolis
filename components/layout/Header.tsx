"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Navigation from "@/components/layout/Navigation";
import MobileMenu from "@/components/layout/MobileMenu";
import Button from "@/components/ui/Button";
import { SITE_NAME } from "@/lib/constants";
import { useScrolled } from "@/lib/useScrolled";

export default function Header() {
  const scrolled = useScrolled();

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-background/80 transition-[backdrop-filter,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-black/10 shadow-premium backdrop-blur-lg dark:border-white/10"
          : "border-transparent backdrop-blur-md"
      }`}
    >
      <Container>
        <div className="relative flex h-16 items-center justify-between gap-6">
          <Link href="/" className="flex shrink-0 items-center gap-2 text-lg font-semibold tracking-tight">
            {/* Remplacer public/logo.svg (32x32) pour changer le logo, sans toucher au code. */}
            <Image src="/logo.svg" alt="" width={32} height={32} priority className="h-8 w-8 rounded-lg" />
            {SITE_NAME}
          </Link>

          <Navigation />

          <div className="hidden md:block">
            <Button href="/devis">Demander un devis</Button>
          </div>

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}

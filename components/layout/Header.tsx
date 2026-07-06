"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Navigation from "@/components/layout/Navigation";
import NavSearch from "@/components/layout/NavSearch";
import MobileMenu from "@/components/layout/MobileMenu";
import Button from "@/components/ui/Button";
import { SITE_NAME } from "@/lib/constants";
import { useScrolled } from "@/lib/useScrolled";

export default function Header() {
  const scrolled = useScrolled();

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-[background-color,backdrop-filter,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-black/10 bg-background/85 shadow-premium backdrop-blur-xl dark:border-white/10"
          : "border-transparent bg-background/60 backdrop-blur-md"
      }`}
    >
      <Container>
        <div
          className={`relative flex items-center justify-between gap-4 transition-[height] duration-300 ${
            scrolled ? "h-16" : "h-16 sm:h-20"
          }`}
        >
          <Link href="/" className="flex shrink-0 items-center gap-2 text-lg font-semibold tracking-tight">
            {/* Remplacer public/logo.svg (32x32) pour changer le logo, sans toucher au code. */}
            <Image
              src="/logo.svg"
              alt=""
              width={32}
              height={32}
              priority
              className={`rounded-lg transition-[height,width] duration-300 ${scrolled ? "h-7 w-7" : "h-7 w-7 sm:h-8 sm:w-8"}`}
            />
            {SITE_NAME}
          </Link>

          <Navigation />

          <div className="flex items-center gap-1">
            <NavSearch />
            <div className="hidden md:block">
              <Button href="/devis">Demander un devis</Button>
            </div>
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}

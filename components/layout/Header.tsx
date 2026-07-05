import Link from "next/link";
import { Laptop } from "lucide-react";
import Container from "@/components/ui/Container";
import Navigation from "@/components/layout/Navigation";
import MobileMenu from "@/components/layout/MobileMenu";
import Button from "@/components/ui/Button";
import { SITE_NAME } from "@/lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-background/80 backdrop-blur-sm dark:border-white/10">
      <Container>
        <div className="relative flex h-16 items-center justify-between gap-6">
          <Link href="/" className="flex shrink-0 items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
              <Laptop className="h-4.5 w-4.5" />
            </span>
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

import { Cpu, HardDrive, Laptop, Monitor } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SITE_DESCRIPTION, WHATSAPP_LINK } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-black/10 bg-mesh dark:border-white/10">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 py-20 sm:py-28 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-6">
            <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase dark:bg-primary/20">
              Boutique informatique en Tunisie
            </span>
            <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
              L&apos;informatique, simplifiée pour vous.
            </h1>
            <p className="max-w-xl text-lg text-zinc-600 text-pretty dark:text-zinc-400">{SITE_DESCRIPTION}</p>
            <div className="flex flex-wrap gap-4">
              <Button href="/produits" size="lg">
                Voir les produits
              </Button>
              <Button href={WHATSAPP_LINK} variant="secondary" size="lg" target="_blank" rel="noopener noreferrer">
                Discuter sur WhatsApp
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-primary/10 blur-3xl dark:bg-primary/20" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-primary-light/20 blur-3xl" />
            <div className="relative grid w-full max-w-sm grid-cols-2 gap-4 rounded-3xl border border-black/10 bg-white p-8 shadow-premium-lg transition duration-500 hover:-translate-y-1 dark:border-white/10 dark:bg-zinc-900">
              <div className="col-span-2 flex h-28 items-center justify-center rounded-2xl bg-primary/10 dark:bg-primary/20">
                <Laptop className="h-10 w-10 text-primary" />
              </div>
              <div className="flex h-20 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                <Monitor className="h-7 w-7 text-zinc-500" />
              </div>
              <div className="flex h-20 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                <Cpu className="h-7 w-7 text-zinc-500" />
              </div>
              <div className="col-span-2 flex h-20 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                <HardDrive className="h-7 w-7 text-zinc-500" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import HeroSceneLoader from "@/components/home/HeroSceneLoader";
import { SITE_DESCRIPTION, WHATSAPP_LINK } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-mesh-dark bg-noise">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 py-20 sm:py-28 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-6">
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-white/90 uppercase ring-1 ring-white/15">
              Boutique informatique en Tunisie
            </span>
            <h1 className="text-5xl leading-[1.05] font-semibold tracking-tight text-balance text-white sm:text-6xl">
              L&apos;informatique, simplifiée pour vous.
            </h1>
            <p className="max-w-xl text-lg text-white/70 text-pretty">{SITE_DESCRIPTION}</p>
            <div className="flex flex-wrap gap-4">
              <Button href="/produits" size="lg">
                Voir les produits
              </Button>
              <Button
                href={WHATSAPP_LINK}
                variant="secondary"
                tone="inverse"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discuter sur WhatsApp
              </Button>
            </div>
          </div>

          <HeroSceneLoader />
        </div>
      </Container>
    </section>
  );
}

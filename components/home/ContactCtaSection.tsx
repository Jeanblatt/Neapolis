import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function ContactCtaSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-white sm:px-16">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <h2 className="relative text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Un projet informatique en tête ?
            </h2>
            <p className="relative max-w-xl text-white/80">
              Contactez-nous pour un conseil personnalisé ou une demande de devis rapide.
            </p>
            <div className="relative flex flex-wrap justify-center gap-4">
              <Button href="/devis" tone="inverse" size="lg">
                Demander un devis
              </Button>
              <Button
                href={WHATSAPP_LINK}
                variant="secondary"
                tone="inverse"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

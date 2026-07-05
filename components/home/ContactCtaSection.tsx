import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function ContactCtaSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-primary px-6 py-16 text-center text-white sm:px-16">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Un projet informatique en tête ?
          </h2>
          <p className="max-w-xl text-primary-light/90 text-white/80">
            Contactez-nous pour un conseil personnalisé ou une demande de devis rapide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/devis" variant="secondary" size="lg" className="border-white/30 bg-white text-primary hover:bg-white/90">
              Demander un devis
            </Button>
            <Button
              href={WHATSAPP_LINK}
              variant="secondary"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              className="border-white/30 bg-transparent text-white hover:bg-white/10"
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

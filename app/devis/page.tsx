import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import QuoteForm from "@/components/devis/QuoteForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Demande de devis",
  description: "Décrivez votre besoin informatique et recevez rapidement un devis personnalisé.",
  path: "/devis",
});

export default function DevisPage() {
  return (
    <>
      <PageHero
        eyebrow="Devis gratuit"
        title="Demande de devis"
        description="Décrivez votre besoin, nous revenons vers vous rapidement."
      />
      <Container>
        <div className="max-w-2xl py-12">
          <QuoteForm />
        </div>
      </Container>
    </>
  );
}

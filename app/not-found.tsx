import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Page introuvable",
  description: "La page que vous recherchez n'existe pas ou a été déplacée.",
  path: "/404",
});

export default function NotFound() {
  return (
    <PageHero
      align="center"
      eyebrow="Erreur 404"
      title="Page introuvable"
      description="Cette page n'existe pas ou a été déplacée. Retournez à l'accueil ou découvrez nos produits."
    >
      <Button href="/">Retour à l&apos;accueil</Button>
      <Button href="/produits" variant="secondary">
        Voir les produits
      </Button>
    </PageHero>
  );
}

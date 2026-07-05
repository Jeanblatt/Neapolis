import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Page introuvable",
  description: "La page que vous recherchez n'existe pas ou a été déplacée.",
  path: "/404",
});

export default function NotFound() {
  return (
    <Container>
      <div className="flex flex-col items-center gap-6 py-24 text-center">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">Erreur 404</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Page introuvable</h1>
        <p className="max-w-md text-zinc-600 dark:text-zinc-400">
          Cette page n&apos;existe pas ou a été déplacée. Retournez à l&apos;accueil ou découvrez nos produits.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/">Retour à l&apos;accueil</Button>
          <Button href="/produits" variant="secondary">
            Voir les produits
          </Button>
        </div>
      </div>
    </Container>
  );
}

"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageHero
      align="center"
      eyebrow="Erreur"
      title="Une erreur est survenue"
      description="Quelque chose s'est mal passé. Vous pouvez réessayer ou revenir à l'accueil."
    >
      <Button onClick={() => unstable_retry()}>Réessayer</Button>
      <Button href="/" variant="secondary">
        Retour à l&apos;accueil
      </Button>
    </PageHero>
  );
}

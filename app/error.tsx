"use client";

import { useEffect } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

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
    <Container>
      <div className="flex flex-col items-center gap-6 py-24 text-center">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">Erreur</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Une erreur est survenue</h1>
        <p className="max-w-md text-zinc-600 dark:text-zinc-400">
          Quelque chose s&apos;est mal passé. Vous pouvez réessayer ou revenir à l&apos;accueil.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button onClick={() => unstable_retry()}>Réessayer</Button>
          <Button href="/" variant="secondary">
            Retour à l&apos;accueil
          </Button>
        </div>
      </div>
    </Container>
  );
}

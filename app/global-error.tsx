"use client";

import Link from "next/link";
import "@/styles/globals.css";

export default function GlobalError({
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-4 text-center text-foreground">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">Erreur critique</p>
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">Une erreur est survenue</h1>
        <p className="max-w-md text-zinc-600 dark:text-zinc-400">
          Le site a rencontré un problème inattendu. Merci de réessayer dans un instant.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => unstable_retry()}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-dark"
          >
            Réessayer
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-black/10 px-5 py-2.5 text-sm font-medium hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </body>
    </html>
  );
}

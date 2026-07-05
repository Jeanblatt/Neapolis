import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import { SITE_NAME } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "À propos",
  description: "Découvrez Néapolis, boutique informatique de confiance à Tunis.",
  path: "/a-propos",
});

export default function AProposPage() {
  return (
    <Container>
      <PageHeader
        title="À propos"
        description={`${SITE_NAME}, votre partenaire informatique de confiance en Tunisie.`}
      />
      <div className="flex max-w-2xl flex-col gap-6 py-12 text-zinc-600 dark:text-zinc-400">
        <p>
          {SITE_NAME} accompagne particuliers et professionnels dans le choix, l&apos;installation et
          l&apos;entretien de leur matériel informatique. Notre équipe conseille sur les ordinateurs
          portables et de bureau, les composants, les écrans, les imprimantes, les solutions réseau et
          les accessoires, en s&apos;adaptant à chaque besoin et à chaque budget.
        </p>
        <p>
          Au-delà de la vente, nous proposons un service complet de réparation, de maintenance et
          d&apos;installation (Windows, logiciels, réseaux Wi-Fi) pour que votre équipement reste fiable
          au quotidien. Notre objectif est simple : un service réactif, des conseils honnêtes et des prix
          compétitifs.
        </p>
        <p>
          Basés à Tunis, nous privilégions un contact direct et rapide, notamment via WhatsApp, pour
          répondre à vos questions et établir un devis sans complication.
        </p>
      </div>
    </Container>
  );
}

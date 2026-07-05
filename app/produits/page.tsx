import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import ProductsExplorer from "@/components/products/ProductsExplorer";
import { buildMetadata } from "@/lib/seo";
import { getCategories, getProducts } from "@/services/dataService";

export const metadata: Metadata = buildMetadata({
  title: "Produits",
  description: "Ordinateurs, composants, écrans, imprimantes, réseaux et accessoires informatiques en Tunisie.",
  path: "/produits",
});

export default async function ProduitsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const [products, categories, { category }] = await Promise.all([
    getProducts(),
    getCategories(),
    searchParams,
  ]);

  return (
    <Section eyebrow="Catalogue" title="Produits" subtitle="Notre sélection de matériel informatique.">
      <ProductsExplorer products={products} categories={categories} initialCategory={category} />
    </Section>
  );
}

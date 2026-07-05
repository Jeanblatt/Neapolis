import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import ProductCard from "@/components/products/ProductCard";
import { getProducts } from "@/services/dataService";

export default async function FeaturedProductsSection() {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 3);

  return (
    <Section
      eyebrow="Sélection"
      title="Produits en vedette"
      subtitle="Une sélection de notre catalogue, mise à jour régulièrement."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProducts.map((product, index) => (
          <Reveal key={product.id} delay={index * 60} className="h-full">
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href="/produits" variant="secondary">
          Voir tous les produits
        </Button>
      </div>
    </Section>
  );
}

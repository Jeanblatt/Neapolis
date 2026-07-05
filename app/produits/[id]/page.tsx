import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ProductGallery from "@/components/products/ProductGallery";
import JsonLd from "@/components/seo/JsonLd";
import { productJsonLd } from "@/lib/json-ld";
import { STOCK_STATUS_LABELS, STOCK_STATUS_STYLES } from "@/lib/product-display";
import { buildMetadata } from "@/lib/seo";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { getProductById, getProducts } from "@/services/dataService";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    return buildMetadata({ title: "Produit introuvable", path: `/produits/${id}` });
  }

  return buildMetadata({
    title: product.name,
    description: product.description,
    path: `/produits/${product.id}`,
  });
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  const whatsappMessage = `Bonjour, je suis intéressé par le produit : ${product.name}.`;

  return (
    <Container>
      <JsonLd data={productJsonLd(product)} />
      <div className="grid grid-cols-1 gap-12 py-12 lg:grid-cols-2">
        <ProductGallery category={product.category} images={product.images} />

        <div>
          <p className="text-sm font-medium tracking-wide text-primary uppercase">{product.category}</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{product.name}</h1>

          <div className="mt-4 flex items-center gap-3">
            <span
              className={`rounded-full px-3 py-1 text-sm font-medium ${STOCK_STATUS_STYLES[product.stockStatus]}`}
            >
              {STOCK_STATUS_LABELS[product.stockStatus]}
            </span>
            {product.price !== undefined && (
              <span className="text-lg font-semibold">{product.price} TND</span>
            )}
          </div>

          <p className="mt-6 text-zinc-600 dark:text-zinc-400">{product.description}</p>

          <div className="mt-8">
            <Button href={getWhatsAppLink(whatsappMessage)} target="_blank" rel="noopener noreferrer" size="lg">
              Demander ce produit
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

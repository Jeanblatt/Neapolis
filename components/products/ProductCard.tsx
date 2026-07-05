import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ProductImage from "@/components/products/ProductImage";
import { STOCK_STATUS_LABELS, STOCK_STATUS_STYLES } from "@/lib/product-display";
import type { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group flex h-full flex-col p-0 overflow-hidden">
      <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5">
        <ProductImage
          src={product.images[0]}
          alt={product.name}
          category={product.category}
          className="transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs font-medium tracking-wide text-primary uppercase">{product.category}</p>
          <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${STOCK_STATUS_STYLES[product.stockStatus]}`}>
            {STOCK_STATUS_LABELS[product.stockStatus]}
          </span>
        </div>
        <h3 className="font-semibold">{product.name}</h3>
        {product.price !== undefined && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{product.price} TND</p>
        )}
        <div className="mt-auto pt-2">
          <Button href={`/produits/${product.id}`} variant="secondary" size="md" className="w-full">
            Voir détails
          </Button>
        </div>
      </div>
    </Card>
  );
}

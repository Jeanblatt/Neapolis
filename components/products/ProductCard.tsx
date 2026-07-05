import { ICON_MAP } from "@/components/ui/icons";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { CATEGORY_ICONS, STOCK_STATUS_LABELS, STOCK_STATUS_STYLES } from "@/lib/product-display";
import type { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  const Icon = ICON_MAP[CATEGORY_ICONS[product.category] ?? "laptop"];

  return (
    <Card className="flex flex-col p-0 overflow-hidden">
      <div className="flex aspect-4/3 items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5">
        {Icon && <Icon className="h-12 w-12 text-primary/60" />}
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

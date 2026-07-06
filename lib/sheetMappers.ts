import type { Category, CategorySheetRow, Product, ProductSheetRow, StockStatus } from "@/types";

/**
 * Seam d'intégration pour Step 6.2 (Google Sheets) : convertit une ligne brute de
 * feuille de calcul (colonnes texte) en objets `Product`/`Category` déjà typés et
 * validés, avec les mêmes garanties que les données mock actuelles.
 *
 * `services/dataService.ts` restera l'unique point d'entrée consommé par l'UI ;
 * Step 6.2 n'aura qu'à faire passer les lignes récupérées via l'API Sheets par ces
 * fonctions avant de les retourner — aucun composant n'a besoin de changer.
 */

const VALID_STOCK_STATUSES: readonly StockStatus[] = ["in_stock", "out_of_stock", "on_order"];

function parseStockStatus(value: string | undefined): StockStatus {
  return VALID_STOCK_STATUSES.includes(value as StockStatus) ? (value as StockStatus) : "in_stock";
}

function parsePrice(value: string | undefined): number | undefined {
  if (!value) return undefined;
  const parsed = Number.parseFloat(value.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : undefined;
}

function parseImages(value: string | undefined): string[] {
  if (!value) return [];
  return value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
}

export function mapProductRow(row: ProductSheetRow): Product {
  return {
    id: row.id,
    name: row.name,
    description: row.description,
    category: row.category,
    price: parsePrice(row.price),
    promoPrice: parsePrice(row.promoPrice),
    images: parseImages(row.images),
    stockStatus: parseStockStatus(row.stockStatus),
    slug: row.slug,
  };
}

export function mapCategoryRow(row: CategorySheetRow): Category {
  return {
    id: row.id,
    name: row.name,
    description: row.description,
    icon: row.icon,
    slug: row.slug,
  };
}

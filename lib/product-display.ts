import type { StockStatus } from "@/types";

export const CATEGORY_ICONS: Record<string, string> = {
  "PC portables": "laptop",
  "PC bureau": "computer",
  Composants: "cpu",
  Écrans: "monitor",
  Imprimantes: "printer",
  Réseaux: "router",
  Accessoires: "package",
};

export const STOCK_STATUS_LABELS: Record<StockStatus, string> = {
  in_stock: "En stock",
  out_of_stock: "Rupture de stock",
  on_order: "Sur commande",
};

export const STOCK_STATUS_STYLES: Record<StockStatus, string> = {
  in_stock: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",
  out_of_stock: "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400",
  on_order: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",
};

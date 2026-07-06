import type { Category, Product, ServiceItem } from "@/types";
import { mockCategories, mockProducts, mockServices } from "@/services/mockData";

/**
 * Couche de données centralisée : point d'entrée unique pour tous les composants.
 * Ces fonctions retournent aujourd'hui les données mock de `./mockData`. Lors de
 * l'intégration Google Sheets (Step 6.2), seule l'implémentation de ces fonctions
 * changera (lecture via l'API Sheets + `lib/sheetMappers.ts`) — signatures, types
 * de retour et tous les composants qui les consomment resteront inchangés.
 */

export async function getProducts(): Promise<Product[]> {
  return mockProducts;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  return mockProducts.find((product) => product.id === id);
}

export async function getServices(): Promise<ServiceItem[]> {
  return mockServices;
}

export async function getCategories(): Promise<Category[]> {
  return mockCategories;
}

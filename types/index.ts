export type StockStatus = "in_stock" | "out_of_stock" | "on_order";

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price?: number;
  images: string[];
  stockStatus: StockStatus;
  /** Prix barré/promotionnel, si le produit est en promotion. Non consommé par l'UI pour le moment. */
  promoPrice?: number;
  /**
   * Réservé à une future prise en charge multi-catégories (un produit dans plusieurs
   * rayons). `category` reste la catégorie principale affichée aujourd'hui ; ce champ
   * n'est lu par aucun composant tant que cette évolution n'est pas construite.
   */
  categoryIds?: string[];
  /** Identifiant URL-safe réservé à une future page produit basée sur un slug plutôt que sur `id`. */
  slug?: string;
  /** Échappatoire pour des champs futurs (ex. colonnes ajoutées côté Google Sheets) sans casser ce type. */
  metadata?: Record<string, string>;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  /** Identifiant URL-safe réservé à un futur filtrage/liens par slug plutôt que par nom. */
  slug?: string;
}

/**
 * Forme brute attendue d'une ligne de la feuille Google Sheets "Produits" (Step 6.2).
 * Toutes les valeurs sont des chaînes (comme le renvoie l'API Sheets) ; voir
 * `lib/sheetMappers.ts` pour la conversion vers `Product`.
 */
export interface ProductSheetRow {
  id: string;
  name: string;
  description: string;
  category: string;
  price?: string;
  promoPrice?: string;
  /** Plusieurs images séparées par une virgule dans la cellule (ex. "/a.jpg, /b.jpg"). */
  images?: string;
  stockStatus?: string;
  slug?: string;
}

/** Forme brute attendue d'une ligne de la feuille Google Sheets "Catégories" (Step 6.2). */
export interface CategorySheetRow {
  id: string;
  name: string;
  description: string;
  icon: string;
  slug?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface QuoteRequest {
  name: string;
  phone: string;
  need: string;
  message: string;
}

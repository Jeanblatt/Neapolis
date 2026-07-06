"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import type { Category, Product } from "@/types";

type SortOption = "name" | "price";

export default function ProductsExplorer({
  products,
  categories,
  initialCategory,
  initialQuery,
}: {
  products: Product[];
  categories: Category[];
  initialCategory?: string;
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery ?? "");
  const [category, setCategory] = useState(initialCategory ?? "all");
  const [sort, setSort] = useState<SortOption>("name");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products
      .filter((product) => category === "all" || product.category === category)
      .filter(
        (product) =>
          normalizedQuery === "" ||
          product.name.toLowerCase().includes(normalizedQuery) ||
          product.description.toLowerCase().includes(normalizedQuery),
      )
      .sort((a, b) => {
        if (sort === "price") {
          return (a.price ?? 0) - (b.price ?? 0);
        }
        return a.name.localeCompare(b.name);
      });
  }, [products, category, query, sort]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 sm:max-w-sm">
          <Search aria-hidden="true" className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <input
            type="search"
            aria-label="Rechercher un produit"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Rechercher un produit..."
            className="w-full rounded-full border border-black/10 bg-white py-2.5 pr-4 pl-10 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-white/10 dark:bg-zinc-900"
          />
        </div>

        <select
          value={sort}
          aria-label="Trier les produits"
          onChange={(event) => setSort(event.target.value as SortOption)}
          className="rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-white/10 dark:bg-zinc-900"
        >
          <option value="name">Trier par nom</option>
          <option value="price">Trier par prix</option>
        </select>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCategory("all")}
          aria-pressed={category === "all"}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            category === "all"
              ? "bg-primary text-white"
              : "border border-black/10 text-zinc-700 hover:bg-black/5 dark:border-white/15 dark:text-zinc-300 dark:hover:bg-white/10"
          }`}
        >
          Toutes les catégories
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setCategory(c.name)}
            aria-pressed={category === c.name}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              category === c.name
                ? "bg-primary text-white"
                : "border border-black/10 text-zinc-700 hover:bg-black/5 dark:border-white/15 dark:text-zinc-300 dark:hover:bg-white/10"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-zinc-600 dark:text-zinc-400">
          Aucun produit ne correspond à votre recherche.
        </p>
      )}
    </div>
  );
}

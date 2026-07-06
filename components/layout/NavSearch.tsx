"use client";

import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";

/**
 * Barre de recherche navbar : version desktop en pastille extensible (icône ->
 * champ inline), version mobile en lien direct vers /produits — le champ de
 * recherche déjà présent sur cette page (ProductsExplorer) préremplit via ?q=.
 */
export default function NavSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  function submitSearch() {
    const trimmed = query.trim();
    router.push(trimmed ? `/produits?q=${encodeURIComponent(trimmed)}` : "/produits");
    setIsOpen(false);
    setQuery("");
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    submitSearch();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      setIsOpen(false);
      setQuery("");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="hidden items-center md:flex">
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.input
              key="nav-search-input"
              ref={inputRef}
              initial={{ width: 0, opacity: 0, marginRight: 0 }}
              animate={{ width: 208, opacity: 1, marginRight: 4 }}
              exit={{ width: 0, opacity: 0, marginRight: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={() => {
                if (!query) setIsOpen(false);
              }}
              placeholder="Rechercher un produit..."
              aria-label="Rechercher un produit"
              className="rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-white/10 dark:bg-white/5"
            />
          )}
        </AnimatePresence>
        <motion.button
          type="button"
          onClick={() => {
            if (isOpen) {
              submitSearch();
            } else {
              setIsOpen(true);
            }
          }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          aria-label="Rechercher"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-zinc-700 transition-colors duration-200 hover:bg-black/5 hover:text-primary dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-primary-light"
        >
          <Search aria-hidden="true" className="h-[18px] w-[18px]" />
        </motion.button>
      </form>

      <Link
        href="/produits"
        aria-label="Rechercher un produit"
        className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-700 transition-colors duration-200 hover:bg-black/5 hover:text-primary md:hidden dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-primary-light"
      >
        <Search aria-hidden="true" className="h-5 w-5" />
      </Link>
    </>
  );
}

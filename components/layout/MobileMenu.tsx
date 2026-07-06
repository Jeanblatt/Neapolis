"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import Button from "@/components/ui/Button";
import { PRIMARY_NAV_LINKS } from "@/lib/constants";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
};

const barTransition = { type: "spring" as const, stiffness: 400, damping: 25 };

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-foreground"
      >
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -5 }}
          transition={barTransition}
          className="absolute h-0.5 w-5 rounded-full bg-current"
        />
        <motion.span
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.15 }}
          className="absolute h-0.5 w-5 rounded-full bg-current"
        />
        <motion.span
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 5 }}
          transition={barTransition}
          className="absolute h-0.5 w-5 rounded-full bg-current"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-x-0 top-16 bottom-0 z-30 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              id="mobile-menu"
              key="mobile-menu-drawer"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-0 top-16 z-40 border-b border-black/10 bg-background/95 shadow-premium-lg backdrop-blur-xl dark:border-white/10"
            >
              <motion.nav variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-1 px-4 py-4">
                {PRIMARY_NAV_LINKS.map((link) => (
                  <motion.div key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-700 hover:bg-black/5 dark:text-zinc-300 dark:hover:bg-white/10"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="border-t border-black/10 px-4 py-3 dark:border-white/10"
              >
                <Button href="/devis" className="w-full" onClick={() => setIsOpen(false)}>
                  Demander un devis
                </Button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

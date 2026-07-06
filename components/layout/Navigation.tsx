"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { PRIMARY_NAV_LINKS } from "@/lib/constants";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-1 text-sm md:flex">
      {PRIMARY_NAV_LINKS.map((link) => {
        const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={`group relative rounded-full px-3.5 py-2 transition-colors duration-200 ${
              isActive
                ? "font-medium text-primary dark:text-primary-light"
                : "text-zinc-700 hover:text-primary dark:text-zinc-300 dark:hover:text-primary-light"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="nav-active-pill"
                className="absolute inset-0 rounded-full bg-primary/10 dark:bg-primary-light/10"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
            <span className="relative">{link.label}</span>
            {!isActive && (
              <span className="absolute inset-x-3.5 -bottom-0.5 h-px origin-center scale-x-0 bg-primary/70 transition-transform duration-300 ease-out group-hover:scale-x-100 dark:bg-primary-light/70" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PRIMARY_NAV_LINKS } from "@/lib/constants";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-6 text-sm md:flex">
      {PRIMARY_NAV_LINKS.map((link) => {
        const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={`relative py-1 transition-colors after:absolute after:right-0 after:-bottom-1 after:left-0 after:h-0.5 after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-primary hover:after:scale-x-100 dark:hover:text-primary-light ${
              isActive ? "font-medium text-primary after:scale-x-100 dark:text-primary-light" : "text-zinc-700 dark:text-zinc-300"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

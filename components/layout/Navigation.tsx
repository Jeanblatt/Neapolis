import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export default function Navigation() {
  return (
    <nav className="hidden items-center gap-6 text-sm md:flex">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-zinc-700 transition-colors hover:text-primary dark:text-zinc-300 dark:hover:text-primary-light"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

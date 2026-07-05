import Link from "next/link";
import Card from "@/components/ui/Card";
import { ICON_MAP } from "@/components/ui/icons";
import type { Category } from "@/types";

export default function CategoryCard({ category }: { category: Category }) {
  const Icon = ICON_MAP[category.icon];

  return (
    <Link href={`/produits?category=${encodeURIComponent(category.name)}`}>
      <Card className="h-full transition-colors hover:border-primary/40">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
          {Icon && <Icon className="h-5 w-5" />}
        </div>
        <h3 className="mt-4 font-semibold">{category.name}</h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{category.description}</p>
      </Card>
    </Link>
  );
}

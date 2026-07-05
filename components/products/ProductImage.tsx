import Image from "next/image";
import { ICON_MAP } from "@/components/ui/icons";
import { CATEGORY_ICONS } from "@/lib/product-display";

/**
 * Affiche une vraie photo (via next/image) si `src` pointe vers un fichier
 * réel (ex. "/products/laptop-1.jpg" dans /public), sinon retombe sur
 * l'icône de la catégorie. Pour ajouter de vraies photos produits : déposer
 * les fichiers dans /public/products puis mettre à jour `images` dans
 * services/dataService.ts — aucun changement de composant nécessaire.
 */
export default function ProductImage({
  src,
  alt,
  category,
  className = "",
  iconClassName = "h-12 w-12 text-primary/60",
}: {
  src?: string;
  alt: string;
  category: string;
  className?: string;
  iconClassName?: string;
}) {
  if (src?.startsWith("/")) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className={`object-cover ${className}`}
      />
    );
  }

  const Icon = ICON_MAP[CATEGORY_ICONS[category] ?? "laptop"];
  return Icon ? <Icon aria-hidden="true" className={`${iconClassName} ${className}`} /> : null;
}

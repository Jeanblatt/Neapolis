"use client";

import { useState } from "react";
import { ICON_MAP } from "@/components/ui/icons";
import { CATEGORY_ICONS } from "@/lib/product-display";

export default function ProductGallery({ category, images }: { category: string; images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const Icon = ICON_MAP[CATEGORY_ICONS[category] ?? "laptop"];

  return (
    <div>
      <div
        key={activeIndex}
        className="flex aspect-4/3 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5"
      >
        {Icon && <Icon className="h-20 w-20 text-primary/60" />}
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex gap-3">
          {images.map((image, index) => (
            <button
              key={image + index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Image ${index + 1}`}
              className={`flex h-16 w-16 items-center justify-center rounded-xl border transition-colors ${
                activeIndex === index
                  ? "border-primary bg-primary/10"
                  : "border-black/10 bg-white hover:border-primary/40 dark:border-white/10 dark:bg-zinc-900"
              }`}
            >
              {Icon && <Icon className="h-6 w-6 text-primary/60" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

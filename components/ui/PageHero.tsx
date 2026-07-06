import type { ReactNode } from "react";
import Container from "@/components/ui/Container";

export default function PageHero({
  eyebrow,
  title,
  description,
  align = "left",
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  const isCentered = align === "center";

  return (
    <div className="relative overflow-hidden border-b border-black/10 bg-background/60 bg-mesh backdrop-blur-sm dark:border-white/10">
      <Container>
        <div className={`py-16 sm:py-20 ${isCentered ? "text-center" : ""}`}>
          <div className={isCentered ? "mx-auto max-w-2xl" : "max-w-2xl"}>
            {eyebrow && (
              <p className="text-sm font-semibold tracking-widest text-primary uppercase">{eyebrow}</p>
            )}
            <h1
              className={`text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl ${eyebrow ? "mt-2" : ""}`}
            >
              {title}
            </h1>
            {description && (
              <p className="mt-4 text-lg text-zinc-600 text-pretty dark:text-zinc-400">{description}</p>
            )}
          </div>
          {children && (
            <div className={`mt-8 flex flex-wrap gap-4 ${isCentered ? "justify-center" : ""}`}>{children}</div>
          )}
        </div>
      </Container>
    </div>
  );
}

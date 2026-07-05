import type { ReactNode } from "react";
import Container from "@/components/ui/Container";

export default function Section({
  children,
  className = "",
  background = "default",
  eyebrow,
  title,
  subtitle,
}: {
  children: ReactNode;
  className?: string;
  background?: "default" | "muted";
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  const backgroundClasses = background === "muted" ? "bg-zinc-50 dark:bg-zinc-900/40" : "";

  return (
    <section className={`py-16 sm:py-20 ${backgroundClasses} ${className}`}>
      <Container>
        {(eyebrow || title || subtitle) && (
          <div className="mx-auto mb-12 max-w-2xl text-center">
            {eyebrow && (
              <p className="text-sm font-semibold tracking-widest text-primary uppercase">{eyebrow}</p>
            )}
            {title && (
              <h2 className="mt-2 text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-zinc-600 text-pretty dark:text-zinc-400">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}

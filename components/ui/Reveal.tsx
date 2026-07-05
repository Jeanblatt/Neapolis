"use client";

import type { CSSProperties, ReactNode } from "react";
import { useInView } from "@/lib/useInView";

/**
 * Fade + slide-up on scroll entry. Base opacity/transform only apply once JS
 * has decided the element is (or isn't yet) in view; a `<noscript>` rule in
 * the root layout forces full visibility when JavaScript is unavailable.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div
      ref={ref}
      style={style}
      className={`reveal motion-safe:transition motion-safe:duration-700 motion-safe:ease-out ${
        inView ? "opacity-100 motion-safe:translate-y-0" : "opacity-0 motion-safe:translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}

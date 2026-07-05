import type { ReactNode } from "react";

export default function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-black/10 bg-white p-6 shadow-premium transition duration-300 hover:-translate-y-1 hover:shadow-premium-lg dark:border-white/10 dark:bg-zinc-900 ${className}`}
    >
      {children}
    </div>
  );
}

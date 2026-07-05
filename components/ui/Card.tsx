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
      className={`rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-white/10 dark:bg-zinc-900 ${className}`}
    >
      {children}
    </div>
  );
}

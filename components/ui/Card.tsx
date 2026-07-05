"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`rounded-2xl border border-black/10 bg-white p-6 shadow-premium transition-shadow duration-300 hover:shadow-glow dark:border-white/10 dark:bg-zinc-900 ${className}`}
      style={{ transformPerspective: 800 }}
      whileHover={{ y: -6, rotateX: 2, rotateY: -2, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

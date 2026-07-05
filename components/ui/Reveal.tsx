"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const MOBILE_QUERY = "(max-width: 767px)";

/**
 * Fade + slide-up + léger scale à l'entrée dans le viewport (Framer Motion).
 * `delay` est en millisecondes pour rester cohérent avec les appels existants.
 *
 * Désactivé sur mobile (contenu affiché directement, sans animation) : sur
 * certains navigateurs mobiles, `whileInView` ne se déclenche jamais pour du
 * contenu proche du haut de page, laissant les cartes bloquées à `opacity: 0`
 * — un espace vide invisible mais réservé dans la grille — au lieu de révéler
 * leur contenu. Les animations avancées restent actives sur desktop.
 *
 * Un `<noscript>` dans le layout racine (classe `.reveal`) force aussi la
 * visibilité sans JavaScript, et une règle CSS équivalente sous 768px sert de
 * filet de sécurité pendant la fenêtre entre le rendu initial et cet effet.
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
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(MOBILE_QUERY);
    // Détection unique de la taille d'écran (média externe) — pas un dérivé de state React.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobile(query.matches);

    const handleChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  if (prefersReducedMotion || isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={`reveal ${className}`}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

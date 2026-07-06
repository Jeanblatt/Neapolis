"use client";

import { useMotionValue, useSpring } from "framer-motion";
import { useCallback, useRef } from "react";
import type { MouseEvent } from "react";

/**
 * Parallax léger piloté par la souris via des MotionValues (pas de useState),
 * pour éviter tout re-render React sur mousemove — le mouvement est lissé
 * par un spring et calculé dans un requestAnimationFrame.
 */
export function useMouseParallax(strength = 20) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.6 });
  const frame = useRef<number | null>(null);

  const onMouseMove = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (strength === 0) return;
      const target = event.currentTarget;
      const clientX = event.clientX;
      const clientY = event.clientY;

      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const rect = target.getBoundingClientRect();
        const px = (clientX - rect.left) / rect.width - 0.5;
        const py = (clientY - rect.top) / rect.height - 0.5;
        rawX.set(-px * strength);
        rawY.set(-py * strength);
      });
    },
    [rawX, rawY, strength],
  );

  const onMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return { x, y, onMouseMove, onMouseLeave };
}

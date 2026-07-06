"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface UseHeroSliderOptions {
  slideCount: number;
  intervalMs?: number;
  autoPlay?: boolean;
}

/**
 * Logique d'un slider auto-play : l'intervalle repart à zéro à chaque
 * changement d'image, qu'il soit déclenché automatiquement ou par une
 * navigation manuelle (prev/next/dot), pour éviter un changement trop
 * rapproché juste après une action utilisateur.
 */
export function useHeroSlider({ slideCount, intervalMs = 7000, autoPlay = true }: UseHeroSliderOptions) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!autoPlay) return clearTimer;

    clearTimer();
    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % slideCount);
    }, intervalMs);

    return clearTimer;
  }, [autoPlay, clearTimer, index, intervalMs, slideCount]);

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % slideCount) + slideCount) % slideCount);
    },
    [slideCount],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  return { index, goTo, next, prev };
}

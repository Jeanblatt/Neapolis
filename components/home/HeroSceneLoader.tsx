"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import HeroStaticVisual from "@/components/home/HeroStaticVisual";
import HeroSceneErrorBoundary from "@/components/home/HeroSceneErrorBoundary";

const HeroScene = dynamic(() => import("@/components/home/HeroScene"), {
  ssr: false,
  loading: () => <HeroStaticVisual />,
});

function canRender3D(): boolean {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;

  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

/**
 * Rehaussement progressif : le Hero reste entièrement fonctionnel et
 * accessible sans JavaScript/WebGL (HeroStaticVisual) ; la scène 3D
 * (HeroScene, React Three Fiber) ne se monte qu'une fois la capacité du
 * navigateur confirmée (desktop et mobile), dans un chunk JS séparé chargé
 * uniquement ici. Une erreur runtime de la scène (HeroSceneErrorBoundary)
 * replie proprement sur le visuel statique plutôt que de se propager.
 */
export default function HeroSceneLoader() {
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    // Détection unique de capacité navigateur (WebGL, préférence de mouvement).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShow3D(canRender3D());
  }, []);

  return (
    <div className="relative mx-auto h-[420px] w-full max-w-lg sm:h-[480px]">
      {show3D ? (
        <HeroSceneErrorBoundary fallback={<HeroStaticVisual />}>
          <HeroScene />
        </HeroSceneErrorBoundary>
      ) : (
        <HeroStaticVisual />
      )}
    </div>
  );
}

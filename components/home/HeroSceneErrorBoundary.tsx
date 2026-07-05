"use client";

import { Component, type ReactNode } from "react";

/**
 * La scène 3D (WebGL/Three.js) peut échouer au runtime sur certains GPU
 * mobiles (mémoire limitée, extensions manquantes). Sans ce filet, une
 * erreur non interceptée pendant le rendu peut déstabiliser tout l'arbre
 * React côté client. En cas d'échec, on replie simplement sur le visuel
 * statique (HeroStaticVisual) au lieu de laisser l'erreur se propager.
 */
export default class HeroSceneErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("Scène 3D du Hero indisponible, repli sur le visuel statique :", error);
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

import Image from "next/image";

/**
 * Toile de fond atmosphérique câblée une seule fois dans le layout racine :
 * `fixed` (pas de scroll, effet de profondeur type parallax) et visible sur
 * toute la hauteur de chaque page, à travers toutes les sections. Le voile
 * est volontairement sombre en dur (pas `bg-background`, qui bascule en
 * blanc en light mode) : le rendu doit rester identique — sombre et
 * atmosphérique — quel que soit le thème clair/sombre du système.
 */
export default function AmbientBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
      <Image
        src="/background.png"
        alt=""
        fill
        loading="eager"
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-slate-950/45" />
      <div className="absolute inset-0 bg-noise opacity-10" />
    </div>
  );
}

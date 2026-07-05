import { Cpu, HardDrive, Laptop, Monitor } from "lucide-react";

/**
 * Repli statique (pas de WebGL) pour la colonne visuelle du Hero — utilisé
 * quand la scène 3D (HeroScene) n'est pas disponible ou que l'utilisateur
 * préfère un mouvement réduit. Voir HeroSceneLoader.
 */
export default function HeroStaticVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="relative grid w-full max-w-sm grid-cols-2 gap-4 rounded-3xl border border-white/15 bg-white/10 p-8 shadow-premium-lg backdrop-blur-xl transition duration-500 hover:-translate-y-1">
        <div className="col-span-2 flex h-28 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
          <Laptop aria-hidden="true" className="h-10 w-10 text-primary-light" />
        </div>
        <div className="flex h-20 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
          <Monitor aria-hidden="true" className="h-7 w-7 text-white/60" />
        </div>
        <div className="flex h-20 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
          <Cpu aria-hidden="true" className="h-7 w-7 text-white/60" />
        </div>
        <div className="col-span-2 flex h-20 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
          <HardDrive aria-hidden="true" className="h-7 w-7 text-white/60" />
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, useTransform, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useHeroSlider } from "@/hooks/useHeroSlider";
import { useMouseParallax } from "@/hooks/useMouseParallax";

const SLIDES = [
  { src: "/hero1.png.webp" },
  { src: "/hero2.png.webp" },
  { src: "/hero3.png.webp" },
];

const AUTOPLAY_MS = 7000;
const ZOOM_TRANSITION_S = (AUTOPLAY_MS + 1000) / 1000;

const textContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -14, scale: 0.98, transition: { duration: 0.35, ease: "easeIn" } },
};

export default function HeroSection() {
  const reduceMotion = useReducedMotion() ?? false;
  const { index, next, prev, goTo } = useHeroSlider({
    slideCount: SLIDES.length,
    intervalMs: AUTOPLAY_MS,
    autoPlay: !reduceMotion,
  });
  const { x, y, onMouseMove, onMouseLeave } = useMouseParallax(reduceMotion ? 0 : 22);
  // Le contenu texte dérive légèrement dans le sens inverse du fond : sépare les
  // plans (profondeur) au lieu de tout déplacer en bloc avec l'image.
  const contentX = useTransform(x, (v) => v * -0.35);
  const contentY = useTransform(y, (v) => v * -0.35);

  return (
    <section
      className="relative isolate h-[560px] w-full overflow-hidden border-b border-white/10 bg-mesh-dark sm:h-[640px] lg:h-[760px]"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="absolute inset-0">
        {SLIDES.map((slide, i) => {
          const isActive = i === index;
          return (
            <motion.div
              key={slide.src}
              className="absolute inset-0"
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              aria-hidden={!isActive}
            >
              <motion.div
                className="absolute inset-0"
                style={{ x, y }}
                animate={{ scale: isActive && !reduceMotion ? 1.15 : 1.05 }}
                transition={{
                  duration: isActive ? ZOOM_TRANSITION_S : 1.1,
                  ease: isActive ? "linear" : "easeInOut",
                }}
              >
                <Image src={slide.src} alt="" fill sizes="100vw" preload={i === 0} className="object-cover" />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Empilement de calques pour un rendu "profondeur" (vignette directionnelle +
          dégradé de lisibilité + sheen supérieur + grain), plutôt qu'un simple assombrissement plat. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_18%_65%,rgba(0,0,0,0.55),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-20" />

      <motion.div className="relative z-10 flex h-full items-center" style={{ x: contentX, y: contentY }}>
        <Container>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="flex max-w-xl flex-col items-start gap-6"
              variants={textContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.span
                variants={textItemVariants}
                className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-white/90 uppercase ring-1 ring-white/15 backdrop-blur-sm"
              >
                Boutique informatique en Tunisie
              </motion.span>
              <motion.h1
                variants={textItemVariants}
                className="text-5xl leading-[1.05] font-semibold tracking-tight text-balance text-white sm:text-6xl"
              >
                Néapolis Tech Store
              </motion.h1>
              <motion.p variants={textItemVariants} className="max-w-lg text-lg text-white/80 text-pretty">
                Votre monde digital commence ici.
              </motion.p>
              <motion.div variants={textItemVariants} className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={reduceMotion ? undefined : { scale: 1.045 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button href="/produits" size="lg" className="hover:shadow-glow">
                    Découvrir la boutique
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={reduceMotion ? undefined : { scale: 1.045 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    href="/produits"
                    variant="secondary"
                    tone="inverse"
                    size="lg"
                    className="border-white/20 bg-white/10 backdrop-blur-xl transition-shadow duration-300 hover:border-primary-light/60 hover:bg-white/15 hover:shadow-glow"
                  >
                    Voir les produits
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </Container>
      </motion.div>

      <motion.button
        type="button"
        onClick={prev}
        aria-label="Image précédente"
        whileHover={reduceMotion ? undefined : { scale: 1.12 }}
        whileTap={reduceMotion ? undefined : { scale: 0.92 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="absolute top-1/2 left-3 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 p-2.5 text-white/90 backdrop-blur-xl transition-colors duration-200 hover:border-white/30 hover:bg-white/20 hover:text-white hover:shadow-glow focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none sm:left-5 sm:p-3"
      >
        <ChevronLeft aria-hidden="true" className="h-5 w-5" />
      </motion.button>
      <motion.button
        type="button"
        onClick={next}
        aria-label="Image suivante"
        whileHover={reduceMotion ? undefined : { scale: 1.12 }}
        whileTap={reduceMotion ? undefined : { scale: 0.92 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="absolute top-1/2 right-3 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 p-2.5 text-white/90 backdrop-blur-xl transition-colors duration-200 hover:border-white/30 hover:bg-white/20 hover:text-white hover:shadow-glow focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none sm:right-5 sm:p-3"
      >
        <ChevronRight aria-hidden="true" className="h-5 w-5" />
      </motion.button>

      <div className="absolute inset-x-0 bottom-6 z-20 flex justify-center gap-2.5">
        {SLIDES.map((slide, i) => {
          const isActive = i === index;
          return (
            <button
              key={slide.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Aller à l'image ${i + 1}`}
              aria-current={isActive}
              className="group relative flex h-6 w-6 items-center justify-center"
            >
              <span
                className={`h-1.5 w-1.5 rounded-full bg-white/40 transition-colors duration-300 group-hover:bg-white/70 ${isActive ? "opacity-0" : "opacity-100"}`}
              />
              {isActive && (
                <motion.span
                  layoutId="hero-dot-active"
                  transition={{ type: "spring", stiffness: 500, damping: 32 }}
                  className="absolute h-1.5 w-6 rounded-full bg-white shadow-[0_0_12px_rgba(96,165,250,0.85)]"
                />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}

import * as THREE from "three";

/**
 * Génère une texture de circuit imprimé (traces + pastilles) à la volée sur un
 * canvas — aucun asset externe requis. Utilisée comme emissiveMap sur le chip
 * de la scène 3D du Hero (components/home/HeroScene.tsx).
 */
export function createCircuitTexture(): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.fillStyle = "#050914";
    ctx.fillRect(0, 0, size, size);

    ctx.strokeStyle = "#7db8ff";
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.shadowColor = "#60a5fa";
    ctx.shadowBlur = 6;

    const traces: [number, number][][] = [
      [
        [24, 24],
        [24, 96],
        [96, 96],
      ],
      [
        [160, 24],
        [160, 64],
        [232, 64],
      ],
      [
        [24, 160],
        [96, 160],
        [96, 232],
      ],
      [
        [160, 232],
        [160, 176],
        [232, 176],
        [232, 128],
      ],
      [
        [128, 24],
        [128, 72],
      ],
      [
        [24, 128],
        [64, 128],
      ],
      [
        [192, 24],
        [192, 96],
        [232, 96],
      ],
    ];

    for (const points of traces) {
      ctx.beginPath();
      points.forEach(([x, y], i) => (i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)));
      ctx.stroke();
    }

    ctx.fillStyle = "#a9d2ff";
    ctx.shadowBlur = 8;
    const pads: [number, number][] = [
      [24, 24],
      [96, 96],
      [160, 24],
      [232, 64],
      [24, 160],
      [96, 232],
      [160, 232],
      [232, 128],
      [128, 24],
      [128, 72],
      [64, 128],
      [192, 24],
      [232, 96],
    ];
    for (const [x, y] of pads) {
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * Génère une texture de carte graphique (ailettes de dissipateur + bandeau RGB
 * lumineux bleu → violet → cyan) sur un canvas — utilisée comme emissiveMap sur
 * le GPU de la scène 3D du Hero.
 */
export function createGpuTexture(): THREE.CanvasTexture {
  const width = 512;
  const height = 160;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.fillStyle = "#050914";
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = "rgba(148, 163, 184, 0.35)";
    ctx.lineWidth = 3;
    for (let x = 24; x < width - 24; x += 14) {
      ctx.beginPath();
      ctx.moveTo(x, 20);
      ctx.lineTo(x, height - 20);
      ctx.stroke();
    }

    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, "#60a5fa");
    gradient.addColorStop(0.5, "#a78bfa");
    gradient.addColorStop(1, "#22d3ee");
    ctx.fillStyle = gradient;
    ctx.shadowColor = "#a78bfa";
    ctx.shadowBlur = 20;
    ctx.fillRect(0, height / 2 - 6, width, 12);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

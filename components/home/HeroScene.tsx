"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Lightformer, RoundedBox, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { createCircuitTexture, createGpuTexture } from "@/lib/hardware-textures";

function Cpu() {
  const texture = useMemo(() => createCircuitTexture(), []);

  const pins = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let i = -2; i <= 2; i++) {
      if (i === 0) continue;
      positions.push([0.78, i * 0.24, 0]);
      positions.push([-0.78, i * 0.24, 0]);
    }
    return positions;
  }, []);

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
      <group position={[-0.7, 0.15, 0.1]} rotation={[0.2, 0.45, 0]}>
        <RoundedBox args={[1.4, 1.4, 0.14]} radius={0.05} smoothness={4}>
          <meshPhysicalMaterial
            color="#0b1220"
            roughness={0.3}
            metalness={0.5}
            emissiveMap={texture}
            emissive="#60a5fa"
            emissiveIntensity={1.6}
            clearcoat={0.6}
            clearcoatRoughness={0.2}
          />
        </RoundedBox>
        {pins.map((position, i) => (
          <mesh key={i} position={position}>
            <boxGeometry args={[0.14, 0.03, 0.03]} />
            <meshStandardMaterial color="#b9cbe6" metalness={0.8} roughness={0.3} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function Gpu() {
  const texture = useMemo(() => createGpuTexture(), []);

  return (
    <Float speed={1} rotationIntensity={0.25} floatIntensity={0.7}>
      <group position={[0.75, -0.55, 0.25]} rotation={[0.1, -0.35, 0.12]}>
        <RoundedBox args={[1.8, 0.58, 0.16]} radius={0.05} smoothness={4}>
          <meshPhysicalMaterial
            color="#0f172a"
            roughness={0.3}
            metalness={0.65}
            emissiveMap={texture}
            emissive="#a78bfa"
            emissiveIntensity={1.3}
            clearcoat={0.4}
          />
        </RoundedBox>
        {/* ventilateurs */}
        <mesh position={[-0.5, 0, 0.09]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.18, 0.02, 12, 32]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.7} roughness={0.4} />
        </mesh>
        <mesh position={[0.5, 0, 0.09]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.18, 0.02, 12, 32]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.7} roughness={0.4} />
        </mesh>
      </group>
    </Float>
  );
}

function RamStick({ position, delay }: { position: [number, number, number]; delay: number }) {
  const ledColors = ["#60a5fa", "#a78bfa", "#22d3ee", "#a78bfa", "#60a5fa"];

  return (
    <Float speed={1.5 + delay} rotationIntensity={0.4} floatIntensity={0.9}>
      <group position={position} rotation={[0.1, 0.2, 0.05]}>
        <mesh>
          <boxGeometry args={[0.16, 0.85, 0.055]} />
          <meshStandardMaterial color="#111827" metalness={0.55} roughness={0.35} />
        </mesh>
        {ledColors.map((color, i) => (
          <mesh key={i} position={[0, 0.34 - i * 0.16, 0.03]}>
            <boxGeometry args={[0.1, 0.05, 0.01]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2.2} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function Ssd() {
  return (
    <Float speed={1.3} rotationIntensity={0.3} floatIntensity={0.8}>
      <group position={[-1.15, -0.65, 0.35]} rotation={[0.15, 0.3, -0.1]}>
        <RoundedBox args={[0.7, 0.44, 0.05]} radius={0.03} smoothness={4}>
          <meshPhysicalMaterial color="#cbd5e1" metalness={0.8} roughness={0.25} clearcoat={0.5} />
        </RoundedBox>
        <mesh position={[0, -0.1, 0.03]}>
          <boxGeometry args={[0.4, 0.08, 0.01]} />
          <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={2} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
}

function OrbitalRing() {
  return (
    <group rotation={[Math.PI / 2.4, Math.PI / 10, 0]}>
      <mesh>
        <torusGeometry args={[1.9, 0.01, 16, 128]} />
        <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={1.8} toneMapped={false} />
      </mesh>
    </group>
  );
}

function Scene() {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    const node = group.current;
    if (!node) return;
    node.rotation.y = THREE.MathUtils.damp(node.rotation.y, pointer.x * 0.3, 4, delta);
    node.rotation.x = THREE.MathUtils.damp(node.rotation.x, -pointer.y * 0.15, 4, delta);
  });

  return (
    <group ref={group}>
      <Cpu />
      <Gpu />
      <RamStick position={[1.25, 0.55, -0.3]} delay={0} />
      <RamStick position={[1.5, 0.32, -0.15]} delay={0.3} />
      <Ssd />
      <OrbitalRing />
      <Sparkles count={45} scale={3.8} size={2} speed={0.3} color="#a78bfa" />
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 6], fov: 42 }}
      className="!touch-none"
    >
      <fogExp2 attach="fog" args={["#0b0620", 0.1]} />
      <ambientLight intensity={0.45} />
      <pointLight position={[3, 3, 4]} intensity={35} color="#3b82f6" />
      <pointLight position={[-3, 2, 2]} intensity={25} color="#8b5cf6" />
      <pointLight position={[0, 4, 3]} intensity={12} color="#f8fafc" />
      {/* Environnement procédural (aucune texture externe téléchargée) pour des reflets réalistes sur le métal/verre. */}
      <Environment resolution={64}>
        <Lightformer intensity={2} color="#3b82f6" position={[3, 2, 2]} scale={[4, 4, 1]} />
        <Lightformer intensity={1.4} color="#8b5cf6" position={[-3, -1, 1]} scale={[3, 3, 1]} />
        <Lightformer intensity={0.9} color="#ffffff" position={[0, 4, -2]} scale={[6, 2, 1]} />
      </Environment>
      <Scene />
    </Canvas>
  );
}

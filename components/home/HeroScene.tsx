"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Lightformer, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function GlassSphere({
  position,
  radius,
  color,
  floatSpeed,
}: {
  position: [number, number, number];
  radius: number;
  color: string;
  floatSpeed: number;
}) {
  return (
    <Float speed={floatSpeed} rotationIntensity={0.35} floatIntensity={0.7}>
      <mesh position={position}>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.08}
          metalness={0}
          transmission={1}
          thickness={0.6}
          ior={1.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={1.4}
        />
      </mesh>
    </Float>
  );
}

function OrbitalRing({
  radius,
  rotation,
  color,
}: {
  radius: number;
  rotation: [number, number, number];
  color: string;
}) {
  return (
    <group rotation={rotation}>
      <mesh>
        <torusGeometry args={[radius, 0.012, 16, 128]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} toneMapped={false} />
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
      <GlassSphere position={[-0.9, 0.3, 0]} radius={0.95} color="#8fb8ff" floatSpeed={1.3} />
      <GlassSphere position={[1, -0.4, -0.5]} radius={0.55} color="#67e8f9" floatSpeed={1.7} />
      <OrbitalRing radius={1.3} rotation={[Math.PI / 2.6, 0, 0]} color="#2563eb" />
      <OrbitalRing radius={1.65} rotation={[Math.PI / 2.1, Math.PI / 8, 0]} color="#22d3ee" />
      <Sparkles count={45} scale={3.6} size={2} speed={0.3} color="#8fb8ff" />
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
      <fogExp2 attach="fog" args={["#050914", 0.1]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 4]} intensity={30} color="#60a5fa" />
      <pointLight position={[-3, -2, 2]} intensity={15} color="#22d3ee" />
      {/* Environnement procédural (aucune texture externe téléchargée) pour des reflets réalistes sur le verre. */}
      <Environment resolution={64}>
        <Lightformer intensity={2} color="#60a5fa" position={[3, 2, 2]} scale={[4, 4, 1]} />
        <Lightformer intensity={1.2} color="#22d3ee" position={[-3, -1, 1]} scale={[3, 3, 1]} />
        <Lightformer intensity={0.8} color="#ffffff" position={[0, 4, -2]} scale={[6, 2, 1]} />
      </Environment>
      <Scene />
    </Canvas>
  );
}

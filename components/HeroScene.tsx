"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function DNAHelix() {
  const groupRef = useRef<THREE.Group>(null);

  const { pts1, pts2, connections, sph1, sph2 } = useMemo(() => {
    const p1: THREE.Vector3[] = [];
    const p2: THREE.Vector3[] = [];
    const conns: [THREE.Vector3, THREE.Vector3][] = [];
    const s1: THREE.Vector3[] = [];
    const s2: THREE.Vector3[] = [];

    const N = 100;
    const radius = 1.3;
    const height = 8;
    const turns = 3.5;

    for (let i = 0; i <= N; i++) {
      const t = (i / N) * Math.PI * 2 * turns;
      const y = (i / N) * height - height / 2;

      const x1 = radius * Math.cos(t);
      const z1 = radius * Math.sin(t);
      const x2 = radius * Math.cos(t + Math.PI);
      const z2 = radius * Math.sin(t + Math.PI);

      p1.push(new THREE.Vector3(x1, y, z1));
      p2.push(new THREE.Vector3(x2, y, z2));

      if (i % 7 === 0) {
        const v1 = new THREE.Vector3(x1, y, z1);
        const v2 = new THREE.Vector3(x2, y, z2);
        conns.push([v1, v2]);
        s1.push(v1);
        s2.push(v2);
      }
    }

    return { pts1: p1, pts2: p2, connections: conns, sph1: s1, sph2: s2 };
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.22;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.06} floatIntensity={0.4}>
      <group ref={groupRef}>
        {/* Blue strand */}
        <Line points={pts1} color="#1e3a8a" lineWidth={2.8} />
        {/* Violet strand */}
        <Line points={pts2} color="#a78bfa" lineWidth={2.8} />

        {/* Base pair rungs */}
        {connections.map(([a, b], i) => (
          <Line key={`rung-${i}`} points={[a, b]} color="#cbd5e1" lineWidth={1} />
        ))}

        {/* Nucleotide spheres — blue strand */}
        {sph1.map((pos, i) => (
          <mesh key={`s1-${i}`} position={pos}>
            <sphereGeometry args={[0.11, 14, 14]} />
            <meshStandardMaterial
              color="#1e3a8a"
              roughness={0.25}
              metalness={0.3}
              emissive="#1e3a8a"
              emissiveIntensity={0.15}
            />
          </mesh>
        ))}

        {/* Nucleotide spheres — violet strand */}
        {sph2.map((pos, i) => (
          <mesh key={`s2-${i}`} position={pos}>
            <sphereGeometry args={[0.11, 14, 14]} />
            <meshStandardMaterial
              color="#a78bfa"
              roughness={0.25}
              metalness={0.3}
              emissive="#a78bfa"
              emissiveIntensity={0.15}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 50 }, () => ({
        pos: [
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 6 - 3,
        ] as [number, number, number],
        size: Math.random() * 0.06 + 0.02,
        opacity: Math.random() * 0.3 + 0.05,
      })),
    []
  );

  return (
    <>
      {particles.map((p, i) => (
        <mesh key={i} position={p.pos}>
          <sphereGeometry args={[p.size, 8, 8]} />
          <meshStandardMaterial
            color="#94a3b8"
            transparent
            opacity={p.opacity}
          />
        </mesh>
      ))}
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 11], fov: 42 }}
      style={{ width: "100%", height: "100%" }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.9} />
      <pointLight position={[6, 6, 6]} intensity={2} color="#dbeafe" />
      <pointLight position={[-6, -4, 4]} intensity={1.2} color="#ede9fe" />
      <directionalLight position={[0, 8, 4]} intensity={0.5} />
      <DNAHelix />
      <Particles />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </Canvas>
  );
}

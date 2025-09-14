import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function FloatingGeometry({ position, geometry, color, speed = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.01 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {geometry}
        <meshMatcapMaterial color={color} />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const pointsRef = useRef();
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={1000}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#4a9eff" transparent opacity={0.6} />
    </points>
  );
}

function CodeSymbols() {
  const symbols = ['</', '{}', '()', '[]', '/>', '&&', '==', '=>'];
  
  return (
    <>
      {symbols.map((symbol, index) => (
        <Float key={index} speed={1 + index * 0.2} rotationIntensity={0.5}>
          <mesh
            position={[
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 15,
              (Math.random() - 0.5) * 10
            ]}
          >
            <boxGeometry args={[0.8, 0.8, 0.1]} />
            <meshMatcapMaterial color="#00d4ff" transparent opacity={0.3} />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export default function Scene3D() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#4a9eff" intensity={0.5} />

      {/* Particle Field */}
      <ParticleField />

      {/* Floating Geometries */}
      <FloatingGeometry
        position={[-8, 2, -5]}
        geometry={<boxGeometry args={[1, 1, 1]} />}
        color="#4a9eff"
        speed={0.8}
      />
      <FloatingGeometry
        position={[8, -2, -3]}
        geometry={<sphereGeometry args={[0.8, 32, 32]} />}
        color="#00d4ff"
        speed={1.2}
      />
      <FloatingGeometry
        position={[0, 4, -8]}
        geometry={<octahedronGeometry args={[1]} />}
        color="#ff6b6b"
        speed={0.6}
      />
      <FloatingGeometry
        position={[-6, -4, -6]}
        geometry={<torusGeometry args={[1, 0.3, 16, 100]} />}
        color="#4ecdc4"
        speed={1.0}
      />
      <FloatingGeometry
        position={[6, 3, -4]}
        geometry={<coneGeometry args={[0.8, 1.5, 8]} />}
        color="#ffe66d"
        speed={0.9}
      />

      {/* Code Symbols */}
      <CodeSymbols />

      {/* Wireframe Background */}
      <mesh position={[0, 0, -15]} rotation={[0, 0, 0]}>
        <sphereGeometry args={[20, 32, 32]} />
        <meshBasicMaterial color="#4a9eff" wireframe transparent opacity={0.1} />
      </mesh>
    </>
  );
}

"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

export function CodeModel() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Gentle floating motion
    const floatY = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    groupRef.current.position.y = floatY;
    // Constant rotation around Y axis
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <group ref={groupRef} scale={[2, 2, 2]} position={[0, 0, 0]}>
      {/* Monitor */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[3.5, 2.2, 0.1]} />
        <meshStandardMaterial 
          color="#60a5fa" 
          wireframe 
          opacity={0.4} 
          transparent 
          emissive="#60a5fa"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Screen Content */}
      <mesh position={[0, 0.5, 0.1]}>
        <planeGeometry args={[3.3, 2]} />
        <meshStandardMaterial 
          color="#67e8f9" 
          wireframe 
          opacity={0.6} 
          transparent
          emissive="#67e8f9"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Keyboard */}
      <mesh position={[0, -1, 0.5]}>
        <boxGeometry args={[2.5, 0.2, 1.2]} />
        <meshStandardMaterial 
          color="#a78bfa" 
          wireframe 
          opacity={0.4} 
          transparent
          emissive="#a78bfa"
          emissiveIntensity={0.4}
        />
      </mesh>
      
      {/* Base/Stand */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.25, 0.35, 1, 12]} />
        <meshStandardMaterial 
          color="#60a5fa" 
          wireframe 
          opacity={0.4} 
          transparent
          emissive="#60a5fa"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
}
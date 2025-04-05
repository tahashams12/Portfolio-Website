"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, Text3D } from "@react-three/drei"
import type * as THREE from "three"

function TimeLine() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {/* Timeline base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[10, 0.1, 0.1]} />
        <meshStandardMaterial
          color="#4fc3f7"
          emissive="#0288d1"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>

      {/* Timeline nodes */}
      {[-4, -2, 0, 2, 4].map((x, index) => (
        <Float key={index} speed={1} rotationIntensity={0.2} floatIntensity={0.5} position={[x, 0, 0]}>
          <mesh>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial
              color="#b39ddb"
              emissive="#673ab7"
              emissiveIntensity={0.5}
              roughness={0.1}
              metalness={0.8}
            />
          </mesh>
        </Float>
      ))}

      {/* Year labels */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5} position={[-4, 0.5, 0]}>
        <Text3D font="/fonts/Inter_Regular.json" size={0.3} height={0.05} curveSegments={12}>
          2022
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.2} roughness={0.3} />
        </Text3D>
      </Float>

      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5} position={[4, 0.5, 0]}>
        <Text3D font="/fonts/Inter_Regular.json" size={0.3} height={0.05} curveSegments={12}>
          2025
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.2} roughness={0.3} />
        </Text3D>
      </Float>
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9c27b0" />

      <TimeLine />

      <Environment preset="city" />
    </>
  )
}

export default function ExperienceScene() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Scene />
      </Canvas>
    </div>
  )
}


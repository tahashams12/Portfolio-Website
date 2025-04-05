"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, Text3D } from "@react-three/drei"
import type * as THREE from "three"

function FloatingEnvelope() {
  const envelopeRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (envelopeRef.current) {
      envelopeRef.current.rotation.y = clock.getElapsedTime() * 0.5
      envelopeRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1
    }
  })

  return (
    <group ref={envelopeRef}>
      {/* Envelope base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 1.5, 0.1]} />
        <meshStandardMaterial
          color="#4fc3f7"
          emissive="#0288d1"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Envelope flap */}
      <mesh position={[0, 0.75, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <boxGeometry args={[2, 1, 0.1]} />
        <meshStandardMaterial
          color="#29b6f6"
          emissive="#0288d1"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* @ symbol */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5} position={[0, 0, 0.2]}>
        <Text3D font="/fonts/Inter_Bold.json" size={0.5} height={0.1} curveSegments={12}>
          @
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.5}
            roughness={0.1}
            metalness={0.5}
          />
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

      <FloatingEnvelope />

      <Environment preset="city" />
    </>
  )
}

export default function ContactScene() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Scene />
      </Canvas>
    </div>
  )
}


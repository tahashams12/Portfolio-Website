"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, Sparkles } from "@react-three/drei"
import * as THREE from "three"

function FloatingIcons() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1
    }
  })

  const iconPositions = [
    [-2, 0, 0],
    [2, 0, 0],
    [0, 2, 0],
    [0, -2, 0],
    [1.5, 1.5, 0],
    [-1.5, -1.5, 0],
    [1.5, -1.5, 0],
    [-1.5, 1.5, 0],
  ]

  return (
    <group ref={groupRef}>
      {iconPositions.map((position, index) => (
        <Float
          key={index}
          speed={1.5}
          rotationIntensity={0.5}
          floatIntensity={2}
          position={position as [number, number, number]}
        >
          <mesh>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial
              color={new THREE.Color().setHSL(index * 0.1, 0.8, 0.5)}
              emissive={new THREE.Color().setHSL(index * 0.1, 0.8, 0.3)}
              emissiveIntensity={0.5}
              roughness={0.3}
              metalness={0.7}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      <FloatingIcons />

      <Sparkles count={100} scale={10} size={1} speed={0.3} color="#4fc3f7" />

      <Environment preset="city" />
    </>
  )
}

export default function ProjectScene() {
  return (
    <div className="absolute inset-0">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  )
}


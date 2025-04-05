"use client"

import { useRef, useEffect, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Text3D, Float, Environment, Sparkles } from "@react-three/drei"
import type * as THREE from "three"

function FloatingText() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <Text3D
        ref={ref}
        font="/fonts/Inter_Bold.json"
        size={0.5}
        height={0.1}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
        position={[-2.5, 0, 0]}
      >
        DEVELOPER
        <meshStandardMaterial
          color="#4fc3f7"
          emissive="#0288d1"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.8}
        />
      </Text3D>
    </Float>
  )
}

function FloatingSkills() {
  const skills = [
    { name: "Python", position: [3, 1.5, -2] },
    { name: "Node.js", position: [-3, 0.5, -1] },
    { name: "TensorFlow", position: [2.5, -1, -3] },
    { name: "React", position: [-2, -1.5, -2] },
    { name: "MySQL", position: [1, 2, -2.5] },
  ]

  return (
    <>
      {skills.map((skill, index) => (
        <Float
          key={index}
          speed={1.5}
          rotationIntensity={0.5}
          floatIntensity={2}
          position={skill.position as [number, number, number]}
        >
          <Text3D font="/fonts/Inter_Regular.json" size={0.2} height={0.05} curveSegments={12}>
            {skill.name}
            <meshStandardMaterial color="#b39ddb" emissive="#673ab7" emissiveIntensity={0.3} roughness={0.3} />
          </Text3D>
        </Float>
      ))}
    </>
  )
}

// Replace the CodeSphere function with this updated version that handles texture loading errors
function CodeSphere() {
  const sphereRef = useRef<THREE.Mesh>(null)
  const [textureLoaded, setTextureLoaded] = useState(false)

  // Use a simple procedural texture instead of loading an external file
  useEffect(() => {
    const canvas = document.createElement("canvas")
    canvas.width = 512
    canvas.height = 512
    const context = canvas.getContext("2d")

    if (context) {
      // Create a gradient background
      const gradient = context.createLinearGradient(0, 0, 512, 512)
      gradient.addColorStop(0, "#0288d1")
      gradient.addColorStop(1, "#673ab7")
      context.fillStyle = gradient
      context.fillRect(0, 0, 512, 512)

      // Add some code-like patterns
      context.fillStyle = "rgba(255, 255, 255, 0.1)"
      for (let i = 0; i < 20; i++) {
        const y = Math.random() * 512
        const width = Math.random() * 100 + 50
        context.fillRect(0, y, width, 3)
      }

      for (let i = 0; i < 20; i++) {
        const x = Math.random() * 512
        const y = Math.random() * 512
        const width = Math.random() * 50 + 20
        context.fillRect(x, y, width, 3)
      }

      setTextureLoaded(true)
    }
  }, [])

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.1
    }
  })

  return (
    <mesh ref={sphereRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 64, 64]} />
      {textureLoaded ? (
        <meshStandardMaterial>
          <canvasTexture
            attach="map"
            args={[document.createElement("canvas")]}
            onUpdate={(texture) => {
              const canvas = document.createElement("canvas")
              canvas.width = 512
              canvas.height = 512
              const context = canvas.getContext("2d")

              if (context) {
                // Create a gradient background
                const gradient = context.createLinearGradient(0, 0, 512, 512)
                gradient.addColorStop(0, "#0288d1")
                gradient.addColorStop(1, "#673ab7")
                context.fillStyle = gradient
                context.fillRect(0, 0, 512, 512)

                // Add some code-like patterns
                context.fillStyle = "rgba(255, 255, 255, 0.1)"
                for (let i = 0; i < 20; i++) {
                  const y = Math.random() * 512
                  const width = Math.random() * 100 + 50
                  context.fillRect(0, y, width, 3)
                }

                for (let i = 0; i < 20; i++) {
                  const x = Math.random() * 512
                  const y = Math.random() * 512
                  const width = Math.random() * 50 + 20
                  context.fillRect(x, y, width, 3)
                }

                texture.source.data = canvas
                texture.needsUpdate = true
              }
            }}
          />
          <canvasTexture
            attach="emissiveMap"
            args={[document.createElement("canvas")]}
            onUpdate={(texture) => {
              const canvas = document.createElement("canvas")
              canvas.width = 512
              canvas.height = 512
              const context = canvas.getContext("2d")

              if (context) {
                // Create a gradient background
                const gradient = context.createLinearGradient(0, 0, 512, 512)
                gradient.addColorStop(0, "#0288d1")
                gradient.addColorStop(1, "#673ab7")
                context.fillStyle = gradient
                context.fillRect(0, 0, 512, 512)

                // Add some code-like patterns
                context.fillStyle = "rgba(255, 255, 255, 0.3)"
                for (let i = 0; i < 20; i++) {
                  const y = Math.random() * 512
                  const width = Math.random() * 100 + 50
                  context.fillRect(0, y, width, 3)
                }

                texture.source.data = canvas
                texture.needsUpdate = true
              }
            }}
          />
        </meshStandardMaterial>
      ) : (
        <meshStandardMaterial
          color="#4fc3f7"
          emissive="#0288d1"
          emissiveIntensity={0.2}
          roughness={0.7}
          metalness={0.3}
        />
      )}
    </mesh>
  )
}

function Scene() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 0, 5)
  }, [camera])

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9c27b0" />

      <CodeSphere />
      <FloatingText />
      <FloatingSkills />

      <Sparkles count={100} scale={10} size={1} speed={0.3} color="#4fc3f7" />

      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} autoRotate autoRotateSpeed={0.5} />
      <Environment preset="city" />
    </>
  )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  )
}


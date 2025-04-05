import Link from "next/link"
import { ArrowRight } from "lucide-react"
import HeroScene from "@/components/hero-scene"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section with 3D Scene */}
      <div className="relative h-screen w-full">
        <HeroScene />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4 md:p-8">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            Syed Taha Ali Shams
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl mb-8 text-gray-300">
            Backend Developer & Machine Learning Enthusiast
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              View Projects <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-full font-medium hover:bg-gray-700 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-400"
          >
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </main>
  )
}


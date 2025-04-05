import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ProjectScene from "@/components/project-scene"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Computer-Based Test System",
      description:
        "Developed a secure entry test system using HTML, CSS, PHP, JavaScript, and SQL, improving response time by 20% for 500+ candidates.",
      technologies: ["HTML", "CSS", "PHP", "JavaScript", "SQL"],
      type: "Web Development",
    },
    {
      id: 2,
      title: "Secure Payment System",
      description:
        "Engineered a Stripe API-based authentication system with IP and browser fingerprinting, reducing unauthorized access by 30%.",
      technologies: ["Stripe API", "PHP", "JavaScript", "Security"],
      type: "Web Development",
    },
    {
      id: 3,
      title: "Currency Converter",
      description: "Flutter app using currency exchange API for real-time conversions.",
      technologies: ["Flutter", "Dart", "REST API"],
      type: "Mobile App",
    },
    {
      id: 4,
      title: "Weather Forecast",
      description: "Flutter app using OpenWeatherMap API for accurate weather predictions.",
      technologies: ["Flutter", "Dart", "OpenWeatherMap API"],
      type: "Mobile App",
    },
    {
      id: 5,
      title: "E-commerce Store",
      description: "Full-featured online store with secure payment processing.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      type: "Web Development",
    },
    {
      id: 6,
      title: "2D Space Shooter",
      description: "Action game developed with C++ and SFML graphics library.",
      technologies: ["C++", "SFML"],
      type: "Game Development",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="relative h-[40vh] w-full">
        <ProjectScene />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            My Projects
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-colors group"
            >
              <div className="p-6">
                <div className="text-xs font-medium text-cyan-400 mb-2">{project.type}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700 rounded-md text-xs font-medium text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}


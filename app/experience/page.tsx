import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ExperienceScene from "@/components/experience-scene"

export default function Experience() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="relative h-[40vh] w-full">
        <ExperienceScene />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            Experience
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Research Experience</h2>

            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">Research Intern</h3>
                <span className="text-gray-400 text-sm">01/2025 - Present</span>
              </div>
              <p className="text-cyan-400 mb-4">Centre of Excellence, Bahria University</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Developing object detection algorithms using the Moana dataset for real-time tracking.</li>
                <li>Leveraging Python, OpenCV, and TensorFlow to fine-tune deep learning models.</li>
                <li>Optimizing computational efficiency with preprocessing pipelines and hyperparameter tuning.</li>
              </ul>
            </div>

            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">Machine Learning Project</h3>
                <span className="text-gray-400 text-sm">08/2024 - 12/2024</span>
              </div>
              <p className="text-cyan-400 mb-4">ResNet-50 on MNIST</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Trained ResNet-50 on the MNIST dataset for high-accuracy digit recognition.</li>
                <li>Implemented NumPy-based data augmentation for improved generalization.</li>
                <li>Evaluated performance through precision-recall metrics and confusion matrix analysis.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Development Experience</h2>

            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-2">Web Developer</h3>
              <p className="text-cyan-400 mb-4">Bahria University - Islamabad, Pakistan</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Computer-Based Test System: Developed a secure entry test system using HTML, CSS, PHP, JavaScript, and
                  SQL, improving response time by 20% for 500+ candidates.
                </li>
                <li>
                  Secure Payment System: Engineered a Stripe API-based authentication system with IP and browser
                  fingerprinting, reducing unauthorized access by 30%.
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-cyan-400 mt-8 mb-6">Education</h2>

            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
                <span className="text-gray-400 text-sm">09/2022 - Present</span>
              </div>
              <p className="text-cyan-400 mb-4">Bahria University, Islamabad, Pakistan</p>
              <p className="text-gray-300">Current Semester: 6th | CGPA: 3.64</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


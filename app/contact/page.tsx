"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Send, Mail, Phone, MapPin, Github } from "lucide-react"
import ContactScene from "@/components/contact-scene"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="relative h-[40vh] w-full">
        <ContactScene />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            Contact Me
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-400 mb-8">
              I'm currently available for freelance work and full-time positions. If you have a project that needs
              coding or you're looking for a developer to join your team, feel free to contact me.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-cyan-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="font-medium">tahaalishams@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-cyan-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="font-medium">+92-3209099563 (WhatsApp)</p>
                  <p className="font-medium">+92-3405177149 (Phone)</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-cyan-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="font-medium">Block B Israh Apartments, NUST, Islamabad, Pakistan 44000</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-cyan-400">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <a
                    href="https://github.com/tahashams12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-cyan-400 transition-colors"
                  >
                    github.com/tahashams12
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

            {isSubmitted ? (
              <div className="bg-green-900 bg-opacity-20 border border-green-500 rounded-lg p-4 text-green-400">
                Thank you for your message! I'll get back to you as soon as possible.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}


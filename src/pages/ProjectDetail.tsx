"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import Layout from "@/components/Layout"
import Navigation from "@/components/Navigation"
import { sideProjects } from "@/constants/portfolio"
import { blurRevealAnimation } from "@/utils/animations"
import { ExternalLink, ArrowLeft, Github } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>()
  const project = sideProjects.find((p) => p.id === Number(id))
  const [currentSlide, setCurrentSlide] = useState(0)
  const touchStartRef = useRef<number | null>(null)
  const isMobile = useIsMobile()

  const handleTouchStart = useRef((e: React.TouchEvent) => {})
  const handleTouchMove = useRef((e: React.TouchEvent) => {})
  const handleTouchEnd = useRef(() => {})

  useEffect(() => {
    handleTouchStart.current = (e: React.TouchEvent) => {
      touchStartRef.current = e.touches[0].clientX
    }

    handleTouchMove.current = (e: React.TouchEvent) => {
      if (touchStartRef.current === null || !project?.images) return

      const currentTouch = e.touches[0].clientX
      const diff = touchStartRef.current - currentTouch

      if (diff > 50) {
        // Swipe left - with threshold to prevent accidental swipes
        setCurrentSlide((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
        touchStartRef.current = null // Reset to prevent multiple swipes
      }

      if (diff < -50) {
        // Swipe right - with threshold
        setCurrentSlide((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
        touchStartRef.current = null // Reset to prevent multiple swipes
      }
    }

    handleTouchEnd.current = () => {
      touchStartRef.current = null
    }
  }, [project?.images])

  if (!project) {
    return (
      <Layout className="bg-[#161619]">
        <Navigation />
        <div className="flex flex-col items-center justify-center h-[70vh]">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <Link to="/" className="mt-4 text-blue-400 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to home
          </Link>
        </div>
      </Layout>
    )
  }

  const hasImages = project.images && project.images.length > 0

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <Layout className="bg-[#161619]">
      <Navigation />
      <div className="py-12 px-4 sm:px-6 mx-auto max-w-4xl">
        <Link to="/" className={blurRevealAnimation(1, "inline-flex items-center text-text-secondary mb-6")}>
          <ArrowLeft className="h-4 w-4 mr-2 text-text-secondary" /> Back to projects
        </Link>

        <h1 className={blurRevealAnimation(2, "text-2xl font-bold mb-3")}>{project.name}</h1>

        <div className={blurRevealAnimation(3, "flex flex-wrap items-center mb-8 gap-y-2")}>
          <span className="text-text-secondary mr-4">{project.date || "Personal Project"}</span>
          {project.status && (
            <div className="flex items-center">
              <span
                className={`px-2 py-0.5 rounded text-xs font-medium ${
                  project.status === "Completed"
                    ? "bg-green-900/50 text-green-400"
                    : project.status === "In Progress"
                      ? "bg-yellow-900/50 text-yellow-400"
                      : "bg-blue-900/50 text-blue-400"
                }`}
              >
                {project.status}
              </span>
            </div>
          )}
        </div>

        {/* Conditionally apply grid layout based on whether images exist */}
        <div className={`${hasImages ? "grid grid-cols-1 lg:grid-cols-2 gap-8" : ""} mb-10`}>
          {/* Image Slider - Only show if images exist */}
          {hasImages && (
            <div className={blurRevealAnimation(4, "w-full")}>
              <div className="space-y-4">
                <div
                  className="aspect-video overflow-hidden rounded-xl bg-gray-900 relative"
                  onTouchStart={(e) => handleTouchStart.current(e)}
                  onTouchMove={(e) => handleTouchMove.current(e)}
                  onTouchEnd={() => handleTouchEnd.current()}
                >
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        currentSlide === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${project.name} screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                        onError={(e) => {
                          e.currentTarget.src = "https://placehold.co/1200x800/1f2937/ffffff?text=Project+Screenshot"
                        }}
                      />
                    </div>
                  ))}

                  {/* Navigation arrows for desktop */}
                  {!isMobile && project.images.length > 1 && (
                    <>
                      <button
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 opacity-10 hover:opacity-100 transition-colors"
                        onClick={() => setCurrentSlide((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))}
                        aria-label="Previous slide"
                      >
                        <ArrowLeft className="h-5 w-5" />
                      </button>
                      <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 opacity-10 hover:opacity-100 transition-colors"
                        onClick={() => setCurrentSlide((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))}
                        aria-label="Next slide"
                      >
                        <ArrowLeft className="h-5 w-5 transform rotate-180" />
                      </button>
                    </>
                  )}
                </div>

                {/* Dot navigation */}
                {project.images.length > 1 && (
                  <div className="flex justify-center space-x-2 mt-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-blue-500" : "bg-gray-600"}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Description content */}
          <div className={blurRevealAnimation(5, "w-full")}>
            <h2 className="text-xl font-semibold mb-4">About the Project</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              {project.fullDescription ||
                project.description ||
                "A detailed description of this project will be available soon."}
            </p>

            <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack &&
                project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              {(!project.techStack || project.techStack.length === 0) && (
                <span className="text-gray-400">Tech stack information not available</span>
              )}
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg font-medium transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-2" /> View Live Project
                </a>
              )}

              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg font-medium transition-colors"
                >
                  <Github className="h-4 w-4 mr-2" /> View Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectDetail


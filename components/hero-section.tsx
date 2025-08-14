"use client"

import { Button } from "@/components/ui/button"
import { Play, Heart } from "lucide-react"

export function HeroSection() {
  const scrollToMusic = () => {
    const element = document.getElementById("music")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="section-fade">
            <h1 className="font-bold text-6xl sm:text-7xl lg:text-8xl leading-tight mb-8">
              <span className="gradient-text">MONRUE</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-4 font-medium">Raw Truth in Every Beat</p>
            <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-lg">
              Unfiltered emotion through haunting melodies. Music that cuts deep and speaks to the shadows within.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                onClick={scrollToMusic}
                size="lg"
                className="accent-gradient hover:scale-105 text-white px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-2xl"
              >
                <Play className="h-5 w-5 mr-2" />
                Listen Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-transparent backdrop-blur-sm"
              >
                <Heart className="h-5 w-5 mr-2" />
                Follow Journey
              </Button>
            </div>
          </div>

          <div className="relative section-fade">
            <div className="relative">
              <video
                src="/Download.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse delay-1000"></div>
    </section>
  )
}

"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, ExternalLink, Heart } from "lucide-react"

export function MusicSection() {
  const songs = [
    {
      title: "Shadows Within",
      description: "A haunting exploration of inner demons and self-doubt",
      duration: "4:12",
      spotifyUrl: "https://open.spotify.com/track/example1",
      youtubeUrl: "https://www.youtube.com/watch?v=example1",
      image: "/placeholder-strik.png",
    },
    {
      title: "Broken Crown",
      description: "Raw verses about falling from grace and finding strength",
      duration: "3:47",
      spotifyUrl: "https://open.spotify.com/track/example2",
      youtubeUrl: "https://www.youtube.com/watch?v=example2",
      image: "/placeholder-vtexv.png",
    },
    {
      title: "Numb the Pain",
      description: "Dark anthem about surviving life's hardest battles",
      duration: "4:33",
      spotifyUrl: "https://open.spotify.com/track/example3",
      youtubeUrl: "https://www.youtube.com/watch?v=example3",
      image: "/placeholder-evinj.png",
    },
    {
      title: "Ghost of Me",
      description: "Introspective track about losing yourself and finding the way back",
      duration: "5:01",
      spotifyUrl: "https://open.spotify.com/track/example4",
      youtubeUrl: "https://www.youtube.com/watch?v=example4",
      image: "/placeholder-strik.png",
    },
  ]

  return (
    <section id="music" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-bold text-5xl sm:text-6xl gradient-text mb-8">My Music</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Dive into the depths of raw emotion. Each track is a journey through darkness, pain, and the fight for
            redemption. This is music that doesn't lie.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {songs.map((song, index) => (
            <Card key={index} className="glass-effect overflow-hidden hover-lift border-gradient">
              <div className="md:flex">
                <div className="md:w-48 md:flex-shrink-0 p-4">
                  <img
                    src={song.image || "/placeholder.svg"}
                    alt={`${song.title} album cover`}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                </div>
                <div className="p-8 flex-1">
                  <div className="mb-6">
                    <h3 className="font-bold text-2xl text-white mb-3">{song.title}</h3>
                    <p className="text-gray-400 mb-4">{song.description}</p>
                    <span className="text-red-500 font-semibold">{song.duration}</span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      size="sm"
                      className="accent-gradient hover:scale-105 text-white flex items-center gap-2 rounded-full transition-all duration-300"
                      onClick={() => window.open(song.spotifyUrl, "_blank")}
                    >
                      <Play className="h-4 w-4" />
                      Spotify
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 flex items-center gap-2 rounded-full bg-transparent"
                      onClick={() => window.open(song.youtubeUrl, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4" />
                      YouTube
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-red-500 hover:text-red-400 hover:bg-red-500/10 rounded-full"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Featured Music Player Section */}
        <div className="glass-effect rounded-3xl shadow-2xl p-12 text-center border-gradient">
          <h3 className="font-bold text-3xl gradient-text mb-6">Latest Release</h3>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Experience my newest single "Shadows Within" - a raw dive into the darkness we all carry
          </p>

          {/* Embedded Music Player Placeholder */}
          <div className="bg-black/50 rounded-2xl p-10 mb-8 music-player-glow">
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="w-20 h-20 accent-gradient rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Play className="h-10 w-10 text-white ml-1" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-2xl text-white">Shadows Within</h4>
                <p className="text-gray-400 text-lg">Monrue</p>
              </div>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3 mb-6">
              <div className="accent-gradient h-3 rounded-full w-1/3 transition-all duration-300"></div>
            </div>
            <p className="text-gray-500">Click the links above to listen on your preferred platform</p>
          </div>

          <Button
            size="lg"
            className="accent-gradient hover:scale-105 text-white px-12 py-4 text-xl font-semibold rounded-full transition-all duration-300 shadow-2xl"
          >
            Stream All Songs
          </Button>
        </div>
      </div>
    </section>
  )
}

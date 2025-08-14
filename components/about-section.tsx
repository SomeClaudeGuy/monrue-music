import { Card } from "@/components/ui/card"
import { Guitar, Mic, Heart, Star } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-bold text-5xl sm:text-6xl gradient-text mb-8">About Monrue</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Raw emotion meets haunting melodies. Creating music that dives deep into the shadows of the human
            experience, finding truth in the darkness.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <h3 className="font-bold text-4xl text-white">The Dark Journey</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              From underground venues to late-night studio sessions, my path has been carved through struggle, pain, and
              the relentless pursuit of authentic expression. Every scar tells a story, every song bleeds truth.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Drawing from the depths of human emotion - the places others fear to go. My music blends dark hip-hop,
              alternative rock, and haunting vocals to create something that cuts through the noise and speaks to souls
              who understand what it means to fight inner demons.
            </p>
          </div>

          <div className="relative">
            <img
              src="/placeholder-mro64.png"
              alt="Monrue in the studio with moody lighting"
              className="rounded-3xl shadow-2xl w-full hover-lift"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="glass-effect p-8 text-center hover-lift border-gradient">
            <Guitar className="h-16 w-16 text-red-500 mx-auto mb-6" />
            <h4 className="font-bold text-xl text-white mb-4">Raw Sound</h4>
            <p className="text-gray-400">Unfiltered emotion through haunting instrumentals</p>
          </Card>

          <Card className="glass-effect p-8 text-center hover-lift border-gradient">
            <Mic className="h-16 w-16 text-red-500 mx-auto mb-6" />
            <h4 className="font-bold text-xl text-white mb-4">Dark Performances</h4>
            <p className="text-gray-400">Intense live shows that leave lasting impact</p>
          </Card>

          <Card className="glass-effect p-8 text-center hover-lift border-gradient">
            <Heart className="h-16 w-16 text-red-500 mx-auto mb-6" />
            <h4 className="font-bold text-xl text-white mb-4">Brutal Honesty</h4>
            <p className="text-gray-400">Lyrics that cut deep and speak uncomfortable truths</p>
          </Card>

          <Card className="glass-effect p-8 text-center hover-lift border-gradient">
            <Star className="h-16 w-16 text-red-500 mx-auto mb-6" />
            <h4 className="font-bold text-xl text-white mb-4">Original Vision</h4>
            <p className="text-gray-400">Unique sound that defies conventional boundaries</p>
          </Card>
        </div>
      </div>
    </section>
  )
}

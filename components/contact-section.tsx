import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Instagram, Twitter, Youtube } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-bold text-5xl sm:text-6xl gradient-text mb-8">Connect with the Darkness</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to dive deeper? Whether you want to collaborate, book a show, or share your own struggles, I'm here to
            listen. Real recognizes real.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="glass-effect p-10 border-gradient">
            <h3 className="font-bold text-3xl text-white mb-8">Drop a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-300 mb-3">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="Your first name"
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-300 mb-3">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Your last name"
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 h-12 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 h-12 rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-3">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 h-12 rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Speak your truth..."
                  rows={6}
                  className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 rounded-xl"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full accent-gradient hover:scale-105 text-white font-semibold h-14 rounded-xl transition-all duration-300 shadow-2xl"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <Card className="glass-effect p-10 border-gradient">
              <h3 className="font-bold text-3xl text-white mb-8">Reach Out</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-red-500" />
                  <span className="text-gray-300 text-lg">contact@monrue-music.com</span>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  For booking, collaborations, or just to connect with someone who gets it. I respond to real messages
                  within 24 hours.
                </p>
              </div>
            </Card>

            <Card className="glass-effect p-10 border-gradient">
              <h3 className="font-bold text-3xl text-white mb-8">Follow the Journey</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Stay connected for new releases, behind-the-scenes content, and raw thoughts on life's battles.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="flex items-center gap-3 border-white/20 text-white hover:bg-white/10 bg-transparent h-14 rounded-xl transition-all duration-300"
                >
                  <Instagram className="h-5 w-5" />
                  Instagram
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-3 border-white/20 text-white hover:bg-white/10 bg-transparent h-14 rounded-xl transition-all duration-300"
                >
                  <Twitter className="h-5 w-5" />
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-3 border-white/20 text-white hover:bg-white/10 bg-transparent h-14 rounded-xl transition-all duration-300"
                >
                  <Youtube className="h-5 w-5" />
                  YouTube
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-3 border-white/20 text-white hover:bg-white/10 bg-transparent h-14 rounded-xl transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                  Newsletter
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

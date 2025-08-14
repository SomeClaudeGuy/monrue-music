import { Music, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Music className="h-8 w-8 text-red-500" />
              <span className="font-bold text-2xl gradient-text">MONRUE</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Raw truth in every beat. Music that cuts deep and speaks to the shadows within.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home" className="hover:text-red-500 transition-colors text-lg">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-500 transition-colors text-lg">
                  About
                </a>
              </li>
              <li>
                <a href="#music" className="hover:text-red-500 transition-colors text-lg">
                  Music
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-500 transition-colors text-lg">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 text-white">Music Platforms</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-red-500 transition-colors text-lg">
                  Spotify
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors text-lg">
                  Apple Music
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors text-lg">
                  YouTube Music
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors text-lg">
                  SoundCloud
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 mb-4 md:mb-0">© 2024 Monrue. All rights reserved.</p>
          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for those who understand the darkness</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

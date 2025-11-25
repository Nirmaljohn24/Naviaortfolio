import React, { useState, useEffect } from 'react'
import { 
  Instagram, 
  Youtube, 
  FileText, 
  BookOpen, 
  User,
  Film,
  Newspaper,
  MessageCircle,
  Video,
  Volume2,
  ExternalLink,
  Download,
  Play,
  Sparkles,
  Award,
  TrendingUp
} from 'lucide-react'

// File paths from public folder
const profileImage = '/IMG_1631.JPG'
const docImage1 = '/img20250422_14093998.jpg'
const docImage2 = '/img20250422_14112135.jpg'
const docImage3 = '/img20250422_13585912.jpg'
// Encode file names with spaces for proper URL handling
const magazinePdf = encodeURI('/Magazine (23-UDJ-007).pdf')
const researchPaper = encodeURI('/Research paper - Navia Felcin A  (23-UDJ-007).docx')

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // YouTube links organized by category
  const publicOpinionLinks = [
    { url: 'https://youtu.be/fsMJnfJC-Es?si=Ccs5OrVyAi05_ERm', title: 'Public Opinion Video 1' },
    { url: 'https://youtu.be/u_GJZ-roV6g?si=0FKSGbLyKTSySlOu', title: 'Public Opinion Video 2' }
  ]

  const interviewLinks = [
    { url: 'https://youtu.be/JIXu-GDEuHk?si=hw9_-A7GMbxRnLPk', title: 'Interview 1' },
    { url: 'https://youtu.be/rT6udoGVG8o?si=_9pBf7dgNecUk1vc', title: 'Interview 2' },
    { url: 'https://youtu.be/VEkrdhhPrY4?si=xpbUSIkudwCJZQIe', title: 'Interview 3' },
    { url: 'https://youtu.be/LsIwsRLlym0?si=LiuvevOTEZhvcbLz', title: 'Interview 4' },
    { url: 'https://youtu.be/bmApMh5WMaA?si=OCHx5wL-p_O2BZSA', title: 'Interview 5' }
  ]

  const voiceOverLinks = [
    { url: 'https://youtu.be/luNoeR3EqVQ?si=LdQGLjU1PuegmOlo', title: 'Voice Over Work' }
  ]

  const theeraTheervuLink = 'https://youtu.be/icQ9dHXRQ4U?si=oOuhabi9uWguSzxW'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/10' : 'backdrop-blur-sm bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400/50">
                <img src={profileImage} alt="Navia" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Navia Felcin A
                </h1>
                <p className="text-xs text-gray-400">Journalist</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#work" className="text-gray-300 hover:text-cyan-400 transition-colors">Work</a>
              <a href="#publications" className="text-gray-300 hover:text-cyan-400 transition-colors">Publications</a>
              <a href="#videos" className="text-gray-300 hover:text-cyan-400 transition-colors">Videos</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Profile Image with Glow */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity animate-pulse"></div>
                {/* Image container */}
                <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-2 border-cyan-400/30 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src={profileImage} 
                    alt="Navia Felcin A" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-cyan-500 to-purple-500 p-4 rounded-xl shadow-2xl transform rotate-6 hover:rotate-0 transition-transform">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-block mb-4">
              </div>
              <h1 className="text-6xl lg:text-8xl font-black leading-tight">
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  NAVIA
                </span>
                <span className="block text-white">FELCIN A</span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto lg:mx-0"></div>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Crafting compelling narratives through journalism, anchoring, documentaries, and voice work. 
                <span className="text-cyan-400 font-semibold"> Telling stories that resonate.</span>
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm">Media Professional</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Storyteller</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="relative py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                FEATURED
              </span>
              <span className="text-white"> WORK</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Anchor Work - Large Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 backdrop-blur-xl border border-pink-400/30 p-8 hover:border-pink-400/50 transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:rotate-6 transition-transform">
                    <Film className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-pink-400 text-sm font-bold mb-1">ANCHOR WORK</div>
                    <h3 className="text-3xl font-bold">News Presentation</h3>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Professional news anchoring and presentation work showcasing expertise in broadcast journalism and live reporting.
                </p>
                <a 
                  href="https://www.instagram.com/your-anchor-work" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105 group/btn"
                >
                  <Instagram className="w-5 h-5" />
                  View on Instagram
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Documentary - Gallery Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-xl border border-blue-400/30 p-8 hover:border-blue-400/50 transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:rotate-6 transition-transform">
                    <Film className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-blue-400 text-sm font-bold mb-1">DOCUMENTARY</div>
                    <h3 className="text-3xl font-bold">Visual Stories</h3>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="aspect-video rounded-xl overflow-hidden border-2 border-blue-400/30 group-hover:border-blue-400/60 transition-colors">
                    <img src={docImage1} alt="Doc 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="aspect-video rounded-xl overflow-hidden border-2 border-blue-400/30 group-hover:border-blue-400/60 transition-colors">
                    <img src={docImage2} alt="Doc 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="aspect-video rounded-xl overflow-hidden border-2 border-blue-400/30 group-hover:border-blue-400/60 transition-colors">
                    <img src={docImage3} alt="Doc 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
                <a 
                  href="https://www.instagram.com/your-documentary" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 group/btn"
                >
                  <Instagram className="w-5 h-5" />
                  View Documentary
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="relative py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                PUBLICATIONS
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Research Paper */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-xl border border-green-400/30 p-8 hover:border-green-400/50 transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:rotate-6 transition-transform flex-shrink-0">
                    <FileText className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-green-400 text-sm font-bold mb-2">RESEARCH PAPER</div>
                    <h3 className="text-2xl font-bold mb-2">Academic Research</h3>
                    <p className="text-gray-400 text-sm">Navia Felcin A (23-UDJ-007)</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Academic research and analysis in journalism and media studies, exploring contemporary media landscapes and their impact.
                </p>
                <a 
                  href={researchPaper} 
                  download
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105 group/btn"
                >
                  <Download className="w-5 h-5" />
                  Download Paper
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Magazine */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-500/20 to-amber-600/20 backdrop-blur-xl border border-yellow-400/30 p-8 hover:border-yellow-400/50 transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute top-0 left-0 w-48 h-48 bg-yellow-500/20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:rotate-6 transition-transform flex-shrink-0">
                    <Newspaper className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-yellow-400 text-sm font-bold mb-2">MAGAZINE</div>
                    <h3 className="text-2xl font-bold mb-2">Published Articles</h3>
                    <p className="text-gray-400 text-sm">Featured Stories & Features</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Published articles and magazine features showcasing journalistic writing and storytelling expertise.
                </p>
                <a 
                  href={magazinePdf} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-yellow-500/50 transition-all transform hover:scale-105 group/btn"
                >
                  <BookOpen className="w-5 h-5" />
                  Read Magazine
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Portfolio Section */}
      <section id="videos" className="relative py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                VIDEO
              </span>
              <span className="text-white"> PORTFOLIO</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto"></div>
          </div>

          {/* Public Opinion */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <MessageCircle className="w-8 h-8 text-cyan-400" />
              <h3 className="text-3xl font-bold">Public Opinion</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {publicOpinionLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500/20 to-pink-600/20 backdrop-blur-xl border border-red-400/30 p-6 hover:border-red-400/50 transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center shadow-2xl transform group-hover:rotate-6 transition-transform flex-shrink-0">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-1">{link.title}</h4>
                      <p className="text-sm text-gray-400 flex items-center gap-2">
                        <Youtube className="w-4 h-4" />
                        Watch on YouTube
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Interviews */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <Video className="w-8 h-8 text-purple-400" />
              <h3 className="text-3xl font-bold">Interviews</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interviewLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-xl border border-purple-400/30 p-5 hover:border-purple-400/50 transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-xl transform group-hover:rotate-6 transition-transform flex-shrink-0">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm truncate">{link.title}</h4>
                      <p className="text-xs text-gray-400 flex items-center gap-1">
                        <Youtube className="w-3 h-3" />
                        YouTube
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Voice Over */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <Volume2 className="w-8 h-8 text-pink-400" />
              <h3 className="text-3xl font-bold">Voice Over</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {voiceOverLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 backdrop-blur-xl border border-pink-400/30 p-6 hover:border-pink-400/50 transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl transform group-hover:rotate-6 transition-transform flex-shrink-0">
                      <Volume2 className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-1">{link.title}</h4>
                      <p className="text-sm text-gray-400 flex items-center gap-2">
                        <Youtube className="w-4 h-4" />
                        Watch on YouTube
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-pink-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Featured Project - Theera Theervu */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600/30 via-pink-600/30 to-purple-600/30 backdrop-blur-xl border-2 border-red-400/40 p-10 hover:border-red-400/60 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Film className="w-12 h-12 text-white" />
                </div>
                <div className="flex-1">
                  <div className="inline-block bg-red-500/20 border border-red-400/50 px-4 py-1 rounded-full text-red-300 text-sm font-bold mb-3">
                    ⭐ FEATURED PROJECT
                  </div>
                  <h3 className="text-4xl font-bold mb-2">Theera Theervu</h3>
                  <p className="text-xl text-gray-300 mb-1">Short Film - Voice Dubbing</p>
                  <p className="text-gray-400">Voice dubbing for the news reader role</p>
                </div>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                A compelling short film project showcasing voice acting skills in journalism. 
                Experience the art of storytelling through voice.
              </p>
              <a 
                href={theeraTheervuLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all transform hover:scale-105 group/btn"
              >
                <Play className="w-6 h-6" />
                Watch on YouTube
                <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                Navia Felcin A
              </h4>
              <p className="text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="font-serif">Telling Stories That Matter</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

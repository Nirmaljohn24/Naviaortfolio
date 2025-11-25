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
  ArrowRight,
  Mail,
  Linkedin,
  Phone,
  Facebook
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-48 0c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-48 0c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200' : 'bg-white/80 backdrop-blur-sm'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-slate-200 shadow-sm">
                <img src={profileImage} alt="Navia" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-bold text-slate-900">Navia Felcin A</h1>
                <p className="text-xs text-slate-600 font-medium">Journalist & Media Professional</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 font-medium transition-colors text-sm">About</a>
              <a href="#work" className="text-slate-600 hover:text-slate-900 font-medium transition-colors text-sm">Work</a>
              <a href="#publications" className="text-slate-600 hover:text-slate-900 font-medium transition-colors text-sm">Publications</a>
              <a href="#videos" className="text-slate-600 hover:text-slate-900 font-medium transition-colors text-sm">Videos</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 font-medium transition-colors text-sm">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-2 lg:gap-2 items-center">
            {/* Left: Profile Image */}
            <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                {/* Professional frame */}
                <div className="absolute -inset-1 rounded-2xl" style={{ background: 'linear-gradient(to bottom right, rgba(147, 51, 234, 0.2), rgba(168, 85, 247, 0.2))' }}></div>
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                  <img 
                    src={profileImage} 
                    alt="Navia Felcin A" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2 space-y-4 text-center lg:text-left">
              <div className="space-y-2">
                <div className="inline-block">
                  <span className="px-4 py-1.5 rounded-full text-sm font-semibold border" style={{ background: 'rgba(147, 51, 234, 0.1)', color: 'rgba(147, 51, 234, 0.9)', borderColor: 'rgba(147, 51, 234, 0.2)' }}>
                    Professional Portfolio
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                  Navia
                  <span className="block" style={{ color: 'rgba(147, 51, 234, 0.9)' }}>Felcin A</span>
                </h1>
                <div className="w-20 h-1 mx-auto lg:mx-0" style={{ background: 'linear-gradient(to right, rgba(147, 51, 234, 0.8), rgba(168, 85, 247, 0.8))' }}></div>
              </div>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Crafting compelling narratives through journalism, anchoring, documentaries, and voice work. 
                Dedicated to telling stories that matter and giving voice to the unheard.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg border border-slate-200">
                  <User className="w-4 h-4" style={{ color: 'rgba(147, 51, 234, 0.9)' }} />
                  <span className="text-sm font-medium text-slate-700">Media Professional</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg border border-slate-200">
                  <Film className="w-4 h-4" style={{ color: 'rgba(168, 85, 247, 0.9)' }} />
                  <span className="text-sm font-medium text-slate-700">Storyteller</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative pt-8 sm:pt-10 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-6">
            <div className="inline-block mb-2">
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold border" style={{ background: 'rgba(147, 51, 234, 0.1)', color: 'rgba(147, 51, 234, 0.9)', borderColor: 'rgba(147, 51, 234, 0.2)' }}>
                About Me
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-2">
              Welcome to My Portfolio
            </h2>
            <div className="w-16 h-1 mx-auto" style={{ background: 'linear-gradient(to right, rgba(147, 51, 234, 0.8), rgba(168, 85, 247, 0.8))' }}></div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 sm:p-10">
            <p className="text-lg text-slate-700 leading-relaxed mb-3">
              Hello,
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-3">
              I'm <strong>Navia Felcin A</strong>, an aspiring journalist.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-3">
              I am actively developing my skills in the world of Journalism, focusing on crafting compelling narratives through writing, interviewing, video presentations, and voice over work.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-3">
              This is my digital portfolio.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-5">
              I welcome you to explore my creative works. Thank you for your time and interest.
            </p>
            
            <div className="border-t border-slate-200 pt-4">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Here you will find:</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">1.</span>
                  <span><strong>Anchor Work</strong> - My contributions as an anchor on a YouTube channel.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">2.</span>
                  <span><strong>Documentary</strong> - "A Need for a Special Law Against Honor Killing".</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">3.</span>
                  <span>Images of my article in <strong>Aval Vikatan</strong> magazine.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">4.</span>
                  <span><strong>Research Paper</strong> - "Misrepresentation of Dalits in the movie Kavundampalayam".</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">5.</span>
                  <span><strong>Magazine</strong> - "உடலின் உரையாடல்" (About Sex Education)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold mt-1">6.</span>
                  <span><strong>Other links.</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="relative pt-8 sm:pt-10 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-6">
            <div className="inline-block mb-2">
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold border" style={{ background: 'rgba(147, 51, 234, 0.1)', color: 'rgba(147, 51, 234, 0.9)', borderColor: 'rgba(147, 51, 234, 0.2)' }}>
                Featured Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-2">
              Professional Work
            </h2>
            <div className="w-16 h-1 mx-auto" style={{ background: 'linear-gradient(to right, rgba(147, 51, 234, 0.8), rgba(168, 85, 247, 0.8))' }}></div>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Anchor Work */}
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-md" style={{ background: 'linear-gradient(to bottom right, rgba(147, 51, 234, 0.9), rgba(168, 85, 247, 0.9))' }}>
                    <Film className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(147, 51, 234, 0.9)' }}>Anchor Work</div>
                    <h3 className="text-2xl font-bold text-slate-900">YouTube Channel</h3>
                  </div>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  My contributions as an anchor on a YouTube channel, showcasing expertise in broadcast journalism, live reporting, and engaging audience communication.
                </p>
                <a 
                  href="https://www.instagram.com/navia_felcin?igsh=NjZlMDN3NXNiMnlh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all group/btn"
                >
                  <Instagram className="w-5 h-5" />
                  View on Instagram
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aval Vikatan Article Section */}
      <section id="aval-vikatan" className="relative pt-8 sm:pt-10 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-6">
            <div className="inline-block mb-2">
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold border" style={{ background: 'rgba(147, 51, 234, 0.1)', color: 'rgba(147, 51, 234, 0.9)', borderColor: 'rgba(147, 51, 234, 0.2)' }}>
                Published Article
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-2">
              Aval Vikatan Magazine
            </h2>
            <div className="w-16 h-1 mx-auto" style={{ background: 'linear-gradient(to right, rgba(147, 51, 234, 0.8), rgba(168, 85, 247, 0.8))' }}></div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
            <p className="text-lg text-slate-700 mb-4 text-center">
              Images of my article published in <strong>Aval Vikatan</strong> magazine
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed text-center">
              A documentary detailing the ongoing caste based honor killings and violence, the importance of a separate law against honor killings, and the significance of strengthening existing laws for the Scheduled Caste community.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300">
                <img src={docImage1} alt="Aval Vikatan Article 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300">
                <img src={docImage2} alt="Aval Vikatan Article 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300">
                <img src={docImage3} alt="Aval Vikatan Article 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Magazine - உடலின் உரையாடல் Section */}
      <section id="magazine" className="relative pt-8 sm:pt-10 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-6">
            <div className="inline-block mb-2">
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold border" style={{ background: 'rgba(168, 85, 247, 0.1)', color: 'rgba(168, 85, 247, 0.9)', borderColor: 'rgba(168, 85, 247, 0.2)' }}>
                Magazine Publication
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-2">
              உடலின் உரையாடல்
            </h2>
            <p className="text-xl text-slate-600 mb-2">About Sex Education</p>
            <div className="w-16 h-1 mx-auto" style={{ background: 'linear-gradient(to right, rgba(168, 85, 247, 0.8), rgba(147, 51, 234, 0.8))' }}></div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-8 sm:p-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center shadow-md flex-shrink-0" style={{ background: 'linear-gradient(to bottom right, rgba(168, 85, 247, 0.9), rgba(147, 51, 234, 0.9))' }}>
                  <Newspaper className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(168, 85, 247, 0.9)' }}>Featured Magazine</div>
                  <h3 className="text-2xl font-bold text-slate-900">உடலின் உரையாடல்</h3>
                </div>
              </div>
              <p className="text-slate-600 mb-5 leading-relaxed text-lg">
                The lack of sex education leads to gender inequality, misunderstandings about other genders, oppression, and many other issues. This Magazine "உடலின் உரையாடல்" has been created as a small effort to break such problems, featuring in depth interviews and perspectives on sex education and its importance.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={magazinePdf} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-all group/btn"
                >
                  <BookOpen className="w-5 h-5" />
                  Read Magazine
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
                <a 
                  href={magazinePdf} 
                  download
                  className="inline-flex items-center gap-2 bg-slate-100 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-200 transition-all group/btn border border-slate-200"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="relative pt-8 sm:pt-10 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-6">
            <div className="inline-block mb-2">
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold border" style={{ background: 'rgba(147, 51, 234, 0.1)', color: 'rgba(147, 51, 234, 0.9)', borderColor: 'rgba(147, 51, 234, 0.2)' }}>
                Publications
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-2">
              Academic & Published Work
            </h2>
            <div className="w-16 h-1 mx-auto" style={{ background: 'linear-gradient(to right, rgba(147, 51, 234, 0.8), rgba(168, 85, 247, 0.8))' }}></div>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Research Paper */}
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center shadow-md flex-shrink-0" style={{ background: 'linear-gradient(to bottom right, rgba(147, 51, 234, 0.9), rgba(168, 85, 247, 0.9))' }}>
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(147, 51, 234, 0.9)' }}>Research Paper</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">Misrepresentation of Dalits in the movie Kavundampalayam</h3>
                  <p className="text-sm text-slate-500">Navia Felcin A (23-UDJ-007)</p>
                </div>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                This research paper critically analyzes how the Tamil movie "Kavundampalayam (2024)", directed by Pa. Ranjith, creates false narratives about Dalits and misrepresents them through the lens of Stuart Hall's representation theory.
              </p>
              <a 
                href={researchPaper} 
                download
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all group/btn"
              >
                <Download className="w-5 h-5" />
                Download Paper
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Portfolio Section */}
      <section id="videos" className="relative pt-8 sm:pt-10 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-6">
            <div className="inline-block mb-2">
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold border" style={{ background: 'rgba(147, 51, 234, 0.1)', color: 'rgba(147, 51, 234, 0.9)', borderColor: 'rgba(147, 51, 234, 0.2)' }}>
                Video Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-2">
              Video Content
            </h2>
            <div className="w-16 h-1 mx-auto" style={{ background: 'linear-gradient(to right, rgba(147, 51, 234, 0.8), rgba(168, 85, 247, 0.8))' }}></div>
          </div>

          {/* Public Opinion */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="w-6 h-6" style={{ color: 'rgba(147, 51, 234, 0.9)' }} />
              <h3 className="text-2xl font-bold text-slate-900">Public Opinion</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {publicOpinionLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-lg shadow-md border border-slate-200 p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-md flex-shrink-0" style={{ background: 'linear-gradient(to bottom right, rgba(147, 51, 234, 0.9), rgba(168, 85, 247, 0.9))' }}>
                      <Play className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">{link.title}</h4>
                      <p className="text-sm text-slate-500 flex items-center gap-2">
                        <Youtube className="w-4 h-4" />
                        Watch on YouTube
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Interviews */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Video className="w-6 h-6" style={{ color: 'rgba(168, 85, 247, 0.9)' }} />
              <h3 className="text-2xl font-bold text-slate-900">Interviews</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {interviewLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-lg shadow-md border border-slate-200 p-5 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-md flex-shrink-0" style={{ background: 'linear-gradient(to bottom right, rgba(168, 85, 247, 0.9), rgba(147, 51, 234, 0.9))' }}>
                      <Play className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-slate-900 text-sm truncate">{link.title}</h4>
                      <p className="text-xs text-slate-500 flex items-center gap-1">
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
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Volume2 className="w-6 h-6" style={{ color: 'rgba(147, 51, 234, 0.9)' }} />
              <h3 className="text-2xl font-bold text-slate-900">Voice Over</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {voiceOverLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-lg shadow-md border border-slate-200 p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center shadow-md flex-shrink-0" style={{ background: 'linear-gradient(to bottom right, rgba(147, 51, 234, 0.9), rgba(168, 85, 247, 0.9))' }}>
                      <Volume2 className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">{link.title}</h4>
                      <p className="text-sm text-slate-500 flex items-center gap-2">
                        <Youtube className="w-4 h-4" />
                        Watch on YouTube
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Other Links Section */}
      <section id="other-links" className="relative pt-8 sm:pt-10 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-6">
            <div className="inline-block mb-2">
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold border" style={{ background: 'rgba(147, 51, 234, 0.1)', color: 'rgba(147, 51, 234, 0.9)', borderColor: 'rgba(147, 51, 234, 0.2)' }}>
                Other Links
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-2">
              Other Links
            </h2>
            <div className="w-16 h-1 mx-auto" style={{ background: 'linear-gradient(to right, rgba(147, 51, 234, 0.8), rgba(168, 85, 247, 0.8))' }}></div>
          </div>
          
          {/* Theera Theervu */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl shadow-2xl border border-slate-700 p-8 sm:p-10 text-white">
              <div className="flex flex-col sm:flex-row items-start gap-6 mb-4">
                <div className="w-20 h-20 rounded-lg flex items-center justify-center shadow-xl flex-shrink-0" style={{ background: 'linear-gradient(to bottom right, rgba(147, 51, 234, 0.9), rgba(168, 85, 247, 0.9))' }}>
                  <Volume2 className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 rounded-lg text-xs font-semibold mb-2" style={{ background: 'rgba(147, 51, 234, 0.2)', border: '1px solid rgba(147, 51, 234, 0.5)', color: 'rgba(196, 181, 253, 0.9)' }}>
                    Featured Project
                  </div>
                  <h3 className="text-3xl font-bold mb-1">Theera Theervu</h3>
                  <p className="text-xl text-slate-300 mb-1">Short Film - Voice Dubbing</p>
                  <p className="text-slate-400">Voice dubbing for the news reader role</p>
                </div>
              </div>
              <p className="text-slate-300 mb-5 leading-relaxed text-lg">
                I worked on the short film "Theera Theervu" where I did voice dubbing for the news reader role. This project showcases voice acting skills in journalism and demonstrates the art of storytelling through voice.
              </p>
              <a 
                href={theeraTheervuLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all group/btn"
              >
                <Play className="w-6 h-6" />
                Watch on YouTube
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative pt-8 sm:pt-10 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-6">
            <div className="inline-block mb-2">
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold border" style={{ background: 'rgba(147, 51, 234, 0.1)', color: 'rgba(147, 51, 234, 0.9)', borderColor: 'rgba(147, 51, 234, 0.2)' }}>
                Get In Touch
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-2">
              Contact
            </h2>
            <div className="w-16 h-1 mx-auto" style={{ background: 'linear-gradient(to right, rgba(147, 51, 234, 0.8), rgba(168, 85, 247, 0.8))' }}></div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 sm:p-10">
            <div className="space-y-6">
              {/* Phone */}
              <a 
                href="tel:9043560579" 
                className="flex items-center gap-4 p-4 rounded-lg border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-md flex-shrink-0" style={{ background: 'linear-gradient(to bottom right, rgba(147, 51, 234, 0.9), rgba(168, 85, 247, 0.9))' }}>
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-500 mb-1">Phone</p>
                  <p className="text-lg font-semibold text-slate-900">90435 60579</p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-purple-600 transition-colors" />
              </a>

              {/* Email */}
              <a 
                href="mailto:naviafelcin@gmail.com" 
                className="flex items-center gap-4 p-4 rounded-lg border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-md flex-shrink-0" style={{ background: 'linear-gradient(to bottom right, rgba(168, 85, 247, 0.9), rgba(147, 51, 234, 0.9))' }}>
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-500 mb-1">Email</p>
                  <p className="text-lg font-semibold text-slate-900">naviafelcin@gmail.com</p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-purple-600 transition-colors" />
              </a>

              {/* Social Media Links */}
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                <a 
                  href="https://www.instagram.com/navia_felcin?igsh=NjZlMDN3NXNiMnlh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-md flex-shrink-0 bg-gradient-to-br from-purple-500 to-pink-500">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-slate-900">Instagram</span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-purple-600 transition-colors ml-auto" />
                </a>

                <a 
                  href="https://www.facebook.com/share/17mWMPejxn/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-md flex-shrink-0 bg-blue-600">
                    <Facebook className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-slate-900">Facebook</span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-purple-600 transition-colors ml-auto" />
                </a>

                <a 
                  href="https://www.linkedin.com/in/navia-felcin-a1a77139a?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-md flex-shrink-0 bg-blue-700">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-slate-900">LinkedIn</span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-purple-600 transition-colors ml-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold text-slate-900 mb-2">Navia Felcin A</h4>
              <p className="text-slate-500 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <Newspaper className="w-5 h-5" />
              <span className="text-sm font-medium">Telling Stories That Matter</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

import { useState, useEffect } from 'react'
import { Menu, X, MessageSquare, Home, User, Briefcase, Sparkles, LayoutGrid, GraduationCap, Users } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Services', href: '#services', icon: Briefcase },
  { label: 'Skills', href: '#skills', icon: Sparkles },
  { label: 'Projects', href: '#projects', icon: LayoutGrid },
  { label: 'Education', href: '#education-experience', icon: GraduationCap },
  { label: 'Team', href: '#team', icon: Users },
]

const PHOTO = "/ChatGPT_Image_Jun_16,_2026,_03_11_34_PM.png"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [isDockVisible, setIsDockVisible] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const onScroll = () => {
      const currentScrollY = window.scrollY

      // Smart Auto-Hide Logic
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsDockVisible(false)
      } else {
        setIsDockVisible(true)
      }
      lastScrollY = currentScrollY

      setScrolled(currentScrollY > 20)

      const sections = ['home', 'about', 'services', 'skills', 'projects', 'education-experience', 'team', 'contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && currentScrollY >= el.offsetTop - 100) {
          setActive(id)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header>
      {/* 
        ========================================
        MOBILE NAVBAR (Traditional Top Bar)
        ========================================
      */}
      <nav
        className={`md:hidden fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? 'glass shadow-lg shadow-black/30 border-b border-blue-500/10'
            : 'bg-transparent'
        }`}
      >
        <div className="px-4 flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo('#home')}
            className="flex items-center gap-2.5 group"
            aria-label="Go to top"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-[1px] shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
              <img 
                src={PHOTO} 
                alt="Inayath Basha Logo" 
                className="w-full h-full rounded-full object-cover object-top bg-[#0d1426]" 
              />
            </div>
            <span className="font-bold text-white text-sm">Inayath</span>
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass border-t border-white/5 px-4 py-3 space-y-1">
            {[...NAV_LINKS, { label: "Let's Talk", href: '#contact' }].map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = active === id
              return (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-blue-400 bg-blue-500/15 border border-blue-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* 
        ========================================
        DESKTOP AVANT-GARDE LAYOUT (lg:block)
        ========================================
      */}

      {/* Top Left Logo (Fixed) */}
      <div className="hidden md:block fixed top-6 left-6 z-[100]">
        <button
          onClick={() => scrollTo('#home')}
          className="flex items-center gap-3.5 group"
          aria-label="Go to top"
        >
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-[1.5px] shadow-[0_0_15px_rgba(99,102,241,0.25)] group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] group-hover:scale-105 transition-all duration-300 overflow-hidden">
            <img 
              src={PHOTO} 
              alt="Inayath Basha Logo" 
              className="w-full h-full rounded-full object-cover object-top bg-[#0d1426] border border-slate-950/20" 
            />
          </div>
          <span className="font-bold text-white text-[15px] tracking-wide opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-md">
            Inayath Basha
          </span>
        </button>
      </div>

      {/* Top Right Let's Talk CTA (Fixed) */}
      <div className="hidden md:block fixed top-6 right-6 z-[100]">
        <button
          onClick={() => scrollTo('#contact')}
          className="group px-5 py-2.5 bg-white/10 hover:bg-blue-600 border border-white/20 hover:border-blue-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg backdrop-blur-md flex items-center gap-2 text-xs uppercase tracking-widest"
          aria-label="Contact Inayath"
        >
          <MessageSquare size={14} className="group-hover:animate-bounce" />
          <span>Let's Talk</span>
        </button>
      </div>

      {/* Bottom Floating Dock Navigation (Fixed) */}
      <nav 
        className={`hidden md:flex fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isDockVisible ? 'translate-y-0 opacity-100' : 'translate-y-[150%] opacity-0 pointer-events-none'
        }`}
        aria-label="Desktop navigation"
      >
        {/* Glowing border outer wrapper */}
        <div className="relative p-[1.5px] rounded-[24px] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7),_0_0_30px_rgba(99,102,241,0.15)] group transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8),_0_0_40px_rgba(99,102,241,0.25)]">
          {/* Animated conic gradient border background */}
          <div className="absolute inset-[-1000%] bg-[conic-gradient(from_0deg,#3b82f6_0%,#8b5cf6_20%,transparent_40%,transparent_60%,#3b82f6_100%)] animate-spin-slow opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          {/* Inner content container */}
          <div className="relative p-2 rounded-[23px] flex items-center gap-0 backdrop-blur-2xl bg-[#060a16]/95">
            {NAV_LINKS.map(({ label, href, icon: Icon }, idx) => {
              const id = href.replace('#', '')
              const isActive = active === id
              const isNextActive = idx < NAV_LINKS.length - 1 && active === NAV_LINKS[idx + 1].href.replace('#', '')

              return (
                <div key={href} className="flex items-center">
                  <button
                    onClick={() => scrollTo(href)}
                    className={`group relative flex flex-col items-center justify-center w-[72px] h-[62px] pb-1.5 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                      isActive
                        ? 'bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white rounded-[16px] shadow-[0_8px_20px_rgba(37,99,235,0.4)] border border-blue-400/20'
                        : 'text-slate-400 hover:text-white hover:bg-white/5 rounded-[16px]'
                    }`}
                    aria-label={label}
                  >
                    <Icon 
                      size={18} 
                      className={`transition-all duration-300 ${
                        isActive 
                          ? 'scale-110 text-white mb-0.5' 
                          : 'group-hover:scale-110 text-slate-400 group-hover:text-white mb-1'
                      }`} 
                      strokeWidth={isActive ? 2.2 : 2} 
                    />
                    
                    <span 
                      className={`text-[10px] tracking-wide transition-all duration-300 ${
                        isActive 
                          ? 'font-bold text-white' 
                          : 'font-medium text-slate-400 group-hover:text-white'
                      }`}
                    >
                      {label}
                    </span>

                    {/* Active indicator dot/pill (absolute positioned to prevent vertical shift of the icon/text) */}
                    {isActive && (
                      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-3.5 h-[2.5px] rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-fade-in" />
                    )}
                  </button>

                  {/* Divider Line */}
                  {idx < NAV_LINKS.length - 1 && (
                    <div 
                      className={`w-[1px] h-6 bg-white/10 mx-0.5 transition-all duration-300 self-center ${
                        isActive || isNextActive ? 'opacity-0 scale-y-75' : 'opacity-100'
                      }`}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
}

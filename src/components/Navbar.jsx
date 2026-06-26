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
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-blue-500/30">
              IB
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
          className="flex items-center gap-3 group"
          aria-label="Go to top"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-black shadow-lg shadow-blue-500/40 group-hover:shadow-blue-500/60 transition-all group-hover:scale-105">
            IB
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
        <div className="glass px-2 py-2 rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center gap-1.5 backdrop-blur-xl bg-[#0a0f1e]/80">
          {NAV_LINKS.map(({ label, href, icon: Icon }) => {
            const id = href.replace('#', '')
            const isActive = active === id
            return (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className={`group relative flex items-center gap-0 px-3.5 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30 shadow-inner'
                    : 'text-slate-400 hover:text-white hover:bg-white/10 border border-transparent'
                }`}
                aria-label={label}
              >
                <Icon size={18} className={`transition-transform duration-300 ${isActive ? 'scale-110 text-blue-400' : 'group-hover:scale-110'}`} strokeWidth={isActive ? 2.5 : 2} />
                
                {/* Expanding text on hover or active */}
                <span 
                  className={`overflow-hidden whitespace-nowrap transition-all duration-300 font-bold text-xs tracking-wide ${
                    isActive 
                      ? 'max-w-[120px] opacity-100 ml-2' 
                      : 'max-w-0 opacity-0 group-hover:max-w-[120px] group-hover:opacity-100 group-hover:ml-2'
                  }`}
                >
                  {label}
                </span>

                {/* Active indicator dot */}
                {isActive && (
                  <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-t-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,1)]" />
                )}
              </button>
            )
          })}
        </div>
      </nav>
    </header>
  )
}

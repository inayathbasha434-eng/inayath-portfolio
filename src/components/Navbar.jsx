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
                      ? 'text-white glow-active-tab'
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

      {/* Top Floating Navigation Header (Fixed) */}
      <nav 
        className={`hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isDockVisible ? 'translate-y-0 opacity-100' : '-translate-y-[150%] opacity-0 pointer-events-none'
        }`}
        aria-label="Desktop navigation"
      >
        <div className="glow-navbar p-1.5 rounded-[24px] flex items-center backdrop-blur-xl">
          {NAV_LINKS.map(({ label, href, icon: Icon }, index) => {
            const id = href.replace('#', '')
            const isActive = active === id
            const isNotLast = index < NAV_LINKS.length - 1
            return (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className={`group relative flex flex-col items-center justify-center pt-2.5 pb-2 px-5 rounded-2xl transition-all duration-300 min-w-[76px] sm:min-w-[84px] h-[60px] ${
                  isNotLast ? 'tab-divider' : ''
                } ${
                  isActive
                    ? 'glow-active-tab text-white'
                    : 'text-slate-400 hover:text-slate-200 border border-transparent'
                }`}
                aria-label={label}
              >
                <Icon 
                  size={18} 
                  className={`transition-all duration-300 ${
                    isActive 
                      ? 'scale-110 text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]' 
                      : 'group-hover:scale-110'
                  }`} 
                  strokeWidth={isActive ? 2.5 : 2} 
                />
                
                <span 
                  className={`text-[10px] font-bold mt-1 tracking-wider uppercase transition-colors duration-300 ${
                    isActive ? 'text-white font-black' : 'text-slate-400'
                  }`}
                >
                  {label}
                </span>

                {/* Active bottom glowing pill */}
                {isActive && (
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-[2.5px] rounded-full bg-blue-400 glow-active-pill" />
                )}
              </button>
            )
          })}
        </div>
      </nav>
    </header>
  )
}

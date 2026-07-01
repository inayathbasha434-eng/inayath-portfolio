import { Mail, Phone, Linkedin, MapPin, Heart } from 'lucide-react'

const WHATSAPP_NUM = '919345704295'
const EMAIL = 'inayathbasha434@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/inayath-basha-a-53051824a/'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: "Let's Talk", href: '#contact' },
]

function scrollTo(href) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Footer() {
  return (
    <footer className="bg-[#060b16] border-t border-white/5 relative z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-24 sm:pb-12">
        
        {/* Desktop Layout: 3 Columns. Mobile Layout: Stacked, Centered, Minimized */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8 sm:gap-10 mb-8 sm:mb-10 text-center sm:text-left">
          
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start max-w-xs">
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/30">
                IB
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm sm:text-base">Inayath Basha A</p>
                <p className="text-blue-400 font-semibold text-[10px] sm:text-xs uppercase tracking-wider">Shopify Developer</p>
              </div>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 hidden sm:block">
              Turning ideas into beautiful digital experiences. Let's build something amazing together.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-slate-500 text-[10px] sm:text-xs font-medium uppercase tracking-widest">
              <MapPin size={12} className="text-blue-400" />
              Erode, Tamil Nadu
            </div>
          </div>

          {/* Quick Links (Hidden on Mobile) */}
          <div className="hidden sm:block">
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                  <button
                    key={href}
                    onClick={() => scrollTo(href)}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors text-left"
                  >
                    {label}
                  </button>
              ))}
            </div>
          </div>

          {/* Contact (Icon Row on Mobile, Full List on Desktop) */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-white font-semibold text-sm mb-4 hidden sm:block">Connect</h4>
            
            {/* Desktop Full List */}
            <div className="hidden sm:flex flex-col space-y-3">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 text-sm transition-colors group">
                <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                  <Mail size={13} className="text-blue-400" />
                </div>
                {EMAIL}
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUM}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-slate-400 hover:text-green-400 text-sm transition-colors group">
                <div className="p-1.5 rounded-lg bg-green-500/10 border border-green-500/20 group-hover:border-green-500/40 transition-colors">
                  <Phone size={13} className="text-green-400" />
                </div>
                +91 9345704295
              </a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 text-sm transition-colors group">
                <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                  <Linkedin size={13} className="text-blue-400" />
                </div>
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <p className="text-slate-500 text-[10px] sm:text-xs">
            &copy; 2026 Inayath Basha A. All rights reserved.
          </p>
          <p className="text-slate-600 text-[10px] sm:text-xs flex items-center gap-1">
            Made with <Heart size={10} className="text-red-500 fill-red-500 animate-pulse" /> in Erode
          </p>
        </div>
      </div>
    </footer>
  )
}

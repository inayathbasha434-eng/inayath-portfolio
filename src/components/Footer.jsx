import { Mail, Phone, Linkedin, MapPin, Heart } from 'lucide-react'

const WHATSAPP_NUM = '919345704295'
const EMAIL = 'inayathbasha434@gmail.com'
const LINKEDIN = 'https://linkedin.com/in/inayathbasha'

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
    <footer className="bg-[#060b16] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/30">
                IB
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Inayath Basha A</p>
                <p className="text-slate-500 text-xs">Shopify Developer</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-xs">
              Turning ideas into beautiful digital experiences. Let's build something amazing together.
            </p>
            <div className="flex items-center gap-1.5 text-slate-500 text-xs">
              <MapPin size={12} className="text-blue-400" />
              Erode, Tamil Nadu, India
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors py-2 block w-full text-left sm:py-0"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 text-sm transition-colors group py-1.5 break-all sm:py-0 sm:break-normal"
              >
                <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                  <Mail size={13} className="text-blue-400" />
                </div>
                {EMAIL}
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUM}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-400 hover:text-green-400 text-sm transition-colors group py-1.5 sm:py-0"
              >
                <div className="p-1.5 rounded-lg bg-green-500/10 border border-green-500/20 group-hover:border-green-500/40 transition-colors">
                  <Phone size={13} className="text-green-400" />
                </div>
                +91 9345704295
              </a>

              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 text-sm transition-colors group py-1.5 break-all sm:py-0 sm:break-normal"
              >
                <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                  <Linkedin size={13} className="text-blue-400" />
                </div>
                linkedin.com/in/inayathbasha
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-slate-500 text-xs">
            &copy; 2026 Inayath Basha A. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Made with <Heart size={10} className="text-red-500 fill-red-500" /> in Erode, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  )
}

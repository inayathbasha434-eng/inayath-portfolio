import { useEffect, useRef, useState } from 'react'
import { Mail, Linkedin, Instagram, Github, Send, Check, ArrowRight, MapPin, Clock } from 'lucide-react'

const WHATSAPP_NUM = '919345704295'
const EMAIL = 'inayathbasha434@gmail.com'
const LINKEDIN = 'https://linkedin.com/in/inayathbasha'

const CHANNELS = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: 'WhatsApp',
    sub: 'Quick reply',
    href: `https://wa.me/${WHATSAPP_NUM}`,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
    hover: 'hover:bg-green-500 hover:text-white hover:border-green-500',
  },
  {
    icon: <Mail size={20} />,
    label: 'Email',
    sub: 'inayathbasha434@gmail.com',
    href: `mailto:${EMAIL}`,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    hover: 'hover:bg-blue-600 hover:text-white hover:border-blue-600',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    sub: 'Connect professionally',
    href: LINKEDIN,
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
    hover: 'hover:bg-[#0a66c2] hover:text-white hover:border-[#0a66c2]',
  },
  {
    icon: <Instagram size={20} />,
    label: 'Instagram',
    sub: '@inayathbasha_a',
    href: 'https://instagram.com/inayathbasha_a',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    hover: 'hover:bg-[#e1306c] hover:text-white hover:border-[#e1306c]',
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    sub: 'View my code',
    href: 'https://github.com/inayathbasha',
    color: 'text-slate-300',
    bg: 'bg-white/5',
    border: 'border-white/10',
    hover: 'hover:bg-white hover:text-slate-900 hover:border-white',
  },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const elements = section.querySelectorAll('.fade-in')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1500)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-[#0c1224] scroll-mt-16 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section header */}
        <div className="text-center mb-14 fade-in">
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-3 leading-tight">
            Let's <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Build Together</span>
          </h2>
          <p className="text-slate-400 max-w-sm mx-auto text-sm">
            Have a project in mind? Drop me a message or reach out directly — I'd love to hear about it.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">

          {/* LEFT — Contact Form */}
          <div className="lg:col-span-7 fade-in">
            <div className="relative bg-[#0d1426]/80 border border-white/8 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
              {/* Card glow accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 mb-5 shadow-lg shadow-green-500/10">
                    <Check size={32} />
                  </div>
                  <h3 className="text-white font-black text-xl mb-2">Message Sent! 🎉</h3>
                  <p className="text-slate-400 text-sm max-w-xs">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-white font-bold text-lg">Send a Message</h3>
                    <p className="text-slate-500 text-xs mt-1">I'll reply within 24 hours.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full bg-[#080d1a] border border-white/8 focus:border-blue-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="hello@example.com"
                          className="w-full bg-[#080d1a] border border-white/8 focus:border-blue-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Tell me about your project..."
                        className="w-full bg-[#080d1a] border border-white/8 focus:border-blue-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="group w-full shine min-h-[50px] bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5"
                    >
                      <Send size={15} />
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                      {status !== 'sending' && (
                        <ArrowRight size={14} className="text-blue-200 group-hover:translate-x-1 transition-transform" />
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* RIGHT — Info panel */}
          <div className="lg:col-span-5 flex flex-col gap-5 fade-in">

            {/* Quick info */}
            <div className="bg-[#0d1426]/60 border border-white/5 rounded-2xl p-5 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-green-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Fast Response</p>
                  <p className="text-slate-500 text-xs">Usually within a few hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Based in Tamil Nadu, India</p>
                  <p className="text-slate-500 text-xs">Working with clients worldwide</p>
                </div>
              </div>
            </div>

            {/* Direct channels */}
            <div className="bg-[#0d1426]/60 border border-white/5 rounded-2xl p-5">
              <p className="text-white font-bold text-sm mb-4">Direct Channels</p>
              <div className="flex flex-wrap gap-2.5">
                {CHANNELS.map((ch) => (
                  <a
                    key={ch.label}
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={ch.label}
                    title={ch.label}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${ch.color} ${ch.bg} ${ch.border} ${ch.hover}`}
                  >
                    {ch.icon}
                    <span>{ch.label}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Inayath Basha A",
            "url": "https://inayathbasha.vercel.app",
            "telephone": "+919345704295",
            "email": "inayathbasha434@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Erode",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "priceRange": "$$",
            "areaServed": "Worldwide"
          })
        }}
      />
    </section>
  )
}

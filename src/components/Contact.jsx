import { useEffect, useRef, useState } from 'react'
import { Mail, Linkedin, Instagram, Github, MessageSquare, Check } from 'lucide-react'
const WHATSAPP_NUM = '919345704295'
const EMAIL = 'inayathbasha434@gmail.com'
const LINKEDIN = 'https://linkedin.com/in/inayathbasha'

export default function Contact() {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle, sending, success

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const elements = section.querySelectorAll('.fade-in')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate API submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      // Reset success status after a delay
      setTimeout(() => setStatus('idle'), 5000)
    }, 1500)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-[#080d1a] scroll-mt-16 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-14 fade-in">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-3">
            Let's <span className="text-gradient">Talk</span>
          </h2>
          <p className="text-slate-400 max-w-sm mx-auto text-sm sm:text-base">
            Have a project in mind? I'd love to hear about it and help you build it.
          </p>
        </div>

        {/* Form + Direct Channels Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Form Card (Left) */}
          <div className="md:col-span-7 bg-[#0d1426]/70 border border-white/10 rounded-2xl p-6 sm:p-8 text-left shadow-2xl relative overflow-hidden fade-in">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 mb-4 animate-bounce">
                  <Check size={32} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
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
                    placeholder="Inayath Basha"
                    className="w-full bg-[#080d1a] border border-white/10 focus:border-blue-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
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
                    className="w-full bg-[#080d1a] border border-white/10 focus:border-blue-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                  />
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
                    className="w-full bg-[#080d1a] border border-white/10 focus:border-blue-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full shine min-h-[48px] bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <MessageSquare size={16} />
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Socials / Direct Channels (Right) */}
          <div className="md:col-span-5 flex flex-col gap-6 text-left fade-in">
            <div className="bg-[#0d1426]/70 border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 shadow-xl">
              <h3 className="text-white font-bold text-base">Direct Channels</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Prefer direct communication? Click any of the channels below to reach me instantly.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-2">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUM}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact on WhatsApp"
                  className="w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-[#0f0] bg-opacity-[0.06] border border-green-500/30 text-green-400 shadow-md shadow-green-500/5 hover:shadow-green-500/30 hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:scale-95"
                >
                  {/* WhatsApp SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5.5 h-5.5 sm:w-6 sm:h-6"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect on LinkedIn"
                  className="w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-[#0a66c2] bg-opacity-[0.06] border border-[#0a66c2]/40 text-blue-400 shadow-md shadow-blue-500/5 hover:shadow-blue-500/30 hover:bg-[#0a66c2] hover:text-white transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:scale-95"
                >
                  <Linkedin size={22} className="w-5.5 h-5.5 sm:w-6 sm:h-6" />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/inayathbasha_a"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect on Instagram"
                  className="w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-[#e1306c] bg-opacity-[0.06] border border-[#e1306c]/40 text-pink-400 shadow-md shadow-pink-500/5 hover:shadow-pink-500/30 hover:bg-[#e1306c] hover:text-white transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:scale-95"
                >
                  <Instagram size={22} className="w-5.5 h-5.5 sm:w-6 sm:h-6" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/inayathbasha"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect on GitHub"
                  className="w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-white bg-opacity-[0.04] border border-white/20 text-slate-300 shadow-md hover:shadow-slate-500/10 hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:scale-95"
                >
                  <Github size={22} className="w-5.5 h-5.5 sm:w-6 sm:h-6" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${EMAIL}`}
                  aria-label="Send an Email"
                  className="w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-blue-500 bg-opacity-[0.06] border border-blue-500/30 text-blue-300 shadow-md shadow-blue-500/5 hover:shadow-blue-500/30 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:scale-95"
                >
                  <Mail size={22} className="w-5.5 h-5.5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>
          
        </div>

      </div>

      {/* Professional Service Contact Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Inayath Basha A",
            "image": "https://inayathbasha.vercel.app/ChatGPT_Image_Jun_16,_2026,_03_11_34_PM.png",
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

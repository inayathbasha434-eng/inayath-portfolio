import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, MessageSquare, Check, ArrowRight, Phone } from 'lucide-react'

const WHATSAPP_NUM = '919345704295'
const EMAIL = 'inayathbasha434@gmail.com'
const LINKEDIN = 'https://linkedin.com/in/inayathbasha'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle, sending, success

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
      setTimeout(() => setStatus('idle'), 5000)
    }, 1500)
  }

  const channels = [
    {
      name: 'WhatsApp',
      action: 'Chat on WhatsApp',
      detail: '+91 9345704295',
      href: `https://wa.me/${WHATSAPP_NUM}`,
      icon: Phone,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'hover:border-green-500/35 hover:shadow-green-500/5',
    },
    {
      name: 'Email',
      action: 'Send an Email',
      detail: EMAIL,
      href: `mailto:${EMAIL}`,
      icon: Mail,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'hover:border-blue-500/35 hover:shadow-blue-500/5',
    },
    {
      name: 'LinkedIn',
      action: 'Connect on LinkedIn',
      detail: 'linkedin.com/in/inayathbasha',
      href: LINKEDIN,
      icon: Linkedin,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'hover:border-indigo-500/35 hover:shadow-indigo-500/5',
    },
  ]

  return (
    <section id="contact" className="py-24 bg-[#080d1a] scroll-mt-16 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest block">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-3">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
            Have a project in mind? Let's turn your vision into a high-converting storefront. Reach out via the form or select a direct channel below.
          </p>
        </div>

        {/* Form + Direct Channels Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto mt-10">
          
          {/* Form Card (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 bg-[#0d1426]/75 border border-white/10 rounded-2xl p-6 sm:p-8 text-left shadow-2xl relative overflow-hidden flex flex-col justify-center"
          >
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
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-450 mb-2 uppercase tracking-wide">
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
                    className="w-full bg-[#080d1a] border border-white/10 focus:border-blue-500/40 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-650 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-455 mb-2 uppercase tracking-wide">
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
                    className="w-full bg-[#080d1a] border border-white/10 focus:border-blue-500/40 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-655 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-460 mb-2 uppercase tracking-wide">
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
                    className="w-full bg-[#080d1a] border border-white/10 focus:border-blue-500/40 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-660 focus:outline-none transition-colors resize-none"
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
          </motion.div>

          {/* Socials / Direct Channels (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex flex-col justify-between gap-4"
          >
            <div className="bg-[#0d1426]/75 border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full shadow-xl">
              <div className="space-y-2 mb-6">
                <h3 className="text-white font-bold text-lg text-left">Direct Channels</h3>
                <p className="text-slate-400 text-xs sm:text-sm text-left leading-relaxed">
                  Prefer direct communication? Click any of the channels below to reach me instantly.
                </p>
              </div>
              
              <div className="flex flex-col gap-3.5">
                {channels.map((chan) => {
                  const Icon = chan.icon
                  return (
                    <a
                      key={chan.name}
                      href={chan.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group border border-white/5 bg-white/4 rounded-2xl p-4 transition-all duration-300 flex items-center justify-between text-left ${chan.borderColor}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${chan.bgColor} ${chan.color}`}>
                          <Icon size={20} />
                        </div>
                        <div>
                          <p className="text-white font-bold text-sm">{chan.action}</p>
                          <p className="text-slate-500 text-xs mt-0.5">{chan.detail}</p>
                        </div>
                      </div>
                      <ArrowRight size={16} className="text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>
          
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

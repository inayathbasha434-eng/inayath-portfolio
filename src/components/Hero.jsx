import { useEffect, useState } from 'react'
import { ShoppingBag, ArrowDown, MessageSquare } from 'lucide-react'

const STATS = [
  { value: '3+', label: 'Projects' },
  { value: '100%', label: 'Trust' },
]

const PHOTO = "/ChatGPT_Image_Jun_16,_2026,_03_11_34_PM.png"

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0f1e] scroll-mt-16"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Glowing blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

          {/* ── Text content ── */}
          <div
            className={`flex-1 text-center md:text-left flex flex-col items-center md:items-start transition-all duration-700 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Top Badges */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-[11px] font-semibold px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Available for Freelance
              </div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-slate-300 text-[11px] font-medium px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
                👋 Hello, I'm
              </div>
            </div>

            {/* Name */}
            <h1 className="text-[3.2rem] sm:text-6xl lg:text-[5.5rem] font-extrabold leading-[1.05] mb-5 tracking-tight flex flex-col md:block">
              <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">Inayath </span>
              <span
                className="relative inline-block ml-0 md:ml-3 mt-1 md:mt-0"
                style={{
                  background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #93c5fd 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 2px 15px rgba(59, 130, 246, 0.4))',
                }}
              >
                Basha
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-xl text-center md:text-left mx-auto md:mx-0 mb-8 mt-2 px-4 md:px-0">
              Your Vision. My Execution. Real Results.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center md:justify-start mb-10 w-full">
              <button
                onClick={scrollToContact}
                aria-label="Let's Connect"
                className="shine group min-h-[52px] px-10 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] active:scale-95 text-sm tracking-wider flex items-center gap-2.5"
              >
                <MessageSquare size={16} className="text-blue-200 group-hover:scale-110 transition-transform" />
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Stats strip */}
            <div className="flex justify-center md:justify-start gap-8 sm:gap-12 w-full">
              {STATS.map(({ value, label }, i) => (
                <div key={label} className="text-center relative">
                  {i > 0 && (
                    <div className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-px h-8 bg-white/10" />
                  )}
                  <div
                    className="text-2xl sm:text-3xl font-extrabold"
                    style={{
                      background: 'linear-gradient(135deg, #60a5fa, #93c5fd)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {value}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5 font-medium uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Profile photo ── */}
          <div
            className={`flex-shrink-0 flex flex-col items-center gap-4 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Tilt wrapper — mouse tilt on desktop only */}
            <div
              className="relative cursor-pointer group select-none"
              style={{ perspective: '1200px' }}
              onMouseMove={(e) => {
                if (window.innerWidth < 768) return
                const card = e.currentTarget
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const rotateX = -((y - rect.height / 2) / rect.height) * 16
                const rotateY = ((x - rect.width / 2) / rect.width) * 16
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
                const shine = card.querySelector('.specs-glow')
                if (shine) shine.style.background = `radial-gradient(circle 80px at ${x}px ${y}px, rgba(255,255,255,0.15), transparent 80%)`
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget
                card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'
                card.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
                const shine = card.querySelector('.specs-glow')
                if (shine) shine.style.background = 'transparent'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transition = 'none' }}
              onClick={() => setIsFlipped(f => !f)}
            >
              {/* Outer glow */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-700/20 blur-2xl pointer-events-none animate-glow group-hover:scale-110 transition-transform duration-300" />

              {/* Pulsing ring */}
              <div className="absolute -inset-6 rounded-full border border-blue-500/20 pointer-events-none animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.15)]" style={{ animationDuration: '3s' }} />

              {/* Slow reverse dashed ring */}
              <div className="absolute -inset-5 rounded-full border border-dashed border-blue-500/15 pointer-events-none animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />

              {/* Fast dashed ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-blue-500/20 pointer-events-none animate-spin" style={{ animationDuration: '20s' }} />

              {/* ── COIN (flip container — completely separate from tilt) ── */}
              <div
                className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full"
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.75s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Specular light */}
                <div className="specs-glow absolute inset-0 z-20 pointer-events-none rounded-full transition-all duration-100" />

                {/* ── FRONT FACE — Photo ── */}
                <div
                  className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 overflow-hidden shadow-2xl"
                  style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0d1426]">
                    <img
                      src={PHOTO}
                      alt="Inayath Basha"
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.nextElementSibling.style.display = 'flex'
                      }}
                    />
                    <div className="w-full h-full items-center justify-center bg-gradient-to-br from-blue-900 to-[#0a0f1e] hidden">
                      <span className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600">IB</span>
                    </div>
                  </div>
                </div>

                {/* ── BACK FACE — Radial Burst HUD ── */}
                <div
                  className="absolute inset-0 rounded-full p-[3px] overflow-hidden shadow-2xl"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 40%, #ec4899 70%, #f97316 100%)',
                  }}
                >
                  <div className="w-full h-full rounded-full bg-[#06091a] relative overflow-hidden">

                    {/* SVG Radial lines + dots */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 240" fill="none">
                      <defs>
                        {/* Glow filters */}
                        <filter id="glowCyan"><feGaussianBlur stdDeviation="2.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                        <filter id="glowPink"><feGaussianBlur stdDeviation="2.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                        <filter id="glowGreen"><feGaussianBlur stdDeviation="2.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                        <filter id="glowOrange"><feGaussianBlur stdDeviation="2.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                        {/* Animated gradients for lines */}
                        <linearGradient id="lineCyan" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0"/>
                          <stop offset="100%" stopColor="#67e8f9"/>
                        </linearGradient>
                        <linearGradient id="linePink" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#ec4899" stopOpacity="0"/>
                          <stop offset="100%" stopColor="#f9a8d4"/>
                        </linearGradient>
                        <linearGradient id="lineGreen" x1="0%" y1="100%" x2="0%" y2="0%">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0"/>
                          <stop offset="100%" stopColor="#6ee7b7"/>
                        </linearGradient>
                        <linearGradient id="lineOrange" x1="100%" y1="0%" x2="0%" y2="0%">
                          <stop offset="0%" stopColor="#f97316" stopOpacity="0"/>
                          <stop offset="100%" stopColor="#fcd34d"/>
                        </linearGradient>
                      </defs>

                      {/* Subtle outer orbit ring */}
                      <circle cx="120" cy="120" r="100" stroke="white" strokeOpacity="0.04" strokeWidth="1" fill="none"/>
                      <circle cx="120" cy="120" r="72" stroke="white" strokeOpacity="0.06" strokeWidth="0.5" strokeDasharray="4 6" fill="none"/>

                      {/* ── TOP: Shopify Expert (Cyan, 12 o'clock) ── */}
                      <line x1="120" y1="120" x2="120" y2="32" stroke="url(#lineCyan)" strokeWidth="1.5" filter="url(#glowCyan)" strokeLinecap="round"/>
                      <circle cx="120" cy="32" r="4" fill="#06b6d4" filter="url(#glowCyan)"/>
                      <circle cx="120" cy="32" r="7" stroke="#06b6d4" strokeOpacity="0.35" strokeWidth="1" fill="none"/>

                      {/* ── RIGHT: Designer (Pink, 3 o'clock) ── */}
                      <line x1="120" y1="120" x2="208" y2="120" stroke="url(#linePink)" strokeWidth="1.5" filter="url(#glowPink)" strokeLinecap="round"/>
                      <circle cx="208" cy="120" r="4" fill="#ec4899" filter="url(#glowPink)"/>
                      <circle cx="208" cy="120" r="7" stroke="#ec4899" strokeOpacity="0.35" strokeWidth="1" fill="none"/>

                      {/* ── BOTTOM: Web Developer (Green, 6 o'clock) ── */}
                      <line x1="120" y1="120" x2="120" y2="208" stroke="url(#lineGreen)" strokeWidth="1.5" filter="url(#glowGreen)" strokeLinecap="round"/>
                      <circle cx="120" cy="208" r="4" fill="#10b981" filter="url(#glowGreen)"/>
                      <circle cx="120" cy="208" r="7" stroke="#10b981" strokeOpacity="0.35" strokeWidth="1" fill="none"/>

                      {/* ── LEFT: Digital Creative (Orange, 9 o'clock) ── */}
                      <line x1="120" y1="120" x2="32" y2="120" stroke="url(#lineOrange)" strokeWidth="1.5" filter="url(#glowOrange)" strokeLinecap="round"/>
                      <circle cx="32" cy="120" r="4" fill="#f97316" filter="url(#glowOrange)"/>
                      <circle cx="32" cy="120" r="7" stroke="#f97316" strokeOpacity="0.35" strokeWidth="1" fill="none"/>

                      {/* Center orb ring */}
                      <circle cx="120" cy="120" r="26" stroke="white" strokeOpacity="0.08" strokeWidth="1" fill="none"/>
                      <circle cx="120" cy="120" r="20" stroke="white" strokeOpacity="0.12" strokeWidth="1" fill="none"/>
                    </svg>

                    {/* Center IB orb */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative flex items-center justify-center w-16 h-16 sm:w-[72px] sm:h-[72px]">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/60 to-purple-600/60 blur-md animate-pulse" />
                        <div className="relative w-full h-full rounded-full border border-white/15 bg-[#0a0f1e]/90 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                          <span className="text-xl sm:text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-300">IB</span>
                        </div>
                      </div>
                    </div>

                    {/* ── LABELS ── */}
                    {/* TOP — Shopify Expert */}
                    <div className="absolute top-[4px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5">
                      <span className="text-[9px] sm:text-[10px] font-black tracking-wider uppercase whitespace-nowrap" style={{ color: '#67e8f9', textShadow: '0 0 8px rgba(6,182,212,0.8)' }}>Shopify Expert</span>
                    </div>

                    {/* RIGHT — Designer */}
                    <div className="absolute right-[4px] top-1/2 -translate-y-1/2 flex flex-col items-center gap-0.5">
                      <span className="text-[9px] sm:text-[10px] font-black tracking-wider uppercase whitespace-nowrap" style={{ color: '#f9a8d4', textShadow: '0 0 8px rgba(236,72,153,0.8)' }}>Designer</span>
                    </div>

                    {/* BOTTOM — Web Developer */}
                    <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5">
                      <span className="text-[9px] sm:text-[10px] font-black tracking-wider uppercase whitespace-nowrap" style={{ color: '#6ee7b7', textShadow: '0 0 8px rgba(16,185,129,0.8)' }}>Web Developer</span>
                    </div>

                    {/* LEFT — Digital Creative */}
                    <div className="absolute left-[4px] top-1/2 -translate-y-1/2 flex flex-col items-center gap-0.5">
                      <span className="text-[9px] sm:text-[10px] font-black tracking-wider uppercase whitespace-nowrap" style={{ color: '#fcd34d', textShadow: '0 0 8px rgba(249,115,22,0.8)' }}>Digital Creative</span>
                    </div>

                  </div>
                </div>
              </div>

              {/* ── TAP ME hint badge (front) ── */}
              {!isFlipped && (
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full shadow-lg animate-bounce pointer-events-none">
                  <span className="text-[10px] text-white font-bold tracking-wider uppercase">👆 Tap Me</span>
                </div>
              )}

              {/* ── Flip back hint (back) ── */}
              {isFlipped && (
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 bg-purple-500/20 backdrop-blur-md border border-purple-400/30 px-3 py-1 rounded-full shadow-lg animate-bounce pointer-events-none">
                  <span className="text-[10px] text-purple-200 font-bold tracking-wider uppercase">🔄 Tap again</span>
                </div>
              )}

              {/* Accent badges (fade out when flipped) */}
              <div className={`absolute -top-1 -right-1 flex items-center gap-1 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg shadow-blue-500/40 z-30 transition-all duration-500 ${isFlipped ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100 group-hover:translate-x-1 group-hover:-translate-y-1'}`}>
                <span>Founder & Dev</span>
              </div>
              <div className={`absolute -bottom-1 -left-2 flex items-center gap-1.5 bg-[#0d1426] border border-white/10 text-slate-300 text-xs font-medium px-3 py-1.5 rounded-full shadow-lg z-30 transition-all duration-500 ${isFlipped ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100 group-hover:-translate-x-1 group-hover:translate-y-1'}`}>
                <ShoppingBag size={11} className="text-blue-400" />
                Shopify Expert
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 md:mt-20">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-blue-400 transition-colors"
            aria-label="Scroll to about"
          >
            <span className="text-xs tracking-widest uppercase">Scroll Down</span>
            <ArrowDown size={16} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}

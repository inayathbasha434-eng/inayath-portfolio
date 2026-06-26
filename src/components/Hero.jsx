import { useEffect, useState } from 'react'
import { ShoppingBag, ArrowDown, MessageSquare, ArrowRight, BadgeCheck } from 'lucide-react'

const PHOTO = "/ChatGPT_Image_Jun_16,_2026,_03_11_34_PM.png"

export default function Hero() {
  const [revealStep, setRevealStep] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [terminalLines, setTerminalLines] = useState(0)

  // Sequence terminal lines appearing after flip
  useEffect(() => {
    if (!isFlipped) { setTerminalLines(0); return }
    const timers = []
    timers.push(setTimeout(() => setTerminalLines(1), 400))
    timers.push(setTimeout(() => setTerminalLines(2), 900))
    timers.push(setTimeout(() => setTerminalLines(3), 1400))
    timers.push(setTimeout(() => setTerminalLines(4), 1900))
    return () => timers.forEach(clearTimeout)
  }, [isFlipped])

  useEffect(() => {
    const timers = []
    timers.push(setTimeout(() => setRevealStep(1), 100))  // Badges
    timers.push(setTimeout(() => setRevealStep(2), 300))  // Inayath
    timers.push(setTimeout(() => setRevealStep(3), 500))  // Basha
    timers.push(setTimeout(() => setRevealStep(4), 700))  // Subheading
    timers.push(setTimeout(() => setRevealStep(5), 900))  // Buttons & Stats
    timers.push(setTimeout(() => setRevealStep(6), 1100)) // Photo
    return () => timers.forEach(clearTimeout)
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
          <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
            {/* Top Badges */}
            <div className={`flex flex-col sm:flex-row items-center gap-3 mb-5 transition-all duration-700 ease-out ${revealStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 bg-[#121c2d] border border-white/5 text-green-400 text-[11px] font-semibold px-4 py-1.5 rounded-full shadow-sm">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Available for Freelance
              </div>
              
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] font-semibold px-4 py-1.5 rounded-full shadow-sm shadow-emerald-950/5">
                <BadgeCheck size={13} className="text-emerald-400 animate-pulse" />
                100% Client Satisfaction &amp; Trust
              </div>
            </div>

            {/* Greeting */}
            <div className={`text-slate-300 text-lg md:text-xl font-medium mb-1 transition-all duration-700 ease-out ${revealStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Hello, World! 👋 I'm
            </div>

            {/* Name */}
            <h1 className="text-[3.5rem] sm:text-6xl lg:text-[5.5rem] font-extrabold leading-[1.1] mb-5 tracking-tight overflow-hidden pb-2 text-center md:text-left">
              <span className={`block text-white transition-transform duration-700 ease-out ${revealStep >= 2 ? 'translate-y-0' : 'translate-y-[120%]'}`}>
                Inayath
              </span>
              <span
                className={`block text-[#60a5fa] transition-transform duration-700 ease-out ${revealStep >= 3 ? 'translate-y-0' : 'translate-y-[120%]'}`}
              >
                Basha A
              </span>
            </h1>

            {/* Subheading */}
            <p className={`text-slate-300 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-xl text-center md:text-left mx-auto md:mx-0 mb-8 mt-2 px-4 md:px-0 transition-all duration-700 ease-out ${revealStep >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Your ideas. <span className="text-[#60a5fa]">My execution.</span> Real results.
            </p>

            {/* CTA Button */}
            <div className={`flex justify-center md:justify-start mb-6 w-full transition-all duration-700 ease-out ${revealStep >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <button
                onClick={scrollToContact}
                aria-label="Let's Talk"
                className="group min-h-[50px] px-8 py-3 bg-[#4f75ff] text-white font-bold rounded-xl transition-all duration-300 hover:bg-[#4364db] active:scale-95 text-sm tracking-wide flex items-center gap-3 shadow-lg shadow-blue-500/20"
              >
                <MessageSquare size={16} className="text-white opacity-80 group-hover:scale-110 transition-transform" />
                <span>Let's Talk</span>
                <ArrowRight size={16} className="text-white opacity-80 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* ── Profile photo ── */}
          <div
            className={`flex-shrink-0 flex flex-col items-center gap-4 transition-all duration-1000 ease-out ${
              revealStep >= 6 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
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

                {/* ── BACK FACE — Terminal (Portfolio Colors) ── */}
                <div
                  className="absolute inset-0 rounded-full p-[3px] overflow-hidden shadow-2xl"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)',
                  }}
                >
                  <div className="w-full h-full rounded-full bg-[#0a0f1e] flex flex-col justify-center px-5 sm:px-7 overflow-hidden" style={{ fontFamily: "'Courier New', monospace" }}>

                    {/* Terminal title bar */}
                    <div className="flex items-center gap-1.5 mb-3 pb-2 border-b border-blue-500/20">
                      <div className="w-2 h-2 rounded-full bg-red-500/80" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                      <div className="w-2 h-2 rounded-full bg-blue-500/80" />
                      <span className="text-[9px] font-bold ml-1 tracking-widest" style={{ background: 'linear-gradient(90deg,#60a5fa,#a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>inayath@portfolio ~</span>
                    </div>

                    {/* Prompt line */}
                    <div className="text-[10px] sm:text-[11px] mb-2 font-bold" style={{ color: '#60a5fa' }}>$ whoami --roles</div>

                    {/* Line 1 */}
                    <div className={`flex items-center gap-2 mb-1.5 transition-all duration-300 ${terminalLines >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}>
                      <span className="text-[10px] font-bold shrink-0" style={{ color: '#818cf8' }}>▶</span>
                      <span className="text-[10px] sm:text-[11px] font-bold" style={{ color: '#93c5fd' }}>Role:</span>
                      <span className="text-[10px] sm:text-[11px] text-white font-bold">Shopify Expert</span>
                      <span className="text-[10px] ml-auto font-black" style={{ color: '#34d399' }}>✓</span>
                    </div>

                    {/* Line 2 */}
                    <div className={`flex items-center gap-2 mb-1.5 transition-all duration-300 ${terminalLines >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}>
                      <span className="text-[10px] font-bold shrink-0" style={{ color: '#818cf8' }}>▶</span>
                      <span className="text-[10px] sm:text-[11px] font-bold" style={{ color: '#93c5fd' }}>Stack:</span>
                      <span className="text-[10px] sm:text-[11px] text-white font-bold">Web Developer</span>
                      <span className="text-[10px] ml-auto font-black" style={{ color: '#34d399' }}>✓</span>
                    </div>

                    {/* Line 3 */}
                    <div className={`flex items-center gap-2 mb-1.5 transition-all duration-300 ${terminalLines >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}>
                      <span className="text-[10px] font-bold shrink-0" style={{ color: '#818cf8' }}>▶</span>
                      <span className="text-[10px] sm:text-[11px] font-bold" style={{ color: '#93c5fd' }}>Skill:</span>
                      <span className="text-[10px] sm:text-[11px] text-white font-bold">Designer</span>
                      <span className="text-[10px] ml-auto font-black" style={{ color: '#34d399' }}>✓</span>
                    </div>

                    {/* Line 4 */}
                    <div className={`flex items-center gap-2 mb-3 transition-all duration-300 ${terminalLines >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}>
                      <span className="text-[10px] font-bold shrink-0" style={{ color: '#818cf8' }}>▶</span>
                      <span className="text-[10px] sm:text-[11px] font-bold" style={{ color: '#93c5fd' }}>Mode:</span>
                      <span className="text-[10px] sm:text-[11px] text-white font-bold">Digital Creative</span>
                      <span className="text-[10px] ml-auto font-black" style={{ color: '#34d399' }}>✓</span>
                    </div>

                    {/* Blinking cursor */}
                    <div className={`flex items-center gap-1 transition-opacity duration-300 ${terminalLines >= 4 ? 'opacity-100' : 'opacity-0'}`}>
                      <span className="text-[10px] font-bold" style={{ color: '#60a5fa' }}>$</span>
                      <span className="w-2 h-3.5 rounded-sm animate-pulse" style={{ backgroundColor: '#60a5fa', animationDuration: '0.8s' }} />
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

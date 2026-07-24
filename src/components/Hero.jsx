import { useEffect, useState, useRef } from 'react'
import { ShoppingBag, ArrowDown, MessageSquare, ArrowRight, BadgeCheck } from 'lucide-react'

const PHOTO = "/ChatGPT_Image_Jun_16,_2026,_03_11_34_PM.png"

export default function Hero() {
  const [revealStep, setRevealStep] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [terminalLines, setTerminalLines] = useState(0)
  const tiltRafRef = useRef(null)

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
    return () => {
      timers.forEach(clearTimeout)
      if (tiltRafRef.current) {
        cancelAnimationFrame(tiltRafRef.current)
      }
    }
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
                Available for Projects
              </div>
              
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] font-semibold px-4 py-1.5 rounded-full shadow-sm shadow-amber-950/5">
                <BadgeCheck size={13} className="text-amber-400 animate-pulse" />
                100% Client Satisfaction &amp; Trust
              </div>
            </div>

            {/* Greeting */}
            <div className={`text-slate-300 text-lg md:text-xl font-medium mb-1 transition-all duration-700 ease-out ${revealStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Hello, World! I'm
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

                if (tiltRafRef.current) {
                  cancelAnimationFrame(tiltRafRef.current)
                }

                tiltRafRef.current = requestAnimationFrame(() => {
                  const rotateX = -((y - rect.height / 2) / rect.height) * 16
                  const rotateY = ((x - rect.width / 2) / rect.width) * 16
                  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
                  const shine = card.querySelector('.specs-glow')
                  if (shine) {
                    shine.style.background = `radial-gradient(circle 80px at ${x}px ${y}px, rgba(255,255,255,0.15), transparent 80%)`
                  }
                })
              }}
              onMouseLeave={(e) => {
                if (tiltRafRef.current) {
                  cancelAnimationFrame(tiltRafRef.current)
                }
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
                  <div className="w-full h-full rounded-full bg-[#0a0f1e] flex items-center justify-center overflow-hidden">
                    <div className="w-[78%] h-[78%] sm:w-[82%] sm:h-[82%] flex flex-col justify-center text-left" style={{ fontFamily: "'Courier New', monospace" }}>

                      {/* Terminal title bar */}
                      <div className="flex items-center gap-1 mb-2.5 pb-1.5 border-b border-blue-500/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
                        <span className="text-[7.5px] sm:text-[9px] font-bold ml-1 tracking-widest" style={{ background: 'linear-gradient(90deg,#60a5fa,#a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>inayath@portfolio ~</span>
                      </div>

                      {/* Prompt line */}
                      <div className="text-[8.5px] sm:text-[10px] mb-2 font-bold" style={{ color: '#60a5fa' }}>$ whoami --roles</div>

                      {/* Line 1 */}
                      <div className={`flex items-center gap-1.5 mb-1 transition-all duration-300 ${terminalLines >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}>
                        <span className="text-[8px] sm:text-[10px] font-bold shrink-0" style={{ color: '#818cf8' }}>▶</span>
                        <span className="text-[8px] sm:text-[9.5px] font-black shrink-0" style={{ color: '#93c5fd' }}>Identity:</span>
                        <span className="text-[8px] sm:text-[9.5px] text-white font-bold whitespace-nowrap">Digital Entrepreneur</span>
                        <span className="text-[8px] sm:text-[10px] ml-auto font-black shrink-0" style={{ color: '#34d399' }}>✓</span>
                      </div>

                      {/* Line 2 */}
                      <div className={`flex items-center gap-1.5 mb-1 transition-all duration-300 ${terminalLines >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}>
                        <span className="text-[8px] sm:text-[10px] font-bold shrink-0" style={{ color: '#818cf8' }}>▶</span>
                        <span className="text-[8px] sm:text-[9.5px] font-black shrink-0" style={{ color: '#93c5fd' }}>Service:</span>
                        <span className="text-[8px] sm:text-[9.5px] text-white font-bold whitespace-nowrap">Digital Service Provider</span>
                        <span className="text-[8px] sm:text-[10px] ml-auto font-black shrink-0" style={{ color: '#34d399' }}>✓</span>
                      </div>

                      {/* Line 3 */}
                      <div className={`flex items-center gap-1.5 mb-1 transition-all duration-300 ${terminalLines >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}>
                        <span className="text-[8px] sm:text-[10px] font-bold shrink-0" style={{ color: '#818cf8' }}>▶</span>
                        <span className="text-[8px] sm:text-[9.5px] font-black shrink-0" style={{ color: '#93c5fd' }}>Expertise:</span>
                        <span className="text-[8px] sm:text-[9.5px] text-white font-bold whitespace-nowrap">Online Business Solutions</span>
                        <span className="text-[8px] sm:text-[10px] ml-auto font-black shrink-0" style={{ color: '#34d399' }}>✓</span>
                      </div>

                      {/* Line 4 */}
                      <div className={`flex items-center gap-1.5 mb-2 transition-all duration-300 ${terminalLines >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}>
                        <span className="text-[8px] sm:text-[10px] font-bold shrink-0" style={{ color: '#818cf8' }}>▶</span>
                        <span className="text-[8px] sm:text-[9.5px] font-black shrink-0" style={{ color: '#93c5fd' }}>Mission:</span>
                        <span className="text-[8px] sm:text-[9.5px] text-white font-bold whitespace-nowrap">Scaling Brands Online</span>
                        <span className="text-[8px] sm:text-[10px] ml-auto font-black shrink-0" style={{ color: '#34d399' }}>✓</span>
                      </div>

                      {/* Blinking cursor */}
                      <div className={`flex items-center gap-1 transition-opacity duration-300 ${terminalLines >= 4 ? 'opacity-100' : 'opacity-0'}`}>
                        <span className="text-[8.5px] sm:text-[10px] font-bold" style={{ color: '#60a5fa' }}>$</span>
                        <span className="w-1.5 h-3 rounded-sm animate-pulse" style={{ backgroundColor: '#60a5fa', animationDuration: '0.8s' }} />
                      </div>

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
                <svg viewBox="0 0 256 292" className="w-3.5 h-3.5 flex-shrink-0">
                  <path fill="#95BF47" d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.043 121.999 0 115.812 0 68.628 0 46.05 56.075 38.923 84.575L14.136 92.17c-7.364 2.302-7.59 2.528-8.554 9.499L0 285.267 197.115 292 256 278.075 223.774 57.34zm-60.088-16.332c-4.136 1.273-8.829 2.722-13.883 4.281V43.02c0-6.682-1.17-12.084-3.161-16.515 7.827 1.013 13.046 9.9 17.044 14.503zm-27.664-11.462c2.161 4.38 3.554 10.631 3.554 19.127v1.044L117.35 54.36c4.219-16.167 12.126-23.99 18.672-24.814zm-15.97-5.737c1.077 0 2.168.33 3.218.978-8.086 3.802-16.769 13.39-20.42 32.518l-22.383 6.916C88.494 44.944 103.3 23.809 119.052 23.809z"/>
                  <path fill="#5E8E3E" d="M221.237 54.983c-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.959-2.394-1.099L197.118 292l58.882-13.925-33.228-220.66c-.201-1.461-1.48-2.269-2.535-2.432z"/>
                  <path fill="#FFF" d="M128.315 103.172l-7.274 27.215s-8.036-3.61-17.814-3.016c-14.154.93-14.307 9.799-14.154 12.025.826 13.075 35.194 15.913 37.162 46.585 1.553 24.098-12.78 40.562-33.363 41.827-24.616 1.54-38.171-12.997-38.171-12.997l5.217-22.19s13.648 10.305 24.547 9.619c7.133-.447 9.701-6.25 9.434-10.359-1.078-17.072-29.057-16.072-30.87-44.138-1.54-23.615 14.01-47.513 48.193-49.62 13.16-.824 19.093 2.049 19.093 5.049z"/>
                </svg>
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

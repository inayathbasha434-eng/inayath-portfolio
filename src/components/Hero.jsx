import { useEffect, useState } from 'react'
import { ShoppingBag, ArrowDown, MessageSquare, ArrowRight } from 'lucide-react'

const STATS = [
  { value: '3+', label: 'Projects' },
  { value: '100%', label: 'Trust' },
]

const PHOTO = "/ChatGPT_Image_Jun_16,_2026,_03_11_34_PM.png"

export default function Hero() {
  const [visible, setVisible] = useState(false)

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
            className={`flex-1 text-center md:text-left transition-all duration-700 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for Freelance
            </div>

            {/* Greeting line */}
            <p className="text-slate-400 text-base sm:text-lg font-medium mb-1 tracking-wide">
              Hello, World! 👋 I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-4 tracking-tight">
              <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">Inayath</span>
              <br />
              <span
                className="relative inline-block mt-1.5"
                style={{
                  background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #93c5fd 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 2px 10px rgba(59, 130, 246, 0.4))',
                }}
              >
                Basha A
              </span>
            </h1>

            {/* Role Header */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 mt-3 mb-2 tracking-wide">
              Shopify Developer &amp; Creative Digital Designer
            </h2>

            {/* Subheading */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-xl mb-8 mt-2">
              Helping businesses grow through modern Shopify stores, web design, branding, and digital experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-9">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="View My Work"
                className="shine group min-h-[52px] px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-wider flex items-center gap-2.5"
              >
                <span>View My Work</span>
                <ArrowRight size={14} className="text-blue-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToContact}
                aria-label="Let's Connect"
                className="group min-h-[52px] px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-wider flex items-center gap-2.5"
              >
                <MessageSquare size={16} className="text-slate-300 group-hover:scale-110 transition-transform" />
                <span>Let's Connect</span>
              </button>
            </div>


            {/* Stats strip */}
            <div className="flex justify-center md:justify-start gap-8 sm:gap-12">
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
                  <div className="text-xs text-slate-500 mt-0.5 font-medium">{label}</div>
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
            <div 
              className="relative cursor-pointer group"
              style={{ perspective: '1000px' }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left; // x coordinate within client
                const y = e.clientY - rect.top;  // y coordinate within client
                
                const rotateX = -((y - rect.height / 2) / rect.height) * 30; // Max tilt 30deg
                const rotateY = ((x - rect.width / 2) / rect.width) * 30;
                
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                
                // Specs specular lighting shine spot
                const shine = card.querySelector('.specs-glow');
                if (shine) {
                  shine.style.background = `radial-gradient(circle 80px at ${x}px ${y}px, rgba(255,255,255,0.18), transparent 80%)`;
                }
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
                card.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
                
                const shine = card.querySelector('.specs-glow');
                if (shine) {
                  shine.style.background = 'transparent';
                }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transition = 'none';
              }}
            >
              {/* Outer glow */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-700/20 blur-2xl pointer-events-none animate-glow group-hover:scale-110 transition-transform duration-300" />

              {/* Subtle pulsing outer glow ring */}
              <div
                className="absolute -inset-6 rounded-full border border-blue-500/20 pointer-events-none animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                style={{ animationDuration: '3s' }}
              />

              {/* Very slow rotating dashed ring */}
              <div
                className="absolute -inset-5 rounded-full border border-dashed border-blue-500/15 pointer-events-none animate-spin"
                style={{ animationDuration: '35s', animationDirection: 'reverse' }}
              />

              {/* Spinning dashed ring */}
              <div
                className="absolute -inset-3 rounded-full border-2 border-dashed border-blue-500/20 pointer-events-none animate-spin"
                style={{ animationDuration: '20s' }}
              />

              {/* Photo container */}
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-[3px] bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 shadow-2xl shadow-blue-500/20 overflow-hidden transform transition-all duration-300 group-hover:shadow-blue-500/30">
                
                {/* 3D Specular Light reflection layer */}
                <div className="specs-glow absolute inset-0 z-20 pointer-events-none transition-all duration-100" />

                <div className="w-full h-full rounded-full overflow-hidden bg-[#0d1426] relative z-10">
                  <img
                    src={PHOTO}
                    alt="Inayath Basha A"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextElementSibling.style.display = 'flex'
                    }}
                  />
                  <div className="w-full h-full items-center justify-center bg-gradient-to-br from-blue-900 to-[#0a0f1e] hidden">
                    <span
                      className="text-7xl font-extrabold"
                      style={{
                        background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      IB
                    </span>
                  </div>
                </div>
              </div>

              {/* Accent badges on photo */}
              <div className="absolute -top-1 -right-1 flex items-center gap-1 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-lg shadow-blue-500/40 z-30 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                Open to Work
              </div>
              <div className="absolute -bottom-1 -left-2 flex items-center gap-1.5 bg-[#0d1426] border border-white/10 text-slate-300 text-xs font-medium px-3 py-1.5 rounded-full shadow-lg z-30 transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1">
                <ShoppingBag size={11} className="text-blue-400" />
                Shopify Dev
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

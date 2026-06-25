import { useEffect, useRef } from 'react'
import { Target, Lightbulb, Zap, Code2, PenTool, TrendingUp, Sparkles } from 'lucide-react'

// Helper component for the spotlight card
function BentoCard({ children, className = "" }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardRef.current.style.setProperty('--mouse-x', `${x}px`)
    cardRef.current.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`relative group overflow-hidden rounded-3xl bg-[#0a101f] border border-white/5 shadow-xl transition-transform duration-500 hover:-translate-y-1 ${className}`}
    >
      {/* Spotlight gradient that follows mouse (Desktop only) */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.15), transparent 40%)'
        }}
      />
      {/* Inner subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 h-full p-8">
        {children}
      </div>
    </div>
  )
}

export default function About() {
  const sectionRef = useRef(null)

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

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-[#060b16] scroll-mt-16 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            <span>Know Me Better</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Me</span>
          </h2>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: The Vision (Spans 2 columns on Desktop) */}
          <div className="md:col-span-2 fade-in">
            <BentoCard className="h-full">
              <div className="flex flex-col h-full justify-center">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                  <Target size={24} className="text-blue-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">The Vision</h3>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                  Crafting high-impact digital experiences that seamlessly blend creativity, strategy, and business growth. I specialize in transforming complex ideas into powerful brands and scalable online success.
                </p>
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-2xl">3+</p>
                    <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mt-1">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-white font-bold text-2xl">100%</p>
                    <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mt-1">Client Focus</p>
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-white font-bold text-2xl">24/7</p>
                    <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mt-1">Dedication</p>
                  </div>
                </div>
              </div>
            </BentoCard>
          </div>

          {/* Card 2: The Focus (Spans 1 column on Desktop) */}
          <div className="md:col-span-1 fade-in" style={{ transitionDelay: '100ms' }}>
            <BentoCard className="h-full">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 border border-indigo-500/20">
                  <Zap size={24} className="text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-6">Core Focus</h3>
                
                <div className="flex flex-col gap-3 mt-auto">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5 group-hover:bg-white/[0.06] transition-colors">
                    <Code2 size={18} className="text-blue-400" />
                    <span className="text-slate-300 text-sm font-semibold">Shopify Development</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5 group-hover:bg-white/[0.06] transition-colors">
                    <PenTool size={18} className="text-indigo-400" />
                    <span className="text-slate-300 text-sm font-semibold">Brand Identity</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5 group-hover:bg-white/[0.06] transition-colors">
                    <TrendingUp size={18} className="text-green-400" />
                    <span className="text-slate-300 text-sm font-semibold">Business Growth</span>
                  </div>
                </div>
              </div>
            </BentoCard>
          </div>

          {/* Card 3: The Philosophy (Spans all 3 columns on Desktop) */}
          <div className="md:col-span-3 fade-in" style={{ transitionDelay: '200ms' }}>
            <BentoCard>
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Lightbulb size={32} className="text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-white mb-2">The Philosophy</h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-4xl">
                    I believe that great design is invisible and exceptional code feels like magic. Every project is approached with a passion for innovation and a relentless attention to detail, ensuring that your business doesn't just exist online, but truly stands out and connects with your audience.
                  </p>
                </div>
              </div>
            </BentoCard>
          </div>

        </div>
      </div>
    </section>
  )
}

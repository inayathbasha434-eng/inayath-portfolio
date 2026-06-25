import { useEffect, useRef } from 'react'
import { Heart, MapPin, Code, Globe } from 'lucide-react'

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
    <section id="about" ref={sectionRef} className="py-24 bg-[#080d1a] scroll-mt-16 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <span className="text-blue-400 text-sm font-bold uppercase tracking-[0.2em]">Know Me Better</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-4 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Me</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base font-medium">
            Get to know my core values and driving forces
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          
          {/* Tile 1: Main Bio (Spans 2 columns on desktop) */}
          <div className="fade-in md:col-span-2 row-span-2 group relative overflow-hidden bg-[#0d1426]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 sm:p-10 hover:border-blue-500/30 transition-colors duration-500 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                <Code className="text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">The Architect</h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                Inayath Basha A crafts high-impact digital experiences that seamlessly blend creativity, strategy, and business growth. Specializing in Shopify development, brand identity design, and conversion-focused digital solutions, he transforms ideas into powerful brands and scalable online success. 
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-4">
                With a passion for innovation and attention to detail, he helps businesses stand out, connect with their audience, and achieve meaningful results in the digital world.
              </p>
            </div>
          </div>

          {/* Tile 2: What Drives Me (Square) */}
          <div className="fade-in group relative overflow-hidden bg-[#0d1426]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 hover:border-pink-500/30 transition-colors duration-500 flex flex-col items-center justify-center text-center shadow-2xl min-h-[220px]">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                <Heart size={28} className="text-pink-400 animate-pulse" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Passion Driven</h3>
              <p className="text-slate-400 text-sm">Building things that truly matter.</p>
            </div>
          </div>

          {/* Tile 3: Location (Square) */}
          <div className="fade-in group relative overflow-hidden bg-[#0d1426]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 hover:border-emerald-500/30 transition-colors duration-500 flex flex-col items-center justify-center text-center shadow-2xl min-h-[220px]">
             {/* Abstract Radar Background */}
             <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
               <div className="w-full h-full border border-emerald-500/30 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
               <div className="absolute w-3/4 h-3/4 border border-emerald-500/20 rounded-full" />
               <div className="absolute w-1/2 h-1/2 border border-emerald-500/10 rounded-full" />
             </div>
             <div className="relative z-10">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500">
                <Globe size={28} className="text-emerald-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Global Reach</h3>
              <p className="text-slate-400 text-sm font-medium flex items-center justify-center gap-1.5">
                <MapPin size={12} className="text-emerald-500" />
                Based in Erode, IN
              </p>
             </div>
          </div>

          {/* Tile 4: Marquee Tags (Full width rectangle) */}
          <div className="fade-in md:col-span-3 relative overflow-hidden bg-gradient-to-r from-[#0d1426] via-blue-900/10 to-[#0d1426] border border-white/5 rounded-3xl py-6 flex items-center shadow-2xl group">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#080d1a] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#080d1a] to-transparent z-10 pointer-events-none" />
            
            <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex gap-4 sm:gap-8 px-4 sm:px-8">
                  {['Shopify Development', 'Brand Identity', 'Digital Solutions', 'Business Growth', 'UI/UX Design', 'E-Commerce'].map((tag, j) => (
                    <span
                      key={`${i}-${j}`}
                      className="text-sm sm:text-base font-bold text-slate-300 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl whitespace-nowrap backdrop-blur-sm shadow-sm hover:bg-white/10 hover:-translate-y-1 transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

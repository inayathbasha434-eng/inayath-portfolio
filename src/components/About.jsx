import { useEffect, useRef } from 'react'
import { Heart } from 'lucide-react'

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
    <section id="about" ref={sectionRef} className="py-20 bg-[#080d1a] scroll-mt-16 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 fade-in">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Know Me Better</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm sm:text-base">
            Get to know my core values and driving forces
          </p>
        </div>

        {/* Center Bio Card */}
        <div className="max-w-3xl mx-auto flex flex-col justify-between bg-gradient-to-br from-[#0d1426] to-[#111827] border border-blue-500/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl fade-in">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <Heart size={20} className="text-blue-400" />
              </div>
              <h3 className="text-white font-bold text-lg">What Drives Me</h3>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Inayath Basha A crafts high-impact digital experiences that seamlessly blend creativity, strategy, and business growth. Specializing in Shopify development, brand identity design, and conversion-focused digital solutions, he transforms ideas into powerful brands and scalable online success. With a passion for innovation and attention to detail, he helps businesses stand out, connect with their audience, and achieve meaningful results in the digital world.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {['Shopify Development', 'Brand Identity', 'Digital Solutions', 'Business Growth'].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

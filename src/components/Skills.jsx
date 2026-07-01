import { useEffect, useRef, useState, useCallback } from 'react'
import { Sparkles } from 'lucide-react'

/* ─── OUTER ring: Canva, WooCommerce, Shopify, CSS3, Database, AI, Email, React ─── */
const OUTER = [
  {
    id: 'canva', name: 'Canva', color: '#00c4cc', bg: '#001e1f',
    icon: (
      <svg viewBox="0 0 24 24" fill="#00c4cc" className="w-full h-full p-[20%]">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.84 9.12c0-.84-.66-1.44-1.5-1.44-.6 0-1.08.3-1.38.78-.54-.66-1.38-1.08-2.34-1.08-1.74 0-3.06 1.32-3.06 3.12 0 1.38.78 2.52 1.92 3.06-.18.42-.42.78-.72 1.02-.42.36-.42.96-.06 1.38.18.24.48.36.78.36.18 0 .36-.06.54-.18.54-.42 1.02-1.02 1.32-1.68.3.06.6.12.9.12 1.8 0 3.12-1.38 3.12-3.18 0-.12 0-.24-.06-.36.36-.36.54-.84.54-1.38zm-5.22 3.66c-.72 0-1.32-.6-1.32-1.56 0-.9.6-1.56 1.32-1.56.72 0 1.32.66 1.32 1.56 0 .96-.6 1.56-1.32 1.56z"/>
      </svg>
    ),
  },
  {
    id: 'woocommerce', name: 'WooCommerce', color: '#7f54b3', bg: '#150d24',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full p-[18%]">
        <path fill="#7f54b3" d="M23.72 5.418H.28C.126 5.418 0 5.544 0 5.698v12.604c0 .154.126.28.28.28h23.44c.154 0 .28-.126.28-.28V5.698c0-.154-.126-.28-.28-.28zm-1.116 6.193l-1.72 2.31a.56.56 0 0 1-.842.056l-1.148-1.148-1.148 1.148a.557.557 0 0 1-.842-.056l-1.72-2.31v3.922c0 .31-.251.56-.56.56H4.502a.56.56 0 0 1-.56-.56V7.886c0-.31.251-.56.56-.56h4.334c.31 0 .56.25.56.56v3.332l.756-1.19a.559.559 0 0 1 .952 0l1.19 1.874 1.19-1.874a.559.559 0 0 1 .952 0l.757 1.19V7.886c0-.31.25-.56.56-.56h3.5c.31 0 .56.25.56.56v5.647l.756-1.19a.559.559 0 0 1 .952 0l.756 1.19V7.886c0-.31.251-.56.56-.56h.421c.31 0 .56.25.56.56v6.274c0 .31-.25.56-.56.56h-1.12a.558.558 0 0 1-.46-.239z"/>
      </svg>
    ),
  },
  {
    id: 'shopify', name: 'Shopify', color: '#96bf48', bg: '#0d1f0d',
    icon: (
      <svg viewBox="0 0 24 24" fill="#96bf48" className="w-full h-full p-[20%]">
        <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192-.097 0-1.904-.036-1.904-.036s-1.261-1.24-1.4-1.378v-.002L15.337 23.98zM12.34 4.052s-.636-.192-1.672-.192c-1.652 0-2.454 1.017-2.454 2.013 0 1.105.866 1.64 1.653 2.088.754.424 1.037.73 1.037 1.178 0 .577-.462.866-1.15.866-.954 0-1.768-.5-1.768-.5l-.308 1.479s.81.558 2.04.558c1.846 0 3.02-.97 3.02-2.38 0-1.19-.866-1.903-1.807-2.34-.597-.289-1.037-.52-1.037-1.017 0-.5.423-.81 1.017-.81.788 0 1.498.308 1.498.308l.33-1.25h.001zm2.684-.135l-1.073 3.207-.19-.057-.54-3.15h-1.77l1.578 7.073h1.44l2.604-7.073h-2.05zm5.596.02h-1.29l-2.4 7.073h1.905l.443-1.29h2.243l.25 1.29h1.79L20.62 3.937zm-1.097 2.07l.52 2.592h-1.442l.922-2.593z"/>
      </svg>
    ),
  },
  {
    id: 'css3', name: 'CSS3', color: '#264de4', bg: '#0a0e26',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full p-[20%]">
        <path fill="#264de4" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
      </svg>
    ),
  },
  {
    id: 'database', name: 'Database', color: '#00758f', bg: '#051618',
    icon: (
      <svg viewBox="0 0 24 24" fill="#00758f" className="w-full h-full p-[20%]">
        <path d="M12 2C6.48 2 2 3.79 2 6v12c0 2.21 4.48 4 10 4s10-1.79 10-4V6c0-2.21-4.48-4-10-4zm0 2c4.42 0 8 1.34 8 3s-3.58 3-8 3-8-1.34-8-3 3.58-3 8-3zm0 16c-4.42 0-8-1.34-8-3v-2.23c1.61 1.05 4.58 1.73 8 1.73s6.39-.68 8-1.73V17c0 1.66-3.58 3-8 3zm0-4c-4.42 0-8-1.34-8-3v-2.23c1.61 1.05 4.58 1.73 8 1.73s6.39-.68 8-1.73V13c0 1.66-3.58 3-8 3z"/>
      </svg>
    ),
  },
  {
    id: 'ai', name: 'AI Image Generation', color: '#a855f7', bg: '#160826',
    icon: (
      <svg viewBox="0 0 24 24" fill="#a855f7" className="w-full h-full p-[20%]">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 14.93V15a1 1 0 0 1 2 0v1.93A8 8 0 0 1 4.07 9H6a1 1 0 0 1 0 2H4.07A8 8 0 0 1 11 4.07V6a1 1 0 0 1 2 0V4.07A8 8 0 0 1 19.93 11H18a1 1 0 0 1 0-2h1.93A8 8 0 0 1 13 19.93zM12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/>
      </svg>
    ),
  },
  {
    id: 'email', name: 'Email Marketing', color: '#f59e0b', bg: '#1a1200',
    icon: (
      <svg viewBox="0 0 24 24" fill="#f59e0b" className="w-full h-full p-[20%]">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
  {
    id: 'react', name: 'React', color: '#61dafb', bg: '#0a1a24',
    icon: (
      <svg viewBox="0 0 24 24" fill="#61dafb" className="w-full h-full p-[20%]">
        <circle cx="12" cy="12" r="2.05"/>
        <ellipse cx="12" cy="12" rx="10.5" ry="4.2" fill="none" stroke="#61dafb" strokeWidth="1.3"/>
        <ellipse cx="12" cy="12" rx="10.5" ry="4.2" fill="none" stroke="#61dafb" strokeWidth="1.3" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10.5" ry="4.2" fill="none" stroke="#61dafb" strokeWidth="1.3" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
]

/* ─── INNER ring: GitHub, Figma, VS Code, HTML ─── */
const INNER = [
  {
    id: 'github', name: 'GitHub', color: '#e0e0e0', bg: '#0d1117',
    icon: (
      <svg viewBox="0 0 24 24" fill="#e0e0e0" className="w-full h-full p-[20%]">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    id: 'figma', name: 'Figma', color: '#a259ff', bg: '#150e28',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full p-[18%]">
        <path fill="#1abcfe" d="M12 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0z"/>
        <path fill="#0acf83" d="M4 20a4 4 0 0 1 4-4h4v4a4 4 0 0 1-8 0z"/>
        <path fill="#ff7262" d="M12 0v8h4a4 4 0 0 0 0-8h-4z"/>
        <path fill="#f24e1e" d="M4 4a4 4 0 0 0 0 8h4V4H4z"/>
        <path fill="#a259ff" d="M4 12a4 4 0 0 0 4 4h4v-8H8a4 4 0 0 0-4 4z"/>
      </svg>
    ),
  },
  {
    id: 'vscode', name: 'VS Code', color: '#007acc', bg: '#0a1626',
    icon: (
      <svg viewBox="0 0 24 24" fill="#007acc" className="w-full h-full p-[20%]">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
      </svg>
    ),
  },
  {
    id: 'html5', name: 'HTML5', color: '#e34c26', bg: '#200b05',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full p-[20%]">
        <path fill="#e34c26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
      </svg>
    ),
  },
]

export default function Skills() {
  const sectionRef = useRef(null)
  const [hoveredId, setHoveredId] = useState(null)
  const outerAngle = useRef(0)
  const innerAngle = useRef(0)
  const rafRef = useRef(null)
  const [, setTick] = useState(0)
  const [size, setSize] = useState(420)

  /* Responsive sizing */
  const updateSize = useCallback(() => {
    const w = Math.min(window.innerWidth, 520)
    setSize(Math.max(300, w * 0.88))
  }, [])

  useEffect(() => {
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [updateSize])

  /* Fade-in observer */
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const els = section.querySelectorAll('.fade-in')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.1 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  /* Always-running dual rotation */
  useEffect(() => {
    const animate = () => {
      outerAngle.current = (outerAngle.current + 0.09) % 360
      innerAngle.current = (innerAngle.current - 0.18) % 360
      setTick(t => t + 1)
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const cx = size / 2
  const cy = size / 2
  const OUTER_R = size * 0.38
  const INNER_R = size * 0.20
  const OUTER_NODE = size * 0.125
  const INNER_NODE = size * 0.098

  const renderRing = (skills, radius, nodeSize, angleRef) =>
    skills.map((skill, i) => {
      const stepDeg = 360 / skills.length
      const deg = ((angleRef.current + stepDeg * i) % 360) * (Math.PI / 180)
      const x = cx + radius * Math.cos(deg)
      const y = cy + radius * Math.sin(deg)
      const isHovered = hoveredId === skill.id

      return (
        <button
          key={skill.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 z-20 focus:outline-none"
          style={{ left: x, top: y }}
          onMouseEnter={() => setHoveredId(skill.id)}
          onMouseLeave={() => setHoveredId(null)}
          onTouchStart={() => setHoveredId(prev => prev === skill.id ? null : skill.id)}
          title={skill.name}
        >
          {/* Name label — hover only */}
          <div
            style={{
              position: 'absolute',
              bottom: '100%',
              left: '50%',
              transform: `translateX(-50%) translateY(${isHovered ? -4 : 2}px)`,
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.2s ease, transform 0.2s ease',
              marginBottom: 6,
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
              zIndex: 50,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                padding: '3px 9px',
                borderRadius: 6,
                color: '#fff',
                background: '#111827',
                border: `1px solid ${skill.color}55`,
                boxShadow: `0 0 12px ${skill.color}50`,
                display: 'inline-block',
              }}
            >
              {skill.name}
            </span>
          </div>

          {/* Icon bubble */}
          <div
            style={{
              width: isHovered ? nodeSize * 1.2 : nodeSize,
              height: isHovered ? nodeSize * 1.2 : nodeSize,
              borderRadius: '50%',
              background: skill.bg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              boxShadow: isHovered
                ? `0 0 0 2px ${skill.color}, 0 0 20px ${skill.color}70`
                : `0 0 0 1.5px ${skill.color}40`,
            }}
          >
            {skill.icon}
          </div>
        </button>
      )
    })

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-[#080d1a] scroll-mt-16 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes glowPulse { 0%,100%{opacity:.4} 50%{opacity:.85} }
        .sk-glow { animation: glowPulse 3s ease-in-out infinite; }
        .sk-ring-o { animation: glowPulse 4.5s ease-in-out infinite; }
        .sk-ring-i { animation: glowPulse 3.5s ease-in-out infinite 0.6s; }
      `}} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-6 fade-in">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Sparkles size={14} />
            Skills Graph
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Skills &amp; <span className="text-gradient">Expertise</span>
          </h2>
        </div>

        {/* Orbital canvas */}
        <div className="fade-in flex justify-center">
          <div className="relative" style={{ width: size, height: size }}>

            {/* Outer dashed ring */}
            <div className="sk-ring-o absolute rounded-full"
              style={{ width: OUTER_R * 2, height: OUTER_R * 2, left: cx - OUTER_R, top: cy - OUTER_R, border: '1.5px dashed rgba(139,92,246,0.28)' }}
            />

            {/* Inner dashed ring */}
            <div className="sk-ring-i absolute rounded-full"
              style={{ width: INNER_R * 2, height: INNER_R * 2, left: cx - INNER_R, top: cy - INNER_R, border: '1px dashed rgba(96,165,250,0.22)' }}
            />

            {/* Purple center glow */}
            <div className="sk-glow absolute rounded-full pointer-events-none"
              style={{ width: size * 0.34, height: size * 0.34, left: cx - size * 0.17, top: cy - size * 0.17, background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, rgba(88,28,220,0.14) 55%, transparent 75%)' }}
            />

            {/* Center code node */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center font-mono font-black text-purple-200 rounded-full select-none"
              style={{ left: cx, top: cy, width: size * 0.165, height: size * 0.165, fontSize: size * 0.038, background: 'radial-gradient(circle at 40% 35%, #2d1b5e, #0e0820)', boxShadow: '0 0 0 2px rgba(139,92,246,0.65), 0 0 30px rgba(139,92,246,0.5)' }}
            >
              {'</>'}
            </div>

            {/* Inner ring — GitHub, Figma, VS Code, HTML (counter-clockwise) */}
            {renderRing(INNER, INNER_R, INNER_NODE, innerAngle)}

            {/* Outer ring — 8 skills (clockwise) */}
            {renderRing(OUTER, OUTER_R, OUTER_NODE, outerAngle)}
          </div>
        </div>

        <p className="text-center text-slate-600 text-xs mt-3">
          Hover any icon to reveal the skill name
        </p>
      </div>
    </section>
  )
}

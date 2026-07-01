import { useEffect, useRef, useState, useCallback } from 'react'
import { Sparkles } from 'lucide-react'

/* ─── OUTER ring: Canva, WooCommerce, Shopify, CSS3, Database, AI, Email, React ─── */
const OUTER = [
  {
    id: 'canva', name: 'Canva', color: '#7b4fff', bg: '#0f0a1e',
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full p-[15%]">
        <defs>
          <radialGradient id="canvaBg" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#a78bfa"/>
            <stop offset="100%" stopColor="#4f46e5"/>
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="50" fill="url(#canvaBg)"/>
        <text x="50" y="68" textAnchor="middle" fontSize="62" fontWeight="800" fill="white" fontFamily="Georgia, serif">C</text>
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
      <svg viewBox="0 0 256 292" className="w-full h-full p-[15%]">
        <path fill="#95BF47" d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.043 121.999 0 115.812 0 68.628 0 46.05 56.075 38.923 84.575L14.136 92.17c-7.364 2.302-7.59 2.528-8.554 9.499L0 285.267 197.115 292 256 278.075 223.774 57.34zm-60.088-16.332c-4.136 1.273-8.829 2.722-13.883 4.281V43.02c0-6.682-1.17-12.084-3.161-16.515 7.827 1.013 13.046 9.9 17.044 14.503zm-27.664-11.462c2.161 4.38 3.554 10.631 3.554 19.127v1.044L117.35 54.36c4.219-16.167 12.126-23.99 18.672-24.814zm-15.97-5.737c1.077 0 2.168.33 3.218.978-8.086 3.802-16.769 13.39-20.42 32.518l-22.383 6.916C88.494 44.944 103.3 23.809 119.052 23.809z"/>
        <path fill="#5E8E3E" d="M221.237 54.983c-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.959-2.394-1.099L197.118 292l58.882-13.925-33.228-220.66c-.201-1.461-1.48-2.269-2.535-2.432z"/>
        <path fill="#FFF" d="M128.315 103.172l-7.274 27.215s-8.036-3.61-17.814-3.016c-14.154.93-14.307 9.799-14.154 12.025.826 13.075 35.194 15.913 37.162 46.585 1.553 24.098-12.78 40.562-33.363 41.827-24.616 1.54-38.171-12.997-38.171-12.997l5.217-22.19s13.648 10.305 24.547 9.619c7.133-.447 9.701-6.25 9.434-10.359-1.078-17.072-29.057-16.072-30.87-44.138-1.54-23.615 14.01-47.513 48.193-49.62 13.16-.824 19.093 2.049 19.093 5.049z"/>
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
    id: 'email', name: 'Email Marketing', color: '#EA4335', bg: '#1a0505',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full p-[15%]">
        {/* Gmail-style M logo */}
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.548l8.073-6.055C21.692 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
        <path d="M0 5.457v13.909c0 .904.732 1.636 1.636 1.636h3.819V11.73L0 7.63V5.457z" fill="#188038"/>
        <path d="M24 5.457v2.173l-5.455 4.1v9.273h3.819A1.636 1.636 0 0 0 24 19.366V5.457z" fill="#1967D2"/>
        <path d="M0 7.63l5.455 4.1V5.46L3.927 3.493C2.31 2.28 0 3.434 0 5.457v2.173z" fill="#FBBC05"/>
        <path d="M24 5.457L12 13.548 0 5.457l12-8.09 12 8.09z" fill="#EA4335" opacity="0"/>
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

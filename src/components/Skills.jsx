import { useEffect, useState, useRef } from 'react'
import { Sparkles, Info } from 'lucide-react'

const SKILLS = [
  {
    id: 'shopify',
    name: 'Shopify',
    x: 32, y: 15,
    description: 'Expertise in custom theme development, Liquid template scripting, store setup, product configurations, and app integrations to launch clean storefronts.',
    color: '#10b981', // green
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    x: 12, y: 32,
    description: 'Proficient in WooCommerce configuration, customized themes, landing pages, and setting up stable content systems.',
    color: '#3b82f6', // blue
  },
  {
    id: 'html',
    name: 'HTML',
    x: 48, y: 38,
    description: 'Deep understanding of semantic markup, accessibility standards, and structuring optimized web page schemas.',
    color: '#f59e0b', // amber
  },
  {
    id: 'css',
    name: 'CSS',
    x: 68, y: 22,
    description: 'Fluid layout design using Tailwind CSS, modern Grid/Flexbox structures, custom keyframe micro-animations, and fluid responsive styling.',
    color: '#ec4899', // pink
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    x: 52, y: 65,
    description: 'Writing optimized ES6+ scripts, handling API networking, manipulating DOM elements, and configuring user interactions.',
    color: '#eab308', // yellow
  },
  {
    id: 'react',
    name: 'React',
    x: 78, y: 58,
    description: 'Creating high-performance reusable components, managing state, hooks, and routing for dynamic single-page applications.',
    color: '#06b6d4', // cyan
  },
  {
    id: 'figma',
    name: 'Figma',
    x: 90, y: 30,
    description: 'Developing UI design systems, wireframing modern visual interfaces, prototyping user flows, and assets exporting.',
    color: '#8b5cf6', // purple
  },
  {
    id: 'canva',
    name: 'Canva',
    x: 82, y: 82,
    description: 'Designing visually stunning marketing banners, pitch slides, social graphics, and custom store assets.',
    color: '#d946ef', // fuchsia
  },
  {
    id: 'bizdev',
    name: 'Business Dev',
    x: 18, y: 60,
    description: 'Fostering client relations, analyzing business models, and identifying opportunities to expand e-commerce conversion rates.',
    color: '#3b82f6', // blue
  },
  {
    id: 'email',
    name: 'Email Marketing',
    x: 30, y: 82,
    description: 'Building highly segmented automated flows, campaign graphics, and copywriting for newsletters that drive store sales.',
    color: '#f97316', // orange
  },
]

const CONNECTIONS = [
  { from: 'shopify', to: 'wordpress' },
  { from: 'shopify', to: 'html' },
  { from: 'shopify', to: 'email' },
  { from: 'wordpress', to: 'html' },
  { from: 'wordpress', to: 'bizdev' },
  { from: 'html', to: 'css' },
  { from: 'html', to: 'javascript' },
  { from: 'css', to: 'figma' },
  { from: 'javascript', to: 'react' },
  { from: 'javascript', to: 'email' },
  { from: 'react', to: 'canva' },
  { from: 'figma', to: 'canva' },
  { from: 'email', to: 'bizdev' },
]

export default function Skills() {
  const sectionRef = useRef(null)
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0])

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
    <section id="skills" ref={sectionRef} className="py-20 bg-[#080d1a] scroll-mt-16 overflow-hidden">
      {/* Inline styles for connection lines animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dashflow {
          to {
            stroke-dashoffset: -20;
          }
        }
        .constellation-line-anim {
          stroke-dasharray: 6, 6;
          animation: dashflow 3s linear infinite;
        }
      `}} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 fade-in">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Sparkles size={14} className="text-blue-400" />
            Skills Graph
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">
            My Skill <span className="text-gradient">Constellation</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm sm:text-base">
            Hover or tap on any glowing star to discover details about my technical and business skillset
          </p>
        </div>

        {/* Constellation Container */}
        <div className="fade-in relative bg-[#0a0f1e]/90 border border-white/5 rounded-3xl h-[420px] sm:h-[420px] w-full p-4 overflow-hidden mb-8">
          {/* Subtle star field background */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] opacity-70 pointer-events-none" />

          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none select-none">
            {/* Draw default base connections */}
            {CONNECTIONS.map((conn, idx) => {
              const fromSkill = SKILLS.find((s) => s.id === conn.from)
              const toSkill = SKILLS.find((s) => s.id === conn.to)
              if (!fromSkill || !toSkill) return null

              const isHighlighted =
                selectedSkill &&
                (conn.from === selectedSkill.id || conn.to === selectedSkill.id)

              return (
                <line
                  key={`base-${idx}`}
                  x1={`${fromSkill.x}%`}
                  y1={`${fromSkill.y}%`}
                  x2={`${toSkill.x}%`}
                  y2={`${toSkill.y}%`}
                  stroke={isHighlighted ? selectedSkill.color : '#3b82f6'}
                  strokeOpacity={isHighlighted ? '0.6' : '0.15'}
                  strokeWidth={isHighlighted ? '2' : '1'}
                  className={isHighlighted ? 'constellation-line-anim' : ''}
                />
              )
            })}
          </svg>

          {/* Interactive HTML Nodes */}
          {SKILLS.map((skill) => {
            const isSelected = selectedSkill && selectedSkill.id === skill.id
            const labelPositionLeft = skill.x > 50

            return (
              <button
                key={skill.id}
                onClick={() => setSelectedSkill(skill)}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10 focus:outline-none group select-none cursor-pointer p-3 -m-3"
                style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
              >
                {/* Node Point */}
                <div className="relative flex items-center justify-center">
                  {/* Outer pulse */}
                  <div
                    className="absolute w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping pointer-events-none"
                    style={{
                      backgroundColor: `${skill.color}20`,
                      animationDuration: '2s',
                    }}
                  />
                  {isSelected && (
                    <div
                      className="absolute w-12 h-12 rounded-full animate-pulse pointer-events-none"
                      style={{ backgroundColor: `${skill.color}18` }}
                    />
                  )}

                  {/* Core Star */}
                  <div
                    className="w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full border border-white/40 shadow-lg transition-all duration-300 group-hover:scale-125"
                    style={{
                      backgroundColor: skill.color,
                      boxShadow: `0 0 16px ${skill.color}`,
                    }}
                  />

                  {/* Label tag */}
                  <div
                    className={`absolute flex flex-col pointer-events-none transition-all duration-200 ${
                      labelPositionLeft
                        ? 'right-6 items-end translate-x-2 group-hover:translate-x-0'
                        : 'left-6 items-start -translate-x-2 group-hover:translate-x-0'
                    }`}
                  >
                    <span
                      className={`text-[10px] sm:text-xs font-bold tracking-wider px-2 py-0.5 rounded-md border shadow-md whitespace-nowrap transition-colors ${
                        isSelected
                          ? 'bg-blue-600 border-blue-500/50 text-white'
                          : 'bg-[#0d1426]/90 border-white/5 text-slate-300'
                      }`}
                    >
                      {skill.name}
                    </span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Selected Skill Detail Panel */}
        <div className="fade-in max-w-xl mx-auto">
          {selectedSkill ? (
            <div
              className="bg-[#0d1426] border rounded-2xl p-5 sm:p-6 transition-all duration-500 shadow-xl relative overflow-hidden"
              style={{ borderColor: `${selectedSkill.color}25` }}
            >
              {/* Bottom colored bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ backgroundColor: selectedSkill.color }}
              />

              <div className="flex items-center gap-3 mb-2.5">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: selectedSkill.color,
                    boxShadow: `0 0 8px ${selectedSkill.color}`,
                  }}
                />
                <h4 className="text-white font-bold text-base sm:text-lg">
                  {selectedSkill.name}
                </h4>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedSkill.description}
              </p>
            </div>
          ) : (
            <div className="bg-[#0d1426] border border-white/5 rounded-2xl p-5 sm:p-6 flex items-center gap-3 text-slate-400 shadow-md">
              <Info size={16} className="text-blue-400 flex-shrink-0" />
              <p className="text-sm">Click on any skill star above to explore details.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

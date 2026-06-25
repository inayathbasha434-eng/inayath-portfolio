import { useEffect, useRef, useState } from 'react'

const TEAM = [
  {
    name: 'Roshan',
    role: 'Tech Lead',
    initials: 'R',
    emoji: '⚡',
    color: 'from-blue-500 to-indigo-600',
    shadowColor: 'rgba(59,130,246,0.5)',
    bg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
  },
  {
    name: 'Nishanth',
    role: 'Video Editor',
    initials: 'N',
    emoji: '🎬',
    color: 'from-purple-500 to-pink-600',
    shadowColor: 'rgba(168,85,247,0.5)',
    bg: 'bg-gradient-to-br from-purple-500 to-pink-600',
  },
  {
    name: 'Azmeer',
    role: 'Graphic Designer',
    initials: 'A',
    emoji: '🎨',
    color: 'from-pink-500 to-rose-600',
    shadowColor: 'rgba(244,63,94,0.5)',
    bg: 'bg-gradient-to-br from-pink-500 to-rose-600',
  },
  {
    name: 'Giridharan',
    role: 'QA',
    initials: 'G',
    emoji: '🛡',
    color: 'from-teal-500 to-emerald-600',
    shadowColor: 'rgba(20,184,166,0.5)',
    bg: 'bg-gradient-to-br from-teal-500 to-emerald-600',
  },
  {
    name: 'Varun',
    role: 'Testing Specialist',
    initials: 'V',
    emoji: '📋',
    color: 'from-amber-500 to-orange-600',
    shadowColor: 'rgba(245,158,11,0.5)',
    bg: 'bg-gradient-to-br from-amber-500 to-orange-600',
  },
]

export default function Team() {
  const sectionRef = useRef(null)
  const [activeMember, setActiveMember] = useState(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const elements = section.querySelectorAll('.fade-in')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="team" ref={sectionRef} className="py-20 bg-[#080d1a] scroll-mt-16 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Embedded shimmer animations */}
      <style>{`
        @keyframes shimmer-move {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .shimmer-line {
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.4), rgba(168, 85, 247, 0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer-move 4s linear infinite;
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-12 fade-in">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Dream Team</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">
            We Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-slate-400 max-w-sm mx-auto text-sm">
            One vision. Multiple talents. Every project delivered with excellence.
          </p>
        </div>

        {/* Single Unified Team Card */}
        <div className="fade-in relative max-w-3xl mx-auto">
          
          {/* Card Container */}
          <div className="relative bg-gradient-to-br from-[#0d1426] via-[#0f1730] to-[#080d1a] border border-white/8 rounded-3xl overflow-hidden shadow-2xl">

            {/* Shimmer top line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] shimmer-line" />

            {/* Inner glow blobs */}
            <div className="absolute top-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 p-8 sm:p-10">

              {/* Top row: Core Team badge + success ratio */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl" role="img" aria-label="Core Team">👥</span>
                  <div>
                    <p className="text-white font-bold text-base">Core Team</p>
                    <p className="text-slate-500 text-xs">5 specialists · 1 mission</p>
                  </div>
                </div>

                {/* Success badge */}
                <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-4 py-2 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                  <span className="text-orange-400" role="img" aria-label="Success">🔥</span>
                  100% Success Ratio
                </div>
              </div>

              {/* Static Avatars Grid */}
              <div className="flex flex-col items-center gap-5 sm:gap-6 mb-8 mt-6">
                {/* Top Row (4 members) */}
                <div className="flex justify-center gap-4 sm:gap-6">
                  {TEAM.slice(0, 4).map((member) => {
                    const isActive = activeMember === member.name
                    return (
                      <button
                        key={member.name}
                        onClick={() => setActiveMember(isActive ? null : member.name)}
                        onMouseEnter={() => setActiveMember(member.name)}
                        className="focus:outline-none transition-transform duration-300 hover:scale-105 active:scale-95"
                      >
                        <div
                          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${member.bg} flex items-center justify-center text-white font-extrabold text-xl sm:text-2xl transition-all duration-300 ${
                            isActive ? 'ring-4 ring-white/20 scale-110' : 'ring-4 ring-[#0d1426]'
                          }`}
                          style={{ boxShadow: isActive ? `0 0 25px ${member.shadowColor}` : `0 4px 15px ${member.shadowColor}` }}
                        >
                          {member.initials}
                        </div>
                      </button>
                    )
                  })}
                </div>

                {/* Bottom Row (1 member) */}
                <div className="flex justify-center">
                  {TEAM.slice(4).map((member) => {
                    const isActive = activeMember === member.name
                    return (
                      <button
                        key={member.name}
                        onClick={() => setActiveMember(isActive ? null : member.name)}
                        onMouseEnter={() => setActiveMember(member.name)}
                        className="focus:outline-none transition-transform duration-300 hover:scale-105 active:scale-95"
                      >
                        <div
                          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${member.bg} flex items-center justify-center text-white font-extrabold text-xl sm:text-2xl transition-all duration-300 ${
                            isActive ? 'ring-4 ring-white/20 scale-110' : 'ring-4 ring-[#0d1426]'
                          }`}
                          style={{ boxShadow: isActive ? `0 0 25px ${member.shadowColor}` : `0 4px 15px ${member.shadowColor}` }}
                        >
                          {member.initials}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Selected Member Info Panel */}
              <div className="h-16 flex flex-col items-center justify-center mb-10 bg-white/5 border border-white/5 rounded-2xl mx-auto max-w-[200px] transition-all duration-300 shadow-inner">
                {activeMember ? (() => {
                  const member = TEAM.find(m => m.name === activeMember)
                  return (
                    <div className="text-center transition-all duration-300 animate-in fade-in zoom-in-95">
                      <p className="text-white font-bold text-sm sm:text-base flex items-center justify-center gap-1.5">
                        {member.emoji} {member.name}
                      </p>
                      <p className="text-blue-400 font-semibold text-[10px] uppercase tracking-wider mt-0.5">{member.role}</p>
                    </div>
                  )
                })() : (
                  <p className="text-slate-500 text-xs font-semibold animate-pulse tracking-wide">Tap a team member</p>
                )}
              </div>

              {/* Bottom stats strip */}
              <div className="grid grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
                {[
                  { value: '5+', label: 'Members' },
                  { value: '100%', label: 'Success' },
                  { value: '∞', label: 'Together' },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-[#0d1426]/80 flex flex-col items-center justify-center py-4 gap-1">
                    <span
                      className="text-2xl font-extrabold"
                      style={{
                        background: 'linear-gradient(135deg, #60a5fa, #93c5fd)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {value}
                    </span>
                    <span className="text-slate-500 text-[10px] font-medium uppercase tracking-wider">{label}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Shimmer bottom line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] shimmer-line" />
          </div>
        </div>

      </div>
    </section>
  )
}

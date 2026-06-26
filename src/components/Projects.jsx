import { useEffect, useRef, useState } from 'react'
import { CheckCircle, ExternalLink, Play, Pause } from 'lucide-react'

const PROJECTS = [
  {
    number: '01',
    title: 'Mor Panthal',
    platform: 'WordPress',
    description:
      'Built a food & beverage brand website with a yellow theme, mobile friendly layout, and smooth user experience.',
    tags: ['WordPress', 'UI/UX', 'Razorpay'],
    link: 'https://sisufoodsupply.unaux.com',
    image: '/mor_panthal_new.png',
    problem: 'Client lacked a professional online presence to showcase food and beverage offerings and process digital payments.',
    solution: 'Built a mobile-first WordPress storefront, integrating a custom fast-loading yellow visual identity.',
    outcome: 'Launched a high-converting storefront that seamlessly manages client checkouts, payments, and product inventory.',
    tagColors: [
      'bg-blue-500/10 text-blue-400 border-blue-500/20',
      'bg-pink-500/10 text-pink-400 border-pink-500/20',
      'bg-green-500/10 text-green-400 border-green-500/20',
    ],
    checklist: [
      'WordPress setup',
      'Custom theme sections layout',
      'Razorpay payment gateway',
      'Product and inventory config',
    ],
    accent: 'from-yellow-400 to-orange-500',
    accentColor: '#f59e0b',
  },
  {
    number: '02',
    title: 'Personal Portfolio',
    platform: 'React + Tailwind CSS',
    description:
      'A premium developer portfolio with high-performance animations, collapsible timeline cards, and single-card team display.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'SEO'],
    link: 'https://inayathbasha.vercel.app',
    image: '/portfolio_new.png',
    problem: 'Needed a premium, accessible, and fast developer portfolio that displays skills, projects, and services dynamically.',
    solution: 'Created a React + Vite single-page application built on Tailwind CSS, styled with fluid Framer Motion animations.',
    outcome: 'Achieved near-perfect 100/100 Lighthouse performance, accessibility, and SEO audit scores on all devices.',
    tagColors: [
      'bg-blue-500/10 text-blue-400 border-blue-500/20',
      'bg-purple-500/10 text-purple-400 border-purple-500/20',
      'bg-pink-500/10 text-pink-400 border-pink-500/20',
      'bg-green-500/10 text-green-400 border-green-500/20',
    ],
    checklist: [
      'Responsive React + Tailwind build',
      'Smooth transitions & scroll animations',
      'Vercel hosting & performance audit',
      'Dynamic interactive sections',
    ],
    accent: 'from-blue-500 to-indigo-600',
    accentColor: '#3b82f6',
  },
  {
    number: '03',
    title: 'AI Image Generation',
    platform: 'Stable Diffusion + Midjourney',
    description:
      'Created high-fidelity commercial product visualizations and marketing assets from raw camera captures using generative AI workflows.',
    tags: ['Generative AI', 'Midjourney', 'Stable Diffusion', 'Photoshop'],
    link: 'https://tintandshade.in/',
    image: '/tint_shade_after.jpg',
    beforeImage: '/tint_shade_before.jpg',
    afterImage: '/tint_shade_after.jpg',
    problem: 'Commercial advertising photography setups usually require expensive props, studios, lighting, and cameras.',
    solution: 'Built a generative AI pipeline utilizing Stable Diffusion, Midjourney, and Photoshop to convert raw capture mockups.',
    outcome: 'Reduced commercial photo production costs by 80% while delivering studio-grade high-res marketing graphics.',
    tagColors: [
      'bg-blue-500/10 text-blue-400 border-blue-500/20',
      'bg-purple-500/10 text-purple-400 border-purple-500/20',
      'bg-pink-500/10 text-pink-400 border-pink-500/20',
      'bg-green-500/10 text-green-400 border-green-500/20',
    ],
    checklist: [
      'Raw camera photo processing',
      'AI prompt engineering & generation',
      'Multi-pass inpainting & outpainting',
      'High-res commercial retouching',
    ],
    accent: 'from-purple-500 to-pink-600',
    accentColor: '#a855f7',
  },
]

export default function Projects() {
  const sectionRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [fadeState, setFadeState] = useState('opacity-100 translate-y-0') // active transition state
  const [sliderPosition, setSliderPosition] = useState(50)
  const [mobileSliderPositions, setMobileSliderPositions] = useState({})
  const [expandedMobileProject, setExpandedMobileProject] = useState(null)
  const timerRef = useRef(null)

  // Trigger state transition when changing project
  const changeProject = (index) => {
    setFadeState('opacity-0 translate-y-1')
    setTimeout(() => {
      setCurrentIndex(index)
      setSliderPosition(50)
      setFadeState('opacity-100 translate-y-0')
    }, 200)
  }

  // Setup interval cycle for desktop auto-play
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        const nextIndex = (currentIndex + 1) % PROJECTS.length
        changeProject(nextIndex)
      }, 8000)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [currentIndex, isPlaying])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const elements = section.querySelectorAll('.fade-in-section')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const currentProject = PROJECTS[currentIndex]

  return (
    <section id="projects" ref={sectionRef} className="py-16 sm:py-24 bg-[#0a0f1e] scroll-mt-16 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Embedded shimmer animations & custom styles */}
      <style>{`
        @keyframes shimmer-move {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .shimmer-line {
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.3), transparent);
          background-size: 200% 100%;
          animation: shimmer-move 4s linear infinite;
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 fade-in-section">
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-1.5 mb-3.5">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-sm mx-auto text-xs sm:text-sm">
            Discover real-world projects and design solutions built for global clients.
          </p>
        </div>

        {/* ========================================================== */}
        {/* 1. DESKTOP ONLY PRESENTATION VIEW (lg:block, hidden on mobile) */}
        {/* ========================================================== */}
        {/* 1. DESKTOP ONLY PRESENTATION VIEW (Alternating Rows) */}
        {/* ========================================================== */}
        <div className="hidden lg:flex flex-col gap-32 mt-12 max-w-7xl mx-auto px-6">
          {PROJECTS.map((proj, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={proj.title} className={`flex items-center gap-16 fade-in-section ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                
                {/* Visual Side (Mockup) */}
                <div className="w-[55%] relative group perspective-1000">
                  <div className={`rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#080d1a] relative transition-transform duration-700 transform group-hover:scale-[1.02] ${isEven ? 'hover:-rotate-1' : 'hover:rotate-1'}`}>
                    
                    {/* Browser header chrome bar */}
                    <div className="bg-[#0e172e] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                        <div className="w-3 h-3 rounded-full bg-green-400/80" />
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="bg-[#080d1a] rounded-md px-4 py-1 text-xs text-slate-500 flex items-center gap-2 min-w-[200px] max-w-[400px] overflow-hidden truncate justify-center border border-white/5">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${proj.accent} flex-shrink-0`} />
                          {proj.link ? proj.link.replace('https://', '') : 'portfolio.local'}
                        </div>
                      </div>
                    </div>

                    {/* Viewport container */}
                    {proj.beforeImage && proj.afterImage ? (
                      <div className="relative h-[450px] overflow-hidden bg-[#0d1426] select-none">
                        <div className="absolute inset-0">
                          <img src={proj.beforeImage} alt="Before AI" className="w-full h-full object-cover" />
                          <div className="absolute top-4 left-4 bg-black/75 text-white text-xs font-bold px-3 py-1.5 rounded border border-white/10 uppercase tracking-wider backdrop-blur-sm shadow-xl">
                            Camera Capture
                          </div>
                        </div>

                        <div 
                          className="absolute inset-0"
                          style={{ clipPath: `polygon(0 0, ${mobileSliderPositions[idx] ?? 50}% 0, ${mobileSliderPositions[idx] ?? 50}% 100%, 0 100%)` }}
                        >
                          <img src={proj.afterImage} alt="After AI" className="w-full h-full object-cover" />
                          <div className="absolute top-4 right-4 bg-purple-600/90 text-white text-xs font-bold px-3 py-1.5 rounded border border-purple-500/20 uppercase tracking-wider shadow-xl backdrop-blur-sm">
                            AI Generated
                          </div>
                        </div>

                        <div 
                          className="absolute inset-y-0 w-[2px] bg-white/80 cursor-ew-resize flex items-center justify-center pointer-events-none"
                          style={{ left: `${mobileSliderPositions[idx] ?? 50}%` }}
                        >
                          <div className="w-10 h-10 bg-slate-900 rounded-full shadow-2xl border-[3px] border-white/90 flex items-center justify-center -ml-[20px] pointer-events-auto transition-transform hover:scale-110">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l-4 4 4 4m8-8l4 4-4 4" />
                            </svg>
                          </div>
                        </div>

                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={mobileSliderPositions[idx] ?? 50}
                          onChange={(e) => updateMobileSlider(idx, Number(e.target.value))}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                        />
                      </div>
                    ) : (
                      <a href={proj.link} target="_blank" rel="noopener noreferrer" className="block relative h-[450px] overflow-hidden bg-[#0d1426] cursor-pointer">
                        <img
                          src={proj.image}
                          alt={`${proj.title} Live Preview`}
                          className="w-full h-auto object-cover object-top transition-transform duration-[8s] ease-in-out transform translate-y-0 group-hover:translate-y-[calc(-100%+450px)]"
                        />
                        <div className="absolute inset-0 bg-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                          <div className="bg-slate-900/95 text-white font-bold text-sm px-6 py-3 rounded-full border border-white/20 shadow-2xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            <ExternalLink size={16} className="text-blue-400" />
                            <span>Launch Live Preview</span>
                          </div>
                        </div>
                      </a>
                    )}
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-[45%] flex flex-col space-y-8 relative">
                  {/* Huge watermark number */}
                  <div className={`absolute -top-24 ${isEven ? '-left-12' : '-right-12'} text-[280px] leading-none font-black text-white/[0.03] pointer-events-none select-none z-0`}>
                    {proj.number}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-5">
                      <span className={`text-xl font-black bg-gradient-to-r ${proj.accent} bg-clip-text text-transparent`}>
                        {proj.number}
                      </span>
                      <div className={`h-px w-12 bg-gradient-to-r ${proj.accent} opacity-50`} />
                      <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">{proj.platform}</span>
                    </div>
                    
                    <h3 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">{proj.title}</h3>
                    <p className="text-slate-300 text-lg leading-relaxed">{proj.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    <div className="bg-[#0b1021] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors shadow-inner">
                      <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">The Challenge</h5>
                      <p className="text-sm text-slate-300 leading-relaxed">{proj.problem}</p>
                    </div>
                    <div className="bg-[#0b1021] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors shadow-inner">
                      <h5 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">The Solution</h5>
                      <p className="text-sm text-slate-300 leading-relaxed">{proj.solution}</p>
                    </div>
                  </div>

                  <div className="relative z-10 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
                    <div className="flex-1">
                      <h5 className="text-xs font-black text-green-400 uppercase tracking-widest mb-2">Impact & Outcome</h5>
                      <p className="text-base font-semibold text-white leading-relaxed">{proj.outcome}</p>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {proj.tags.map((tag, i) => (
                          <span key={tag} className={`text-xs font-bold px-3 py-1 rounded-full border bg-[#080d1a] ${proj.tagColors[i] || 'text-slate-400 border-slate-500/20'}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {proj.link && (
                      <a href={proj.link} target="_blank" rel="noopener noreferrer" className={`flex-shrink-0 group relative overflow-hidden rounded-xl bg-gradient-to-r ${proj.accent} text-white font-bold text-sm px-6 py-4 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center gap-2`}>
                        <span className="relative z-10">View Project</span>
                        <ExternalLink size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                  
                </div>
              </div>
            )
          })}
        </div>

        {/* ========================================================== */}
        {/* 2. MOBILE ONLY SWIPE VIEW (lg:hidden, block on smaller devices) */}
        {/* ========================================================== */}
        <div className="block lg:hidden w-full overflow-hidden">
          {/* Swiper track */}
          <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-5 pb-8 pt-6 px-4 scroll-smooth">
            {PROJECTS.map((proj, index) => {
              const isExpanded = expandedMobileProject === index;
              return (
              <div 
                key={proj.title}
                className="min-w-[88vw] max-w-[88vw] sm:min-w-[70vw] sm:max-w-[70vw] snap-center bg-[#0d1426] border border-white/10 rounded-3xl p-5 flex flex-col shadow-2xl relative"
              >
                {/* HIGHLY HIGHLIGHTED PROJECT NUMBER */}
                <div className={`absolute -top-5 -right-2 w-12 h-12 rounded-full bg-gradient-to-br ${proj.accent} flex items-center justify-center text-white font-black text-lg shadow-[0_0_20px_rgba(0,0,0,0.5)] border-4 border-[#0a0f1e] z-30`}>
                  {parseInt(proj.number)}
                </div>

                {/* Mockup Header */}
                <div className="mb-4 pr-8">
                  <h3 className="text-xl font-black text-white">{proj.title}</h3>
                  <p className={`text-[10px] font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${proj.accent}`}>
                    {proj.platform}
                  </p>
                </div>

                {/* Browser-like window wrapper */}
                <div className="rounded-xl overflow-hidden border border-white/10 bg-[#080d1a] relative mb-4 shadow-inner">
                  {/* Before/After AI Image Slider OR Scroll preview */}
                  {proj.beforeImage && proj.afterImage ? (
                    <div className="relative h-[180px] overflow-hidden bg-[#0d1426] select-none">
                      <div className="absolute inset-0">
                        <img src={proj.beforeImage} alt="Before AI" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute inset-0" style={{ clipPath: `polygon(0 0, ${mobileSliderPositions[index] ?? 50}% 0, ${mobileSliderPositions[index] ?? 50}% 100%, 0 100%)` }}>
                        <img src={proj.afterImage} alt="After AI" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute inset-y-0 w-[3px] bg-white cursor-ew-resize flex items-center justify-center pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)]" style={{ left: `${mobileSliderPositions[index] ?? 50}%` }}>
                        <div className="w-6 h-6 bg-slate-900 rounded-full shadow-lg border-2 border-white flex items-center justify-center -ml-[12px] pointer-events-auto">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 9l-4 4 4 4m8-8l4 4-4 4" />
                          </svg>
                        </div>
                      </div>
                      <input type="range" min="0" max="100" value={mobileSliderPositions[index] ?? 50} onChange={(e) => setMobileSliderPositions(prev => ({ ...prev, [index]: Number(e.target.value) }))} className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20" />
                    </div>
                  ) : (
                    <div className="relative h-[180px] overflow-hidden bg-[#0d1426]">
                      <img src={proj.image} alt={`${proj.title} Preview`} className="w-full h-full object-cover object-top" />
                    </div>
                  )}
                </div>

                {/* Tag pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tags.slice(0, 3).map((tag, i) => (
                    <span key={tag} className={`text-[10px] font-extrabold px-2.5 py-1 rounded-md border ${proj.tagColors[i] || 'bg-slate-500/10 text-slate-400 border-slate-500/20'}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ACCORDION TRIGGER */}
                <button 
                  onClick={() => setExpandedMobileProject(isExpanded ? null : index)}
                  className="w-full py-2.5 mb-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold text-slate-300 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  {isExpanded ? 'Hide Details' : 'Read Case Study'}
                  <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* ACCORDION CONTENT */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-3">
                    <p className="text-slate-300 text-xs leading-relaxed">{proj.description}</p>
                    <div className="grid grid-cols-1 gap-2 bg-black/40 rounded-xl p-3 border border-white/5">
                      <div>
                        <p className="text-[10px] font-extrabold text-blue-400 uppercase tracking-wider mb-0.5">Problem</p>
                        <p className="text-[11px] text-slate-400 leading-snug">{proj.problem}</p>
                      </div>
                      <div className="border-t border-white/5 pt-2 mt-1">
                        <p className="text-[10px] font-extrabold text-green-400 uppercase tracking-wider mb-0.5">Outcome</p>
                        <p className="text-[11px] text-slate-400 leading-snug">{proj.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-grow" />

                {/* Footer Buttons & Swipe Hint */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto gap-4">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 min-h-[48px] bg-gradient-to-r ${proj.accent} text-white font-extrabold text-[11px] uppercase tracking-wide rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-95 transition-transform`}
                  >
                    <ExternalLink size={14} />
                    <span>View Project</span>
                  </a>
                  
                  {/* Improved Swipe Hint */}
                  <div className="flex flex-col items-center justify-center w-16 opacity-80 shrink-0">
                    <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest mb-0.5">Swipe</span>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 animate-ping" />
                      <svg className="w-4 h-4 text-white/50 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

              </div>
            );
            })}
          </div>

          {/* Bottom global touch indicator */}
          <div className="flex items-center justify-center gap-2 mt-2 opacity-50 pb-4">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Scroll horizontally for more</span>
          </div>
        </div>

      </div>
    </section>
  )
}

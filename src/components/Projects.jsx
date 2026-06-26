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
        <div className="hidden lg:grid grid-cols-2 gap-6 max-w-6xl mx-auto fade-in-section items-stretch">
          
          {/* ---------------- PROJECT 1 (Mor Panthal) - Full Width Row ---------------- */}
          <div className="col-span-2 rounded-[2rem] bg-[#0d1426] border border-white/5 overflow-hidden group relative flex items-center min-h-[400px] shadow-2xl">
            {/* Background Glow */}
            <div className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br ${PROJECTS[0].accent} opacity-[0.02]`} />
            
            {/* Left Content (45%) */}
            <div className="w-[45%] p-10 relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-5xl font-black bg-gradient-to-br ${PROJECTS[0].accent} bg-clip-text text-transparent opacity-40 leading-none`}>
                    {PROJECTS[0].number}
                  </span>
                  <div className={`h-[2px] w-12 bg-gradient-to-r ${PROJECTS[0].accent} rounded-full`} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">{PROJECTS[0].title}</h3>
                <p className="text-blue-400 font-bold text-[10px] uppercase tracking-widest mb-6">{PROJECTS[0].platform}</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">{PROJECTS[0].description}</p>
                
                <div className="space-y-3 mb-8">
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase">Challenge:</span>
                    <p className="text-xs text-slate-400 mt-1">{PROJECTS[0].problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase">Outcome:</span>
                    <p className="text-xs text-slate-300 mt-1 font-medium">{PROJECTS[0].outcome}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {PROJECTS[0].tags.map((tag, i) => (
                    <span key={tag} className={`text-[10px] font-bold px-3 py-1 rounded-full border bg-[#0b1021] ${PROJECTS[0].tagColors[i] || 'text-slate-400 border-slate-500/20'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <a href={PROJECTS[0].link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${PROJECTS[0].accent} text-white font-bold text-xs rounded-xl transition-all shadow-lg hover:scale-105 active:scale-95`}>
                  <ExternalLink size={14} /> Visit Project
                </a>
              </div>
            </div>
            
            {/* Right Image (55%) */}
            <div className="absolute right-0 top-0 bottom-0 w-[55%] bg-[#080d1a] border-l border-white/5 shadow-[-20px_0_40px_rgba(0,0,0,0.5)] overflow-hidden">
              {/* Fake Browser Chrome */}
              <div className="bg-[#0e172e] px-4 py-2 flex items-center gap-1.5 border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                <div className="ml-4 text-[9px] text-slate-500 bg-[#0a0f1e] px-3 py-0.5 rounded-md border border-white/5">{PROJECTS[0].link.replace('https://', '')}</div>
              </div>
              <div className="w-full h-[calc(100%-33px)] relative overflow-hidden bg-[#0d1426]">
                <img src={PROJECTS[0].image} alt="Mor Panthal" className="w-full h-full object-cover object-top transition-transform duration-[8s] ease-in-out group-hover:scale-[1.03]" />
              </div>
            </div>
          </div>


          {/* ---------------- PROJECT 2 (Portfolio) - Half Width ---------------- */}
          <div className="col-span-1 rounded-[2rem] bg-[#0d1426] border border-white/5 overflow-hidden group relative flex flex-col min-h-[500px] shadow-2xl">
            {/* Top Image (50%) */}
            <div className="h-[250px] w-full bg-[#080d1a] border-b border-white/5 overflow-hidden relative">
              <div className="bg-[#0e172e] px-4 py-2 flex items-center gap-1.5 border-b border-white/5 absolute top-0 w-full z-10">
                <div className="w-2 h-2 rounded-full bg-red-400/80" />
                <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
                <div className="w-2 h-2 rounded-full bg-green-400/80" />
              </div>
              <div className="w-full h-full pt-[33px] relative overflow-hidden bg-[#0d1426]">
                <img src={PROJECTS[1].image} alt="Portfolio" className="w-full h-full object-cover object-top transition-transform duration-[8s] ease-in-out group-hover:scale-[1.03]" />
              </div>
            </div>

            {/* Bottom Content (50%) */}
            <div className="p-8 relative z-10 flex flex-col flex-1 justify-between bg-gradient-to-t from-[#0a0f1e] to-[#0d1426]">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{PROJECTS[1].title}</h3>
                    <p className="text-purple-400 font-bold text-[9px] uppercase tracking-widest">{PROJECTS[1].platform}</p>
                  </div>
                  <span className={`text-4xl font-black bg-gradient-to-br ${PROJECTS[1].accent} bg-clip-text text-transparent opacity-30 leading-none`}>
                    {PROJECTS[1].number}
                  </span>
                </div>
                
                <p className="text-slate-300 text-xs leading-relaxed mb-4">{PROJECTS[1].description}</p>
                
                <div className="bg-[#0b1021] p-3 rounded-xl border border-white/5 mb-6">
                  <span className="text-[9px] font-bold text-slate-500 uppercase block mb-1">Outcome:</span>
                  <p className="text-xs text-slate-300">{PROJECTS[1].outcome}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-end">
                <div className="flex flex-wrap gap-1.5 max-w-[60%]">
                  {PROJECTS[1].tags.slice(0,3).map((tag, i) => (
                    <span key={tag} className={`text-[9px] font-bold px-2 py-0.5 rounded-full border bg-[#0b1021] ${PROJECTS[1].tagColors[i] || 'text-slate-400 border-slate-500/20'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={PROJECTS[1].link} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 flex items-center justify-center bg-gradient-to-r ${PROJECTS[1].accent} text-white rounded-full transition-all shadow-lg hover:scale-110 active:scale-95`}>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>


          {/* ---------------- PROJECT 3 (AI Images) - Half Width ---------------- */}
          <div className="col-span-1 rounded-[2rem] bg-[#0d1426] border border-white/5 overflow-hidden group relative flex flex-col min-h-[500px] shadow-2xl">
            {/* Top Slider (50%) */}
            <div className="h-[250px] w-full bg-[#080d1a] border-b border-white/5 overflow-hidden relative select-none">
              <div className="bg-[#0e172e] px-4 py-2 flex items-center justify-between border-b border-white/5 absolute top-0 w-full z-30 shadow-md">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-600" />
                  <div className="w-2 h-2 rounded-full bg-slate-600" />
                </div>
                <div className="text-[9px] text-slate-400 font-medium">Interactive Before / After</div>
              </div>
              
              <div className="w-full h-full pt-[33px] relative overflow-hidden bg-[#0d1426] group/slider">
                {/* Before Image */}
                <div className="absolute inset-0 pt-[33px]">
                  <img src={PROJECTS[2].beforeImage} alt="Before" className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 left-3 bg-black/75 text-white text-[9px] font-bold px-2 py-0.5 rounded border border-white/10 uppercase tracking-wider backdrop-blur-sm z-10">
                    Camera
                  </div>
                </div>

                {/* After Image */}
                <div className="absolute inset-0 pt-[33px] z-10" style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}>
                  <img src={PROJECTS[2].afterImage} alt="After" className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 right-3 bg-purple-600/90 text-white text-[9px] font-bold px-2 py-0.5 rounded border border-purple-500/20 uppercase tracking-wider shadow-lg backdrop-blur-sm">
                    AI Gen
                  </div>
                </div>

                {/* Slider bar */}
                <div className="absolute inset-y-0 w-[2px] bg-white/80 cursor-ew-resize flex items-center justify-center pointer-events-none z-20 pt-[33px]" style={{ left: `${sliderPosition}%` }}>
                  <div className="w-7 h-7 bg-slate-900 rounded-full shadow-xl border-2 border-white/80 flex items-center justify-center -ml-[14px] pointer-events-auto">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l-4 4 4 4m8-8l4 4-4 4" />
                    </svg>
                  </div>
                </div>

                <input type="range" min="0" max="100" value={sliderPosition} onChange={(e) => setSliderPosition(Number(e.target.value))} className="absolute inset-0 pt-[33px] w-full h-full opacity-0 cursor-ew-resize z-30" />
              </div>
            </div>

            {/* Bottom Content (50%) */}
            <div className="p-8 relative z-10 flex flex-col flex-1 justify-between bg-gradient-to-t from-[#0a0f1e] to-[#0d1426]">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{PROJECTS[2].title}</h3>
                    <p className="text-pink-400 font-bold text-[9px] uppercase tracking-widest">{PROJECTS[2].platform}</p>
                  </div>
                  <span className={`text-4xl font-black bg-gradient-to-br ${PROJECTS[2].accent} bg-clip-text text-transparent opacity-30 leading-none`}>
                    {PROJECTS[2].number}
                  </span>
                </div>
                
                <p className="text-slate-300 text-xs leading-relaxed mb-4">{PROJECTS[2].description}</p>
                
                <div className="bg-[#0b1021] p-3 rounded-xl border border-white/5 mb-6">
                  <span className="text-[9px] font-bold text-slate-500 uppercase block mb-1">Outcome:</span>
                  <p className="text-xs text-slate-300">{PROJECTS[2].outcome}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-end">
                <div className="flex flex-wrap gap-1.5 max-w-[60%]">
                  {PROJECTS[2].tags.slice(0,3).map((tag, i) => (
                    <span key={tag} className={`text-[9px] font-bold px-2 py-0.5 rounded-full border bg-[#0b1021] ${PROJECTS[2].tagColors[i] || 'text-slate-400 border-slate-500/20'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={PROJECTS[2].link} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 flex items-center justify-center bg-gradient-to-r ${PROJECTS[2].accent} text-white rounded-full transition-all shadow-lg hover:scale-110 active:scale-95`}>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

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

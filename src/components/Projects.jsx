import { useEffect, useRef, useState } from 'react'
import { CheckCircle, ExternalLink, Play, Pause } from 'lucide-react'

const PROJECTS = [
  {
    number: '01',
    title: 'Mor Panthal',
    platform: 'WordPress + WooCommerce',
    description:
      'Built a food & beverage brand website with a yellow theme, mobile friendly layout, and smooth user experience.',
    tags: ['WordPress', 'WooCommerce', 'UI/UX', 'Razorpay'],
    link: 'https://sisufoodsupply.unaux.com',
    image: '/mor_panthal_new.png',
    problem: 'Client lacked a professional online presence to showcase food and beverage offerings and process digital payments.',
    solution: 'Built a mobile-first WordPress storefront powered by WooCommerce, integrating a custom fast-loading yellow visual identity.',
    outcome: 'Launched a high-converting storefront that seamlessly manages client checkouts, payments, and product inventory.',
    tagColors: [
      'bg-blue-500/10 text-blue-400 border-blue-500/20',
      'bg-purple-500/10 text-purple-400 border-purple-500/20',
      'bg-pink-500/10 text-pink-400 border-pink-500/20',
      'bg-green-500/10 text-green-400 border-green-500/20',
    ],
    checklist: [
      'WordPress & WooCommerce setup',
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
        <div 
          className="hidden lg:block fade-in-section max-w-4xl mx-auto"
          onMouseEnter={() => setIsPlaying(false)} // Pause cycling on hover
          onMouseLeave={() => setIsPlaying(true)}  // Resume cycling on leave
        >
          {/* Main Presentation Container */}
          <div className="relative bg-gradient-to-br from-[#0d1426] via-[#0f1730] to-[#080d1a] border border-white/8 rounded-2xl overflow-hidden shadow-xl">
            
            {/* Shimmer top border line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] shimmer-line" />

            <div className="p-7 relative z-10">
              
              {/* Tabs / Selector row */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  {PROJECTS.map((proj, idx) => {
                    const isActive = currentIndex === idx
                    return (
                      <button
                        key={proj.title}
                        onClick={() => changeProject(idx)}
                        className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all duration-300 ${
                          isActive
                            ? `text-white bg-gradient-to-r ${proj.accent} shadow-md`
                            : 'text-slate-400 hover:text-white bg-white/5 border border-white/5'
                        }`}
                      >
                        {proj.number}. {proj.title}
                      </button>
                    )
                  })}
                </div>

                {/* Auto Cycle control button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-1 text-[10px] text-slate-500 hover:text-slate-300 font-semibold px-2 py-1 rounded bg-white/5 border border-white/5"
                >
                  {isPlaying ? <Pause size={9} className="animate-pulse" /> : <Play size={9} />}
                  <span>{isPlaying ? 'Auto' : 'Paused'}</span>
                </button>
              </div>

              {/* Combined Layout columns */}
              <div className="flex flex-col lg:flex-row gap-6 items-stretch">
                
                {/* Browser Viewport Mockup */}
                <div className={`w-full lg:w-[48%] flex flex-col justify-center transition-all duration-200 transform ${fadeState}`}>
                  <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-[#080d1a] relative group">
                    
                    {/* Browser header chrome bar */}
                    <div className="bg-[#0e172e] px-3 py-2 flex items-center gap-1.5 border-b border-white/5">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-400/80" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
                        <div className="w-2 h-2 rounded-full bg-green-400/80" />
                      </div>
                      <div className="flex-1 mx-2">
                        <div className="bg-[#080d1a] rounded px-2 py-0.5 text-[9px] text-slate-500 flex items-center gap-1 max-w-[150px] overflow-hidden truncate">
                          <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${currentProject.accent} flex-shrink-0`} />
                          {currentProject.link.replace('https://', '')}
                        </div>
                      </div>
                    </div>

                    {/* Viewport container with auto scrolling image on hover OR Before-After slider */}
                    {currentProject.beforeImage && currentProject.afterImage ? (
                      <div className="relative h-[200px] sm:h-[250px] overflow-hidden bg-[#0d1426] select-none group">
                        {/* Before Image (underneath) */}
                        <div className="absolute inset-0">
                          <img
                            src={currentProject.beforeImage}
                            alt="Before AI Generation"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 left-2 bg-black/75 text-white text-[9px] font-bold px-2 py-0.5 rounded border border-white/10 uppercase tracking-wider">
                            Camera Capture
                          </div>
                        </div>

                        {/* After Image (clipped width controlled by clipPath) */}
                        <div 
                          className="absolute inset-0"
                          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                        >
                          <img
                            src={currentProject.afterImage}
                            alt="After AI Generation"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-purple-600/90 text-white text-[9px] font-bold px-2 py-0.5 rounded border border-purple-500/20 uppercase tracking-wider">
                            AI Generated
                          </div>
                        </div>

                        {/* Slider bar line */}
                        <div 
                          className="absolute inset-y-0 w-[2px] bg-white/80 cursor-ew-resize flex items-center justify-center pointer-events-none"
                          style={{ left: `${sliderPosition}%` }}
                        >
                          <div className="w-6 h-6 bg-slate-900 rounded-full shadow-lg border border-white/20 flex items-center justify-center -ml-[12px] pointer-events-auto">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 9l-4 4 4 4m8-8l4 4-4 4" />
                            </svg>
                          </div>
                        </div>

                        {/* Invisible range input for dragging */}
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={sliderPosition}
                          onChange={(e) => setSliderPosition(Number(e.target.value))}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                        />
                      </div>
                    ) : (
                      <a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative h-[200px] sm:h-[250px] overflow-hidden bg-[#0d1426] cursor-pointer"
                      >
                        <img
                          src={currentProject.image}
                          alt={`${currentProject.title} Live Preview`}
                          className="w-full h-auto object-cover object-top transition-transform duration-[6s] ease-in-out transform translate-y-0 group-hover:translate-y-[calc(-100%+200px)] sm:group-hover:translate-y-[calc(-100%+250px)]"
                        />

                        {/* Click to visit hover indicator pill */}
                        <div className="absolute inset-0 bg-blue-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-slate-900/90 text-white font-bold text-[10px] px-3 py-1.5 rounded-full border border-white/10 shadow flex items-center gap-1 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                            <ExternalLink size={10} className="text-blue-400" />
                            <span>Visit Live Site</span>
                          </div>
                        </div>

                        {/* Vignette overlay */}
                        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.35)]" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Left column: Content details */}
                <div className={`w-full lg:w-[52%] flex flex-col justify-between transition-all duration-200 transform ${fadeState}`}>
                  <div className="space-y-3.5">
                    
                    {/* Project Header Title & Number */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className={`text-4xl font-bold bg-gradient-to-r ${currentProject.accent} bg-clip-text text-transparent opacity-30 select-none leading-none`}>
                          {currentProject.number}
                        </span>
                        <div className={`h-px flex-1 bg-gradient-to-r ${currentProject.accent} opacity-20`} />
                      </div>

                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-0.5">{currentProject.title}</h3>
                        <p className="text-blue-400 font-semibold text-[10px] uppercase tracking-wider">{currentProject.platform}</p>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{currentProject.description}</p>

                    {/* Case Study Details (Problem, Solution, Outcome) */}
                    <div className="bg-[#0b1021]/85 rounded-xl p-3.5 border border-white/5 space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <p className="text-blue-400 font-bold uppercase tracking-wider text-[9px]">Problem</p>
                          <p className="text-slate-300 text-xs leading-relaxed">{currentProject.problem}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-blue-400 font-bold uppercase tracking-wider text-[9px]">Solution</p>
                          <p className="text-slate-300 text-xs leading-relaxed">{currentProject.solution}</p>
                        </div>
                      </div>
                      <div className="border-t border-white/5 pt-2">
                        <div className="space-y-1">
                          <p className="text-green-400 font-bold uppercase tracking-wider text-[9px]">Outcome</p>
                          <p className="text-slate-300 text-xs leading-relaxed">{currentProject.outcome}</p>
                        </div>
                      </div>
                    </div>

                    {/* Tag pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {currentProject.tags.map((tag, i) => (
                        <span
                          key={tag}
                          className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${currentProject.tagColors[i] || 'bg-slate-500/10 text-slate-400 border-slate-500/20'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Preview button */}
                  {currentProject.link && (
                    <div className="pt-3">
                      <a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`shine inline-flex items-center gap-1.5 min-h-[38px] px-4 py-2 bg-gradient-to-r ${currentProject.accent} text-white font-bold text-xs rounded-lg transition-all duration-200 shadow-md hover:-translate-y-0.5 active:translate-y-0`}
                      >
                        <ExternalLink size={13} />
                        <span>Live Preview</span>
                      </a>
                    </div>
                  )}
                </div>

              </div>

            </div>

            {/* Shimmer bottom border line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] shimmer-line" />
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

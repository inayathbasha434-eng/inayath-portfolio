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
  const [selectedProject, setSelectedProject] = useState(null)
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
        {/* UNIFIED RESPONSIVE SWIPE/CARD VIEW */}
        {/* ========================================================== */}
        <div className="w-full overflow-hidden">
          {/* Swiper / Grid track */}
          <div className="flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-visible snap-x lg:snap-none snap-mandatory no-scrollbar gap-5 lg:gap-6 xl:gap-8 pb-8 pt-6 px-4 lg:px-6 xl:px-8 max-w-7xl mx-auto">
            {PROJECTS.map((proj, index) => {
              const isExpanded = expandedMobileProject === index;
              return (
              <div 
                key={proj.title}
                className="min-w-[88vw] sm:min-w-[70vw] lg:min-w-0 lg:w-full snap-center lg:snap-align-none bg-[#0d1426] border border-white/10 rounded-[2rem] flex flex-col shadow-2xl relative transition-transform duration-300 hover:-translate-y-2 overflow-hidden"
              >
                
                {/* 1. EDGE-TO-EDGE IMAGE HEADER */}
                <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] overflow-hidden bg-[#080d1a] border-b border-white/10 shrink-0 group/mockup">
                  {/* Browser Chrome Header (Overlay on Hover) */}
                  <div className="absolute top-0 w-full z-30 bg-gradient-to-b from-[#0a0f1e]/90 to-transparent px-4 py-4 flex items-center gap-1.5 opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/90 shadow-sm" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/90 shadow-sm" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/90 shadow-sm" />
                    {proj.link && (
                      <div className="ml-auto text-[9px] text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 font-bold tracking-wider shadow-lg">
                        {proj.link.replace('https://', '')}
                      </div>
                    )}
                  </div>

                  {/* Before/After AI Image Slider OR Scroll preview */}
                  {proj.beforeImage && proj.afterImage ? (
                    <div className="w-full h-full select-none relative">
                      <div className="absolute inset-0">
                        <img src={proj.beforeImage} alt="Before AI" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute inset-0" style={{ clipPath: `polygon(0 0, ${mobileSliderPositions[index] ?? 50}% 0, ${mobileSliderPositions[index] ?? 50}% 100%, 0 100%)` }}>
                        <img src={proj.afterImage} alt="After AI" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute inset-y-0 w-[3px] bg-white cursor-ew-resize flex items-center justify-center pointer-events-none shadow-[0_0_15px_rgba(0,0,0,0.8)] z-20" style={{ left: `${mobileSliderPositions[index] ?? 50}%` }}>
                        <div className="w-8 h-8 bg-slate-900 rounded-full shadow-2xl border-2 border-white flex items-center justify-center -ml-[16px] pointer-events-auto">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 9l-4 4 4 4m8-8l4 4-4 4" />
                          </svg>
                        </div>
                      </div>
                      <input type="range" min="0" max="100" value={mobileSliderPositions[index] ?? 50} onChange={(e) => setMobileSliderPositions(prev => ({ ...prev, [index]: Number(e.target.value) }))} className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30" />
                    </div>
                  ) : (
                    <div className="w-full h-full relative">
                      <img src={proj.image} alt={`${proj.title} Preview`} className="w-full h-full object-cover object-top transition-all duration-[8s] ease-in-out group-hover/mockup:object-bottom" />
                      <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] pointer-events-none" />
                    </div>
                  )}
                </div>

                {/* 2. CARD CONTENT AREA */}
                <div className="p-6 lg:p-8 flex flex-col flex-grow">
                  
                  {/* Header */}
                  <div className="mb-3">
                    <h3 className="text-2xl font-black text-white leading-tight mb-2">{proj.title}</h3>
                    {/* Short Description */}
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      {proj.description}
                    </p>
                  </div>

                  {/* Tag pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.slice(0, 3).map((tag, i) => (
                      <span key={tag} className={`text-[10px] font-bold px-3 py-1 rounded-full border ${proj.tagColors[i] || 'bg-slate-500/10 text-slate-400 border-slate-500/20'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex-grow" />

                  {/* Buttons */}
                  <div className="flex items-center gap-4 mt-auto pt-2">
                    <button 
                      onClick={() => setSelectedProject(proj)}
                      className="flex-1 py-3.5 bg-transparent hover:bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 transition-all active:scale-95"
                    >
                      Project Overview &rarr;
                    </button>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r ${proj.accent} text-white font-bold text-xs rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-95 transition-transform`}
                    >
                      Live Project
                      <ExternalLink size={14} />
                    </a>
                  </div>

                </div>
              </div>
            );
            })}
          </div>

          {/* Bottom global touch indicator */}
          <div className="flex lg:hidden items-center justify-center gap-2 mt-2 opacity-50 pb-4">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Scroll horizontally for more</span>
          </div>
        </div>

      </div>

      {/* ========================================================== */}
      {/* PROJECT OVERVIEW MODAL */}
      {/* ========================================================== */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-[#080d1a]/90 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedProject(null)}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-4xl bg-[#0d1426] border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col my-auto max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-40 w-10 h-10 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-colors border border-white/10"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="overflow-y-auto w-full no-scrollbar">
              {/* Modal Hero Image */}
              <div className="w-full h-[250px] sm:h-[350px] relative bg-[#080d1a] border-b border-white/10">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1426] via-[#0d1426]/60 to-transparent opacity-90" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <p className={`text-xs font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${selectedProject.accent} mb-2`}>
                    {selectedProject.platform}
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-black text-white">{selectedProject.title}</h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8 sm:p-10 space-y-10">
                {/* Intro */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Overview</h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Problem & Solution Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/5 rounded-2xl p-6 lg:p-8 border border-white/5">
                  <div>
                    <h4 className="text-[11px] font-black text-blue-400 uppercase tracking-wider mb-2.5">The Challenge</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{selectedProject.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black text-green-400 uppercase tracking-wider mb-2.5">The Solution & Outcome</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{selectedProject.solution} {selectedProject.outcome}</p>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h3 className="text-sm font-bold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={tag} className={`text-xs font-bold px-4 py-2 rounded-full border ${selectedProject.tagColors[i] || 'bg-slate-500/10 text-slate-400 border-slate-500/20'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t border-white/10 flex justify-end">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r ${selectedProject.accent} text-white font-black text-sm uppercase tracking-wide rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95 transition-transform`}
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}

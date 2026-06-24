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

  // Setup interval cycle
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
    <section id="projects" ref={sectionRef} className="py-16 bg-[#0a0f1e] scroll-mt-16 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Embedded shimmer animations */}
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
      `}</style>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 fade-in-section">
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Portfolio</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1.5 mb-2.5">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xs mx-auto text-xs sm:text-sm">
            Real-world projects I built and delivered for clients
          </p>
        </div>

        {/* Dynamic Project Presentation Card */}
        <div 
          className="fade-in-section max-w-4xl mx-auto"
          onMouseEnter={() => setIsPlaying(false)} // Pause cycling on hover
          onMouseLeave={() => setIsPlaying(true)}  // Resume cycling on leave
        >
          {/* Main Presentation Container */}
          <div className="relative bg-gradient-to-br from-[#0d1426] via-[#0f1730] to-[#080d1a] border border-white/8 rounded-2xl overflow-hidden shadow-xl">
            
            {/* Shimmer top border line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] shimmer-line" />

            <div className="p-5 sm:p-7 relative z-10">
              
              {/* Tabs / Selector row */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  {PROJECTS.map((proj, idx) => {
                    const isActive = currentIndex === idx
                    return (
                      <button
                        key={proj.title}
                        onClick={() => changeProject(idx)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
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

              {/* Combined Layout columns: 
                  order-1 on right mockup places the image on top in mobile.
                  order-2 on left details keeps details below in mobile. */}
              <div className="flex flex-col lg:flex-row gap-6 items-stretch">
                
                {/* Browser Viewport Mockup (Right Column -> Top Image in mobile) */}
                <div className={`w-full lg:w-[48%] flex flex-col justify-center order-1 lg:order-2 transition-all duration-200 transform ${fadeState}`}>
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

                    {/* Viewport container with auto scrolling image on hover */}
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

                {/* Left column: Content details (Below Image in mobile) */}
                <div className={`w-full lg:w-[52%] flex flex-col justify-between order-2 lg:order-1 transition-all duration-200 transform ${fadeState}`}>
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

      </div>
    </section>
  )
}

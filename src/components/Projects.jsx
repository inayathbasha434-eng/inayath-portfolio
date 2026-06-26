import { useEffect, useRef, useState } from 'react'
import { CheckCircle, ExternalLink, Play, Pause } from 'lucide-react'
import { Link } from 'react-router-dom'

const PROJECTS = [
  {
    number: '01',
    title: 'Mor Panthal',
    platform: 'WordPress',
    description:
      'A modern WordPress website for a traditional drink brand showcasing culture, health, and natural flavors.',
    tags: ['WordPress', 'UI/UX', 'Razorpay'],
    link: 'https://sisufoodsupply.unaux.com',
    detailPage: '/projects/mor-panthal',
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
      'A personal portfolio built with React and Tailwind CSS to showcase my work and skills.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://inayathbasha.vercel.app',
    detailPage: '/projects/portfolio',
    image: '/portfolio_new.png',
    problem: 'Needed a premium, accessible, and fast developer portfolio that displays skills, projects, and services dynamically.',
    solution: 'Created a React + Vite single-page application built on Tailwind CSS, styled with fluid Framer Motion animations.',
    outcome: 'Achieved near-perfect 100/100 Lighthouse performance, accessibility, and SEO audit scores on all devices.',
    tagColors: [
      'bg-blue-500/10 text-blue-400 border-blue-500/20',
      'bg-purple-500/10 text-purple-400 border-purple-500/20',
      'bg-pink-500/10 text-pink-400 border-pink-500/20',
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
      'AI image generation project using Stable Diffusion and Midjourney for high-quality visuals.',
    tags: ['Stable Diffusion', 'Midjourney', 'Generative AI'],
    link: 'https://tintandshade.in/',
    detailPage: '/projects/ai-image-generation',
    image: '/tint_shade_after.jpg',
    beforeImage: '/tint_shade_before.jpg',
    afterImage: '/tint_shade_after.jpg',
    problem: 'Commercial advertising photography setups usually require expensive props, studios, lighting, and cameras.',
    solution: 'Built a generative AI pipeline utilizing Stable Diffusion, Midjourney, and Photoshop to convert raw capture mockups.',
    outcome: 'Reduced commercial photo production costs by 80% while delivering studio-grade high-res marketing graphics.',
    tagColors: [
      'bg-pink-500/10 text-pink-400 border-pink-500/20',
      'bg-purple-500/10 text-purple-400 border-purple-500/20',
      'bg-blue-500/10 text-blue-400 border-blue-500/20',
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
        {/* UNIFIED RESPONSIVE SWIPE/CARD VIEW */}
        {/* ========================================================== */}
        <div className="w-full overflow-hidden">
          {/* Swiper / Grid track */}
          <div className="flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-visible snap-x lg:snap-none snap-mandatory no-scrollbar gap-5 lg:gap-6 xl:gap-8 pb-8 pt-6 px-4 lg:px-6 xl:px-8 max-w-7xl mx-auto">
            {PROJECTS.map((proj, index) => {
              return (
              <div 
                key={proj.title}
                className="min-w-[88vw] sm:min-w-[70vw] lg:min-w-0 lg:w-full snap-center lg:snap-align-none bg-[#111623] border border-white/5 rounded-[1.5rem] flex flex-col relative transition-transform duration-300 hover:-translate-y-2 mt-4"
              >
                {/* HIGHLY HIGHLIGHTED PROJECT NUMBER (Offset to top-right) */}
                <div className={`absolute -top-4 -right-2 w-10 h-10 rounded-full bg-gradient-to-br ${proj.accent} flex items-center justify-center text-white font-black text-sm shadow-[0_4px_15px_rgba(0,0,0,0.5)] z-30`}>
                  {parseInt(proj.number)}
                </div>

                {/* Top Image Area */}
                <div className="relative h-[240px] w-full rounded-t-[1.5rem] overflow-hidden bg-[#0a0d14]">
                  {/* Before/After AI Image Slider OR Scroll preview */}
                  {proj.beforeImage && proj.afterImage ? (
                    <div className="relative w-full h-full select-none">
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
                    <img src={proj.image} alt={`${proj.title} Preview`} className="w-full h-full object-cover object-top" />
                  )}
                </div>

                {/* Bottom Content Area */}
                <div className="p-6 lg:p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black text-white mb-2">{proj.title}</h3>
                  <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Tag pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {proj.tags.slice(0, 3).map((tag, i) => (
                      <span key={tag} className={`text-[10px] font-bold px-3 py-1 rounded-full border ${proj.tagColors[i] || 'bg-slate-500/10 text-slate-400 border-slate-500/20'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
                    <Link
                      to={proj.detailPage}
                      className="w-full sm:flex-1 py-3.5 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-white font-bold text-[13px] flex items-center justify-center gap-2 group"
                    >
                      Project Overview
                      <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </Link>
                    
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full sm:flex-1 py-3.5 rounded-xl bg-gradient-to-r ${proj.accent} text-white font-bold text-[13px] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.05)] active:scale-95 hover:-translate-y-0.5 transition-all`}
                    >
                      Live Project
                      <ExternalLink size={15} className="ml-1 opacity-90" />
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
    </section>
  )
}

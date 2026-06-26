import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

/* ─────────────────────────────────────────────
   SERVICE DATA — ordered as per requirements
   1 Shopify  2 WordPress  3 AI Gemini
   4 Portfolio  5 Business Website  6 ERP
───────────────────────────────────────────── */
const SERVICES = [
  {
    id: 'shopify',
    category: 'Shopify Store',
    title: 'Shopify Store',
    subtitle: 'E-Commerce Website',
    heading: 'Launch a High-Converting Shopify Store',
    subheading: 'Full store setup, premium theme customization, custom section design, and payment gateway configuration.',
    badge: 'Shopify Expert',
    btn1: 'Get Started',
    color: 'from-green-600 to-emerald-700',
    glowColor: 'rgba(16,185,129,0.22)',
    badgeDot: 'bg-green-500',
    accentClass: 'bg-green-600 text-white hover:bg-green-700',
    mobileBtnClass: 'bg-green-600 text-white hover:bg-green-700',
    image: '/shopify-hero.png',
    pageRoute: '/services/shopify',
    cardBg: 'bg-white border-slate-200 text-slate-900 shadow-2xl shadow-green-500/10',
    textColor: 'text-slate-900',
    subTextColor: 'text-slate-500',
    headerText: 'text-slate-600',
    headerBg: 'bg-slate-50 border-b border-slate-200',
    logoColor: 'bg-green-600',
    logoSecondaryColor: 'bg-green-600/60',
    logoText: 'Shopify Setup',
    imagePosition: 'left',
    isDark: false,
    accentColor: '#16a34a',
  },
  {
    id: 'wordpress',
    category: 'WordPress',
    title: 'WordPress Web',
    subtitle: 'Custom Business Website',
    heading: 'Build Custom WordPress Business Sites',
    subheading: 'Responsive layouts, custom page templates, fast loading speed, and WooCommerce integration.',
    badge: 'WordPress Dev',
    btn1: 'Get Started',
    color: 'from-blue-600 to-indigo-700',
    glowColor: 'rgba(37,99,235,0.22)',
    badgeDot: 'bg-blue-500',
    accentClass: 'bg-blue-600 text-white hover:bg-blue-700',
    mobileBtnClass: 'bg-blue-600 text-white hover:bg-blue-700',
    image: '/wordpress-hero.png',
    pageRoute: '/services/wordpress',
    cardBg: 'bg-white border-slate-200 text-slate-900 shadow-2xl shadow-blue-500/10',
    textColor: 'text-slate-900',
    subTextColor: 'text-slate-500',
    headerText: 'text-slate-600',
    headerBg: 'bg-slate-50 border-b border-slate-200',
    logoColor: 'bg-blue-600',
    logoSecondaryColor: 'bg-blue-600/60',
    logoText: 'WordPress Custom',
    imagePosition: 'right',
    isDark: false,
    accentColor: '#2563eb',
  },
  {
    id: 'ai',
    category: 'AI Image Generation',
    title: 'AI Product Images',
    subtitle: 'Powered by Gemini AI',
    heading: 'Studio-Quality AI Product Image Generation',
    subheading: 'Generate stunning lifestyle photos for your products instantly using advanced Gemini AI models.',
    badge: 'AI Generator',
    btn1: 'Generate Now',
    color: 'from-pink-500 to-rose-600',
    glowColor: 'rgba(236,72,153,0.22)',
    badgeDot: 'bg-pink-500',
    accentClass: 'bg-pink-500 text-white hover:bg-pink-600',
    mobileBtnClass: 'bg-pink-500 text-white hover:bg-pink-600',
    image: '/ai-gemini-hero.png',
    pageRoute: '/services/ai',
    cardBg: 'bg-[#150d18] border-pink-950/30 text-slate-100 shadow-2xl shadow-pink-950/20',
    textColor: 'text-slate-100',
    subTextColor: 'text-slate-400',
    headerText: 'text-slate-300',
    headerBg: 'bg-[#1a0e1e] border-b border-pink-950/30',
    logoColor: 'bg-pink-500',
    logoSecondaryColor: 'bg-pink-500/60',
    logoText: 'AI Product Gen',
    imagePosition: 'left',
    isDark: true,
    accentColor: '#ec4899',
  },
  {
    id: 'portfolio',
    category: 'Portfolio Design',
    title: 'Portfolio Website',
    subtitle: 'Student & Creative Portfolio',
    heading: 'Launch a Premium Portfolio That Gets You Hired',
    subheading: 'Stunning interactive portfolios with project showcases, custom resume layouts, and personal branding.',
    badge: 'Portfolio Design',
    btn1: 'Get Started',
    color: 'from-purple-600 to-indigo-700',
    glowColor: 'rgba(124,58,237,0.22)',
    badgeDot: 'bg-purple-500',
    accentClass: 'bg-purple-600 text-white hover:bg-purple-700',
    mobileBtnClass: 'bg-purple-600 text-white hover:bg-purple-700',
    image: '/portfolio-hero.png',
    pageRoute: '/services/portfolio',
    cardBg: 'bg-[#0f172a] border-slate-800 text-slate-100 shadow-2xl shadow-purple-950/20',
    textColor: 'text-slate-100',
    subTextColor: 'text-slate-400',
    headerText: 'text-slate-300',
    headerBg: 'bg-[#0d1324] border-b border-slate-900',
    logoColor: 'bg-purple-600',
    logoSecondaryColor: 'bg-purple-600/60',
    logoText: 'Portfolio Pro',
    imagePosition: 'right',
    isDark: true,
    accentColor: '#7c3aed',
  },
  {
    id: 'business',
    category: 'Business Website',
    title: 'Business Website',
    subtitle: 'Corporate Web Presence',
    heading: 'Build a Powerful Business Website That Converts',
    subheading: 'Professional corporate websites with strong branding, lead generation forms, fast performance, and SEO-optimized structure.',
    badge: 'Business Web',
    btn1: 'Get Started',
    color: 'from-cyan-600 to-sky-700',
    glowColor: 'rgba(6,182,212,0.22)',
    badgeDot: 'bg-cyan-500',
    accentClass: 'bg-cyan-600 text-white hover:bg-cyan-700',
    mobileBtnClass: 'bg-cyan-600 text-white hover:bg-cyan-700',
    image: '/business-hero.png',
    pageRoute: '/services/business',
    cardBg: 'bg-white border-slate-200 text-slate-900 shadow-2xl shadow-cyan-500/10',
    textColor: 'text-slate-900',
    subTextColor: 'text-slate-500',
    headerText: 'text-slate-600',
    headerBg: 'bg-slate-50 border-b border-slate-200',
    logoColor: 'bg-cyan-600',
    logoSecondaryColor: 'bg-cyan-600/60',
    logoText: 'Business Web',
    imagePosition: 'left',
    isDark: false,
    accentColor: '#0891b2',
  },
  {
    id: 'erp',
    category: 'ERP Solution',
    title: 'ERP Solution',
    subtitle: 'Enterprise Management System',
    heading: 'Streamline Your Business with Custom ERP Solutions',
    subheading: 'Automate inventory, HR, accounting, and operations with a fully tailored ERP system built for your workflow.',
    badge: 'ERP System',
    btn1: 'Get Demo',
    color: 'from-orange-500 to-amber-600',
    glowColor: 'rgba(249,115,22,0.22)',
    badgeDot: 'bg-orange-500',
    accentClass: 'bg-orange-500 text-white hover:bg-orange-600',
    mobileBtnClass: 'bg-orange-500 text-white hover:bg-orange-600',
    image: '/erp-hero.png',
    pageRoute: '/services/erp',
    cardBg: 'bg-[#100d05] border-orange-950/30 text-slate-100 shadow-2xl shadow-orange-950/20',
    textColor: 'text-slate-100',
    subTextColor: 'text-slate-400',
    headerText: 'text-slate-300',
    headerBg: 'bg-[#1a1205] border-b border-orange-950/30',
    logoColor: 'bg-orange-500',
    logoSecondaryColor: 'bg-orange-500/60',
    logoText: 'ERP Solution',
    imagePosition: 'right',
    isDark: true,
    accentColor: '#f97316',
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const navigate = useNavigate()

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

  const goToPage = (item) => {
    if (item.pageRoute) navigate(item.pageRoute)
  }

  const nextSlide = () => setActiveIndex((p) => Math.min(p + 1, SERVICES.length - 1))
  const prevSlide = () => setActiveIndex((p) => Math.max(p - 1, 0))

  const renderLogo = (item) => (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        <div className={`w-3.5 h-3.5 rounded ${item.logoColor}`} />
        <div className={`w-3.5 h-3.5 rounded ${item.logoSecondaryColor} -ml-2.5 mt-1.5`} />
      </div>
      <span className="text-[10px] sm:text-[11px] font-black tracking-tight text-white md:text-inherit">
        {item.logoText}
      </span>
    </div>
  )

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-[#080d1a] scroll-mt-16 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">What I Offer</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm sm:text-base">
            Premium custom services engineered to expand your brand and grow your digital footprint
          </p>
        </div>

        {/* Carousel */}
        <div className="fade-in relative flex flex-col items-center select-none overflow-visible">

          {/* Card Viewport */}
          <div className="w-full flex items-center justify-center overflow-visible min-h-[360px] sm:min-h-[380px] md:min-h-[460px] relative py-8">

            {SERVICES.map((item, idx) => {
              const offset = idx - activeIndex
              const isActive = offset === 0
              const isPrev = offset === -1
              const isNext = offset === 1
              const isHidden = Math.abs(offset) > 1

              let transformStyles = {}
              if (isActive) {
                transformStyles = { transform: 'translateX(0) scale(1) translateZ(0)', zIndex: 30, opacity: 1 }
              } else if (isPrev) {
                transformStyles = { transform: 'translateX(-26%) scale(0.85) rotateY(15deg)', zIndex: 20, opacity: 0.4, filter: 'blur(1.5px)' }
              } else if (isNext) {
                transformStyles = { transform: 'translateX(26%) scale(0.85) rotateY(-15deg)', zIndex: 20, opacity: 0.4, filter: 'blur(1.5px)' }
              } else if (isHidden) {
                transformStyles = { transform: `translateX(${offset > 0 ? '55%' : '-55%'}) scale(0.7)`, zIndex: 10, opacity: 0, pointerEvents: 'none' }
              }

              const isImageLeft = item.imagePosition === 'left'

              return (
                <div
                  key={item.id}
                  onClick={() => !isActive && setActiveIndex(idx)}
                  className={`absolute w-[88vw] sm:w-[480px] md:w-[720px] md:h-auto rounded-2xl border transition-all duration-500 ease-in-out overflow-hidden ${item.cardBg} ${isActive ? 'cursor-default pointer-events-auto' : 'cursor-pointer pointer-events-none'}`}
                  style={{ ...transformStyles, boxShadow: isActive ? `0 25px 60px -15px ${item.glowColor}` : 'none', perspective: '1200px' }}
                >

                  {/* ══════════════════════════════════════════
                      MOBILE LAYOUT (hidden on md+)
                  ══════════════════════════════════════════ */}
                  <div className="md:hidden flex flex-col h-[380px] relative overflow-hidden">

                    {/* Full background image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center z-0"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    {/* Gradient — strong bottom, lighter top */}
                    <div className="absolute inset-0 z-0" style={{
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.75) 65%, rgba(0,0,0,0.97) 100%)'
                    }} />

                    {/* Top bar — logo + badge only */}
                    <div className="relative z-10 flex items-center justify-between px-4 pt-4">
                      {renderLogo(item)}
                      <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
                        <span className={`w-1.5 h-1.5 rounded-full ${item.badgeDot}`} />
                        <span className="text-white text-[10px] font-bold">{item.badge}</span>
                      </div>
                    </div>

                    {/* Spacer to push content down */}
                    <div className="flex-1" />

                    {/* Bottom content block */}
                    <div className="relative z-10 px-4 pb-4 space-y-3">
                      {/* Title */}
                      <div>
                        <h4 className="text-white font-extrabold text-[17px] leading-tight tracking-tight">
                          {item.heading}
                        </h4>
                        <p className="text-slate-300 text-[11px] leading-relaxed mt-1.5 font-medium">
                          {item.subheading}
                        </p>
                      </div>

                      {/* Single CTA button */}
                      {item.pageRoute ? (
                        <button
                          onClick={() => goToPage(item)}
                          className="w-full py-3 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 transition-all duration-300 active:scale-95"
                          style={{ backgroundColor: item.accentColor, color: '#fff' }}
                        >
                          {item.btn1} — See Full Details
                          <ArrowRight size={15} />
                        </button>
                      ) : (
                        <button
                          className="w-full py-3 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2"
                          style={{ backgroundColor: item.accentColor, color: '#fff' }}
                        >
                          {item.btn1}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* ══════════════════════════════════════════
                      DESKTOP LAYOUT (hidden on mobile)
                  ══════════════════════════════════════════ */}
                  <div className="hidden md:block">

                    {/* Header bar */}
                    <div className={`relative z-10 px-6 py-3.5 flex items-center justify-between ${item.headerBg}`}>
                      <div className="flex gap-1.5 items-center">
                        {renderLogo(item)}
                        <div className="flex items-center gap-1.5 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-full px-2.5 py-0.5 text-[10px] font-bold">
                          <span className={`w-1.5 h-1.5 rounded-full ${item.badgeDot}`} />
                          <span className={item.isDark ? 'text-slate-300' : 'text-slate-600'}>{item.badge}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className={`flex items-center gap-5 text-[11px] font-bold ${item.headerText}`}>
                          <span>Home</span>
                          <span>About Us</span>
                          <span>Services</span>
                          <span>Contact</span>
                        </div>
                        <button className={`text-[11px] font-extrabold px-3 py-1.5 rounded-full transition-all duration-300 ${item.accentClass}`}>
                          Let's Talk
                        </button>
                      </div>
                    </div>

                    {/* Desktop body */}
                    <div className="flex flex-row min-h-[320px]">

                      {/* Image panel */}
                      <div
                        className={`w-[42%] relative overflow-hidden bg-slate-900 group/imgpanel ${
                          isImageLeft ? 'order-first border-r' : 'order-last border-l'
                        } border-black/5 dark:border-white/5 ${item.pageRoute ? 'cursor-pointer' : ''}`}
                        onClick={() => item.pageRoute && goToPage(item)}
                      >
                        <img
                          src={item.image}
                          alt={item.category}
                          className={`w-full h-full object-cover object-center absolute inset-0 transition-transform duration-500 ${item.pageRoute ? 'group-hover/imgpanel:scale-105' : ''}`}
                        />
                        {item.pageRoute && (
                          <div className="absolute inset-0 bg-black/0 group-hover/imgpanel:bg-black/40 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover/imgpanel:opacity-100 transition-all duration-300 scale-90 group-hover/imgpanel:scale-100 bg-white text-slate-900 text-xs font-extrabold px-5 py-2.5 rounded-full shadow-xl flex items-center gap-2">
                              View Full Details <ArrowRight size={13} />
                            </div>
                          </div>
                        )}
                        <div className="absolute top-3.5 left-3.5 bg-white/95 text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1.5 border border-slate-100">
                          <span className={`w-1.5 h-1.5 rounded-full ${item.badgeDot}`} />
                          {item.badge}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent pt-12 text-left">
                          <p className="text-white font-black text-sm leading-none">{item.title}</p>
                          <p className="text-slate-300 text-[10px] mt-0.5 font-medium">{item.subtitle}</p>
                        </div>
                      </div>

                      {/* Content panel */}
                      <div className={`flex-1 p-7 flex flex-col justify-between text-left space-y-4 ${isImageLeft ? 'order-last' : 'order-first'}`}>
                        <div className="space-y-3">
                          <h4 className={`font-black text-2xl leading-snug tracking-tight ${item.textColor}`}>
                            {item.heading}
                          </h4>
                          <p className={`text-xs leading-relaxed max-w-sm font-medium ${item.subTextColor}`}>
                            {item.subheading}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => item.pageRoute && goToPage(item)}
                            className={`px-5 py-2 rounded-lg text-xs font-extrabold transition-all duration-300 flex items-center gap-2 ${item.accentClass}`}
                          >
                            {item.btn1}
                            {item.pageRoute && <ArrowRight size={12} />}
                          </button>
                        </div>
                        <div className="flex pt-3 border-t border-black/5 dark:border-white/5 items-center justify-between text-[10px]">
                          <div className="flex items-center gap-1">
                            <Star size={11} className="text-yellow-400 fill-yellow-400" />
                            <span className={`font-bold ${item.subTextColor}`}>4.9 (120+ reviews)</span>
                          </div>
                          <span className={`font-semibold uppercase tracking-wider ${item.subTextColor}`}>Tap image to explore</span>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              )
            })}
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-6 mt-6 relative z-40">
            <button
              onClick={prevSlide}
              disabled={activeIndex === 0}
              className={`w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-800 hover:bg-slate-50 transition-all shadow-md hover:scale-105 active:scale-95 ${activeIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
              aria-label="Previous"
            >
              <ChevronLeft size={18} className="stroke-[2.5]" />
            </button>

            <div className="flex items-center gap-2 bg-[#0c1324] px-4 py-2 rounded-full border border-white/5 shadow-inner">
              {SERVICES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-5 h-2 bg-blue-500 shadow-sm shadow-blue-500/50' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={activeIndex === SERVICES.length - 1}
              className={`w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-800 hover:bg-slate-50 transition-all shadow-md hover:scale-105 active:scale-95 ${activeIndex === SERVICES.length - 1 ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
              aria-label="Next"
            >
              <ChevronRight size={18} className="stroke-[2.5]" />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const BOOKING_TEMPLATES = [
  {
    category: 'AI Product Image Generation',
    title: 'AI Image Gen',
    subtitle: 'Product Photography',
    heading: 'Studio-Quality AI Product Image Generation',
    subheading: 'Generate stunning lifestyle photos for your products instantly using advanced AI models.',
    badge: 'AI Generator',
    btn1: 'Generate Now',
    btn2: null,
    color: 'from-pink-500 to-rose-600',
    glowColor: 'rgba(236,72,153,0.25)',
    badgeDot: 'bg-pink-500',
    accentClass: 'bg-pink-500 text-white hover:bg-pink-600 shadow-sm shadow-pink-500/20',
    outlineClass: 'border-pink-500/30 text-pink-400 hover:bg-pink-500/5',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=600',
    pageRoute: null,
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=100',
    providerName: 'Inayath Basha',
    providerTitle: 'AI Specialist',
    cardBg: 'bg-[#150d18] border-pink-950/30 text-slate-100 shadow-2xl shadow-pink-950/20',
    textColor: 'text-slate-100',
    subTextColor: 'text-slate-400 font-medium',
    headerText: 'text-slate-300',
    headerBg: 'bg-[#1a0e1e] border-b border-pink-950/30',
    logoColor: 'bg-pink-500',
    logoSecondaryColor: 'bg-pink-500/60',
    logoText: 'AI Product Gen',
    imagePosition: 'right',
    hasProviderRow: false,
    mobileBtnClass: 'bg-pink-500 text-white hover:bg-pink-600',
    isDark: true,
  },
  {
    category: 'Students Portfolio',
    title: 'Personal Portfolio',
    subtitle: 'Student Profile Website',
    heading: 'Launch Premium Student Portfolio Sites',
    subheading: 'Kickstart your career with stunning interactive timelines, project highlights, and custom resume layouts.',
    badge: 'Portfolio Design',
    btn1: 'Get Started',
    btn2: null,
    color: 'from-purple-600 to-indigo-700',
    glowColor: 'rgba(124,58,237,0.2)',
    badgeDot: 'bg-purple-500',
    accentClass: 'bg-purple-600 text-white hover:bg-purple-700 shadow-sm shadow-purple-500/20',
    outlineClass: 'border-purple-500/30 text-purple-400 hover:bg-purple-500/5',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600',
    pageRoute: null,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100',
    providerName: 'Inayath Basha',
    providerTitle: 'Mentor & Developer',
    cardBg: 'bg-[#0f172a] border-slate-800 text-slate-100 shadow-2xl shadow-purple-950/20',
    textColor: 'text-slate-100',
    subTextColor: 'text-slate-400 font-medium',
    headerText: 'text-slate-300',
    headerBg: 'bg-[#0d1324] border-b border-slate-900',
    logoColor: 'bg-purple-600',
    logoSecondaryColor: 'bg-purple-600/60',
    logoText: 'Students Portfolio',
    imagePosition: 'left',
    hasProviderRow: false,
    mobileBtnClass: 'bg-purple-600 text-white hover:bg-purple-700',
    isDark: true,
  },
  {
    category: 'Shopify Store',
    title: 'Shopify Store',
    subtitle: 'E-Commerce Website',
    heading: 'Launch a High-Converting Shopify Store',
    subheading: 'Full store setup, premium theme customization, custom section design, and payment gateway configuration.',
    badge: 'Shopify Expert',
    btn1: 'Get Started',
    btn2: null,
    color: 'from-green-600 to-emerald-700',
    glowColor: 'rgba(16,185,129,0.2)',
    badgeDot: 'bg-green-500',
    accentClass: 'bg-green-600 text-white hover:bg-green-700 shadow-sm shadow-green-500/20',
    outlineClass: 'border-green-500/30 text-green-400 hover:bg-green-500/5',
    image: '/shopify-hero.png',
    pageRoute: '/services/shopify',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100',
    providerName: 'Inayath Basha',
    providerTitle: 'Shopify Developer',
    cardBg: 'bg-[#ffffff] border-slate-200 text-slate-900 shadow-2xl shadow-green-500/10',
    textColor: 'text-slate-900',
    subTextColor: 'text-slate-500 font-medium',
    headerText: 'text-slate-650',
    headerBg: 'bg-slate-50 border-b border-slate-200',
    logoColor: 'bg-green-600',
    logoSecondaryColor: 'bg-green-600/60',
    logoText: 'Shopify Setup',
    imagePosition: 'left',
    hasProviderRow: false,
    mobileBtnClass: 'bg-green-600 text-white hover:bg-green-700',
    isDark: false,
  },
  {
    category: 'WordPress Customization',
    title: 'WordPress Web',
    subtitle: 'Custom Business Website',
    heading: 'Build Custom WordPress Business Sites',
    subheading: 'Responsive layouts, custom page template adjustments, fast loading speed, and WooCommerce integration.',
    badge: 'WordPress Dev',
    btn1: 'Get Started',
    btn2: null,
    color: 'from-blue-600 to-indigo-700',
    glowColor: 'rgba(37,99,235,0.2)',
    badgeDot: 'bg-blue-500',
    accentClass: 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-500/20',
    outlineClass: 'border-blue-500/30 text-blue-400 hover:bg-blue-500/5',
    image: '/wordpress-hero.png',
    pageRoute: '/services/wordpress',
    avatar: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=100',
    providerName: 'Inayath Basha',
    providerTitle: 'WordPress Developer',
    cardBg: 'bg-white border-slate-200 text-slate-900 shadow-2xl shadow-blue-500/10',
    textColor: 'text-slate-900',
    subTextColor: 'text-slate-500 font-medium',
    headerText: 'text-slate-650',
    headerBg: 'bg-slate-50 border-b border-slate-200',
    logoColor: 'bg-blue-600',
    logoSecondaryColor: 'bg-blue-600/60',
    logoText: 'WordPress Custom',
    imagePosition: 'right',
    hasProviderRow: false,
    mobileBtnClass: 'bg-blue-600 text-white hover:bg-blue-700',
    isDark: false,
  },
  {
    category: 'Business Website',
    title: 'Business Website',
    subtitle: 'Corporate Web Presence',
    heading: 'Build a Powerful Business Website That Converts',
    subheading: 'Professional corporate websites with strong branding, lead generation forms, fast performance, and SEO-optimized structure.',
    badge: 'Business Web',
    btn1: 'Get Started',
    btn2: null,
    color: 'from-cyan-600 to-sky-700',
    glowColor: 'rgba(6,182,212,0.2)',
    badgeDot: 'bg-cyan-500',
    accentClass: 'bg-cyan-600 text-white hover:bg-cyan-700 shadow-sm shadow-cyan-500/20',
    outlineClass: 'border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/5',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=600',
    pageRoute: null,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100',
    providerName: 'Inayath Basha',
    providerTitle: 'Web Strategist',
    cardBg: 'bg-white border-slate-200 text-slate-900 shadow-2xl shadow-cyan-500/10',
    textColor: 'text-slate-900',
    subTextColor: 'text-slate-500 font-medium',
    headerText: 'text-slate-650',
    headerBg: 'bg-slate-50 border-b border-slate-200',
    logoColor: 'bg-cyan-600',
    logoSecondaryColor: 'bg-cyan-600/60',
    logoText: 'Business Web',
    imagePosition: 'left',
    hasProviderRow: false,
    mobileBtnClass: 'bg-cyan-600 text-white hover:bg-cyan-700',
    isDark: false,
  },
  {
    category: 'ERP Solution',
    title: 'ERP Solution',
    subtitle: 'Enterprise Management System',
    heading: 'Streamline Your Business with Custom ERP Solutions',
    subheading: 'Automate inventory, HR, accounting, and operations with a fully tailored ERP system built for your business workflow.',
    badge: 'ERP System',
    btn1: 'Get Demo',
    btn2: null,
    color: 'from-orange-500 to-amber-600',
    glowColor: 'rgba(249,115,22,0.2)',
    badgeDot: 'bg-orange-500',
    accentClass: 'bg-orange-500 text-white hover:bg-orange-600 shadow-sm shadow-orange-500/20',
    outlineClass: 'border-orange-500/30 text-orange-400 hover:bg-orange-500/5',
    image: '/erp-hero.png',
    pageRoute: '/services/erp',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    providerName: 'Inayath Basha',
    providerTitle: 'ERP Consultant',
    cardBg: 'bg-[#100d05] border-orange-950/30 text-slate-100 shadow-2xl shadow-orange-950/20',
    textColor: 'text-slate-100',
    subTextColor: 'text-slate-400 font-medium',
    headerText: 'text-slate-300',
    headerBg: 'bg-[#1a1205] border-b border-orange-950/30',
    logoColor: 'bg-orange-500',
    logoSecondaryColor: 'bg-orange-500/60',
    logoText: 'ERP Solution',
    imagePosition: 'right',
    hasProviderRow: false,
    mobileBtnClass: 'bg-orange-500 text-white hover:bg-orange-600',
    isDark: true,
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

  const nextSlide = () => {
    setActiveIndex((prev) => (prev < BOOKING_TEMPLATES.length - 1 ? prev + 1 : prev))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const renderLogo = (item) => {
    return (
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
  }

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-[#080d1a] scroll-mt-16 relative overflow-hidden">
      {/* Background radial glows */}
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

        {/* 3D Mockup Carousel Display */}
        <div className="fade-in relative flex flex-col items-center select-none overflow-visible">
          
          {/* Card Viewport Wrapper */}
          <div className="w-full flex items-center justify-center overflow-visible min-h-[360px] sm:min-h-[380px] md:min-h-[460px] relative py-8">
            
            {BOOKING_TEMPLATES.map((item, idx) => {
              const offset = idx - activeIndex
              const isActive = offset === 0
              const isPrev = offset === -1
              const isNext = offset === 1
              const isHidden = Math.abs(offset) > 1

              // Calculate 3D transforms for carousel
              let transformStyles = {}
              if (isActive) {
                transformStyles = {
                  transform: 'translateX(0) scale(1) translateZ(0)',
                  zIndex: 30,
                  opacity: 1,
                }
              } else if (isPrev) {
                transformStyles = {
                  transform: 'translateX(-26%) scale(0.85) rotateY(15deg)',
                  zIndex: 20,
                  opacity: 0.4,
                  filter: 'blur(1.5px)',
                }
              } else if (isNext) {
                transformStyles = {
                  transform: 'translateX(26%) scale(0.85) rotateY(-15deg)',
                  zIndex: 20,
                  opacity: 0.4,
                  filter: 'blur(1.5px)',
                }
              } else if (isHidden) {
                transformStyles = {
                  transform: `translateX(${offset > 0 ? '55%' : '-55%'}) scale(0.7)`,
                  zIndex: 10,
                  opacity: 0,
                  pointerEvents: 'none',
                }
              }

              const isImageLeft = item.imagePosition === 'left'

              return (
                <div
                  key={item.category}
                  onClick={() => !isActive && setActiveIndex(idx)}
                  className={`absolute w-[94vw] sm:w-[500px] md:w-[720px] h-[320px] md:h-auto rounded-2xl border transition-all duration-500 ease-in-out cursor-pointer overflow-hidden ${item.cardBg} ${
                    isActive ? 'cursor-default pointer-events-auto' : 'pointer-events-none'
                  }`}
                  style={{
                    ...transformStyles,
                    boxShadow: isActive ? `0 25px 60px -15px ${item.glowColor}` : 'none',
                    perspective: '1200px',
                  }}
                >
                  {/* Mobile-only background image and dark gradient overlay */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center md:hidden z-0"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/85 md:hidden z-0" />

                  {/* Website Header Menu */}
                  <div className={`relative z-10 px-4 sm:px-6 py-3 md:py-3.5 flex items-center justify-between border-b border-black/5 dark:border-white/5 md:${item.headerBg} bg-transparent md:bg-inherit border-b-0 md:border-b`}>
                    <div className="flex gap-1.5 items-center">
                      {renderLogo(item)}
                      
                      {/* Browser style page pill (desktop only) */}
                      <div className="hidden md:flex items-center gap-1.5 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-full px-2.5 py-0.5 text-[10px] font-bold">
                        <span className={`w-1.5 h-1.5 rounded-full ${item.badgeDot}`} />
                        <span className={item.isDark ? 'text-slate-300' : 'text-slate-650'}>{item.badge}</span>
                      </div>
                    </div>

                    {/* Navigation Menu Links */}
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className={`hidden md:flex items-center gap-5 text-[11px] font-bold ${item.headerText}`}>
                        <span className="cursor-pointer hover:opacity-80">Home</span>
                        <span className="cursor-pointer hover:opacity-80">About Us</span>
                        <span className="cursor-pointer hover:opacity-80">Services</span>
                        <span className="cursor-pointer hover:opacity-80">Contact</span>
                      </div>
                      <button className={`text-[10px] sm:text-[11px] font-extrabold px-3 py-1.5 rounded-full transition-all duration-300 ${item.mobileBtnClass} md:${item.accentClass}`}>
                        Let's Talk
                      </button>
                    </div>
                  </div>

                  {/* Template Landing Page Mockup Layout */}
                  <div className="flex flex-col md:flex-row min-h-full md:min-h-[320px] relative z-10">
                    
                    {/* Left/Right Column: Image (hidden on mobile, background instead) */}
                    <div
                      className={`hidden md:block w-full md:w-[42%] relative overflow-hidden bg-slate-900 border-b md:border-b-0 border-black/5 dark:border-white/5 ${
                        isImageLeft ? 'md:order-first md:border-r' : 'md:order-last md:border-l'
                      } ${item.pageRoute ? 'cursor-pointer group/img' : ''}`}
                      onClick={() => item.pageRoute && navigate(item.pageRoute)}
                      title={item.pageRoute ? `Learn more about ${item.title}` : ''}
                    >
                      <img
                        src={item.image}
                        alt={item.category}
                        className={`w-full h-full object-cover object-center absolute inset-0 transition-transform duration-500 ${item.pageRoute ? 'group-hover/img:scale-105' : ''}`}
                      />
                      {/* Hover overlay for clickable images */}
                      {item.pageRoute && (
                        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-white/90 text-slate-900 text-xs font-extrabold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                            <span>Learn More →</span>
                          </div>
                        </div>
                      )}
                      
                      {/* Floating pill badge */}
                      <div className="absolute top-3.5 left-3.5 bg-white/95 text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1.5 border border-slate-100">
                        <span className={`w-1.5 h-1.5 rounded-full ${item.badgeDot}`} />
                        {item.badge}
                      </div>

                      {/* Bottom Image Overlay Label */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent pt-12 text-left">
                        <p className="text-white font-black text-sm sm:text-base leading-none">{item.title}</p>
                        <p className="text-slate-300 text-[10px] sm:text-xs mt-0.5 font-medium">{item.subtitle}</p>
                      </div>
                    </div>

                    {/* Content details: copywriting and buttons */}
                    <div className={`flex-1 p-5 sm:p-7 flex flex-col justify-center md:justify-between text-center md:text-left space-y-4 md:space-y-4 ${
                      isImageLeft ? 'md:order-last' : 'md:order-first'
                    }`}>
                      
                      {/* Mobile-only badge */}
                      <div className={`mx-auto md:mx-0 bg-white/95 text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1.5 border border-slate-100 w-fit md:hidden mb-1`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${item.badgeDot}`} />
                        {item.badge}
                      </div>

                      <div className="space-y-2 md:space-y-3">
                        <h4 className={`font-black text-[15px] sm:text-lg md:text-2xl leading-snug tracking-tight text-white md:${item.textColor}`}>
                          {item.heading}
                        </h4>
                        <p className={`text-[10px] sm:text-xs leading-relaxed max-w-xs sm:max-w-md font-medium text-slate-300 md:${item.subTextColor} mx-auto md:mx-0`}>
                          {item.subheading}
                        </p>
                      </div>

                      {/* Provider Profile Sub-card (only shown if configured in templates) */}
                      {item.hasProviderRow && (
                        <div className={`mx-auto md:mx-0 p-2 rounded-xl flex items-center gap-3 w-fit border bg-black/40 border-white/5 md:${
                          item.isDark 
                            ? 'bg-[#131b2e]/60 border-white/5' 
                            : 'bg-slate-100/60 border-slate-200/50'
                        }`}>
                          <img 
                            src={item.avatar} 
                            alt={item.providerName} 
                            className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"
                          />
                          <div className="text-left">
                            <p className="text-[10px] font-black leading-tight text-white md:text-slate-900">{item.providerName}</p>
                            <p className="text-[8px] font-semibold text-slate-400 md:text-slate-500">{item.providerTitle}</p>
                          </div>
                        </div>
                      )}

                      {/* Action buttons inside mockup */}
                      <div className="flex items-center justify-center md:justify-start gap-2.5 pt-1">
                        <button className={`px-4 py-2 rounded-lg text-[10px] sm:text-xs font-extrabold transition-all duration-300 ${item.accentClass}`}>
                          {item.btn1}
                        </button>
                        {item.btn2 && (
                          <button className={`px-4 py-2 rounded-lg text-[10px] sm:text-xs font-extrabold border transition-all duration-300 ${item.outlineClass}`}>
                            {item.btn2}
                          </button>
                        )}
                      </div>

                      {/* Bottom footer strip inside mockup (desktop only) */}
                      <div className="hidden md:flex pt-3 border-t border-black/5 dark:border-white/5 items-center justify-between text-[9px] sm:text-[10px]">
                        <div className="flex items-center gap-1">
                          <Star size={11} className="text-yellow-400 fill-yellow-400" />
                          <span className={`font-bold ${item.subTextColor}`}>4.9 (120+ reviews)</span>
                        </div>
                        <span className={`font-semibold uppercase tracking-wider ${item.subTextColor}`}>Integrated Booking</span>
                      </div>

                    </div>

                  </div>

                  {/* Bottom Image Overlay Label - Mobile only */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-left md:hidden z-20 pointer-events-none">
                    <div>
                      <p className="text-white font-black text-xs leading-none">{item.title}</p>
                      <p className="text-slate-300 text-[9px] mt-0.5 font-medium">{item.subtitle}</p>
                    </div>
                    <span className="text-slate-400 text-[9px] font-semibold uppercase tracking-wider">Integrated Booking</span>
                  </div>

                </div>
              )
            })}
          </div>

          {/* Carousel Slider Controls indicator */}
          <div className="flex items-center gap-6 mt-6 relative z-40">
            
            {/* Left Nav Button */}
            <button
              onClick={prevSlide}
              disabled={activeIndex === 0}
              className={`w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-800 hover:bg-slate-50 transition-all shadow-md shadow-black/10 hover:scale-105 active:scale-95 ${
                activeIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
              }`}
              aria-label="Previous service"
            >
              <ChevronLeft size={18} className="stroke-[2.5]" />
            </button>

            {/* Pagination Dots indicator */}
            <div className="flex items-center gap-2 bg-[#0c1324] px-4 py-2 rounded-full border border-white/5 shadow-inner">
              {BOOKING_TEMPLATES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    activeIndex === idx 
                      ? 'w-5 h-2 bg-blue-500 shadow-sm shadow-blue-500/50' 
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Right Nav Button */}
            <button
              onClick={nextSlide}
              disabled={activeIndex === BOOKING_TEMPLATES.length - 1}
              className={`w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-800 hover:bg-slate-50 transition-all shadow-md shadow-black/10 hover:scale-105 active:scale-95 ${
                activeIndex === BOOKING_TEMPLATES.length - 1 ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
              }`}
              aria-label="Next service"
            >
              <ChevronRight size={18} className="stroke-[2.5]" />
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}

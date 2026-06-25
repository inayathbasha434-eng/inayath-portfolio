import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ShoppingBag, Eye } from 'lucide-react'

const PROJECTS = [
  {
    number: '01',
    title: 'Mor Panthal',
    category: 'E-Commerce Website',
    platform: 'WordPress + WooCommerce',
    description:
      'A premium food & beverage digital storefront custom-tailored with an engaging yellow visual theme, frictionless mobile shopping cart, and optimized checkout flow.',
    tags: ['WordPress', 'WooCommerce', 'UI/UX Design', 'Razorpay Gateway'],
    link: 'https://sisufoodsupply.unaux.com',
    image: '/mor_panthal_new.png',
    problem: 'Client lacked a professional digital presence to showcase food and beverage products, leading to manual order placements and high customer drop-offs during checkouts.',
    solution: 'Designed and built a mobile-first e-commerce store with custom fast-loading layouts, unified Indian payment options (Razorpay), and a simple product search system.',
    outcome: 'Increased client conversions and automated payment processing, allowing the store to scale inventory management and order fulfillment with zero manual overhead.',
    accentColor: '#f59e0b',
    glowColor: 'rgba(245,158,11,0.15)',
  },
  {
    number: '02',
    title: 'Personal Portfolio',
    category: 'Developer Platform',
    platform: 'React + Tailwind CSS',
    description:
      'A high-performance personal agency portfolio built using modern frontend frameworks. Engineered with fluid transition animations, modular component layouts, and strict SEO compliance.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'SEO Opt'],
    link: 'https://inayathbasha.vercel.app',
    image: '/portfolio_new.png',
    problem: 'Needed a premium, ultra-fast portfolio to demonstrate engineering abilities, host client case studies, and convert visitors into leads with premium UX details.',
    solution: 'Built a lightweight React application styled with glassmorphic cards, optimized image assets, responsive timelines, and direct instant messaging gateways.',
    outcome: 'Achieved near-perfect 100/100 Lighthouse performance, accessibility, and SEO audit scores, driving increased organic discovery and direct client inquiries.',
    accentColor: '#3b82f6',
    glowColor: 'rgba(59,130,246,0.15)',
  },
  {
    number: '03',
    title: 'AI Image Generation',
    category: 'Digital Creative Assets',
    platform: 'Stable Diffusion + Midjourney',
    description:
      'Custom workflow converting low-resolution raw camera photo captures into commercial-grade lifestyle product mockups and marketing assets using generative AI.',
    tags: ['Generative AI', 'Midjourney', 'Stable Diffusion', 'Photoshop'],
    link: 'https://tintandshade.in/',
    beforeImage: '/tint_shade_before.jpg',
    afterImage: '/tint_shade_after.jpg',
    problem: 'High-end advertising campaigns require expensive physical props, studios, studio lighting set-ups, and cameras to create premium product lifestyle photos.',
    solution: 'Constructed an advanced AI inpainting/outpainting workflow using diffusion models and pixel-perfect retouching in Photoshop to modify base camera assets.',
    outcome: 'Reduced commercial photography asset production costs by 80% while delivering clean, studio-grade, print-ready high-resolution promotional graphics.',
    accentColor: '#a855f7',
    glowColor: 'rgba(168,85,247,0.15)',
  },
]

export default function Projects() {
  const [sliderPosition, setSliderPosition] = useState(50)

  return (
    <section id="projects" className="py-24 bg-[#0a0f1e] scroll-mt-16 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-3">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm sm:text-base">
            Explore recent client works, Shopify storefronts, and design solutions engineered for growth.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-20 lg:space-y-28">
          {PROJECTS.map((proj, idx) => {
            const isEven = idx % 2 === 0
            const hasSlider = proj.beforeImage && proj.afterImage

            return (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                
                {/* ── Visual Preview (Column 1) ── */}
                <div 
                  className={`lg:col-span-6 w-full ${
                    isEven ? 'lg:order-first' : 'lg:order-last'
                  }`}
                >
                  <div 
                    className="rounded-2xl overflow-hidden border border-white/10 bg-[#0d1426]/50 shadow-2xl relative group"
                    style={{ boxShadow: `0 20px 50px -15px ${proj.glowColor}` }}
                  >
                    {/* Browser chrome header bar */}
                    <div className="bg-[#0e172e] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="bg-[#080d1a] rounded-lg px-3 py-1 text-[10px] text-slate-500 flex items-center gap-2 max-w-[200px] overflow-hidden truncate">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                          {proj.link.replace('https://', '')}
                        </div>
                      </div>
                    </div>

                    {/* Content area: Image OR Before/After Slider */}
                    {hasSlider ? (
                      <div className="relative h-[220px] sm:h-[300px] overflow-hidden bg-[#0d1426] select-none">
                        {/* Before image */}
                        <div className="absolute inset-0">
                          <img
                            src={proj.beforeImage}
                            alt="Before AI optimization"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute top-3 left-3 bg-black/85 text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-white/10 uppercase tracking-wider">
                            Before AI
                          </div>
                        </div>

                        {/* After image (clipped) */}
                        <div 
                          className="absolute inset-0 z-10"
                          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                        >
                          <img
                            src={proj.afterImage}
                            alt="After AI optimization"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute top-3 right-3 bg-purple-600/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-purple-500/20 uppercase tracking-wider">
                            AI Generated
                          </div>
                        </div>

                        {/* Slide bar handle */}
                        <div 
                          className="absolute inset-y-0 z-20 w-[2.5px] bg-white/90 cursor-ew-resize flex items-center justify-center pointer-events-none"
                          style={{ left: `${sliderPosition}%` }}
                        >
                          <div className="w-8 h-8 bg-slate-900 rounded-full shadow-xl border border-white/20 flex items-center justify-center -ml-[15px] pointer-events-auto hover:scale-105 transition-transform">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 9l-4 4 4 4m8-8l4 4-4 4" />
                            </svg>
                          </div>
                        </div>

                        {/* Invisible range control */}
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={sliderPosition}
                          onChange={(e) => setSliderPosition(Number(e.target.value))}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                          aria-label="Before after slider"
                        />
                      </div>
                    ) : (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative h-[220px] sm:h-[300px] overflow-hidden bg-[#0d1426] cursor-pointer"
                      >
                        <img
                          src={proj.image}
                          alt={`${proj.title} Preview`}
                          className="w-full h-auto object-cover object-top transition-transform duration-[6s] ease-in-out transform translate-y-0 group-hover:translate-y-[calc(-100%+220px)] sm:group-hover:translate-y-[calc(-100%+300px)]"
                          loading="lazy"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-slate-900/90 text-white font-bold text-xs px-4 py-2 rounded-xl border border-white/10 shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <Eye size={14} className="text-blue-400" />
                            <span>Visit Live Website</span>
                          </div>
                        </div>
                      </a>
                    )}
                  </div>
                </div>

                {/* ── Case Study Details (Column 2) ── */}
                <div 
                  className={`lg:col-span-6 flex flex-col justify-between ${
                    isEven ? 'lg:order-last' : 'lg:order-first'
                  }`}
                >
                  <div className="space-y-5 text-left">
                    
                    {/* Index header */}
                    <div className="flex items-center gap-4">
                      <span className="text-4xl font-extrabold opacity-15 text-slate-400 select-none">
                        {proj.number}
                      </span>
                      <div className="h-[1px] flex-1 bg-white/10" />
                      <span className="text-[10px] font-extrabold text-blue-400 uppercase tracking-widest">
                        {proj.category}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {proj.title}
                      </h3>
                      <p className="text-slate-400 font-semibold text-xs mt-1">
                        Platform: {proj.platform}
                      </p>
                    </div>

                    {/* Detailed Paragraph */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {proj.description}
                    </p>

                    {/* Goal & Outcome Grid */}
                    <div className="grid sm:grid-cols-2 gap-4 bg-white/5 border border-white/5 rounded-2xl p-4 sm:p-5 mt-2">
                      <div className="space-y-1">
                        <span className="text-[10px] font-extrabold text-blue-400 uppercase tracking-wider block">
                          Business Goal
                        </span>
                        <p className="text-slate-350 text-xs sm:text-sm leading-relaxed">
                          {proj.problem}
                        </p>
                      </div>
                      <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-white/10 pt-3 sm:pt-0 sm:pl-4">
                        <span className="text-[10px] font-extrabold text-green-400 uppercase tracking-wider block">
                          Business Outcome
                        </span>
                        <p className="text-slate-350 text-xs sm:text-sm leading-relaxed">
                          {proj.outcome}
                        </p>
                      </div>
                    </div>

                    {/* Technologies pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Demo Button */}
                    <div className="pt-4">
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shine inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-200 hover:-translate-y-0.5"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    </div>

                  </div>
                </div>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const SKILLS = [
  {
    name: 'Shopify',
    category: 'E-Commerce Platform',
    desc: 'Expertise in custom theme development, OS 2.0 architectures, custom section code, app integrations, and checkout optimization.',
    color: 'from-green-500/20 to-emerald-600/10',
    iconColor: '#10b981',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
      </svg>
    )
  },
  {
    name: 'Liquid',
    category: 'Shopify Templating',
    desc: 'Deep proficiency in Shopify\'s templating engine, writing custom loops, conditional filters, JSON schemas, and localized translations.',
    color: 'from-blue-500/20 to-sky-600/10',
    iconColor: '#0ea5e9',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  },
  {
    name: 'HTML',
    category: 'Web Core',
    desc: 'Structuring clean, semantic, and highly accessible markup compliant with modern web standards (WCAG) and SEO indexing guidelines.',
    color: 'from-orange-500/20 to-amber-600/10',
    iconColor: '#f97316',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    name: 'CSS / Tailwind',
    category: 'Styling & Layouts',
    desc: 'Creating fluid, responsive interfaces using Tailwind CSS, flexbox/grids, keyframe micro-animations, and clean typography scales.',
    color: 'from-pink-500/20 to-rose-600/10',
    iconColor: '#ec4899',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
    )
  },
  {
    name: 'JavaScript',
    category: 'Scripting Core',
    desc: 'Writing optimized ES6+ logic, asynchronous event handlers, API integrations, DOM manipulations, and clean modular files.',
    color: 'from-yellow-500/20 to-amber-600/10',
    iconColor: '#eab308',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="21" y1="12" x2="9" y2="12"></line>
        <line x1="12" y1="21" x2="12" y2="9"></line>
      </svg>
    )
  },
  {
    name: 'React',
    category: 'Frontend Framework',
    desc: 'Developing dynamic single-page applications using functional components, customized hooks, state parameters, and props.',
    color: 'from-cyan-500/20 to-blue-600/10',
    iconColor: '#06b6d4',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="2"></circle>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"></path>
      </svg>
    )
  },
  {
    name: 'Figma',
    category: 'UI/UX Prototyping',
    desc: 'Creating visual interface layouts, reusable component libraries, customer journey flows, and assets exporting for developers.',
    color: 'from-purple-500/20 to-indigo-600/10',
    iconColor: '#a855f7',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
        <path d="M12 8C14.2091 8 16 6.20914 16 4C16 1.79086 14.2091 0 12 0C9.79086 0 8 1.79086 8 4C8 6.20914 9.79086 8 12 8Z" transform="translate(0, 4)"></path>
      </svg>
    )
  },
  {
    name: 'Brand Design',
    category: 'Identity & Assets',
    desc: 'Designing custom vectors, marketing collateral, social banners, and layout systems to establish visual trust for online brands.',
    color: 'from-fuchsia-500/20 to-pink-600/10',
    iconColor: '#d946ef',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
        <path d="M12 6v12M6 12h12"></path>
      </svg>
    )
  },
  {
    name: 'SEO & Optimization',
    category: 'Marketing Visibility',
    desc: 'Implementing Google Search Console rules, XML sitemaps, JSON-LD structured schemas, page meta details, and speed optimization.',
    color: 'from-teal-500/20 to-emerald-600/10',
    iconColor: '#14b8a6',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
        <polyline points="16 7 22 7 22 13"></polyline>
      </svg>
    )
  }
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="skills" className="py-20 bg-[#080d1a] scroll-mt-16 relative overflow-hidden">
      {/* Background star field visual overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Sparkles size={14} className="text-blue-400" />
            My Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm sm:text-base">
            Premium custom services and technical tools used to scale online businesses.
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group bg-gradient-to-br from-[#0d1426]/75 via-[#0e172f]/70 to-[#080d1a]/85 border border-white/5 hover:border-blue-500/20 rounded-2xl p-6 transition-all duration-300 shadow-lg relative overflow-hidden flex flex-col justify-between"
            >
              {/* Corner accent glow */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${skill.color} rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-white/5 border border-white/5 px-2.5 py-1 rounded-md">
                    {skill.category}
                  </span>
                  
                  {/* Custom SVG Icon Container */}
                  <div 
                    className="p-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center transition-colors group-hover:bg-white/10"
                    style={{ color: skill.iconColor }}
                  >
                    {skill.svg}
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-white font-extrabold text-lg sm:text-xl text-left mb-2.5 transition-colors group-hover:text-blue-400">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xs sm:text-sm text-left leading-relaxed">
                  {skill.desc}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div 
                className="w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-5 transition-all duration-500 group-hover:w-full"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

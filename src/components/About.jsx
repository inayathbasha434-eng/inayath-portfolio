import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, ShieldCheck, Heart } from 'lucide-react'

const EXPERTISE = [
  {
    title: 'Shopify Development',
    desc: 'Expert custom theme development, Liquid scripting, OS 2.0 architectures, and app integrations to build fast, scalable online storefronts.',
  },
  {
    title: 'Brand Design',
    desc: 'Crafting premium brand identities, custom marketing assets, and cohesive visual guidelines that build trust and credibility.',
  },
  {
    title: 'UI/UX Design',
    desc: 'Designing user-centered interfaces in Figma with clean wireframes, mobile-first flows, and high-fidelity interactive prototypes.',
  },
  {
    title: 'Frontend Development',
    desc: 'Writing optimized React, ES6+ JavaScript, and Tailwind CSS to implement responsive, pixel-perfect, and accessible layouts.',
  },
  {
    title: 'Business Growth Solutions',
    desc: 'Enhancing conversion rates, improving store load speeds, and setting up automated email workflows to boost client revenue.',
  },
]

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="about" className="py-20 bg-[#080d1a] scroll-mt-16 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Sparkles size={14} className="text-blue-400" />
            Know Me Better
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm sm:text-base">
            Combining code, design, and conversion strategies to scale brands online.
          </p>
        </div>

        {/* Content Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-12 gap-8 lg:gap-12 items-stretch"
        >
          {/* Left Column: Bio, Value Prop, Strengths */}
          <motion.div variants={itemVariants} className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold w-fit">
                <Heart size={14} />
                <span>My Core Mission</span>
              </div>
              <h3 className="text-white font-extrabold text-2xl leading-snug">
                Helping brands stand out & scale in a digital-first world
              </h3>
              <p className="text-slate-350 text-sm sm:text-base leading-relaxed">
                Inayath Basha A crafts high-impact digital experiences that seamlessly blend creativity, strategy, and business growth. Specializing in Shopify development, brand identity design, and conversion-focused digital solutions, he transforms ideas into powerful brands and scalable online success.
              </p>
              <p className="text-slate-350 text-sm sm:text-base leading-relaxed">
                With a passion for innovation and attention to detail, he helps businesses connect with their target audience, stand out from the competition, and achieve meaningful business growth.
              </p>
            </div>

            {/* Value Proposition Box */}
            <div className="bg-gradient-to-br from-[#0d1426] to-[#111827] border border-blue-500/10 rounded-2xl p-5 shadow-xl relative overflow-hidden mt-6">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
              <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                <ShieldCheck size={16} className="text-blue-400" />
                <span>Value Proposition</span>
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Building conversion-optimized storefronts and brand experiences engineered to reduce user friction, elevate trust, and maximize average order value (AOV).
              </p>
            </div>
          </motion.div>

          {/* Right Column: Core Expertise cards */}
          <motion.div variants={itemVariants} className="md:col-span-7 flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg mb-2 pl-1">Core Expertise & Capabilities</h3>
            <div className="space-y-3.5">
              {EXPERTISE.map((exp, idx) => (
                <div
                  key={exp.title}
                  className="group bg-gradient-to-br from-[#0d1426]/80 to-[#111827]/80 border border-white/5 hover:border-blue-500/20 rounded-2xl p-5 transition-all duration-300 shadow-lg hover:shadow-xl flex gap-4 items-start"
                >
                  {/* Indicator Dot */}
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  
                  <div className="space-y-1 text-left">
                    <h4 className="text-white font-bold text-sm sm:text-base group-hover:text-blue-400 transition-colors">
                      {exp.title}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

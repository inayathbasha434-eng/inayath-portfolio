import { HelpCircle, Palette, Globe, Image, Sparkles } from 'lucide-react'

const FAQ_ITEMS = [
  {
    icon: Palette,
    question: "What does your Brand & Digital Design service cover?",
    answer: "I help businesses build a premium visual presence. This includes custom brand identity systems, logo designs, marketing assets, and digital design guides optimized to elevate your business and connect with your target audience.",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20 shadow-purple-500/5",
    glowColor: "rgba(167,139,250,0.15)"
  },
  {
    icon: Globe,
    question: "How do you approach Shopify & WordPress web design?",
    answer: "I design fully responsive e-commerce and portfolio websites on Shopify and WordPress. My focus is on combining high-end design aesthetics with clean layout structures that lead to better engagement and sales conversions.",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20 shadow-blue-500/5",
    glowColor: "rgba(59,130,246,0.15)"
  },
  {
    icon: Image,
    question: "What is AI Product Image Generation, and what are its benefits?",
    answer: "I use advanced AI image generation models to transform simple product photos into studio-quality lifestyle images. This provides your brand with high-end marketing photos without the cost of expensive physical photoshoots.",
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20 shadow-pink-500/5",
    glowColor: "rgba(244,63,94,0.15)"
  },
  {
    icon: Sparkles,
    question: "How does our collaboration and design workflow work?",
    answer: "We start with a discovery phase to define your goals, followed by visual designs in Figma. Once approved, I code/configure the website or generate the AI image assets, run thorough quality checks, and launch the project.",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20 shadow-amber-500/5",
    glowColor: "rgba(245,158,11,0.15)"
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28 relative overflow-hidden bg-[#0c1224] border-t border-slate-900">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-4">
            <HelpCircle size={12} />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Got Questions? <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">I've Got Answers</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Find answers to common questions about my branding, web design, Shopify & WordPress custom setups, and AI product image services.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {FAQ_ITEMS.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative bg-[#0d1426]/60 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-slate-700/80 hover:shadow-xl"
                style={{
                  '--glow-color': item.glowColor
                }}
              >
                <div>
                  {/* Icon Wrapper */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bgColor} mb-6`}>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>

                  {/* Question */}
                  <h3 className="font-extrabold text-base sm:text-lg text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                    {item.question}
                  </h3>

                  {/* Answer */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>

                {/* Subtly glowing bottom corner decor */}
                <div 
                  className="absolute bottom-0 right-0 w-8 h-8 rounded-br-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at bottom right, ${item.glowColor}, transparent)`
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

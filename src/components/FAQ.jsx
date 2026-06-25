import { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const FAQ_ITEMS = [
  {
    question: "Why should I hire Inayath Basha as a Shopify Freelancer instead of an agency?",
    answer: "As an independent Shopify Freelancer, I work directly with you without the agency overhead, layers of project managers, or communication delays. You get direct access to my expertise in Shopify development, customized theme solutions, and conversion-focused web design. I focus on building high-performance, fast-loading stores that directly boost your sales and conversion rates."
  },
  {
    question: "What specific Shopify Developer services do you offer?",
    answer: "I offer full-service Shopify solutions including custom Shopify store setup, premium theme customization, custom section/feature development (using Liquid, HTML, CSS, and JS), app integrations, store migration, and UX/UI design tailored to increase your average order value (AOV)."
  },
  {
    question: "How do you ensure my Shopify store is SEO optimized and fast?",
    answer: "Every store I build follows strict SEO best practices: clean semantic HTML, structured data schema, optimized meta descriptions, and image alt tags. For speed, I optimize images (WebP format), lazy-load heavy elements, eliminate unnecessary app scripts, and build clean custom sections to achieve mobile-first, high-performance loading times."
  },
  {
    question: "Can you customize existing Shopify themes or build features from scratch?",
    answer: "Yes, both! I can take any existing OS 2.0 Shopify theme (like Dawn, Impulse, or Prestige) and customize it, or code fully custom drag-and-drop sections from scratch. This allows you to update your store content easily from the Shopify Customizer without touching any code."
  },
  {
    question: "What is your typical workflow and turnaround time for a project?",
    answer: "We start with a discovery phase (defining goals and requirements), followed by UI/UX wireframes in Figma, custom Shopify coding and setup, and finally a rigorous quality assurance (QA) speed test. A standard landing page or custom section takes 3-5 days, while a complete custom Shopify store typically takes 2-3 weeks."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 sm:py-28 relative overflow-hidden bg-[#0c1224] border-t border-slate-900">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-4">
            <HelpCircle size={12} />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Got Questions? <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">I've Got Answers</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Find answers to common questions about working with a freelance Shopify developer, pricing, timelines, and SEO optimizations.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className={`group border rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? 'bg-[#131b30] border-blue-500/30 shadow-lg shadow-blue-500/5' 
                    : 'bg-[#0f172a]/60 border-slate-800/80 hover:border-slate-700/80'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <span className={`font-bold text-sm sm:text-base leading-snug transition-colors duration-200 ${
                    isOpen ? 'text-blue-400' : 'text-slate-100 group-hover:text-white'
                  }`}>
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-800/60 text-slate-400 group-hover:text-slate-300'
                  }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/50 pt-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

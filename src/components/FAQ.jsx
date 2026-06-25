import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const FAQ_ITEMS = [
  {
    question: "What Shopify services do you provide?",
    answer: "I provide end-to-end Shopify development, including custom OS 2.0 theme design, Liquid template programming, store setup, application integration, payment gateways configuration, speed optimization, and UX audits designed to boost conversions."
  },
  {
    question: "How long does a Shopify project take?",
    answer: "Timelines depend on scope. Coding a custom theme section or landing page typically takes 3 to 5 days. Constructing a complete, custom Shopify store from discovery to launch takes approximately 2 to 3 weeks."
  },
  {
    question: "Do you redesign existing stores?",
    answer: "Yes, I specialize in store redesigns. I migrate old stores to modern OS 2.0 themes, optimize visual assets for faster load speeds, rewrite layouts to improve mobile navigation, and enhance checkout flows to minimize cart abandonment."
  },
  {
    question: "Do you provide SEO optimization?",
    answer: "Yes. Every storefront I develop includes structural SEO implementations, including semantic HTML structure, proper title and description meta tags, XML sitemap generation, Google Search Console setups, and JSON-LD schema markup."
  },
  {
    question: "Can you build custom Shopify features?",
    answer: "Absolutely. I write clean custom Liquid, CSS, and ES6+ JavaScript code to create bespoke features like custom slide carts, product comparison grids, dynamic size charts, or product filters that remain fully editable from your Shopify theme editor."
  },
  {
    question: "How can I contact you?",
    answer: "You can reach me directly using the contact form below, email me at inayathbasha434@gmail.com, connect with me on LinkedIn (linkedin.com/in/inayathbasha), or start an instant chat on WhatsApp at +91 9345704295."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Generate FAQ Schema JSON-LD content dynamically
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  return (
    <section id="faq" className="py-20 sm:py-28 relative overflow-hidden bg-[#0c1224] border-t border-slate-900">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-4">
            <HelpCircle size={12} />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Got Questions? <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">I've Got Answers</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Find answers to common questions about custom Shopify store setups, development timelines, speed optimization, and SEO capabilities.
          </p>
        </div>

        {/* Accordions */}
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
                  
                  {/* Plus/Minus toggle circle */}
                  <motion.div 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                      isOpen ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-800/60 text-slate-400 group-hover:text-slate-300'
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </motion.div>
                </button>

                {/* Content with Framer Motion Collapsible transition */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/50 pt-4">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>

      {/* FAQ Page Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  )
}

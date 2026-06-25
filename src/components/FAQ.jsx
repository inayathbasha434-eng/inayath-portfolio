import { useState } from 'react'
import { Zap, Settings, Shield, Clock, MessageCircle, ChevronDown, HelpCircle } from 'lucide-react'

const FAQ_ITEMS = [
  {
    icon: Zap,
    iconBg: 'bg-amber-500/20',
    iconColor: 'text-amber-400',
    question: 'How do you increase Shopify conversion rates?',
    answer:
      'I optimize every touchpoint of the buyer journey — from above-the-fold trust signals and sticky cart drawers to urgency nudges, streamlined checkout flows, and mobile-first UX. Every decision is data-backed and engineered to reduce friction and increase average order value (AOV).',
  },
  {
    icon: Settings,
    iconBg: 'bg-blue-500/20',
    iconColor: 'text-blue-400',
    question: 'Do you build custom sections or modify existing themes?',
    answer:
      'Both. I can take any Shopify 2.0 theme (Dawn, Impulse, Prestige, etc.) and deeply customize it, or code fully original drag-and-drop sections from scratch using Liquid, HTML, CSS, and JavaScript — giving you full control inside the Shopify Customizer without touching code.',
  },
  {
    icon: Shield,
    iconBg: 'bg-violet-500/20',
    iconColor: 'text-violet-400',
    question: 'Can you set up subscriptions, bundles & app integrations?',
    answer:
      'Yes! I integrate industry-leading apps like Recharge (subscriptions), Bold Bundles, Klaviyo, Judge.me, and many more. I also build custom bundle logic directly in Liquid if you want a native, app-free solution that keeps your store blazing fast.',
  },
  {
    icon: Clock,
    iconBg: 'bg-emerald-500/20',
    iconColor: 'text-emerald-400',
    question: "What's your workflow & turnaround time?",
    answer:
      'We start with a short discovery call (goals, brand, references), move to Figma wireframes for sign-off, then custom Shopify build with daily progress updates. A landing page or custom section takes 3–5 days; a full store takes 2–3 weeks. Rush timelines available on request.',
  },
  {
    icon: MessageCircle,
    iconBg: 'bg-rose-500/20',
    iconColor: 'text-rose-400',
    question: 'Do you offer support after the store goes live?',
    answer:
      'Absolutely. Every project includes a post-launch support window (bug fixes, adjustments). I also offer ongoing monthly retainer packages for continuous improvements, speed audits, A/B testing, and new feature development as your business scales.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="py-20 sm:py-28 relative overflow-hidden bg-[#0a0f1e]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-4">
            <HelpCircle size={12} />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            Got Questions?{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              I've Got Answers
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Common questions about Shopify development, timelines, integrations, and ongoing support.
          </p>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, idx) => {
            const Icon = item.icon
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'bg-[#111827] border-slate-700/60 shadow-lg shadow-black/20'
                    : 'bg-[#0d1426] border-slate-800/60 hover:border-slate-700/50'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center gap-4 px-4 py-4 sm:px-5 sm:py-5 text-left"
                  aria-expanded={isOpen}
                >
                  {/* Colored icon box */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.iconBg}`}
                  >
                    <Icon size={18} className={item.iconColor} />
                  </div>

                  {/* Question text */}
                  <span
                    className={`flex-1 font-semibold text-sm sm:text-base leading-snug transition-colors duration-200 ${
                      isOpen ? 'text-white' : 'text-slate-200'
                    }`}
                  >
                    {item.question}
                  </span>

                  {/* Chevron toggle */}
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-slate-700/60 text-white rotate-180'
                        : 'bg-slate-800/60 text-slate-400'
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {/* Answer — smooth expand */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/50 pt-4 ml-14">
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

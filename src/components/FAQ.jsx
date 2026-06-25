import { useState } from 'react'
import { ChevronDown, MessageCircle, Zap, Shield, Clock, Settings, ArrowRight } from 'lucide-react'

const WHATSAPP_NUM = '919345704295'

const FAQ_ITEMS = [
  {
    icon: Zap,
    question: 'How do you increase Shopify conversion rates?',
    answer:
      'I use CRO-proven techniques — trust badges, fast load speeds, sticky CTAs, urgency elements, and clean product page layouts — all tuned to turn visitors into buyers.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  {
    icon: Settings,
    question: 'Do you build custom sections or modify existing themes?',
    answer:
      'Both! I build fully custom Liquid sections from scratch or customize any OS 2.0 theme (Dawn, Impulse, Prestige). Everything stays editable in the Shopify Customizer.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: Shield,
    question: 'Can you set up subscriptions, bundles & app integrations?',
    answer:
      'Yes. I handle subscription setups (ReCharge, Seal), product bundles, upsell flows, and full app integrations (Klaviyo, Judge.me, Loox, Yotpo, etc.).',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: Clock,
    question: "What's your workflow & turnaround time?",
    answer:
      'Discovery → Figma wireframe → Development → QA & speed test. A landing page takes 3–5 days; a full custom Shopify store takes 2–3 weeks.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
  },
  {
    icon: MessageCircle,
    question: 'Do you offer support after the store goes live?',
    answer:
      'Absolutely. I offer ongoing maintenance, speed audits, A/B test setups, and feature additions to keep your store growing after launch.',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 sm:py-24 relative overflow-hidden bg-[#080d1a]">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <MessageCircle size={12} />
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            Quick <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Answers</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-sm mx-auto">
            Everything you need to know before we start working together.
          </p>
        </div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* LEFT — Sticky CTA card */}
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <div className="relative rounded-2xl overflow-hidden border border-blue-500/20 bg-gradient-to-br from-[#0d1426] to-[#0a1020] p-7 shadow-2xl shadow-blue-500/5">
              {/* Glow top-right */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Pulse ring avatar */}
              <div className="relative w-14 h-14 mb-5">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 animate-pulse opacity-30 blur-md" />
                <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <MessageCircle size={24} className="text-white" />
                </div>
              </div>

              <h3 className="text-white font-extrabold text-xl leading-snug mb-2">
                Still have a question?
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Let's jump on a quick WhatsApp chat — I usually reply within minutes.
              </p>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${WHATSAPP_NUM}?text=Hi%20Inayath%2C%20I%20have%20a%20question%20about%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 w-full min-h-[48px] rounded-xl bg-green-500 hover:bg-green-400 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Trust badges */}
              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-white/5">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Fast Reply
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Free Consultation
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Accordion */}
          <div className="lg:col-span-3 space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const Icon = item.icon
              const isOpen = openIndex === idx
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? `bg-[#0d1426] ${item.border} shadow-lg`
                      : 'bg-[#0a0f1e]/60 border-white/5 hover:border-white/10'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    {/* Icon chip */}
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${item.bg} ${item.border} border`}>
                      <Icon size={16} className={item.color} />
                    </div>

                    <span className={`flex-1 font-semibold text-sm sm:text-base leading-snug transition-colors ${
                      isOpen ? 'text-white' : 'text-slate-200'
                    }`}>
                      {item.question}
                    </span>

                    {/* Chevron */}
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen ? `${item.bg} ${item.color}` : 'bg-white/5 text-slate-500'
                    }`}>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </button>

                  {/* Answer */}
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="px-5 pb-5 pl-[4.25rem] text-slate-400 text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

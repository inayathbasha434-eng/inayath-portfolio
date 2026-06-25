import { useState, useRef, useEffect } from 'react'
import { HelpCircle, Zap, Settings, Shield, Clock, MessageCircle, ChevronDown } from 'lucide-react'

const FAQ_ITEMS = [
  {
    icon: Zap,
    colorClass: 'text-yellow-400',
    bgClass: 'bg-yellow-500/5',
    borderClass: 'border-yellow-500/20',
    question: "How do you increase Shopify conversion rates?",
    answer: "I focus on reducing page load times, optimizing mobile checkout flows, implementing high-converting UI/UX layouts, and ensuring your product pages have clear calls-to-action that drive sales."
  },
  {
    icon: Settings,
    colorClass: 'text-blue-400',
    bgClass: 'bg-blue-500/5',
    borderClass: 'border-blue-500/20',
    question: "Do you build custom sections or modify existing themes?",
    answer: "Yes, both! I can take any existing OS 2.0 Shopify theme (like Dawn, Impulse, or Prestige) and customize it, or code fully custom drag-and-drop sections from scratch. This allows you to update your store content easily."
  },
  {
    icon: Shield,
    colorClass: 'text-purple-400',
    bgClass: 'bg-purple-500/5',
    borderClass: 'border-purple-500/20',
    question: "Can you set up subscriptions, bundles & app integrations?",
    answer: "Absolutely. I integrate powerful third-party apps like ReCharge for subscriptions, custom bundling solutions to increase Average Order Value (AOV), and any other ERP or marketing integrations you need."
  },
  {
    icon: Clock,
    colorClass: 'text-green-400',
    bgClass: 'bg-green-500/5',
    borderClass: 'border-green-500/20',
    question: "What's your workflow & turnaround time?",
    answer: "We start with a discovery phase, followed by UI/UX wireframes, custom coding, and finally a rigorous speed test. A custom section takes 3-5 days, while a complete custom Shopify store typically takes 2-3 weeks."
  },
  {
    icon: MessageCircle,
    colorClass: 'text-rose-400',
    bgClass: 'bg-rose-500/5',
    borderClass: 'border-rose-500/20',
    question: "Do you offer support after the store goes live?",
    answer: "Yes, I provide a standard 30-day post-launch support period to ensure everything runs smoothly. I also offer ongoing retainer packages for continuous optimization, app updates, and new feature development."
  }
]

export default function FAQ() {
  // Desktop Accordion State
  const [openIndex, setOpenIndex] = useState(null)

  // Mobile Chatbot State
  const [chatHistory, setChatHistory] = useState([
    { role: 'bot', text: "Hi! I'm Inayath. Tap a question below to learn more about how we can work together! 👇" }
  ])
  const [isTyping, setIsTyping] = useState(false)
  const chatContainerRef = useRef(null)

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [chatHistory, isTyping])

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleAskQuestion = (question, answer) => {
    if (isTyping) return // Prevent spamming
    
    // 1. Add user question to history immediately
    setChatHistory(prev => [...prev, { role: 'user', text: question }])
    
    // 2. Trigger typing animation
    setIsTyping(true)

    // 3. Wait 1.5 seconds, then reveal the bot answer
    setTimeout(() => {
      setIsTyping(false)
      setChatHistory(prev => [...prev, { role: 'bot', text: answer }])
    }, 1500)
  }

  return (
    <section id="faq" className="py-20 sm:py-28 relative overflow-hidden bg-[#0a0f1e] border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
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

        {/* 
          ========================================
          MOBILE LAYOUT: iMessage Chatbot UI 
          ========================================
        */}
        <div className="md:hidden flex flex-col max-w-md mx-auto">
          {/* Chat Window */}
          <div className="bg-[#0d1426]/80 backdrop-blur-md border border-white/10 rounded-3xl p-4 h-[380px] flex flex-col mb-4 shadow-xl">
            <div 
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto space-y-5 pr-2 custom-scrollbar pb-2"
            >
              {chatHistory.map((msg, idx) => (
                <div key={idx} className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'bot' && (
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mr-2 flex-shrink-0 mt-auto mb-1 shadow-md shadow-blue-500/20">
                      <span className="text-[9px] font-black text-white">IB</span>
                    </div>
                  )}
                  <div className={`fade-in max-w-[85%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-sm shadow-blue-600/20' 
                      : 'bg-white/5 border border-white/10 text-slate-200 rounded-bl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex w-full justify-start fade-in">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mr-2 flex-shrink-0 mt-auto mb-1 shadow-md shadow-blue-500/20">
                    <span className="text-[9px] font-black text-white">IB</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5 h-[40px] shadow-sm">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Replies Carousel */}
          <div className="flex overflow-x-auto gap-2.5 pb-2 snap-x snap-mandatory custom-scrollbar-hide -mx-4 px-4 pt-1">
            {FAQ_ITEMS.map((item, idx) => {
              const Icon = item.icon
              return (
                <button
                  key={idx}
                  onClick={() => handleAskQuestion(item.question, item.answer)}
                  disabled={isTyping}
                  className="snap-start flex-shrink-0 flex items-center gap-2 bg-[#0d1426]/90 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2.5 text-xs font-semibold text-slate-300 transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100 shadow-sm"
                >
                  <Icon size={14} className={item.colorClass} />
                  {item.question}
                </button>
              )
            })}
          </div>
          <div className="text-center mt-2">
             <span className="text-[10px] text-slate-500 uppercase tracking-widest">Swipe for more questions →</span>
          </div>
        </div>

        {/* 
          ========================================
          DESKTOP LAYOUT: Standard Accordion 
          ========================================
        */}
        <div className="hidden md:block space-y-4 max-w-3xl mx-auto">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx
            const Icon = item.icon
            return (
              <div
                key={idx}
                className={`group border rounded-[20px] transition-all duration-300 ${
                  isOpen 
                    ? 'bg-[#0d1426] border-white/10 shadow-lg' 
                    : 'bg-[#0d1426]/60 border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-4 py-4 sm:px-6 sm:py-5 flex items-center gap-4 sm:gap-5 text-left"
                  aria-expanded={isOpen}
                >
                  {/* Left Colored Icon */}
                  <div className={`w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-2xl flex items-center justify-center flex-shrink-0 border transition-colors ${item.bgClass} ${item.colorClass} ${item.borderClass}`}>
                    <Icon size={20} strokeWidth={2.5} />
                  </div>

                  {/* Middle Question Text */}
                  <div className="flex-1 pr-4">
                    <span className={`font-bold text-sm sm:text-[17px] leading-snug transition-colors duration-200 ${
                      isOpen ? 'text-white' : 'text-slate-200 group-hover:text-white'
                    }`}>
                      {item.question}
                    </span>
                  </div>

                  {/* Right Chevron Down Button */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center flex-shrink-0 bg-slate-800/40 border border-white/5 group-hover:bg-slate-800/60 transition-colors">
                    <ChevronDown size={18} className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : ''}`} />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-4 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-400 leading-relaxed pt-1 sm:ml-[72px]">
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

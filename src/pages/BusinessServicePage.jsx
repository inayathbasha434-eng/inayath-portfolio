import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft, CheckCircle2, Star, Zap, ArrowRight,
  Globe, Layout, Code2, Rocket, ShieldCheck, PenTool
} from 'lucide-react'

const WHATSAPP_NUM = '919345704295'

const OFFERINGS = [
  { icon: PenTool, title: 'Bespoke UI/UX Design', desc: 'No cookie-cutter templates. We design custom interfaces tailored specifically to your brand identity, target audience, and business goals.' },
  { icon: Code2, title: 'Custom Web Development', desc: 'Whether you need a simple landing page or a complex web application with custom logic, we build it precisely to your specifications.' },
  { icon: Globe, title: 'Corporate & Agency Sites', desc: 'Establish a powerful, trustworthy online presence with a professional website that highlights your services, team, and case studies.' },
  { icon: Layout, title: 'Dynamic & Interactive', desc: 'Engage visitors with smooth animations, dynamic content loading, and interactive elements that make your website stand out.' },
  { icon: Rocket, title: 'Performance Optimization', desc: 'We build blazing-fast websites optimized for Core Web Vitals, ensuring quick load times, better user experience, and higher SEO rankings.' },
  { icon: ShieldCheck, title: 'Secure & Scalable', desc: 'Built with modern, secure frameworks. As your business grows, your website scales with it, easily accommodating new features and higher traffic.' },
]

const FEATURES = [
  '100% Custom Tailored Design',
  'Fully responsive on all devices',
  'SEO-optimized architecture',
  'Fast-loading (90+ PageSpeed score)',
  'Lead generation forms & CTAs',
  'Analytics & tracking setup',
  'CMS integration for easy updates',
  'Ongoing maintenance options',
]

const PROCESS = [
  { step: '01', title: 'Consultation', desc: 'We discuss your specific business needs, goals, target audience, and any unique features you require.' },
  { step: '02', title: 'Custom Strategy', desc: 'We propose a tailored web strategy and create custom design mockups that align with your vision.' },
  { step: '03', title: 'Development', desc: 'We bring the design to life, coding your custom website and integrating any requested third-party tools.' },
  { step: '04', title: 'Launch & Support', desc: 'After rigorous testing, we launch your site and provide training and support to ensure ongoing success.' },
]

export default function BusinessServicePage() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Custom Business Websites | Inayath Basha'
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-100">

      {/* Back Nav */}
      <div className="sticky top-0 z-50 bg-[#0a0f1e]/95 backdrop-blur border-b border-white/5 px-4 py-3">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
          <ArrowLeft size={16} /> Back to Portfolio
        </button>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="h-[340px] sm:h-[420px] md:h-[500px] w-full bg-cover bg-center relative" style={{ backgroundImage: 'url(/business-hero.png)' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/70 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-6 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 text-xs font-bold px-3 py-1.5 rounded-full mb-4 w-fit">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" /> Custom Web Solutions
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
              Whatever Your Need,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">We Customize Your Website</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
              We don't just build websites; we craft tailored digital experiences that perfectly align with your unique business requirements and drive measurable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-[#0d1424] border-y border-white/5 py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 gap-4 text-center">
          {[{ value: '50+', label: 'Custom Sites' }, { value: '99%', label: 'Uptime' }, { value: '2x', label: 'Lead Increase' }].map(({ value, label }) => (
            <div key={label}>
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">{value}</div>
              <div className="text-xs text-slate-500 mt-1 font-medium uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* What We Do */}
        <section>
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">What We Do</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">Websites Built Entirely Around You</h2>
          <p className="text-slate-400 leading-relaxed max-w-2xl">
            Every business is unique, and your website should be too. Off-the-shelf themes often force you to compromise on your vision or functionality. We take a different approach. We start by understanding exactly what your business needs to succeed online, and then we build it from the ground up.
          </p>
          <p className="text-slate-400 mt-3 leading-relaxed max-w-2xl">
            <span className="text-white font-semibold">Whatever your requirement</span> — be it a complex booking system, a unique interactive design, a custom client portal, or just a truly distinctive brand presence — we have the expertise to customize your website to perfection. We ensure it's not just a digital brochure, but a powerful tool that works for your business.
          </p>
        </section>

        {/* Offerings */}
        <section>
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">What We Offer</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-10">Our Custom Web Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {OFFERINGS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-[#0d1424] border border-white/5 rounded-2xl p-6 hover:border-cyan-500/30 hover:bg-[#0c1622] transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon size={20} className="text-cyan-400" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Checklist */}
        <section className="bg-gradient-to-br from-cyan-950/30 to-sky-950/20 border border-cyan-500/15 rounded-3xl p-8 sm:p-12">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Everything Included</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-8">Included in Every Custom Project</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {FEATURES.map((f) => (
              <div key={f} className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm font-medium">{f}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section>
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">How It Works</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-10">Our 4-Step Customization Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map(({ step, title, desc }) => (
              <div key={step}>
                <div className="text-5xl font-black text-cyan-500/10 mb-3 leading-none">{step}</div>
                <h3 className="font-bold text-white text-base mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-[#0d1424] border border-white/5 rounded-3xl p-8 sm:p-12">
          <div className="flex gap-1 mb-4">{[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}</div>
          <blockquote className="text-slate-200 text-lg sm:text-xl font-medium leading-relaxed mb-6 italic">
            "We had very specific requirements for our corporate site that standard templates couldn't handle. Inayath's team listened carefully and delivered a fully customized solution that exceeded our expectations. The new site perfectly represents our brand and functions flawlessly."
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center text-white font-bold text-sm">VR</div>
            <div>
              <p className="text-white font-semibold text-sm">Vikram R.</p>
              <p className="text-slate-500 text-xs">CEO, TechNova Solutions</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8">
          <Zap size={32} className="text-cyan-400 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Ready for a Truly Custom Website?</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">Tell us what you need, and we'll build a custom digital experience tailored just for your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${WHATSAPP_NUM}?text=Hi%20Inayath!%20I'm%20interested%20in%20a%20custom%20business%20website.`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 text-sm">
              <Globe size={18} /> Discuss Your Custom Needs <ArrowRight size={16} />
            </a>
            <button onClick={() => navigate(-1)} className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 text-sm">
              View More Services
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

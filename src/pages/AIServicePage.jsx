import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Sparkles, CheckCircle2, Star, ArrowRight, ImageIcon, Zap, Clock, Layers, RefreshCw, Download } from 'lucide-react'

const WHATSAPP_NUM = '919345704295'

const OFFERINGS = [
  { icon: ImageIcon, title: 'Product Photo Generation', desc: 'Generate photorealistic product images on any background — white, lifestyle, outdoor, studio — in seconds using Gemini AI.' },
  { icon: Layers, title: 'Multiple Variations', desc: 'Get 5–10+ variations per product with different angles, lighting, and settings so you always have the perfect shot.' },
  { icon: Sparkles, title: 'Lifestyle & Scene Shots', desc: 'Place your product in real-world lifestyle scenes — a kitchen counter, a gym bag, a luxury shelf — without a physical photoshoot.' },
  { icon: RefreshCw, title: 'Background Removal & Swap', desc: 'Remove plain backgrounds and replace them with stunning environments that match your brand aesthetic.' },
  { icon: Clock, title: 'Fast Turnaround', desc: 'Get your complete product image set delivered within 24–48 hours. No studio booking, no photographer wait times.' },
  { icon: Download, title: 'High-Resolution Export', desc: 'All images delivered in high-resolution (4K+) formats ready for Shopify, Amazon, Instagram, and print use.' },
]

const FEATURES = [
  'No photography equipment needed',
  'Unlimited product categories supported',
  'Brand color palette matching',
  'Shadow & reflection effects',
  'Transparent PNG background option',
  'Instagram & e-commerce optimized sizes',
  'Batch processing for large catalogs',
  'Revision rounds included',
]

const PROCESS = [
  { step: '01', title: 'Send Product', desc: 'Send us your product photos (even phone photos work) or describe your product to us.' },
  { step: '02', title: 'Style Brief', desc: 'Tell us the mood, brand colors, and type of backgrounds you want — modern, luxury, natural, minimal.' },
  { step: '03', title: 'AI Generation', desc: 'We use Gemini AI to generate multiple high-quality product image variations for your approval.' },
  { step: '04', title: 'Deliver & Revise', desc: 'We deliver the full set of images and make any revisions until you\'re 100% satisfied.' },
]

export default function AIServicePage() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'AI Product Image Generation | Inayath Basha'
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
        <div className="h-[340px] sm:h-[420px] md:h-[500px] w-full bg-cover bg-center relative" style={{ backgroundImage: 'url(/ai-gemini-hero.png)' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/70 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-6 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-pink-500/15 border border-pink-500/30 text-pink-400 text-xs font-bold px-3 py-1.5 rounded-full mb-4 w-fit">
              <span className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" /> Powered by Gemini AI
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
              Studio-Quality{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-300">AI Product Images</span>
              <br />Without a Photoshoot
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
              We use Google Gemini AI to generate stunning, photorealistic product images for your online store — at a fraction of the cost of traditional photography.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-[#0d1424] border-y border-white/5 py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 gap-4 text-center">
          {[{ value: '500+', label: 'Images Created' }, { value: '24hr', label: 'Avg Delivery' }, { value: '10x', label: 'Cost vs Studio' }].map(({ value, label }) => (
            <div key={label}>
              <div className="text-2xl sm:text-3xl font-extrabold text-pink-400">{value}</div>
              <div className="text-xs text-slate-500 mt-1 font-medium uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* What We Do */}
        <section>
          <span className="text-pink-400 text-xs font-bold uppercase tracking-widest">What We Do</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">Eliminate Expensive Product Photography</h2>
          <p className="text-slate-400 leading-relaxed max-w-2xl">
            Professional product photography costs thousands of rupees per session — studio rental, photographer fees, props, editing time. AI changes everything. With Google Gemini AI, we generate <span className="text-white font-semibold">photorealistic product images</span> indistinguishable from real photos, at a fraction of the cost and in a fraction of the time.
          </p>
          <p className="text-slate-400 mt-3 leading-relaxed max-w-2xl">
            From Shopify stores to Amazon listings to Instagram ads — our AI-generated product photos help you launch faster, look more professional, and sell more.
          </p>
        </section>

        {/* Offerings */}
        <section>
          <span className="text-pink-400 text-xs font-bold uppercase tracking-widest">What We Offer</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-10">Our AI Image Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {OFFERINGS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-[#0d1424] border border-white/5 rounded-2xl p-6 hover:border-pink-500/30 hover:bg-[#1a0e1e] transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center mb-4 group-hover:bg-pink-500/20 transition-colors">
                  <Icon size={20} className="text-pink-400" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Checklist */}
        <section className="bg-gradient-to-br from-pink-950/30 to-rose-950/20 border border-pink-500/15 rounded-3xl p-8 sm:p-12">
          <span className="text-pink-400 text-xs font-bold uppercase tracking-widest">Everything Included</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-8">What You Get</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {FEATURES.map((f) => (
              <div key={f} className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-pink-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm font-medium">{f}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section>
          <span className="text-pink-400 text-xs font-bold uppercase tracking-widest">How It Works</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-10">Simple 4-Step Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map(({ step, title, desc }) => (
              <div key={step}>
                <div className="text-5xl font-black text-pink-500/10 mb-3 leading-none">{step}</div>
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
            "We were spending ₹15,000 per photo shoot. Inayath's AI images look just as good — honestly better — and cost 90% less. Our product listings are now fully professional across all platforms."
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold text-sm">FN</div>
            <div>
              <p className="text-white font-semibold text-sm">Fathima N.</p>
              <p className="text-slate-500 text-xs">Owner, Bloom Beauty Store</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8">
          <Zap size={32} className="text-pink-400 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Ready to Transform Your Product Images?</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">Send us your product and we'll generate stunning AI photos that make your store stand out.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${WHATSAPP_NUM}?text=Hi%20Inayath!%20I'm%20interested%20in%20AI%20product%20image%20generation.`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-400 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30 text-sm">
              <Sparkles size={18} /> Generate My Product Images <ArrowRight size={16} />
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

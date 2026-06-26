import { useEffect } from 'react'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MorPanthalProjectPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-100 selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      
      <main className="pt-24 lg:pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm font-semibold">
            <ArrowLeft size={16} /> Back to Home
          </Link>

          {/* Hero Section */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 text-xs font-bold rounded-full border border-yellow-500/20 uppercase tracking-wider">
                WordPress
              </span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full border border-blue-500/20 uppercase tracking-wider">
                UI/UX
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Mor Panthal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Traditional Drink Brand
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
              A modern WordPress website for a traditional drink brand showcasing culture, health, and natural flavors.
            </p>
          </div>

          {/* Massive Viewport Image */}
          <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(245,158,11,0.1)] mb-20 bg-[#0d1426] relative group">
             <div className="bg-[#0e172e] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-[#080d1a] rounded-md px-4 py-1.5 text-xs text-slate-500 flex items-center gap-2 max-w-md w-full border border-white/5">
                    sisufoodsupply.unaux.com
                  </div>
                </div>
              </div>
            <img 
              src="/mor_panthal_new.png" 
              alt="Mor Panthal Project" 
              className="w-full h-auto"
            />
          </div>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">1</span>
                The Challenge
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                Client lacked a professional online presence to showcase food and beverage offerings and process digital payments. They needed a fast, reliable, and aesthetically pleasing storefront that reflected their traditional brand values while offering modern e-commerce capabilities.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">2</span>
                The Solution
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                Built a mobile-first WordPress storefront, integrating a custom fast-loading yellow visual identity. We utilized Razorpay for seamless payment processing and optimized the entire shopping flow for maximum conversions on mobile devices.
              </p>
            </div>
          </div>

          {/* Impact Banner */}
          <div className="rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 p-1 mb-20">
            <div className="bg-[#0d1426]/95 backdrop-blur-xl rounded-[23px] p-8 md:p-12">
              <h2 className="text-xs font-bold text-yellow-400 mb-4 uppercase tracking-widest">The Impact</h2>
              <p className="text-xl md:text-2xl font-medium text-white leading-relaxed">
                "Launched a high-converting storefront that seamlessly manages client checkouts, payments, and product inventory, resulting in a significantly improved digital presence."
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="flex justify-center">
            <a
              href="https://sisufoodsupply.unaux.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)] text-lg"
            >
              Visit Live Project <ExternalLink size={20} />
            </a>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  )
}

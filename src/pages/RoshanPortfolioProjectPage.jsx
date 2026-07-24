import { useEffect } from 'react'
import { ArrowLeft, ExternalLink, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function RoshanPortfolioProjectPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Roshan Asraf Portfolio | Full Stack Developer Website",
    "description": "A premium, modern portfolio website developed for full-stack developer Roshan Asraf to showcase digital products and services. Designed and developed by Inayath Basha.",
    "url": "https://inayathbasha.vercel.app/projects/roshan-portfolio",
    "publisher": {
      "@id": "https://inayathbasha.vercel.app/#person"
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-100 selection:bg-blue-500/30 selection:text-white">
      <SEO 
        title="Roshan Asraf Portfolio Project | Web Design & Shopify"
        description="A premium, modern portfolio website developed for full-stack developer Roshan Asraf to showcase digital products and services. Designed and developed by Inayath Basha."
        canonical="/projects/roshan-portfolio"
        schema={pageSchema}
      />
      <Navbar />
      
      <main className="pt-24 lg:pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm font-semibold">
            <ArrowLeft size={16} /> Back to Home
          </Link>

          {/* Massive Viewport Image */}
          <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.1)] mb-12 bg-[#0d1426] relative group">
             <div className="bg-[#0e172e] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-[#080d1a] rounded-md px-4 py-1.5 text-xs text-slate-500 flex items-center gap-2 max-w-md w-full border border-white/5">
                    roshanasraf.vercel.app
                  </div>
                </div>
              </div>
            <img 
              src="/roshan_portfolio.png" 
              alt="Roshan Asraf Portfolio Screenshot" 
              className="w-full h-auto"
            />
          </div>

          {/* Hero Section */}
          <div className="mb-10 sm:mb-16 text-center flex flex-col items-center">
            <div className="flex items-center gap-3.5 mb-5">
              <span className="px-3.5 py-1 bg-blue-500/10 text-blue-400 text-[10px] sm:text-xs font-bold rounded-full border border-blue-500/20 uppercase tracking-wider">
                React
              </span>
              <span className="px-3.5 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] sm:text-xs font-bold rounded-full border border-indigo-500/20 uppercase tracking-wider">
                Shopify &amp; WordPress
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight px-2">
              Roshan Asraf Portfolio <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                Premium Developer Branding
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed px-4">
              An ultra-premium, interactive portfolio designed for Roshan Asraf, highlighting full-stack development, WordPress integrations, and Shopify configurations.
            </p>
          </div>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-12 sm:mb-16 px-2 sm:px-0">
            {/* Card 1: The Challenge */}
            <div className="bg-[#111623]/40 border border-red-500/10 hover:border-red-500/20 rounded-2xl p-5 sm:p-7 backdrop-blur-sm relative overflow-hidden transition-all duration-300">
              <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-red-500/5 blur-2xl pointer-events-none" />
              <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-red-500/15 text-red-400 flex items-center justify-center font-bold text-xs shrink-0 border border-red-500/20">1</span>
                The Challenge
              </h2>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                Roshan needed a premium developer branding website to showcase his expertise. The site had to look highly modern, use professional gradients, incorporate interactive floating stack badges, and achieve exceptionally fast load speeds for incoming clients.
              </p>
            </div>

            {/* Card 2: The Solution */}
            <div className="bg-[#111623]/40 border border-blue-500/10 hover:border-blue-500/20 rounded-2xl p-5 sm:p-7 backdrop-blur-sm relative overflow-hidden transition-all duration-300">
              <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-blue-500/5 blur-2xl pointer-events-none" />
              <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-blue-500/15 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 border border-blue-500/20">2</span>
                The Solution
              </h2>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                Designed a cinematic single-page portfolio built with React + Vite, styled with custom gradients, interactive grid visualizer backdrops, and an intuitive contact form. The layout prioritizes typography and visual contrast to highlight Roshan's skills.
              </p>
            </div>
          </div>

          {/* Core Stack / Specs */}
          <div className="border border-white/5 bg-[#111623]/20 rounded-3xl p-6 sm:p-8 mb-12 sm:mb-16">
            <h3 className="text-xl font-bold text-white mb-6">Technical Specifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-4 bg-[#080d1a]/50 rounded-2xl border border-white/5">
                <span className="block text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-1">Role</span>
                <span className="text-white font-semibold text-sm sm:text-base">Front-End Developer</span>
              </div>
              <div className="p-4 bg-[#080d1a]/50 rounded-2xl border border-white/5">
                <span className="block text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-1">Stack</span>
                <span className="text-white font-semibold text-sm sm:text-base">React, Tailwind CSS, Vite</span>
              </div>
              <div className="p-4 bg-[#080d1a]/50 rounded-2xl border border-white/5">
                <span className="block text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-1">Features</span>
                <span className="text-white font-semibold text-sm sm:text-base">Floating Badges, Custom Grids</span>
              </div>
              <div className="p-4 bg-[#080d1a]/50 rounded-2xl border border-white/5">
                <span className="block text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-1">Status</span>
                <span className="text-white font-semibold text-sm sm:text-base">Delivered to Client</span>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-transparent border border-blue-500/15 mb-12 flex flex-col sm:flex-row items-center gap-6">
            <div className="shrink-0 w-12 h-12 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center">
              <Quote size={22} className="rotate-180" />
            </div>
            <div>
              <p className="text-slate-200 font-medium italic text-sm sm:text-base mb-2">
                "The portfolio is sleek, fast, and represents my professional capabilities perfectly. The integration of technology stack tags is a brilliant touch."
              </p>
              <span className="block text-blue-400 text-xs font-bold uppercase tracking-wider">— Roshan Asraf</span>
            </div>
          </div>

          {/* Project Action Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/" 
              className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all border border-white/10 text-sm w-full sm:w-auto justify-center text-center"
            >
              Back to Portfolio
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}

import { useEffect } from 'react'
import { ArrowLeft, ExternalLink, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function AIProjectPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Image Generation | Stable Diffusion & Midjourney Project by Inayath Basha",
    "description": "Created high-fidelity commercial product visualizations and marketing assets from raw camera captures using generative AI workflows (Stable Diffusion, Midjourney).",
    "url": "https://inayathbasha.vercel.app/projects/ai-image-generation",
    "publisher": {
      "@id": "https://inayathbasha.vercel.app/#person"
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-100 selection:bg-blue-500/30 selection:text-white">
      <SEO 
        title="AI Image Generation Project | Generative AI"
        description="Created high-fidelity commercial product visualizations and marketing assets from raw camera captures using generative AI workflows (Stable Diffusion, Midjourney)."
        canonical="/projects/ai-image-generation"
        schema={pageSchema}
      />
      <Navbar />
      
      <main className="pt-24 lg:pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm font-semibold">
            <ArrowLeft size={16} /> Back to Home
          </Link>

          {/* Massive Viewport Image */}
          <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.1)] mb-12 bg-[#0d1426] relative group flex flex-col md:flex-row">
            
            <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px]">
              <img 
                src="/tint_shade_before.jpg" 
                alt="Before AI" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/10 uppercase tracking-widest">
                Raw Capture
              </div>
            </div>
            
            <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px]">
              <img 
                src="/tint_shade_after.jpg" 
                alt="After AI" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-purple-600/90 backdrop-blur shadow-lg text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/20 uppercase tracking-widest">
                AI Generated
              </div>
            </div>
            
          </div>

          {/* Hero Section */}
          <div className="mb-20 text-center flex flex-col items-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 bg-pink-500/10 text-pink-400 text-xs font-bold rounded-full border border-pink-500/20 uppercase tracking-wider">
                Stable Diffusion
              </span>
              <span className="px-4 py-1.5 bg-purple-500/10 text-purple-400 text-xs font-bold rounded-full border border-purple-500/20 uppercase tracking-wider">
                Midjourney
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              AI Image Generation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
                Commercial Visuals
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
              Created high-fidelity commercial product visualizations and marketing assets from raw camera captures using generative AI workflows.
            </p>
          </div>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-20">
            {/* Card 1: The Challenge */}
            <div className="bg-[#111623]/40 border border-red-500/10 hover:border-red-500/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden transition-all duration-300">
              <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-red-500/5 blur-2xl pointer-events-none" />
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-500/15 text-red-400 flex items-center justify-center font-bold text-sm shrink-0 border border-red-500/20">1</span>
                The Challenge
              </h2>
              <p className="text-slate-455 leading-relaxed text-sm sm:text-base">
                Commercial advertising photography setups usually require expensive props, studios, lighting, and cameras. Producing high-quality marketing materials at scale is both time-consuming and cost-prohibitive for many brands.
              </p>
            </div>

            {/* Card 2: The Solution */}
            <div className="bg-[#111623]/40 border border-purple-500/10 hover:border-purple-500/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden transition-all duration-300">
              <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-purple-500/5 blur-2xl pointer-events-none" />
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-purple-500/15 text-purple-450 flex items-center justify-center font-bold text-sm shrink-0 border border-purple-500/20">2</span>
                The Solution
              </h2>
              <p className="text-slate-455 leading-relaxed text-sm sm:text-base">
                Built a generative AI pipeline utilizing Stable Diffusion, Midjourney, and Photoshop to convert raw, low-budget capture mockups into stunning, hyper-realistic commercial visuals tailored precisely to brand aesthetics.
              </p>
            </div>
          </div>

          {/* Impact Banner */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#111623]/80 to-[#0a0f1e]/80 border border-purple-500/20 p-6 sm:p-8 md:p-12 mb-16 overflow-hidden backdrop-blur-md shadow-2xl shadow-black/40 group hover:border-purple-500/30 transition-all duration-300">
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />
            
            {/* Floating Quote Icon */}
            <Quote className="absolute top-6 right-8 text-purple-500/5 w-20 h-20 sm:w-24 sm:h-24 rotate-180 pointer-events-none" />
            
            <h2 className="text-xs font-bold text-purple-400 mb-4 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              The Impact
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-medium text-slate-100 leading-relaxed italic relative z-10">
              "Reduced commercial photo production costs by 80% while delivering studio-grade high-res marketing graphics, accelerating time-to-market dramatically."
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="flex justify-center">
            <a
              href="https://tintandshade.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_4px_20px_rgba(168,85,247,0.25)] hover:shadow-[0_4px_30px_rgba(168,85,247,0.4)] text-sm sm:text-base group"
            >
              Visit Live Project 
              <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  )
}

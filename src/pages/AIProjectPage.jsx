import { useEffect } from 'react'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AIProjectPage() {
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
              <span className="px-3 py-1 bg-pink-500/10 text-pink-400 text-xs font-bold rounded-full border border-pink-500/20 uppercase tracking-wider">
                Stable Diffusion
              </span>
              <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-bold rounded-full border border-purple-500/20 uppercase tracking-wider">
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

          {/* Massive Viewport Image */}
          <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.1)] mb-20 bg-[#0d1426] relative group flex flex-col md:flex-row">
            
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

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">1</span>
                The Challenge
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                Commercial advertising photography setups usually require expensive props, studios, lighting, and cameras. Producing high-quality marketing materials at scale is both time-consuming and cost-prohibitive for many brands.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">2</span>
                The Solution
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                Built a generative AI pipeline utilizing Stable Diffusion, Midjourney, and Photoshop to convert raw, low-budget capture mockups into stunning, hyper-realistic commercial visuals tailored precisely to brand aesthetics.
              </p>
            </div>
          </div>

          {/* Impact Banner */}
          <div className="rounded-3xl bg-gradient-to-br from-purple-500 to-pink-600 p-1 mb-20">
            <div className="bg-[#0d1426]/95 backdrop-blur-xl rounded-[23px] p-8 md:p-12">
              <h2 className="text-xs font-bold text-purple-400 mb-4 uppercase tracking-widest">The Impact</h2>
              <p className="text-xl md:text-2xl font-medium text-white leading-relaxed">
                "Reduced commercial photo production costs by 80% while delivering studio-grade high-res marketing graphics, accelerating time-to-market dramatically."
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="flex justify-center">
            <a
              href="https://tintandshade.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(168,85,247,0.3)] text-lg"
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

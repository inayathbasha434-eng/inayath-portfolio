import { useEffect } from 'react'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function PortfolioProjectPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Personal Portfolio | React & Tailwind CSS Project by Inayath Basha",
    "description": "A premium developer portfolio with high-performance animations, collapsible timeline cards, and single-card team display. Built with React and Tailwind CSS by Inayath Basha.",
    "url": "https://inayathbasha.vercel.app/projects/portfolio",
    "publisher": {
      "@id": "https://inayathbasha.vercel.app/#person"
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-100 selection:bg-blue-500/30 selection:text-white">
      <SEO 
        title="Personal Portfolio Project | React & Tailwind CSS"
        description="A premium developer portfolio with high-performance animations, collapsible timeline cards, and single-card team display. Built with React and Tailwind CSS by Inayath Basha."
        canonical="/projects/portfolio"
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
                    inayathbasha.vercel.app
                  </div>
                </div>
              </div>
            <img 
              src="/portfolio_new.png" 
              alt="Portfolio Project" 
              className="w-full h-auto"
            />
          </div>

          {/* Hero Section */}
          <div className="mb-20 text-center flex flex-col items-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full border border-blue-500/20 uppercase tracking-wider">
                React
              </span>
              <span className="px-4 py-1.5 bg-purple-500/10 text-purple-400 text-xs font-bold rounded-full border border-purple-500/20 uppercase tracking-wider">
                Tailwind CSS
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Personal Portfolio <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                Premium Web Experience
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
              A premium developer portfolio with high-performance animations, collapsible timeline cards, and single-card team display.
            </p>
          </div>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">1</span>
                The Challenge
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                Needed a premium, accessible, and fast developer portfolio that displays skills, projects, and services dynamically without feeling like a generic template. Performance and smooth animations were absolute must-haves.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">2</span>
                The Solution
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                Created a React + Vite single-page application built entirely on Tailwind CSS. I styled it with fluid Framer Motion animations to guide the user's eye and create an incredibly immersive, app-like experience.
              </p>
            </div>
          </div>

          {/* Impact Banner */}
          <div className="rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 p-1 mb-20">
            <div className="bg-[#0d1426]/95 backdrop-blur-xl rounded-[23px] p-8 md:p-12">
              <h2 className="text-xs font-bold text-blue-400 mb-4 uppercase tracking-widest">The Impact</h2>
              <p className="text-xl md:text-2xl font-medium text-white leading-relaxed">
                "Achieved near-perfect 100/100 Lighthouse performance, accessibility, and SEO audit scores on all devices, leading to significantly higher engagement."
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="flex justify-center">
            <a
              href="https://inayathbasha.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] text-lg"
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

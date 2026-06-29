import { useEffect, useState } from 'react'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import { PROJECTS } from '../components/Projects'

export default function AllProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [mobileSliderPositions, setMobileSliderPositions] = useState({})

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Projects Gallery | Inayath Basha Portfolio",
    "description": "Browse all frontend, backend, Shopify, WordPress, and Machine Learning projects delivered by Inayath Basha.",
    "url": "https://inayathbasha.vercel.app/projects",
    "publisher": {
      "@id": "https://inayathbasha.vercel.app/#person"
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-100 selection:bg-blue-500/30 selection:text-white">
      <SEO 
        title="Projects Gallery | Web Developer & Shopify Expert"
        description="Browse all frontend, backend, Shopify, WordPress, and Machine Learning projects delivered by Inayath Basha."
        canonical="/projects"
        schema={pageSchema}
      />
      <Navbar />
      
      <main className="pt-24 lg:pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm font-semibold">
            <ArrowLeft size={16} /> Back to Home
          </Link>

          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Gallery</span>
            <h1 className="text-4xl md:text-5xl font-black text-white mt-2 mb-4">
              All <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
              Explore the complete catalog of projects, web applications, and agritech integrations designed and built for global clients.
            </p>
          </div>

          {/* Grid Layout of All Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PROJECTS.map((proj, index) => {
              return (
                <div 
                  key={proj.title}
                  className="bg-[#111623] border border-white/5 rounded-2xl flex flex-col relative transition-transform duration-300 hover:-translate-y-2"
                >
                  {/* Numbered Badge */}
                  <div className={`absolute -top-3.5 -right-2 w-9 h-9 rounded-full bg-gradient-to-br ${proj.accent} flex items-center justify-center text-white font-black text-sm shadow-[0_4px_15px_rgba(0,0,0,0.5)] z-30`}>
                    {parseInt(proj.number)}
                  </div>

                  {/* Top Image Area */}
                  <div className="relative aspect-[16/10] w-full rounded-t-2xl overflow-hidden bg-[#0a0d14]">
                    {proj.beforeImage && proj.afterImage ? (
                      <div className="relative w-full h-full select-none">
                        <div className="absolute inset-0">
                          <img src={proj.beforeImage} alt="Before AI" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute inset-0" style={{ clipPath: `polygon(0 0, ${mobileSliderPositions[index] ?? 50}% 0, ${mobileSliderPositions[index] ?? 50}% 100%, 0 100%)` }}>
                          <img src={proj.afterImage} alt="After AI" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute inset-y-0 w-[3px] bg-white cursor-ew-resize flex items-center justify-center pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)]" style={{ left: `${mobileSliderPositions[index] ?? 50}%` }}>
                          <div className="w-6 h-6 bg-slate-900 rounded-full shadow-lg border-2 border-white flex items-center justify-center -ml-[12px] pointer-events-auto">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 9l-4 4 4 4m8-8l4 4-4 4" />
                            </svg>
                          </div>
                        </div>
                        <input type="range" min="0" max="100" value={mobileSliderPositions[index] ?? 50} onChange={(e) => setMobileSliderPositions(prev => ({ ...prev, [index]: Number(e.target.value) }))} className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20" />
                      </div>
                    ) : (
                      <div className="absolute inset-0 w-full h-full">
                        <img src={proj.image} alt={`${proj.title} Preview`} loading="lazy" decoding="async" className="block w-full h-full object-cover object-center" />
                      </div>
                    )}
                  </div>

                  {/* Bottom Content Area */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-black text-white mb-1.5">{proj.title}</h3>
                    <p className="text-[13px] text-slate-400 mb-4 leading-relaxed flex-grow">
                      {proj.description}
                    </p>

                    {/* Tag pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {proj.tags.slice(0, 3).map((tag, i) => (
                        <span key={tag} className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${proj.tagColors[i] || 'bg-slate-500/10 text-slate-400 border-slate-500/20'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 mt-auto">
                      <Link
                        to={proj.detailPage}
                        className="flex-1 min-w-0 py-2.5 px-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-white font-bold text-xs flex items-center justify-center gap-1.5 group whitespace-nowrap"
                      >
                        Project Overview
                        <span className="group-hover:translate-x-1 transition-transform text-sm leading-none">&rarr;</span>
                      </Link>
                      
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 min-w-0 py-2.5 px-3 rounded-xl bg-gradient-to-r ${proj.accent} text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 hover:-translate-y-0.5 transition-all whitespace-nowrap`}
                      >
                        Live Project
                        <ExternalLink size={13} className="opacity-90 shrink-0" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  )
}

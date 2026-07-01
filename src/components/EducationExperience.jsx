import { useEffect, useRef, useState } from 'react'
import { GraduationCap, Briefcase, ChevronDown } from 'lucide-react'

const EDUCATION = [
  {
    degree: 'B.Sc. Information Technology',
    school: 'RD National College of Arts and Science',
    location: 'Erode',
    year: '2022 – 2025',
    result: 'CGPA: 8.0',
    type: 'degree',
  },
  {
    degree: 'Higher Secondary Certificate',
    school: 'Government Higher Secondary School',
    location: 'Erode',
    year: '2020 – 2022',
    result: '79%',
    type: 'hsc',
  },
]

const EXPERIENCE = [
  {
    role: 'Email Marketing Specialist',
    company: 'Apsensys Media',
    location: 'Bengaluru, Karnataka (Hybrid)',
    period: 'Mar 2026 – May 2026',
    type: 'Hybrid',
  },
  {
    role: 'Shopify Developer',
    company: 'PAPERO®',
    location: 'Chennai, Tamil Nadu (Hybrid)',
    period: 'Aug 2025 – Oct 2025',
    type: 'Hybrid',
  },
  {
    role: 'Front-End Developer Intern',
    company: 'Skynet Bee (College Startup)',
    location: 'Erode, Tamil Nadu',
    period: 'Jul 2024 – Dec 2024',
    type: 'Internship',
    points: [
      'Built responsive websites using HTML, CSS, and JavaScript',
      'Worked on real-time college projects',
      'Improved UI/UX and website performance',
      'Used Shopify, Figma, Canva, Excel, and modern web technologies',
    ],
  },
]

export default function EducationExperience() {
  const sectionRef = useRef(null)
  const [expandedEduIndex, setExpandedEduIndex] = useState(0)
  const [expandedIndex, setExpandedIndex] = useState(0)
  const [activeTab, setActiveTab] = useState('education')

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const elements = section.querySelectorAll('.fade-in')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="education-experience" ref={sectionRef} className="py-20 bg-[#0a0f1e] scroll-mt-16 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14 fade-in">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">My Timeline</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">
            Education & <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm sm:text-base">
            A comprehensive look at my academic foundation and professional background
          </p>
        </div>

        {/* Mobile Toggle Navigation */}
        <div className="md:hidden flex bg-[#0d1426] p-1.5 rounded-xl mb-8 border border-white/5 mx-auto max-w-[320px] fade-in">
          <button
            onClick={() => setActiveTab('education')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeTab === 'education' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <GraduationCap size={15} className={activeTab === 'education' ? 'text-white' : 'text-blue-400'} />
            Education
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold transition-all duration-300 ${
              activeTab === 'experience' 
                ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Briefcase size={15} className={activeTab === 'experience' ? 'text-white' : 'text-amber-400'} />
            Experience
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Education Timeline */}
          <div className={`transition-opacity duration-300 ${activeTab === 'education' ? 'block' : 'hidden'} md:block`}>
            <div className="flex items-center gap-2 mb-5">
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <GraduationCap size={18} className="text-blue-400" />
              </div>
              <h3 className="text-white font-bold text-lg">Education</h3>
            </div>

            <div className="relative pl-6">
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 via-blue-400 to-transparent" />
              <div className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-[#0a0f1e] shadow-lg shadow-blue-500/50" />
                    <div
                      onClick={() => setExpandedEduIndex(expandedEduIndex === idx ? null : idx)}
                      className="bg-[#0d1426]/70 border border-white/5 rounded-xl p-4 cursor-pointer hover:border-blue-500/20 transition-all duration-300 select-none"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-white font-semibold text-sm">{edu.degree}</h4>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-blue-400 font-bold text-xs bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                            {edu.result}
                          </span>
                          <ChevronDown
                            size={16}
                            className={`text-slate-400 transition-transform duration-300 ${
                              expandedEduIndex === idx ? 'rotate-180 text-blue-400' : ''
                            }`}
                          />
                        </div>
                      </div>

                      {/* Collapsible Details */}
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          expandedEduIndex === idx ? 'max-h-32 opacity-100 mt-3 pt-3 border-t border-white/5' : 'max-h-0 opacity-0 pointer-events-none'
                        }`}
                      >
                        <p className="text-slate-400 text-xs mb-1">
                          <span className="text-slate-500 mr-1">School/College:</span> {edu.school}
                        </p>
                        <p className="text-slate-400 text-xs">
                          <span className="text-slate-500 mr-1">Location & Year:</span> {edu.location} · {edu.year}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className={`transition-opacity duration-300 ${activeTab === 'experience' ? 'block' : 'hidden'} md:block`}>
            <div className="flex items-center gap-2 mb-5">
              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <Briefcase size={18} className="text-amber-400" />
              </div>
              <h3 className="text-white font-bold text-lg">Experience</h3>
            </div>

            <div className="relative pl-6">
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-amber-500 to-transparent" />
              <div className="space-y-6">
                {EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-amber-500 border-2 border-[#0a0f1e] shadow-lg shadow-amber-500/50" />
                    <div
                      onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                      className="bg-[#0d1426]/70 border border-white/5 rounded-xl p-4 cursor-pointer hover:border-amber-500/20 transition-all duration-300 select-none"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex flex-col">
                          <h4 className="text-white font-semibold text-sm">{exp.role}</h4>
                          <p className="text-slate-400 text-xs mt-0.5">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-amber-400 font-semibold text-[10px] sm:text-xs bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                            {exp.type}
                          </span>
                          <ChevronDown
                            size={16}
                            className={`text-slate-400 transition-transform duration-300 ${
                              expandedIndex === idx ? 'rotate-180 text-amber-400' : ''
                            }`}
                          />
                        </div>
                      </div>

                      {/* Collapsible Details */}
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          expandedIndex === idx ? 'max-h-64 opacity-100 mt-4 pt-3 border-t border-white/5' : 'max-h-0 opacity-0 pointer-events-none'
                        }`}
                      >
                        <p className="text-slate-400 text-xs mb-1">
                          <span className="text-slate-500 mr-1">Location:</span> {exp.location}
                        </p>
                        <p className="text-slate-400 text-xs mb-2">
                          <span className="text-slate-500 mr-1">Period:</span> {exp.period}
                        </p>
                        {exp.points && (
                          <ul className="space-y-1.5 mt-3">
                            {exp.points.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-xs text-slate-400">
                                <span className="w-1 h-1 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

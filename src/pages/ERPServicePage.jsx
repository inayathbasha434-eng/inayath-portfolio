import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft, CheckCircle2, Star, Zap, ArrowRight,
  BarChart2, Users, Package, DollarSign, ClipboardList, HeartHandshake
} from 'lucide-react'

const WHATSAPP_NUM = '919345704295'

const OFFERINGS = [
  { icon: Package, title: 'Inventory Management', desc: 'Real-time stock tracking, low stock alerts, warehouse management, and automated purchase order generation.' },
  { icon: Users, title: 'HR & Payroll Module', desc: 'Employee records, attendance tracking, leave management, payroll processing, and compliance reporting in one system.' },
  { icon: DollarSign, title: 'Accounting & Finance', desc: 'General ledger, accounts payable/receivable, invoicing, expense tracking, GST/tax reports, and financial dashboards.' },
  { icon: ClipboardList, title: 'Sales & CRM', desc: 'Manage leads, quotations, sales orders, customer relationships, and after-sales follow-ups from a single platform.' },
  { icon: BarChart2, title: 'Analytics & Reports', desc: 'Real-time business intelligence dashboards with KPIs, trends, and exportable reports for data-driven decision making.' },
  { icon: HeartHandshake, title: 'Custom Workflows', desc: 'We model your exact business processes into the ERP — approval chains, notifications, and role-based access control.' },
]

const FEATURES = [
  'Role-based user access control',
  'Mobile app access (iOS & Android)',
  'Multi-branch / multi-location support',
  'GST / VAT compliance reporting',
  'Email & SMS notification triggers',
  'Third-party API integrations',
  'Data migration from existing systems',
  'Staff training & onboarding support',
]

const PROCESS = [
  { step: '01', title: 'Business Analysis', desc: 'We study your operations, pain points, and workflows to design the right ERP architecture for your business.' },
  { step: '02', title: 'System Design', desc: 'We create module maps, user roles, and data flow diagrams and get sign-off before building anything.' },
  { step: '03', title: 'Development & Setup', desc: 'We build, configure, and customize the ERP with all your modules, workflows, and business logic.' },
  { step: '04', title: 'Training & Go-Live', desc: 'We train your team, migrate your data, and support you through the go-live phase until everything runs smoothly.' },
]

export default function ERPServicePage() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'ERP Solutions | Inayath Basha'
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-100">

      {/* Back Nav */}
      <div className="sticky top-0 z-50 bg-[#0a0f1e]/95 backdrop-blur border-b border-white/5 px-4 py-3">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="h-[340px] sm:h-[420px] md:h-[500px] w-full bg-cover bg-center relative"
          style={{ backgroundImage: 'url(/erp-hero.png)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/70 to-transparent" />

          <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-6 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-bold px-3 py-1.5 rounded-full mb-4 w-fit">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
              ERP System
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
              Streamline Your Business with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                Custom ERP
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
              We implement, customize, and deploy Enterprise Resource Planning systems that automate your operations, eliminate manual errors, and give you complete business visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-[#0d1424] border-y border-white/5 py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 gap-4 text-center">
          {[
            { value: '10+', label: 'ERP Deployments' },
            { value: '5.0★', label: 'Client Rating' },
            { value: '30%', label: 'Avg Cost Saved' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-2xl sm:text-3xl font-extrabold text-orange-400">{value}</div>
              <div className="text-xs text-slate-500 mt-1 font-medium uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* What We Do */}
        <section>
          <div className="mb-10">
            <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">What We Do</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              End-to-End ERP Implementation
            </h2>
            <p className="text-slate-400 mt-3 leading-relaxed max-w-2xl">
              Managing a growing business with spreadsheets and disconnected tools is a recipe for chaos. An ERP system connects all your business functions — inventory, finance, HR, sales, and operations — into one intelligent platform that gives you real control.
            </p>
            <p className="text-slate-400 mt-3 leading-relaxed max-w-2xl">
              We specialize in <span className="text-white font-semibold">Odoo ERP</span> implementation and customization for small and medium businesses. We don't just install software — we study your business, model your workflows, and configure a system that feels built exactly for you.
            </p>
          </div>
        </section>

        {/* What We Offer */}
        <section>
          <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">What We Offer</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-10">
            ERP Modules We Implement
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {OFFERINGS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#0d1424] border border-white/5 rounded-2xl p-6 hover:border-orange-500/30 hover:bg-[#1a1205] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <Icon size={20} className="text-orange-400" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Checklist */}
        <section className="bg-gradient-to-br from-orange-950/30 to-amber-950/20 border border-orange-500/15 rounded-3xl p-8 sm:p-12">
          <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">Everything Included</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-8">
            Standard in Every ERP Project
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {FEATURES.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-orange-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Our Process */}
        <section>
          <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">How It Works</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-10">
            Our 4-Phase ERP Implementation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <div className="text-5xl font-black text-orange-500/10 mb-3 leading-none">{step}</div>
                <h3 className="font-bold text-white text-base mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-[#0d1424] border border-white/5 rounded-3xl p-8 sm:p-12">
          <div className="flex gap-1 mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
          </div>
          <blockquote className="text-slate-200 text-lg sm:text-xl font-medium leading-relaxed mb-6 italic">
            "Before the ERP, we were managing inventory in 3 different Excel sheets and constantly making mistakes. Now everything is centralized. Our team saves 15+ hours every week. Best investment we've made."
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-bold text-sm">
              SH
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Syed H.</p>
              <p className="text-slate-500 text-xs">Operations Head, Zara Traders</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8">
          <Zap size={32} className="text-orange-400 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Ready to Transform Your Business Operations?
          </h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Let's schedule a free demo and show you exactly how an ERP system can eliminate chaos and grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUM}?text=Hi%20Inayath!%20I'm%20interested%20in%20ERP%20implementation%20for%20my%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 text-sm"
            >
              <BarChart2 size={18} />
              Get a Free ERP Demo
              <ArrowRight size={16} />
            </a>
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 text-sm"
            >
              View More Services
            </button>
          </div>
        </section>

      </div>
    </div>
  )
}

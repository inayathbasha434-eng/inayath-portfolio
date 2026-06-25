import { motion } from 'framer-motion'
import { CheckCircle, Award, ShoppingBag, Palette } from 'lucide-react'

const STATS = [
  {
    icon: CheckCircle,
    value: '20+',
    label: 'Projects Delivered',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20 shadow-green-500/5',
  },
  {
    icon: Award,
    value: '100%',
    label: 'Client Dedication',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20 shadow-amber-500/5',
  },
  {
    icon: ShoppingBag,
    value: 'Shopify',
    label: 'Store Specialist',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20 shadow-blue-500/5',
  },
  {
    icon: Palette,
    value: 'Creative',
    label: 'Brand Designer',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20 shadow-purple-500/5',
  },
]

export default function TrustStats() {
  return (
    <section className="py-12 bg-[#0a0f1e] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`bg-[#0d1426]/60 backdrop-blur-sm border ${stat.borderColor} rounded-2xl p-5 flex flex-col items-center text-center shadow-lg transition-shadow duration-300 hover:shadow-xl`}
              >
                {/* Icon Wrapper */}
                <div className={`p-3 rounded-xl ${stat.bgColor} mb-3.5`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>

                {/* Value */}
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </span>

                {/* Label */}
                <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                  {stat.label}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

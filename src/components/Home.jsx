import React from 'react'
import { B2BDatabase } from '../lib/db'

export default function Home({ navigateTo }) {
  const products = B2BDatabase.getProducts().slice(0, 4)

  const categories = [
    { name: 'Loaf Molds', count: 'Pullman & Loaf Pans', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400', slug: 'Loaf Molds' },
    { name: 'Bread Trays', count: 'Industrial Baking Trays', image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=400', slug: 'Bread Trays' },
    { name: 'Perforated Trays', count: 'Cookie & Biscuit Sheets', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=400', slug: 'Perforated Trays' },
    { name: 'Baguette Molds', count: 'French Loaf Channels', image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=400', slug: 'Baguette Molds' }
  ]

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-slate-200 metal-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-slate-900">
              <span className="inline-block bg-[#2C5F8A]/10 text-[#2C5F8A] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider font-mono-spec">
                Heavy Duty B2B Bakeware
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-brand tracking-tight leading-none">
                Industrial Bakeware <br />
                <span className="text-[#2C5F8A]">Built to Perform</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-700 max-w-2xl leading-relaxed">
                Manufacturer of high-gauge aluminium, steel, and non-stick bread trays, Pullman loaf moulds, perforated frames, and custom racks. Prototyped to your specifications.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => navigateTo('shop')}
                  className="b2b-btn-primary px-8 text-base shadow-md font-semibold justify-center"
                >
                  Browse Catalogue
                </button>
                <button
                  onClick={() => navigateTo('quote')}
                  className="flex items-center justify-center min-h-[48px] px-8 bg-white border-2 border-slate-300 hover:border-[#2C5F8A] text-slate-800 font-semibold rounded-lg transition-colors text-base"
                >
                  Request a Bulk Quote
                </button>
              </div>
            </div>

            {/* Right Product Spotlight Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 bg-white/40 p-4 rounded-full backdrop-blur-md shadow-2xl border border-white/60">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600"
                  alt="Industrial Pullman Loaf Pan"
                  className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white"
                />
                <div className="absolute -bottom-2 -right-2 bg-white border border-slate-200 p-4 rounded-xl shadow-lg text-center max-w-[150px]">
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-mono-spec">From</p>
                  <p className="text-xl font-bold text-slate-900 font-mono-spec">₹260/pc</p>
                  <p className="text-[10px] text-amber-500 font-semibold font-mono-spec uppercase mt-1">MOQ: 12 pcs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-[#1A1A1A] py-6 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="border-r border-slate-800 last:border-none">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#2C5F8A]">500+</p>
              <p className="text-[11px] sm:text-xs text-slate-400 font-mono-spec uppercase mt-1">Bakeries Served</p>
            </div>
            <div className="lg:border-r border-slate-800 last:border-none">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#2C5F8A]">ISO Certified</p>
              <p className="text-[11px] sm:text-xs text-slate-400 font-mono-spec uppercase mt-1">9001:2015 Facility</p>
            </div>
            <div className="border-r border-slate-800 lg:border-r last:border-none">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#2C5F8A]">Pan-India</p>
              <p className="text-[11px] sm:text-xs text-slate-400 font-mono-spec uppercase mt-1">Freight Transport</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#2C5F8A]">Custom R&D</p>
              <p className="text-[11px] sm:text-xs text-slate-400 font-mono-spec uppercase mt-1">To Your Specifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Grid */}
      <section className="py-16 bg-[#F8F8F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-brand text-slate-900 tracking-tight">Product Categories</h2>
            <p className="text-slate-500 mt-2 max-w-xl mx-auto text-sm">Select a line to view dimensions, weights, sheet gauges, and minimum order requirements.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                onClick={() => navigateTo('shop')}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-48 relative overflow-hidden bg-slate-100">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#2C5F8A] transition-colors">{cat.name}</h3>
                  <p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">{cat.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Bestsellers (Horizontal scroll on mobile, grid on desktop) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold font-brand text-slate-900 tracking-tight">Featured Best Sellers</h2>
              <p className="text-slate-500 text-sm mt-1">Our most ordered bakery pans and perforated trays.</p>
            </div>
            <button
              onClick={() => navigateTo('shop')}
              className="text-[#2C5F8A] hover:text-[#1A3A5C] text-sm font-semibold flex items-center space-x-1"
            >
              <span>See All</span>
              <span>→</span>
            </button>
          </div>

          {/* Swipeable List */}
          <div className="flex overflow-x-auto pb-4 gap-6 hide-scrollbar snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-x-visible md:pb-0">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => navigateTo('product', { id: product.id })}
                className="min-w-[280px] max-w-[280px] snap-start bg-[#F8F8F6] border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md cursor-pointer transition-all md:w-full md:max-w-none md:min-w-0"
              >
                <div>
                  <div className="h-44 bg-white relative p-2 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                    <div className="absolute top-2 right-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded font-mono-spec ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                        {product.inStock ? 'IN STOCK' : 'MADE TO ORDER'}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <p className="text-[10px] text-slate-400 font-semibold font-mono-spec tracking-widest uppercase">{product.sku}</p>
                    <h3 className="text-sm font-bold text-slate-900 line-clamp-2 h-10 hover:text-[#2C5F8A] transition-colors">{product.name}</h3>
                    <div className="text-xs text-slate-500 font-mono-spec space-y-0.5">
                      <div>Material: {product.material}</div>
                      <div>Dims: {product.dimensions}</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-slate-100 bg-white flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 text-[10px] font-mono-spec">From</span>
                    <p className="text-base font-extrabold text-[#2C5F8A] font-mono-spec leading-tight">₹{product.bulkPricing[2].price} <span className="text-[10px] text-slate-500 font-normal">/pc</span></p>
                  </div>
                  <div className="text-[10px] bg-slate-100 text-slate-600 font-bold px-2 py-1 rounded font-mono-spec">
                    MOQ: {product.moq} pcs
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Anti Gravity */}
      <section className="py-16 bg-[#F8F8F6] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-brand text-slate-900 tracking-tight">Engineered for Commercial Baking</h2>
            <p className="text-slate-500 mt-2 max-w-xl mx-auto text-sm">Why commercial bread lines and bakery owners trust Anti Gravity products.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200 space-y-4 shadow-sm">
              <div className="w-12 h-12 bg-[#2C5F8A]/10 rounded-lg flex items-center justify-center text-[#2C5F8A]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Industrial Materials</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We use 1.2mm thick anodized aluminium and premium Alusteel sheets. Resists mechanical damage, thermal warping, and corrosion under continuous baking rotations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 space-y-4 shadow-sm">
              <div className="w-12 h-12 bg-[#2C5F8A]/10 rounded-lg flex items-center justify-center text-[#2C5F8A]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Tiered Wholesale Pricing</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Save on costs. We offer bulk quantity price reduction steps (e.g. 10+ and 50+ pcs tiers) directly at checkout, ensuring pricing transparency for wholesale purchasing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 space-y-4 shadow-sm">
              <div className="w-12 h-12 bg-[#2C5F8A]/10 rounded-lg flex items-center justify-center text-[#2C5F8A]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Fast Dispatch Freight</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Logistics are synced from our factory in Vapi. Standard items are dispatched in 24 hours, and custom orders are completed in 10-14 days. Pan-India freight tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-brand text-slate-900 tracking-tight">Trusted by Bakery Owners</h2>
            <p className="text-slate-500 mt-2 max-w-xl mx-auto text-sm">Read stories of operations who updated their kitchens with our pans.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The Pullman pans are incredible workhorses. We bake 400 sandwich loaves daily and the non-stick release is as smooth as day one. Saved us hours in greasing time.",
                author: "Ankit Shah",
                role: "Director, Golden Rise Bakery",
                stars: 5
              },
              {
                quote: "We needed custom loaf tray moulds to fit our rotating rack oven frames. Anti Gravity fabricated prototype templates within 4 days and delivered 150 pieces on schedule.",
                author: "Chef Vikram Salvi",
                role: "Head Baker, Grand Imperial Hotels",
                stars: 5
              },
              {
                quote: "Their bulk pricing tiers and automated 18% GST invoices make procurement transparent. A simple reorder button on the dashboard means I do it in under 10 seconds.",
                author: "Rajesh Patel",
                role: "Proprietor, Raj Bakery & Confectionery",
                stars: 5
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-[#F8F8F6] p-6 rounded-xl border border-slate-200 space-y-4">
                {/* Stars */}
                <div className="flex text-amber-500">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-slate-700 italic text-sm leading-relaxed">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{t.author}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Custom Fabrication CTA Banner */}
      <section className="relative overflow-hidden py-12 px-6 sm:px-12 metal-texture border-y border-slate-200">
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Need a Custom Mold or Rack?</h2>
          <p className="text-slate-700 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            We custom fabricate metal moulds, specialized Pullman tins, deck plates, and baking trolleys to match your conveyor belts or custom ovens.
          </p>
          <button
            onClick={() => navigateTo('quote')}
            className="inline-flex b2b-btn-primary px-8 text-base shadow-md font-bold"
          >
            Submit Specifications Now
          </button>
        </div>
      </section>
    </div>
  )
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { brands } from '../data/brands'
import HeroSection from '../components/HeroSection'
import SectionHeader from '../components/SectionHeader'
import { ShieldCheck, MessageCircle, ArrowRight, ExternalLink, Sparkles } from 'lucide-react'
import { getGeneralEnquiryLink } from '../utils/whatsapp'

export default function Brands() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Get unique categories
  const categories = ['All', ...new Set(brands.map((b) => b.category))]

  const filteredBrands =
    selectedCategory === 'All'
      ? brands
      : brands.filter((b) => b.category === selectedCategory)

  return (
    <div className="pt-20">
      <HeroSection
        title="Authorised Brands & Partners"
        subtitle="We partner with India's most reputable manufacturers and global hardware innovators."
        backgroundImage="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Brands', to: '/brands' }
        ]}
      />

      {/* Demo Notice Banner */}
      <section className="bg-amber-50 border-b border-amber-200 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <span className="p-1.5 bg-amber-500 text-white rounded-md text-xs font-bold uppercase tracking-wider">
              Demo Preview
            </span>
            <p className="text-sm text-amber-900">
              The brand names displayed below are illustrative samples. Real client websites can be configured with your actual authorized brand partnerships and custom manufacturer certificates.
            </p>
          </div>
          <Link
            to="/contact"
            className="text-xs font-semibold text-amber-900 hover:text-amber-700 underline flex items-center gap-1"
          >
            Configure Your Brands <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* Main Brands Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Verified Manufacturers"
            title="Brands We Showcase & Supply"
            subtitle="Engineered for durability, rigorous safety testing, and industrial compliance across building projects in Jammu & Kashmir."
          />

          {/* Category Filter Tabs - Mobile horizontal scrollable pill bar */}
          <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 mb-8 sm:mb-12">
            <div className="flex items-center sm:flex-wrap sm:justify-center gap-2 min-w-max sm:min-w-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap active:scale-95 ${
                    selectedCategory === cat
                      ? 'bg-navy-900 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBrands.map((brand) => (
              <div
                key={brand.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:border-orange-500 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Accent Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy-700 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-navy-900 text-white rounded-lg flex items-center justify-center font-bold text-lg group-hover:bg-orange-500 transition-colors">
                      {brand.name.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="text-xs bg-navy-50 text-navy-700 font-semibold px-2.5 py-1 rounded-full border border-navy-100">
                      {brand.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 font-display mb-2 group-hover:text-orange-600 transition-colors">
                    {brand.name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {brand.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1.5 text-emerald-600 font-medium">
                    <ShieldCheck size={14} /> Genuine Stock
                  </div>
                  <Link
                    to={`/products?search=${encodeURIComponent(brand.name)}`}
                    className="text-orange-500 hover:text-orange-600 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    View Items <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Sourcing CTA */}
      <section className="bg-navy-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-navy-800 border border-navy-700 px-3.5 py-1.5 rounded-full text-xs text-orange-400 font-semibold mb-6">
            <Sparkles size={14} /> Special Procurement Requests
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
            Looking for a Specific Brand or Specification?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
            Need certified fittings, architectural hardware, or specialist power tools not listed here? Connect with our trade desk on WhatsApp for procurement and lead time queries.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={getGeneralEnquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={18} /> Chat with Brand Sourcing Desk
            </a>
            <Link to="/products" className="btn-secondary">
              Explore Available Catalogue
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Package, Users, ShieldCheck, Truck, Wrench, HeartHandshake, CheckCircle, ChevronDown, MessageCircle, Phone, Search, Building2 } from 'lucide-react'
import { categories } from '../data/categories'
import { products } from '../data/products'
import { brands } from '../data/brands'
import { galleryImages } from '../data/galleryImages'
import CategoryCard from '../components/CategoryCard'
import ProductCard from '../components/ProductCard'
import SectionHeader from '../components/SectionHeader'
import WhatsAppFloat from '../components/WhatsAppFloat'
import { getGeneralEnquiryLink } from '../utils/whatsapp'

const stats = [
  { icon: Package, label: '10+ Categories', desc: 'Product Range' },
  { icon: Search, label: '500+ Products', desc: 'In Catalogue' },
  { icon: Users, label: 'Expert Guidance', desc: 'Trained Staff' },
  { icon: Building2, label: "Jammu's Trusted", desc: 'Hardware Partner' },
]

const whyUs = [
  { icon: Package, title: 'Wide Product Range', desc: 'Over 500 products across 10+ categories — from hand tools to construction materials, all under one roof.' },
  { icon: Users, title: 'Expert Guidance', desc: 'Our experienced team helps you pick the right products for your specific project requirements.' },
  { icon: ShieldCheck, title: 'Quality Assured', desc: 'We stock only ISI-marked, BIS-certified, and brand-authorised products for your peace of mind.' },
  { icon: Truck, title: 'Bulk Order Support', desc: 'Special arrangements for contractors, builders, and businesses with large volume requirements.' },
  { icon: Wrench, title: 'Contractor Friendly', desc: 'Dedicated support for trade professionals with bulk pricing and priority fulfilment.' },
  { icon: HeartHandshake, title: 'Local Delivery', desc: 'Convenient delivery service available across Jammu city for your orders (demo feature).' },
]

const steps = [
  { num: '01', title: 'Browse Products', desc: 'Explore our extensive catalogue of hardware and building materials across 10 categories.' },
  { num: '02', title: 'Enquire via WhatsApp', desc: 'Send a quick WhatsApp message about the products you need. We respond fast.' },
  { num: '03', title: 'We Help You Get It', desc: 'Our team confirms availability, shares details, and arranges delivery or pickup.' },
]

export default function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 8)
  const featuredBrands = brands.filter(b => b.featured)
  const previewGallery = galleryImages.slice(0, 6)

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[88vh] sm:min-h-screen flex items-center justify-center overflow-hidden py-24 sm:py-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504328345614-68d16b8b4a4b?w=1600&q=90)' }}
        />
        <div className="absolute inset-0 bg-[#0d1b2e]/75 sm:bg-[#0d1b2e]/70" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
          <p className="text-orange-400 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 animate-fade-in">
            Industrial Supplies &bull; Jammu, J&amp;K
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white font-display leading-tight">
            Your Trusted Partner for <span className="text-orange-400">Hardware</span> &amp; Building Materials
          </h1>
          <p className="text-gray-200 text-sm sm:text-lg md:text-xl mt-4 sm:mt-6 max-w-2xl mx-auto leading-relaxed">
            Discover professional-grade tools, electrical supplies, plumbing materials, and construction essentials at ABC Hardware House.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 max-w-md sm:max-w-none mx-auto">
            <Link
              to="/products"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 sm:px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 text-sm sm:text-base active:scale-95"
            >
              <Package size={18} /> Explore Products
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0d1b2e] font-semibold px-6 sm:px-8 py-3.5 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2 text-sm sm:text-base active:scale-95 bg-white/5 backdrop-blur-sm"
            >
              <Phone size={18} /> Contact &amp; Location
            </Link>
          </div>
        </div>
        {/* Scroll indicator - hide on very small mobile screens */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={28} className="text-white/60" />
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-[#0d1b2e] border-b border-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex items-center gap-4 justify-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon size={22} className="text-orange-400" />
              </div>
              <div>
                <p className="text-white font-display font-bold text-lg leading-tight">{label}</p>
                <p className="text-gray-400 text-xs">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Browse Our Range" title="Product Categories" subtitle="From hand tools to bathroom fittings, find everything you need for your project." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.slice(0, 8).map(cat => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors">
              View All Categories <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Our Products" title="Featured Products" subtitle="Explore our handpicked selection of popular hardware and building material products." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2">
              View All Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Why Us" title="Why Choose ABC Hardware House" subtitle="We bring quality products, expert guidance, and dependable service to every project." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={26} className="text-orange-500" />
                </div>
                <h3 className="font-display font-semibold text-[#0d1b2e] text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BRANDS ===== */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Trusted Names" title="Brands We Stock" subtitle="Quality products from India and the world's most trusted hardware brands." />
          <div className="flex flex-wrap justify-center gap-4">
            {featuredBrands.map(b => (
              <div
                key={b.id}
                className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 flex items-center gap-3 hover:border-orange-300 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#0d1b2e] rounded-lg flex items-center justify-center text-white font-display font-bold text-lg">
                  {b.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[#0d1b2e] text-sm">{b.name}</p>
                  <p className="text-gray-400 text-xs">{b.category}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-6">Demo brands shown — actual brands configured for your business.</p>
          <div className="text-center mt-4">
            <Link to="/brands" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold text-sm transition-colors">
              View All Brands <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
              alt="Hardware store interior"
              className="w-full h-80 lg:h-96 object-cover"
            />
          </div>
          <div>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2e] font-display mb-4">About ABC Hardware House</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              ABC Hardware House is a demonstration of how a modern hardware store in Jammu can establish a strong online presence. From hand tools to construction materials, we showcase how a comprehensive product catalogue can be presented professionally.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              This demo represents a full-service hardware and building materials shop serving contractors, builders, and homeowners across Jammu &amp; Kashmir with quality products from trusted brands.
            </p>
            <ul className="space-y-2 mb-6">
              {['Wide range of hardware and tools', 'Trusted brands and quality products', 'Expert product guidance', 'Bulk and trade enquiries welcome'].map(t => (
                <li key={t} className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors">
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ENQUIRY CTA ===== */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 bg-[#0d1b2e] overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
            Have a Specific Product Requirement?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Let us know what you need — we'll check availability and get back to you promptly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={getGeneralEnquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              <MessageCircle size={18} /> WhatsApp Enquiry
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0d1b2e] font-semibold px-8 py-3.5 rounded-lg transition-all inline-flex items-center gap-2"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Gallery" title="Our Shop &amp; Products" subtitle="A visual preview of our store and product range." />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {previewGallery.map((img) => (
              <div key={img.id} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group relative">
                <img src={img.url} alt={img.title} loading="lazy" className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-end p-3">
                  <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                    {img.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors">
              View Full Gallery <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <SectionHeader label="How It Works" title="Simple &amp; Straightforward" subtitle="Getting the hardware you need is just 3 steps away." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-display font-bold text-xl">{num}</span>
                </div>
                <h3 className="font-display font-semibold text-[#0d1b2e] text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-orange-500" />
              </div>
              <h3 className="font-display font-semibold text-[#0d1b2e] text-lg mb-1">Call Us</h3>
              <p className="text-gray-700 font-medium text-sm">+91 XXXXX XXXXX</p>
              <p className="text-gray-400 text-xs mt-1">Mon-Sat, 9 AM – 7 PM</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={24} className="text-green-600" />
              </div>
              <h3 className="font-display font-semibold text-[#0d1b2e] text-lg mb-1">WhatsApp Desk</h3>
              <p className="text-gray-700 font-medium text-sm">+91 XXXXX XXXXX</p>
              <p className="text-gray-400 text-xs mt-1">Quick response &amp; product quotes</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Building2 size={24} className="text-orange-500" />
              </div>
              <h3 className="font-display font-semibold text-[#0d1b2e] text-lg mb-1">Visit Store Location</h3>
              <p className="text-gray-700 font-medium text-sm">Main Market, Jammu, J&amp;K</p>
              <Link to="/contact" className="inline-block mt-2 text-xs font-semibold text-orange-500 hover:text-orange-600 underline">
                View Interactive Jammu Map →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </>
  )
}

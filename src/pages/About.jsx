import React from 'react'
import { Link } from 'react-router-dom'
import { Target, Eye, Shield, Users, Heart, Award, CheckCircle, ArrowRight, Package, Truck, HeartHandshake, Building2 } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import SectionHeader from '../components/SectionHeader'

const values = [
  { icon: Shield, title: 'Integrity', desc: 'Honest pricing and transparent dealings with every customer.' },
  { icon: Award, title: 'Quality', desc: 'Only stocking products that meet rigorous quality standards.' },
  { icon: Users, title: 'Customer First', desc: 'Listening to what you need and guiding you to the right product.' },
  { icon: Heart, title: 'Community', desc: 'Serving and supporting the local Jammu business community.' },
  { icon: Building2, title: 'Expertise', desc: 'Deep product knowledge built from years in the hardware industry.' },
  { icon: HeartHandshake, title: 'Reliability', desc: 'Consistent availability and dependable service, every time.' },
]

const reasons = [
  'Wide selection of 500+ products across 10 categories',
  'Trusted brands: Stanley, Bosch, Havells, Asian Paints, and more',
  'Expert product guidance from knowledgeable staff',
  'Bulk order support for contractors and builders',
  'Convenient location in the heart of Jammu',
  'WhatsApp-based enquiry for quick responses',
  'Competitive deals and trade-friendly terms',
  'Local delivery available across Jammu city',
]

export default function About() {
  return (
    <>
      <HeroSection
        title="About Us"
        subtitle="Know more about ABC Hardware House — your neighbourhood partner for quality hardware and building materials."
        backgroundImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=90"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'About Us' },
        ]}
      />

      {/* ===== INTRO ===== */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
              alt="Hardware store"
              className="w-full h-80 lg:h-[420px] object-cover"
            />
          </div>
          <div>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2e] font-display mb-4">ABC Hardware House</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              ABC Hardware House is a demonstration of how a modern hardware store in Jammu, Jammu &amp; Kashmir can present its business and products to customers online. This website has been designed and developed by <strong>Markhormind Technologies</strong> as a portfolio demonstration.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The concept represents a full-service hardware and building materials shop that serves contractors, builders, architects, and homeowners with quality products from India's and the world's most trusted brands.
            </p>
            <p className="text-gray-500 text-sm bg-orange-50 border border-orange-200 rounded-lg p-3">
              <strong>Note:</strong> This is sample content for demonstration purposes. Your actual business story, history, and details will be featured here.
            </p>
          </div>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeader label="Our Story" title="From Tradition to Digital" subtitle="How a local hardware business embraces the digital age." />
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              In the heart of Jammu, hardware shops have been the backbone of the city's construction and home improvement industry for decades. Generations of builders, electricians, plumbers, and homeowners have relied on local hardware stores for quality products and trusted advice.
            </p>
            <p>
              ABC Hardware House represents the next step in this legacy — combining the deep product knowledge and personal service of a traditional hardware store with the reach and convenience of a professional online presence.
            </p>
            <p>
              From a curated product catalogue and WhatsApp-based enquiry to an admin dashboard for inventory management, this demonstration shows how a local hardware business can modernise its operations and connect with customers in new ways.
            </p>
            <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4">
              <p className="text-gray-500 text-sm">
                <strong className="text-orange-500">Demo Content:</strong> This story is illustrative. Your actual business journey, milestones, and achievements will be featured in the live website, written to reflect your brand authentically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0d1b2e] text-white rounded-2xl p-8 shadow-xl">
            <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-5">
              <Target size={28} className="text-orange-400" />
            </div>
            <h3 className="font-display font-bold text-2xl mb-3">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To be Jammu's most trusted hardware partner — providing quality products, expert guidance, and reliable service to every professional and homeowner who walks through our door or reaches us online.
            </p>
          </div>
          <div className="bg-white border-2 border-[#0d1b2e] rounded-2xl p-8 shadow-xl">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-5">
              <Eye size={28} className="text-orange-500" />
            </div>
            <h3 className="font-display font-bold text-[#0d1b2e] text-2xl mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              A digital-first hardware experience — where customers can browse, enquire, and order from a comprehensive catalogue, supported by a team that truly understands construction and building materials.
            </p>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Our Values" title="What We Stand For" subtitle="The principles that guide how we serve our customers." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={24} className="text-orange-500" />
                </div>
                <h3 className="font-display font-semibold text-[#0d1b2e] text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">Why Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2e] font-display mb-6">Why Choose Us</h2>
            <ul className="space-y-3">
              {reasons.map(r => (
                <li key={r} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80"
              alt="Tools display"
              className="w-full h-80 lg:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* ===== SHOWROOM ===== */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeader label="Our Showroom" title="Visit Our Store" subtitle="A well-organised showroom with professional product displays." />
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1504328345614-68d16b8b4a4b?w=1200&q=85"
              alt="Hardware showroom"
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>
          <p className="text-gray-500 text-sm mt-6 max-w-xl mx-auto">
            Actual shop photos and showroom images will be featured here. The above image is a placeholder for demonstration.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-[#0d1b2e]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
            Ready to Explore Our Products?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Browse our complete catalogue of hardware and building materials.
          </p>
          <Link
            to="/products"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            <Package size={18} /> Browse Products <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}

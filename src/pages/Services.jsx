import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import SectionHeader from '../components/SectionHeader'
import {
  Wrench,
  Building2,
  Boxes,
  HelpCircle,
  HardHat,
  SearchCheck,
  MessageCircle,
  FileCheck,
  Truck,
  ClipboardList,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'
import { getBulkOrderLink, getGeneralEnquiryLink } from '../utils/whatsapp'

const services = [
  {
    icon: Wrench,
    title: 'Hardware & Tool Supplies',
    tag: 'Daily Retail & Trade',
    description:
      'Extensive stock of industrial-grade hand tools, heavy power tools, precision cutting discs, drill bits, and maintenance consumables ready for counter pickup or same-day local dispatch.',
    features: ['Warranty support on major power tools', 'Genuine replacement blades & discs', 'Precision measurement tools']
  },
  {
    icon: Building2,
    title: 'Construction Material Supplies',
    tag: 'Site Essentials',
    description:
      'Structural building essentials including certified TMT bars, structural angles, GI corrugated sheets, cement board, binding wires, and waterproofing compounds.',
    features: ['BIS-certified rebar', 'Standard metric sizing & custom bundle lots', 'Anti-corrosion coated steel']
  },
  {
    icon: Boxes,
    title: 'Bulk Order Quotations',
    tag: 'Volume Advantage',
    description:
      'Dedicated handling for commercial builders, contractors, and hotel renovators requiring bulk quantities with staggered job-site delivery schedules across the Jammu division.',
    features: ['Direct consolidated invoices', 'Staggered delivery milestones', 'Priority lot reservation']
  },
  {
    icon: HelpCircle,
    title: 'Technical Product Guidance',
    tag: 'Consultation',
    description:
      'Unsure which fastener grade or chemical anchor suits your RCC structure? Our trade experts review application loads and recommend the appropriate industry-rated fasteners.',
    features: ['Chemical anchor calculation', 'Electrical wire load ratings', 'High-moisture bathroom fittings advice']
  },
  {
    icon: HardHat,
    title: 'Contractor & Trade Accounts',
    tag: 'Professional Desk',
    description:
      'Priority counter service for registered site supervisors, electrical contractors, plumbers, and interior fitout agencies working on residential or commercial developments.',
    features: ['Expedited order preparation', 'WhatsApp order desk directly linked to dispatch', 'Consolidated monthly summaries']
  },
  {
    icon: SearchCheck,
    title: 'Hard-to-Find Product Sourcing',
    tag: 'Special Procurement',
    description:
      'If an architect or tender document specifies an unusual hardware profile, hinge model, or European bolt standard, we leverage manufacturer networks to procure exact specifications.',
    features: ['National logistics network', 'Batch test certificates on demand', 'Sample piece approval before bulk']
  }
]

const processSteps = [
  {
    step: '01',
    icon: ClipboardList,
    title: 'Submit Requirements',
    desc: 'Share your bill of materials (BOM), project specs, or simple product photo directly via WhatsApp or our online enquiry form.'
  },
  {
    step: '02',
    icon: FileCheck,
    title: 'Estimate & Availability',
    desc: 'Our staff verifies in-house stock and immediately shares a transparent breakdown of lot availability, delivery times, and alternatives.'
  },
  {
    step: '03',
    icon: Truck,
    title: 'Confirmation & Delivery',
    desc: 'Orders are prepared, packed, and arranged for either convenient counter collection in Jammu or direct truck loading for construction sites.'
  }
]

export default function Services() {
  return (
    <div className="pt-20">
      <HeroSection
        title="Trade & Commercial Services"
        subtitle="Comprehensive supply capabilities built for contractors, tradesmen, and discerning homeowners in Jammu."
        backgroundImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' }
        ]}
      />

      {/* Demo Project Notice */}
      <section className="bg-blue-50 border-b border-blue-200 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2 text-xs sm:text-sm text-blue-900">
          <p>
            <strong className="text-orange-600 uppercase font-bold tracking-wider mr-2">Notice:</strong>
            These service descriptions represent the functional offerings Markhormind Technologies can build and tailor for your real-world hardware store.
          </p>
          <Link to="/contact" className="font-semibold text-blue-700 hover:text-blue-950 underline">
            Discuss Implementation
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="What We Provide"
            title="Tailored Hardware & Material Solutions"
            subtitle="Designed to keep construction deadlines on schedule and trade projects moving smoothly without downtime."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-7 hover:shadow-xl transition-all duration-300 hover:border-orange-500 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-13 h-13 p-3 bg-navy-50 rounded-xl text-navy-900 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <Icon size={26} />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-navy-900 font-display mb-3 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {item.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={getBulkOrderLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-navy-50 hover:bg-orange-500 text-navy-900 hover:text-white font-semibold text-xs transition-colors"
                  >
                    <MessageCircle size={15} /> Inquire About This Service
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Flow */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Streamlined Process"
            title="How We Fulfill Trade & Site Orders"
            subtitle="Fast, responsive, and reliable communication designed around active job sites."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mt-12">
            {processSteps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm relative flex flex-col items-center text-center group hover:shadow-md transition-shadow"
                >
                  <div className="absolute -top-5 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    {step.step}
                  </div>
                  <div className="w-14 h-14 bg-navy-50 text-navy-900 rounded-2xl flex items-center justify-center mb-6 mt-2 group-hover:scale-110 transition-transform">
                    <Icon size={28} />
                  </div>
                  <h4 className="text-lg font-bold text-navy-900 font-display mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <a
              href={getBulkOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={18} /> Initiate WhatsApp Trade Request
            </a>
          </div>
        </div>
      </section>

      {/* Contractor Callout Banner */}
      <section className="bg-navy-900 py-16 px-4 sm:px-6 lg:px-8 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <HardHat size={40} className="mx-auto text-orange-400 mb-4 animate-bounce" />
          <h2 className="text-2xl sm:text-4xl font-bold font-display mb-4">
            Are You a Builder, Architect, or Contractor in Jammu?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
            Partner with us to receive priority inventory reservations, dedicated account support, and expedited deliveries for your ongoing job sites.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Register Contractor Interest
            </Link>
            <a
              href={getGeneralEnquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <MessageCircle size={18} /> Trade WhatsApp Desk
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

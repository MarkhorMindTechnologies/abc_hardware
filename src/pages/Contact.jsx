import React from 'react'
import HeroSection from '../components/HeroSection'
import SectionHeader from '../components/SectionHeader'
import ContactForm from '../components/ContactForm'
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Building,
  Navigation,
  AlertCircle
} from 'lucide-react'
import { getGeneralEnquiryLink } from '../utils/whatsapp'

export default function Contact() {
  return (
    <div className="pt-20">
      <HeroSection
        title="Contact & Store Location"
        subtitle="Have questions about product availability, contractor supplies, or bulk delivery? Reach out to our Jammu team."
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Contact Us', to: '/contact' }
        ]}
      />

      {/* Demo Notice Banner */}
      <section className="bg-amber-50 border-b border-amber-200 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-start gap-3 text-xs sm:text-sm text-amber-900">
          <AlertCircle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Demonstration Notice:</strong> ABC Hardware House is a fictional business prototype crafted by <strong>Markhormind Technologies</strong>. Phone numbers, addresses, and email contacts displayed below are representative placeholders and can be customized with your company's official contact channels.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm">
              <div className="mb-8">
                <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">
                  Direct Message
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-navy-900 font-display mt-1">
                  Send an Equipment or Material Enquiry
                </h2>
                <p className="text-gray-500 text-sm mt-2">
                  Fill in your details below and our team will get back to you with quotation and availability info.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Right Column: Contact Info & Hours */}
            <div className="lg:col-span-5 space-y-8">
              {/* Store Details Card */}
              <div className="bg-navy-900 text-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold font-display mb-6 text-white flex items-center gap-2">
                  <Building size={20} className="text-orange-400" /> Store Headquarters
                </h3>

                <ul className="space-y-5 text-sm">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center flex-shrink-0 text-orange-400">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Store Address</p>
                      <p className="text-gray-300 mt-0.5">
                        Main Market / Industrial Corridor, Jammu, Jammu &amp; Kashmir 180001, India
                      </p>
                      <span className="inline-block mt-1 text-[11px] text-gray-400">
                        (Exact physical address configured for client)
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center flex-shrink-0 text-orange-400">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Trade Desk Phone</p>
                      <a
                        href="tel:+91XXXXXXXXXX"
                        className="text-gray-300 hover:text-orange-400 transition-colors block mt-0.5"
                      >
                        +91 XXXXX XXXXX (Placeholder)
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center flex-shrink-0 text-green-400">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">WhatsApp Fast Desk</p>
                      <a
                        href={getGeneralEnquiryLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-green-400 transition-colors block mt-0.5"
                      >
                        +91 XXXXX XXXXX (Enquiry Bot)
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center flex-shrink-0 text-orange-400">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Official Email</p>
                      <a
                        href="mailto:info@jammuhardwarehouse.com"
                        className="text-gray-300 hover:text-orange-400 transition-colors block mt-0.5"
                      >
                        info@jammuhardwarehouse.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Operating Hours Card */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-7">
                <h3 className="text-lg font-bold font-display text-navy-900 mb-4 flex items-center gap-2">
                  <Clock size={18} className="text-orange-500" /> Operating &amp; Dispatch Hours
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Monday – Saturday</span>
                    <span className="font-semibold text-navy-900">9:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Sunday</span>
                    <span className="font-semibold text-orange-600">10:00 AM – 3:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Site Dispatch Orders</span>
                    <span className="font-semibold text-navy-900">Daily from 7:30 AM</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Fast Callout */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-6 flex items-center justify-between shadow-md">
                <div>
                  <h4 className="font-bold text-base font-display">Need Immediate Pricing?</h4>
                  <p className="text-xs text-emerald-100 mt-1">Send a picture of your requirement on WhatsApp.</p>
                </div>
                <a
                  href={getGeneralEnquiryLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-emerald-800 hover:bg-emerald-50 px-4 py-2 rounded-lg font-bold text-xs shadow transition-colors flex items-center gap-1.5 flex-shrink-0"
                >
                  <MessageCircle size={15} /> Chat Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Google Map Section */}
      <section className="pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">
                Visit Our Showroom &amp; Warehouse
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900 font-display mt-1">
                Store Location Map – Jammu
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Located conveniently in the central commercial district of Jammu with direct site-truck access.
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Jammu,+Jammu+and+Kashmir,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-navy-900 hover:bg-orange-500 text-white font-semibold text-xs transition-colors shadow-sm self-start sm:self-auto"
            >
              <Navigation size={14} /> Open in Google Maps
            </a>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-gray-300 shadow-lg h-[340px] sm:h-[450px] bg-gray-100">
            {/* Live Interactive Google Map of Jammu */}
            <iframe
              title="ABC Hardware House - Jammu Location Map"
              src="https://maps.google.com/maps?q=Jammu,+Jammu+and+Kashmir,+India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Location Info Overlay Card */}
            <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:bottom-6 sm:left-6 z-10 sm:max-w-sm bg-navy-900/95 backdrop-blur-md text-white p-3.5 sm:p-5 rounded-xl border border-navy-700 shadow-2xl">
              <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold text-xs">
                  ABC
                </div>
                <h4 className="font-bold text-xs sm:text-sm font-display text-white">
                  ABC Hardware House Showroom &amp; Stockyard
                </h4>
              </div>
              <p className="text-gray-300 text-[11px] sm:text-xs leading-relaxed">
                Main Market / Industrial Corridor, Jammu, J&amp;K 180001
              </p>
              <div className="mt-2 pt-2 sm:mt-3 sm:pt-3 border-t border-navy-800 flex items-center justify-between text-[10px] sm:text-[11px] text-gray-400">
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  ● Store Open Today
                </span>
                <span>Jammu Central</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MessageCircle, MapPin, Facebook, Instagram, Twitter, Youtube, ExternalLink } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/brands', label: 'Brands' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/admin-preview', label: 'Admin Preview' },
]

const categories = [
  { id: 'power-tools', name: 'Power Tools' },
  { id: 'hand-tools', name: 'Hand Tools' },
  { id: 'electrical', name: 'Electrical Supplies' },
  { id: 'plumbing', name: 'Plumbing' },
  { id: 'safety', name: 'Safety Equipment' },
  { id: 'paints', name: 'Paints & Coatings' },
  { id: 'fasteners', name: 'Fasteners & Fixings' },
  { id: 'abrasives', name: 'Abrasives' },
  { id: 'welding', name: 'Welding Supplies' },
  { id: 'storage', name: 'Storage & Material Handling' },
]

const PHONE = '+91-XXXXX-XXXXX'
const WHATSAPP_NUMBER = '91XXXXXXXXXX'
const EMAIL = 'info@jammuhardwarehouse.com'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-orange-500 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                <span className="text-white font-display font-bold text-base tracking-tight leading-none">ABC</span>
              </div>
              <div>
                <p className="font-display font-bold text-lg leading-tight">ABC Hardware House</p>
                <p className="text-gray-400 text-xs">Industrial &amp; Building Materials</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              Your trusted partner for premium hardware, tools, and industrial supplies in Jammu &amp; Kashmir. 
              Serving professionals and businesses since decades with quality products and expert guidance.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-navy-700 hover:bg-orange-500 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-orange-400 uppercase tracking-widest text-xs mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-gray-300 hover:text-orange-400 text-sm flex items-center gap-1.5 transition-colors group"
                  >
                    <span className="w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div>
            <h3 className="font-display font-semibold text-orange-400 uppercase tracking-widest text-xs mb-5">
              Product Categories
            </h3>
            <ul className="space-y-2.5">
              {categories.map(({ id, name }) => (
                <li key={id}>
                  <Link
                    to={`/products?category=${id}`}
                    className="text-gray-300 hover:text-orange-400 text-sm flex items-center gap-1.5 transition-colors group"
                  >
                    <span className="w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="font-display font-semibold text-orange-400 uppercase tracking-widest text-xs mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-orange-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>ABC Hardware House</p>
                  <p>Main Market, Jammu</p>
                  <p>Jammu &amp; Kashmir — India</p>
                </div>
              </li>
              <li>
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-orange-400 text-sm transition-colors"
                >
                  <Phone size={16} className="text-orange-400 flex-shrink-0" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-orange-400 text-sm transition-colors break-all"
                >
                  <Mail size={16} className="text-orange-400 flex-shrink-0" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  <MessageCircle size={15} />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Demo disclaimer */}
      <div className="border-t border-navy-700 bg-navy-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-xs text-gray-500 leading-relaxed">
            <span className="text-orange-400 font-semibold">⚠ Demo Notice:</span>{' '}
            This is a demonstration website created for ABC Hardware House by Markhormind Technologies. 
            All products, prices, availability, and contact details shown are for illustrative purposes only. 
            This site does not represent the final live website and should not be used for actual purchases or orders.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-400 text-xs">
            &copy; {year} ABC Hardware House. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs flex items-center gap-1">
            Designed &amp; Developed by{' '}
            <a
              href="#"
              className="text-orange-400 hover:text-orange-300 font-semibold inline-flex items-center gap-0.5 transition-colors"
            >
              Markhormind Technologies
              <ExternalLink size={11} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Phone, Menu, X, MessageCircle, ShieldCheck } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home', exact: true },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/brands', label: 'Brands' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact Us' },
]

const PHONE = '+91-XXXXX-XXXXX'
const WHATSAPP_NUMBER = '91XXXXXXXXXX'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const navbarBase =
    'fixed top-0 left-0 right-0 z-40 transition-all duration-300'
  const navbarScrolled =
    'bg-white shadow-md py-2'
  const navbarTop =
    'bg-white/95 backdrop-blur-sm py-3'

  return (
    <header className={`${navbarBase} ${scrolled ? navbarScrolled : navbarTop}`}>
      {/* Top bar */}
      <div className="bg-navy-900 text-white text-xs py-1.5 px-4 hidden md:flex items-center justify-between">
        <span className="text-gray-300">Premium Hardware &amp; Industrial Supplies — Jammu, J&amp;K</span>
        <div className="flex items-center gap-4">
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-1 hover:text-orange-400 transition-colors"
          >
            <Phone size={12} />
            <span>{PHONE}</span>
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors"
          >
            <MessageCircle size={12} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center shadow-md group-hover:bg-orange-600 transition-colors duration-200">
              <span className="text-white font-display font-bold text-sm tracking-tight leading-none">ABC</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-navy-900 font-display font-bold text-base leading-tight">
                ABC Hardware House
              </p>
              <p className="text-gray-400 text-xs leading-tight">Industrial &amp; Building Supplies — Jammu</p>
            </div>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ to, label, exact }) => (
              <NavLink
                key={to}
                to={to}
                end={exact}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-orange-500 bg-orange-50 font-semibold'
                      : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right side: actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Phone */}
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-1.5 text-sm text-navy-700 hover:text-orange-500 font-medium transition-colors"
            >
              <Phone size={15} />
              <span>{PHONE}</span>
            </a>

            {/* WhatsApp button */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors shadow-sm"
            >
              <MessageCircle size={13} />
              WhatsApp
            </a>

            {/* Admin Preview */}
            <NavLink
              to="/admin-preview"
              className={({ isActive }) =>
                `flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-200 ${
                  isActive
                    ? 'bg-navy-900 text-white border-navy-900'
                    : 'border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white'
                }`
              }
            >
              <ShieldCheck size={12} />
              Admin Preview
            </NavLink>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2.5 rounded-xl text-navy-900 hover:text-orange-500 hover:bg-gray-100 transition-colors touch-manipulation active:scale-95"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[72px] bg-black/50 backdrop-blur-xs z-30 transition-opacity"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile menu — slide down */}
      <div
        className={`lg:hidden relative z-40 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-[85vh] opacity-100 shadow-2xl' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 pb-6 pt-3 overflow-y-auto max-h-[calc(85vh-20px)]">
          {/* Nav links */}
          <nav className="flex flex-col gap-1 mb-4">
            {navLinks.map(({ to, label, exact }) => (
              <NavLink
                key={to}
                to={to}
                end={exact}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-orange-500 bg-orange-50 font-semibold'
                      : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <NavLink
              to="/admin-preview"
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-orange-500 bg-orange-50'
                    : 'text-navy-700 hover:bg-navy-50'
                }`
              }
            >
              <ShieldCheck size={14} />
              Admin Preview
            </NavLink>
          </nav>

          {/* Mobile actions */}
          <div className="flex flex-col gap-2 border-t border-gray-100 pt-3">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 text-sm text-navy-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Phone size={15} />
              {PHONE}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

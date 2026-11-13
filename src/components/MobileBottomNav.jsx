import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Package, Phone, MessageCircle, MapPin } from 'lucide-react'
import { WHATSAPP_NUMBER } from '../utils/whatsapp'

export default function MobileBottomNav() {
  const phone = '+91XXXXXXXXXX'

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl px-2 py-1.5 flex items-center justify-around"
      style={{ paddingBottom: 'max(0.375rem, env(safe-area-inset-bottom))' }}
      aria-label="Mobile Bottom Navigation"
    >
      {/* Home */}
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `flex flex-col items-center justify-center py-1 px-2.5 rounded-lg text-[10px] font-medium transition-colors ${
            isActive ? 'text-orange-500 font-bold' : 'text-gray-600 hover:text-navy-900'
          }`
        }
      >
        <Home size={19} className="mb-0.5" />
        <span>Home</span>
      </NavLink>

      {/* Products */}
      <NavLink
        to="/products"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center py-1 px-2.5 rounded-lg text-[10px] font-medium transition-colors ${
            isActive ? 'text-orange-500 font-bold' : 'text-gray-600 hover:text-navy-900'
          }`
        }
      >
        <Package size={19} className="mb-0.5" />
        <span>Catalogue</span>
      </NavLink>

      {/* Central WhatsApp Enquiry Action */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          'Hello! I would like to enquire about hardware products. (ABC Hardware House)'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center py-1 px-3 bg-green-500 active:bg-green-600 text-white rounded-xl shadow-md -mt-3 border-2 border-white text-[10px] font-bold"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </a>

      {/* Call */}
      <a
        href={`tel:${phone}`}
        className="flex flex-col items-center justify-center py-1 px-2.5 rounded-lg text-[10px] font-medium text-gray-600 hover:text-navy-900 active:text-orange-500 transition-colors"
      >
        <Phone size={19} className="mb-0.5" />
        <span>Call</span>
      </a>

      {/* Location / Map */}
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center py-1 px-2.5 rounded-lg text-[10px] font-medium transition-colors ${
            isActive ? 'text-orange-500 font-bold' : 'text-gray-600 hover:text-navy-900'
          }`
        }
      >
        <MapPin size={19} className="mb-0.5" />
        <span>Store Map</span>
      </NavLink>
    </nav>
  )
}

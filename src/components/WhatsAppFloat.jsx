import React, { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { getGeneralEnquiryLink } from '../utils/whatsapp'

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={getGeneralEnquiryLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 sm:bottom-6 left-4 sm:left-6 z-40 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-30" />
        {/* Button */}
        <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
          <MessageCircle size={26} className="text-white" />
        </div>
        {/* Tooltip */}
        {hovered && (
          <div className="absolute bottom-full left-0 mb-3 bg-gray-900 text-white text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
            Chat with us on WhatsApp
            <div className="absolute top-full left-5 -mt-1 w-2 h-2 bg-gray-900 rotate-45" />
          </div>
        )}
      </div>
    </a>
  )
}

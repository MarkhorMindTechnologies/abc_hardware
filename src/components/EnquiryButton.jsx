import React from 'react'
import { MessageCircle } from 'lucide-react'
import { getProductEnquiryLink, getGeneralEnquiryLink } from '../utils/whatsapp'

export default function EnquiryButton({ productName, variant = 'default', className = '' }) {
  const link = productName ? getProductEnquiryLink(productName) : getGeneralEnquiryLink()

  const variants = {
    default: 'bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 text-sm',
    large: 'bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 text-base',
    compact: 'bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-xs',
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg ${variants[variant]} ${className}`}
    >
      <MessageCircle size={variant === 'compact' ? 14 : 18} />
      Enquire on WhatsApp
    </a>
  )
}

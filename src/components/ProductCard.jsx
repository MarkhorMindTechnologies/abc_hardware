import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Eye, CheckCircle, Clock } from 'lucide-react'
import { getProductEnquiryLink } from '../utils/whatsapp'
import { truncate } from '../utils/helpers'

export default function ProductCard({ product, compact = false }) {
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col">
      {/* Image */}
      <Link to={`/products/${product.id}`} className="relative overflow-hidden block">
        <div className={`${compact ? 'h-44' : 'h-52'} bg-gray-100 overflow-hidden`}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
          {!imgLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-8 h-8 border-2 border-gray-300 border-t-orange-500 rounded-full animate-spin" />
            </div>
          )}
        </div>
        {/* Availability badge */}
        <div className="absolute top-3 left-3">
          {product.availability === 'available' ? (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-100 px-2.5 py-1 rounded-full shadow-sm">
              <CheckCircle size={12} /> Available
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-orange-700 bg-orange-100 px-2.5 py-1 rounded-full shadow-sm">
              <Clock size={12} /> Contact to Confirm
            </span>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Category */}
        <p className="text-orange-500 text-xs font-semibold uppercase tracking-wider mb-1">
          {product.categoryLabel}
        </p>
        {/* Name */}
        <Link to={`/products/${product.id}`}>
          <h3 className="font-display font-semibold text-[#0d1b2e] text-base leading-snug line-clamp-2 hover:text-orange-500 transition-colors">
            {product.name}
          </h3>
        </Link>
        {/* Description */}
        {!compact && (
          <p className="text-gray-500 text-sm mt-2 line-clamp-2">
            {truncate(product.description, 90)}
          </p>
        )}
        {/* Brand */}
        <p className="text-gray-400 text-xs mt-2">
          Brand: <span className="font-medium text-gray-600">{product.brand}</span>
        </p>

        {/* Buttons */}
        <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
          <Link
            to={`/products/${product.id}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#0d1b2e] hover:bg-[#1e3a5f] text-white text-sm font-medium px-3 py-2.5 rounded-lg transition-colors"
          >
            <Eye size={14} />
            View Details
          </Link>
          <a
            href={getProductEnquiryLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-3 py-2.5 rounded-lg transition-colors"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

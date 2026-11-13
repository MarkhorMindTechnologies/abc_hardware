import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Wrench, Zap, Plug, Droplets, PaintBucket, Building2, Shield, Settings, Droplet, DoorOpen, ArrowRight } from 'lucide-react'

const iconMap = {
  Wrench, Zap, Plug, Droplets, PaintBucket, Building2, Shield, Settings, Droplet, DoorOpen,
}

export default function CategoryCard({ category }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const Icon = iconMap[category.icon] || Wrench

  return (
    <Link
      to={`/products?category=${category.id}`}
      className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 block"
    >
      <div className="h-64 relative overflow-hidden">
        {/* Background image */}
        <img
          src={category.image}
          alt={category.label}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        {!imgLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-500" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center shadow-md">
              <Icon size={20} className="text-white" />
            </div>
            <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full backdrop-blur-sm">
              {category.count}+ Products
            </span>
          </div>
          <h3 className="font-display font-bold text-white text-lg leading-snug">
            {category.label}
          </h3>
          <p className="text-gray-200 text-sm mt-1 line-clamp-2">
            {category.description}
          </p>
          <div className="flex items-center gap-1 text-orange-400 text-sm font-semibold mt-3 group-hover:gap-2 transition-all">
            Explore <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </Link>
  )
}

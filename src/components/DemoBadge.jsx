import React, { useState } from 'react'
import { Info } from 'lucide-react'

export default function DemoBadge() {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="fixed top-20 right-3 sm:top-4 sm:right-4 z-40 flex items-center gap-2 cursor-default select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title="Demo Website by Markhormind Technologies"
    >
      <div
        className={`flex items-center gap-2 bg-orange-500 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          hovered ? 'px-4 py-2 max-w-xs' : 'px-2 py-2 max-w-[2.5rem]'
        }`}
      >
        <Info size={16} className="flex-shrink-0" />
        <span
          className={`text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
            hovered ? 'opacity-100 max-w-full' : 'opacity-0 max-w-0'
          }`}
        >
          Demo by Markhormind Technologies
        </span>
      </div>
    </div>
  )
}

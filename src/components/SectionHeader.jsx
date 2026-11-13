import React from 'react'

export default function SectionHeader({ label, title, subtitle, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {label && (
        <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">
          {label}
        </p>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2e] font-display">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-gray-500 text-lg mt-3 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 flex ${centered ? 'justify-center' : 'justify-start'}`}>
        <div className="w-16 h-1 bg-orange-500 rounded-full" />
      </div>
    </div>
  )
}

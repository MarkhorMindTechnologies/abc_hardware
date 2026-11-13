import React from 'react'

export default function LoadingSpinner({ fullPage = true, size = 'md' }) {
  const sizeClasses = {
    sm: 'w-8 h-8 border-2',
    md: 'w-14 h-14 border-4',
    lg: 'w-20 h-20 border-4',
  }

  const spinner = (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative">
        {/* Outer ring */}
        <div
          className={`${sizeClasses[size]} rounded-full border-navy-700 border-t-orange-500 animate-spin`}
        />
        {/* Inner dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
        </div>
      </div>
      <div className="text-center">
        <p className="text-navy-700 font-display font-semibold text-sm tracking-wide">
          ABC Hardware House
        </p>
        <p className="text-gray-400 text-xs mt-0.5">Loading…</p>
      </div>
    </div>
  )

  if (fullPage) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90 backdrop-blur-sm">
        {spinner}
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center py-16">
      {spinner}
    </div>
  )
}

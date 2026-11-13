import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function HeroSection({ title, subtitle, backgroundImage, cta1, cta2, breadcrumbs, overlay = true, height = 'h-[45vh] sm:h-[55vh]' }) {
  return (
    <section className={`relative ${height} min-h-[280px] py-14 sm:py-0 flex items-center justify-center overflow-hidden`}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      {overlay && <div className="absolute inset-0 bg-[#0d1b2e]/75" />}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="flex flex-wrap items-center justify-center gap-1 text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <ChevronRight size={13} className="text-gray-400" />}
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-orange-400 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-orange-400 font-medium">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-200 text-xs sm:text-base md:text-lg mt-3 sm:mt-4 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        {(cta1 || cta2) && (
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            {cta1 && (
              <Link to={cta1.to} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 text-sm">
                {cta1.icon && <cta1.icon size={17} />}
                {cta1.label}
              </Link>
            )}
            {cta2 && (
              <Link to={cta2.to} className="border-2 border-white text-white hover:bg-white hover:text-[#0d1b2e] font-semibold px-6 sm:px-8 py-3 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2 text-sm bg-white/5 backdrop-blur-sm">
                {cta2.icon && <cta2.icon size={17} />}
                {cta2.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

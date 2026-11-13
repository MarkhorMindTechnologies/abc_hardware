import React, { useState, useEffect } from 'react'
import { galleryImages, galleryCategories } from '../data/galleryImages'
import HeroSection from '../components/HeroSection'
import SectionHeader from '../components/SectionHeader'
import { X, ChevronLeft, ChevronRight, ZoomIn, Eye, Sparkles } from 'lucide-react'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeImageIndex, setActiveImageIndex] = useState(null)

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return

      if (e.key === 'Escape') {
        setActiveImageIndex(null)
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) =>
          prev < filteredImages.length - 1 ? prev + 1 : 0
        )
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) =>
          prev > 0 ? prev - 1 : filteredImages.length - 1
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeImageIndex, filteredImages])

  const openLightbox = (index) => {
    setActiveImageIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setActiveImageIndex(null)
    document.body.style.overflow = 'auto'
  }

  const nextImage = (e) => {
    e.stopPropagation()
    setActiveImageIndex((prev) =>
      prev < filteredImages.length - 1 ? prev + 1 : 0
    )
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setActiveImageIndex((prev) =>
      prev > 0 ? prev - 1 : filteredImages.length - 1
    )
  }

  return (
    <div className="pt-20">
      <HeroSection
        title="Store & Product Gallery"
        subtitle="Take a visual tour of our Jammu showroom, inventory aisles, and high-performance equipment."
        backgroundImage="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=80"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Gallery', to: '/gallery' }
        ]}
      />

      {/* Demo Notice */}
      <section className="bg-amber-50 border-b border-amber-200 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2 text-xs sm:text-sm text-amber-900">
          <p className="flex items-center gap-1.5">
            <Sparkles size={16} className="text-amber-600 flex-shrink-0" />
            <span>
              <strong>Showcase Demonstration:</strong> Images displayed are curated stock photography. An implemented production store will feature high-definition photos of your exact shop showroom, shelves, and stockyard in Jammu.
            </span>
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Visual Portfolio"
            title="Explore Our Facility & Materials"
            subtitle="From commercial tools and safety equipment to heavy structural supplies and showroom displays."
          />

          {/* Filter Tabs - Mobile horizontal scrollable pill bar */}
          <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 mb-8 sm:mb-12">
            <div className="flex items-center sm:flex-wrap sm:justify-center gap-2 min-w-max sm:min-w-0">
              {galleryCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id)
                    setActiveImageIndex(null)
                  }}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap active:scale-95 ${
                    activeCategory === cat.id
                      ? 'bg-navy-900 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => openLightbox(index)}
                className="group relative h-64 sm:h-72 rounded-xl overflow-hidden bg-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-1">
                    {image.categoryLabel}
                  </span>
                  <h4 className="text-white font-bold text-base font-display">
                    {image.title}
                  </h4>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-white/90 font-medium">
                    <ZoomIn size={14} className="text-orange-400" /> Click to enlarge
                  </div>
                </div>

                {/* Corner Tag */}
                <div className="absolute top-3 right-3 bg-navy-900/70 backdrop-blur-sm text-white p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye size={14} />
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              No photos found under this category.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && filteredImages[activeImageIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X size={24} />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/70 sm:bg-white/10 sm:hover:bg-white/20 transition-colors z-50 active:scale-90"
            aria-label="Previous Image"
          >
            <ChevronLeft size={24} className="sm:w-7 sm:h-7" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/70 sm:bg-white/10 sm:hover:bg-white/20 transition-colors z-50 active:scale-90"
            aria-label="Next Image"
          >
            <ChevronRight size={24} className="sm:w-7 sm:h-7" />
          </button>

          {/* Lightbox Image Container */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center relative select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[activeImageIndex].url}
              alt={filteredImages[activeImageIndex].title}
              className="max-h-[75vh] w-auto max-w-full rounded-lg shadow-2xl object-contain border border-white/10"
            />
            <div className="mt-4 text-center text-white">
              <span className="text-xs uppercase tracking-wider text-orange-400 font-semibold">
                {filteredImages[activeImageIndex].categoryLabel}
              </span>
              <h3 className="text-lg font-bold font-display mt-0.5">
                {filteredImages[activeImageIndex].title}
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Image {activeImageIndex + 1} of {filteredImages.length} &bull; Press Left/Right keys to navigate, ESC to close
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

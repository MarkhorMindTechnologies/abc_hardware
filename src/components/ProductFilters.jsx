import React from 'react'
import { Search, X } from 'lucide-react'

export default function ProductFilters({ categories, selectedCategory, onCategoryChange, searchQuery, onSearchChange, resultCount }) {
  return (
    <div className="mb-8 space-y-4">
      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search products, brands..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-11 pr-10 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Category tabs - Mobile horizontal scrollable pill bar, desktop flex-wrap */}
      <div className="overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex items-center sm:flex-wrap sm:justify-center gap-2 min-w-max sm:min-w-0">
          <button
            onClick={() => onCategoryChange('all')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap active:scale-95 ${
              selectedCategory === 'all'
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Products
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap active:scale-95 ${
                selectedCategory === cat.id
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Result count + clear */}
      <div className="flex items-center justify-center gap-3 text-sm text-gray-500">
        <span>Showing <strong className="text-[#0d1b2e]">{resultCount}</strong> product{resultCount !== 1 ? 's' : ''}</span>
        {(selectedCategory !== 'all' || searchQuery) && (
          <button
            onClick={() => { onCategoryChange('all'); onSearchChange(''); }}
            className="text-orange-500 hover:text-orange-600 font-medium transition-colors"
          >
            Clear Filters
          </button>
        )}
      </div>
    </div>
  )
}

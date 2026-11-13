import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PackageSearch } from 'lucide-react'
import { products } from '../data/products'
import { categories } from '../data/categories'
import ProductCard from '../components/ProductCard'
import ProductFilters from '../components/ProductFilters'
import HeroSection from '../components/HeroSection'
import { filterProducts } from '../utils/helpers'

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'
  const initialSearch = searchParams.get('search') || ''

  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [searchQuery, setSearchQuery] = useState(initialSearch)

  const filtered = useMemo(
    () => filterProducts(products, { category: selectedCategory, search: searchQuery }),
    [selectedCategory, searchQuery]
  )

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat)
    const params = new URLSearchParams(searchParams)
    if (cat === 'all') params.delete('category')
    else params.set('category', cat)
    setSearchParams(params, { replace: true })
  }

  const handleSearchChange = (q) => {
    setSearchQuery(q)
    const params = new URLSearchParams(searchParams)
    if (!q.trim()) params.delete('search')
    else params.set('search', q)
    setSearchParams(params, { replace: true })
  }

  return (
    <>
      <HeroSection
        title="Product Catalogue"
        subtitle="Browse our comprehensive range of hardware, tools, and building materials."
        backgroundImage="https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=1600&q=90"
        height="h-[45vh]"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Products' },
        ]}
      />

      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <ProductFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            resultCount={filtered.length}
          />

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <PackageSearch size={64} className="text-gray-300 mx-auto mb-4" />
              <h3 className="font-display font-semibold text-[#0d1b2e] text-xl mb-2">No Products Found</h3>
              <p className="text-gray-500 text-sm mb-4">
                Try adjusting your search or filter criteria.
              </p>
              <button
                onClick={() => { handleCategoryChange('all'); handleSearchChange(''); }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

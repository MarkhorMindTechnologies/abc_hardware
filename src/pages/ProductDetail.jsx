import React, { useState, useMemo } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ChevronRight, CheckCircle, Clock, Phone, ArrowLeft, Tag, Info, Layers } from 'lucide-react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import EnquiryButton from '../components/EnquiryButton'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => p.id === id)
  const [mainImage, setMainImage] = useState(0)

  const related = useMemo(() => {
    if (!product) return []
    return products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
  }, [product])

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 pt-24">
        <h2 className="font-display font-bold text-3xl text-[#0d1b2e] mb-2">Product Not Found</h2>
        <p className="text-gray-500 mb-6">The product you are looking for does not exist or has been removed.</p>
        <button onClick={() => navigate('/products')} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2">
          <ArrowLeft size={18} /> Back to Products
        </button>
      </div>
    )
  }

  const images = product.images && product.images.length > 0 ? product.images : [product.image]

  return (
    <div className="pt-28 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-sm text-gray-500 mb-8 flex-wrap">
          <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/products" className="hover:text-orange-500 transition-colors">Products</Link>
          <ChevronRight size={14} />
          <Link to={`/products?category=${product.category}`} className="hover:text-orange-500 transition-colors">{product.categoryLabel}</Link>
          <ChevronRight size={14} />
          <span className="text-orange-500 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Images */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-100 mb-4">
              <img
                src={images[mainImage]}
                alt={product.name}
                className="w-full h-80 md:h-[420px] object-cover"
              />
            </div>
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMainImage(idx)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === mainImage ? 'border-orange-500 shadow-md' : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-orange-500 text-xs font-semibold uppercase tracking-wider">{product.categoryLabel}</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-400 text-xs">Brand: <strong className="text-gray-600">{product.brand}</strong></span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-[#0d1b2e] font-display mb-4">{product.name}</h1>

            {/* Availability */}
            <div className="mb-4">
              {product.availability === 'available' ? (
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 bg-green-100 px-3 py-1.5 rounded-full">
                  <CheckCircle size={16} /> Available
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-700 bg-orange-100 px-3 py-1.5 rounded-full">
                  <Clock size={16} /> Contact to Confirm Availability
                </span>
              )}
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">{product.fullDescription || product.description}</p>

            {/* No Price Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800 text-sm flex items-start gap-2">
                <Info size={16} className="flex-shrink-0 mt-0.5" />
                Prices are not displayed on this demo. Contact us for the latest quotation and availability.
              </p>
            </div>

            {/* Actions - Full width touch targets on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <EnquiryButton productName={product.name} variant="large" className="w-full sm:w-auto justify-center" />
              <a
                href="tel:+91XXXXXXXXXX"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-[#0d1b2e] text-[#0d1b2e] hover:bg-[#0d1b2e] hover:text-white font-semibold px-6 sm:px-8 py-3.5 rounded-lg transition-all text-sm sm:text-base active:scale-95"
              >
                <Phone size={18} /> Call to Enquire
              </a>
            </div>

            {/* Specifications */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div className="mb-6">
                <h3 className="font-display font-semibold text-[#0d1b2e] text-lg mb-3 flex items-center gap-2">
                  <Layers size={18} className="text-orange-500" /> Specifications
                </h3>
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, val]) => (
                      <tr key={key} className="border-b border-gray-100">
                        <td className="py-2.5 pr-4 text-gray-500 font-medium w-40">{key}</td>
                        <td className="py-2.5 text-gray-800">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Applications */}
            {product.applications && product.applications.length > 0 && (
              <div>
                <h3 className="font-display font-semibold text-[#0d1b2e] text-lg mb-3 flex items-center gap-2">
                  <Tag size={18} className="text-orange-500" /> Applications &amp; Uses
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.applications.map(app => (
                    <li key={app} className="flex items-center gap-2 text-gray-600 text-sm">
                      <CheckCircle size={14} className="text-green-500 flex-shrink-0" /> {app}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-[#0d1b2e] font-display mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map(p => (
                <ProductCard key={p.id} product={p} compact />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

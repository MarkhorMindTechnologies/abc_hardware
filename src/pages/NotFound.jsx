import React from 'react'
import { Link } from 'react-router-dom'
import { Wrench, Home, Package, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="pt-28 pb-20 min-h-[75vh] flex items-center justify-center px-4 bg-gray-50">
      <div className="max-w-md w-full text-center bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-xl">
        <div className="w-20 h-20 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
          <Wrench size={38} className="rotate-45" />
        </div>

        <h1 className="text-6xl font-extrabold font-display text-navy-900 tracking-tight">
          404
        </h1>
        <h2 className="text-xl font-bold font-display text-navy-800 mt-2">
          Page or Tool Missing
        </h2>
        <p className="text-gray-500 text-sm mt-3 leading-relaxed">
          The hardware item or page you are looking for has been moved, renamed, or is currently out of catalogue.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="btn-primary justify-center text-sm"
          >
            <Home size={16} /> Return Home
          </Link>
          <Link
            to="/products"
            className="btn-outline justify-center text-sm"
          >
            <Package size={16} /> Browse Catalogue
          </Link>
        </div>
      </div>
    </div>
  )
}

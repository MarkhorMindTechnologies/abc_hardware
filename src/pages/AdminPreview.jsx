import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { categories } from '../data/categories'
import { brands } from '../data/brands'
import {
  LayoutDashboard,
  Package,
  Layers,
  Award,
  Image as ImageIcon,
  FileText,
  Inbox,
  Search,
  Plus,
  Eye,
  Edit,
  Trash2,
  TrendingUp,
  Users,
  CheckCircle,
  Clock,
  ExternalLink,
  ShieldAlert,
  Save,
  MessageCircle,
  Filter,
  Check,
  RefreshCw
} from 'lucide-react'

export default function AdminPreview() {
  const [activeTab, setActiveTab] = useState('products')
  const [searchTerm, setSearchTerm] = useState('')
  const [enquiryFilter, setEnquiryFilter] = useState('all')
  const [showToast, setShowToast] = useState(false)
  const [toastMsg, setToastMsg] = useState('')

  const triggerToast = (msg) => {
    setToastMsg(msg)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  // Sample Enquiries Data
  const [enquiries, setEnquiries] = useState([
    {
      id: 'ENQ-8901',
      name: 'Rakesh Sharma (Sharma Constructions)',
      phone: '+91 94191 XXXXX',
      subject: 'Bulk TMT Steel & GI Sheets',
      date: 'Today, 10:45 AM',
      status: 'new',
      message: 'Need 12 tons of 12mm TMT Fe-500D steel bars for site at Gandhi Nagar, Jammu. Please share bulk trade pricing.'
    },
    {
      id: 'ENQ-8902',
      name: 'Vikas Gupta (Contractor)',
      phone: '+91 97960 XXXXX',
      subject: 'Modular Switchboards & Wire Bundles',
      date: 'Yesterday, 4:12 PM',
      status: 'in-progress',
      message: 'Looking for 30 Havells 12-way distribution boxes and 25 coils of 1.5 sq mm copper wire. Deliverable by Saturday?'
    },
    {
      id: 'ENQ-8903',
      name: 'Arun Verma',
      phone: '+91 94192 XXXXX',
      subject: 'Single Lever Basin Mixers',
      date: '12 Nov 2026',
      status: 'completed',
      message: 'Interested in Hindware ceramic fittings for a new duplex home in Channi Himmat.'
    },
    {
      id: 'ENQ-8904',
      name: 'Manzoor Ahmed (Valley Plumbing Works)',
      phone: '+91 99060 XXXXX',
      subject: 'CPVC Pipes & Brass Ball Valves',
      date: '11 Nov 2026',
      status: 'new',
      message: 'Require lot of 25mm Astral pipes and Zoloto brass valves. Can we arrange billing via GST account?'
    }
  ])

  // Sample Content Management State
  const [contentForm, setContentForm] = useState({
    storeName: 'ABC Hardware House',
    tagline: 'Everything You Need to Build Better.',
    heroHeadline: 'Your Trusted Partner for Hardware & Building Materials',
    phone: '+91 XXXXX XXXXX',
    whatsapp: '+91 XXXXX XXXXX',
    email: 'info@abchardwarehouse.com',
    address: 'Main Market / Industrial Corridor, Jammu, J&K'
  })

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredEnquiries =
    enquiryFilter === 'all'
      ? enquiries
      : enquiries.filter((e) => e.status === enquiryFilter)

  return (
    <div className="pt-20 min-h-screen bg-slate-900 text-slate-100">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in border border-emerald-400">
          <Check size={18} />
          <span className="text-sm font-semibold">{toastMsg}</span>
        </div>
      )}

      {/* Header Banner - Explaining Demo Scope */}
      <div className="bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 border-b border-slate-800 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="bg-orange-500 text-white font-bold text-xs uppercase px-2.5 py-0.5 rounded tracking-wider">
                Interactive Concept
              </span>
              <span className="text-xs text-slate-400">
                Markhormind Technologies Client Demo
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Hardware Store Owner Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              This preview illustrates how store owners can manage inventory, product catalogue, brand partners, and WhatsApp incoming enquiries through a single interface.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/products"
              className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink size={14} /> View Live Storefront
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-5">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-medium uppercase tracking-wider">Catalogued Products</span>
              <Package size={18} className="text-orange-400" />
            </div>
            <p className="text-2xl font-bold font-display text-white">{products.length}</p>
            <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
              <TrendingUp size={12} /> 10 Active Categories
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-5">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-medium uppercase tracking-wider">Customer Enquiries</span>
              <Inbox size={18} className="text-sky-400" />
            </div>
            <p className="text-2xl font-bold font-display text-white">{enquiries.length}</p>
            <p className="text-[11px] text-orange-400 mt-1 flex items-center gap-1">
              <Clock size={12} /> 2 Require Action Today
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-5">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-medium uppercase tracking-wider">Partner Brands</span>
              <Award size={18} className="text-amber-400" />
            </div>
            <p className="text-2xl font-bold font-display text-white">{brands.length}</p>
            <p className="text-[11px] text-slate-400 mt-1">Configurable logos &amp; tiers</p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-5">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-medium uppercase tracking-wider">WhatsApp Leads</span>
              <MessageCircle size={18} className="text-emerald-400" />
            </div>
            <p className="text-2xl font-bold font-display text-white">42</p>
            <p className="text-[11px] text-emerald-400 mt-1">Dynamic product links active</p>
          </div>
        </div>

        {/* Dashboard Navigation Tabs - Edge-to-edge scroll on mobile */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-slate-800 text-sm -mx-4 px-4 sm:mx-0 sm:px-0">
          {[
            { id: 'products', label: 'Product Catalogue', icon: Package },
            { id: 'categories', label: 'Categories', icon: Layers },
            { id: 'brands', label: 'Brands & Logos', icon: Award },
            { id: 'enquiries', label: 'Customer Enquiries', icon: Inbox, badge: '2' },
            { id: 'content', label: 'Storefront Content', icon: FileText }
          ].map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-xs transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
                }`}
              >
                <Icon size={15} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive ? 'bg-white text-orange-600' : 'bg-orange-500 text-white'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* ================= TAB 1: PRODUCT MANAGEMENT ================= */}
        {activeTab === 'products' && (
          <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  placeholder="Filter sample items by name, category, or brand..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => triggerToast('Demo: "Add Product" modal would open here to enter specifications and upload photos.')}
                  className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-md"
                >
                  <Plus size={15} /> Add New Product
                </button>
              </div>
            </div>

            {/* Products Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-700">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900/90 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-700">
                  <tr>
                    <th className="py-3 px-4">Item &amp; Image</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Brand</th>
                    <th className="py-3 px-4">Catalogue Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/60">
                  {filteredProducts.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-700/30 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-10 h-10 rounded-lg object-cover bg-slate-700 flex-shrink-0"
                          />
                          <div>
                            <p className="font-semibold text-slate-200 line-clamp-1">{p.name}</p>
                            <p className="text-[11px] text-slate-400 font-mono">ID: {p.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-slate-300 font-medium">
                        {p.categoryLabel}
                      </td>
                      <td className="py-3 px-4 text-slate-300">
                        {p.brand}
                      </td>
                      <td className="py-3 px-4">
                        {p.availability === 'available' ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            <CheckCircle size={11} /> Stock Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            <Clock size={11} /> Enquiry Only
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <Link
                            to={`/products/${p.id}`}
                            className="p-1.5 bg-slate-700 hover:bg-slate-600 rounded text-slate-300 hover:text-white transition-colors"
                            title="View on Storefront"
                          >
                            <Eye size={13} />
                          </Link>
                          <button
                            onClick={() => triggerToast(`Demo: Editing form for ${p.name}`)}
                            className="p-1.5 bg-slate-700 hover:bg-slate-600 rounded text-slate-300 hover:text-white transition-colors"
                            title="Edit Product"
                          >
                            <Edit size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
              <p>Showing {filteredProducts.length} demo hardware products.</p>
              <p>In full production: bulk CSV upload, automated image compression, and barcode tracking are included.</p>
            </div>
          </div>
        )}

        {/* ================= TAB 2: CATEGORY MANAGEMENT ================= */}
        {activeTab === 'categories' && (
          <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold font-display text-white">Store Product Categories</h3>
                <p className="text-xs text-slate-400 mt-0.5">Manage which product sectors display on the public storefront.</p>
              </div>
              <button
                onClick={() => triggerToast('Demo: "Add Category" modal would create new department.')}
                className="btn-primary text-xs py-2 px-3"
              >
                <Plus size={14} /> New Category
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((c) => (
                <div
                  key={c.id}
                  className="bg-slate-900 border border-slate-700 rounded-xl p-4 flex items-center justify-between hover:border-slate-600 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={c.image}
                      alt={c.label}
                      className="w-12 h-12 rounded-lg object-cover bg-slate-800"
                    />
                    <div>
                      <h4 className="font-bold text-slate-200 text-sm">{c.label}</h4>
                      <p className="text-xs text-orange-400 font-semibold">{c.count}+ catalogued items</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => triggerToast(`Demo: Edit category ${c.label}`)}
                      className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
                    >
                      <Edit size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 3: BRAND MANAGEMENT ================= */}
        {activeTab === 'brands' && (
          <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold font-display text-white">Manufacturer &amp; Brand Partners</h3>
                <p className="text-xs text-slate-400 mt-0.5">Showcase verified OEM suppliers to build trade customer trust.</p>
              </div>
              <button
                onClick={() => triggerToast('Demo: Add brand partnership logo modal.')}
                className="btn-primary text-xs py-2 px-3"
              >
                <Plus size={14} /> Register New Brand
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {brands.map((b) => (
                <div
                  key={b.id}
                  className="bg-slate-900 border border-slate-700 rounded-xl p-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 font-bold flex items-center justify-center text-xs">
                        {b.name.charAt(0)}
                      </span>
                      <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                        {b.category}
                      </span>
                    </div>
                    <h4 className="font-bold text-white text-sm">{b.name}</h4>
                    <p className="text-slate-400 text-xs mt-1 line-clamp-2">{b.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center text-[11px] text-slate-500">
                    <span>Est. {b.founded || 'Historic'}</span>
                    <button
                      onClick={() => triggerToast(`Demo: Modifying brand listing for ${b.name}`)}
                      className="text-orange-400 hover:text-orange-300 font-semibold"
                    >
                      Edit Entry
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 4: ENQUIRIES INBOX ================= */}
        {activeTab === 'enquiries' && (
          <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-bold font-display text-white">Direct Quotation &amp; Bulk Enquiries</h3>
                <p className="text-xs text-slate-400 mt-0.5">Customer leads captured through the website contact form and WhatsApp click-throughs.</p>
              </div>

              {/* Status Filters */}
              <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-lg border border-slate-700 text-xs">
                {['all', 'new', 'in-progress', 'completed'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setEnquiryFilter(st)}
                    className={`px-3 py-1 rounded font-medium capitalize transition-all ${
                      enquiryFilter === st
                        ? 'bg-orange-500 text-white font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {st === 'all' ? 'All Leads' : st}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {filteredEnquiries.map((enq) => (
                <div
                  key={enq.id}
                  className="bg-slate-900 border border-slate-700/80 rounded-xl p-5 hover:border-slate-600 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-orange-400 font-semibold">
                        {enq.id}
                      </span>
                      <h4 className="font-bold text-white text-sm">
                        {enq.name}
                      </h4>
                      <span className="text-xs text-slate-400">({enq.phone})</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock size={12} /> {enq.date}
                      </span>
                      {enq.status === 'new' && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-500/20 text-sky-400 border border-sky-500/30">
                          NEW LEAD
                        </span>
                      )}
                      {enq.status === 'in-progress' && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                          QUOTED
                        </span>
                      )}
                      {enq.status === 'completed' && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          ORDER DISPATCHED
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-slate-300 mb-1">
                    Subject: {enq.subject}
                  </p>
                  <p className="text-xs text-slate-400 bg-slate-800/80 p-3 rounded-lg border border-slate-700/50 mb-3 leading-relaxed">
                    "{enq.message}"
                  </p>

                  <div className="flex items-center justify-end gap-2 text-xs">
                    <button
                      onClick={() => triggerToast(`Demo: Opening WhatsApp chat with ${enq.name}`)}
                      className="px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <MessageCircle size={13} /> Reply on WhatsApp
                    </button>
                    <button
                      onClick={() => triggerToast(`Demo: Marked ${enq.id} as fulfilled.`)}
                      className="px-3 py-1.5 rounded bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors"
                    >
                      Mark Resolved
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 5: WEBSITE CONTENT CMS ================= */}
        {activeTab === 'content' && (
          <div className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold font-display text-white">Storefront Configuration</h3>
                <p className="text-xs text-slate-400 mt-0.5">Change business phone numbers, hero text, and store timings without writing code.</p>
              </div>
              <button
                onClick={() => triggerToast('Demo: Content changes simulated and saved successfully!')}
                className="btn-primary text-xs py-2 px-3 flex items-center gap-1.5"
              >
                <Save size={14} /> Save Configuration
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="space-y-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Business Name</label>
                  <input
                    type="text"
                    value={contentForm.storeName}
                    onChange={(e) => setContentForm({ ...contentForm, storeName: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Brand Tagline</label>
                  <input
                    type="text"
                    value={contentForm.tagline}
                    onChange={(e) => setContentForm({ ...contentForm, tagline: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Homepage Main Heading</label>
                  <input
                    type="text"
                    value={contentForm.heroHeadline}
                    onChange={(e) => setContentForm({ ...contentForm, heroHeadline: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Official WhatsApp Phone Number</label>
                  <input
                    type="text"
                    value={contentForm.whatsapp}
                    onChange={(e) => setContentForm({ ...contentForm, whatsapp: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Contact Email</label>
                  <input
                    type="email"
                    value={contentForm.email}
                    onChange={(e) => setContentForm({ ...contentForm, email: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Physical Store Address</label>
                  <input
                    type="text"
                    value={contentForm.address}
                    onChange={(e) => setContentForm({ ...contentForm, address: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700 flex justify-end">
              <button
                onClick={() => triggerToast('Demo: Live preview refreshed!')}
                className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 font-semibold text-xs flex items-center gap-1.5 transition-colors"
              >
                <RefreshCw size={13} /> Test Preview Sync
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

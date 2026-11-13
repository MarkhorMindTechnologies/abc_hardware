import React, { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: 'Product Enquiry', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    else if (!/^[0-9+\-\s()]{7,15}$/.test(form.phone.trim())) e.phone = 'Enter a valid phone number'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length > 0) {
      setErrors(e2)
      return
    }
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
    }, 1500)
  }

  const handleReset = () => {
    setForm({ name: '', phone: '', email: '', subject: 'Product Enquiry', message: '' })
    setErrors({})
    setStatus('idle')
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className="font-display font-semibold text-green-800 text-xl mb-2">Message Received!</h3>
        <p className="text-green-700 text-sm mb-2">Thank you for reaching out, {form.name}.</p>
        <div className="bg-green-100 rounded-lg p-4 mt-4">
          <p className="text-green-800 text-xs font-medium">
            This is a demo form. In the live version, your message will be sent directly to the shop owner via email and dashboard notification.
          </p>
        </div>
        <button
          onClick={handleReset}
          className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  const inputClass = (field) =>
    `w-full border ${errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-300'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm`

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your full name"
          className={inputClass('name')}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.name}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+91 XXXXX XXXXX"
          className={inputClass('phone')}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.phone}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com (optional)"
          className={inputClass('email')}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.email}</p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm bg-white"
        >
          <option>Product Enquiry</option>
          <option>Bulk Order</option>
          <option>General Enquiry</option>
          <option>Others</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Describe your requirement..."
          className={inputClass('message')}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send size={18} /> Send Message
          </>
        )}
      </button>

      <p className="text-gray-400 text-xs text-center">
        This is a demo form. No data is actually submitted.
      </p>
    </form>
  )
}

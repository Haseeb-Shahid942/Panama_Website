"use client";

import { useState } from 'react'
import axios from 'axios'
import { trackLead } from '@/utils/facebookPixel'

export default function InquiryForm({ title = 'Inquiry Form', context = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    description: '',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const data = {
        ...formData,
        description: context ? `${context}: ${formData.description}` : formData.description,
      }

      const response = await axios.post('/api/mail/inquiry', data)

      if (response.data.success) {
        // Track lead event
        trackLead({
          destination: context || 'General Inquiry',
          type: 'destination_inquiry',
          estimatedValue: 800, // Average destination package value
        });
        
        setMessage('✅ Inquiry submitted successfully!')
        alert('✅ Inquiry submitted successfully!')
        setFormData({
          name: '',
          email: '',
          phone: '',
          checkIn: '',
          checkOut: '',
          guests: 1,
          description: '',
        })
      } else {
        setMessage('❌ ' + (response.data.message || 'Failed to submit inquiry. Please try again.'))
      }
    } catch (error) {
      console.error('Error submitting inquiry:', error)
      const errorMsg = error.response?.data?.message || error.message || 'Failed to submit inquiry. Please try again.'
      setMessage('❌ ' + errorMsg)
      alert('❌ ' + errorMsg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-lg p-6 md:p-8 flex flex-col gap-4 border border-gray-100"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>

      <div>
        <label className="block text-sm font-medium mb-1">Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded border-gray-300 border-2 p-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full rounded border-gray-300 border-2 p-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Phone *</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full rounded border-gray-300 border-2 p-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex gap-2">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Check In</label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className="w-full rounded border-gray-300 border-2 p-2"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Check Out</label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className="w-full rounded border-gray-300 border-2 p-2"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Guests</label>
        <input
          type="number"
          name="guests"
          min="1"
          value={formData.guests}
          onChange={handleChange}
          className="w-full rounded border-gray-300 border-2 p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full rounded border-gray-300 border-2 p-2"
          rows={3}
          placeholder="Tell us about your travel plans..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-2 bg-blue-600 text-white border-2 font-semibold rounded-lg p-2 py-1 hover:bg-blue-700 transition disabled:opacity-50"
      >
        {loading ? 'Submitting...' : 'Submit Inquiry'}
      </button>

      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  )
}

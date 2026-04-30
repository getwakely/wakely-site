import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { supabase } from '../lib/supabase'

export default function Feedback() {
  const [form, setForm] = useState({ name: '', email: '', feedback: '' })
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.email.trim() || !form.feedback.trim()) return

    setStatus('loading')
    setErrorMessage('')

    if (!supabase) {
      setStatus('error')
      setErrorMessage('Service is temporarily unavailable. Please try again later or email us directly at wakelydev@getwakely.com.')
      return
    }

    const { error } = await supabase.from('feedback').insert({
      name: form.name.trim() || null,
      email: form.email.trim().toLowerCase(),
      feedback: form.feedback.trim(),
    })

    if (error) {
      console.error('Feedback submission failed:', error)
      setStatus('error')
      setErrorMessage(
        error.message?.includes('relation') || error.code === '42P01'
          ? 'Our feedback system is being set up. Please email us directly at wakelydev@getwakely.com.'
          : 'Something went wrong. Please try again, or email us at wakelydev@getwakely.com.'
      )
      return
    }

    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center px-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h1 className="text-3xl font-display font-bold text-wakely-dark mb-3">Thank You!</h1>
          <p className="text-wakely-gray mb-8">Your feedback has been sent and is very important to us. We review every submission to help make Wakely better.</p>
          <Link to="/" className="text-wakely-blue hover:text-wakely-blue-dark font-medium transition-colors">Back to Home</Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg mx-auto px-6"
      >
        <Link to="/" className="text-wakely-blue hover:text-wakely-blue-dark text-sm font-medium mb-8 inline-flex items-center gap-1 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Home
        </Link>

        <h1 className="text-4xl font-display font-bold text-wakely-dark tracking-tight mt-6 mb-2">Send Us Your Feedback</h1>
        <p className="text-wakely-gray mb-8">We'd love to hear your thoughts about Wakely. Your feedback helps us improve.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name (optional)"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            disabled={status === 'loading'}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-wakely-dark placeholder:text-wakely-light-gray focus:outline-none focus:ring-2 focus:ring-wakely-blue/30 focus:border-wakely-blue transition-all"
          />
          <input
            type="email"
            required
            placeholder="Email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            disabled={status === 'loading'}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-wakely-dark placeholder:text-wakely-light-gray focus:outline-none focus:ring-2 focus:ring-wakely-blue/30 focus:border-wakely-blue transition-all"
          />
          <textarea
            required
            placeholder="Your feedback"
            rows={6}
            value={form.feedback}
            onChange={e => setForm({ ...form, feedback: e.target.value })}
            disabled={status === 'loading'}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-wakely-dark placeholder:text-wakely-light-gray focus:outline-none focus:ring-2 focus:ring-wakely-blue/30 focus:border-wakely-blue transition-all resize-none"
          />
          {status === 'error' && (
            <p className="text-red-500 text-sm">{errorMessage || 'Something went wrong. Please try again.'}</p>
          )}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-wakely-blue hover:bg-wakely-blue-dark disabled:opacity-60 text-white font-semibold py-3.5 rounded-full transition-all hover:-translate-y-px hover:shadow-lg hover:shadow-wakely-blue/20"
          >
            {status === 'loading' ? 'Sending...' : 'Send Feedback'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

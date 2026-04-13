import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import { supabase, getWaitlistCount } from '../lib/supabase'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | duplicate | error
  const [waitlistCount, setWaitlistCount] = useState(0)

  useEffect(() => {
    getWaitlistCount().then(setWaitlistCount)
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('loading')

    if (!supabase) {
      setStatus('error')
      return
    }

    const { error } = await supabase.from('waitlist').insert({ email: email.trim().toLowerCase() })

    if (error) {
      if (error.code === '23505') {
        setStatus('duplicate')
      } else {
        setStatus('error')
      }
      return
    }

    setStatus('success')
    setWaitlistCount((c) => c + 1)
  }

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <section className="px-6 max-w-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-wakely-dark tracking-tight">
            Be First to Wake Up Informed.
          </h1>
          <p className="mt-4 text-lg text-wakely-gray">
            Beta is almost here. Get early access.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {status === 'success' ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8">
              <p className="text-2xl mb-2">🎉</p>
              <h2 className="text-xl font-display font-bold text-emerald-800">
                You're on the list.
              </h2>
              <p className="mt-2 text-emerald-700">
                We'll be in touch. Get ready for better mornings.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-4 rounded-full border border-gray-200 bg-white text-wakely-dark placeholder:text-wakely-light-gray focus:outline-none focus:ring-2 focus:ring-wakely-blue/30 focus:border-wakely-blue transition-all text-base"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-wakely-blue hover:bg-wakely-blue-dark disabled:opacity-60 text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-px hover:shadow-lg hover:shadow-wakely-blue/20 whitespace-nowrap"
              >
                {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
          )}

          {status === 'duplicate' && (
            <p className="mt-4 text-sm text-amber-600 font-medium">
              You're already on the list! We'll be in touch soon.
            </p>
          )}

          {status === 'error' && (
            <p className="mt-4 text-sm text-red-500 font-medium">
              Something went wrong. Please try again.
            </p>
          )}
        </motion.div>

        {/* Waitlist count */}
        <ScrollReveal>
          <div className="mt-12">
            {waitlistCount > 0 ? (
              <p className="text-wakely-gray text-sm">
                Join <span className="font-semibold text-wakely-dark">{waitlistCount.toLocaleString()}</span> others already waiting
              </p>
            ) : (
              <p className="text-wakely-gray text-sm">
                Be one of the first to join.
              </p>
            )}
          </div>
        </ScrollReveal>

        {/* Trust signals */}
        <ScrollReveal>
          <p className="mt-8 text-xs text-wakely-light-gray">
            By signing up, you agree to our Terms of Service and Privacy Policy. No commitment. Cancel anytime.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            {[
              { icon: '🔒', label: 'No spam, ever' },
              { icon: '⚡', label: 'Early access' },
              { icon: '🎁', label: 'Free to start' },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-2xl mb-1">{item.icon}</p>
                <p className="text-xs text-wakely-gray font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}

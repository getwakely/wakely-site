import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const APP_STORE_URL = 'https://apps.apple.com/app/id6755365728'

const premiumPerks = [
  'Fully personalized morning briefing',
  'Unlimited categories & interests',
  'Wake-up call that reads your briefing aloud',
  'Multiple voices & adjustable reading speed',
  'Weather, commute, calendar & more',
  'Ad-free experience',
]

export default function Pricing() {
  return (
    <div className="pt-24 pb-16">
      <section className="px-6 text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-wakely-dark tracking-tight">
            Simple, honest pricing
          </h1>
          <p className="mt-4 text-lg text-wakely-dark/55">
            Start with a free trial, then subscribe weekly, monthly, or yearly.
            Current pricing is always shown in the App Store.
          </p>
        </motion.div>
      </section>

      <section className="px-6 max-w-md mx-auto mb-16">
        <ScrollReveal>
          <div className="rounded-2xl p-8 bg-wakely-dark text-white ring-2 ring-wakely-blue shadow-xl">
            <h3 className="text-lg font-semibold font-display text-white text-center">
              Wakely Premium
            </h3>
            <p className="mt-2 text-sm text-white/60 text-center">
              A free trial to start, then choose the plan that fits you.
            </p>

            <ul className="mt-6 space-y-3">
              {premiumPerks.map((perk, j) => (
                <li key={j} className="flex items-start gap-2.5 text-sm">
                  <svg className="w-4 h-4 mt-0.5 shrink-0 text-wakely-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80">{perk}</span>
                </li>
              ))}
            </ul>

            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block text-center font-semibold py-3 rounded-full transition-colors bg-wakely-blue hover:bg-wakely-blue-dark text-white"
            >
              See pricing on the App Store
            </a>
            <p className="mt-4 text-xs text-white/40 text-center">
              Manage or cancel anytime in your App Store subscriptions.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* FAQ link */}
      <section className="px-6 text-center">
        <ScrollReveal>
          <p className="text-wakely-dark/40 text-sm">
            Have questions?{' '}
            <Link to="/faq" className="text-wakely-blue hover:text-wakely-blue-dark font-medium transition-colors">
              Check our FAQ
            </Link>
          </p>
        </ScrollReveal>
      </section>
    </div>
  )
}

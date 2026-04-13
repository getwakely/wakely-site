import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

{/* PLACEHOLDER — all pricing is placeholder, final numbers TBD */}
const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    desc: 'Get started with your morning briefing.',
    features: [
      'Daily morning briefing',
      'Top 5 stories',
      'Basic personalization',
      'Email delivery',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$5', /* PLACEHOLDER */
    period: '/month',
    desc: 'The full Wakely experience, tailored to you.',
    features: [
      'Everything in Free',
      'Fully personalized feed',
      'Unlimited sources',
      'Audio briefings',
      'Priority early access',
      'Ad-free experience',
    ],
    cta: 'Join Waitlist',
    featured: true,
  },
]

export default function Pricing() {
  return (
    <div className="pt-24 pb-16">
      <section className="px-6 text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-wakely-dark tracking-tight">
            Simple, honest pricing
          </h1>
          <p className="mt-4 text-lg text-wakely-dark/55">
            Start free. Upgrade when you're ready.
          </p>
        </motion.div>
      </section>

      <section className="px-6 max-w-3xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {tiers.map((tier, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div
                className={`rounded-2xl p-8 h-full flex flex-col ${
                  tier.featured
                    ? 'bg-wakely-dark text-white ring-2 ring-wakely-blue shadow-xl'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <h3 className={`text-lg font-semibold font-display ${tier.featured ? 'text-white' : 'text-wakely-dark'}`}>
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className={`text-4xl font-bold font-display ${tier.featured ? 'text-white' : 'text-wakely-dark'}`}>
                    {tier.price}
                  </span>
                  <span className={`text-sm ${tier.featured ? 'text-white/50' : 'text-wakely-dark/40'}`}>
                    {tier.period}
                  </span>
                </div>
                <p className={`mt-2 text-sm ${tier.featured ? 'text-white/60' : 'text-wakely-dark/50'}`}>
                  {tier.desc}
                </p>

                <ul className="mt-6 space-y-3 flex-1">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm">
                      <svg className={`w-4 h-4 mt-0.5 shrink-0 ${tier.featured ? 'text-wakely-blue' : 'text-wakely-blue'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={tier.featured ? 'text-white/80' : 'text-wakely-dark/65'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/waitlist"
                  className={`mt-8 block text-center font-semibold py-3 rounded-full transition-colors ${
                    tier.featured
                      ? 'bg-wakely-blue hover:bg-wakely-blue-dark text-white'
                      : 'bg-wakely-dark/5 hover:bg-wakely-dark/10 text-wakely-dark'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
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

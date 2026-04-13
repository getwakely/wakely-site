import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const steps = [
  {
    num: '01',
    title: 'Tell us what you care about',
    desc: 'Pick your topics, sources, and interests. Wakely tailors everything to what matters to you.',
  },
  {
    num: '02',
    title: 'Wake up to your briefing',
    desc: 'Every morning, a fresh briefing is waiting — curated overnight, ready before your alarm.',
  },
  {
    num: '03',
    title: 'Start your day ahead',
    desc: 'In just a few minutes, you\'re caught up. No feeds, no rabbit holes — just clarity.',
  },
]

const features = [
  {
    title: 'Personalized to you',
    desc: 'Your briefing adapts to your interests over time. The more you use Wakely, the smarter it gets.',
    icon: '🎯',
  },
  {
    title: 'No doom scrolling',
    desc: 'A calm, focused format designed to inform — not to trap you in an endless feed.',
    icon: '🛡️',
  },
  {
    title: 'Ready when you wake up',
    desc: 'Your briefing is prepared overnight so it\'s waiting the moment you open your eyes.',
    icon: '⏰',
  },
  {
    title: 'Curated sources',
    desc: 'We pull from trusted outlets and filter out the noise, so every story earns its place.',
    icon: '📰',
  },
  {
    title: 'Audio option',
    desc: 'Prefer to listen? Get your briefing read aloud while you get ready for the day.', /* PLACEHOLDER */
    icon: '🎧',
  },
  {
    title: 'Daily consistency',
    desc: 'Build a morning ritual that sticks. Same time, same place, always something new.',
    icon: '📅',
  },
]

export default function Features() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="px-6 text-center max-w-3xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-wakely-dark tracking-tight">
            How Wakely Works
          </h1>
          <p className="mt-4 text-lg text-wakely-gray leading-relaxed">
            Three simple steps to a better morning routine.
          </p>
        </motion.div>
      </section>

      {/* How It Works — 3 steps */}
      <section className="px-6 max-w-4xl mx-auto mb-28">
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-md transition-all duration-300">
                <span className="text-sm font-bold text-wakely-blue font-display">
                  {step.num}
                </span>
                <h3 className="text-xl font-display font-bold text-wakely-dark mt-3 mb-2">
                  {step.title}
                </h3>
                <p className="text-wakely-gray leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Feature Grid */}
      <section className="px-6 max-w-5xl mx-auto mb-20">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center text-wakely-dark mb-4">
            Everything you need
          </h2>
          <p className="text-center text-wakely-gray mb-14 text-lg">
            Built for people who take their mornings seriously.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-7 h-full border border-gray-200 hover:border-wakely-blue/30 hover:shadow-md hover:shadow-wakely-blue/5 transition-all duration-300">
                <span className="text-3xl">{feature.icon}</span>
                <h3 className="text-lg font-display font-bold text-wakely-dark mt-4 mb-2">
                  {feature.title}
                </h3>
                <p className="text-wakely-gray text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 text-center py-16 bg-white">
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-wakely-dark">
            Ready to try it?
          </h2>
          <p className="mt-3 text-wakely-gray mb-8">
            Join the waitlist and be first in line.
          </p>
          <Link
            to="/waitlist"
            className="inline-flex items-center bg-wakely-blue text-white font-semibold px-8 py-4 rounded-full transition-all hover:bg-wakely-blue-dark hover:-translate-y-px hover:shadow-lg hover:shadow-wakely-blue/20"
          >
            Join the Waitlist
          </Link>
        </ScrollReveal>
      </section>
    </div>
  )
}

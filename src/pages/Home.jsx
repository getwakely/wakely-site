import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import HeroAnimation from '../components/HeroAnimation'
import { getWaitlistCount } from '../lib/supabase'

import logoImg from '../assets/logo.png'

export default function Home() {
  const [waitlistCount, setWaitlistCount] = useState(0)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    getWaitlistCount().then(setWaitlistCount)
  }, [])

  // Auto-cycle features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      title: 'Personalized Briefings',
      desc: 'AI curates news, weather, sports, and insights based on your interests. No two briefings are alike.',
      icon: '🎯',
    },
    {
      title: 'Ready When You Wake',
      desc: 'Your briefing is generated overnight and plays automatically with your alarm. No scrolling required.',
      icon: '⏰',
    },
    {
      title: 'Listen, Don\'t Scroll',
      desc: 'Audio-first design lets you get informed while getting ready. Replace doom scrolling with calm mornings.',
      icon: '🎧',
    },
    {
      title: 'Smart & Adaptive',
      desc: 'Wakely learns what you care about and gets better every day. Tell it what matters, skip what doesn\'t.',
      icon: '🧠',
    },
  ]

  return (
    <div>
      {/* ───── HERO WITH ANIMATION ───── */}
      <HeroAnimation showStars={true}>
        {(visible) => (
          <div className={`px-6 pt-20 ${visible ? '' : 'invisible'}`}>
            <div className="max-w-3xl mx-auto w-full flex flex-col items-center text-center">
              {/* Logo — appears when sky brightens */}
              <motion.img
                src={logoImg}
                alt="Wakely"
                className="w-24 h-24 md:w-32 md:h-32 rounded-3xl shadow-lg mb-6"
                animate={{
                  opacity: visible ? 1 : 0,
                  scale: visible ? 1 : 0.85,
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                onError={(e) => { e.target.style.display = 'none' }}
              />

              {/* "Wakely" title */}
              <motion.h1
                className="text-6xl sm:text-7xl md:text-8xl font-display font-bold text-wakely-dark leading-[1.05] tracking-tight"
                animate={{
                  opacity: visible ? 1 : 0,
                  y: visible ? 0 : 15,
                }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              >
                Wakely
              </motion.h1>

              {/* Tagline */}
              <motion.p
                className="mt-4 text-xl md:text-2xl text-wakely-gray font-medium"
                animate={{
                  opacity: visible ? 1 : 0,
                  y: visible ? 0 : 10,
                }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              >
                Your Morning Assistant
              </motion.p>

              {/* Description */}
              <motion.p
                className="mt-5 text-lg text-wakely-gray leading-relaxed max-w-lg"
                animate={{
                  opacity: visible ? 1 : 0,
                  y: visible ? 0 : 10,
                }}
                transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              >
                The AI-powered alarm that delivers a personalized morning briefing. News, weather, sports, and insights — ready the moment you open your eyes.
              </motion.p>

              {/* Social proof + CTA */}
              <motion.div
                className="mt-8 flex flex-col items-center gap-5"
                animate={{
                  opacity: visible ? 1 : 0,
                  y: visible ? 0 : 10,
                }}
                transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
              >
                {/* Social proof pill */}
                <div className="inline-flex items-center gap-2 bg-white/80 border border-wakely-blue/20 rounded-full px-4 py-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-sky-200 border-2 border-white" />
                    <div className="w-6 h-6 rounded-full bg-amber-200 border-2 border-white" />
                    <div className="w-6 h-6 rounded-full bg-emerald-200 border-2 border-white" />
                  </div>
                  <span className="text-sm text-wakely-dark font-medium">
                    {waitlistCount > 0
                      ? `${waitlistCount.toLocaleString()} on the waitlist`
                      : 'Join the waitlist'}
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/waitlist"
                    className="inline-flex items-center bg-wakely-blue text-white font-semibold text-base px-7 py-3.5 rounded-full transition-all hover:bg-wakely-blue-dark hover:-translate-y-px hover:shadow-lg hover:shadow-wakely-blue/20"
                  >
                    Join the Waitlist
                  </Link>
                  <Link
                    to="/features"
                    className="inline-flex items-center text-wakely-blue font-medium text-sm hover:text-wakely-blue-dark transition-colors"
                  >
                    See how it works →
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </HeroAnimation>

      {/* ───── FEATURE CAROUSEL ───── */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-wakely-dark text-center leading-tight">
              What does Wakely include?
            </h2>
            <p className="text-center text-wakely-gray mt-4 mb-16 text-lg max-w-lg mx-auto">
              Everything you need to start your morning informed, not overwhelmed.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <button
                  onClick={() => setActiveFeature(i)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                    activeFeature === i
                      ? 'bg-white border-wakely-blue shadow-lg shadow-wakely-blue/10 scale-[1.02]'
                      : 'bg-white/50 border-gray-200 hover:border-gray-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h3 className="text-lg font-display font-bold text-wakely-dark">
                        {feature.title}
                      </h3>
                      <p className="text-wakely-gray text-sm mt-1 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveFeature(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeFeature === i ? 'bg-wakely-blue w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ───── WHY WAKELY ───── */}
      <section className="py-28 md:py-36 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-wakely-dark text-center leading-tight">
              Why choose Wakely?
            </h2>
            <p className="text-center text-wakely-gray mt-4 mb-16 text-lg max-w-lg mx-auto">
              Built for people who take their mornings seriously.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Save 30 minutes',
                desc: 'Stop scrolling through feeds and apps. Get everything you need in one 5-minute briefing.',
                icon: '⚡',
              },
              {
                title: 'Stay informed',
                desc: 'AI-curated content from trusted sources, personalized to your interests. No clickbait.',
                icon: '📊',
              },
              {
                title: 'Start calm',
                desc: 'Audio briefings let you get informed without screen time. Better mornings, better days.',
                icon: '☀️',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl border border-gray-200 hover:border-wakely-blue/30 hover:shadow-md hover:shadow-wakely-blue/5 transition-all duration-300 bg-wakely-offwhite">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="text-xl font-display font-bold text-wakely-dark mt-4 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-wakely-gray leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FINAL CTA ───── */}
      <section className="py-28 md:py-36 px-6 bg-white">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-wakely-dark leading-tight">
              Ready to wake up
              <br />
              <span className="text-wakely-blue">informed?</span>
            </h2>
            <p className="mt-5 text-lg text-wakely-gray max-w-md mx-auto">
              Beta is almost here. Be the first to experience Wakely.
            </p>
            <Link
              to="/waitlist"
              className="mt-10 inline-flex items-center bg-wakely-blue text-white font-semibold text-lg px-10 py-4 rounded-full transition-all hover:bg-wakely-blue-dark hover:-translate-y-px hover:shadow-lg hover:shadow-wakely-blue/20"
            >
              Join the Waitlist
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}

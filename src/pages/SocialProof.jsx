import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const APP_STORE_URL = 'https://apps.apple.com/app/id6755365728'

// Real user reviews will be added here after launch — with documented consent.
// No fabricated testimonials (FTC 16 CFR Part 255).
const testimonials = []

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-amber-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function SocialProof() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="px-6 text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-wakely-dark tracking-tight">
            Built for better mornings
          </h1>
          <p className="mt-4 text-lg text-wakely-gray">
            Wakely is live on the App Store — real reviews from real users will appear here soon.
          </p>
        </motion.div>
      </section>

      {/* Download banner */}
      <section className="px-6 max-w-2xl mx-auto mb-16 text-center">
        <ScrollReveal>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-wakely-blue text-white font-semibold px-8 py-4 rounded-full transition-all hover:bg-wakely-blue-dark hover:-translate-y-px hover:shadow-lg hover:shadow-wakely-blue/20"
          >
            Download on the App Store
          </a>
        </ScrollReveal>
      </section>

      {/* Testimonial grid — renders only once we have real, consented reviews */}
      {testimonials.length > 0 && (
      <section className="px-6 max-w-5xl mx-auto mb-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="break-inside-avoid bg-white rounded-2xl p-6 border border-gray-200 hover:border-wakely-blue/20 hover:shadow-md transition-all duration-300">
                <Stars count={t.stars} />
                <p className="mt-3 text-wakely-dark leading-relaxed text-sm">
                  "{t.quote}"
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-wakely-blue/10 flex items-center justify-center text-xs font-bold text-wakely-blue">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-wakely-dark">{t.name}</p>
                    <p className="text-xs text-wakely-light-gray">{t.role}</p> {/* PLACEHOLDER */}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      )}

      {/* CTA */}
      <section className="px-6 text-center py-16 bg-white">
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-wakely-dark">
            Ready to wake up informed?
          </h2>
          <p className="mt-3 text-wakely-gray mb-8">
            Download Wakely and start your mornings right.
          </p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-wakely-blue text-white font-semibold px-8 py-4 rounded-full transition-all hover:bg-wakely-blue-dark hover:-translate-y-px hover:shadow-lg hover:shadow-wakely-blue/20"
          >
            Download on the App Store
          </a>
        </ScrollReveal>
      </section>
    </div>
  )
}

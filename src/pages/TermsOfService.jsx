import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function TermsOfService() {
  return (
    <div className="pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-6"
      >
        <Link to="/" className="text-wakely-blue hover:text-wakely-blue-dark text-sm font-medium mb-8 inline-flex items-center gap-1 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-display font-semibold text-wakely-dark tracking-tight mt-6 mb-2">
          Terms of Service
        </h1>
        <p className="text-wakely-dark/40 text-sm mb-10">K.E.N. Studio LLC ("we", "us", or "our")</p>

        <div className="prose prose-wakely text-wakely-dark/70 text-[15px] leading-relaxed space-y-8">
          <section>
            <h2 className="text-xl font-display font-semibold text-wakely-dark mb-3">1. Eligibility</h2>
            <p>You must be at least 13 years old to use Wakely. If you are under 18, you need parent or guardian consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-wakely-dark mb-3">2. Waitlist and Early Access</h2>
            <p>Joining the waitlist does not guarantee beta access. We may modify, pause, or end the waitlist at any time. By joining, you consent to receive email updates about Wakely.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-wakely-dark mb-3">3. Future Accounts and Services</h2>
            <p>You may need to create an account when the app launches. Additional terms will apply at that time.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-wakely-dark mb-3">4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Use Wakely for any unlawful or harmful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Reverse engineer, redistribute, or modify our software</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-wakely-dark mb-3">5. Intellectual Property</h2>
            <p>All logos, brand elements, designs, and software are owned by K.E.N. Studio LLC. You may not use our intellectual property without written permission.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-wakely-dark mb-3">6. Disclaimers</h2>
            <p>Wakely is provided "as is" without warranties of any kind. We make no guarantees about availability, accuracy, or fitness for a particular purpose.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-wakely-dark mb-3">7. Limitation of Liability</h2>
            <p>We are not responsible for indirect, incidental, or consequential damages. Our total liability is capped at the amount you have paid us in the prior 12 months.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-wakely-dark mb-3">8. Termination</h2>
            <p>We may suspend or terminate your access if you violate these Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-wakely-dark mb-3">9. Governing Law</h2>
            <p>These Terms are governed by the laws of the State of New Jersey, USA.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-wakely-dark mb-3">10. Updates to These Terms</h2>
            <p>We may revise these Terms at any time. Continued use of Wakely after changes constitutes acceptance of the revised Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-wakely-dark mb-3">11. Contact</h2>
            <p>
              Questions? Reach us at{' '}
              <a href="mailto:wakelydev@getwakely.com" className="text-wakely-blue hover:underline">wakelydev@getwakely.com</a>
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  )
}

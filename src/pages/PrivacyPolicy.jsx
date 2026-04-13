import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="text-wakely-dark/40 text-sm mb-10">Effective Date: October 22, 2025</p>

        <div className="prose prose-wakely text-wakely-dark/70 text-[15px] leading-relaxed space-y-8">
          <p>
            Wakely ("we", "us", or "our") is a product of K.E.N. Studio LLC, based in New Jersey, USA.
            This policy explains what information we collect, how we use it, and what choices you have.
          </p>

          <section>
            <h2 className="text-xl font-display font-semibold text-wakely-dark mb-3">1. What We Collect</h2>
            <p className="mb-3"><strong className="text-wakely-dark">Information you provide:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name and email (when joining waitlist or beta)</li>
              <li>Selected interests and preferences</li>
              <li>Messages and feedback you send us</li>
            </ul>
            <p className="mt-3 mb-3"><strong className="text-wakely-dark">Information collected automatically:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Anonymous analytics (page views, referral links, time on site)</li>
              <li>Basic technical details (IP address, browser type, device type)</li>
            </ul>
            <p className="mt-3">We don't collect sensitive data, financial information, or location tracking at this stage.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-wakely-dark mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Manage the waitlist and notify you of updates, beta access, and launch</li>
              <li>Personalize your content and improve your experience</li>
              <li>Communicate with you about the product</li>
              <li>Comply with legal requirements</li>
              <li>Maintain security and performance</li>
            </ul>
            <p className="mt-3 font-medium text-wakely-dark">We do not sell or rent your personal data.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-wakely-dark mb-3">3. Where and How Your Data Is Stored</h2>
            <p>
              Your data is securely stored using Supabase, which provides encryption and access controls.
              Email data is also managed through ConvertKit. We take reasonable steps to keep your data secure,
              but no online system is 100% foolproof.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-wakely-dark mb-3">4. Your Choices</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Unsubscribe from emails using the link in any email</li>
              <li>When the app launches, manage or delete your account in-app</li>
              <li>To access, update, or delete your data, email <a href="mailto:wakelydev@getwakely.com" className="text-wakely-blue hover:underline">wakelydev@getwakely.com</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-wakely-dark mb-3">5. Third-Party Services</h2>
            <p>We use the following services to operate Wakely:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>ConvertKit (email and waitlist management)</li>
              <li>Supabase (database and API infrastructure)</li>
              <li>OpenAI and AWS Polly (AI content and audio generation)</li>
              <li>Apple and Stripe (future payment processing)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-wakely-dark mb-3">6. Data Retention</h2>
            <p>
              Waitlist and email data is retained for up to 2 years or until you request deletion.
              Anonymized analytics data may be stored longer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-wakely-dark mb-3">7. Children's Privacy</h2>
            <p>
              Wakely is intended for users aged 13 and older. We do not knowingly collect information
              from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-wakely-dark mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this policy as our product evolves. Significant changes will be posted
              on this page and communicated via email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-wakely-dark mb-3">9. Contact</h2>
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

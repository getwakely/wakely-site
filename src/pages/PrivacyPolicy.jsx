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

        <h1 className="text-4xl md:text-5xl font-display font-bold text-wakely-dark tracking-tight mt-6 mb-2">
          Privacy Policy
        </h1>
        <p className="text-wakely-light-gray text-sm mb-10">Last updated: April 2026</p>

        <div className="text-wakely-gray text-[15px] leading-relaxed space-y-8">
          <p>
            Wakely ("we", "us", or "our") is a product of K.E.N. Studio LLC, based in New Jersey, USA.
            This Privacy Policy explains how we collect, use, and protect your information when you visit
            https://getwakely.com, join our waitlist, or use our app.
          </p>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">1. What we collect</h2>
            <p className="mb-3"><strong className="text-wakely-dark">Information you provide:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name and email address when you join the waitlist or request beta access</li>
              <li>Selected interests and preferences (to personalize future briefings)</li>
              <li>Any messages or feedback you send us directly</li>
            </ul>
            <p className="mt-3 mb-3"><strong className="text-wakely-dark">Information collected automatically:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Basic technical details such as IP address, browser type, and device info</li>
              <li>Anonymous analytics data (e.g., page views, referral links, time on site)</li>
            </ul>
            <p className="mt-3">We don't collect sensitive data, financial info, or location tracking at this stage.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">2. How we use your information</h2>
            <p className="mb-3">We use your information to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Manage our waitlist and notify you of updates, beta access, or launch events</li>
              <li>Personalize content and improve the Wakely experience</li>
              <li>Communicate with you about the product</li>
              <li>Maintain the security and performance of our systems</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
            <p className="mt-3 font-medium text-wakely-dark">We do not sell or rent your personal data.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">3. Where and how your data is stored</h2>
            <p>
              Your information is securely stored using Supabase, our managed backend provider, which includes
              encryption and access controls. Email addresses are also stored in Kit (formerly ConvertKit),
              which we use for email communications.
            </p>
            <p className="mt-3">We take reasonable steps to keep your data secure, but we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">4. Your choices</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>You can unsubscribe from our emails at any time using the link at the bottom of any message.</li>
              <li>To access, update, or delete your data, email us at <a href="mailto:wakelydev@getwakely.com" className="text-wakely-blue hover:underline">wakelydev@getwakely.com</a>.</li>
              <li>Within the Wakely app, you can also manage or delete your account directly.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">5. Third-party services we use</h2>
            <p className="mb-3">We rely on trusted third-party platforms to operate our product, including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-wakely-dark">Supabase</strong> — user database and API hosting</li>
              <li><strong className="text-wakely-dark">Kit (formerly ConvertKit)</strong> — email and waitlist management</li>
              <li><strong className="text-wakely-dark">Google Gemini</strong> — AI and content generation services</li>
              <li><strong className="text-wakely-dark">Speechify</strong> — text-to-speech audio generation</li>
              <li><strong className="text-wakely-dark">NewsAPI.ai</strong> — news aggregation and content sourcing</li>
              <li><strong className="text-wakely-dark">(Future) Apple</strong> — for in-app purchases and subscription management</li>
            </ul>
            <p className="mt-3">Each service has its own privacy practices, which you can review on their respective websites.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">6. Data retention</h2>
            <p>
              We retain waitlist and email data for up to two years or until you request deletion.
              Anonymized analytics data may be stored longer for internal insights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">7. Children's privacy</h2>
            <p>
              Wakely requires users to be 13 years of age or older to create an account or use the app.
              We do not knowingly collect personal information from children under 13. If we become aware
              that a user is under 13, we will promptly delete their information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">8. Your rights (GDPR & CCPA)</h2>
            <p>
              If you are located in the European Union or California, you have additional rights regarding your
              personal data, including the right to access, correct, delete, or port your data, and the right to
              know what information we have collected about you. To exercise any of these rights, contact us
              at <a href="mailto:wakelydev@getwakely.com" className="text-wakely-blue hover:underline">wakelydev@getwakely.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">9. Changes to this policy</h2>
            <p>
              We may update this policy as our product evolves. If significant changes occur, we'll update
              this page and notify you by email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">10. Contact</h2>
            <p>
              Questions about privacy?{' '}
              <a href="mailto:wakelydev@getwakely.com" className="text-wakely-blue hover:underline">wakelydev@getwakely.com</a>
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  )
}

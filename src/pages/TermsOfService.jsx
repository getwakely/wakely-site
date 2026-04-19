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

        <h1 className="text-4xl md:text-5xl font-display font-bold text-wakely-dark tracking-tight mt-6 mb-2">
          Terms of Service
        </h1>
        <p className="text-wakely-light-gray text-sm mb-10">Effective date: April 13, 2026</p>

        <div className="text-wakely-gray text-[15px] leading-relaxed space-y-8">
          <p>
            Welcome to Wakely. These Terms of Service ("Terms") govern your use of the Wakely iOS app and any
            related services (collectively, "Wakely" or the "Service") provided by K.E.N. Studio LLC ("we", "us", "our").
            By downloading, installing, or using Wakely, you agree to these Terms. If you don't agree, don't use Wakely.
          </p>
          <p>
            These Terms are a legal agreement between you and K.E.N. Studio LLC. Please read them carefully,
            especially Section 10 ("Disclaimers") and Section 11 ("Limitation of liability").
          </p>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">1. Eligibility</h2>
            <p>
              You must be at least 13 years old to use Wakely. If you're under 18, you may only use Wakely with
              the permission and supervision of a parent or legal guardian who agrees to be bound by these Terms
              on your behalf. By using Wakely, you represent that you meet these requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">2. Your account</h2>
            <p>
              Wakely can be used anonymously. When you first open the app, we create a random anonymous account
              for you tied to your device. You can optionally create an account with an email address, but it's not required.
            </p>
            <p className="mt-3">
              You're responsible for any activity that happens under your account, and for keeping your device secure.
              If you think someone else has gained access to your account, email us at{' '}
              <a href="mailto:wakelydev@getwakely.com" className="text-wakely-blue hover:underline">wakelydev@getwakely.com</a>{' '}
              and we'll help you regain control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">3. Subscriptions</h2>
            <p>
              Wakely offers auto-renewing subscriptions that give you access to Premium features, including
              personalized AI briefings, morning activities, and custom alarm sounds.
            </p>
            <p className="mt-3 mb-2"><strong className="text-wakely-dark">Subscription options:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Wakely Premium Weekly — $4.99 per week, no free trial</li>
              <li>Wakely Premium Monthly — $12.99 per month, no free trial</li>
              <li>Wakely Premium Yearly — $59.99 per year, with a 3-day free trial for new subscribers</li>
            </ul>
            <p className="mt-3 mb-2"><strong className="text-wakely-dark">Billing and auto-renewal:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Payment is charged to your Apple ID account at the time of purchase confirmation.</li>
              <li>Your subscription automatically renews unless auto-renew is turned off at least 24 hours before the end of the current period.</li>
              <li>Your account will be charged for renewal within 24 hours prior to the end of the current period at the rate of your selected plan.</li>
              <li>You can manage or cancel your subscription at any time by going to iOS Settings → Apple ID → Subscriptions.</li>
              <li>If you cancel, your Premium access continues until the end of the current billing period. No partial refunds are issued for unused time.</li>
              <li>If you're on the 3-day free trial for the yearly plan and you cancel before the trial ends, you won't be charged. If you don't cancel, you'll be charged the full yearly price at the end of the trial.</li>
              <li>Any unused portion of a free trial period is forfeited when you purchase a subscription.</li>
            </ul>
            <p className="mt-3">
              Prices are listed in USD and may vary by region. Apple handles all payment processing — we don't
              see your credit card details at any point.
            </p>
            <p className="mt-3">
              Refunds are handled by Apple under their standard App Store refund policy. Requests must be made
              directly to Apple at{' '}
              <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="text-wakely-blue hover:underline">
                https://reportaproblem.apple.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">4. Free features</h2>
            <p>
              You can use a limited version of Wakely without a subscription. Some features require Premium.
              We reserve the right to change which features are free and which require a subscription, though
              we won't retroactively take features away from existing paying subscribers during their active billing period.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">5. Acceptable use</h2>
            <p className="mb-2">You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use Wakely for any unlawful purpose</li>
              <li>Attempt to reverse-engineer, decompile, or tamper with the app</li>
              <li>Abuse, overload, or attempt to exploit the Wakely backend or any of our third-party providers</li>
              <li>Submit false, misleading, or malicious feedback through the in-app feedback form</li>
              <li>Impersonate anyone or misrepresent your affiliation with a person or entity</li>
              <li>Use Wakely to distribute malware, spam, or harmful content</li>
              <li>Resell, sublicense, or commercially exploit the Service</li>
            </ul>
            <p className="mt-3">We may suspend or terminate your access to Wakely if we believe you're violating these rules.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">6. AI-generated content</h2>
            <p>
              Your daily briefing is generated by an AI model based on news articles, your interests, weather,
              and (optionally) your calendar. Because briefings are AI-generated:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>They may contain factual errors, outdated information, or misstatements.</li>
              <li>They should not be relied on for financial, medical, legal, safety, or other consequential decisions.</li>
              <li>Always verify important information through authoritative primary sources.</li>
              <li>The AI provider may change outputs over time without notice to us.</li>
            </ul>
            <p className="mt-3">
              Wakely briefings are for informational and entertainment purposes only. We make no warranty about
              the accuracy, completeness, or reliability of any briefing content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">7. News articles and third-party content</h2>
            <p>
              Briefings reference news articles from third-party publishers. We don't own, control, or endorse
              the content of those articles. Links and references to third-party sites are provided for your convenience.
              When you tap through to a third-party site, that site's own terms and privacy policy apply.
            </p>
            <p className="mt-3">
              If you believe a news article linked in Wakely infringes your rights, please contact us
              at <a href="mailto:wakelydev@getwakely.com" className="text-wakely-blue hover:underline">wakelydev@getwakely.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">8. Alarms</h2>
            <p>
              Wakely uses Apple's AlarmKit framework to schedule and fire alarms. While we've done our best to
              make alarms reliable, we can't guarantee that every alarm will fire under all circumstances. Alarms
              depend on iOS, device settings (Do Not Disturb, Focus modes, Silent mode, volume level, battery state,
              Low Power Mode), and other factors outside our control.
            </p>
            <p className="mt-3">
              Do not rely solely on Wakely for mission-critical wake-ups. For flights, medical appointments, or
              anything where missing a wake-up would cause you serious harm, use a backup alarm — either a second
              alarm clock or your phone's built-in Clock app as redundancy. We are not responsible for losses caused
              by a Wakely alarm failing to fire.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">9. Intellectual property</h2>
            <p>
              Wakely, including the app, brand, logo, design, and all associated content we create, is owned by
              K.E.N. Studio LLC and protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="mt-3">
              We grant you a personal, non-exclusive, non-transferable, revocable license to use Wakely for your
              own personal, non-commercial use. You may not copy, modify, distribute, sell, or lease any part of
              Wakely, or attempt to extract or reuse our code, design, or brand assets.
            </p>
            <p className="mt-3">News article text shown in your briefing is the property of the original publishers, not Wakely.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">10. Disclaimers</h2>
            <p>
              Wakely is provided "as is" and "as available", without warranties of any kind, whether express or implied.
              We specifically disclaim any warranties of merchantability, fitness for a particular purpose, non-infringement,
              and any warranty that Wakely will be uninterrupted, error-free, secure, or free of viruses or other harmful components.
            </p>
            <p className="mt-3 mb-2">We make no representation or warranty that:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your briefing will be accurate, complete, or suitable for any particular use</li>
              <li>Alarms will fire at the exact requested time or at all</li>
              <li>The Service will be available continuously or without interruption</li>
              <li>Any defects or errors will be corrected</li>
              <li>The Service will meet your specific expectations</li>
            </ul>
            <p className="mt-3">Your use of Wakely is at your own risk.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">11. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, K.E.N. Studio LLC, its owners, employees, and contractors
              will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages
              arising out of or related to your use of Wakely, including but not limited to lost profits, lost data,
              missed appointments or flights, or damage to reputation — even if we've been advised of the possibility
              of such damages.
            </p>
            <p className="mt-3">
              Our total liability to you for any claim arising out of or relating to these Terms or Wakely will not
              exceed the greater of (a) the amount you've paid us in the 12 months preceding the claim, or (b) ten
              US dollars ($10).
            </p>
            <p className="mt-3">Some jurisdictions don't allow these limitations, so parts of this section may not apply to you.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">12. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless K.E.N. Studio LLC, its owners, employees, and contractors
              from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees)
              arising out of or related to: (a) your use of Wakely, (b) your violation of these Terms, or (c) your
              violation of any rights of another person or entity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">13. Termination</h2>
            <p>
              You can stop using Wakely at any time by deleting the app from your device and cancelling any active
              subscription through iOS Settings.
            </p>
            <p className="mt-3">
              We can suspend or terminate your access to Wakely at any time, with or without notice, if we believe
              you've violated these Terms, if we're required to do so by law, or if we decide to discontinue the Service.
              If we terminate your account without cause while you have an active subscription, we'll refund any unused
              portion on a pro rata basis.
            </p>
            <p className="mt-3">
              Sections that by their nature should survive termination — including Sections 9 (Intellectual property),
              10 (Disclaimers), 11 (Limitation of liability), 12 (Indemnification), and 14 (Governing law) — will
              continue to apply after termination.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">14. Governing law and disputes</h2>
            <p>
              These Terms are governed by the laws of the State of New Jersey, USA, without regard to its conflict
              of law rules. Any disputes arising out of or related to these Terms or your use of Wakely will be
              resolved exclusively in the state or federal courts located in New Jersey, and you consent to the
              jurisdiction of those courts.
            </p>
            <p className="mt-3">
              If you're a consumer in the EU, UK, or another jurisdiction whose laws give you the right to bring
              claims in your local courts, nothing in this section limits that right.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">15. Changes to these Terms</h2>
            <p>
              We may update these Terms from time to time. If we make material changes, we'll update the effective
              date at the top of this page and, where appropriate, notify you in the app. Continued use of Wakely
              after changes means you accept the updated Terms. If you don't agree with the changes, stop using Wakely.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">16. Contact us</h2>
            <p>
              Questions about these Terms? Email us at{' '}
              <a href="mailto:wakelydev@getwakely.com" className="text-wakely-blue hover:underline">wakelydev@getwakely.com</a>
            </p>
            <p className="mt-2">Company: K.E.N. Studio LLC</p>
            <p className="mt-2 text-wakely-light-gray text-sm">These Terms were last updated on April 13, 2026.</p>
          </section>
        </div>
      </motion.div>
    </div>
  )
}

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
        <p className="text-wakely-light-gray text-sm mb-10">Last updated: July 2026</p>

        <div className="text-wakely-gray text-[15px] leading-relaxed space-y-8">
          <p>
            Wakely ("we", "us", or "our") is a product of K.E.N. Studio LLC, based in New Jersey, USA.
            This Privacy Policy explains what information the Wakely app and website (https://getwakely.com)
            collect, how we use it, and the choices you have. Wakely is a morning alarm app that plays a
            personalized audio briefing — news, weather, your commute, and your reminders — when you wake up.
            To do that, the app works with some of your data as described below.
          </p>
          <p>
            You use Wakely through an account that is created automatically and identified by an anonymous
            account ID. We do not require your email address to use the app.
          </p>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">1. What we collect</h2>

            <p className="mb-3"><strong className="text-wakely-dark">Information you provide:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your first name (used to greet you and personalize your briefing)</li>
              <li>The topics and interests you choose, and your briefing and voice preferences</li>
              <li>Commute details you enter, including your start and destination addresses / saved locations</li>
              <li>Reminders you type in to be read back to you in your briefing</li>
              <li>Any feedback or support messages you send us</li>
              <li>Your email address only if you choose to join our waitlist or mailing list on the website</li>
            </ul>

            <p className="mt-4 mb-3"><strong className="text-wakely-dark">Information the app uses to deliver its features:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-wakely-dark">Precise location</strong> — with your permission, to provide local weather and to estimate your commute and traffic. You can turn this off in your device settings.</li>
              <li><strong className="text-wakely-dark">Calendar events</strong> — if you enable it, we read your upcoming event titles so they can be mentioned in your briefing.</li>
              <li><strong className="text-wakely-dark">Motion &amp; step activity</strong> — if you choose a step-based wake-up activity, we read your device's motion/step data. This is used only on your device to check whether you've completed the activity; it is not sent to our servers.</li>
              <li><strong className="text-wakely-dark">Anonymous account identifier</strong> — a randomly generated ID used to save your settings and briefings.</li>
            </ul>

            <p className="mt-4 mb-3"><strong className="text-wakely-dark">Information generated for you:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your generated briefings and the audio narration of them (created from the personalized content above)</li>
            </ul>

            <p className="mt-4 mb-3"><strong className="text-wakely-dark">Information collected automatically:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Basic technical and device information needed to run the service</li>
              <li>Your subscription status (whether you have an active Wakely subscription)</li>
              <li>Anonymous usage and diagnostic information</li>
            </ul>

            <p className="mt-4 font-medium text-wakely-dark">We do not sell or rent your personal data, and we do not use it for third-party advertising or cross-app tracking.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">2. How we use your information</h2>
            <p className="mb-3">We use your information to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Create and play your personalized morning briefing and run your alarms</li>
              <li>Provide local weather, commute, and traffic details in your briefing</li>
              <li>Read your chosen calendar events and typed reminders back to you</li>
              <li>Save your settings, interests, and past briefings across sessions</li>
              <li>Manage your subscription and, on the website, our waitlist and email updates</li>
              <li>Maintain the security, reliability, and performance of the service</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">3. Location, calendar, and motion permissions</h2>
            <p>
              Wakely only accesses your location, calendar, and motion data after you grant permission, and only
              to provide the features described above. You can review or revoke any of these permissions at any
              time in your device's Settings. Your motion and step data is processed on your device and is not
              transmitted to or stored by us. Turning a permission off may disable the related feature (for
              example, weather or commute details) but will not otherwise prevent you from using the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">4. Where and how your data is stored</h2>
            <p>
              Your account data is stored using Supabase, our managed backend provider, with encryption in
              transit and access controls. To generate your briefing, the relevant content (such as your
              selected topics, location-derived weather, chosen calendar titles, and reminders) is sent to the
              service providers listed below strictly to produce your briefing text and audio. We take
              reasonable steps to protect your data but cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">5. Third-party services we use</h2>
            <p className="mb-3">We rely on trusted third-party platforms to operate Wakely, including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-wakely-dark">Supabase</strong> — account database, authentication, and backend hosting</li>
              <li><strong className="text-wakely-dark">Google Gemini</strong> — AI generation of your briefing text</li>
              <li><strong className="text-wakely-dark">Speechify</strong> — text-to-speech narration of your briefing</li>
              <li><strong className="text-wakely-dark">NewsAPI.ai</strong> — news sourcing for your selected topics</li>
              <li><strong className="text-wakely-dark">Apple</strong> — WeatherKit for weather, Maps for commute estimates, and the App Store for in-app purchases and subscriptions</li>
              <li><strong className="text-wakely-dark">Kit (formerly ConvertKit)</strong> — website waitlist and email communications</li>
            </ul>
            <p className="mt-3">Each service has its own privacy practices, which you can review on their respective websites. We share only what is needed for each service to perform its function.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">6. Your choices and rights</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-wakely-dark">Delete your account and data:</strong> You can permanently delete your account and associated data from within the Wakely app (Settings → Delete Account). You may also email us to request deletion.</li>
              <li>Review or revoke location, calendar, and motion permissions any time in your device Settings.</li>
              <li>Manage or cancel your subscription in your Apple ID / App Store settings.</li>
              <li>If you joined our waitlist, unsubscribe using the link at the bottom of any email.</li>
              <li>To access, correct, or delete your data, email us at <a href="mailto:wakelydev@getwakely.com" className="text-wakely-blue hover:underline">wakelydev@getwakely.com</a>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">7. Data retention</h2>
            <p>
              We retain your account data for as long as your account is active. When you delete your account,
              we delete your associated personal data from our systems. Waitlist and email data is retained for
              up to two years or until you request deletion. Anonymized or aggregated data that no longer
              identifies you may be retained for internal insights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">8. Children's privacy</h2>
            <p>
              Wakely requires users to be 13 years of age or older. We do not knowingly collect personal
              information from children under 13. If we become aware that a user is under 13, we will promptly
              delete their information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">9. Your rights (GDPR &amp; CCPA)</h2>
            <p>
              If you are located in the European Union or California, you have additional rights regarding your
              personal data, including the right to access, correct, delete, or port your data, and the right to
              know what information we have collected about you. We do not sell your personal information. To
              exercise any of these rights, contact us at <a href="mailto:wakelydev@getwakely.com" className="text-wakely-blue hover:underline">wakelydev@getwakely.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">10. Changes to this policy</h2>
            <p>
              We may update this policy as our product evolves. If significant changes occur, we'll update this
              page and, where appropriate, notify you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-wakely-dark mb-3">11. Contact</h2>
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

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const faqCategories = [
  {
    name: 'Product Basics',
    faqs: [
      {
        q: 'What is Wakely?',
        a: 'Wakely is an AI-powered alarm clock that wakes you up with a personalized audio briefing. Instead of waking up and scrolling through multiple apps to figure out what\'s going on in the world, Wakely delivers the information you care about — news, sports, technology, markets, weather, and more — in a short audio briefing when your alarm goes off. The goal is simple: start your day informed without starting it on your phone.',
      },
      {
        q: 'Why does Wakely exist?',
        a: 'Most people start their morning by opening their phone and jumping between multiple apps to catch up on what happened overnight. Wakely replaces that process with a single personalized briefing that tells you what matters before you even unlock your phone. It\'s designed to make mornings simpler, faster, and more intentional.',
      },
      {
        q: 'How does Wakely work?',
        a: 'When you set up Wakely, you select the topics and interests you care about. Every morning, Wakely generates a custom audio briefing that includes your local weather, the most important headlines, and updates related to your selected interests. When your alarm goes off, the briefing begins automatically so you can listen while getting ready for the day.',
      },
      {
        q: 'What kind of topics can I choose?',
        a: 'You can customize your briefing by selecting categories such as National News, World News, Business & Finance, Technology, Science, Sports, Health, and Entertainment. Within each category, you can also add specific interests like AI, Startups, Formula 1, NBA, Crypto, and Space exploration.',
      },
      {
        q: 'Is the briefing different every day?',
        a: 'Yes. Wakely pulls in fresh information each morning, so your briefing changes daily based on the latest news and updates related to your interests.',
      },
    ],
  },
  {
    name: 'Features',
    faqs: [
      {
        q: 'Can I choose different voices or tones?',
        a: 'Yes. Wakely allows you to customize both the voice and the tone of your briefing. Styles include calm and informative, energetic and upbeat, conversational, and classic news-style delivery. Different voices are available so the briefing feels more natural and personalized.',
      },
      {
        q: 'Who is Wakely for?',
        a: 'Wakely is designed for people who want to stay informed without spending their morning scrolling. It\'s especially useful for people who like listening to podcasts or audio updates, want to reduce morning screen time, follow specific industries or sports, or prefer quick summaries instead of endless feeds.',
      },
      {
        q: 'Does Wakely replace my normal alarm?',
        a: 'Yes. Wakely works as a full alarm clock while also delivering your personalized morning briefing. You can set alarms just like any other alarm app.',
      },
      {
        q: 'Do I have to listen to the entire briefing?',
        a: 'No. You can pause, skip, or stop the briefing anytime, just like a normal audio player.',
      },
      {
        q: 'How does Wakely choose what stories to include?',
        a: 'Wakely analyzes information from trusted sources and selects the most relevant updates based on your selected categories, your specific interests, and the importance and recency of stories. The result is a short, relevant briefing instead of an overwhelming news feed.',
      },
    ],
  },
  {
    name: 'Availability',
    faqs: [
      {
        q: 'Is my data private?',
        a: 'Yes. Your interests and preferences are used only to personalize your briefing. Wakely does not sell personal data to advertisers.',
      },
      {
        q: 'Is Wakely free?',
        a: 'Wakely will launch as a paid app with core features included. A premium version unlocks unlimited categories and interests, additional voices and narration styles, expanded personalization features, and other advanced features added over time.',
      },
      {
        q: 'When will Wakely launch?',
        a: 'We\'re currently finishing development and preparing our first public release. Join the waitlist to be among the first people to try Wakely.',
      },
      {
        q: 'Is Wakely available on iPhone or Android?',
        a: 'Wakely is launching first on iPhone, with potential support for other platforms in the future.',
      },
    ],
  },
  {
    name: 'Billing & Access',
    faqs: [
      {
        q: 'How do I get early access?',
        a: 'You can join the Wakely waitlist on our website to receive updates, early access opportunities, and beta invitations.',
      },
    ],
  },
]

function AccordionItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-[15px] font-semibold text-wakely-dark pr-4 group-hover:text-wakely-blue transition-colors">
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0"
        >
          <svg className="w-3.5 h-3.5 text-wakely-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-wakely-gray leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState(null)

  const allFaqs = faqCategories.flatMap((cat, catIdx) =>
    cat.faqs.map((faq, faqIdx) => ({ ...faq, category: cat.name, globalIdx: `${catIdx}-${faqIdx}` }))
  )

  const filtered = search.trim()
    ? allFaqs.filter(f => f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase()))
    : activeCategory !== null
    ? allFaqs.filter(f => f.category === faqCategories[activeCategory].name)
    : allFaqs

  return (
    <div className="pt-24 pb-16">
      <section className="px-6 text-center max-w-3xl mx-auto mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-wakely-dark tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-wakely-gray">
            Everything you want to know about Wakely.
          </p>
        </motion.div>
      </section>

      {/* Search */}
      <section className="px-6 max-w-3xl mx-auto mb-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <input
            type="text"
            placeholder="Search FAQs..."
            value={search}
            onChange={e => { setSearch(e.target.value); setActiveCategory(null) }}
            className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white text-wakely-dark placeholder:text-wakely-light-gray focus:outline-none focus:ring-2 focus:ring-wakely-blue/30 focus:border-wakely-blue transition-all text-sm"
          />
        </motion.div>
      </section>

      {/* Category pills */}
      {!search.trim() && (
        <section className="px-6 max-w-3xl mx-auto mb-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${activeCategory === null ? 'bg-wakely-blue text-white' : 'bg-white border border-gray-200 text-wakely-gray hover:text-wakely-dark'}`}
            >
              All
            </button>
            {faqCategories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(i)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${activeCategory === i ? 'bg-wakely-blue text-white' : 'bg-white border border-gray-200 text-wakely-gray hover:text-wakely-dark'}`}
              >
                {cat.name}
              </button>
            ))}
          </motion.div>
        </section>
      )}

      {/* FAQ list */}
      <section className="px-6 max-w-3xl mx-auto mb-20">
        <ScrollReveal>
          <div className="bg-white rounded-2xl border border-gray-200 px-6 md:px-8">
            {filtered.length === 0 ? (
              <p className="py-8 text-center text-wakely-light-gray text-sm">No results found. Try a different search term.</p>
            ) : (
              filtered.map((faq) => (
                <AccordionItem
                  key={faq.globalIdx}
                  faq={faq}
                  isOpen={openIndex === faq.globalIdx}
                  onToggle={() => setOpenIndex(openIndex === faq.globalIdx ? null : faq.globalIdx)}
                />
              ))
            )}
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="px-6 text-center py-16 bg-white">
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-wakely-dark">
            Still have questions?
          </h2>
          <p className="mt-3 text-wakely-gray mb-6">
            Reach out to our team or join the waitlist.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/waitlist"
              className="inline-flex items-center bg-wakely-blue text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:bg-wakely-blue-dark hover:-translate-y-px hover:shadow-lg hover:shadow-wakely-blue/20"
            >
              Join the Waitlist
            </Link>
            <Link
              to="/support"
              className="inline-flex items-center bg-white border border-gray-200 text-wakely-dark font-semibold px-8 py-3.5 rounded-full transition-all hover:bg-gray-50"
            >
              Contact Support
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}

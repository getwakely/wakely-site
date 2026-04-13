import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Features from './pages/Features'
import SocialProof from './pages/SocialProof'
import Waitlist from './pages/Waitlist'

import FAQ from './pages/FAQ'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import Support from './pages/Support'
import Feedback from './pages/Feedback'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/features" element={<PageTransition><Features /></PageTransition>} />
            <Route path="/social-proof" element={<PageTransition><SocialProof /></PageTransition>} />
            <Route path="/waitlist" element={<PageTransition><Waitlist /></PageTransition>} />

            <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
            <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
            <Route path="/terms-of-service" element={<PageTransition><TermsOfService /></PageTransition>} />
            <Route path="/support" element={<PageTransition><Support /></PageTransition>} />
            <Route path="/feedback" element={<PageTransition><Feedback /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

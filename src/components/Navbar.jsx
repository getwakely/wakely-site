import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import logoImg from '../assets/logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const [visible, setVisible] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    // On home page, wait for hero animation to finish before showing
    if (isHome) {
      setVisible(false)
      const timer = setTimeout(() => setVisible(true), 4500)
      return () => clearTimeout(timer)
    } else {
      setVisible(true)
    }
  }, [location, isHome])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/features', label: 'Features' },
    { to: '/social-proof', label: 'Reviews' },
    { to: '/faq', label: 'FAQ' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        !visible ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/60'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          {!logoError ? (
            <img
              src={logoImg}
              alt="Wakely"
              className="h-8 w-8 rounded-lg"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="h-8 w-8 rounded-lg bg-wakely-dark flex items-center justify-center">
              <span className="text-white font-bold text-sm font-display">W</span>
            </div>
          )}
          <span className="text-lg font-bold font-display text-wakely-dark">
            Wakely
          </span>
        </Link>

        {/* Desktop nav — center */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? 'text-wakely-blue'
                  : 'text-wakely-gray hover:text-wakely-dark'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA — right */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/waitlist"
            className="bg-wakely-blue text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:bg-wakely-blue-dark hover:-translate-y-px hover:shadow-md hover:shadow-wakely-blue/20"
          >
            Join Waitlist
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-wakely-dark rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-wakely-dark rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-wakely-dark rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/60 px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-base font-medium ${
                location.pathname === link.to
                  ? 'text-wakely-dark'
                  : 'text-wakely-gray hover:text-wakely-dark'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/waitlist"
            className="bg-wakely-blue text-white text-sm font-semibold px-5 py-3 rounded-full text-center transition-colors hover:bg-wakely-blue-dark mt-1"
          >
            Join Waitlist
          </Link>
        </div>
      )}
    </nav>
  )
}

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/',         label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about',    label: 'About' },
  { to: '/blog',     label: 'Insights' },
  { to: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface/80 backdrop-blur-xl shadow-clay' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-heading font-bold text-xl text-textMain flex items-center gap-2">
          <span className="text-primary">N</span>exus<span className="text-primary">P</span>rism
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`font-body text-sm font-medium transition-colors duration-200 relative group ${
                  pathname === to ? 'text-primary' : 'text-textMuted hover:text-textMain'
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                    pathname === to ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-white font-body font-semibold px-5 py-2.5 rounded-clay shadow-clay clay-btn transition-all duration-200 hover:bg-primary/90 text-sm"
        >
          Get a Quote
        </Link>

        {/* Mobile hamburger */}
        <button className="md:hidden text-textMain" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-white/5"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className={`block font-body font-medium py-1 ${
                      pathname === to ? 'text-primary' : 'text-textMuted'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block bg-primary text-white font-semibold px-5 py-2.5 rounded-clay text-sm"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
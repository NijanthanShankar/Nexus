import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

import Navbar        from './components/Navbar'
import Footer        from './components/Footer'
import CustomCursor  from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'
import FloatingBlobs from './components/FloatingBlobs'

import Home          from './pages/Home'
import Projects      from './pages/Projects'
import About         from './pages/About'
import Blog          from './pages/Blog'
import Contact       from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms         from './pages/Terms'

export default function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(t)
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <>
      <CustomCursor />
      <FloatingBlobs />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/"               element={<Home />} />
          <Route path="/projects"       element={<Projects />} />
          <Route path="/about"          element={<About />} />
          <Route path="/blog"           element={<Blog />} />
          <Route path="/contact"        element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms"          element={<Terms />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
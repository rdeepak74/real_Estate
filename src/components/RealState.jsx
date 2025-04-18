import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Properties from './Properties'
import About from './About'
import Testimonials from './Testimonials'
import Faq from './Faq'
import Contact from './Contact'
import Footer from './Footer'
function RealState() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 -z-10" />
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Hero />
      <Properties />
      <About />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

export default RealState

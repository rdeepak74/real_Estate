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
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
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

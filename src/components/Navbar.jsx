import React, { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Properties', href: '#properties' },
    { name: 'About Us', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleScroll = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed w-full top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur z-50">
      <div className=" mx-auto px-14 py-3 lg:py-4 relative">
        <div className="flex justify-between items-center">
          <h1 className="text-xl lg:text-2xl font-bold text-slate-800 dark:text-white">
            Real Estate
          </h1>

          {/* Centered Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-base text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Dark Mode Toggle */}
          <div className="hidden lg:flex items-center ml-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 lg:h-6 lg:w-6 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 lg:h-6 lg:w-6 text-slate-600 dark:text-slate-300" />
              )}
            </button>
          </div>

          {/* Tablet/Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-slate-600 dark:text-slate-300" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-slate-600 dark:text-slate-300" />
              ) : (
                <Menu className="h-5 w-5 text-slate-600 dark:text-slate-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    handleScroll(e, link.href)
                    setIsMenuOpen(false)
                  }}
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

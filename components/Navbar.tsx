'use client'

import { useState, useEffect } from 'react'
import { Phone, Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B14]/95 backdrop-blur-md border-b border-amber-500/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-9 h-9 bg-amber-500 rounded-lg group-hover:bg-amber-400 transition-colors">
              <Zap className="w-5 h-5 text-[#080B14]" strokeWidth={2.5} />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping-slow opacity-75" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-sm tracking-widest uppercase">
                Quesada
              </span>
              <span className="text-amber-500 font-semibold text-xs tracking-widest uppercase">
                Electric
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-amber-400 text-sm font-medium tracking-wide transition-colors animated-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:8622027122"
              className="flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              (862) 202-7122
            </a>
            <a
              href="#contact"
              className="bg-amber-500 hover:bg-amber-400 text-[#080B14] font-bold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white hover:text-amber-400 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0F1629]/98 backdrop-blur-md border-t border-amber-500/10">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-slate-300 hover:text-amber-400 text-base font-medium py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:8622027122"
              className="flex items-center gap-2 text-amber-400 text-base font-medium py-2"
            >
              <Phone className="w-4 h-4" />
              (862) 202-7122
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="bg-amber-500 hover:bg-amber-400 text-[#080B14] font-bold text-sm px-5 py-3 rounded-lg text-center transition-colors"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

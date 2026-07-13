import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  const isHome = router.pathname === '/' 
  const isAbout = router.pathname === '/about'
  const forceDark = !isHome && !isAbout

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [router.pathname])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${forceDark ? 'bg-white/95 text-slate-900 border-b border-slate-200 shadow-sm' : (scrolled ? 'bg-white/95 text-slate-900 border-b border-slate-200 shadow-sm' : 'bg-transparent text-white')} `}>
      <div className="container flex items-center justify-between py-4">
        <Link href="/" aria-label="Home">
          <img src="/images/logo.png" alt="BSC" className="h-12 md:h-16 object-contain" />
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 md:hidden"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>

        <nav className="hidden md:flex md:space-x-6 text-sm uppercase tracking-wider">
          {navItems.map((item) => {
            const active = router.pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative inline-block px-1 py-2 ${active ? 'text-amber-400' : ''}`}
                aria-current={active ? 'page' : undefined}
              >
                <span className="relative z-10">{item.label}</span>
                <span className={`absolute left-0 -bottom-0.5 h-[3px] w-full bg-amber-400 origin-left transform transition-transform duration-300 ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </Link>
            )
          })}
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 shadow-sm">
          <nav className="container py-3">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const active = router.pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide transition ${
                        active ? 'bg-amber-50 text-amber-500' : 'text-slate-800 hover:bg-slate-100'
                      }`}
                      aria-current={active ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

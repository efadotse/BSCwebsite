import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  const isHome = router.pathname === '/' 
  const isAbout = router.pathname === '/about'
  const forceDark = !isHome && !isAbout

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${forceDark ? 'bg-white/95 text-slate-900 border-b border-slate-200 shadow-sm' : (scrolled ? 'bg-white/95 text-slate-900 border-b border-slate-200 shadow-sm' : 'bg-transparent text-white')} `}>
      <div className="container flex items-center justify-between py-4">
        <Link href="/" aria-label="Home">
          <img src="/images/logo.png" alt="BSC" className="h-12 md:h-16 object-contain" />
        </Link>
        <nav className="space-x-6 text-sm uppercase tracking-wider">
          {[
            { href: '/about', label: 'About' },
            { href: '/services', label: 'Services' },
            { href: '/projects', label: 'Projects' },
            { href: '/contact', label: 'Contact' },
          ].map((item) => {
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
    </header>
  )
}

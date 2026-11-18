import { useEffect, useState } from 'react'
import { navItems, profile } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems.map((n) => document.getElementById(n.id))
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => s && obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a className="nav-brand" href="#hero">
          <span className="nav-mark">+</span>
          <span className="nav-name">{profile.nameEn}</span>
        </a>

        <nav className="nav-links">
          {navItems.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={active === n.id ? 'is-active' : ''}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-primary nav-cta" href="#contact">
          联系我
        </a>
      </div>
    </header>
  )
}

import { useState, useEffect } from 'react'
import './Nav.css'

const LINKS = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="nav-logo-bracket">&lt;</span>
          <span className="nav-logo-name">RS</span>
          <span className="nav-logo-bracket">/&gt;</span>
        </button>

        <nav className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
          {LINKS.map((l) => (
            <button key={l} className="nav-link" onClick={() => scrollTo(l)}>
              <span className="nav-link-num">{String(LINKS.indexOf(l) + 1).padStart(2, '0')}.</span>
              {l}
            </button>
          ))}
          <a
            className="nav-cta"
            href="mailto:rishabhshukla@outlook.in"
          >
            Hire me
          </a>
        </nav>

        <button
          className={`nav-burger${menuOpen ? ' nav-burger--open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

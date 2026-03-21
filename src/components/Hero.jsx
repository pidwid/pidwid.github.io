import { useEffect, useRef } from 'react'
import './Hero.css'

const COMPANIES = ['Atlassian', 'Google', 'Oracle Cloud', 'Convogenie']

export default function Hero() {
  const cursorRef = useRef(null)

  // Blinking cursor effect via CSS — no JS needed
  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="home">
      {/* Background glows */}
      <div className="hero-glow hero-glow--a" />
      <div className="hero-glow hero-glow--b" />

      <div className="hero-content">
        <p className="hero-greeting">
          <span className="hero-greeting-dot" />
          Available for opportunities
        </p>

        <h1 className="hero-name">
          Rishabh<br />
          <span className="grad-text">Shukla</span>
        </h1>

        <p className="hero-role">
          Cloud Architect <span className="hero-sep">&amp;</span> Software Engineer
        </p>

        <p className="hero-bio">
          5+ years building scalable cloud infrastructure and Gen-AI solutions at
          {' '}<strong>Atlassian</strong>, <strong>Google</strong>, and <strong>Oracle Cloud</strong>.
          I turn complex platform problems into clean, cost-efficient systems.
        </p>

        <div className="hero-stats">
          {[
            { value: '99%',   label: 'CSAT at Atlassian' },
            { value: '$35k+', label: 'Revenue in 3 months' },
            { value: '5h→20m',label: 'Region onboarding time' },
            { value: '2000+', label: 'Platform issues resolved' },
          ].map((s) => (
            <div className="hero-stat" key={s.label}>
              <span className="hero-stat-value grad-text">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-actions">
          <button className="hero-btn hero-btn--primary" onClick={scrollToAbout}>
            View my work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <a className="hero-btn hero-btn--ghost" href="mailto:rishabhshukla@outlook.in">
            Get in touch
          </a>
        </div>

        <div className="hero-companies">
          <span className="hero-companies-label">Previously at</span>
          <div className="hero-companies-list">
            {COMPANIES.map((c) => (
              <span key={c} className="hero-company-tag">{c}</span>
            ))}
          </div>
        </div>
      </div>

      <button className="hero-scroll-hint" onClick={scrollToAbout} aria-label="Scroll down">
        <span className="hero-scroll-line" />
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  )
}

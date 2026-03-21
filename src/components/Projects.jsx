import './Projects.css'

const PROJECTS = [
  {
    featured: true,
    title: 'InterviewPrepHub',
    description:
      'A full-featured engineering interview prep platform with structured topic roadmaps for System Design and LLD, inline QnA practice, progress tracking, bookmarks, and optional Turso DB sync for cross-device persistence.',
    tags: ['React', 'Vite', 'Turso DB', 'Markdown', 'localStorage'],
    metrics: [
      { value: '2', label: 'study tracks' },
      { value: 'Turso', label: 'cloud sync' },
      { value: 'Dark/Light', label: 'theme' },
    ],
    links: {
      live: 'https://pidwid.github.io/InterviewPrepHub/',
      github: 'https://github.com/pidwid/InterviewPrepHub',
    },
    accent: '#7c5cfc',
  },
  {
    title: 'EzPay — AI-Powered HR/Payroll Data Platform',
    description:
      'AI-driven platform that transforms CSVs into intelligent, queryable databases with zero manual configuration. Auto schema inference, primary key detection, pipeline automation, and audit logging for HR and payroll workflows.',
    tags: ['Deno', 'React', 'TypeScript', 'AI', 'Turso', 'AWS S3', 'Pipelines'],
    metrics: [
      { value: '1,860+', label: 'rows validated' },
      { value: '66', label: 'columns inferred' },
      { value: '0-config', label: 'setup required' },
    ],
    links: { github: 'https://github.com/pidwid/EzPay', live: 'https://ezpay.global/' },
    accent: '#00d4ff',
    note: 'Private repo',
  },
  {
    title: 'SaaS AI Platform — Convogenie',
    description:
      'Designed and deployed a scalable SaaS architecture on AWS integrating Claude Anthropic and Gemini LLMs to automate enterprise customer service, lead acquisition, and shopping experiences.',
    tags: ['AWS', 'Claude LLM', 'Gemini', 'TypeScript', 'Microservices'],
    metrics: [
      { value: '80+', label: 'enterprise clients' },
      { value: '$35k+', label: 'initial revenue' },
    ],
    links: { github: null, live: 'https://convogenie.ai/' },
    accent: '#7c5cfc',
    note: 'Private — stealth startup',
  },
  {
    title: 'Support Insights Reporting Tool',
    description:
      'Built at Google — React JS + Java dashboard for support site metrics that improved SLO adherence by 30% and halved Time to First Response. Included a memcached optimisation saving $54k/month.',
    tags: ['React JS', 'Java', 'Memcached', 'Metrics', 'Google'],
    metrics: [
      { value: '30%', label: 'SLO improvement' },
      { value: '$54k/m', label: 'cost saved' },
    ],
    links: { github: null, live: null },
    accent: '#4285F4',
    note: 'Internal — Google',
  },
  {
    title: 'Terraform Region Automation',
    description:
      'At Oracle Cloud — automated the resource creation pipeline for newly launched cloud regions using Terraform, cutting manual onboarding from 5+ hours to 20 minutes.',
    tags: ['Terraform', 'Oracle Cloud', 'IaC', 'Python', 'DevOps'],
    metrics: [
      { value: '5h→20m', label: 'onboarding time' },
      { value: '0', label: 'manual steps' },
    ],
    links: { github: null, live: null },
    accent: '#F80000',
    note: 'Internal — Oracle',
  },
]

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 12L12 2M12 2H6M12 2v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <p className="section-label">Work</p>
      <h2 className="section-title">Projects</h2>
      <div className="section-divider" />

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <article
            className={`proj-card${p.featured ? ' proj-card--featured' : ''}`}
            key={p.title}
            style={{ '--proj-accent': p.accent }}
          >
            {p.featured && (
              <span className="proj-featured-badge">Featured Project</span>
            )}

            <div className="proj-header">
              <h3 className="proj-title">{p.title}</h3>
              {p.note && <span className="proj-note">{p.note}</span>}
            </div>

            <p className="proj-desc">{p.description}</p>

            {p.metrics && (
              <div className="proj-metrics">
                {p.metrics.map((m) => (
                  <div className="proj-metric" key={m.label}>
                    <span className="proj-metric-value">{m.value}</span>
                    <span className="proj-metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="proj-tags">
              {p.tags.map((t) => (
                <span className="proj-tag" key={t}>{t}</span>
              ))}
            </div>

            <div className="proj-links">
              {p.links.live && (
                <a className="proj-link" href={p.links.live} target="_blank" rel="noopener noreferrer">
                  <ExternalIcon /> Live demo
                </a>
              )}
              {p.links.github && (
                <a className="proj-link proj-link--ghost" href={p.links.github} target="_blank" rel="noopener noreferrer">
                  <GithubIcon /> Source
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

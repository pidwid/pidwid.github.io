import './Skills.css'

const SKILL_GROUPS = [
  {
    label: 'Cloud & Infrastructure',
    icon: '☁️',
    color: '#00d4ff',
    skills: ['AWS', 'Oracle Cloud', 'Docker', 'Kubernetes', 'Terraform (IaC)', 'CI/CD'],
  },
  {
    label: 'AI & Machine Learning',
    icon: '🤖',
    color: '#7c5cfc',
    skills: ['Generative AI (LLMs)', 'Claude Anthropic', 'Gemini', 'Vector DB', 'Agentic Workflows'],
  },
  {
    label: 'Backend & Databases',
    icon: '🗄️',
    color: '#f59e0b',
    skills: ['Java', 'Python', 'Microservices', 'MySQL', 'Postgres', 'MongoDB', 'Memcached', 'Turso'],
  },
  {
    label: 'Frontend',
    icon: '⚡',
    color: '#34d399',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Vite', 'Figma'],
  },
  {
    label: 'DevOps & Testing',
    icon: '🔧',
    color: '#f87171',
    skills: ['Selenium', 'Test Automation', 'DevOps On-call', 'Technical Troubleshooting', 'Deno'],
  },
]

const AWARDS = [
  {
    title: 'Hackathon Winner',
    org: 'Atlassian',
    desc: 'Built rapid-exit system for sensitive web pages — won company-wide internal hackathon.',
    icon: '🏆',
  },
  {
    title: 'Care for the Business Award',
    org: 'Google, 2021 Q1',
    desc: 'Recognized for onboarding and training 20+ vendors and 150+ Nooglers.',
    icon: '🌟',
  },
  {
    title: '4 Manager/Director Awards',
    org: 'Google',
    desc: 'Plus 10+ peer awards for contributions across multiple Google projects.',
    icon: '🎖️',
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <p className="section-label">Expertise</p>
      <h2 className="section-title">Skills & Recognition</h2>
      <div className="section-divider" />

      <div className="skills-grid">
        {SKILL_GROUPS.map((g) => (
          <div className="skill-group" key={g.label} style={{ '--grp-color': g.color }}>
            <div className="skill-group-header">
              <span className="skill-group-icon">{g.icon}</span>
              <span className="skill-group-label">{g.label}</span>
            </div>
            <div className="skill-pills">
              {g.skills.map((s) => (
                <span className="skill-pill" key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="awards-row">
        {AWARDS.map((a) => (
          <div className="award-card" key={a.title}>
            <span className="award-icon">{a.icon}</span>
            <div>
              <p className="award-title">{a.title}</p>
              <p className="award-org">{a.org}</p>
              <p className="award-desc">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

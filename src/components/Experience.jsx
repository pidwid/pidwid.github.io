import "./Experience.css";

const JOBS = [
  {
    company: "Atlassian",
    role: "Technical Engineer",
    period: "Jan 2025 – Present",
    type: "Full-time",
    color: "#0052CC",
    highlights: [
      "Technical consultant for enterprise users across EMEA, supporting Atlassian AI (Rovo), Trello integrations and complex escalations.",
      "Architected agentic workflow solutions and resolved 200+ unique enterprise escalations maintaining a 99% CSAT score.",
      "Built a rapid-exit system for sensitive web pages to protect domestic violence victims — won an internal company-wide hackathon.",
    ],
    metrics: [
      { value: "200+", label: "escalations managed" },
      { value: "99%", label: "CSAT score" },
      { value: "1st", label: "hackathon win" },
    ],
    tags: ["AI/Rovo", "Trello", "Enterprise Support", "EMEA"],
  },
  {
    company: "Convogenie",
    role: "Software Engineer",
    badge: "Founding Member",
    period: "Jan 2024 – Present",
    type: "Startup",
    color: "#7c5cfc",
    highlights: [
      "Designed and deployed a highly scalable SaaS architecture on AWS integrating Claude Anthropic and Gemini LLMs for enterprise customer service and lead acquisition.",
      "Led technical onboarding and solution deployment for business clients, acquiring 80+ customers in 3 months and generating over $35,000 in initial revenue.",
    ],
    metrics: [
      { value: "80+", label: "customers in 3 months" },
      { value: "$35k+", label: "initial revenue" },
    ],
    tags: ["AWS", "Claude LLM", "Gemini", "SaaS", "TypeScript"],
  },
  {
    company: "Oracle Cloud",
    role: "Software Engineer",
    period: "Jan 2022 – Dec 2023",
    type: "Full-time",
    color: "#F80000",
    highlights: [
      "Developed microservices and features (custom machine shapes, version set stage) for Oracle Cloud Portal using React JS, Python, and Java.",
      "Led canary automation testing and deployment using Selenium for 24/7 monitoring with swift bug detection.",
      "Built automated region creation with Terraform — reduced new region onboarding from 5+ hours to 20 minutes.",
      "Filled UX design gap independently using Figma, enabling the product to ship before deadline.",
    ],
    metrics: [
      { value: "5h→20m", label: "region onboarding" },
      { value: "100+", label: "Sev3 tickets resolved" },
    ],
    tags: ["React JS", "Java", "Python", "Terraform", "Selenium", "Figma"],
  },
  {
    company: "Google",
    role: "Resident Engineer",
    period: "Feb 2020 – Dec 2021",
    type: "Full-time",
    color: "#4285F4",
    highlights: [
      "Built a Support Insights Reporting Tool (React JS + Java) that improved SLO adherence by 30% and cut Time to First Response by 50%.",
      "Implemented a memcached solution that reduced monthly operational cost from ~$60,000 to ~$6,000.",
      "Partnered with the Google Pay team to fortify risk and fraud management protocols.",
      "Resolved 2000+ platform issues across Linux, Windows, macOS, Android, iOS and ChromeOS with a 99.6% CSAT.",
    ],
    metrics: [
      { value: "30%", label: "SLO adherence increase" },
      { value: "$54k/m", label: "cost savings" },
      { value: "2000+", label: "issues resolved" },
      { value: "99.6%", label: "CSAT" },
    ],
    tags: ["React JS", "Java", "Memcached", "Google Pay", "DevOps"],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience" data-ga-section="experience">
      <p className="section-label">Career</p>
      <h2 className="section-title">Work Experience</h2>
      <div className="section-divider" />

      <div className="exp-timeline">
        {JOBS.map((job, i) => (
          <article
            className="exp-card"
            key={job.company}
            style={{ "--company-color": job.color }}
          >
            <div className="exp-card-header">
              <div className="exp-card-left">
                <span className="exp-company" style={{ color: job.color }}>
                  {job.company}
                </span>
                {job.badge && <span className="exp-badge">{job.badge}</span>}
                <h3 className="exp-role">{job.role}</h3>
              </div>
              <div className="exp-card-right">
                <span className="exp-period">{job.period}</span>
                <span className="exp-type">{job.type}</span>
              </div>
            </div>

            {job.metrics && (
              <div className="exp-metrics">
                {job.metrics.map((m) => (
                  <div className="exp-metric" key={m.label}>
                    <span className="exp-metric-value">{m.value}</span>
                    <span className="exp-metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            )}

            <ul className="exp-highlights">
              {job.highlights.map((h, j) => (
                <li key={j}>
                  <span className="exp-bullet" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="exp-tags">
              {job.tags.map((t) => (
                <span className="exp-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

import { skillLevels, certificates, skillSummary } from '../data/content'
import Reveal from './Reveal'

const skillIcons = [
  <path key="s1" d="M7 3.5h7L18.5 8v11a1.5 1.5 0 0 1-1.5 1.5H7a1.5 1.5 0 0 1-1.5-1.5V5A1.5 1.5 0 0 1 7 3.5Zm2 6h6M9 13h6M9 16.5h4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />,
  <g key="s2" strokeWidth="1.5"><rect x="3.5" y="4" width="17" height="16" rx="1.5" /><path d="M3.5 9h17M8 4v5" /></g>,
  <g key="s3" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="4.5" width="6" height="5" rx="1" /><rect x="15" y="4.5" width="6" height="5" rx="1" /><rect x="9" y="15" width="6" height="5" rx="1" /><path d="M9 7h6M18 9.5v3a2 2 0 0 1-2 2h-4M12 14.5v.5" /></g>,
  <g key="s4" strokeWidth="1.5" strokeLinecap="round"><ellipse cx="12" cy="5.5" rx="7.5" ry="2.5" /><path d="M4.5 5.5v13c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5v-13M4.5 12c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5" /></g>
]

const combined = skillLevels.map((s, i) => ({
  icon: skillIcons[i],
  name: s.name,
  desc: s.note
}))

function SkillCard({ item }) {
  return (
    <div className="combined-card surface">
      <span className="combined-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          {item.icon}
        </svg>
      </span>
      <h4 className="combined-name">{item.name}</h4>
      <p className="combined-desc">{item.desc}</p>
    </div>
  )
}

function CertCard({ c }) {
  return (
    <div className={`cert-card surface ${c.placeholder ? 'is-placeholder' : ''}`}>
      <span className="cert-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="9" r="5" strokeWidth="1.5" />
          <path d="M9 13.5 7.5 21 12 19 16.5 21 15 13.5" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </span>
      <h4 className="cert-name">{c.name}</h4>
      <p className="cert-issuer">{c.issuer}</p>
      <span className="cert-year">{c.year}</span>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-ambient" aria-hidden="true">
        <div className="ambient-veil" />
      </div>

      <div className="container">
        <Reveal className="section-head">
          <span className="section-index">03</span>
          <h2 className="section-title">技能 · 证书</h2>
          <span className="section-note">Skills &amp; Certificates</span>
        </Reveal>

        <div className="skills-layout">
          <Reveal className="skills-intro">
            <h3 className="skills-intro-title">我的技能知识</h3>
            <ul className="skills-summary">
              {skillSummary.map((item) => (
                <li key={item.label}>
                  <span className="skills-summary-label">{item.label}</span>
                  <p className="skills-summary-text">{item.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="skills-marquee">
            <div className="marquee-col marquee-down">
              <div className="marquee-track">
                <div className="marquee-group">
                  {combined.map((item) => <SkillCard key={`${item.name}-a`} item={item} />)}
                </div>
                <div className="marquee-group">
                  {combined.map((item) => <SkillCard key={`${item.name}-b`} item={item} />)}
                </div>
              </div>
            </div>
            <div className="marquee-col marquee-up">
              <div className="marquee-track">
                <div className="marquee-group">
                  {certificates.map((c) => <CertCard key={`${c.id}-a`} c={c} />)}
                </div>
                <div className="marquee-group">
                  {certificates.map((c) => <CertCard key={`${c.id}-b`} c={c} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

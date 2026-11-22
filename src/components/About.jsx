import { profile } from '../data/content'
import Reveal from './Reveal'

const keywords = ['需求分析', 'PRD 文档', '业务流程', '高保真原型', 'SQL', 'Excel', '数据可视化']

const contactRows = [
  {
    label: '邮箱',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: (
      <path
        d="M3 6.5 12 13l9-6.5M4 5.5h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1Z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    )
  },
  {
    label: '电话',
    value: profile.phone,
    href: `tel:${profile.phone}`,
    icon: (
      <path
        d="M6.5 3.8h3l1.6 4-2.1 1.5a12 12 0 0 0 5.2 5.2l1.5-2.1 4 1.6v3a1.7 1.7 0 0 1-1.9 1.7A15.6 15.6 0 0 1 4.8 5.7 1.7 1.7 0 0 1 6.5 3.8Z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    )
  },
  {
    label: '城市',
    value: profile.location,
    href: null,
    icon: (
      <>
        <path
          d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.6" strokeWidth="1.5" />
      </>
    )
  }
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-ambient" aria-hidden="true">
        <div className="ambient-veil" />
      </div>

      <div className="container">
        <Reveal className="section-head">
          <span className="section-index">01</span>
          <h2 className="section-title">个人信息</h2>
          <span className="section-note">{profile.location}</span>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-portrait">
            <div className="portrait-frame surface">
              <span className="frame-corner tl" />
              <span className="frame-corner tr" />
              <span className="frame-corner bl" />
              <span className="frame-corner br" />
              {profile.portrait ? (
                <img className="portrait-img" src={profile.portrait} alt={`${profile.name} 人物图`} />
              ) : (
                <div className="portrait-placeholder">
                  <span className="portrait-name">{profile.nameEn}</span>
                  <span className="portrait-hint">替换为人物图 / 头像</span>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal className="about-body" delay={120}>
            <p className="about-intro">{profile.intro}</p>

            <ul className="about-keywords">
              {keywords.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>

            <ul className="about-contact">
              {contactRows.map((r) => (
                <li className="contact-row" key={r.label}>
                  <span className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                      {r.icon}
                    </svg>
                  </span>
                  <span className="about-label">{r.label}</span>
                  {r.href ? (
                    <a href={r.href}>{r.value}</a>
                  ) : (
                    <span className="contact-value">{r.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="about-stats">
          {profile.stats.map((s) => (
            <Reveal className="stat surface" key={s.label}>
              <span className="stat-value text-gradient">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { profile } from '../data/content'
import Reveal from './Reveal'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <section id="contact" className="footer">
      <div className="footer-bg" aria-hidden="true">
        <img
          className="footer-video"
          src={`${import.meta.env.BASE_URL}images/contact-bg.jpg`}
          alt=""
          loading="lazy"
        />
        <div className="footer-bg-veil" />
      </div>

      <div className="container footer-inner">
        <Reveal>
          <p className="footer-eyebrow">联系方式 · Contact</p>
          <h2 className="footer-title">
            让我们一起
            <br />
            打造有价值的产品
          </h2>
        </Reveal>

        <Reveal delay={120} className="footer-links">
          <a className="footer-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="footer-meta">
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            <span className="footer-dot" />
            <span>{profile.location}</span>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <a
            className="resume-btn"
            href={`${import.meta.env.BASE_URL}files/resume.docx`}
            target="_blank"
            rel="noopener noreferrer"
          >
            查看简历
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" />
              <path d="M14 3v5h5" />
            </svg>
          </a>
        </Reveal>

        <div className="footer-bottom">
          <span>© {year} {profile.nameEn}. All rights reserved.</span>
          <a href="#hero" className="footer-top">
            回到顶部
          </a>
        </div>
      </div>
    </section>
  )
}

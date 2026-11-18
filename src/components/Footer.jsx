import { useEffect, useRef } from 'react'
import { profile } from '../data/content'
import Reveal from './Reveal'

export default function Footer() {
  const year = new Date().getFullYear()
  const videoRef = useRef(null)

  useEffect(() => {
    const v = videoRef.current
    if (v) v.play().catch(() => {})
  }, [])

  return (
    <section id="contact" className="footer">
      <div className="footer-bg" aria-hidden="true">
        <video
          ref={videoRef}
          className="footer-video"
          src={`${import.meta.env.BASE_URL}videos/contact.mp4`}
          autoPlay
          muted
          loop
          playsInline
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

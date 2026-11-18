import { useEffect, useRef } from 'react'
import { profile } from '../data/content'

const particles = Array.from({ length: 40 }, (_, i) => ({
  left: (i * 37 + 13) % 100,
  top: (i * 53 + 7) % 100,
  size: 2 + (i % 4),
  delay: (i % 10) * 0.5,
  dur: 6 + (i % 6),
  gold: i % 5 !== 0
}))

export default function Hero() {
  const bgRef = useRef(null)
  const particlesRef = useRef(null)
  const spotlightRef = useRef(null)

  useEffect(() => {
    let raf = 0
    const move = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2
        const y = (e.clientY / window.innerHeight - 0.5) * 2
        if (bgRef.current) {
          bgRef.current.style.transform = `translate(${x * 22}px, ${y * 22}px) scale(1.07)`
        }
        if (particlesRef.current) {
          particlesRef.current.style.transform = `translate(${x * 38}px, ${y * 38}px)`
        }
        if (spotlightRef.current) {
          spotlightRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
        }
      })
    }
    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  useEffect(() => {
    const v = bgRef.current && bgRef.current.querySelector('video')
    if (v) {
      v.muted = true
      v.defaultMuted = true
    }
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero-bg" ref={bgRef}>
        <video
          className="hero-video"
          src={`${import.meta.env.BASE_URL}videos/hero.mp4`}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className="hero-veil" />
      <div className="hero-spotlight" ref={spotlightRef} aria-hidden="true" />

      <div className="hero-particles" ref={particlesRef}>
        {particles.map((p, i) => (
          <span
            className={`hero-particle ${p.gold ? 'is-gold' : 'is-azure'}`}
            key={i}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`
            }}
          />
        ))}
      </div>

      <div className="container hero-inner">
        <p className="hero-eyebrow">欢迎来到我的网页 · Welcome</p>
        <h1 className="hero-title">
          {profile.name}
          <span className="hero-role">{profile.roles.join(' / ')}</span>
        </h1>
        <p className="hero-sub">
          信息管理与信息系统专业，专注需求拆解、业务流程与数据驱动，
          用产品思维把想法落地为可验证的方案。
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">
            联系我
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a className="btn-round" href="#projects">
            <span className="round-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5.5v13l11-6.5-11-6.5Z" />
              </svg>
            </span>
            查看项目
          </a>
        </div>
      </div>

      <a className="hero-scroll" href="#about" aria-label="向下滚动">
        <span />
      </a>
    </section>
  )
}

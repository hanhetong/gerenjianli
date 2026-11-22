import { useState, useRef, useEffect, useCallback } from 'react'
import { projects } from '../data/content'
import Reveal from './Reveal'

const AUTOPLAY_MS = 4500

export default function Projects() {
  const [active, setActive] = useState(0)
  const [step, setStep] = useState(150)
  const count = projects.length
  const dragStart = useRef(null)
  const hoverRef = useRef(false)
  const timerRef = useRef(null)
  const carouselRef = useRef(null)

  // 间距随轮播宽度自适应：宽屏向两侧箭头铺开并保留小间隙，窄屏保持最小间距
  useEffect(() => {
    const measure = () => {
      const el = carouselRef.current
      if (!el) return
      const W = el.clientWidth
      const Wa = Math.min(480, W * 0.5)
      const Wf = 0.76 * Wa
      const avail = W / 2 - 64
      const s = (avail - 30 - Wf / 2) / 2
      setStep(Math.max(120, Math.min(300, s)))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const startTimer = useCallback(() => {
    clearTimer()
    timerRef.current = setInterval(() => {
      if (!hoverRef.current) {
        setActive((a) => ((a + 1) % count))
      }
    }, AUTOPLAY_MS)
  }, [count, clearTimer])

  const go = useCallback((i) => {
    setActive(((i % count) + count) % count)
    startTimer()
  }, [count, startTimer])

  const prev = () => go(active - 1)
  const next = () => go(active + 1)

  useEffect(() => {
    startTimer()
    return clearTimer
  }, [startTimer, clearTimer])

  const onPointerDown = (e) => {
    dragStart.current = e.clientX
  }

  const onPointerUp = (e) => {
    if (dragStart.current == null) return
    const dx = e.clientX - dragStart.current
    if (Math.abs(dx) > 60) {
      if (dx < 0) next()
      else prev()
    }
    dragStart.current = null
  }

  // 环形最短偏移，用于两侧卡片定位
  const offsetOf = (i) => {
    let d = i - active
    if (d > count / 2) d -= count
    if (d < -count / 2) d += count
    return d
  }

  return (
    <section id="projects" className="section projects">
      <div className="section-ambient" aria-hidden="true">
        <div className="ambient-veil" />
      </div>

      <div className="container">
        <Reveal className="section-head">
          <span className="section-index">02</span>
          <h2 className="section-title">项目作品</h2>
          <span className="section-note">Selected Projects</span>
        </Reveal>

        <Reveal className="project-carousel-wrap">
          <div
            ref={carouselRef}
            className="project-carousel"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onMouseEnter={() => { hoverRef.current = true; clearTimer() }}
            onMouseLeave={() => { hoverRef.current = false; startTimer() }}
          >
            {projects.map((p, i) => {
              const d = offsetOf(i)
              const abs = Math.abs(d)
              const cls = abs === 0 ? 'is-active' : abs === 1 ? 'is-side' : abs === 2 ? 'is-far' : 'is-hidden'
              const scale = abs === 0 ? 1 : abs === 1 ? 0.88 : abs === 2 ? 0.76 : 0
              return (
                <article
                  key={p.id}
                  className={`project-card surface ${cls}${p.link ? ' is-linked' : ''}`}
                  onClick={() => {
                    if (p.link) {
                      window.open(import.meta.env.BASE_URL + p.link, '_blank', 'noopener,noreferrer')
                    } else if (abs !== 0) {
                      go(i)
                    }
                  }}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${d * step}px) scale(${scale})`
                  }}
                >
                  <div className={`project-cover tone-${p.tone}`}>
                    {p.image ? (
                      <img src={p.image} alt={p.title} />
                    ) : (
                      <div className="cover-placeholder">
                        <span className="cover-index">{p.index}</span>
                        <span className="cover-hint">作品图片占位</span>
                      </div>
                    )}
                  </div>

                  <div className="project-body">
                    <div className="project-meta">
                      <span className="project-category">{p.category}</span>
                      <span className="project-year">{p.year}</span>
                    </div>
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-desc">{p.description}</p>

                    <ul className="project-tags">
                      {p.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>

                    {p.link ? (
                      <span className="project-link-hint">
                        点击查看可交互原型
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M7 17 17 7M9 7h8v8" />
                        </svg>
                      </span>
                    ) : null}
                  </div>
                </article>
              )
            })}

            <button className="carousel-arrow prev" onClick={prev} aria-label="上一个项目">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>
            <button className="carousel-arrow next" onClick={next} aria-label="下一个项目">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="carousel-dots">
            {projects.map((p, i) => (
              <button
                key={p.id}
                className={i === active ? 'is-active' : ''}
                onClick={() => go(i)}
                aria-label={p.title}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

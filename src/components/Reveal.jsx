import { useEffect, useRef } from 'react'

export default function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let done = false
    let intervalId = null

    const isInView = () => {
      const rect = el.getBoundingClientRect()
      return rect.top < window.innerHeight * 0.92 && rect.bottom > 0
    }

    const check = () => {
      if (done || !isInView()) return
      done = true
      window.setTimeout(() => el.classList.add('is-visible'), delay)
      teardown()
    }

    const teardown = () => {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
      if (intervalId) window.clearInterval(intervalId)
    }

    check()
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    // 定时器轮询兜底：覆盖不派发 scroll / 不触发观察器与帧回调的环境
    intervalId = window.setInterval(check, 250)

    return teardown
  }, [delay])

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}

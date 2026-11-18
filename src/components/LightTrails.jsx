// 弯曲金色光带：柔和底光 + 流动光点，模拟参考图中的螺旋光线
const paths = [
  {
    d: 'M-60 470 C 180 330, 320 520, 480 340 C 600 210, 720 180, 860 240',
    dur: 7
  },
  {
    d: 'M-60 540 C 200 420, 360 580, 520 420 C 640 300, 740 280, 860 320',
    dur: 9
  },
  {
    d: 'M-60 380 C 160 260, 300 420, 460 260 C 580 140, 720 120, 860 170',
    dur: 11
  }
]

export default function LightTrails({ className = '' }) {
  return (
    <div className={`light-trails ${className}`} aria-hidden="true">
      <svg viewBox="0 0 800 600" fill="none" preserveAspectRatio="xMidYMid slice">
        {paths.map((p, i) => (
          <g key={i}>
            <path d={p.d} stroke="rgba(20,41,74,0.12)" strokeWidth="1.5" />
            <path
              className="trail-flow"
              d={p.d}
              stroke="#1d3a63"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeDasharray="3 16"
              style={{ animationDuration: `${p.dur}s` }}
            />
          </g>
        ))}
      </svg>
    </div>
  )
}

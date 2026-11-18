// 发光蝴蝶：金色半透明翅膀 + 扇动 + 飞舞，用于各页面氛围装饰
export default function Butterfly({ style }) {
  return (
    <span className="butterfly" style={style}>
      <svg className="butterfly-svg" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <g className="bf-wing" fill="#5f8fc9">
          {/* 上翅 */}
          <path d="M50 40 C30 20 8 24 10 42 C12 54 32 52 50 48 Z" opacity="0.92" />
          <path d="M50 40 C70 20 92 24 90 42 C88 54 68 52 50 48 Z" opacity="0.92" />
          {/* 下翅 */}
          <path d="M50 50 C34 52 24 62 30 72 C38 80 48 66 50 58 Z" opacity="0.8" />
          <path d="M50 50 C66 52 76 62 70 72 C62 80 52 66 50 58 Z" opacity="0.8" />
        </g>
        {/* 身体与触角 */}
        <path
          d="M50 36 C46 30 42 28 40 26M50 36 C54 30 58 28 60 26"
          stroke="#14294a"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <line x1="50" y1="36" x2="50" y2="70" stroke="#14294a" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    </span>
  )
}

import { useEffect, useState } from 'react'

// Product cycle diagram for the home hero. Nodes sit on one rectangular loop, 220 units apart,
// so a dot travelling the loop in DUR seconds reaches a node every DUR/6 seconds; node highlights use the same rhythm.
const DUR = 9
// Build is drawn larger and always highlighted: it is the step that sets this practice apart.
const KEY_SCALE = 1.2
const LOOP = 'M60,60 H500 V280 H60 Z'
const nodes = [
  { x: 60, y: 60, label: 'Discover', sub: 'research' },
  { x: 280, y: 60, label: 'Define', sub: 'strategy' },
  { x: 500, y: 60, label: 'Design', sub: 'ux · ui' },
  { x: 500, y: 280, label: 'Build', sub: 'working code', key: true },
  { x: 280, y: 280, label: 'Launch', sub: 'delivery' },
  { x: 60, y: 280, label: 'Learn', sub: 'real usage' },
]

export default function HeroCycle() {
  const [motion, setMotion] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setMotion(!mq.matches)
  }, [])

  return (
    <svg className="hero-cycle" viewBox="0 0 560 340" role="img" aria-label="Product cycle: discover, define, design, build in working code, launch, learn, and back to discover">
      <path d={LOOP} className="hc-line" />
      {motion && <path d={LOOP} className="hc-flow" />}

      <text x="280" y="166" className="hc-center">continuous</text>
      <text x="280" y="186" className="hc-center">improvement ↻</text>

      {motion && [0, 1 / 3, 2 / 3].map((offset, i) => (
        <circle key={i} r={i === 0 ? 4 : 3} className={i === 0 ? 'hc-dot lead' : 'hc-dot'}>
          <animateMotion dur={`${DUR}s`} repeatCount="indefinite" path={LOOP} begin={`-${offset * DUR}s`} />
        </circle>
      ))}

      {nodes.map((n, i) => (
        <g key={n.label} transform={n.key
          ? `translate(${n.x - 54 * KEY_SCALE} ${n.y - 24 * KEY_SCALE}) scale(${KEY_SCALE})`
          : `translate(${n.x - 54} ${n.y - 24})`}>
          <rect width="108" height="48" rx="7" className={n.key ? 'hc-node key' : 'hc-node'}
            style={motion && !n.key ? { animationDelay: `${(i * DUR) / 6}s`, animationDuration: `${DUR}s` } : undefined} />
          <text x="54" y="22" className={n.key ? 'hc-label key' : 'hc-label'}>{n.label}</text>
          <text x="54" y="37" className={n.key ? 'hc-sub key' : 'hc-sub'}>{n.sub}</text>
        </g>
      ))}
    </svg>
  )
}

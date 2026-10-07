import Reveal from '../components/Reveal'
import { cases } from '../data'

const visible = cases.filter((c) => !c.hidden && c.href)

export default function NotFound() {
  return (
    <main className="nf wrap">
      <Reveal as="p" className="label">404</Reveal>
      <Reveal as="h1">This page took a <em>different path</em>.</Reveal>
      <Reveal as="p" className="nf-sub">The link may be outdated, or the page has moved. These are good places to continue.</Reveal>
      <Reveal className="nf-actions">
        <a href="/" className="btn">Back to home</a>
        <a href="/experience" className="nf-link">Experience →</a>
        <a href="/#contact" className="nf-link">Contact →</a>
      </Reveal>
      <Reveal as="ul" className="nf-list">
        {visible.map((c) => (
          <li key={c.id}>
            <a href={c.href}>
              <span className="nf-name">{c.product}</span>
              <span className="nf-cat">{c.category}</span>
              <span aria-hidden="true">→</span>
            </a>
          </li>
        ))}
      </Reveal>
    </main>
  )
}

import { useEffect, useLayoutEffect, useState } from 'react'
import Reveal from './components/Reveal'
import CaseStudy from './components/CaseStudy'
import ContactLinks from './components/ContactLinks'
import HeroCycle from './components/HeroCycle'
import MyClinic360 from './pages/MyClinic360'
import Medco from './pages/Medco'
import Uirajarr from './pages/Uirajarr'
import About from './pages/About'
import { profile, heroCapabilities, facts, cases, principles, process, domains, coreCapabilities, builds } from './data'

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="wrap">
        <a href="#top" className="mark" aria-label={profile.name}>Rafaelle <em>Weran</em></a>
        <div className="nav-right">
          <ul>
            <li><a href="#work">Work</a></li>
            <li><a href="#/about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            {profile.resume && <li><a href={profile.resume}>Resume</a></li>}
          </ul>
          <a href="#contact" className="btn">Let's talk</a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header className="hero wrap">
      <div className="hero-top">
        <Reveal as="h1">I design clarity into <em>complex</em> products.</Reveal>
        <Reveal className="hero-cycle-wrap"><HeroCycle /></Reveal>
      </div>
      <div className="hero-foot">
        <Reveal>
          <p className="hero-lead">
            Senior Product Designer and Design Engineer working from product strategy and UX through
            interface design and functional implementation.
          </p>
          <p className="hero-second">I design, prototype, and build digital products end-to-end.</p>
          <p className="hero-domains">{heroCapabilities.join(' · ')}</p>
        </Reveal>
        <Reveal className="facts">
          {facts.map((f) => (
            <div key={f.label}><b>{f.value}</b><span>{f.label}</span></div>
          ))}
          <div><b className="loc">Edmonton, Canada</b><span>Remote worldwide</span></div>
        </Reveal>
      </div>
    </header>
  )
}

function SectionHead({ title, meta }) {
  return (
    <div className="sec-head">
      <Reveal as="h2">{title}</Reveal>
      {meta && <span className="label">{meta}</span>}
    </div>
  )
}

const visibleCases = cases.filter((c) => !c.hidden)

function Home() {
  return (
    <>
      <Hero />

      <section id="work">
        <div className="wrap">
          <SectionHead title="Selected work" meta={`${visibleCases.length} projects`} />
          <div className="cases">
            {visibleCases.map((c, i) => <CaseStudy key={c.id} index={i} item={c} />)}
          </div>

          <div id="builds" className="builds">
            <div className="builds-head">
              <Reveal as="h3">Selected Builds</Reveal>
              <Reveal as="p">A selection of digital experiences I designed and implemented in code.</Reveal>
            </div>
            <div className="builds-grid">
              {builds.map((b) => (
                <Reveal as="article" key={b.name} className={b.video ? 'build has-media' : 'build'}>
                  {b.video && (
                    <a href={b.url} target="_blank" rel="noreferrer" className="build-media" aria-label={`Open ${b.name} live website`}>
                      <video
                        poster={b.poster} autoPlay muted loop playsInline preload="metadata" aria-hidden="true"
                        onError={(e) => {
                          // Fall back to MP4 if the browser fails to decode the WebM.
                          const v = e.currentTarget
                          if (!v.dataset.fallback) { v.dataset.fallback = '1'; v.src = b.video; v.play().catch(() => {}) }
                        }}
                      >
                        {b.videoWebm && <source src={b.videoWebm} type="video/webm" />}
                        <source src={b.video} type="video/mp4" />
                      </video>
                    </a>
                  )}
                  <p className="label">{b.type}</p>
                  <h4>{b.name}</h4>
                  <p className={b.description ? 'build-desc' : 'build-desc pending'}>
                    {b.description || 'Description to be added.'}
                  </p>
                  <dl>
                    <div><dt>Role</dt><dd>{b.role}</dd></div>
                    <div><dt>Scope</dt><dd className={b.scope ? '' : 'pending'}>{b.scope || 'To be added'}</dd></div>
                  </dl>
                  {b.url
                    ? <a className="build-link" href={b.url} target="_blank" rel="noreferrer">View live website ↗</a>
                    : <span className="build-link pending">Live link coming soon</span>}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="approach">
        <div className="wrap">
          <SectionHead title="How I work" />
          <div className="caps">
            {principles.map((c, i) => (
              <Reveal key={c.title} className="cap">
                <span className="label">{String(i + 1).padStart(2, '0')}</span>
                <h4>{c.title}</h4>
                <p>{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrap about">
          <Reveal as="blockquote">
            The interface is only <em>one part</em> of the product.
          </Reveal>
          <Reveal className="body">
            <p>
              I work across the full product lifecycle, from discovery and product definition to UX/UI,
              implementation, delivery, and continuous improvement.
            </p>
            <p>
              My work often goes beyond Figma. I build functional interfaces and product experiences so
              ideas can be tested, validated, and handed to engineering in a much more mature state.
            </p>
            <ol className="lifecycle">
              {process.map((s) => <li key={s}>{s}</li>)}
            </ol>
          </Reveal>
        </div>
      </section>

      <section id="experience">
        <div className="wrap">
          <SectionHead title="Experience" />
          <div className="exp">
            <Reveal>
              <p className="label">Domains</p>
              <ul className="exp-list">{domains.map((d) => <li key={d}>{d}</li>)}</ul>
            </Reveal>
            <Reveal>
              <p className="label">Core capabilities</p>
              <ul className="exp-list">{coreCapabilities.map((c) => <li key={c}>{c}</li>)}</ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="wrap">
          <Reveal as="h2">
            Have a complex product?<br /><a href={`mailto:${profile.email}`}>Let's talk.</a>
          </Reveal>
          <Reveal as="p" className="contact-sub">
            Open to Senior Product Design opportunities, product collaborations, and remote projects.
          </Reveal>
          <Reveal><ContactLinks /></Reveal>
          <footer>
            <span>© 2026 {profile.name}</span>
            <ul>
              <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
              {profile.resume && <li><a href={profile.resume}>Resume</a></li>}
              <li><a href={`mailto:${profile.email}`}>Email</a></li>
            </ul>
          </footer>
        </div>
      </section>
    </>
  )
}

// Minimal hash router: "#/work/<id>" renders a case study; any other hash is a home anchor.
const pages = { '#/work/myclinic360': MyClinic360, '#/work/medco': Medco, '#/work/uirajarr': Uirajarr, '#/about': About }
const currentPage = () => pages[window.location.hash] || null

export default function App() {
  const [Page, setPage] = useState(() => currentPage())

  useEffect(() => {
    const onHash = () => setPage(() => currentPage())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // After switching views, jump to the anchor (home) or to the top (case study).
  useLayoutEffect(() => {
    const hash = window.location.hash
    const target = !Page && hash.length > 1 && !hash.startsWith('#/') && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [Page])

  return (
    <>
      <Nav />
      <div id="top" />
      {Page ? <Page /> : <Home />}
    </>
  )
}

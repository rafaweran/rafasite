import { useEffect, useLayoutEffect, useState } from 'react'
import Reveal from './components/Reveal'
import CaseStudy from './components/CaseStudy'
import ContactLinks from './components/ContactLinks'
import HeroCycle from './components/HeroCycle'
import MyClinic360 from './pages/MyClinic360'
import Medco from './pages/Medco'
import Uirajarr from './pages/Uirajarr'
import About from './pages/About'
import Experience from './pages/Experience'
import NotFound from './pages/NotFound'
import { routes } from './seo'
import { profile, heroCapabilities, facts, cases, experience, builds } from './data'

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
        <div className="nav-right">
          <ul>
            <li><a href="/#work">Work</a></li>
            <li><a href="/experience">Experience</a></li>
            <li><a href="/about">About</a></li>
          </ul>
          <a href="/#contact" className="btn">Let's talk</a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header className="hero wrap">
      <div className="hero-top">
        <Reveal as="h1"><span className="hero-name">Hi, I’m Rafaelle.</span><em>Senior Product Designer</em><span className="hero-sub-title">Design Engineer</span></Reveal>
        <Reveal className="hero-cycle-wrap"><HeroCycle /></Reveal>
      </div>
      <div className="hero-foot">
        <Reveal>
          <p className="hero-lead">{profile.headline}</p>
          <p className="hero-second">I bridge product strategy, systems thinking, UX/UI, and front-end implementation.</p>
          <p className="hero-domains">{heroCapabilities.join(' · ')}</p>
        </Reveal>
        <Reveal className="facts">
          {facts.map((f) => (
            <div key={f.label}><b>{f.value}</b><span>{f.label}</span></div>
          ))}
          <div>
            <b className="loc">Edmonton, Canada</b>
            <span>{profile.workEligibility}</span>
          </div>
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

        </div>
      </section>

      <section id="builds" className="builds-sec">
        <div className="wrap">
          <div className="builds">
            <div className="builds-head">
              <Reveal as="h3">Other work</Reveal>
              <Reveal as="p">Websites I designed and built in code, end to end.</Reveal>
            </div>
            <div className="builds-grid">
              {builds.map((b) => (
                <Reveal as="article" key={b.name} className={b.video ? 'build has-media' : 'build'}>
                  {b.video && (
                    <a href={b.url} target="_blank" rel="noreferrer" className="build-media" aria-label={`Open ${b.name} live website`}>
                      <video
                        poster={b.poster} autoPlay muted loop playsInline preload="metadata" aria-hidden="true"
                        // Slower, calmer scroll than the raw recording.
                        ref={(v) => { if (v) { v.defaultPlaybackRate = 0.6; v.playbackRate = 0.6 } }}
                        onLoadedMetadata={(e) => { e.currentTarget.playbackRate = 0.6 }}
                        onPlay={(e) => { e.currentTarget.playbackRate = 0.6 }}
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
                  <p className="build-desc">{b.description}</p>
                  <dl>
                    <div><dt>Role</dt><dd>{b.role}</dd></div>
                    <div><dt>Scope</dt><dd>{b.scope}</dd></div>
                  </dl>
                  <a className="build-link" href={b.url} target="_blank" rel="noreferrer">View live website ↗</a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="wrap">
          <SectionHead title="Experience" meta="2010 to Present" />
          <ul className="exp-sum">
            {experience.filter((e) => !e.compact).map((e) => (
              <Reveal as="li" key={e.org}>
                <span className="exp-sum-period">{e.period}</span>
                <span className="exp-sum-role">{e.role}</span>
                <span className="exp-sum-org">{e.org}</span>
              </Reveal>
            ))}
          </ul>
          <Reveal as="a" href="/experience" className="exp-more">Full experience and CV →</Reveal>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="wrap">
          <Reveal as="h2">
            Looking for a Senior Product Designer?<br /><a href={`mailto:${profile.email}`}>Let's talk.</a>
          </Reveal>
          <Reveal as="p" className="contact-sub">
            I take complex products from ambiguity to delivery. Open to full-time, in-house Senior Product Designer roles.
          </Reveal>
          <Reveal><ContactLinks /></Reveal>
          <footer>
            <span>© 2026 {profile.name}</span>
            <ul>
              <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="/experience">Experience</a></li>
              <li><a href={`mailto:${profile.email}`}>Email</a></li>
            </ul>
          </footer>
        </div>
      </section>
    </>
  )
}

// Minimal path router. Old "#/work/<id>" links are redirected to "/work/<id>"; "/#anchor" scrolls on the home page.
const pages = {
  '/work/myclinic360': MyClinic360, '/work/medco': Medco, '/work/uirajarr': Uirajarr,
  '/about': About, '/experience': Experience,
}
const currentPath = () => window.location.pathname.replace(/\/+$/, '') || '/'

function applyHead(path) {
  const r = routes[path] || routes['/404']
  document.title = r.title
  const set = (sel, v) => document.querySelector(sel)?.setAttribute(sel.startsWith('link') ? 'href' : 'content', v)
  const url = `https://www.rafaelleweran.com${path === '/' ? '/' : path}`
  set('meta[name="description"]', r.description)
  set('meta[property="og:title"]', r.title)
  set('meta[property="og:description"]', r.description)
  set('meta[property="og:url"]', url)
  set('link[rel="canonical"]', url)
}

if (window.location.hash.startsWith('#/')) {
  window.history.replaceState(null, '', window.location.hash.slice(1))
}
// "/work" is the projects index on the home page.
if (window.location.pathname.replace(/\/+$/, '') === '/work') {
  window.history.replaceState(null, '', '/#work')
}

export default function App() {
  const [path, setPath] = useState(currentPath)
  const Page = pages[path] || (path === '/' ? null : NotFound)

  useEffect(() => {
    const sync = () => setPath(currentPath())
    // Intercept same-origin links so navigation stays client-side.
    const onClick = (e) => {
      const a = e.target.closest('a')
      if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || a.target || a.hasAttribute('download')) return
      const url = new URL(a.href, window.location.href)
      if (url.origin !== window.location.origin || /\.[a-z0-9]+$/i.test(url.pathname)) return
      e.preventDefault()
      const samePage = url.pathname === window.location.pathname
      window.history.pushState(null, '', url.pathname + url.hash)
      if (samePage && url.hash) document.getElementById(url.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      else if (samePage) window.scrollTo({ top: 0, behavior: 'smooth' })
      else sync()
    }
    window.addEventListener('popstate', sync)
    document.addEventListener('click', onClick)
    return () => { window.removeEventListener('popstate', sync); document.removeEventListener('click', onClick) }
  }, [])

  // After switching views, jump to the anchor (home) or to the top, and update head tags.
  useLayoutEffect(() => {
    applyHead(path)
    const hash = window.location.hash
    const target = hash.length > 1 && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [path])

  return (
    <>
      <Nav />
      <div id="top" />
      {Page ? <Page /> : <Home />}
    </>
  )
}

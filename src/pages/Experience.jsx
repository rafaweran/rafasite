import Reveal from '../components/Reveal'
import Craft from '../components/Craft'
import ContactLinks from '../components/ContactLinks'
import { profile, experience, education, domains, coreCapabilities } from '../data'

// Year ruler: shows where the "15+ years in technology" and "10+ years in UX & Product Design" claims come from.
const FROM = 2010
const NOW = 2026.8
const pct = (y) => `${((y - FROM) / (NOW - FROM)) * 100}%`
const years = [2010, 2014, 2018, 2022, 2026]

// Real example: this portfolio, built with AI-assisted coding from Rafaelle's own briefs (Med.co phase markers).
const aiFlow = [
  { title: 'Product decision', text: 'I start by defining the problem, user need, business context, constraints, and what the experience needs to accomplish.' },
  { title: 'Structured specification', text: 'I translate product decisions into clear flows, interaction rules, states, edge cases, accessibility requirements, and implementation guidance.', kind: 'brief', excerpt: 'Clearly distinguish what exists today from future exploration. Preserve the current user flow while making the new direction visible without implying that it has already shipped.' },
  { title: 'AI-assisted implementation', text: 'I use AI-assisted development to turn specifications and design decisions into functional interfaces faster, iterate on interactions, and explore implementation possibilities.', kind: 'code', excerpt: 'const explore =\n  EXPLORATION.includes(id)' },
  { title: 'Review and refinement', text: 'I review the implementation against the original product intent, validating interaction behavior, responsive layout, accessibility, edge cases, and visual quality before considering the work complete.' },
]

function CvLink() {
  return profile.resumeReady
    ? <a href={profile.resume} className="btn" download>Download CV (PDF)</a>
    : null
}

export default function Experience() {
  const firstTech = Math.min(...experience.map((e) => e.start))
  const firstUx = Math.min(...experience.filter((e) => e.track === 'ux').map((e) => e.start))

  return (
    <main className="ex">
      <header className="wrap ex-hero">
        <Reveal as="p" className="label">Experience</Reveal>
        <Reveal as="h1">Where and when I've <em>worked</em>.</Reveal>
        <Reveal className="ex-hero-row">
          <p className="ex-hero-sub">
            {profile.role} and Design Engineer. {profile.location.split(' · ')[0]}.
          </p>
          <CvLink />
        </Reveal>
      </header>

      <section className="ex-ruler-sec">
        <div className="wrap">
          <Reveal className="ex-ruler" aria-label="Career span">
            <div className="ex-track">
              <span className="ex-track-name">Technology</span>
              <span className="ex-bar tech" style={{ left: pct(firstTech), right: 0 }} />
              <span className="ex-track-total">{Math.floor(NOW - firstTech)} years</span>
            </div>
            <div className="ex-track">
              <span className="ex-track-name">UX & Product Design</span>
              <span className="ex-bar ux" style={{ left: pct(firstUx), right: 0 }} />
              <span className="ex-track-total">{Math.floor(NOW - firstUx)} years</span>
            </div>
            <div className="ex-years" aria-hidden="true">
              {years.map((y) => <span key={y} style={{ left: pct(y) }}>{y}</span>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="ex-list-sec">
        <div className="wrap">
          <ol className="ex-list">
            {experience.map((e) => (
              <Reveal as="li" key={e.org} className={e.compact ? 'ex-item compact' : 'ex-item'}>
                <div className="ex-when">
                  <span>{e.period}</span>
                  <span className="ex-place">{e.place}</span>
                </div>
                <div className="ex-what">
                  <h2>{e.role} <span className="ex-org">· {e.org}</span></h2>
                  {e.kind && <p className="ex-kind">{e.kind}</p>}
                  {e.lines?.map((l) => <p key={l}>{l}</p>)}
                  {e.note && <p className="ex-note">{e.note}</p>}
                  {e.clients && (
                    <ul className="ex-clients">
                      {e.clients.map((c) => (
                        <li key={c.name}>
                          <a href={c.href}>{c.name} →</a>
                          {c.team && <span>{c.team}</span>}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal>
            <p className="label">Education</p>
            <ul className="exp-list single">
              {education.map((ed) => (
                <li key={ed.name + ed.org}>{ed.name} <span className="ex-org">· {ed.org ? `${ed.org}, ` : ''}{ed.year}</span></li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="ex-ai-sec">
        <div className="wrap">
          <div className="ex-ai-intro">
            <Reveal>
              <p className="label">How I use AI in delivery</p>
              <h2 className="ex-ai-title">From product thinking to <em>working interface</em>.</h2>
            </Reveal>
            <Reveal className="ex-ai-copy">
              <p>
                AI-assisted development is part of my design workflow. I use it to move faster from product decisions and
                structured specifications to working interfaces, while keeping product thinking, UX, accessibility, and
                final review under my responsibility.
              </p>
            </Reveal>
          </div>
          <ol className="ex-flow">
            {aiFlow.map((f, i) => (
              <Reveal as="li" key={f.title}>
                <span className="ex-flow-n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{f.title}</h3>
                {f.text && <p>{f.text}</p>}
                {f.excerpt && <pre className="ex-prompt"><span>{f.kind === 'code' ? 'excerpt from the component' : 'from my brief'}</span>{f.excerpt}</pre>}
              </Reveal>
            ))}
          </ol>
          <Reveal as="figure" className="ex-ai-result">
            <figcaption>
              <span className="label">Result</span>
              A working product experience built from my product decisions, specifications, and design direction, with AI
              accelerating implementation and iteration. <a href="/work/medco" className="ex-ai-live">See it live →</a>
            </figcaption>
          </Reveal>
        </div>
      </section>

      <section id="craft">
        <div className="wrap">
          <Reveal className="ex-craft-head">
            <p className="label">Interface craft</p>
            <h2 className="ex-ai-title">Evidence from <em>real products</em>.</h2>
          </Reveal>
          <Craft />
        </div>
      </section>

      <section>
        <div className="wrap">
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

      <section className="contact">
        <div className="wrap">
          <Reveal as="h2">Looking for a Senior Product Designer?<br /><a href={`mailto:${profile.email}`}>Let's talk.</a></Reveal>
          <Reveal><ContactLinks /></Reveal>
        </div>
      </section>
    </main>
  )
}

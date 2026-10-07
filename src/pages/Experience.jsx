import Reveal from '../components/Reveal'
import Craft from '../components/Craft'
import ContactLinks from '../components/ContactLinks'
import { profile, experience, education, domains, coreCapabilities } from '../data'

// Year ruler: shows where the "15+ years in technology" and "10+ years in UX & Product Design" claims come from.
const FROM = 2010
const NOW = 2026.8
const pct = (y) => `${((y - FROM) / (NOW - FROM)) * 100}%`
const years = [2010, 2014, 2018, 2022, 2026]

const aiFlow = [
  { title: 'Product decision', text: 'I define the problem, the interaction behavior, and what the interface must preserve.' },
  { title: 'Specification', text: 'Requirements, interaction rules, and implementation constraints in a structured brief.',
    prompt: 'Build the property card using the existing design system. Preserve information hierarchy, responsive behavior and accessibility. Do not change business rules or data structure.' },
  { title: 'AI-assisted implementation', text: 'Structured prompts and coding tools translate the brief into front-end components.' },
  { title: 'Review & QA', text: 'I review the code and check accessibility, responsive behavior, and visual quality against the design intent.' },
  { title: 'Working interface', text: 'Refined until it matches the original product decision.' },
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
              <h2 className="ex-ai-title">From specification to <em>interface</em>.</h2>
            </Reveal>
            <Reveal className="ex-ai-copy">
              <p>AI-assisted development is part of how I move from product decisions to working interfaces.</p>
              <p>
                I use AI throughout the design-to-code workflow to explore solutions, translate design specifications into
                front-end components, review implementation, and iterate quickly without losing control of UX,
                accessibility, or visual quality.
              </p>
            </Reveal>
          </div>
          <ol className="ex-flow">
            {aiFlow.map((f, i) => (
              <Reveal as="li" key={f.title}>
                <span className="ex-flow-n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                {f.prompt && <pre className="ex-prompt"><span>prompt</span>{f.prompt}</pre>}
              </Reveal>
            ))}
          </ol>
          <Reveal as="p" className="ex-ai-caption">
            <span className="label">Nextlar</span>
            A real example from Nextlar: requirements and interaction rules were translated into a structured
            implementation brief, then developed and refined through AI-assisted coding and visual QA. AI speeds up the
            work; product decisions, UX, design quality, and implementation review stay with me.
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
          <Reveal as="h2">Hiring a Design Engineer?<br /><a href={`mailto:${profile.email}`}>Let's talk.</a></Reveal>
          <Reveal><ContactLinks /></Reveal>
        </div>
      </section>
    </main>
  )
}

import Reveal from '../components/Reveal'
import ContactLinks from '../components/ContactLinks'
import { profile, experience, education, companies } from '../data'

// Year ruler, from the first technology role (2003) to now.
const FROM = 2003
const NOW = 2026.8
const pct = (y) => `${((y - FROM) / (NOW - FROM)) * 100}%`
const years = [2003, 2008, 2013, 2018, 2023]

// Real example: this portfolio, built with AI-assisted coding from Rafaelle's own briefs (Med.co phase markers).

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
            Engineering design, product thinking, and implementation. {profile.location.split(' · ')[0]}.
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

      <section className="ex-companies">
        <div className="wrap">
          <Reveal as="p" className="label">Companies and clients</Reveal>
          <Reveal as="ul" className="ex-logos">
            {companies.map((c) => (
              <li key={c.name}>
                {c.href
                  ? <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{c.name}</a>
                  : <span>{c.name}</span>}
              </li>
            ))}
          </Reveal>
          <Reveal as="p" className="ex-linkedin">
            Full history and recommendations on <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn →</a>
          </Reveal>
        </div>
      </section>

      <section className="contact">
        <div className="wrap">
          <Reveal as="h2">Have a complex product to build?<br /><a href={`mailto:${profile.email}`}>Let's talk.</a></Reveal>
          <Reveal><ContactLinks /></Reveal>
        </div>
      </section>
    </main>
  )
}

import Reveal from '../components/Reveal'
import Craft from '../components/Craft'
import ContactLinks from '../components/ContactLinks'
import { profile, domains, coreCapabilities } from '../data'

const aiFlow = [
  { title: 'Decide', text: 'I define the problem, who it is for, the constraints, and what the experience has to accomplish before anything gets built.' },
  { title: 'Specify', text: 'I write the spec the way I would brief a developer: flows, interaction rules, states, edge cases, and accessibility requirements. Clear enough that the AI has nothing to guess.' },
  { title: 'Build with AI', text: 'AI turns the spec into working code. I use it to iterate on interactions quickly and to try implementation options I would not have time to build by hand.' },
  { title: 'Review', text: 'I check the result against the original intent: interaction behavior, responsive layout, accessibility, edge cases, and visual quality. Nothing ships until it passes.' },
]

export default function HowIWork() {
  return (
    <main className="ex hiw">
      <header className="wrap ex-hero">
        <Reveal as="p" className="label">How I work</Reveal>
        <Reveal as="h1">From the problem to the <em>working interface</em>.</Reveal>
        <Reveal as="p" className="ex-hero-sub">
          How I use AI in delivery, and what my interfaces look like up close.
        </Reveal>
      </header>

      <section className="ex-ai-sec">
        <div className="wrap">
          <div className="ex-ai-intro">
            <Reveal>
              <p className="label">AI in delivery</p>
              <h2 className="ex-ai-title">AI speeds up the build. <em>The thinking stays mine.</em></h2>
            </Reveal>
            <Reveal className="ex-ai-copy">
              <p>
                I use AI-assisted development to get from a decision to a working interface faster. What the product
                should do, how it should behave, and whether it is good enough to ship stay with me.
              </p>
            </Reveal>
          </div>
          <ol className="ex-flow">
            {aiFlow.map((f, i) => (
              <Reveal as="li" key={f.title}>
                <span className="ex-flow-n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal as="figure" className="ex-ai-result">
            <figcaption>
              <span className="label">Result</span>
              The Med.co case on this site was built this way: my decisions, my spec, AI on the implementation.{' '}
              <a href="/work/medco" className="ex-ai-live">See it live →</a>
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
          <Reveal as="h2">Have a complex product to build?<br /><a href={`mailto:${profile.email}`}>Let's talk.</a></Reveal>
          <Reveal><ContactLinks /></Reveal>
        </div>
      </section>
    </main>
  )
}

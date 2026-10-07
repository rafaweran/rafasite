import Reveal from '../components/Reveal'
import { profile, coreCapabilities } from '../data'
import ContactLinks from '../components/ContactLinks'

// Portrait: replace PORTRAIT with a real photo path (e.g. images/rafaelle-portrait.jpg). Never use stock or generated images.
const PORTRAIT = 'images/rafaelle-portrait.jpg'

const approach = [
  { title: 'Understand the problem', text: 'I start by understanding the user, the workflow, the business context, and the real problem behind the request.' },
  { title: 'Design the system', text: 'I work across product structure, information architecture, flows, business rules, interaction, and interface design.' },
  { title: 'Build what I design', text: 'When appropriate, I take products beyond Figma and build functional interfaces, reducing the gap between design and engineering.' },
  { title: 'Learn from real usage', text: 'Support conversations, feedback, product behavior, and post-launch observation continue shaping my design decisions.' },
]



export default function About() {
  return (
    <main className="ab">
      {/* Hero */}
      <header className="wrap ab-hero">
        <Reveal className="ab-portrait">
          {PORTRAIT
            ? <img src={`${import.meta.env.BASE_URL}${PORTRAIT}`} alt="Portrait of Rafaelle Weran" />
            : <div className="ab-portrait-empty"><span className="label">Photo</span><span>Portrait</span></div>}
        </Reveal>
        <div className="ab-hero-text">
          <Reveal as="p" className="label ab-eyebrow">About · Senior Product Designer</Reveal>
          <Reveal as="h1">I design products by starting with how <em>people</em> think.</Reveal>
          <Reveal className="cs-prose">
            <p>
              I've always been curious about how people think, behave, and make decisions. That interest in human
              behavior naturally shaped the way I approach product design.
            </p>
            <p>
              I enjoy understanding what users are trying to accomplish, but I also look at the business context,
              technical constraints, and the system around the experience. For me, good product design happens when
              those pieces work together.
            </p>
            <p>
              Over the years, I've worked across product design, UX/UI, systems, project delivery, and technology, which
              gives me a practical perspective from early problem definition through implementation.
            </p>
            <p className="ab-aside">
              Outside of product work, I'm especially interested in psychology, emerging technology, and the ways AI is
              changing how we design and build digital products.
            </p>
          </Reveal>
          <Reveal as="dl" className="ab-meta">
            <div><dt>Based in</dt><dd>Edmonton, Canada</dd><dd>{profile.workEligibility}</dd></div>
            <div><dt>Open to</dt><dd>Full-time, in-house roles</dd></div>
            <div><dt>Focus</dt><dd>Complex digital products</dd></div>
          </Reveal>
        </div>
      </header>

      {/* How I think */}
      <section className="cs-section">
        <div className="wrap ab-think">
          <Reveal as="h2" className="ab-display">The interface is only <em>one part</em> of the product.</Reveal>
          <Reveal className="cs-prose ab-think-body">
            <p className="ab-lead">I care about how the whole system works.</p>
            <p>
              That means understanding business rules, user needs, workflows, technical constraints, information
              architecture, interaction, and what happens after launch.
            </p>
            <p>
              I'm most comfortable working on products where the challenge is not simply making a screen look better, but
              understanding why the product is difficult to use in the first place.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <section className="cs-section">
        <div className="wrap">
          <Reveal className="cs-head"><p className="cs-eyebrow">My approach</p></Reveal>
          <ol className="ab-approach">
            {approach.map((a, i) => (
              <Reveal as="li" key={a.title}>
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Design to implementation */}
      <section className="cs-section">
        <div className="wrap cs-two">
          <div>
            <Reveal className="cs-head">
              <p className="cs-eyebrow">From design to implementation</p>
              <h2>I don't always stop at handoff.</h2>
            </Reveal>
            <Reveal className="cs-prose">
              <p>My background in technology naturally led me to work closer to implementation.</p>
              <p>On some projects, I design the experience and collaborate closely with developers.</p>
              <p>On others, I take the product further and build functional front-end experiences myself.</p>
              <p>
                <strong>
                  This allows me to test ideas earlier, communicate decisions more clearly, and deliver more mature
                  product experiences.
                </strong>
              </p>
            </Reveal>
          </div>
          <Reveal className="ab-caps">
            <p className="label">Capabilities</p>
            <ul>{coreCapabilities.map((c) => <li key={c}>{c}</li>)}</ul>
          </Reveal>
        </div>
      </section>

      {/* Currently */}
      <section className="cs-section">
        <div className="wrap ab-now">
          <Reveal className="cs-head">
            <p className="cs-eyebrow"><span className="ab-dot" />Currently</p>
          </Reveal>
          <Reveal className="cs-prose ab-now-body">
            <p className="ab-lead">
              I'm based in Edmonton, Canada, and open to full-time, in-house Senior Product Designer roles.
            </p>
            <p>
              I'm especially interested in teams working on complex digital products where design can influence both the
              product strategy and the final implementation.
            </p>
            <div className="ab-ctas">
              <a href={`mailto:${profile.email}`} className="btn">Let's talk</a>
              <a href="/#work" className="ab-link">View my work →</a>
              <a href="/experience" className="ab-link">Experience →</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="contact ab-final">
        <div className="wrap">
          <Reveal as="h2">
            Have a complex product to solve?<br /><a href={`mailto:${profile.email}`}>Let's make it clearer.</a>
          </Reveal>
          <Reveal><ContactLinks /></Reveal>
        </div>
      </section>
    </main>
  )
}

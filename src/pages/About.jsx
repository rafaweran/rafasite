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

const domains = ['Healthcare', 'Digital Health', 'SaaS', 'GovTech', 'Enterprise Systems', 'Real Estate', 'Community Platforms', 'AI-assisted Products']

const workingStyle = [
  { title: 'Collaborative', text: 'I work closely with stakeholders, subject-matter experts, and developers throughout the product process.' },
  { title: 'Practical', text: 'I value research and process, but I also understand real constraints, deadlines, and the need to ship.' },
  { title: 'Iterative', text: 'I treat launch as part of the learning process, not the end of it.' },
]

export default function About() {
  return (
    <main className="ab">
      {/* Hero */}
      <header className="wrap ab-hero">
        <Reveal className="ab-portrait">
          {PORTRAIT
            ? <img src={`${import.meta.env.BASE_URL}${PORTRAIT}`} alt="Portrait of Rafaelle Weran" />
            : <div className="ab-portrait-empty"><span className="label">Photo</span><span>[Portrait of Rafaelle]</span></div>}
        </Reveal>
        <div className="ab-hero-text">
          <Reveal as="p" className="label ab-eyebrow">About</Reveal>
          <Reveal as="h1">I've always worked somewhere between design, <em>technology</em>, and product.</Reveal>
          <Reveal className="cs-prose">
            <p>
              I'm a Senior Product Designer and Design Engineer with a background in technology and more than a decade of
              experience designing digital products.
            </p>
            <p>
              My work usually starts before the interface exists. I work across product strategy, research, systems
              thinking, UX/UI, prototyping, and implementation, helping turn complex problems into clear digital
              experiences.
            </p>
            <p>
              I've worked across healthcare, SaaS, public-sector systems, real estate, community platforms, and
              AI-assisted products.
            </p>
          </Reveal>
          <Reveal as="dl" className="ab-meta">
            <div><dt>Based in</dt><dd>Edmonton, Canada</dd></div>
            <div><dt>Open to</dt><dd>Remote opportunities</dd></div>
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

      {/* Experience snapshot */}
      <section className="cs-section">
        <div className="wrap">
          <Reveal className="cs-head">
            <p className="cs-eyebrow">Experience snapshot</p>
            <h2>Experience across complex digital products.</h2>
          </Reveal>
          <div className="ab-snapshot">
            <Reveal className="ab-years">
              <div><b>15+</b><span>years in technology</span></div>
              <div><b>10+</b><span>years in UX & Product Design</span></div>
            </Reveal>
            <Reveal className="ab-domains">
              <p className="label">Domains</p>
              <ul>{domains.map((d) => <li key={d}>{d}</li>)}</ul>
              {profile.resume
                ? <a href={profile.resume} className="ab-link">View resume →</a>
                : <a href={profile.linkedin} target="_blank" rel="noreferrer" className="ab-link">View LinkedIn profile ↗</a>}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why complex products */}
      <section className="cs-section">
        <div className="wrap cs-two">
          <div>
            <Reveal className="cs-head">
              <p className="cs-eyebrow">Why complex products</p>
              <h2>I'm drawn to products where the answer is not obvious.</h2>
            </Reveal>
            <Reveal className="cs-prose">
              <p>
                The projects I enjoy most usually involve multiple users, complex workflows, business rules, fragmented
                information, or systems that have grown difficult to understand.
              </p>
              <p>I like turning that complexity into something people can actually use.</p>
            </Reveal>
          </div>
          <Reveal as="blockquote" className="ab-pull">
            Complexity can stay in the system.
            <span>It doesn't have to stay in the user experience.</span>
          </Reveal>
        </div>
      </section>

      {/* Background */}
      <section className="cs-section">
        <div className="wrap ab-bg">
          <Reveal className="cs-head">
            <p className="cs-eyebrow">How my background shaped my work</p>
            <h2>Technology came first. Product design gave it <em>direction</em>.</h2>
          </Reveal>
          <Reveal className="cs-prose ab-bg-body">
            <p>I started my career in technology before moving deeper into UX and Product Design.</p>
            <p>
              That background shaped the way I work today. I naturally think beyond the interface and consider how the
              product behaves, how information moves through the system, how decisions affect implementation, and how
              the experience will work after it reaches real users.
            </p>
          </Reveal>
          <Reveal className="ab-path" aria-hidden="true">
            <span>Technology</span><i>→</i><span>Product thinking</span><i>→</i><span className="on">Design</span>
          </Reveal>
        </div>
      </section>

      {/* Working style */}
      <section className="cs-section">
        <div className="wrap">
          <Reveal className="cs-head">
            <p className="cs-eyebrow">Working style</p>
            <h2>How I like to work.</h2>
          </Reveal>
          <div className="ab-style">
            {workingStyle.map((w) => (
              <Reveal key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </Reveal>
            ))}
          </div>
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
              I'm based in Edmonton, Canada, and open to Senior Product Design, Design Engineer, and product-focused
              remote opportunities.
            </p>
            <p>
              I'm especially interested in teams working on complex digital products where design can influence both the
              product strategy and the final implementation.
            </p>
            <div className="ab-ctas">
              <a href={`mailto:${profile.email}`} className="btn">Let's talk</a>
              <a href="#work" className="ab-link">View my work →</a>
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

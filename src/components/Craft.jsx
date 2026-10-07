import Reveal from './Reveal'

// Interface craft: evidence from real products. A Nextlar dashboard component, UIRAJARR crops (demo data),
// tokens from the Med.co Figma library, and live City Furnace screens.
const img = (f) => `${import.meta.env.BASE_URL}images/${f}`

// Med.co design system (Figma). Only values visible in the file.
const themes = [
  { name: 'Patient', value: '#1D4ED8' },
  { name: 'Doctor', value: '#123F37' },
]

const a11y = [
  { src: 'craft-uj-a11y-label.webp', title: 'Visible labels', text: 'Labels sit above the field, with a required marker. Never placeholder-only.' },
  { src: 'craft-uj-a11y-option.webp', title: 'Not color alone', text: 'Selection shows a check, a tinted background and a stronger border.' },
  { src: 'craft-uj-a11y-notice.webp', title: 'Icon plus text', text: 'Status notices pair an icon with words and name the data source.' },
  { src: 'craft-uj-a11y-actions.webp', title: 'Clear actions', text: 'Large targets, one filled primary action, the secondary kept visible but quieter.' },
]

export default function Craft() {
  return (
    <div className="craft">
      {/* 1 Anatomy */}
      <Reveal className="craft-card wide">
        <div className="craft-copy">
          <p className="label">01 · Component anatomy</p>
          <p className="craft-desc">Reusable components structured around hierarchy, clarity, and predictable behavior.</p>
          <p className="craft-note">Nextlar dashboard, daily nudge card.</p>
        </div>
        <figure className="cf-shot"><img src={img('craft-nx-card.webp')} alt="Nextlar daily nudge card: icon, eyebrow, title, supporting text, primary action and dismiss" loading="lazy" /></figure>
        <ol className="cf-callouts">
          <li><b>Icon + eyebrow</b> context first: what kind of message this is</li>
          <li><b>Title</b> the situation in one line</li>
          <li><b>Supporting text</b> why it matters, without blame</li>
          <li><b>Primary action</b> one clear next step</li>
          <li><b>Dismiss</b> the user stays in control</li>
        </ol>
      </Reveal>

      {/* 2 States */}
      <Reveal className="craft-card wide">
        <div className="craft-copy">
          <p className="label">02 · States</p>
          <p className="craft-desc">Every interaction is designed beyond the default state.</p>
          <p className="craft-note">Med.co design system in Figma, field component.</p>
        </div>
        <figure className="cf-shot"><img src={img('craft-medco-field-states.png')} alt="Med.co field component in empty, filled, focus, error and disabled states" loading="lazy" /></figure>
        <ul className="cf-a11y">
          <li><b>Empty, filled, focus</b><span>Focus uses a 2px border, so it never depends on color alone.</span></li>
          <li><b>Error</b><span>Red border plus an icon and a message under the field.</span></li>
          <li><b>Disabled</b><span>Muted fill and text, clearly not interactive.</span></li>
        </ul>
      </Reveal>

      {/* 3 Tokens */}
      <Reveal className="craft-card">
        <div className="craft-copy">
          <p className="label">03 · Tokens</p>
          <p className="craft-desc">Consistent tokens create a scalable visual language across the product.</p>
          <p className="craft-note">
            Med.co design system in Figma. Two profiles, one system: patient and physician share every component and
            switch brand through a variable mode.
          </p>
        </div>
        <ul className="cf-swatches">
          {themes.map((t) => (
            <li key={t.name}><i style={{ background: t.value }} /><span>{t.name} mode</span><code>{t.value}</code></li>
          ))}
        </ul>
        <figure className="cf-shot"><img src={img('craft-medco-spacing-radius.webp')} alt="Med.co spacing scale in multiples of 4 and radius scale, from the Figma library" loading="lazy" /></figure>
        <p className="craft-note">Spacing in multiples of 4. A missing step is added to the collection, never typed into one instance.</p>
        <div className="cf-scale">
          <p className="cf-state-name">Type scale</p>
          <code>Display · Heading · Body · Label · Caption 12/16 · Overline 11/14</code>
        </div>
      </Reveal>

      {/* 4 Responsiveness */}
      <Reveal className="craft-card">
        <div className="craft-copy">
          <p className="label">04 · Responsiveness</p>
          <p className="craft-desc">Layouts adapt to context, screen size, and task priority rather than simply shrinking.</p>
          <p className="craft-note">City Furnace, live site I designed and built.</p>
        </div>
        <div className="cf-resp">
          <figure className="cf-desk"><img src={img('craft-cf-desktop.jpg')} alt="City Furnace homepage on desktop" loading="lazy" /></figure>
          <figure className="cf-mob"><img src={img('craft-cf-mobile.jpg')} alt="City Furnace homepage on mobile" loading="lazy" /></figure>
        </div>
        <ul className="cf-resp-notes">
          <li>Navigation and phone number collapse into a menu; the quote CTA stays first.</li>
          <li>Both actions become full-size touch targets, stacked by priority.</li>
          <li>The thermostat visual moves below the message instead of competing with it.</li>
        </ul>
      </Reveal>

      {/* 5 Accessibility */}
      <Reveal className="craft-card wide">
        <div className="craft-copy">
          <p className="label">05 · Accessibility</p>
          <p className="craft-desc">
            Accessibility is considered through contrast, hierarchy, labels, focus states, and usable touch targets.
          </p>
          <p className="craft-note">UIRAJARR accreditation flow. Demonstration data.</p>
        </div>
        <ul className="cf-a11y-shots">
          {a11y.map((a) => (
            <li key={a.title}>
              <figure className="cf-shot"><img src={img(a.src)} alt={`UIRAJARR example: ${a.title.toLowerCase()}`} loading="lazy" /></figure>
              <b>{a.title}</b>
              <span>{a.text}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  )
}

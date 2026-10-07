import Reveal from './Reveal'

// Interface craft: evidence from real products. Crops of UIRAJARR screens (demo data), tokens from the Med.co
// Figma library, and live City Furnace screens.
const img = (f) => `${import.meta.env.BASE_URL}images/${f}`

// Med.co design system (Figma). Only values visible in the file.
const themes = [
  { name: 'Patient', value: '#1D4ED8' },
  { name: 'Doctor', value: '#123F37' },
]
const dsFacts = [['186', 'tokens'], ['16', 'text styles'], ['5', 'elevations'], ['40', 'icons'], ['22', 'components'], ['2', 'theme modes']]

const a11y = [
  { title: 'Contrast', text: 'Body text at about 9:1, secondary text at about 6:1 on the base color.' },
  { title: 'Visible focus', text: 'A 2px outline with offset on every interactive element.' },
  { title: 'Clear labels', text: 'Labels sit above fields and never live only in placeholders.' },
  { title: 'Error messages', text: 'Errors say what to do next, not only that something failed.' },
  { title: 'Touch targets', text: 'Primary actions at 40px or taller, with spacing between them.' },
  { title: 'Readable type', text: 'Body copy at 18px with 1.65 line height.' },
]

export default function Craft() {
  return (
    <div className="craft">
      {/* 1 Anatomy */}
      <Reveal className="craft-card wide">
        <div className="craft-copy">
          <p className="label">01 · Component anatomy</p>
          <p className="craft-desc">Reusable components structured around hierarchy, clarity, and predictable behavior.</p>
          <p className="craft-note">UIRAJARR accreditation, step 1. Demonstration data.</p>
        </div>
        <figure className="cf-shot"><img src={img('craft-uj-anatomy.webp')} alt="UIRAJARR accreditation step 1: stepper, step heading, and pre-filled CNPJ and registry status fields" loading="lazy" /></figure>
        <ol className="cf-callouts">
          <li><b>Stepper</b> current, completed and upcoming steps read at a glance</li>
          <li><b>Step header</b> position, title and one line on what this step is for</li>
          <li><b>Field label</b> always visible, with the required marker</li>
          <li><b>Pre-filled field</b> read-only style for data that comes from the federal registry</li>
        </ol>
      </Reveal>

      {/* 2 States */}
      <Reveal className="craft-card wide">
        <div className="craft-copy">
          <p className="label">02 · States</p>
          <p className="craft-desc">Every interaction is designed beyond the default state.</p>
          <p className="craft-note">UIRAJARR accreditation, end of step 1. Demonstration data.</p>
        </div>
        <figure className="cf-shot"><img src={img('craft-uj-states.webp')} alt="UIRAJARR accreditation: data source notice, selected and unselected options, secondary and primary actions" loading="lazy" /></figure>
        <ul className="cf-a11y">
          <li><b>Selected and unselected</b><span>The chosen option gets a filled check, tinted background and stronger border.</span></li>
          <li><b>Primary and secondary</b><span>One filled primary action; saving for later stays available but quieter.</span></li>
          <li><b>Data freshness</b><span>A notice shows when registry data was last updated and where it came from.</span></li>
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
        <dl className="cf-ds">
          {dsFacts.map(([v, l]) => <div key={l}><dt>{v}</dt><dd>{l}</dd></div>)}
        </dl>
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
          <p className="craft-note">Values as applied in the code of this portfolio.</p>
        </div>
        <ul className="cf-a11y">
          {a11y.map((a) => <li key={a.title}><b>{a.title}</b><span>{a.text}</span></li>)}
        </ul>
      </Reveal>
    </div>
  )
}

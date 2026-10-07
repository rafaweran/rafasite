import Reveal from './Reveal'
import ContactLinks from './ContactLinks'
import { profile } from '../data'

// Closing contact block for project pages, so contact details are never more than a scroll away.
export default function CaseCta() {
  return (
    <section className="contact case-cta-sec">
      <div className="wrap">
        <Reveal as="h2">
          Looking for a Senior Product Designer who can take complex products from ambiguity to delivery?{' '}
          <a href={`mailto:${profile.email}`}>Let's talk.</a>
        </Reveal>
        <Reveal><ContactLinks /></Reveal>
      </div>
    </section>
  )
}

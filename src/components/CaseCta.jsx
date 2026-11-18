import Reveal from './Reveal'
import ContactLinks from './ContactLinks'
import { profile } from '../data'

// Closing contact block for project pages, so contact details are never more than a scroll away.
export default function CaseCta() {
  return (
    <section className="contact case-cta-sec">
      <div className="wrap">
        <Reveal as="h2">
          Looking for someone who can design a complex product and build its front-end?{' '}
          <a href={`mailto:${profile.email}`}>Let's talk.</a>
        </Reveal>
        <Reveal><ContactLinks /></Reveal>
      </div>
    </section>
  )
}

// Per-route head tags. Used at runtime (App) and at build time (vite.config.js prerenders one HTML file per route,
// so link previews on LinkedIn, Slack, etc. get the right title without running JavaScript).
export const SITE_URL = 'https://www.rafaelleweran.com'
export const OG_IMAGE = `${SITE_URL}/og.png`

export const routes = {
  '/404': {
    title: 'Page not found · Rafaelle Weran',
    description: 'This page does not exist. Continue to the work, experience, or contact sections.',
  },
  '/': {
    title: 'Rafaelle Weran · Engineering Design',
    description:
      'Design Engineer in Edmonton, Canada. I design complex digital products and build their front-end, handing working interfaces to back-end engineers.',
  },
  '/work': {
    title: 'Work · Rafaelle Weran, Engineering Design',
    description:
      'Selected product design work: MyClinic360, Med.co and UIRAJARR, plus websites designed and built in code.',
  },
  '/experience': {
    title: 'Experience · Rafaelle Weran, Design Engineer',
    description:
      'Timeline of roles, teams and clients: Aya Studio, Spieker Point, independent product and UX contracts, and public-sector technology in Brazil.',
  },
  '/how-i-work': {
    title: 'How I work · Rafaelle Weran, Design Engineer',
    description:
      'How AI fits into my delivery workflow, and what my interfaces look like up close: component anatomy, states, tokens, responsiveness and accessibility.',
  },
  '/about': {
    title: 'About · Rafaelle Weran, Design Engineer',
    description:
      'Design Engineer with 15+ years in technology who designs products and builds the interfaces that ship them.',
  },
  '/work/myclinic360': {
    title: 'MyClinic360 · Rafaelle Weran, Design Engineer',
    description:
      'Designing a specialized clinical platform for pelvic physiotherapists, from discovery and MVP to post-launch evolution.',
  },
  '/work/medco': {
    title: 'Med.co · Rafaelle Weran, Design Engineer',
    description:
      'Designing a structured channel between physicians and patients, and exploring its evolution into AI-assisted intake and teleorientation.',
  },
  '/work/uirajarr': {
    title: 'UIRAJARR · TJRR · Rafaelle Weran, Design Engineer',
    description:
      'Turning a fragmented government travel process into one traceable, role-based digital workflow for the Court of Justice of Roraima.',
  },
}

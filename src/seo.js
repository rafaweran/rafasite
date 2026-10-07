// Per-route head tags. Used at runtime (App) and at build time (vite.config.js prerenders one HTML file per route,
// so link previews on LinkedIn, Slack, etc. get the right title without running JavaScript).
export const SITE_URL = 'https://www.rafaelleweran.com'
export const OG_IMAGE = `${SITE_URL}/og.png`

export const routes = {
  '/': {
    title: 'Rafaelle Weran · Design Engineer & Senior Product Designer',
    description:
      'Design Engineer and Senior Product Designer in Edmonton, Canada. I take product decisions all the way to functional interfaces in code, across healthcare, SaaS and public-sector products.',
  },
  '/work': {
    title: 'Work · Rafaelle Weran, Design Engineer & Senior Product Designer',
    description:
      'Selected product design work: MyClinic360, Med.co and UIRAJARR, plus websites designed and built in code.',
  },
  '/experience': {
    title: 'Experience · Rafaelle Weran, Design Engineer',
    description:
      'Timeline of roles, teams and clients: Aya Studio, Spieker Point, independent product and UX contracts, and public-sector technology in Brazil.',
  },
  '/about': {
    title: 'About · Rafaelle Weran, Design Engineer',
    description:
      'Senior Product Designer with a technology background who designs products and builds the interfaces that ship them.',
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

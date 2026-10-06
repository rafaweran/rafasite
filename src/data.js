export const profile = {
  name: 'Rafaelle Weran',
  role: 'Senior Product Designer · Design Engineer',
  location: 'Edmonton, Canada · Remote worldwide',
  email: 'rafaelle.rodrigues@gmail.com',
  resume: null, // TODO: path to résumé PDF (e.g. 'resume.pdf' in /public); links stay hidden until set
  linkedin: 'https://www.linkedin.com/in/rafaweran/',
}

export const heroCapabilities = ['Product Strategy', 'UX/UI', 'Design Systems', 'Front-end Development', 'AI-assisted Development']

export const facts = [
  { value: '10+', label: 'years in UX & Product Design' },
  { value: '15+', label: 'years in technology' },
]

export const cases = [
  {
    id: 'myclinic360',
    layout: 'flagship',
    href: '#/work/myclinic360',
    cover: `${import.meta.env.BASE_URL}images/myclinic360-cover.webp`,
    category: 'Healthcare SaaS',
    product: 'MyClinic360',
    title: 'Turning complex clinical workflows into a clearer experience for pelvic physiotherapists.',
    summary:
      'A specialized healthcare platform designed from initial discovery and MVP through post-launch evolution, supporting patient management, clinical assessments, scheduling, questionnaires, financial workflows, and ongoing care.',
    role: 'Senior Product Designer · Product Manager',
    capabilities: [
      '0→1 Product', 'Product Strategy', 'User Research', 'Information Architecture',
      'UX/UI', 'Usability Testing', 'Product Management', 'Product Evolution',
    ],
    outcomes: [
      { value: '300+', label: 'The platform has grown to 300+ registered professionals.' },
      { value: '5 → 2', label: 'Steps in the core appointment scheduling flow.' },
    ],
  },
  {
    id: 'medico',
    layout: 'split',
    href: '#/work/medco',
    cover: `${import.meta.env.BASE_URL}images/medco-cover.webp`,
    category: 'Digital Health / Telemedicine',
    product: 'Med.co',
    title: 'Rethinking how patients find and connect with the right physician.',
    summary:
      'A digital health experience created to improve communication between physicians and patients, with a proposed AI-assisted evolution for teleorientation, structured patient conversations, and physician matching.',
    role: 'Product Designer',
    capabilities: ['Product Strategy', 'Service Design', 'Mobile UX', 'AI Experience', 'UX/UI'],
  },
  {
    id: 'nextlar',
    hidden: true, // temporarily hidden from Selected work
    layout: 'reverse',
    category: 'Real Estate SaaS',
    product: 'Nextlar',
    title: 'Designing a real estate workspace around the independent broker.',
    summary:
      'A 0→1 SaaS product created after identifying a market gap between tools designed for real estate agencies and the real workflow of independent Brazilian brokers.',
    role: 'Founder · Product Designer · Design Engineer',
    status: 'Currently in validation',
    statement: 'Designed and built from product concept to functional implementation.',
    capabilities: [
      '0→1 Product', 'User Research', 'Competitive Research', 'Product Strategy', 'UX/UI',
      'Information Architecture', 'Front-end Development', 'AI-assisted Development',
      'Functional Product Implementation',
    ],
  },
  {
    id: 'uirajarr',
    layout: 'split',
    href: '#/work/uirajarr',
    cover: `${import.meta.env.BASE_URL}images/uj-cover.webp`,
    category: 'GovTech · Public Sector',
    product: 'UIRAJARR · TJRR',
    title: 'Turning a fragmented government travel process into one traceable digital workflow.',
    summary:
      'A multi-role product for the Court of Justice of Roraima, covering travel requests, agency accreditation, sealed bidding windows, ticket issuance, and audit.',
    role: 'Product Designer · Systems Analyst · Business Analyst',
    status: 'Competition in progress',
    statement: '1st place in Stage 1 of the 5th TJRR Innovation Award, with a 9.85 score.',
    capabilities: ['Process Mapping', 'Business Analysis', 'Systems Analysis', 'Role-Based UX', 'Workflow Design', 'UX/UI'],
  },
  {
    id: 'entre-nos',
    hidden: true, // temporarily hidden from Selected work
    layout: 'compact',
    category: 'Community Platform',
    product: 'Entre Nós',
    title: 'Building a support and discovery network for Brazilians in Canada.',
    summary:
      'A platform designed to help Brazilians living in Canada discover local businesses, professionals, services, products, and useful community resources.',
    role: 'Product Designer · Design Engineer',
    statement: 'Designed and built as a digital platform for Brazilians living in Canada.',
    capabilities: [
      'Product Discovery', 'Product Strategy', 'Information Architecture', 'UX/UI',
      'Front-end Development', 'Functional Product Implementation',
    ],
  },
]

export const principles = [
  {
    title: 'Understand before designing',
    text: 'I start by understanding users, workflows, business constraints, and the actual problem behind the request.',
  },
  {
    title: 'Design the system',
    text: 'I work across product structure, information architecture, business rules, user flows, interactions, and interface design.',
  },
  {
    title: 'Build what I design',
    text: 'I turn product decisions into functional interfaces and working digital experiences, reducing the gap between design and engineering.',
  },
  {
    title: 'Learn from real usage',
    text: 'Research does not stop at launch. Support conversations, user feedback, and product behavior continue shaping the product.',
  },
]

export const process = [
  'Understand the problem',
  'Define the product',
  'Design the experience',
  'Build the interface',
  'Validate and improve',
]

export const domains = [
  'Healthcare', 'SaaS', 'Digital Health', 'Real Estate', 'Community Platforms',
  'Enterprise Systems', 'AI-assisted Products', 'Front-end Product Development',
]

export const coreCapabilities = [
  'Product Strategy', 'UX Research', 'UX/UI', 'Information Architecture', 'Design Systems',
  'Prototyping', 'Front-end Development', 'AI-assisted Development', 'Product Management',
  'Developer Collaboration',
]

// Selected Builds: replace TODO fields with real details. Do not invent tech or URLs.
export const builds = [
  {
    name: 'Entre Nós',
    type: 'Platform',
    description: 'Designed and developed a responsive platform that helps Brazilians in Canada discover local businesses, professionals, and services in one place.',
    role: 'Product Design & Development',
    scope: 'UX/UI Design · Product Design · Responsive Web Design · Front-end Development · Information Architecture',
    url: 'https://www.entrenos.ca/',
    videoWebm: `${import.meta.env.BASE_URL}videos/entre-nos.webm`,
    video: `${import.meta.env.BASE_URL}videos/entre-nos.mp4`,
    poster: `${import.meta.env.BASE_URL}videos/entre-nos.jpg`,
  },
  {
    name: 'City Furnace',
    type: 'Website',
    description: 'Designed and developed a responsive website for a Canadian HVAC company, focused on clear service communication, local credibility, and lead generation.',
    role: 'Design & Implementation',
    scope: 'UX/UI Design · Responsive Web Design · Front-end Development · SEO · Performance',
    url: 'https://www.cfmmechanical.ca/',
    videoWebm: `${import.meta.env.BASE_URL}videos/city-furnace.webm`,
    video: `${import.meta.env.BASE_URL}videos/city-furnace.mp4`,
    poster: `${import.meta.env.BASE_URL}videos/city-furnace.jpg`,
  },
]

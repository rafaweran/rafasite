export const profile = {
  name: 'Rafaelle Weran',
  role: 'Design Engineer',
  headline: 'Senior Product Designer who takes product decisions all the way to functional interfaces in code.',
  location: 'Edmonton, Canada · Remote worldwide',
  workEligibility: 'Eligible to work in Canada',
  email: 'rafaelle.rodrigues@gmail.com',
  // TODO(Rafaelle): drop the CV at public/rafaelle-weran-cv.pdf. Experience shows a TODO until the file exists.
  resume: '/rafaelle-weran-cv.pdf',
  resumeReady: false,
  linkedin: 'https://www.linkedin.com/in/rafaweran/',
}

export const heroCapabilities = ['Product Design', 'Design Systems', 'Front-end Development', 'Product Strategy']

export const facts = [
  { value: '10+', label: 'years in UX & Product Design' },
  { value: '15+', label: 'years in technology' },
]

export const cases = [
  {
    id: 'myclinic360',
    layout: 'flagship',
    href: '/work/myclinic360',
    cover: `${import.meta.env.BASE_URL}images/myclinic360-cover.webp`,
    category: 'Healthcare SaaS',
    product: 'MyClinic360',
    title: 'Turning complex clinical workflows into a clearer experience for pelvic physiotherapists.',
    summary:
      'A specialized healthcare platform designed from initial discovery and MVP through post-launch evolution, supporting patient management, clinical assessments, scheduling, questionnaires, financial workflows, and ongoing care.',
    role: 'Senior Product Designer',
    impact: 'Continuous user feedback after launch became a key input for improving navigation, clinical workflows, and feature prioritization.',
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
    href: '/work/medco',
    cover: `${import.meta.env.BASE_URL}images/medco-cover.webp`,
    category: 'Digital Health / Telemedicine',
    product: 'Med.co',
    title: 'Rethinking how patients find and connect with the right physician.',
    summary:
      'A digital health experience created to improve communication between physicians and patients, later exploring AI-assisted intake, teleorientation, and telemedicine.',
    role: 'Senior Product Designer',
    impactLabel: 'Product evolution',
    impact: 'What began as a structured post-consultation channel evolved into a broader healthcare service concept, exploring AI-assisted intake, teleorientation, and more structured patient access to physicians.',
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
    href: '/work/uirajarr',
    cover: `${import.meta.env.BASE_URL}images/uj-cover.webp`,
    category: 'GovTech · Public Sector',
    product: 'UIRAJARR · TJRR',
    title: 'Turning a fragmented government travel process into one traceable digital workflow.',
    summary:
      'A multi-role product for the Court of Justice of Roraima, covering travel requests, agency accreditation, sealed bidding windows, ticket issuance, and audit.',
    role: 'Product Designer',
    impactLabel: 'Product impact',
    impact: 'Reduced process fragmentation by centralizing requests, approvals, bidding, ticket issuance, and auditability in one workflow.',
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
  'Prototyping', 'Front-end Development', 'Product Management',
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

// Experience timeline, newest first. Only facts Rafaelle provided; TODO fields render as visible TODO markers.
export const experience = [
  {
    role: 'Senior Product Designer',
    org: 'Aya Studio',
    period: 'Oct 2024 to Present',
    start: 2024.75,
    end: null,
    place: 'Edmonton, Canada · Remote',
    kind: 'Consulting, embedded in client product teams',
    lines: [
      'Contracted by product teams to lead product design, working inside each client team from discovery to delivery.',
    ],
    clients: [
      { name: 'MyClinic360', href: '/work/myclinic360', team: '5-person team: me, 2 developers, a pelvic physiotherapy specialist, a business stakeholder' },
      { name: 'Med.co', href: '/work/medco', team: 'Only product designer, with 2 physician founders, a business stakeholder and 4 developers' },
      { name: 'UIRAJARR · TJRR', href: '/work/uirajarr', team: '4-person team: me as product designer and systems analyst, 2 developers, a business specialist' },
    ],
    track: 'ux',
  },
  {
    role: 'Project Manager',
    org: 'Spieker Point',
    period: 'Mar 2023 to Sep 2024',
    start: 2023.17,
    end: 2024.75,
    place: 'Edmonton, Alberta',
    kind: 'In-house',
    lines: [
      'Led custom enterprise software projects from requirements to delivery, aligning business goals, technical teams, scope, priorities, and implementation.',
      'Supported UX/UI decisions, workflow definition, prototyping, developer handoff, and quality reviews throughout delivery.',
    ],
    track: 'ux',
  },
  {
    role: 'Product & UX Design',
    org: 'Independent contracts',
    period: 'Mar 2016 to Dec 2023',
    start: 2016.17,
    end: 2024,
    place: 'Canada · International',
    kind: 'Contract',
    lines: [
      'Worked across independent digital projects for clients in Canada, Switzerland, Brazil, and other European markets, ranging from smaller websites to more complex digital products.',
      'This period strengthened my end-to-end practice across research, user flows, information architecture, interface design, prototyping, and front-end implementation, while also building experience adapting to different industries, business contexts, and levels of product maturity.',
      'Selected work included corporate websites, service platforms, internal tools, and early-stage digital products across different industries.',
    ],
    track: 'ux',
  },
  {
    role: 'Project Manager',
    org: 'Secretariat of Planning and Management, State of Ceará',
    period: 'Sep 2010 to Oct 2015',
    start: 2010.67,
    end: 2015.83,
    place: 'Fortaleza, Brazil',
    kind: 'Public sector',
    lines: [
      'Led a team of 10 developers migrating the state HR system from Oracle to Java, serving 150,000+ public servants.',
    ],
    track: 'tech',
  },
  {
    role: 'Teaching Professional',
    org: 'Faculdade Evolução',
    period: 'Jan 2010 to Jun 2011',
    start: 2010,
    end: 2011.5,
    place: 'Fortaleza, Brazil',
    compact: true,
    track: 'tech',
  },
]

export const education = [
  { name: 'UX Design', org: 'General Assembly Canada', year: 'Jun 2021 to Sep 2021' },
  { name: 'MBA in Innovation, focused on AI and User Experience', org: 'Unifast', year: '2025 to 2027, in progress' },
  { name: 'UX Design', org: 'Design Circuit', year: '2021' },
  { name: 'Management in Information Security Systems / Information Assurance', org: 'UNI7, Centro Universitário 7 de Setembro', year: '2007 to 2008' },
  { name: 'Faculdade de Ciências Tecnológicas de Fortaleza', org: null, year: '2001 to 2004' },
  { name: 'Global Talent certification', org: 'Deel', year: '2026' },
]

import Reveal from '../components/Reveal'

// Everything in brackets is a placeholder for real material. Do not replace with invented content.
// Privacy: screenshots must use fictional demo data only (no real patients, records, exams, or physician data).

const chapters = [
  { id: 'problem', label: 'Original problem' },
  { id: 'v1', label: 'First hypothesis' },
  { id: 'learning', label: 'Learning' },
  { id: 'expansion', label: 'Expansion' },
  { id: 'shift', label: 'Product shift' },
  { id: 'ai', label: 'AI-assisted intake' },
  { id: 'care', label: 'Teleorientation & telemedicine' },
  { id: 'service', label: 'Service design' },
  { id: 'evolution', label: 'Evolution' },
  { id: 'status', label: 'Launch' },
  { id: 'learnings', label: 'Learnings' },
]

const meta = [
  { label: 'Role', value: 'Senior Product Designer · Project Manager' },
  { label: 'Team', value: 'Cross-functional healthcare and engineering team' },
  { label: 'Status', value: 'Currently launching and being expanded' },
  { label: 'Scope', value: 'Product Strategy · UX/UI · Service Design · AI Experience · Mobile · Product Evolution', wide: true },
]

const team = ['Senior Product Designer / Project Manager (only Product Designer)', '2 physicians / product founders', 'Project / business stakeholder', '4 developers']

const v1Capabilities = [
  'Physician registration and verification',
  'Patient invitation',
  '30-day follow-up communication window',
  'Text chat',
  'File sharing',
  'AI-assisted first interaction',
  'Paid continuation when a new medical interaction was required after the follow-up period',
]

const v1Journey = [
  { actor: 'Physician', steps: ['Registers', 'Professional verification', 'Invites patient'] },
  { actor: 'Patient', steps: ['Accepts invitation', 'Accesses Med.co', 'AI-assisted first interaction', 'Communicates with physician', 'Shares files if needed'] },
  { actor: 'Follow-up', steps: ['Up to 30 days', 'Teleorientation'] },
  { actor: 'After the window', steps: ['New medical need', 'Paid medical interaction'] },
]

const scattered = ['Paper', 'PDFs', 'Messaging apps', 'Email', 'Personal devices', 'Different providers']

const v2Journey = [
  'Patient enters Med.co',
  'Explains what is happening',
  'AI gathers context',
  'AI asks relevant questions',
  'Information is structured',
  'System identifies a physician profile relevant to the reported need',
  'Patient is matched with an appropriate physician',
  'Teleorientation or telemedicine continues according to the situation',
]

const aiRole = [
  "understand the patient's reported concern",
  'ask relevant follow-up questions',
  'organize the information',
  'create a preliminary clinical context for the physician',
  'support physician matching based on the reported need and professional specialty',
]

const blueprint = [
  { lane: 'Patient', steps: ['Reports need', 'Answers contextual questions', 'Reviews / continues', 'Connects with physician'] },
  { lane: 'AI layer', steps: ['Collects context', 'Structures information', 'Supports matching'] },
  { lane: 'Platform', steps: ['Identifies relevant physician profile', 'Creates connection', 'Maintains communication context'] },
  { lane: 'Physician', steps: ['Receives structured patient context', 'Reviews information', 'Provides teleorientation or telemedicine'] },
]

const verification = [
  'Professional medical registration verification',
  'Identity verification',
  'Professional documents',
  'Human review when required',
]

const evolution = [
  { label: 'Original problem', text: 'Personal WhatsApp communication' },
  { label: 'V1', text: 'Dedicated physician-patient communication' },
  { label: 'Expansion', text: 'Medical exams and document continuity' },
  { label: 'V2', text: 'Patient-initiated journey', key: true },
  { label: 'V2', text: 'AI-assisted intake', key: true },
  { label: 'V2', text: 'Physician matching', key: true },
  { label: 'Today', text: 'Teleorientation + telemedicine', key: true },
]

const roleItems = [
  'understanding the initial problem',
  'translating physician needs into product requirements',
  'defining user journeys',
  'information architecture',
  'UX/UI design',
  'prototyping',
  'design system',
  'working with developers',
  'helping prioritize product evolution',
  'designing the AI-assisted experience',
  'supporting product decisions across V1 and V2',
]

function Chapter({ id, title, children, className = '' }) {
  const i = chapters.findIndex((c) => c.id === id)
  return (
    <section id={`md-${id}`} className={`cs-section ${className}`}>
      <div className="wrap">
        <Reveal className="cs-head">
          <p className="cs-eyebrow"><span>{String(i + 1).padStart(2, '0')}</span>{chapters[i].label}</p>
          <h2>{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  )
}

function Beat({ label, title, children }) {
  return (
    <div className="cs-beat">
      <Reveal className="cs-beat-head">
        {label && <p className="cs-beat-label">{label}</p>}
        {title && <h3>{title}</h3>}
      </Reveal>
      {children}
    </div>
  )
}

function Chain({ steps, variant }) {
  return (
    <ol className={`cs-chain ${variant || ''}`}>
      {steps.map((s, i) => (
        <li key={s}>
          {i > 0 && <i aria-hidden="true">→</i>}
          <span>{s}</span>
        </li>
      ))}
    </ol>
  )
}

// Mobile frame. Pass `src` once real (fictional-data) screens exist.
function Phone({ label, src, className = '' }) {
  return (
    <div className={`md-phone ${className}`}>
      <div className="md-phone-screen">
        {src ? <img src={src} alt={label} loading="lazy" /> : (
          <div className="md-phone-empty"><span className="label">Mobile screen</span><span>{label}</span></div>
        )}
      </div>
    </div>
  )
}

const Ph = ({ children }) => <span className="ph">{children}</span>

export default function Medco() {
  return (
    <main className="cs md">
      {/* Hero */}
      <header className="cs-hero wrap md-hero">
        <div>
          <Reveal as="a" href="#work" className="cs-back">← Selected work</Reveal>
          <Reveal as="p" className="case-kicker">
            <span className="case-num">02</span>
            <span>Med.co</span>
            <span className="dot">·</span>
            <span className="case-cat">Digital Health · Teleorientation · Telemedicine</span>
          </Reveal>
          <Reveal as="h1">
            Designing a clearer path from patient need to the <em>right medical care</em>.
          </Reveal>
          <Reveal className="cs-prose cs-intro">
            <p>
              Med.co is a digital health product designed to support teleorientation and telemedicine while creating
              a more structured relationship between physicians and patients.
            </p>
            <p>
              I worked on the product from its early concept through its evolution into a broader patient-centered
              experience.
            </p>
          </Reveal>
        </div>
        <Reveal className="md-hero-phones">
          <Phone label="Med.co physician home: availability, patient invitations, and patients waiting for care" src={`${import.meta.env.BASE_URL}images/medco-physician-home.webp`} className="back" />
          <Phone label="Med.co patient home: start a consultation, ongoing care, and my physicians" src={`${import.meta.env.BASE_URL}images/medco-home.webp`} className="front" />
        </Reveal>
      </header>

      <div className="wrap">
        <Reveal as="dl" className="cs-meta">
          {meta.map((m) => (
            <div key={m.label} className={m.wide ? 'wide' : ''}>
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
              {m.label === 'Team' && <ul className="cs-plain">{team.map((t) => <li key={t}>{t}</li>)}</ul>}
            </div>
          ))}
        </Reveal>

        <Reveal as="div" role="navigation" className="cs-arc" aria-label="Case study chapters">
          {chapters.map((c, i) => (
            <a key={c.id} href="#/work/medco" onClick={(e) => {
              e.preventDefault()
              document.getElementById(`md-${c.id}`)?.scrollIntoView({ behavior: 'smooth' })
            }}>
              <span>{String(i + 1).padStart(2, '0')}</span>{c.label}
            </a>
          ))}
        </Reveal>
      </div>

      {/* 01 Original problem */}
      <Chapter id="problem" title="The product started with a very simple pain point.">
        <div className="cs-two">
          <Reveal className="cs-prose">
            <p>
              In Brazil, physicians often share their personal WhatsApp numbers with patients for follow-up after
              consultations.
            </p>
            <p>While convenient, this can blur the boundary between personal communication and clinical interaction.</p>
            <p>
              Patients may continue sending messages outside the intended context, and physicians lose control over
              where follow-up communication happens.
            </p>
            <p>
              <strong>
                Two physicians came to the project with a straightforward idea: create a dedicated environment for
                post-consultation communication.
              </strong>
            </p>
          </Reveal>
          <Reveal className="cs-hypothesis">
            <p className="label">The first problem was not telemedicine</p>
            <p>It was communication boundaries.</p>
          </Reveal>
        </div>
      </Chapter>

      {/* 02 First hypothesis + V1 journey */}
      <Chapter id="v1" title="What if the physician could keep follow-up communication inside a dedicated clinical environment?">
        <div className="cs-two">
          <Reveal className="cs-prose">
            <p>The first version of Med.co was designed primarily around the physician.</p>
            <p>
              The physician would register, verify their professional identity, and invite an existing patient into
              the platform. After a consultation, the patient could continue communicating with that physician for up
              to 30 days.
            </p>
            <p>The experience was intentionally simple.</p>
          </Reveal>
          <Reveal className="cs-goals">
            <p className="label">Core V1 capabilities</p>
            <ul className="cs-ticks">{v1Capabilities.map((c) => <li key={c}>{c}</li>)}</ul>
          </Reveal>
        </div>

        <Beat label="V1 journey" title="The first journey started with the physician.">
          <Reveal className="md-lanes">
            {v1Journey.map((l) => (
              <div key={l.actor} className="md-lane">
                <p className="md-lane-name">{l.actor}</p>
                <Chain steps={l.steps} variant={l.actor === 'After the window' ? 'muted' : 'accent'} />
              </div>
            ))}
          </Reveal>
          <Reveal as="p" className="cs-statement">
            V1 was designed around an <em>existing</em> physician-patient relationship.
          </Reveal>
          <Reveal className="md-phone-row">
            <Phone label="Med.co V1 patient home: my physicians, consultations, and exams" src={`${import.meta.env.BASE_URL}images/medco-v1-patient-home.jpg`} />
            <Phone label="Med.co V1 physician home: invite a patient, messages waiting for a reply, and connection requests" src={`${import.meta.env.BASE_URL}images/medco-v1-physician-home.jpg`} />
            <Phone label="Med.co V1 physician search by name or specialty" src={`${import.meta.env.BASE_URL}images/medco-v1-search-physicians.jpg`} />
          </Reveal>
        </Beat>
      </Chapter>

      {/* 03 Learning + fragmentation */}
      <Chapter id="learning" title="Communication was only one part of the problem.">
        <div className="cs-research">
          <Reveal className="cs-research-side">
            <div className="cs-bigstat">
              <b>≈15</b>
              <span>healthcare professionals in research and product conversations</span>
            </div>
            <dl>
              <div><dt>Method</dt><dd>Professional conversations + benchmark research</dd></div>
              <div><dt>Focus</dt><dd>Primarily physician-focused</dd></div>
            </dl>
          </Reveal>
          <Reveal className="cs-prose">
            <p>
              As the product evolved and we spoke with physicians, it became clear that the value of Med.co could go
              beyond replacing WhatsApp.
            </p>
            <p>We conducted benchmark research and conversations with approximately 15 healthcare professionals.</p>
            <p>
              <strong>
                The communication problem was real, but it was not always the most significant friction in the
                broader patient experience.
              </strong>
            </p>
          </Reveal>
        </div>

        <Beat label="Another fragmented experience" title="Patient medical information was fragmented too.">
          <div className="cs-two">
            <Reveal className="cs-prose">
              <p>
                In Brazil, medical exams are often received from different laboratories, clinics, and providers
                without a single place where patients can keep them organized over time.
              </p>
              <p>
                This made it harder for patients to keep their own medical information organized and share it when
                needed.
              </p>
            </Reveal>
            <Reveal className="cs-fragments">
              <p className="label">Documents may end up spread across</p>
              <ul>{scattered.map((f) => <li key={f}>{f}</li>)}</ul>
            </Reveal>
          </div>
          <Reveal as="p" className="cs-statement accent">
            The communication was fragmented.<br />The documents were fragmented too.
          </Reveal>
        </Beat>
      </Chapter>

      {/* 04 Expansion */}
      <Chapter id="expansion" title="The product began evolving beyond chat.">
        <div className="cs-two">
          <Reveal className="cs-prose">
            <p>
              We expanded the experience so patients could keep medical exams and documents inside the product and
              choose when to share them with a physician.
            </p>
            <p>
              This introduced a new role for Med.co: not only a communication channel, but also a place where patients
              could maintain continuity of important medical information.
            </p>
            <p className="cs-statement small">The product was becoming more patient-centered.</p>
          </Reveal>
          <Reveal className="md-evo-compare">
            <div>
              <p className="label">V1</p>
              <Chain steps={['Physician', 'Patient', 'Chat']} variant="muted" />
            </div>
            <p className="md-down" aria-hidden="true">↓ Product evolution</p>
            <div>
              <p className="label accent">Expanded experience</p>
              <Chain steps={['Patient profile', 'Medical documents', 'Exam history', 'Controlled sharing', 'Physician communication']} variant="accent" />
            </div>
          </Reveal>
        </div>
        <Reveal className="md-phone-row">
          <Phone label="Med.co patient home: ongoing care, my physicians, and access to exams" src={`${import.meta.env.BASE_URL}images/medco-home.webp`} />
          <Phone label="Med.co assistant: the patient describes what is happening by voice or text, and the assistant organizes it for the physician" src={`${import.meta.env.BASE_URL}images/medco-ai-assistant.jpg`} />
          <Phone label="Med.co my exams: the patient keeps exams in one place, with status for each upload" src={`${import.meta.env.BASE_URL}images/medco-exams.jpg`} />
        </Reveal>
      </Chapter>

      {/* 05 Product shift + V2 journey */}
      <Chapter id="shift" title="The biggest shift was changing who could start the journey.">
        <Reveal className="cs-prose narrow">
          <p>In V1, the patient entered Med.co because a physician invited them.</p>
          <p>In V2, the patient can enter the platform without already having a physician.</p>
          <p>
            <strong>
              This changed the product from a tool supporting an existing medical relationship into a broader
              healthcare access experience.
            </strong>
          </p>
        </Reveal>
        <Reveal className="md-versus">
          <div className="md-v md-v1">
            <p className="label">V1</p>
            <p className="md-v-title">Doctor-centered entry</p>
            <p>Physician invites patient</p>
          </div>
          <span className="md-v-arrow" aria-hidden="true">→</span>
          <div className="md-v md-v2">
            <p className="label">V2</p>
            <p className="md-v-title">Patient-centered entry</p>
            <p>Patient starts with a medical need</p>
          </div>
        </Reveal>

        <Beat label="The V2 journey" title="From “I need a doctor” to a structured medical interaction.">
          <Reveal as="ol" className="md-journey">
            {v2Journey.map((s, i) => (
              <li key={s} className={i >= 2 && i <= 5 ? 'ai' : ''}>
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <span>{s}</span>
                {i >= 2 && i <= 5 && <em>AI-assisted</em>}
              </li>
            ))}
          </Reveal>
          <Reveal as="p" className="cs-statement">
            The goal is to reduce uncertainty at the beginning of the journey and help connect the patient with a
            physician whose specialty is relevant to the reported need.
          </Reveal>
        </Beat>
      </Chapter>

      {/* 06 AI role + matching */}
      <Chapter id="ai" title="AI helps structure the beginning of the journey. It does not replace the physician.">
        <div className="cs-two">
          <Reveal className="cs-goals">
            <p className="label">The AI-assisted experience collects context before the physician interaction. Its role is to</p>
            <ul className="cs-ticks">{aiRole.map((r) => <li key={r}>{r}</li>)}</ul>
          </Reveal>
          <Reveal className="md-guard">
            <p className="label">Design boundary</p>
            <p>The AI does not diagnose the patient.</p>
            <p className="md-guard-sub">
              It produces patient-reported information and a structured intake, so the physician starts with
              preliminary clinical context instead of a blank conversation.
            </p>
          </Reveal>
        </div>

        <Beat label="Physician matching" title="Matching starts from the patient's need, not from a directory.">
          <div className="cs-two">
            <Reveal className="cs-prose">
              <p>
                Instead of asking the patient to understand which medical specialty they need, the experience begins
                with the patient describing the problem in their own words.
              </p>
              <p>
                The AI-assisted flow identifies the context of the request and uses the physician's specialty and
                professional profile to find a relevant match.
              </p>
            </Reveal>
            <Reveal className="md-chat" aria-label="Illustrative AI-assisted intake example">
              <p className="label">Illustrative example</p>
              <div className="md-bubble patient">I have a red eye and I'm experiencing discomfort.</div>
              <div className="md-bubble ai"><Ph>[Insert real AI follow-up question from the product]</Ph></div>
              <div className="md-bubble patient"><Ph>[Insert patient answer]</Ph></div>
              <div className="md-match">
                <span className="md-match-dot" />
                <div>
                  <p className="md-match-title">Specialty aligned with the reported need</p>
                  <p><Ph>[Insert matched physician profile card, fictional data]</Ph></p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal className="md-gap">
            <p>“I know something is wrong”</p>
            <span aria-hidden="true">→</span>
            <p>“I know which physician I should talk to”</p>
          </Reveal>
          <Reveal as="p" className="cs-footnote">
            The system helps reduce the gap between the two. It suggests a relevant physician; it does not guarantee a
            perfect match.
          </Reveal>
        </Beat>
      </Chapter>

      {/* 07 Teleorientation vs telemedicine */}
      <Chapter id="care" title="Not every interaction is a new consultation.">
        <Reveal className="cs-prose narrow">
          <p>
            Med.co distinguishes between continued guidance after an existing consultation and a new paid medical
            consultation.
          </p>
        </Reveal>
        <div className="cs-flows">
          <Reveal className="cs-flowblock">
            <p className="cs-ver v2">Teleorientation</p>
            <h4>Continuity after an existing consultation</h4>
            <Chain steps={['Existing physician relationship', 'Consultation already happened', '30-day follow-up window']} variant="accent" />
            <p className="cs-flow-copy">During the window, the patient can:</p>
            <ul className="cs-ticks">
              <li>send messages</li>
              <li>share exams</li>
              <li>ask follow-up questions related to the consultation</li>
            </ul>
          </Reveal>
          <Reveal className="cs-flowblock after">
            <p className="cs-ver v2">Telemedicine</p>
            <h4>A new medical need becomes a new consultation</h4>
            <Chain steps={['New medical need', 'AI-assisted intake', 'Relevant physician match', 'Paid remote consultation']} variant="accent" />
            <p className="cs-flow-copy">
              When the patient needs a new medical consultation rather than follow-up from an existing one, the
              journey moves into telemedicine: a paid medical interaction with a physician.
            </p>
          </Reveal>
        </div>
      </Chapter>

      {/* 08 Service design + trust */}
      <Chapter id="service" title="The experience connects multiple actors, not just screens.">
        <Reveal className="md-blueprint" role="table" aria-label="Simplified service blueprint">
          {blueprint.map((l) => (
            <div key={l.lane} className="md-bp-lane" role="row">
              <p className="md-bp-name" role="rowheader">{l.lane}</p>
              <ol role="cell">{l.steps.map((s) => <li key={s}>{s}</li>)}</ol>
            </div>
          ))}
        </Reveal>

        <Beat label="Trust and professional verification" title="Trust starts with verified professionals.">
          <div className="cs-two">
            <Reveal className="cs-prose">
              <p>
                Before a physician can receive patients through Med.co, their professional credentials and identity
                must be verified.
              </p>
              <p>
                This verification step helps ensure that only qualified professionals can provide teleorientation and
                telemedicine through the platform.
              </p>
            </Reveal>
            <Reveal className="md-verify">
              <p className="label">Physician verification</p>
              <ul>{verification.map((v) => <li key={v}>{v}</li>)}</ul>
            </Reveal>
          </div>
          <Reveal as="p" className="cs-footnote">
            Patients access Med.co through their email/account flow and do not go through the same professional
            verification process.
          </Reveal>
        </Beat>
      </Chapter>

      {/* 09 Evolution + role */}
      <Chapter id="evolution" title="Med.co evolved from a communication tool into a healthcare access experience.">
        <Reveal as="ol" className="md-evolution">
          {evolution.map((e, i) => (
            <li key={i} className={e.key ? 'key' : ''}>
              <p className="label">{e.label}</p>
              <p className="md-evo-text">{e.text}</p>
            </li>
          ))}
        </Reveal>

        <Beat label="My role" title="Designing the experience while helping shape the product.">
          <div className="cs-two">
            <Reveal className="cs-prose">
              <p>
                As the only Product Designer on the team, I designed the Med.co experience end-to-end and also worked
                across product management responsibilities, collaborating with two physician founders, a business
                stakeholder, and a team of four developers.
              </p>
              <p><strong>The work went beyond interface design. I was involved in defining how the product itself should evolve.</strong></p>
            </Reveal>
            <Reveal className="cs-goals">
              <p className="label">My role included</p>
              <ul className="cs-ticks">{roleItems.map((r) => <li key={r}>{r}</li>)}</ul>
            </Reveal>
          </div>
        </Beat>
      </Chapter>

      {/* 10 Status */}
      <Chapter id="status" title="V2 is entering its launch phase.">
        <Reveal className="cs-badges"><span>Currently launching</span><span>Product continues to evolve</span></Reveal>
        <Reveal className="cs-prose narrow">
          <p>
            The second version of Med.co has been substantially developed and is currently moving through launch and
            continued implementation.
          </p>
          <p>The product is already beginning to be used while additional parts of the experience continue to evolve.</p>
        </Reveal>
      </Chapter>

      {/* 11 Learnings */}
      <Chapter id="learnings" title="A product can solve the original problem and still reveal a larger opportunity.">
        <div className="cs-two">
          <Reveal className="cs-prose">
            <p>
              Med.co started with a very specific physician pain point: separating personal messaging from clinical
              communication.
            </p>
            <p>
              But as the product evolved, we discovered broader problems involving patient information, medical
              documents, healthcare access, and how patients find the right physician.
            </p>
            <p>
              One of the most important lessons from the project was that solving the first problem does not mean the
              product opportunity has been fully understood.
            </p>
          </Reveal>
          <Reveal className="cs-reflection">
            <p className="label">Reflection</p>
            <p>
              The strongest product decisions came from continuing to question the original scope rather than treating
              the first solution as final.
            </p>
          </Reveal>
        </div>
      </Chapter>

      <section className="cs-end">
        <div className="wrap">
          <Reveal as="p" className="cs-end-statement">
            From protecting physicians' personal communication<br />to helping patients reach the <em>right medical care</em>.
          </Reveal>
          <Reveal as="p" className="cs-end-copy">
            Med.co evolved from a simple post-consultation communication tool into a broader digital health experience
            connecting patients, physicians, medical information, AI-assisted intake, teleorientation, and telemedicine.
          </Reveal>
        </div>
      </section>

      <section className="cs-nextnav">
        <div className="wrap">
          <a href="#/work/uirajarr" className="cs-next-link">
            <span className="label">Next project</span>
            <span className="cs-next-name">UIRAJARR <span aria-hidden="true">→</span></span>
            <span className="cs-next-cat">GovTech · Public Sector</span>
          </a>
          <a href="#work" className="cs-back">← Back to selected work</a>
        </div>
      </section>
    </main>
  )
}

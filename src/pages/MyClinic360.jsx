import Reveal from '../components/Reveal'
import Ownership from '../components/Ownership'
import { Shot, BrowserMockup } from '../components/CaseStudy'


const chapters = [
  { id: 'idea', label: 'The idea' },
  { id: 'research', label: 'Research' },
  { id: 'shift', label: 'Product shift' },
  { id: 'mvp', label: 'MVP' },
  { id: 'support', label: 'Support as research' },
  { id: 'assessments', label: 'Assessments' },
  { id: 'scheduling', label: 'Scheduling' },
  { id: 'evolution', label: 'Evolution' },
  { id: 'outcome', label: 'Outcome' },
  { id: 'learnings', label: 'Learnings' },
]

const meta = [
  { label: 'Role', value: 'Senior Product Designer' },
  { label: 'Timeline', value: 'February 2025 to Present' },
  { label: 'Team', value: '5-person cross-functional team' },
  { label: 'Scope', value: 'Research · Product Strategy · Information Architecture · UX/UI · Usability Testing · Product Management · Product Evolution' },
]

const team = ['Senior Product Designer (me)', '2 Developers', 'Pelvic physiotherapy specialist', 'Business stakeholder']

const fragments = ['Generic clinic software', 'Paper questionnaires', 'Separate clinical records', "Different parts of the professional's workflow"]

const insights = [
  {
    title: 'Generic systems did not reflect the specialty',
    text: 'Professionals were already using clinic management software, but those products were built around general healthcare workflows rather than pelvic physiotherapy.',
  },
  {
    title: 'Clinical information was fragmented',
    text: 'Specialized questionnaires and other clinical records could live on paper while operational information remained inside generic software.',
  },
  {
    title: 'A questionnaire-only product would add another tool',
    text: 'A digital questionnaire library alone would not solve the larger workflow problem. Professionals would still need another system for scheduling, patient registration, financial management, and everyday operations.',
  },
  {
    title: 'The product needed to support continuity over time',
    text: "Professionals needed to revisit previous clinical information and understand how the patient's records changed over time.",
  },
]

const shift = [
  { label: 'Initial concept', text: 'Specialized questionnaires' },
  { label: 'Research insight', text: 'Questionnaires were only one part of a fragmented workflow' },
  { label: 'Product shift', text: 'Specialized pelvic physiotherapy platform' },
  {
    label: 'MVP foundation',
    list: ['Patient management', 'Scheduling', 'Clinical records', 'Questionnaires', 'Specialty-specific workflows'],
  },
]

const timeline = [
  { step: 'Initial concept' },
  { step: 'Discovery', note: '~20 professionals' },
  { step: 'Product shift' },
  { step: 'MVP definition' },
  { step: 'UX/UI design' },
  { step: 'Usability testing', note: '4 to 5 participants' },
  { step: 'Development', note: '~9 months' },
  { step: 'Launch', mark: true },
  { step: 'Real usage', post: true },
  { step: 'Support + feedback', post: true },
  { step: 'Product evolution', post: true },
]

const v1 = [
  'Assessment access was not prominent enough',
  'Clinical history was harder to revisit',
  'The relationship between assessment and consultation was less clear',
  'Previous records were harder to identify',
]

const v2 = [
  'Assessments are more visible from the patient context',
  'Current and previous assessments are easier to distinguish',
  'Historical records remain accessible',
  'The hierarchy better reflects the clinical workflow',
]

const decisionGoals = [
  'identify the current assessment',
  'revisit previous assessments',
  'understand the relationship between assessments and consultations',
  'access clinical information without searching through disconnected areas',
]

const oldFlow = ['Appointment', 'Open another screen', 'Navigate to appointment details', 'Find rescheduling controls', 'Reschedule']
const newFlow = ['Click appointment', 'Reschedule directly']

const img = (n) => `${import.meta.env.BASE_URL}images/mc-${n}.jpg`
const evolved = [
  { name: 'Patient management', src: img('patient-management'), note: 'Active patients, new leads, and weekly consultations at a glance, with the last appointment visible for each patient.' },
  { name: 'Clinical assessments', src: img('clinical-assessments'), note: 'Specialty forms split into guided sections, with progress saved as the professional works.' },
  { name: 'Patient record structure', src: img('patient-record'), note: 'One record with tabs for assessment, evolution, questionnaires, diaries, documents, and therapeutic plan.' },
  { name: 'Scheduling', src: img('scheduling'), note: 'Month, week, and day views, with blocked periods and appointment status in the same calendar.' },
  { name: 'Questionnaires', src: img('questionnaires'), pos: '50% 30%', note: 'A library of specialized questionnaires, filterable by audience, applied from the patient record.' },
  { name: 'Financial workflows', src: img('financial'), note: 'What is due, overdue, and received, organized by date with one-click confirmation.' },
  { name: 'General navigation and usability', src: img('navigation'), pos: '50% 8%', note: 'Global patient search with keyboard navigation, reachable from any screen.' },
]

const continuity = ['Questionnaires', 'Assessments', 'Biofeedback records', 'Electrotherapy records', 'Consultations', 'Follow-up information']

function Chapter({ id, title, children, className = '' }) {
  const i = chapters.findIndex((c) => c.id === id)
  return (
    <section id={`cs-${id}`} className={`cs-section ${className}`}>
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

const Ph = ({ children }) => <span className="ph">{children}</span>

const media = (name) => `${import.meta.env.BASE_URL}videos/myclinic360-${name}`

function ProductClip({ name, label, caption, alt }) {
  return (
    <Reveal as="figure" className="cs-clip">
      <BrowserMockup video={media(`${name}.mp4`)} poster={media(`${name}.jpg`)} alt={alt} url="myclinic360" />
      <figcaption>
        <p className="label">{label}</p>
        <p>{caption}</p>
      </figcaption>
    </Reveal>
  )
}

export default function MyClinic360() {
  return (
    <main className="cs">
      {/* Hero */}
      <header className="cs-hero wrap">
        <Reveal as="a" href="/#work" className="cs-back">← Selected work</Reveal>
        <Reveal as="p" className="case-kicker">
          <span className="case-num">01</span>
          <span>MyClinic360</span>
          <span className="dot">·</span>
          <span className="case-cat">Healthcare SaaS</span>
          <span className="dot">·</span>
          <span className="case-cat">0→1 Product · MVP · Post-launch evolution</span>
        </Reveal>
        <Reveal as="h1">
          Designing a <em>specialized</em> clinical platform for pelvic physiotherapists.
        </Reveal>
        <Reveal as="p" className="cs-subhead">
          Turning fragmented clinical workflows into a more continuous patient experience.
        </Reveal>
        <Reveal className="cs-prose cs-intro">
          <p>MyClinic360 is a healthcare SaaS platform created specifically for pelvic physiotherapy.</p>
          <p>
            I worked on the product from its earliest stage, helping define the product direction, research user
            needs, design the experience, manage delivery, and evolve the platform after launch.
          </p>
        </Reveal>
      </header>

      <div className="wrap">
        <Reveal>
          <BrowserMockup src={`${import.meta.env.BASE_URL}images/myclinic360-home.jpg`} alt="MyClinic360 home dashboard" url="myclinic360" />
        </Reveal>

        <Reveal as="dl" className="cs-meta">
          {meta.map((m) => (
            <div key={m.label} className={m.label === 'Scope' ? 'wide' : ''}>
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
              {m.label === 'Team' && <ul className="cs-plain">{team.map((t) => <li key={t}>{t}</li>)}</ul>}
            </div>
          ))}
        </Reveal>

        <Reveal as="div" role="navigation" className="cs-arc" aria-label="Project chapters">
          {chapters.map((c, i) => (
            <a key={c.id} href="/work/myclinic360" onClick={(e) => {
              e.preventDefault()
              document.getElementById(`cs-${c.id}`)?.scrollIntoView({ behavior: 'smooth' })
            }}>
              <span>{String(i + 1).padStart(2, '0')}</span>{c.label}
            </a>
          ))}
        </Reveal>
        <Ownership
          owned={<p>End-to-end product design, from research and product definition to flows, information architecture, interface design, prototyping, usability testing, and ongoing product evolution.</p>}
          team={['2 developers', 'Pelvic physiotherapy specialist', 'Business stakeholder']}
          decision={<p>Expanding the MVP beyond specialized questionnaires. Research showed that physiotherapists already depended on generic clinic systems, so a questionnaire-only product would not solve the real workflow problem.</p>}
          impact={<p>Continuous user feedback after launch became a key input for improving navigation, clinical workflows, and feature prioritization.</p>}
        />
      </div>

      {/* 01 The original idea */}
      <Chapter id="idea" title="The original idea was much smaller.">
        <div className="cs-two">
          <Reveal className="cs-prose">
            <p>
              The initial concept was to create a digital space where pelvic physiotherapists could access and use
              specialized clinical questionnaires.
            </p>
            <p>
              These questionnaires cover different areas of pelvic health and are an important part of clinical
              assessment.
            </p>
            <p>At first, the opportunity seemed straightforward: move these questionnaires from paper into a digital environment.</p>
          </Reveal>
          <Reveal className="cs-hypothesis">
            <p className="label">The first hypothesis was</p>
            <p>Digitize the questionnaires.</p>
          </Reveal>
        </div>
      </Chapter>

      {/* 02 Research: the real problem + snapshot */}
      <Chapter id="research" title="Research showed that the questionnaires were only one part of a much bigger problem.">
        <div className="cs-two">
          <Reveal className="cs-prose">
            <p>
              Before the MVP was defined, we spoke with approximately 20 pelvic physiotherapists to understand how
              they were currently working.
            </p>
            <p>The main problem was not simply that questionnaires were on paper. <strong>The deeper problem was fragmentation.</strong></p>
            <p>
              Professionals were adapting their work to generic clinic systems that were not designed for pelvic
              physiotherapy. At the same time, specialized questionnaires and other clinical information were often
              kept on paper or in separate records.
            </p>
          </Reveal>
          <Reveal className="cs-fragments">
            <p className="label">One patient's history could be spread across</p>
            <ul>{fragments.map((f) => <li key={f}>{f}</li>)}</ul>
          </Reveal>
        </div>

        <Reveal as="p" className="cs-statement accent">
          The information existed.<br />The problem was that it was not connected.
        </Reveal>

        <Beat label="Research snapshot">
          <div className="cs-research">
            <Reveal className="cs-research-side">
              <div className="cs-bigstat">
                <b>20</b>
                <span>pelvic physiotherapists participated in the initial discovery</span>
              </div>
              <dl>
                <div><dt>Method</dt><dd>Structured questionnaire + direct conversations</dd></div>
                <div><dt>Research focus</dt><dd>Daily workflows · current tools · clinical needs · recurring friction</dd></div>
              </dl>
            </Reveal>
            <div>
              <Reveal as="p" className="cs-beat-label">What we learned</Reveal>
              <ol className="cs-insight-list">
                {insights.map((it, i) => (
                  <Reveal as="li" key={it.title}>
                    <span className="n">Insight {String(i + 1).padStart(2, '0')}</span>
                    <h4>{it.title}</h4>
                    <p>{it.text}</p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </Beat>
      </Chapter>

      {/* 03 Product shift + opportunity */}
      <Chapter id="shift" title="Discovery changed the product direction.">
        <div className="cs-two">
          <Reveal className="cs-prose">
            <p>The research made one thing clear: a questionnaire-only product would not be enough to change existing behavior.</p>
            <p>
              Even though generic clinic systems were not ideal for pelvic physiotherapy, professionals still depended
              on them because they supported essential day-to-day operations.
            </p>
            <p>
              <strong>
                The product needed to combine those operational foundations with the specialized clinical workflows
                of pelvic physiotherapy.
              </strong>
            </p>
          </Reveal>
          <Reveal as="ol" className="cs-shift">
            {shift.map((s, i) => (
              <li key={s.label} className={i === shift.length - 1 ? 'last' : ''}>
                <p className="label">{s.label}</p>
                {s.text && <p className="cs-shift-text">{s.text}</p>}
                {s.list && <ul className="cs-shift-list">{s.list.map((l) => <li key={l}>{l}</li>)}</ul>}
              </li>
            ))}
          </Reveal>
        </div>
        <Reveal as="p" className="cs-statement">
          We stopped thinking about a questionnaire library and started designing a <em>clinical platform</em>.
        </Reveal>
        <Reveal as="p" className="cs-footnote">
          The MVP covered this foundation. Later capabilities were added as the product evolved.
        </Reveal>

        <Beat label="The product opportunity" title="The goal was not simply to digitize forms.">
          <Reveal as="p" className="cs-statement first accent">
            It was to connect the patient's clinical history over time.
          </Reveal>
          <Reveal className="cs-prose narrow">
            <p>
              By bringing clinical information into the same product environment, professionals could revisit
              previous records instead of relying on disconnected paper and digital sources.
            </p>
            <p>
              Over time, the platform could support a more continuous view of the patient journey, including
              previous questionnaires, assessments, biofeedback records, electrotherapy records, consultations, and
              follow-up information.
            </p>
          </Reveal>
        </Beat>
      </Chapter>

      {/* 04 MVP */}
      <Chapter id="mvp" title="We built the first version knowing it would not be the final version.">
        <div className="cs-two">
          <Reveal className="cs-prose">
            <p>The MVP was designed, developed, and prepared for launch over approximately nine months.</p>
            <p>Formal usability testing before launch involved approximately 4 to 5 participants.</p>
            <p>
              Once the product was live, real usage, support conversations, and direct feedback became an
              additional source of product discovery.
            </p>
          </Reveal>
          <Reveal as="ol" className="cs-flow">
            {timeline.map((f) => (
              <li key={f.step} className={`${f.post ? 'post' : ''} ${f.mark ? 'mark' : ''}`}>
                <span>{f.step}</span>
                {f.note && <em>{f.note}</em>}
              </li>
            ))}
          </Reveal>
        </div>
        <Reveal as="figure" className="cs-canvas">
          <div className="cs-canvas-img">
            <img
              src={`${import.meta.env.BASE_URL}images/myclinic360-figma-flows.webp`}
              alt="Figma working file for the MyClinic360 MVP, organized by product flow"
              loading="lazy"
            />
          </div>
          <figcaption>
            <p className="label">Inside the MVP design file</p>
            <p className="cs-canvas-lead">The first version, organized by product flow rather than by screen.</p>
            <ul>
              <li>Sign-up and login</li>
              <li>Homes and admin profile</li>
              <li>Specialized questionnaires as forms, such as FSDS-R and IIEF-5</li>
              <li>Patient flow and clinical record</li>
              <li>Emails and admin area</li>
            </ul>
            <p className="cs-canvas-note">A shared working file, used by the team throughout delivery.</p>
          </figcaption>
        </Reveal>
        <Reveal as="p" className="cs-statement accent">Launch became another research phase.</Reveal>
      </Chapter>

      {/* 05 Support as research */}
      <Chapter id="support" title="The most valuable usability issues started appearing after launch.">
        <div className="cs-two">
          <Reveal className="cs-prose">
            <p>
              Once professionals began using MyClinic360 in their real routines, I started following support much
              more closely.
            </p>
            <p>This gave me direct access to recurring questions, confusion, and friction inside the product.</p>
            <p>
              When the same question appeared repeatedly, it became a signal that the product structure might not be
              matching the user's mental model.
            </p>
          </Reveal>
          <Reveal as="blockquote" className="cs-quote big">
            If several users ask the same question, the problem may not be the user.
            <span>It may be the product.</span>
          </Reveal>
        </div>
        <Reveal as="p" className="cs-statement">Support became part of the research process.</Reveal>
      </Chapter>

      {/* 06 Story 01: Assessments */}
      <Chapter id="assessments" title="A core clinical record existed in the system, but professionals struggled to find it.">
        <Reveal className="cs-story-tag">Case story 01 · Clinical assessments</Reveal>
        <div className="cs-two">
          <Reveal className="cs-prose">
            <p>
              Clinical assessments are central to the pelvic physiotherapy workflow. They contain important
              information about the patient and become part of the patient's ongoing clinical history.
            </p>
            <p>
              After launch, support conversations revealed a recurring issue: professionals were creating
              assessments but later had difficulty locating and reopening them.
            </p>
            <p className="cs-punch">The feature existed.<br />The problem was discoverability and information architecture.</p>
          </Reveal>
          <Reveal className="cs-why">
            <p className="label">Why this mattered</p>
            <h4>The problem was not just navigation.</h4>
            <p>
              If a professional cannot quickly find an assessment, it becomes harder to recover the patient context
              during follow-up care.
            </p>
            <p>
              The product structure needed to reflect how professionals think about the patient: not as isolated
              forms, but as a continuous clinical history.
            </p>
          </Reveal>
        </div>
        <Reveal className="cs-chain-wrap">
          <Chain steps={['Patient', 'Assessment', 'Consultation', 'Clinical history']} variant="accent" />
        </Reveal>

        <Beat label="The design decision" title="Bring the assessment back into the patient context.">
          <div className="cs-two">
            <Reveal className="cs-prose">
              <p>
                Instead of treating assessments as standalone forms, I restructured the patient experience so they
                became a more visible part of the patient record.
              </p>
            </Reveal>
            <Reveal className="cs-goals">
              <p className="label">The goal was to make it easier to</p>
              <ul className="cs-ticks">{decisionGoals.map((g) => <li key={g}>{g}</li>)}</ul>
            </Reveal>
          </div>
          <div className="cs-ba">
            <Reveal className="cs-ba-col">
              <p className="cs-ver">Version 1</p>
              <Shot product="MyClinic360 patient record, version 1" src={`${import.meta.env.BASE_URL}images/mc-v1-patient-record.webp`} ratio="4 / 3" />
              <ul className="cs-obs">{v1.map((o) => <li key={o}>{o}</li>)}</ul>
            </Reveal>
            <Reveal className="cs-ba-col">
              <p className="cs-ver v2">Version 2</p>
              <Shot product="MyClinic360 patient record, version 2" src={img('patient-record')} ratio="4 / 3" />
              <ul className="cs-obs v2">{v2.map((o) => <li key={o}>{o}</li>)}</ul>
            </Reveal>
          </div>
          <ProductClip
            name="patient-hub"
            label="In the product"
            caption="From the patient list into the patient record, where assessment, evolution, questionnaires, diaries, and the therapeutic plan live side by side."
            alt="Screen recording: opening a patient and moving through the patient record tabs"
          />
        </Beat>
      </Chapter>

      {/* 07 Story 02: Scheduling */}
      <Chapter id="scheduling" title="A simple reschedule required unnecessary navigation.">
        <Reveal className="cs-story-tag">Case story 02 · Scheduling</Reveal>
        <Reveal className="cs-prose narrow">
          <p>Scheduling is one of the most frequent operational tasks in the product.</p>
          <p>
            In the previous experience, rescheduling a patient required the professional to navigate through
            multiple screens before reaching the action. The user had to leave the current scheduling context to
            complete a task that should have been immediate.
          </p>
        </Reveal>

        <div className="cs-flows">
          <Reveal className="cs-flowblock">
            <p className="cs-ver">Before</p>
            <Chain steps={oldFlow} variant="muted" />
            <p className="cs-flow-copy">The action was separated from the context where the user needed it.</p>
            <Shot product="Previous appointment details screen" src={`${import.meta.env.BASE_URL}images/mc-v1-appointment.webp`} ratio="16 / 9" />
          </Reveal>
          <Reveal className="cs-flowblock after">
            <p className="cs-ver v2">After</p>
            <Chain steps={newFlow} variant="accent" />
            <p className="cs-flow-copy">The updated interaction opens the appointment information immediately. From there, the professional can:</p>
            <ul className="cs-ticks">
              <li>select a new date or time</li>
              <li>record the reason for the reschedule</li>
              <li>complete the action without navigating away</li>
            </ul>
            <Shot product="Redesigned appointment details opened from the calendar" src={`${import.meta.env.BASE_URL}images/mc-v2-appointment.webp`} ratio="16 / 9" />
          </Reveal>
        </div>

        <ProductClip
          name="scheduling"
          label="In the product"
          caption="Clicking an appointment opens its details right away, and editing happens in the same place, without leaving the calendar."
          alt="Screen recording: opening an appointment from the calendar and editing it in place"
        />

        <Reveal className="cs-metric wide">
          <div className="cs-metric-main"><b>5</b><span className="arrow">→</span><b className="gold">2</b></div>
          <div>
            <p className="cs-metric-label">steps · Core appointment rescheduling flow</p>
            <p className="cs-metric-sub"><b>60%</b> fewer steps</p>
          </div>
        </Reveal>

        <Beat label="The design principle" title="Keep frequent actions close to the user's current context.">
          <div className="cs-two">
            <Reveal className="cs-prose">
              <p>The scheduling redesign was not simply about removing screens.</p>
              <p>The goal was to reduce unnecessary navigation and keep the user inside the task they were already performing.</p>
            </Reveal>
            <Reveal className="cs-principle">
              <p className="label">A principle for later improvements</p>
              <p>Frequent actions should happen as close as possible to where the user needs them.</p>
            </Reveal>
          </div>
        </Beat>
      </Chapter>

      {/* 08 Evolution + continuity */}
      <Chapter id="evolution" title="The MVP became the foundation, not the final product.">
        <Reveal className="cs-prose narrow">
          <p>As real usage exposed new opportunities, MyClinic360 continued evolving.</p>
        </Reveal>
        <div className="cs-mosaic seven">
          {evolved.map((a, i) => (
            <Reveal key={a.name} className={`cs-tile t${i + 1}`}>
              <div className="cs-tile-img"><img src={a.src} alt={`MyClinic360: ${a.name}`} loading="lazy" style={a.pos ? { objectPosition: a.pos } : undefined} /></div>
              <p><strong>{a.name}</strong>{a.note}</p>
            </Reveal>
          ))}
        </div>

        <ProductClip
          name="financeiro"
          label="Financial workflows"
          caption="One of the areas added as the product evolved: an overview of what is due, a statement of entries, and monthly analysis."
          alt="Screen recording: financial overview, statement, and analysis screens"
        />

        <Beat label="Continuity of clinical information" title="Making previous clinical information easier to revisit.">
          <div className="cs-two">
            <Reveal className="cs-prose">
              <p>
                One of the broader goals of the product evolution was to reduce the fragmentation between past and
                current patient information.
              </p>
              <p>
                The platform makes it easier for professionals to revisit previous questionnaires, assessments,
                biofeedback records, electrotherapy records, and other follow-up information over time.
              </p>
              <p><strong>This creates a more continuous view of the patient's history inside the product.</strong></p>
            </Reveal>
            <Reveal className="cs-continuity">
              <p className="label">One patient record, over time</p>
              <ul>{continuity.map((c) => <li key={c}>{c}</li>)}</ul>
            </Reveal>
          </div>
        </Beat>
      </Chapter>

      {/* 09 Outcome + feedback */}
      <Chapter id="outcome" title="A specialized product shaped by real clinical use.">
        <Reveal className="cs-outcomes three">
          <div><b className="gold">300+</b><span>registered professionals</span><small>The platform has grown to more than 300 registered professionals.</small></div>
          <div><b className="gold">5 → 2</b><span>steps in a core scheduling flow</span></div>
          <div><b>MVP → continuous evolution</b><span>product improvements driven by real feedback and support insights</span></div>
        </Reveal>
        <Reveal className="cs-prose narrow cs-after-metrics">
          <p>
            MyClinic360 evolved from an initial MVP into a specialized platform shaped by the real workflows of
            pelvic physiotherapists.
          </p>
          <p>The product continues to change as new needs emerge and professionals use it in real clinical environments.</p>
        </Reveal>

      </Chapter>

      {/* 10 Learnings + next */}
      <Chapter id="learnings" title="Research does not stop when the product launches.">
        <div className="cs-two">
          <Reveal className="cs-prose">
            <p>Formal discovery gave us the foundation for the first product direction.</p>
            <p>
              But some of the most important insights came later, when professionals started using the system in
              real clinical situations.
            </p>
            <p>
              Following support conversations helped me identify repeated usability patterns, understand where the
              product conflicted with users' expectations, and prioritize improvements with much more context.
            </p>
          </Reveal>
          <Reveal className="cs-reflection">
            <p className="label">Reflection</p>
            <p>
              If I were starting the project again, I would establish a more structured continuous research process
              earlier in the product lifecycle.
            </p>
          </Reveal>
        </div>

        <div className="cs-next-phase">
          <Reveal className="cs-badges"><span>In development</span></Reveal>
          <Reveal as="h3" className="cs-story-title">Exploring how AI can support clinical workflows.</Reveal>
          <Reveal className="cs-prose narrow">
            <p>
              The next product phase is exploring LLM-based capabilities to help professionals work with information
              from exams, biofeedback, electrotherapy, and relevant clinical studies.
            </p>
            <p>The objective is to make useful clinical context easier to access while professionals review patient information.</p>
            <p className="cs-footnote">This work is currently in exploration and development. It is not a released feature.</p>
          </Reveal>
        </div>
      </Chapter>

      {/* End */}
      <section className="cs-end">
        <div className="wrap">
          <Reveal as="p" className="cs-end-statement">
            From a questionnaire idea<br />to a <em>specialized clinical platform</em>.
          </Reveal>
          <Reveal as="p" className="cs-end-copy">
            What started as a narrow idea became a broader product after research revealed the real problem:
            pelvic physiotherapists needed a system designed around their specialty, not another generic tool they
            had to adapt to.
          </Reveal>
        </div>
      </section>

      <section className="cs-nextnav">
        <div className="wrap">
          <a href="/work/medco" className="cs-next-link">
            <span className="label">Next project</span>
            <span className="cs-next-name">Med.co <span aria-hidden="true">→</span></span>
            <span className="cs-next-cat">Digital Health / Telemedicine</span>
          </a>
          <a href="/#work" className="cs-back">← Back to selected work</a>
        </div>
      </section>
    </main>
  )
}

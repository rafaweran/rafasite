import Reveal from '../components/Reveal'
import Ownership from '../components/Ownership'
import CaseCta from '../components/CaseCta'
import { Shot } from '../components/CaseStudy'

// Competition prototype.
// Do not add metrics, savings, adoption, or production claims. Dashboard numbers are demonstration data.

const chapters = [
  { id: 'challenge', label: 'The challenge' },
  { id: 'process', label: 'Understanding the process' },
  { id: 'roles', label: 'Roles' },
  { id: 'flow', label: 'End-to-end flow' },
  { id: 'requester', label: 'Requester' },
  { id: 'operator', label: 'Bidding operator' },
  { id: 'bidding', label: 'Bidding model' },
  { id: 'trust', label: 'Accreditation & audit' },
  { id: 'systems', label: 'Systems thinking' },
  { id: 'status', label: 'Competition' },
]

const meta = [
  { label: 'Role', value: 'Product Designer' },
  { label: 'Domain', value: 'GovTech · Procurement · Travel Management' },
  { label: 'Status', value: 'Competition in progress' },
  { label: 'Scope', value: 'Process Mapping · Business Analysis · UX/UI · Role-Based Workflows · System Analysis', wide: true },
]

const sources = ['Paper', 'Email', 'SEI', 'Manual coordination', 'Separate decisions']
const unclear = ['current status', 'who is responsible', 'what happens next', 'which documents are missing', 'what decision was made', 'why an exception happened']
const discovery = ['current operational steps', 'involved roles', 'business rules', 'manual bottlenecks', 'approval logic', 'bidding requirements', 'audit needs', 'security and traceability requirements']

const roles = [
  { name: 'Who requests the trip', text: 'Creates and follows the travel request.', group: 'internal' },
  { name: 'Who qualifies agencies', text: 'Reviews agency credentials and eligibility.', group: 'internal' },
  { name: 'Who conducts the bidding process', text: 'Manages quotations, sessions, deadlines, proposals, and exceptions.', group: 'internal' },
  { name: 'Who audits', text: 'Reviews process history, fiscal information, and compliance.', group: 'internal' },
  { name: 'Accredited agency', text: 'Participates in eligible bidding sessions and issues tickets when selected.', group: 'external' },
  { name: 'Agency under review', text: 'Completes the accreditation process.', group: 'external' },
]

const roleSees = ['the information relevant to them', 'the actions they can perform', 'the status they need to understand', 'the deadlines they are responsible for', 'the next step in their part of the workflow']

const img = (n) => `${import.meta.env.BASE_URL}images/${n}`

const flow = [
  { step: 'Travel need', who: 'Requester' },
  { step: 'Request created', who: 'Requester' },
  { step: 'Authorization', who: 'Institution' },
  { step: 'Request preparation', who: 'Operator' },
  { step: 'Quotation / bidding window', who: 'Operator' },
  { step: 'Accredited agencies submit proposals', who: 'Agencies' },
  { step: 'Proposal evaluation', who: 'Operator' },
  { step: 'Winner declaration', who: 'Operator' },
  { step: 'Ticket issuance', who: 'Agency' },
  { step: 'Fiscal documentation', who: 'Operator' },
  { step: 'Audit', who: 'Auditor' },
  { step: 'Process closure', who: 'Institution' },
]

const requesterNeeds = ['create a new request', 'continue a draft', 'understand the current status', 'see whether a quotation exists', 'follow progress', 'act only when something requires their attention']

const requesterNotes = [
  'Three steps: the trip, who travels, and authorization.',
  'Route and dates sit in one search bar, the first decision the requester makes.',
  'Travel conditions are set with compact selectors instead of a long form.',
  'The requesting unit is shown from the start; notes for the agency stay optional.',
]

const operatorMonitors = ['active sessions', 'accredited agencies', 'submitted proposals', 'bidding deadlines', 'issuance deadlines', 'pending requests', 'expiring credentials', 'exceptions', 'operational risks']

const operatorNotes = [
  { title: 'Active bidding window', text: 'Shows the current route, session state, remaining time, invited agencies, and proposal count.' },
  { title: 'Needs your attention', text: 'Surfaces issues requiring immediate action, such as missed issuance deadlines or actions due today.' },
  { title: 'Monitor', text: 'Separates lower-urgency operational items, such as expiring agency documents or pending requests.' },
  { title: 'Operational overview', text: 'Context through active accredited agencies, quotations, consolidation time, and exception processes.' },
]

const biddingRules = [
  'bidding windows open at scheduled times',
  'agencies prepare in advance',
  'proposals remain sealed during the active window',
  'the process records proposal participation',
  'the winning proposal is declared according to the defined rules',
  'exceptions require justification',
]

const sealedShows = ['how many agencies were invited', 'how many proposals have been received', 'when the bidding window closes', 'whether proposals are still pending']

const accreditation = ['Agency registration', 'Professional / company documentation', 'Eligibility review', 'Document validity control', 'Accreditation status', 'Suspension when required', 'Requalification when needed']

const traceFields = ['who performed the action', 'when it happened', 'what process it belonged to', 'what status changed', 'whether an exception occurred', 'the justification when required']
const auditAreas = ['Process history', 'Audit trail', 'Fiscal documentation', 'Exception records', 'Issuance history']

const privacy = ['LGPD awareness', 'Role-based permissions', 'Restricted access to sensitive data', 'Traceability of actions', 'Protection of personal information', 'Controlled document access']

const translated = ['system structure', 'role-based navigation', 'user flows', 'interface hierarchy', 'business rules', 'statuses', 'actions', 'exception handling']

const responsibilities = ['Product Design', 'UI Design', 'Workflow Design', 'Process Mapping', 'Systems Analysis', 'Business Analysis', 'Information Architecture', 'Role-Based UX', 'Business Rules', 'Prototype Design', 'Developer Collaboration']

function Chapter({ id, title, children }) {
  const i = chapters.findIndex((c) => c.id === id)
  return (
    <section id={`uj-${id}`} className="cs-section">
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

// Desktop screen with numbered annotations beside it.
function Annotated({ shot, notes, demo }) {
  return (
    <Reveal className="uj-annotated">
      <div className="uj-screen">
        <div className="mock-bar" aria-hidden="true">
          <span className="mock-dots"><i /><i /><i /></span>
          <span className="mock-url">uirajarr</span>
        </div>
        {shot}
        {demo && <span className="uj-demo">Demonstration data</span>}
      </div>
      <ol className="uj-notes">
        {notes.map((n, i) => (
          <li key={i}>
            <span className="cs-ann-dot">{i + 1}</span>
            <div>
              {n.title && <p className="uj-note-title">{n.title}</p>}
              <p>{n.text || n}</p>
            </div>
          </li>
        ))}
      </ol>
    </Reveal>
  )
}

export default function Uirajarr() {
  return (
    <main className="cs uj">
      {/* Hero */}
      <header className="cs-hero wrap">
        <Reveal as="a" href="/#work" className="cs-back">← Selected work</Reveal>
        <Reveal as="p" className="case-kicker">
          <span className="case-num">TJRR</span>
          <span>UIRAJARR</span>
          <span className="dot">·</span>
          <span className="case-cat">GovTech · Workflow Design · Public Sector</span>
        </Reveal>
        <Reveal as="h1">
          Turning a fragmented government travel process into one <em>traceable</em> digital workflow.
        </Reveal>
        <Reveal className="uj-hero-badges">
          <span className="uj-rank"><b>1st place</b> Stage 1 · 9.85 score</span>
          <span className="uj-live">Competition in progress</span>
        </Reveal>
        <Reveal className="cs-prose cs-intro">
          <p>
            A digital product concept designed for the Court of Justice of Roraima (TJRR) to transform a manual travel
            request, bidding, issuance, and audit process into a structured role-based workflow.
          </p>
          <p>
            My work focused on translating complex business rules, multiple responsibilities, operational constraints,
            and audit requirements into a clear digital experience.
          </p>
        </Reveal>
      </header>

      <div className="wrap">
        <Reveal className="uj-screen hero">
          <div className="mock-bar" aria-hidden="true">
            <span className="mock-dots"><i /><i /><i /></span>
            <span className="mock-url">uirajarr</span>
          </div>
          <Shot product="UIRAJARR operator dashboard" src={img('uj-operator-dashboard.jpg')} ratio="2000 / 997" />
          <span className="uj-demo">Demonstration data</span>
        </Reveal>

        <Reveal as="dl" className="cs-meta">
          {meta.map((m) => (
            <div key={m.label} className={m.wide ? 'wide' : ''}><dt>{m.label}</dt><dd>{m.value}</dd></div>
          ))}
        </Reveal>

        <Reveal as="div" role="navigation" className="cs-arc" aria-label="Project chapters">
          {chapters.map((c, i) => (
            <a key={c.id} href="/work/uirajarr" onClick={(e) => {
              e.preventDefault()
              document.getElementById(`uj-${c.id}`)?.scrollIntoView({ behavior: 'smooth' })
            }}>
              <span>{String(i + 1).padStart(2, '0')}</span>{c.label}
            </a>
          ))}
        </Reveal>
        <Ownership
          owned={<p>Process mapping, requirements definition, UX/UI design, role-based flows, prototyping, and the translation of complex business rules into a clear digital experience.</p>}
          decision={<p>Structuring the product around role-based workflows and traceability instead of reproducing the existing fragmented process screen by screen. The goal was to simplify the journey while preserving accountability, approvals, exceptions, and audit history.</p>}
          team={['2 developers', 'Business specialist']} impactLabel="Product impact" impact={<p>Reduced process fragmentation by centralizing requests, approvals, bidding, ticket issuance, and auditability in one workflow.</p>} />
      </div>

      {/* 01 Challenge + current state */}
      <Chapter id="challenge" title="The problem was not booking a flight. It was managing everything that had to happen before and after it.">
        <div className="cs-two">
          <Reveal className="cs-prose">
            <p>
              The institutional travel process involved multiple people, approvals, agencies, quotations, documents,
              deadlines, financial responsibilities, and audit requirements.
            </p>
            <p>
              Much of the existing process depended on manual coordination across paper, email, SEI (the
              institution's electronic document system), and administrative follow-up.
            </p>
            <p>
              <strong>
                The challenge was to transform this fragmented workflow into one digital system without losing the
                controls, accountability, and traceability required by the institution.
              </strong>
            </p>
          </Reveal>
          <Reveal className="cs-hypothesis">
            <p className="label">The complexity was not in the ticket</p>
            <p>It was in the process around it.</p>
          </Reveal>
        </div>

        <Beat label="The current-state problem" title="A fragmented process created operational friction.">
          <Reveal className="uj-frag">
            <div className="uj-frag-sources">
              {sources.map((s) => <span key={s}>{s}</span>)}
            </div>
            <p className="uj-frag-arrow" aria-hidden="true">↓</p>
            <p className="uj-frag-result">Fragmented workflow</p>
            <p className="uj-frag-arrow" aria-hidden="true">↓</p>
            <div className="uj-frag-unclear">
              <p className="label">Harder to understand</p>
              <ul>{unclear.map((u) => <li key={u}>{u}</li>)}</ul>
            </div>
          </Reveal>
          <Reveal as="p" className="cs-statement">
            Different parts of the process lived in different places, requiring teams to manually reconstruct what had
            happened and what still needed to happen.
          </Reveal>
        </Beat>
      </Chapter>

      {/* 02 Understanding */}
      <Chapter id="process" title="Before designing screens, we had to understand the process.">
        <div className="cs-two">
          <Reveal className="cs-prose">
            <p>The project began with stakeholder conversations focused on how the travel process worked in practice.</p>
            <p>This was not a formal large-scale user research study. The goal was to understand the process well enough to design it.</p>
            <div className="uj-methods">
              <span>Stakeholder discovery</span><i>→</i><span>Process mapping</span><i>→</i><span>Business rules analysis</span><i>→</i><span>Workflow design</span>
            </div>
          </Reveal>
          <Reveal className="cs-goals">
            <p className="label">What we needed to understand</p>
            <ul className="cs-ticks">{discovery.map((d) => <li key={d}>{d}</li>)}</ul>
          </Reveal>
        </div>
      </Chapter>

      {/* 03 Roles + principle */}
      <Chapter id="roles" title="One process. Multiple responsibilities.">
        <Reveal className="cs-prose narrow">
          <p>The travel workflow involved different actors with very different responsibilities.</p>
        </Reveal>
        <Reveal className="uj-roles">
          {roles.map((r) => (
            <div key={r.name} className={`uj-role ${r.group}`}>
              <p className="label">{r.group === 'internal' ? 'Court' : 'Agency'}</p>
              <h4>{r.name}</h4>
              <p>{r.text}</p>
            </div>
          ))}
        </Reveal>
        <Reveal as="p" className="cs-statement">
          Each role needed visibility into the same process without being exposed to responsibilities that belonged
          to someone else.
        </Reveal>

        <Beat label="Design principle" title="Expose the process, not all of its complexity.">
          <div className="cs-two">
            <Reveal className="cs-prose">
              <p>The system contains significant institutional complexity.</p>
              <p>But every user does not need to see every rule, stage, exception, or responsibility.</p>
              <p className="cs-statement small">Complex system.<br />Role-specific experience.</p>
            </Reveal>
            <Reveal className="cs-goals">
              <p className="label">Each role sees</p>
              <ul className="cs-ticks">{roleSees.map((r) => <li key={r}>{r}</li>)}</ul>
            </Reveal>
          </div>
        </Beat>
      </Chapter>

      {/* 04 Flow */}
      <Chapter id="flow" title="From travel need to audit.">
        <Reveal as="ol" className="uj-flow">
          {flow.map((f, i) => (
            <li key={f.step} data-who={f.who}>
              <span className="n">{String(i + 1).padStart(2, '0')}</span>
              <span className="s">{f.step}</span>
              <span className="w">{f.who}</span>
            </li>
          ))}
        </Reveal>
        <Reveal as="p" className="cs-footnote">Simplified representation for the portfolio. Not the institution's internal process documentation.</Reveal>
      </Chapter>

      {/* 05 Requester */}
      <Chapter id="requester" title="The requester should not have to understand the entire procurement process.">
        <div className="cs-two">
          <Reveal className="cs-prose">
            <p>For the person requesting travel, the product focuses on a much simpler set of needs.</p>
            <p>
              The complexity of bidding, accreditation, fiscal review, and audit stays outside this experience unless it
              directly affects the requester.
            </p>
          </Reveal>
          <Reveal className="cs-goals">
            <p className="label">The requester can</p>
            <ul className="cs-ticks">{requesterNeeds.map((r) => <li key={r}>{r}</li>)}</ul>
          </Reveal>
        </div>
        <Annotated shot={<Shot product="UIRAJARR new travel request, step 1" src={`${import.meta.env.BASE_URL}images/uj-new-request.webp`} ratio="2000 / 1047" />} notes={requesterNotes} demo />
        <Reveal as="p" className="cs-statement">The interface simplifies the institutional process without hiding its progress.</Reveal>
      </Chapter>

      {/* 06 Operator */}
      <Chapter id="operator" title="The same system becomes significantly more operational for the person conducting the bidding process.">
        <div className="cs-two">
          <Reveal className="cs-prose">
            <p>The bidding operator manages a much broader operational context.</p>
            <p>This dashboard intentionally contains more information because the role itself carries more responsibility.</p>
          </Reveal>
          <Reveal className="cs-goals">
            <p className="label">This role needs to monitor</p>
            <ul className="uj-chips">{operatorMonitors.map((m) => <li key={m}>{m}</li>)}</ul>
          </Reveal>
        </div>

        <Reveal className="uj-density">
          <div>
            <p className="label">Requester</p>
            <div className="uj-bar"><span style={{ width: '28%' }} /></div>
            <p>Request, status, next step</p>
          </div>
          <div>
            <p className="label">Bidding operator</p>
            <div className="uj-bar"><span style={{ width: '92%' }} /></div>
            <p>Sessions, proposals, agencies, deadlines, exceptions</p>
          </div>
        </Reveal>
        <Reveal as="p" className="cs-statement">Different roles required different levels of information density.</Reveal>

        <Beat label="Designing for attention" title="Not everything on the dashboard has the same urgency.">
          <Annotated shot={<Shot product="Dashboard for the person conducting the bidding process" src={img('uj-operator-dashboard.jpg')} ratio="2000 / 997" />} notes={operatorNotes} demo />
          <Reveal as="p" className="cs-footnote">Numbers shown in the prototype are demonstration data, not TJRR production data.</Reveal>
        </Beat>
      </Chapter>

      {/* 07 Bidding */}
      <Chapter id="bidding" title="Introducing structured competition between accredited agencies.">
        <div className="cs-two">
          <Reveal className="cs-prose">
            <p>
              One of the important product concepts was to create scheduled bidding windows in which accredited
              agencies can participate.
            </p>
            <p>
              Instead of handling each travel request through isolated manual coordination, eligible agencies can see
              available opportunities and submit proposals within a defined window.
            </p>
          </Reveal>
          <Reveal className="cs-goals">
            <p className="label">In the current product concept</p>
            <ul className="cs-ticks">{biddingRules.map((r) => <li key={r}>{r}</li>)}</ul>
          </Reveal>
        </div>
        <Reveal as="p" className="cs-statement accent">Competition becomes part of the workflow, not an external manual process.</Reveal>

        <Beat label="Sealed proposals" title="Competition needed transparency without exposing proposals too early.">
          <div className="cs-two">
            <Reveal className="cs-prose">
              <p>During the active bidding window, submitted proposals remain sealed.</p>
              <p>The goal is to preserve the integrity of the process while keeping the operator aware of participation.</p>
              <p className="label" style={{ marginTop: 8 }}>The interface communicates</p>
              <ul className="cs-ticks">{sealedShows.map((s) => <li key={s}>{s}</li>)}</ul>
            </Reveal>
            <Reveal className="uj-sealed">
              <Shot product="Active bidding window with sealed proposals" src={img('uj-bidding-window.jpg')} ratio="1090 / 495" />
            </Reveal>
          </div>
        </Beat>
      </Chapter>

      {/* 08 Accreditation + audit + privacy */}
      <Chapter id="trust" title="Agencies must become eligible before they can compete.">
        <div className="cs-two">
          <Reveal className="cs-prose">
            <p>The product includes a separate accreditation workflow for travel agencies.</p>
            <p>Exact documentation requirements are defined by the institution and kept generic here.</p>
          </Reveal>
          <Reveal as="ol" className="cs-shift">
            {accreditation.map((a, i) => (
              <li key={a} className={i === accreditation.length - 1 ? 'last' : ''}><p className="cs-shift-text">{a}</p></li>
            ))}
          </Reveal>
        </div>

        <Beat label="Accreditation, version 1 to version 2" title="From one long form to a guided, pre-filled flow.">
          <div className="cs-flows">
            <Reveal className="cs-flowblock">
              <p className="cs-ver">Version 1</p>
              <p className="cs-flow-copy">
                The original flow concentrated identification, contact details, and eight required documents on a single
                page, with progress tracked in a side panel. Although all information was available, the density made the
                experience harder to scan and weakened the hierarchy of the tasks.
              </p>
              <Shot product="UIRAJARR agency accreditation, version 1" src={`${import.meta.env.BASE_URL}images/uj-accreditation-v1.webp`} ratio="2000 / 1932" />
              <p className="uj-tradeoffs">High information density · weak task hierarchy · greater cognitive load</p>
            </Reveal>
            <Reveal className="cs-flowblock after">
              <p className="cs-ver v2">Version 2</p>
              <p className="cs-flow-copy">
                The redesigned flow was reorganized into three explicit steps with a stepper, clearer hierarchy, and
                progressive disclosure. Company information is pre-filled from Receita Federal data whenever available,
                reducing unnecessary input and helping prevent errors.
              </p>
              <Shot product="UIRAJARR agency accreditation, version 2" src={`${import.meta.env.BASE_URL}images/uj-accreditation-v2.webp`} ratio="2000 / 1617" />
              <p className="uj-tradeoffs v2">Progressive disclosure · clearer hierarchy · reduced input · improved accessibility</p>
            </Reveal>
          </div>
          <Reveal className="uj-why">
            <p className="label">Why the redesign</p>
            <div className="cs-prose">
              <p>
                The first version placed identification, contact information, and eight document requirements on a single
                screen, creating a dense experience with weak task hierarchy. The redesign broke the journey into three
                clear steps, reduced unnecessary input through pre-filled company data, clarified progression, and
                improved the visibility of primary actions.
              </p>
              <p>
                Accessibility was also treated as part of the redesign, with clearer labels, stronger visual hierarchy,
                more predictable interaction states, and a structure that is easier to scan, understand, and complete.
              </p>
            </div>
          </Reveal>
          <Reveal as="p" className="cs-canvas-note">Demonstration data.</Reveal>
        </Beat>

        <Beat label="Traceability and audit" title="Every important decision needs a history.">
          <div className="cs-two">
            <Reveal className="cs-goals">
              <p className="label">Important actions are associated with</p>
              <ul className="cs-ticks">{traceFields.map((t) => <li key={t}>{t}</li>)}</ul>
            </Reveal>
            <Reveal className="uj-log" aria-label="Illustrative audit entry structure">
              <p className="label">Structure of a history entry</p>
              <div className="uj-log-row"><span>Who</span><em>Role and user</em></div>
              <div className="uj-log-row"><span>When</span><em>Date and time</em></div>
              <div className="uj-log-row"><span>Process</span><em>Request reference</em></div>
              <div className="uj-log-row"><span>Status</span><em>Previous and new status</em></div>
              <div className="uj-log-row"><span>Justification</span><em>Required for exceptions</em></div>
            </Reveal>
          </div>
          <Reveal className="uj-areas">{auditAreas.map((a) => <span key={a}>{a}</span>)}</Reveal>
          <Reveal as="p" className="cs-statement">
            The product needed to make the process easier to operate without making it harder to audit.
          </Reveal>
        </Beat>

        <Beat label="Security and privacy" title="Process visibility does not mean unrestricted access.">
          <Reveal className="cs-prose narrow">
            <p>The solution was designed around role-based access and information visibility.</p>
          </Reveal>
          <Reveal className="uj-privacy">{privacy.map((p) => <div key={p}>{p}</div>)}</Reveal>
        </Beat>
      </Chapter>

      {/* 09 Systems thinking + role */}
      <Chapter id="systems" title="The interface was only one layer of the problem.">
        <div className="cs-two">
          <Reveal className="cs-prose">
            <p>
              Designing the product required understanding how business rules, roles, approvals, bidding, agency
              eligibility, fiscal documentation, and audit requirements affected one another.
            </p>
            <p><strong>The design work sat between product design, systems analysis, and business analysis.</strong></p>
          </Reveal>
          <Reveal className="cs-goals">
            <p className="label">Operational complexity translated into</p>
            <ul className="uj-chips">{translated.map((t) => <li key={t}>{t}</li>)}</ul>
          </Reveal>
        </div>

        <Beat label="My role" title="Translating institutional complexity into a usable product.">
          <div className="cs-two">
            <Reveal className="cs-prose">
              <p>My role combined Product Design, Systems Analysis, and Business Analysis.</p>
              <p>
                I worked on understanding the current process, organizing business rules, defining role-based workflows,
                and translating those requirements into the product experience and interface.
              </p>
            </Reveal>
            <Reveal>
              <ul className="tags">{responsibilities.map((r) => <li key={r}>{r}</li>)}</ul>
            </Reveal>
          </div>
        </Beat>
      </Chapter>

      {/* 10 Competition + status */}
      <Chapter id="status" title="Designed as part of the TJRR Innovation Award.">
        <div className="cs-two">
          <Reveal className="cs-prose">
            <p>
              The solution is being developed for the 5th Innovation Award of the Judiciary of Roraima, in the
              Technology Solution track.
            </p>
            <p>
              The competition is still in progress. The team is developing and refining the working solution for the
              next stages, and it remains among the teams still competing.
            </p>
            <div className="cs-badges"><span>Competition in progress</span><span>Working prototype</span></div>
          </Reveal>
          <Reveal className="uj-score">
            <div><b>1st</b><span>place · Stage 1</span></div>
            <div><b className="gold">9.85</b><span>evaluation score</span></div>
          </Reveal>
        </div>
        <Reveal as="p" className="cs-footnote">A competition prototype, not a production system in use by TJRR.</Reveal>

        <Beat label="What this project demonstrates" title="Designing for complexity without transferring that complexity to every user.">
          <div className="cs-two">
            <Reveal className="cs-prose">
              <p>This project required a different type of Product Design work. The challenge was not primarily visual.</p>
              <p>
                It required understanding a multi-role institutional process, identifying responsibilities, mapping
                business rules, simplifying workflows, and creating interfaces that expose the right information to the
                right person at the right moment.
              </p>
            </Reveal>
            <Reveal className="cs-reflection">
              <p className="label">Reflection</p>
              <p>A complex system does not require every user to experience the full complexity.</p>
            </Reveal>
          </div>
        </Beat>
      </Chapter>

      <section className="cs-end">
        <div className="wrap">
          <Reveal as="p" className="cs-end-statement">
            One institutional process.<br />Multiple roles.<br />One <em>traceable</em> workflow.
          </Reveal>
          <Reveal as="p" className="cs-end-copy">
            UIRAJARR explores how a fragmented public-sector travel process can become a structured digital experience
            while preserving competition, accountability, security, and auditability.
          </Reveal>
        </div>
      </section>

      <CaseCta />

      <section className="cs-nextnav">
        <div className="wrap">
          <a href="/work/myclinic360" className="cs-next-link">
            <span className="label">Next project</span>
            <span className="cs-next-name">MyClinic360 <span aria-hidden="true">→</span></span>
            <span className="cs-next-cat">Healthcare SaaS</span>
          </a>
          <a href="/#work" className="cs-back">← Back to selected work</a>
        </div>
      </section>
    </main>
  )
}

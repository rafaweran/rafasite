import Reveal from './Reveal'
import Todo from './Todo'

// "What was mine" block for each case: ownership, collaborators, one defended decision, and one usage metric.
export default function Ownership({ owned, team, decision, impact, impactLabel = 'Usage impact' }) {
  return (
    <Reveal className="cs-own">
      <div>
        <p className="label">I owned</p>
        {owned || <Todo as="p">what was yours end to end in this project</Todo>}
      </div>
      <div>
        <p className="label">I worked with</p>
        {team ? <ul className="cs-plain">{team.map((t) => <li key={t}>{t}</li>)}</ul> : <Todo as="p">roles on the team</Todo>}
      </div>
      <div>
        <p className="label">A decision I defended</p>
        {decision || <Todo as="p">the decision, who disagreed, and why you held it</Todo>}
      </div>
      <div>
        <p className="label">{impactLabel}</p>
        {impact || <Todo as="p">one usage or business number: adoption, retention, completion, time saved, support reduction</Todo>}
      </div>
    </Reveal>
  )
}

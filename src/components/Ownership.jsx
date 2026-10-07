import Reveal from './Reveal'

// Project summary: ownership, collaborators, one defended decision, and the outcome or product evolution.
export default function Ownership({ owned, team, decision, impact, impactLabel = 'Usage impact' }) {
  const cols = [
    ['I owned', owned],
    ['I worked with', team && <ul className="cs-plain">{team.map((t) => <li key={t}>{t}</li>)}</ul>],
    ['A decision I defended', decision],
    [impactLabel, impact],
  ].filter(([, v]) => v)
  return (
    <Reveal className="cs-own">
      {cols.map(([label, v]) => <div key={label}><p className="label">{label}</p>{v}</div>)}
    </Reveal>
  )
}

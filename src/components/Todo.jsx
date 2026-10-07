// Visible marker for content Rafaelle still has to provide. Never replace with invented facts.
export default function Todo({ children, as: Tag = 'span' }) {
  return <Tag className="todo"><b>TODO</b> {children}</Tag>
}

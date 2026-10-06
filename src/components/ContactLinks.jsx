import { useState } from 'react'
import { profile } from '../data'

// Visible email with a copy button (mailto alone fails for people without a mail app), plus LinkedIn.
export default function ContactLinks() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <div className="contact-links">
      <a href={`mailto:${profile.email}`} className="contact-email">{profile.email}</a>
      <button type="button" className="contact-copy" onClick={copy} aria-live="polite">
        {copied ? 'Copied ✓' : 'Copy email'}
      </button>
      <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-li">LinkedIn ↗</a>
    </div>
  )
}

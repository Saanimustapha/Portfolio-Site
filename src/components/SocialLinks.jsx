import { GitBranch, Link, Mail } from 'lucide-react'

const links = [
  { icon: GitBranch, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: Link, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:yourname@example.com', label: 'Email' },
]

export default function SocialLinks() {
  return (
    <div className="social-links">
      {links.map(({ icon: Icon, href, label }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
          <Icon size={18} />
        </a>
      ))}
    </div>
  )
}
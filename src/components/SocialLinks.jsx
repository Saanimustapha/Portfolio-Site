import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail } from 'lucide-react'

const links = [
  { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
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
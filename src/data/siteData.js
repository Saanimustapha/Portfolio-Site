import {
  Code2,
  Layout,
  Smartphone,
  Database,
  Mail,
  GitBranch,
  Link,
} from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const navLinks = [
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
]

export const heroData = {
  greeting: 'Hi There! I’m Saani Mustapha Deishini',
  titleTop: 'A Full Stack & Devops Engineer.',
  titleBottom: 'I Help Build Efficient And Scalable Software Solutions',
  subtitle:
    'With hands-on experience building and deploying secure applications.',
}

export const skills = [
  {
    title: 'Frontend Development',
    icon: Code2,
    items: ['React', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend Engineering',
    icon: Code2,
    items: ['Fast API', 'Microservices', 'Kafka', 'Redis'],
  },
  {
    title: 'Devops',
    icon: Layout,
    items: ['Kubernetes', 'Docker', 'Nginx'],
  },
  {
    title: 'Database Management',
    icon: Database,
    items: ['Postgres', 'MongoDB',],
  },
]

export const projects = [
  {
    title: 'Startup Launch Platform',
    description:
      'A responsive dashboard for startup teams to manage product rollout, internal updates, and growth metrics.',
    stack: ['React', 'CSS Modules', 'Framer Motion'],
    live: '#',
    github: '#',
  },
  {
    title: 'Modern Portfolio Site',
    description:
      'A high-conversion personal portfolio with animated sections, reusable components, and contact call-to-actions.',
    stack: ['React', 'Vite', 'React Router'],
    live: '#',
    github: '#',
  },
  {
    title: 'Creative Agency Landing Page',
    description:
      'A polished landing page with motion interactions, bold typography, and mobile-first responsiveness.',
    stack: ['React', 'Framer Motion', 'Custom CSS'],
    live: '#',
    github: '#',
  },
]

export const experiences = [
  {
    role: 'Frontend Engineer',
    company: 'Your Company',
    period: '2023 — Present',
    highlights: [
      'Built scalable user interfaces for customer-facing products.',
      'Improved performance and responsiveness across multiple pages.',
      'Collaborated with product designers to translate concepts into polished interfaces.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Previous Company',
    period: '2021 — 2023',
    highlights: [
      'Developed reusable components and internal UI patterns.',
      'Integrated APIs and improved the user experience across key product flows.',
      'Contributed to product launches and feature releases.',
    ],
  },
]

export const contactInfo = [
  {
    title: 'Email',
    value: 'yourname@example.com',
    icon: Mail,
    href: 'mailto:yourname@example.com',
  },
  {
    title: 'GitHub',
    value: 'github.com/yourusername',
    icon: FaGithub,
    href: 'https://github.com/yourusername',
  },
  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/yourusername',
    icon: FaLinkedin,
    href: 'https://linkedin.com/in/yourusername',
  },
]

export const stats = [
  { label: 'Years Experience', value: '4+' },
  { label: 'Projects Built', value: '20+' },
  { label: 'Technologies', value: '15+' },
]

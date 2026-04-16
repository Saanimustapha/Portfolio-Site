import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navLinks } from '../data/siteData'

export default function Navbar() {
  return (
    <header className="navbar-wrap">
      <div className="container navbar">
        <Link to="/" className="brand">
          <span className="brand-mark">▣</span>
          <span>Your Name</span>
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {({ isActive }) => (
                <span className="nav-link-inner">
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="nav-indicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
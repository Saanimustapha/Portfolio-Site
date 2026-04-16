import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import Container from '../components/Container'
import SocialLinks from '../components/SocialLinks'
import Card from '../components/Card'
import { heroData, stats } from '../data/siteData'

export default function Home() {
  return (
    <AnimatedSection>
      <Container>
        <section className="hero-grid">
          <div className="hero-copy">
            <motion.p
              className="hero-badge"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              ✌ {heroData.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-white">{heroData.titleTop}</span>{' '}
              <span className="text-neon">{heroData.titleBottom}</span>
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {heroData.subtitle}
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link className="btn btn-primary" to="/projects">
                View Projects
              </Link>
              <Link className="btn btn-secondary" to="/contact">
                Contact Me
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <SocialLinks />
            </motion.div>
          </div>

          <motion.div
            className="hero-visual-wrap"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="hero-visual">
              <div className="code-bubble">&lt;/&gt;</div>
              <div className="chat-bubble">UI + Motion</div>
              <div className="avatar-head" />
              <div className="avatar-body" />
              <div className="laptop" />
              <div className="desk" />
              <div className="coffee" />
              <div className="stack-books" />
            </div>
          </motion.div>
        </section>

        <section className="stats-grid">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </Card>
          ))}
        </section>
      </Container>
    </AnimatedSection>
  )
}

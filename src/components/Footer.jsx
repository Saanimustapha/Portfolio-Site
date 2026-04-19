import Container from './Container'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="footer-inner">
        <div>
          <p className="footer-brand">SMD</p>
          <p className="footer-copy">Built with React, motion, and a clean neon-dark aesthetic.</p>
        </div>
        <SocialLinks />
      </Container>
    </footer>
  )
}
import PageHero from '../components/PageHero'
import Container from '../components/Container'
import AnimatedSection from '../components/AnimatedSection'
import Card from '../components/Card'
import { contactInfo } from '../data/siteData'

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s Build Something Great"
        description="You can reach out for collaborations, freelance work, product design discussions, or frontend opportunities."
      />

      <AnimatedSection>
        <Container>
          <div className="grid cards-grid two-cols">
            {contactInfo.map(({ title, value, icon: Icon, href }) => (
              <Card key={title}>
                <div className="skill-icon-wrap">
                  <Icon size={24} />
                </div>
                <h3>{title}</h3>
                <a href={href} target="_blank" rel="noreferrer" className="contact-link">
                  {value}
                </a>
              </Card>
            ))}

            <Card className="contact-cta-card">
              <h3>Ready to work together?</h3>
              <p>
                I enjoy building clean, useful, visually engaging products with strong frontend foundations.
              </p>
              <a className="btn btn-primary" href="mailto:yourname@example.com">
                Send an Email
              </a>
            </Card>
          </div>
        </Container>
      </AnimatedSection>
    </>
  )
}
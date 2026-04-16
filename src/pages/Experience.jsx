import PageHero from '../components/PageHero'
import Container from '../components/Container'
import AnimatedSection from '../components/AnimatedSection'
import Card from '../components/Card'
import { experiences } from '../data/siteData'

export default function Experience() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="My Professional Journey"
        description="A quick look at the roles and product work that shaped my frontend experience."
      />

      <AnimatedSection>
        <Container>
          <div className="timeline">
            {experiences.map((item) => (
              <Card key={`${item.company}-${item.role}`} className="timeline-card">
                <p className="mini-badge">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="experience-company">{item.company}</p>
                <ul className="experience-list">
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </AnimatedSection>
    </>
  )
}
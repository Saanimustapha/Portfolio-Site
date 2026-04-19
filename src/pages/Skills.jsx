import PageHero from '../components/PageHero'
import Container from '../components/Container'
import Card from '../components/Card'
import AnimatedSection from '../components/AnimatedSection'
import { skills } from '../data/siteData'

export default function Skills() {
  return (
    <>
      <PageHero
        eyebrow="Skills"
        title="What I Use To Build Great Applications"
        description="My toolkit covers modern frontend and backend engineering as well as performance-focused user experiences."
      />

      <AnimatedSection>
        <Container>
          <div className="grid cards-grid two-cols">
            {skills.map(({ title, icon: Icon, items }) => (
              <Card key={title}>
                <div className="skill-icon-wrap">
                  <Icon size={24} />
                </div>
                <h3>{title}</h3>
                <ul className="tag-list">
                  {items.map((item) => (
                    <li key={item} className="tag">
                      {item}
                    </li>
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
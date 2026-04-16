import AnimatedSection from './AnimatedSection'
import Container from './Container'

export default function PageHero({ eyebrow, title, description }) {
  return (
    <AnimatedSection>
      <Container>
        <div className="page-hero">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </Container>
    </AnimatedSection>
  )
}
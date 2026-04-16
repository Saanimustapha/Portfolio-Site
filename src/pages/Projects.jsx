import PageHero from '../components/PageHero'
import Container from '../components/Container'
import Card from '../components/Card'
import AnimatedSection from '../components/AnimatedSection'
import { projects } from '../data/siteData'

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Selected Work"
        description="A few examples of interfaces and product experiences I’ve designed and built."
      />

      <AnimatedSection>
        <Container>
          <div className="grid cards-grid">
            {projects.map((project) => (
              <Card key={project.title}>
                <div className="project-card-top">
                  <span className="mini-badge">Featured Project</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tag-list">
                  {project.stack.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary small">
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-secondary small">
                    Source Code
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </AnimatedSection>
    </>
  )
}
import { useMemo, useState } from 'react'
import { ArrowRightOutlined, GithubOutlined } from '@ant-design/icons'
import { Button, Card, Col, Row, Tag, Typography } from 'antd'
import { PROJECTS, PROJECTS_PREVIEW_COUNT, PROJECTS_TEXT, type Project } from './consts'
import ProjectDescription from './ProjectDescription'
import { projectsStyles } from './styles'
import { getProjectKey } from './utils'
import './styles.css'

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      className={projectsStyles.card}
      cover={
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={projectsStyles.imageWrapper}
        >
          <div className={projectsStyles.cover}>
            <img src={project.image} alt={project.title} className={projectsStyles.projectImg} />
          </div>
        </a>
      }
    >
      <Typography.Title level={4} className={projectsStyles.cardTitle}>
        {project.title}
      </Typography.Title>
      <ProjectDescription description={project.description} />
      <div className={projectsStyles.tags}>
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className={projectsStyles.actions}>
        <Button
          type="text"
          icon={<GithubOutlined />}
          href={project.gitHub}
          target="_blank"
          rel="noopener noreferrer"
        />
        <Button
          type="text"
          target="_blank"
          rel="noopener noreferrer"
          href={project.link}
          icon={<ArrowRightOutlined />}
        />
      </div>
    </Card>
  )
}

function Projects() {
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = useMemo(
    () => (showAll ? PROJECTS : PROJECTS.slice(0, PROJECTS_PREVIEW_COUNT)),
    [showAll],
  )

  const hasMoreProjects = PROJECTS.length > PROJECTS_PREVIEW_COUNT

  return (
    <section id="projects" className={projectsStyles.section}>
      <div className={projectsStyles.header}>
        <div>
          <span className={projectsStyles.eyebrow}>{PROJECTS_TEXT.eyebrow}</span>
          <Typography.Title level={2}>{PROJECTS_TEXT.title}</Typography.Title><br/>
        </div>
        {hasMoreProjects ? (
          <Button
            type="link"
            icon={<ArrowRightOutlined />}
            onClick={() => setShowAll((open) => !open)}
          >
            {showAll ? PROJECTS_TEXT.showLess : PROJECTS_TEXT.viewAll}
          </Button>
        ) : null}
      </div>
      <Row gutter={[16, 16]} className={projectsStyles.grid}>
        {visibleProjects.map((project) => (
          <Col xs={24} md={8} key={getProjectKey(project)}>
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default Projects

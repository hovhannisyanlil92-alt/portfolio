import { ArrowRightOutlined, GithubOutlined } from '@ant-design/icons'
import { Button, Card, Col, Row, Tag, Typography } from 'antd'
import { PROJECTS, PROJECTS_TEXT } from './consts'
import { projectsStyles } from './styles'
import { getProjectKey } from './utils'

function Projects() {
  return (
    <section id="projects" className={projectsStyles.section}>
      <div className={projectsStyles.header}>
        <div>
          <span className={projectsStyles.eyebrow}>{PROJECTS_TEXT.eyebrow}</span>
          <Typography.Title level={2}>{PROJECTS_TEXT.title}</Typography.Title>
        </div>
        <Button type="link" icon={<ArrowRightOutlined />}>
          {PROJECTS_TEXT.viewAll}
        </Button>
      </div>
      <Row gutter={[16, 16]}>
        {PROJECTS.map((project) => (
          <Col xs={24} md={8} key={getProjectKey(project)}>
            <Card className={projectsStyles.card} cover={<div className={projectsStyles.cover} />}>
              <Typography.Title level={4}>{project.title}</Typography.Title>
              <Typography.Paragraph>{project.description}</Typography.Paragraph>
              <div className={projectsStyles.tags}>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <div className={projectsStyles.actions}>
                <Button type="text" icon={<GithubOutlined />} />
                <Button type="text" icon={<ArrowRightOutlined />} />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default Projects

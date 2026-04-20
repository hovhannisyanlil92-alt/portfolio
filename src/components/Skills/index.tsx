import { Card, Col, Row, Tag, Typography } from 'antd'
import { SKILL_GROUPS, SKILLS_TEXT } from './consts'
import { skillsStyles } from './styles'
import { getSkillGroupKey } from './utils'

function Skills() {
  return (
    <section id="skills" className={skillsStyles.section}>
      <div className={skillsStyles.header}>
        <span className={skillsStyles.eyebrow}>{SKILLS_TEXT.eyebrow}</span>
        <Typography.Title level={2}>{SKILLS_TEXT.title}</Typography.Title>
      </div>
      <Row gutter={[16, 16]}>
        {SKILL_GROUPS.map((group) => (
          <Col xs={24} md={8} key={getSkillGroupKey(group)}>
            <Card className={skillsStyles.card} title={group.title}>
              <div className={skillsStyles.tagWrap}>
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default Skills

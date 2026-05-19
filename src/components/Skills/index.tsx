import { Col, Row, Typography } from 'antd'
import { SKILL_GROUPS, SKILLS_TEXT } from './consts'
import { skillsStyles as s } from './styles'
import './styles.css'

const { Title, Text } = Typography

export default function Skills() {
  return (
    <section id="skills" className={s.section}>
      <div>
        <Text className={s.eyebrow}>{SKILLS_TEXT.eyebrow}</Text>
        <Title level={2} className={s.title}>
          {SKILLS_TEXT.title}
        </Title>
      </div>

      <Row gutter={[24, 24]} justify="center">
        {SKILL_GROUPS.map((group) => (
          <Col
            key={group.title}
            xs={24}
            md={12}
            lg={group.title === 'Frontend' ? 9 : group.title === 'AI' ? 6 : 9}
          >
            <div className={s.card}>
              <div className={s.cardHeader}>
                <img src={group.groupIcon} alt="" className={s.groupIconImg} />
                <Title level={4}>{group.title}</Title>
              </div>

              <div className={s.grid}>
                {group.items.map((skill) => (
                  <div className={s.item} key={skill.name}>
                    <div className={s.iconBox}>
                      <img src={skill.icon} alt={skill.name} className={s.skillIcon} />
                    </div>
                    <Text className={s.skillName}>{skill.name}</Text>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  )
}

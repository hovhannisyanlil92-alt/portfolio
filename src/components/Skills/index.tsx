import { Row, Col, Typography } from 'antd';
import { SKILL_GROUPS, SKILLS_TEXT } from './consts';
import { skillsStyles as s } from './styles'; 

const { Title, Text } = Typography;

export default function Skills() {
  return (
    <section id="skills" style={s.section}>
      <div>
        <Text style={s.eyebrow}>{SKILLS_TEXT.eyebrow}</Text>
        <Title level={2} style={s.title}>{SKILLS_TEXT.title}</Title>
      </div>

      <Row gutter={[24, 24]} justify="center">
        {SKILL_GROUPS.map((group) => (
          <Col 
            key={group.title}
            xs={24}   
            md={12}   
            lg={group.title === 'Frontend' ? 9 : group.title === 'AI' ? 6 : 9}
          >
            <div style={s.card}>
              <div style={s.cardHeader}>
                <img src={group.groupIcon} alt="" style={s.groupIconImg} />
                <Title level={4} style={{ margin: 0 }}>{group.title}</Title>
              </div>
              
              <div style={s.grid}>
                {group.items.map((skill) => (
                  <div style={s.item} key={skill.name}>
                    <div style={s.iconBox}>
                      <img src={skill.icon} alt={skill.name} style={s.skillIcon} />
                    </div>
                    <Text style={s.skillName}>{skill.name}</Text>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}

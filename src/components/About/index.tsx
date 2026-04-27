import { Col, Row, Typography } from 'antd'
import aboutPhoto from '../../assets/about-photo.png'
import { ABOUT_TEXT } from './consts'
import { aboutStyles } from './styles'
import { getStatKey } from './utils'

function About() {
  return (
    <div className='aboutSection'>
    <section id="about" className={aboutStyles.section}>
      <div className={aboutStyles.illustration}>
        <img src={aboutPhoto} alt={ABOUT_TEXT.imageAlt} className={aboutStyles.image} />
      </div>
      <div className={aboutStyles.content}>
        <span className={aboutStyles.eyebrow}>{ABOUT_TEXT.eyebrow}</span>
        <Typography.Title level={2}>{ABOUT_TEXT.title}</Typography.Title>
        <Typography.Paragraph>{ABOUT_TEXT.description}</Typography.Paragraph>
        <Row gutter={[16, 16]} className={aboutStyles.stats}>
          {ABOUT_TEXT.stats.map((item) => (
            <Col span={6} key={getStatKey(item.value, item.label)}>
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </Col>
          ))}
        </Row>
      </div>
    </section>
    </div>
  )
}

export default About

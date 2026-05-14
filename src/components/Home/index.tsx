import {
  DownloadOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  SendOutlined,
} from '@ant-design/icons'
import { Button, Tag, Typography } from 'antd'
import homePhoto from '../../assets/home-photo.png'
import { HOME_TEXT } from './consts'
import { homeStyles } from './styles'
import { buildFullName } from './utils'
import { Link } from 'react-router-dom'
import VideoAvatar from '../../videoAvatar/index'
import DId from '../../d-id/index'

function Home() {
  const fullName = buildFullName(HOME_TEXT.firstName, HOME_TEXT.lastName)

  return (
    <>
    <section id="home" className={homeStyles.section}>
      <div className={homeStyles.left}>
        <Tag className={homeStyles.tag}>{HOME_TEXT.greeting}</Tag>
        <Typography.Title className={homeStyles.title}>
          {fullName.split(' ')[0]}
          <br />
          {fullName.split(' ')[1]}
        </Typography.Title>
        <Typography.Title level={4} className={homeStyles.role}>
          {HOME_TEXT.role}
        </Typography.Title>
        <Typography.Paragraph className={homeStyles.description}>{HOME_TEXT.description}</Typography.Paragraph>
        <div className={homeStyles.cta}>
          <Link to="/cv">
            <Button type="primary" size="large" icon={<DownloadOutlined />}>
              {HOME_TEXT.cvLabel} 
            </Button>
          </Link>
          <Button size="large" icon={<MailOutlined />}>
            {HOME_TEXT.contactLabel}
          </Button>
        </div>
        <div className={homeStyles.socials}>
          <Button 
            shape="circle" 
            icon={<GithubOutlined />} 
            href="https://github.com/hovhannisyanlil92-alt"
            target="_blank" 
          />
          <Button 
            href="https://t.me/LilitHovhannisyan_dev"
            target="_blank" 
            shape="circle" 
            icon={<SendOutlined />} 
          />
          <Button 
            href='https://www.linkedin.com/in/lilit-hovhannisyan-729508211'
            target="_blank"
            shape="circle" icon={<LinkedinOutlined />} />
        </div>
      </div>
      <div className={homeStyles.right}>
        <div />
        <div className={homeStyles.avatar}>
          <img src={homePhoto} alt={HOME_TEXT.photoAlt} className={homeStyles.image} />
        </div>
      </div>
     
    </section>
      <div>
        <VideoAvatar />
        <DId />
      </div>
    </>
  )
}

export default Home

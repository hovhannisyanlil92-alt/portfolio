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

function Home() {
  const fullName = buildFullName(HOME_TEXT.firstName, HOME_TEXT.lastName)

  return (
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
          <Button shape="circle" icon={<GithubOutlined />} />
          <Button shape="circle" icon={<LinkedinOutlined />} />
          <Button shape="circle" icon={<SendOutlined />} />
        </div>
      </div>
      <div className={homeStyles.right}>
        <div />
        <div className={homeStyles.avatar}>
          <img src={homePhoto} alt={HOME_TEXT.photoAlt} className={homeStyles.image} />
        </div>
      </div>
      <div>
        <br /><br /><br />
        <iframe width="560" height="315" src="../../src/assets/Avatar-Video.mp4" title="Avatar IV Video" allow="encrypted-media; fullscreen;" allowfullscreen ></iframe>
       
      </div>
    </section>
  )
}

export default Home

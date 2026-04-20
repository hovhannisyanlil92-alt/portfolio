import { SendOutlined } from '@ant-design/icons'
import { Button, Card, Divider, Input, Typography } from 'antd'
import { CONTACT_TEXT } from './consts'
import { contactStyles } from './styles'

function Contact() {
  return (
    <section id="contact" className={contactStyles.section}>
      <div className={contactStyles.left}>
        <span className={contactStyles.eyebrow}>{CONTACT_TEXT.eyebrow}</span>
        <Typography.Title level={2}>{CONTACT_TEXT.title}</Typography.Title>
        <p>{CONTACT_TEXT.description}</p>
        <Divider />
        <p>{CONTACT_TEXT.email}</p>
        <p>{CONTACT_TEXT.location}</p>
        <p>{CONTACT_TEXT.availability}</p>
      </div>
      <Card className={contactStyles.form}>
        <Input placeholder={CONTACT_TEXT.namePlaceholder} />
        <Input placeholder={CONTACT_TEXT.emailPlaceholder} />
        <Input.TextArea rows={4} placeholder={CONTACT_TEXT.messagePlaceholder} />
        <Button type="primary" icon={<SendOutlined />}>
          {CONTACT_TEXT.submit}
        </Button>
      </Card>
    </section>
  )
}

export default Contact

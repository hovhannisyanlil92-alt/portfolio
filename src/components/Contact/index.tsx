// import { SendOutlined } from '@ant-design/icons'
// import { Button, Card, Divider, Input, Typography } from 'antd'
// import { CONTACT_TEXT } from './consts'
// import { contactStyles } from './styles'
// import contactIcon from '../../assets/contact-icon.png'

// function Contact() {
//   return (
//     <section id="contact" className={contactStyles.section}>
//       <div className={contactStyles.left}>
//         <span className={contactStyles.eyebrow}>{CONTACT_TEXT.eyebrow}</span>
//         <Typography.Title level={2}>{CONTACT_TEXT.title}</Typography.Title>
//         <p>{CONTACT_TEXT.description}</p>
//         <Divider />
//         <p>{CONTACT_TEXT.email}</p>
//         <p>{CONTACT_TEXT.location}</p>
//         <p>{CONTACT_TEXT.availability}</p>
//       </div>
//       <Card className={contactStyles.form}>
//         <Input placeholder={CONTACT_TEXT.namePlaceholder} />
//         <Input placeholder={CONTACT_TEXT.emailPlaceholder} />
//         <Input.TextArea rows={4} placeholder={CONTACT_TEXT.messagePlaceholder} />
//         <Button type="primary" icon={<SendOutlined />}>
//           {CONTACT_TEXT.submit}
//         </Button>
//       </Card>
//           <div className={contactStyles.right}>
//             <img src={contactIcon} style={{ objectFit: 'contain', width: '200px', height: 'auto'}}/>
//           </div>
//     </section>
//   )
// }

// export default Contact


import { Button, Input, Typography, Row, Col, Space } from 'antd';
import { SendOutlined, MailOutlined, EnvironmentOutlined, UserOutlined } from '@ant-design/icons';
import { CONTACT_TEXT } from './consts';
import { contactStyles as s } from './styles';
import contactIcon from '../../assets/contact-icon.png';

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

const ContactInfoItem = ({ icon, label, value }: { icon: any, label: string, value: string }) => (
  <div style={s.infoItem}>
    <div style={s.iconCircle}>{icon}</div>
    <div>
      <Text strong style={{ display: 'block', fontSize: '14px' }}>{label}</Text>
      <Text type="secondary">{value}</Text>
    </div>
  </div>
);

export default function Contact() {
  return (
    <section id="contact" style={s.section}>
      <Row gutter={[40, 40]} align="middle">
        
        {/* LEFT SIDE: Info */}
        <Col xs={24} lg={8}>
          <Text style={s.eyebrow}>{CONTACT_TEXT.eyebrow}</Text>
          <Title level={2} style={s.title}>{CONTACT_TEXT.title}</Title>
          <Paragraph style={s.description}>{CONTACT_TEXT.description}</Paragraph>
          
          <Space direction="vertical" size={24} style={{ width: '100%', marginTop: 20 }}>
            <ContactInfoItem icon={<MailOutlined />} label="Email" value={CONTACT_TEXT.email} />
            <ContactInfoItem icon={<EnvironmentOutlined />} label="Location" value={CONTACT_TEXT.location} />
            <ContactInfoItem icon={<UserOutlined />} label="Availability" value={CONTACT_TEXT.availability} />
          </Space>
        </Col>

        {/* MIDDLE: Form */}
        <Col xs={24} lg={10}>
          <div style={s.formWrapper}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Input placeholder={CONTACT_TEXT.namePlaceholder} style={s.input} />
              </Col>
              <Col xs={24} sm={12}>
                <Input placeholder={CONTACT_TEXT.emailPlaceholder} style={s.input} />
              </Col>
              <Col span={24}>
                <TextArea rows={5} placeholder={CONTACT_TEXT.messagePlaceholder} style={s.input} />
              </Col>
            </Row>
            <Button type="primary" icon={<SendOutlined />} style={s.submitBtn}>
              {CONTACT_TEXT.submit}
            </Button>
          </div>
        </Col>
        <Col xs={24} lg={6} style={{ textAlign: 'center', marginTop: '30px' }}>
          <img 
            src={contactIcon} 
            alt="contact illustration" 
            style={{ ...s.illustration, maxWidth: '300px' }} // Slightly smaller on mobile
          />
        </Col>

      </Row>
    </section>
  );
}

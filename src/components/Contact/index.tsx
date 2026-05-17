import type { ReactNode } from 'react';
import { Button, Input, Typography, Row, Col, Space } from 'antd';
import { SendOutlined, MailOutlined, EnvironmentOutlined, UserOutlined } from '@ant-design/icons';
import { CONTACT_TEXT } from './consts';
import { contactStyles as s } from './styles';
import contactIcon from '../../assets/contact-icon.png';
import './styles.css';

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

type ContactInfoItemProps = {
  icon: ReactNode;
  label: string;
  value: string;
};

function ContactInfoItem({ icon, label, value }: ContactInfoItemProps) {
  return (
    <div className={s.infoItem}>
      <div className={s.iconCircle}>{icon}</div>
      <div>
        <Text strong className="contact-info-label" style={{ display: 'block' }}>
          {label}
        </Text>
        <Text type="secondary">{value}</Text>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className={s.section}>
      <Row gutter={[40, 40]} align="middle">
        <Col xs={24} lg={8}>
          <Text className={s.eyebrow}>{CONTACT_TEXT.eyebrow}</Text>
          <Title level={2} className={s.title}>
            {CONTACT_TEXT.title}
          </Title>
          <Paragraph className={s.description}>{CONTACT_TEXT.description}</Paragraph>

          <Space direction="vertical" size={24} style={{ width: '100%', marginTop: 20 }}>
            <ContactInfoItem icon={<MailOutlined />} label="Email" value={CONTACT_TEXT.email} />
            <ContactInfoItem
              icon={<EnvironmentOutlined />}
              label="Location"
              value={CONTACT_TEXT.location}
            />
            <ContactInfoItem
              icon={<UserOutlined />}
              label="Availability"
              value={CONTACT_TEXT.availability}
            />
          </Space>
        </Col>

        <Col xs={24} lg={10}>
          <div className={s.formWrapper}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Input placeholder={CONTACT_TEXT.namePlaceholder} className={s.input} />
              </Col>
              <Col xs={24} sm={12}>
                <Input placeholder={CONTACT_TEXT.emailPlaceholder} className={s.input} />
              </Col>
              <Col span={24}>
                <TextArea
                  rows={5}
                  placeholder={CONTACT_TEXT.messagePlaceholder}
                  className={s.input}
                />
              </Col>
            </Row>
            <Button type="primary" icon={<SendOutlined />} className={s.submitBtn}>
              {CONTACT_TEXT.submit}
            </Button>
          </div>
        </Col>

        <Col xs={24} lg={6} style={{ textAlign: 'center', marginTop: '30px' }}>
          <img
            src={contactIcon}
            alt="contact illustration"
            className={s.illustration}
            style={{ maxWidth: '300px' }}
          />
        </Col>
      </Row>
    </section>
  );
}

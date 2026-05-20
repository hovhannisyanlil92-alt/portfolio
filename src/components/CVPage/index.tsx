import { useRef } from 'react';
import { Row, Col, Typography, Divider, Avatar, Card, Button } from 'antd';
import {
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
  UserOutlined,
  SolutionOutlined,
  ReadOutlined,
  SafetyCertificateOutlined,
  CodeOutlined,
  DesktopOutlined,
  RocketOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import { cvStyles } from './styles';
import { parseCV } from './utils';
import type { SectionTitleProps } from './types';
import { downloadCvPdf } from './downloadPdf';
import { useCvMobileScale } from './useCvMobileScale';
import cvPage from '../../assets/cvPage.png';
import cvAvatar from '../../assets/cvAvatar.png';

import './styles.css';

const { Title, Text, Paragraph } = Typography;

const SectionTitle = ({ icon, title }: SectionTitleProps) => (
  <div className={cvStyles.sectionHeader}>
    <div className={cvStyles.iconCircle}>{icon}</div>
    <Title level={3} className={cvStyles.sectionTitle}>
      {title}
    </Title>
  </div>
);

export default function CVPage() {
  const cv = parseCV();
  const cvRef = useRef<HTMLDivElement>(null);
  const scaleWrapperRef = useRef<HTMLDivElement>(null);
  const updateScale = useCvMobileScale(cvRef, scaleWrapperRef);

  const handleDownload = async () => {
    await downloadCvPdf('cv', 'CV_Lilit_Hovhannisyan.pdf');
    updateScale();
  };

  return (
    <div className={cvStyles.page}>
      <div className={cvStyles.topBar}>
        <Title level={4}>My Portfolio</Title>
        <Button type="primary" icon={<DownloadOutlined />} onClick={handleDownload}>
          Download PDF
        </Button>
      </div>

      <div className={cvStyles.scaleViewport}>
        <div ref={scaleWrapperRef} className={cvStyles.scaleWrapper}>
          <div id="cv" ref={cvRef} className={cvStyles.container}>
        <Row className={cvStyles.row} wrap={false}>
          <Col flex="0 0 28%" className={cvStyles.sidebar}>
            <div className={cvStyles.avatarWrapper}>
              <Avatar size={140} shape='circle' src={cvAvatar} style={{ background: 'linear-gradient(180deg, #4f5282 0%, #2d2f54 100%)'}} />
            </div>

            <div>
              <Title level={4} className={cvStyles.sidebarTitle}>
                Contact
              </Title>
              <Paragraph className={cvStyles.sidebarText}>
                 <Button
                    icon={<MailOutlined />}
                    href='https://mail.google.com/mail/'
                    // target="_blank"
                    shape="circle"
                    ghost
                  /> {'hovhannisyan.lil.92@gmail.com '}
                {/* <MailOutlined /> {cv.email} */}
              </Paragraph>
              <Paragraph className={cvStyles.sidebarText}>
                <Button
                    icon={<GithubOutlined />}
                    href='https://github.com/hovhannisyanlil92-alt'
                    target="_blank"
                    shape="circle"
                    ghost
                  /> { cv.github}
                {/* <GithubOutlined /> {cv.github} */}
              </Paragraph>
              <Paragraph className={cvStyles.sidebarText}>
                 <Button
                    icon={<LinkedinOutlined />}
                    href='https://www.linkedin.com/in/lilit-hovhannisyan-729508211'
                    target="_blank"
                    shape="circle"
                    ghost
                  /> { cv.linkedin}
                {/* <LinkedinOutlined /> {cv.linkedin} */}
              </Paragraph>

              <Divider className={cvStyles.sidebarDivider} />

              <Title level={4} className={cvStyles.sidebarTitle}>
                Skills
              </Title>
              <div className="markdown-sidebar">
                <ReactMarkdown>{cv.frontendSkills}</ReactMarkdown>
              </div>

              <Divider className={cvStyles.sidebarDivider} />

              <Title level={4} className={cvStyles.sidebarTitle}>
                Languages
              </Title>
              <ReactMarkdown>{cv.languages}</ReactMarkdown>

              <div className={cvStyles.quoteBox}>
                <span className={cvStyles.quoteIcon}>“</span>
                <Text className={cvStyles.quoteText}>
                  Passionate about building user-friendly and efficient web applications.
                </Text>
              </div>
            </div>
          </Col>

          <Col flex="1 1 auto" className={cvStyles.mainContent}>
            <div className={cvStyles.heroSection}>
              <div className={cvStyles.heroText}>
                <Title className={cvStyles.nameHeader}>
                  Lilit
                  <br />
                  Hovhannisyan
                </Title>
                <Text className={cvStyles.roleSubHeader}>{cv.role}</Text>
                <div className={cvStyles.headerLinks}>
                  <Text className={cvStyles.headerLink}>
                    <MailOutlined /> {'hovhannisyan.lil.92@gmail.com '}
                  </Text>
                  <Text className={cvStyles.headerLinkSpaced}>
                    {/* <GithubOutlined /> github.com */}
                  </Text>
                </div>
              </div>
              <img src={cvPage} className={cvStyles.heroImage} alt="3d avatar" />
            </div>

            <div className={cvStyles.sectionsContainer}>
              <SectionTitle icon={<UserOutlined />} title="Summary" />
              <div className={cvStyles.markdownBlock}>
                <ReactMarkdown>{cv.summary}</ReactMarkdown>
              </div>
              <Divider />

              <SectionTitle icon={<SolutionOutlined />} title="Experience" />
              <div className={cvStyles.markdownBlock}>
                <ReactMarkdown>{cv.experience}</ReactMarkdown>
              </div>
              <Divider />

              <SectionTitle icon={<ReadOutlined />} title="Education" />
              <div className={cvStyles.markdownBlock}>
                <ReactMarkdown>{cv.education}</ReactMarkdown>
              </div>
              <Divider />

              <SectionTitle icon={<SafetyCertificateOutlined />} title="Certifications" />
              <div className={cvStyles.markdownBlock}>
                <ReactMarkdown>{cv.certifications}</ReactMarkdown>
              </div>

              <Row className={cvStyles.featuresRow} gutter={[16, 16]} style={{ marginTop: 40 }} wrap={false}>
                <Col flex="1">
                  <Card className={cvStyles.featureCard} bordered={false}>
                    <CodeOutlined className={cvStyles.featureIcon} />
                    <Title level={5} className={cvStyles.featureTitle}>
                      Clean Code
                    </Title>
                    <Text className={cvStyles.featureText}>Maintainable and scalable code.</Text>
                  </Card>
                </Col>
                <Col flex="1">
                  <Card className={cvStyles.featureCard} bordered={false}>
                    <DesktopOutlined className={cvStyles.featureIcon} />
                    <Title level={5} className={cvStyles.featureTitle}>
                      Modern UI/UX
                    </Title>
                    <Text className={cvStyles.featureText}>Responsive and user-friendly.</Text>
                  </Card>
                </Col>
                <Col flex="1">
                  <Card className={cvStyles.featureCard} bordered={false}>
                    <RocketOutlined className={cvStyles.featureIcon} />
                    <Title level={5} className={cvStyles.featureTitle}>
                      Performance
                    </Title>
                    <Text className={cvStyles.featureText}>
                      Optimized for the best user speed.
                    </Text>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

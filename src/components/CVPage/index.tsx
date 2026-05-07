import React from 'react';
import { Row, Col, Typography, Divider, Avatar, Card, Button } from 'antd';
import { 
  MailOutlined, GithubOutlined, LinkedinOutlined, 
  UserOutlined, SolutionOutlined, ReadOutlined, 
  SafetyCertificateOutlined, CodeOutlined, DesktopOutlined, 
  RocketOutlined, DownloadOutlined 
} from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { CV_TEXT } from '../../data/cv'; 
import { styles } from './CVPageStyles';

const { Title, Text, Paragraph } = Typography;

// Helper to parse EVERY section from your Markdown
function parseCV(text: string) {
  const getSection = (title: string) => {
    const part = text.split(title);
    if (part.length < 2) return "";
    return part[1].split("---")[0].trim();
  };

  return {
    name: "Lilit Hovhannisyan",
    role: "Frontend Developer",
    email: "lilit.hovhannisyan.dev@gmail.com",
    github: "github.com",
    linkedin: "linkedin.com",
    skills: getSection("### Skills"),
    summary: getSection("##  About Me"),
    experience: getSection("##  Experience"),
    education: getSection("##  Education"),
    certifications: getSection("##  Certifications"),
    frontendSkills: getSection("### FrontendSkills"),
    languages: getSection('## Languages')
  };
}

const SectionTitle = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
  <div style={styles.sectionHeader}>
    <div style={styles.iconCircle}>{icon}</div>
    <Title level={3} style={{ margin: 0, fontSize: '20px' }}>{title}</Title>
  </div>
);

export default function CVPage() {
  const cv = parseCV(CV_TEXT);

  const handleDownload = async () => {
    const el = document.getElementById("cv");
    if (!el) return;
    
    const canvas = await html2canvas(el, { scale: 2, useCORS: true });
    const img = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    
    const width = 210;
    const height = (canvas.height * width) / canvas.width;
    
    pdf.addImage(img, "PNG", 0, 0, width, height);
    pdf.save("CV_Lilit_Hovhannisyan.pdf");
  };

  return (
    <div style={styles.pageWrapper}>
      
      {/* Top Bar for Desktop/Mobile View */}
      <div style={styles.topDownloadBar}>
        <Title level={4} style={{ margin: 0 }}>My Portfolio</Title>
        <Button 
          type="primary" 
          icon={<DownloadOutlined />} 
          onClick={handleDownload}
        >
          Download PDF
        </Button>
      </div>

      {/* CV CONTAINER */}
      <div id="cv" style={styles.container}>
        <Row>
          
          {/* SIDEBAR - Full width on mobile (xs), 7/24 on desktop (md) */}
          <Col xs={24} md={7} style={styles.sidebar}>
            <div style={styles.avatarWrapper}>
               <Avatar size={140} icon={<UserOutlined />} src="/assets/about-photo.png" />
            </div>

            <div style={styles.sidebarContent}>
              <Title level={4} style={styles.sidebarTitle}>Contact</Title>
              <Paragraph style={styles.sidebarText}><MailOutlined /> {cv.email}</Paragraph>
              <Paragraph style={styles.sidebarText}><GithubOutlined /> {cv.github}</Paragraph>
              <Paragraph style={styles.sidebarText}><LinkedinOutlined /> {cv.linkedin}</Paragraph>

              <Divider style={styles.sidebarDivider} />

              <Title level={4} style={styles.sidebarTitle}>Skills</Title>
              <div className="markdown-sidebar">
                <ReactMarkdown children={cv.frontendSkills} />
              </div>

              <Divider style={styles.sidebarDivider} />

              <Title level={4} style={styles.sidebarTitle}>Languages</Title>
              <ReactMarkdown children={cv.languages} />

              {/* Quote box - hidden on mobile via CSS class */}
              <div style={styles.quoteBox} className="hide-on-mobile">
                <span style={styles.quoteIcon}>“</span>
                <Text style={styles.quoteText}>
                  Passionate about building user-friendly and efficient web applications.
                </Text>
              </div>
            </div>
          </Col>

          {/* MAIN CONTENT - Full width on mobile (xs), 17/24 on desktop (md) */}
          <Col xs={24} md={17} style={styles.mainContent}>
            
            {/* HERO SECTION */}
            <div style={styles.heroSection}>
              <div style={styles.heroText}>
                <Title style={styles.nameHeader}>Lilit<br/>Hovhannisyan</Title>
                <Text style={styles.roleSubHeader}>{cv.role}</Text>
                <div style={styles.headerLinks} className="hide-on-mobile">
                   <Text style={{fontSize: '12px'}}><MailOutlined /> {cv.email}</Text>
                   <Text style={{fontSize: '12px', marginLeft: '10px'}}><GithubOutlined /> github.com</Text>
                </div>
              </div>
              <img src="./src/assets/cvPage.png" style={styles.heroImage} className="hero-img" alt="3d avatar" />
            </div>

            {/* ALL SECTIONS */}
            <div style={styles.sectionsContainer}>
              
              {/* SUMMARY */}
              <SectionTitle icon={<UserOutlined />} title="Summary" />
              <div style={{marginBottom: '20px'}}>
                <ReactMarkdown children={cv.summary} />
              </div>
              <Divider />

              {/* EXPERIENCE */}
              <SectionTitle icon={<SolutionOutlined />} title="Experience" />
              <div style={{marginBottom: '20px'}}>
                <ReactMarkdown children={cv.experience} />
              </div>
              <Divider />

              {/* EDUCATION */}
              <SectionTitle icon={<ReadOutlined />} title="Education" />
              <div style={{marginBottom: '20px'}}>
                <ReactMarkdown children={cv.education} />
              </div>
              <Divider />

              {/* CERTIFICATIONS - Added explicitly here */}
              <SectionTitle icon={<SafetyCertificateOutlined />} title="Certifications" />
              <div style={{marginBottom: '20px'}}>
                <ReactMarkdown children={cv.certifications} />
              </div>

              {/* FEATURE GRID CARDS */}
              <Row gutter={[16, 16]} style={{ marginTop: 40 }}>
                <Col xs={24} sm={8}>
                  <Card style={styles.featureCard} bordered={false}>
                    <CodeOutlined style={styles.featureIcon} />
                    <Title level={5} style={{fontSize: '14px'}}>Clean Code</Title>
                    <Text type="secondary" style={{fontSize: '11px'}}>Maintainable and scalable code.</Text>
                  </Card>
                </Col>
                <Col xs={24} sm={8}>
                  <Card style={styles.featureCard} bordered={false}>
                    <DesktopOutlined style={styles.featureIcon} />
                    <Title level={5} style={{fontSize: '14px'}}>Modern UI/UX</Title>
                    <Text type="secondary" style={{fontSize: '11px'}}>Responsive and user-friendly.</Text>
                  </Card>
                </Col>
                <Col xs={24} sm={8}>
                  <Card style={styles.featureCard} bordered={false}>
                    <RocketOutlined style={styles.featureIcon} />
                    <Title level={5} style={{fontSize: '14px'}}>Performance</Title>
                    <Text type="secondary" style={{fontSize: '11px'}}>Optimized for the best user speed.</Text>
                  </Card>
                </Col>
              </Row>

            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
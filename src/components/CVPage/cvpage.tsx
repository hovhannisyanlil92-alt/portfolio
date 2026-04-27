import { Row, Col, Typography, Tag, Button } from "antd";
import {
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { CV_TEXT } from "../../data/cv";
import { styles } from "./CVPageStyles";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ReactMarkdown from "react-markdown"

const { Title, Paragraph, Text } = Typography;

function parseCV(text: string) {
  const getSection = (title: string) => {
    const part = text.split(title)[1];
    if (!part) return "";
    return part.split("---")[0];
  };

  return {
    name: "Lilit Hovhannisyan",
    role: "Frontend Developer",

    summary: getSection("##  About Me"),
    experience: getSection("##  Experience"),
    education: getSection("##  Education"),
    certifications: getSection("##  Certifications"),
    frontendSkills: getSection("### FrontendSkills"),
    languages: getSection('## Languages')
  };
}

export default function CVPage() {
  const cv = parseCV(CV_TEXT);

  const handleDownload = async () => {
    const el = document.getElementById("cv");

    const canvas = await html2canvas(el!, { scale: 2 });
    const img = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const width = 210;
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(img, "PNG", 0, 0, width, height);
    pdf.save("CV.pdf");
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <Title level={2}>My CV</Title>
        <Button icon={<DownloadOutlined />} type="primary" onClick={handleDownload}>
          Download
        </Button>
      </div>

      <div id="cv" style={styles.cv}>
        <Row>
          {/* SIDEBAR */}
          <Col span={8} style={styles.sidebar}>
            <Title level={4} style={styles.white}>Contact</Title>

            <Paragraph style={styles.light}>
              <MailOutlined /> lilit.hovhannisyan.dev@gmail.com
            </Paragraph>

            <Paragraph style={styles.light}>
              <GithubOutlined /> github.com
            </Paragraph>

            <Paragraph style={styles.light}>
              <LinkedinOutlined /> linkedin.com
            </Paragraph>

            <Title level={4} style={styles.white}>Skills</Title>
            <div>
              <ReactMarkdown>{cv.frontendSkills}</ReactMarkdown>
            </div>
             <Title level={4} style={styles.white}>Languages</Title>
                <div>
                <ReactMarkdown>{cv.languages}</ReactMarkdown>
                </div>
          </Col>   

         <Col span={16} style={styles.main}>
            <Title>{cv.name}</Title>
            <Text type="secondary">{cv.role}</Text>

            {/* SUMMARY */}
            <div style={styles.section}>
                <Title level={3}>Summary</Title>
                <ReactMarkdown>{cv.summary}</ReactMarkdown>
            </div>

            {/* EXPERIENCE */}
            <div style={styles.section}>
                <Title level={3}>Experience</Title>
                <ReactMarkdown>{cv.experience}</ReactMarkdown>
            </div>

            {/* EDUCATION */}
            <div style={styles.section}>
                <Title level={3}>Education</Title>
                 <ReactMarkdown>{cv.education}</ReactMarkdown>
            </div>

            {/* CERTIFICATIONS */}
            <div style={styles.section}>
                <Title level={3}>Certifications</Title>
                <ReactMarkdown>{cv.certifications}</ReactMarkdown>
            </div>
        </Col>
        </Row>
      </div>
    </div>
  );
}
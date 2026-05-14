import React, { useRef, useState } from 'react';
import { Row, Col, Button, Typography, Space } from 'antd';
import { PlayCircleFilled, PauseCircleFilled, InfoCircleOutlined } from '@ant-design/icons';
import './style.css'; 
import VideoAvatar from '../assets/Avatar-Video.mp4'; 

const { Title, Paragraph, Text } = Typography;

const DigitalTwinSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="digital-twin-container">
      <Row gutter={[48, 32]} align="middle" justify="center">
        
        <Col xs={24} md={7} lg={7}>
          <div className="video-frame-wrapper">

            <video
                ref={videoRef}
                className="digital-twin-video"
                src={VideoAvatar}
                playsInline
                loop
                onLoadedMetadata={(e) => e.target.currentTime = 0.5} 
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                />

            <div className="video-controls">
              <Button 
                type="primary" 
                shape="round" 
                icon={isPlaying ? <PauseCircleFilled /> : <PlayCircleFilled />} 
                onClick={togglePlay}
                size="large"
                className="play-btn"
              >
                {isPlaying ? 'Pause' : 'Play Twin'}
              </Button>
            </div>
          </div>
        </Col>

        <Col xs={24} md={15} lg={14}>
          <div className="content-side">
            <Space direction="vertical" size="large">
              <div className="badge">
                <InfoCircleOutlined /> DIGITAL TWIN EXPERIENCE
              </div>
              
              <Title level={1} className="section-title">
                Meet My Digital Twin
              </Title>
              
              <Paragraph className="video-description">
                Experience the future of personal branding with my AI-powered <strong>Digital Twin</strong>. 
                This innovative technology bridge the gap between static content and interactive 
                communication, allowing me to present my expertise and projects in a more 
                engaging, dynamic way.
              </Paragraph>
            </Space>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DigitalTwinSection;
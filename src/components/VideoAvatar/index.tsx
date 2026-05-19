import { useRef, useState } from 'react';
import { Button, Typography } from 'antd';
import { PlayCircleFilled, PauseCircleFilled } from '@ant-design/icons';
import avatarVideo from '../../assets/Avatar-Video.mp4';
import { VIDEO_AVATAR_TEXT } from './consts';
import { videoAvatarStyles } from './styles';
import './styles.css';

const { Title, Paragraph } = Typography;

function VideoAvatar() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      void video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="video-avatar" className={videoAvatarStyles.section}>
      <article className={videoAvatarStyles.card}>
         <div className={videoAvatarStyles.content}>
           <header className={videoAvatarStyles.header}>
              <span className={videoAvatarStyles.eyebrow}>{VIDEO_AVATAR_TEXT.eyebrow}</span>
              <Title className={videoAvatarStyles.title} level={1}>{VIDEO_AVATAR_TEXT.title}</Title>
            </header>

          <Paragraph className={videoAvatarStyles.description}>
            {VIDEO_AVATAR_TEXT.description}
          </Paragraph>
        </div>
        <div className={videoAvatarStyles.media}>
          <video
            ref={videoRef}
            className={videoAvatarStyles.video}
            src={avatarVideo}
            playsInline
            loop
            onLoadedMetadata={(e) => {
              e.currentTarget.currentTime = 0.4;
            }}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          <div className={videoAvatarStyles.controls}>
            <Button
              type="text"
              shape="circle"
              className={videoAvatarStyles.playButton}
              icon={isPlaying ? <PauseCircleFilled /> : <PlayCircleFilled />}
              onClick={togglePlay}
              aria-label={isPlaying ? VIDEO_AVATAR_TEXT.pauseLabel : VIDEO_AVATAR_TEXT.playLabel}
            />
          </div>
        </div>
            
      </article>
    </section>
  );
}

export default VideoAvatar;

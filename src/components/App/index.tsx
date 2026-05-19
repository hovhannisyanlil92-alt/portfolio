import { useState } from 'react';
import {
  GithubOutlined,
  LinkedinOutlined,
  SendOutlined,
} from '@ant-design/icons';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Button } from 'antd';
import CVPage from '../CVPage';
import GeminiChat from '../GeminiChat';
import Home from '../Home';
import MouseEffect from '../MouseEffect';
import Navbar from '../Navbar';
import { APP_FOOTER } from './consts';
import './styles.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div id="cover-photo" className={`portfolio-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <MouseEffect isDarkMode={isDarkMode} />
      <Navbar isDarkMode={isDarkMode} onToggleTheme={() => setIsDarkMode((prev) => !prev)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/skills" element={<Navigate to="/#skills" replace />} />
        <Route path="/projects" element={<Navigate to="/#projects" replace />} />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />
        <Route path="/geminiText" element={<GeminiChat />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>

      <footer className="footer">
        <div className="container footer-inner">
          <span className="brand">{APP_FOOTER.brand}</span>
          <p>{APP_FOOTER.tagline}</p>
          <div className="footer-links">
            <Button
              shape="circle"
              icon={<GithubOutlined />}
              href="https://github.com/hovhannisyanlil92-alt"
              target="_blank"
              ghost
            />
            <Button
              href="https://t.me/LilitHovhannisyan_dev"
              target="_blank"
              shape="circle"
              icon={<SendOutlined />}
              ghost
            />
            <Button
              href="https://www.linkedin.com/in/lilit-hovhannisyan-729508211"
              target="_blank"
              shape="circle"
              icon={<LinkedinOutlined />}
              ghost
            />
            {/* <GithubOutlined />
            <LinkedinOutlined />
            <SendOutlined /> */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

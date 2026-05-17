import { useState } from 'react';
import {
  BehanceOutlined,
  GithubOutlined,
  LinkedinOutlined,
  SendOutlined,
} from '@ant-design/icons';
import { Navigate, Route, Routes } from 'react-router-dom';
import CVPage from '../CVPage';
import GeminiChat from '../GeminiChat';
import Home from '../Home';
import Navbar from '../Navbar';
import { APP_FOOTER } from './consts';
import './styles.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div id="cover-photo" className={`portfolio-page ${isDarkMode ? 'dark-mode' : ''}`}>
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
            <GithubOutlined />
            <LinkedinOutlined />
            <SendOutlined />
            <BehanceOutlined />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

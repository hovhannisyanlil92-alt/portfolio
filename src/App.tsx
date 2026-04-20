import { useState } from 'react'
import {
  BehanceOutlined,
  GithubOutlined,
  LinkedinOutlined,
  SendOutlined,
} from '@ant-design/icons'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className={`portfolio-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <Navbar isDarkMode={isDarkMode} onToggleTheme={() => setIsDarkMode((prev) => !prev)} />

      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className="footer">
        <div className="container footer-inner">
          <span className="brand">LH</span>
          <p>Built with love and React</p>
          <div className="footer-links">
            <GithubOutlined />
            <LinkedinOutlined />
            <SendOutlined />
            <BehanceOutlined />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

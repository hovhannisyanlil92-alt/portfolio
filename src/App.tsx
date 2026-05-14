import { useState } from 'react'
import {
  BehanceOutlined,
  GithubOutlined,
  LinkedinOutlined,
  SendOutlined,
} from '@ant-design/icons'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import GeminiText from './services/geminiText'
import CVPage from './components/CVPage/index'
import './App.css'



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    
    <div id='cover-photo' className={`portfolio-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <Navbar isDarkMode={isDarkMode} onToggleTheme={() => setIsDarkMode((prev) => !prev)} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/geminiText" element={<GeminiText/>}></Route>
          <Route path="/cv" element={<CVPage/>}></Route>
        </Routes>
       
       

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

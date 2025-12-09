import './CSS/App.css'
import { Routes, Route } from 'react-router-dom'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Home from './pages/Home'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
    </>
  );
}

export default App

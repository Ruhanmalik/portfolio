import './CSS/App.css'
import { Routes, Route } from 'react-router-dom'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'

function App() {
  return (
    <Routes>
      <Route path="/" element={<div><h1>Home Page</h1><p>Welcome to my portfolio</p></div>} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App

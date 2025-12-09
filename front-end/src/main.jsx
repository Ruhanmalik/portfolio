import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import App from './App.jsx'
import './CSS/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <NavBar />
      <App />
    </HashRouter>
  </StrictMode>,
)

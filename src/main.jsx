import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Navbar />
      <App />
      <Footer />
  </StrictMode>,
)

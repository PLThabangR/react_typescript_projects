import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { BsArrowUpSquare } from 'react-icons/bs'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
    </BrowserRouter>
  
)

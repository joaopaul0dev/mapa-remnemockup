import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BrasilMap from './components/BrasilMap'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrasilMap />
  </StrictMode>,
)

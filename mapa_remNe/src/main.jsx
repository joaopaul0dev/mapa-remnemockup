import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BrazilMap from './components/BrasilMap'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrazilMap />
  </StrictMode>,
)
1
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Statview from "./statView.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Statview/>
  </StrictMode>,
)

